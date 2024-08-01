import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useUser, SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import { useRouter } from 'next/router';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

interface CheckoutButtonProps {
  CTAtext: string;
  createCheckoutSession: string;
  className?: string;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = React.memo(
  ({ CTAtext, createCheckoutSession, className }) => {
    const { isSignedIn, user } = useUser();
    const router = useRouter();
    const { slug } = router.query;
    const { openSignIn } = useClerk();

    const handleCheckout = async () => {
      if (!isSignedIn) {
        // If not signed in, open the sign-in modal
        openSignIn({
          redirectUrl: router.asPath, // Redirect back to the current page after sign-in
        });
        return;
      }

      const stripe = await stripePromise;
      if (!stripe) {
        console.error("Stripe failed to initialize");
        return;
      }

      try {
        const response = await fetch(createCheckoutSession, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            //open cors
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            userId: user.id,
            courseSlug: slug,
          }),
        });
      
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      
        const session = await response.json();
      
        const result = await stripe.redirectToCheckout({
          sessionId: session.sessionId,
        });
      
        if (result.error) {
          throw new Error(result.error.message);
        }
      } catch (error) {
        console.error("Error during checkout:", error);
        alert("An error occurred during checkout. Please try again.");
      }
    };

    const buttonClassName = `relative animate-shimmer bg-gradient-to-r from-purple-700 to-purple-900 group/buttonComponent cursor-pointer shadow-2xl rounded-full p-px text-white font-bold leading-6 inline-block w-full h-full ${className}`;

    return (
      <button onClick={handleCheckout} className={buttonClassName}>
        <span className='absolute inset-0 overflow-hidden rounded-full'>
          <span className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rotate-180' />
        </span>
        <div className='relative flex items-center justify-center h-full w-full z-10 rounded-full py-2 px-4 ring-1 ring-white/10 text-base sm:text-lg md:text-xl'>
          <span>{CTAtext}</span>
        </div>
        <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] animate-pulse bg-gradient-to-r from-emerald-400/0 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40' />
      </button>
    );
  }
);

export default CheckoutButton;