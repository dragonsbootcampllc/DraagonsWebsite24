import fs from 'fs';
import path from 'path';

// Paths to the JSON files
const couponsFilePath = path.resolve('src/components/Pricing/coupons.json');

// Function to read coupons data
const readCoupons = () => {
  try {
    const data = fs.readFileSync(couponsFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading coupons.json:', error);
    return null;
  }
};

// Function to write coupons data
const writeCoupons = (coupons) => {
  try {
    fs.writeFileSync(couponsFilePath, JSON.stringify(coupons, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing coupons.json:', error);
  }
};

// Coupon validation and discount application handler
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Read existing coupons data
    const { coupon, program } = req.body;

    const coupons = readCoupons();
    if (!coupons || !coupons[program] || !coupons[program][coupon]) {
      return res.status(404).json({ message: 'Invalid coupon code' });
    }

    const selectedCoupon = coupons[program][coupon];
    // Check if the coupon usage limit is reached
    if (selectedCoupon.used >= selectedCoupon.usageLimit) {
      return res.status(403).json({ message: 'Coupon usage limit reached' });
    }

    selectedCoupon.used += 1;
    writeCoupons(coupons);
    return res.status(200).json({ discount: selectedCoupon.discount });
  } else {
    // Handle method not allowed
    res.status(405).json({ message: 'Method not allowed' });
  }
}
