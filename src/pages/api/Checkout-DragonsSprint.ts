import path from "path";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from 'next';
import { Stripe } from 'stripe';
import { clerkClient } from '@clerk/nextjs/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10', // Updated to a current version
});

const isDevelopment = process.env.NODE_ENV === 'development';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      // Read the JSON data file CareerSprint.json
      const fileContents = await fs.readFile(
        path.join(process.cwd(), "src", "DATA", "Pricing", "DragonsSprint", "CareerSprint.json"),
        "utf8"
      );
      // Parse the JSON data into a JavaScript object
      const jsonData = JSON.parse(fileContents);
      const plan = {
        name: jsonData.sprintName,
        price: jsonData.price
      };

      // Get the user ID from the request body
      const { userId, courseSlug } = req.body;

      if (!userId || !courseSlug) {
        return res.status(400).json({ error: 'Missing userId or courseSlug' });
      }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
          price_data: {
            currency: 'usd',
            product_data: {
              name: plan.name,
            },
            unit_amount: plan.price * 100, // Amount in cents
          },
          quantity: 1,
        }],
        mode: "payment",
        success_url: isDevelopment
          ? `http://localhost:3000/DragonsSprints/${courseSlug}?success=true`
          : `https://dragons.divzoon.com/DragonsSprints/${courseSlug}?success=true`,
        cancel_url: isDevelopment
          ? `http://localhost:3000/DragonsSprints/${courseSlug}?canceled=true`
          : `https://dragons.divzoon.com/DragonsSprints/${courseSlug}?canceled=true`,
        metadata: {
          userId: userId,
          courseSlug: courseSlug,
        },
      });

      console.log("Checkout session created:", session.id);
      res.status(200).json({ sessionId: session.id });
    } catch (err: any) {
      console.error("Checkout error:", err);
      res.status(500).json({ error: "An error occurred during checkout" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

// Webhook handler
export const config = {
  api: {
    bodyParser: false,
  },
};

async function buffer(readable: any) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const buf = await buffer(req);
  const sig = req.headers['stripe-signature']!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    
    const userId = session.metadata?.userId;
    const courseSlug = session.metadata?.courseSlug;

    if (userId && courseSlug) {
      try {
        const user = await clerkClient.users.getUser(userId);
        const currentCourses: string[] = user.publicMetadata.courses as string[] || [];
        
        await clerkClient.users.updateUser(userId, {
          publicMetadata: {
            ...user.publicMetadata,
            courses: [...currentCourses, courseSlug],
          },
        });
        
        console.log(`Added course ${courseSlug} to user ${userId}`);
      } catch (error) {
        console.error('Error updating user metadata:', error);
      }
    }
  }

  res.json({ received: true });
}