import React, { useState } from "react";
import { PricingTier, PricingTierFrequency } from "../../DATA/Pricing/Pricing";
import styles from "../../styles/pricing.module.css";
import ButtonComponent from "../Micros/Button";

interface PricingTierCardProps {
  tier: PricingTier;
  frequency: PricingTierFrequency;
}

const PricingTierCard: React.FC<PricingTierCardProps> = ({
  tier,
  frequency,
}) => {
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState('');

  const handleApplyCoupon = async () => {
    try {
      const response = await fetch('/api/CouponSystem/validate-coupon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ coupon }),
      });
      const data = await response.json();

      if (data.valid) {
        setDiscount(data.discount);
        setError('');
      } else {
        setError(data.message || 'Invalid coupon code');
        setDiscount(0);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleCouponChange = (e: any) => {
    setCoupon(e.target.value);
  };

  const frequencyValue = frequency.value; // Accessing the frequency value
  const discountPrice =
    typeof tier.discountPrice === "string"
      ? tier.discountPrice
      : tier.discountPrice[frequencyValue as unknown as number] ?? "";
  const price =
    typeof tier.price === "string"
      ? tier.price
      : tier.price[frequencyValue as unknown as number] ?? "";

  return (
    <div className='flex flex-wrap xl:flex-nowrap items-center bg-gray-900/80 backdrop-blur-md mx-auto mt-4 max-w-2xl rounded-3xl ring-1 ring-gray-300/70 dark:ring-gray-700 xl:mx-0 xl:flex xl:max-w-none'>
      <div className='p-8 sm:p-10 xl:flex-auto'>
        <h3 className='text-white text-2xl font-bold tracking-tight'>
          {tier.name}
        </h3>
        <p className='mt-6 text-base leading-7 text-gray-400'>
          {tier.description}
        </p>
        <div className='mt-12 flex items-center gap-x-4'>
          <div className='h-px flex-auto bg-gray-700' />
        </div>
        {/* //copune code */}
        <div className='mt-4 text-center grid place-items-center gap-4'>
          <h1 className='text-2xl text-gray-400'>Have a coupon code?</h1>
          <input
            type='text'
            className='mt-2 px-4 py-2 border  rounded-md focus:outline-none focus:ring-2 w-full h-16 focus:ring-blue-500 focus:border-transparent bg-gray-800 border-gray-600'
            placeholder='Enter coupon code'
            value={coupon}
            onChange={handleCouponChange}
          />

          <div onClick={handleApplyCoupon} className='h-16 w-64'>
            <ButtonComponent CTAtext=' Apply Coupon' />
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      </div>
      <div className='-mt-2 p-2 xl:pr-8 xl:mt-0 w-full xl:max-w-md xl:flex-shrink-0'>
        <div
          className={`${styles.fancyGlass} rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-800/50 xl:flex xl:flex-col xl:justify-center xl:py-16`}>
          <div className='mx-auto max-w-xs px-8'>
            <p className='mt-6 flex items-baseline justify-center gap-x-2'>
              <span
                className={`:text-white text-5xl font-bold tracking-tight ${discountPrice ? " line-through  " : ""}`}>
                {price}
              </span>
              <span className='text-white'>{discountPrice}</span>
              <span className='text-sm font-semibold leading-6 tracking-wide text-gray-400'>
                {frequency.priceSuffix}
              </span>
            </p>
            <a
              href={tier.href}
              className='flex justify-center mt-8 flex-shrink-0'>
              <div className="h-16 w-64">
                <ButtonComponent CTAtext={tier.cta} />
              </div>
            </a>
            <p className='mt-2 text-xs leading-5 text-gray-400'>
              Sign up in seconds, no credit card required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTierCard;
