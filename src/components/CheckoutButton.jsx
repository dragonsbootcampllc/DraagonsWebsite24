import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutButton() {
    async function handleCheckout() {
        // Get Stripe.js instance
        const stripe = await stripePromise;

        const planNumber = 1;
        const response = await fetch('/api/create-checkout-session', {
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

    return (
        <button role="link" onClick={handleCheckout}>
            Checkout
        </button>
    );
}