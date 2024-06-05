'use client';
import React, { useState } from 'react';
import { frequencies, tiers } from '../../DATA/Pricing/Pricing';
import PricingOption from '../Pricing/PricingOption';
import PricingTierCard from '../Pricing/PricingTierCard';
import styles from '../../styles/pricing.module.css';

const PricingPage: React.FC = () => {
  const [frequency, setFrequency] = useState(frequencies[0]);
  const bannerText = "Get 25% off now for a limited time!";

  return (
    <div className={`flex flex-col w-full items-center ${styles.fancyOverlay}`}>
      <div className="w-full flex flex-col items-center mb-24">
        <div className="mx-auto max-w-7xl px-6 xl:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h1 className="text-black dark:text-white text-4xl font-semibold max-w-xs sm:max-w-none md:text-6xl !leading-tight">Pricing</h1>
            <p className="text-black dark:text-white mt-6 md:text-xl max-w-prose">
              Everyone should have the opportunity for growth. That’s why we offer a range of payment options.
            </p>
          </div>

          {bannerText && (
            <div className="flex justify-center my-4">
              <p className="px-4 py-3 text-xs bg-slate-100 text-black dark:bg-slate-300/30 dark:text-white/80 rounded-xl">{bannerText}</p>
            </div>
          )}

          {frequencies.length > 1 && (
            <div className="mt-16 flex justify-center">
              <div
                role="radiogroup"
                className="grid gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 bg-white dark:bg-black ring-1 ring-inset ring-gray-200/30 dark:ring-gray-800"
                style={{ gridTemplateColumns: `repeat(${frequencies.length}, minmax(0, 1fr))` }}
              >
                <p className="sr-only">Payment frequency</p>
                {frequencies.map((option) => (
                  <PricingOption
                    key={option.value}
                    option={option}
                    selected={frequency.value === option.value}
                    onSelect={(value) => setFrequency(frequencies.find(f => f.value === value) as PricingTierFrequency)}
                  />
                ))}
              </div>
            </div>
          )}

          <PricingTierCard tier={tiers[0]} frequency={frequency} />
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
