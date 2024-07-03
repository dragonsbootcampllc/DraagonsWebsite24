import path from "path";
import { promises as fs } from "fs";
const stripe = require("stripe")(

process.env.STRIPE_SECRET_KEY
);

export default async function handler(req: any, res: any) {
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
            success_url: `http://localhost:3000/?success=true`,
            cancel_url: `http://localhost:3000/?canceled=true`,
        });
        console.log(session.url);
        res.status(200).json({ sessionId: session.id });
    } catch (err: any) {
        res.status(err.statusCode || 500).json(err.message);
    }
} else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
}
}
