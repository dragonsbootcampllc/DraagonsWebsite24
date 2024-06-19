import React, { useState } from 'react';
import  frequencies  from '../../DATA/Pricing/frequencies.json';
import  PricingTier   from '../../DATA/Pricing/tiers.json';


import PricingOption from './PricingOption';
import PricingTierCard from './PricingTierCard';
import styles from '../../styles/pricing.module.css';

  export interface PricingTierType {
    name: string;
    id: string;
    href: string;
    discountPrice:Record<number,string >;
    price:  Record<number,string >;
    description: string | React.ReactNode;
    features: string[];
    featured?: boolean;
    highlighted?: boolean;
    cta: string;
    soldOut?: boolean;
  }
const PricingPage: React.FC = () => {
  const [frequency, setFrequency] = useState(frequencies[0]);

  const handleFrequencyChange = (value: string) => {
    const selectedFrequency = frequencies.find(f => f.value === value);
    if (selectedFrequency) {
      setFrequency(selectedFrequency);
    }
  };

  const bannerText = "Get 25% off now for a limited time!";

  return (
    <div className={`flex flex-col w-full items-center ${styles.fancyOverlay}`}>
      <div className="w-full flex flex-col items-center mb-24">
        <div className="mx-auto max-w-7xl px-6 xl:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h1 className="text-white text-4xl font-semibold max-w-xs sm:max-w-none md:text-6xl leading-tight">Pricing</h1>
            <p className="text-white mt-6 md:text-xl max-w-prose">
              Everyone should have the opportunity for growth. That’s why we offer a range of payment options.
            </p>
          </div>

          {bannerText && (
            <div className="flex justify-center my-4">
              <p className="px-4 py-3 text-sm font-medium bg-yellow-400/40 text-black rounded-xl">{bannerText}</p>
            </div>
          )}

          {frequencies.length > 1 && (
            <div className="mt-16 flex justify-center">
              <div
                role="radiogroup"
                className="grid gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 bg-black ring-1 ring-inset ring-gray-800"
                style={{ gridTemplateColumns: `repeat(${frequencies.length}, minmax(0, 1fr))` }}
              >
                <p className="sr-only">Payment frequency</p>
                {frequencies.map((option) => (
                  <PricingOption
                    key={option.value}
                    option={option}
                    selected={frequency.value === option.value}
                    onSelect={handleFrequencyChange}
                  />
                ))}
              </div>
            </div>
          )}

          <PricingTierCard tier={PricingTier[0] as PricingTierType} frequency={frequency} />
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
