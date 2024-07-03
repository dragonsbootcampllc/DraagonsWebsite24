import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');
interface ButtonComponentProps {
  CTAtext: string;
  className?: string;
  type?: 'button' | 'link'; // Specify possible types
  href?: string; // href is required if type is 'link'
  props?: any
  onClick?: () => void;
  createCheckoutSession: string; // Add createCheckoutSession prop
}

const CheckoutButton: React.FC<ButtonComponentProps> = ({
    CTAtext,
    type = 'button', // Default to 'button'
    href,
    className,
    createCheckoutSession, // Destructure createCheckoutSession prop
    ...props
  }) => {
    async function handleCheckout() {
        // Get Stripe.js instance
        const stripe = await stripePromise;
        if (!stripe) {
          return; // or handle the error accordingly
        }

        const planNumber = 1;
        const response = await fetch(createCheckoutSession, { // Use createCheckoutSession prop
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                plan: planNumber
            })
        });
        const session = await response.json();

        // When the customer clicks on the button, redirect them to Checkout
        const result = await stripe.redirectToCheckout({
            sessionId: session.sessionId,
        });

        if (result.error) {
            alert(result.error.message);
        }
    }
    const buttonClassName = `relative animate-shimmer bg-[linear-gradient(110deg,#7B1FA2,45%,#CE93D8,55%,#7B1FA2)] bg-[length:200%_100%] bg-purple-700 group/buttonComponent cursor-pointer shadow-2xl rounded-full p-px text-white font-bold leading-6 inline-block w-full h-full ${className}`;

    return (
         <button role="link" onClick={handleCheckout} className={buttonClassName} {...props}>
         <span className='absolute inset-0 overflow-hidden rounded-full'>
           <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover/buttonComponent:opacity-100 rotate-180' />
         </span>
         <div className='relative flex items-center justify-center h-full w-full z-10 rounded-full py-2 px-4 ring-1 ring-white/10 text-base sm:text-lg md:text-xl'>
           <span>
             {CTAtext}
           </span>
         </div>
         <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] animate-pulse bg-gradient-to-r from-emerald-400/0 to-emerald-400/0 transition-opacity duration-500 group-hover/buttonComponent:opacity-40' />
       </button>
    );
}

export default CheckoutButton;