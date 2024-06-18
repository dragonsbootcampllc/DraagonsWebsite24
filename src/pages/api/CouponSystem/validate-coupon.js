// pages/api/validate-coupon.js

import fs from 'fs';
import path from 'path';


const filePath = path.resolve('src/components/Pricing/coupons.json');
const PricePath = path.resolve('src/DATA/Pricing/Pricing.ts');

const readCoupons = () => {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

const writeCoupons = (coupons) => {
  fs.writeFileSync(filePath, JSON.stringify(coupons, null, 2), 'utf8');
};
const readPricing = () => {
    const data = fs.readFileSync(PricePath, 'utf8');
    let pricing;
    try {
        pricing = JSON.parse(data);
    } catch (error) {
        console.error('Error parsing Pricing.ts:', error);
        pricing = {}; 
    }
    console.log(pricing);
    return pricing;
};

const writePricing = (pricing) => {
    fs.writeFileSync(PricePath, JSON.stringify(pricing, null, 2), 'utf8');
};


export default function handler(req, res) {
    if (req.method === 'POST') {
        const { coupon } = req.body;
        const coupons = readCoupons();
        const pricing = readPricing();

        if (coupons[coupon]) {
            if (coupons[coupon].used < coupons[coupon].usageLimit) {
                coupons[coupon].used += 1;
                writeCoupons(coupons);

                // Update the price in Pricing.ts
                pricing.price = coupons[coupon].discount;
                writePricing(pricing);

                res.status(200).json({ valid: true, discount: coupons[coupon].discount });
            } else {
                res.status(200).json({ valid: false, message: 'Coupon usage limit reached' });
            }
        } else {
            res.status(200).json({ valid: false, message: 'Invalid coupon code' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}