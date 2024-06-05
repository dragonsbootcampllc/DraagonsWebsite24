import React from 'react';
import { PricingTier } from '../../DATA/Pricing/Pricing';
import CheckIcon from '../CheckIcon';
import styles from '../../styles/pricing.module.css';

interface PricingTierCardProps {
  tier: PricingTier;
  frequency: string;
}

const PricingTierCard: React.FC<PricingTierCardProps> = ({ tier, frequency }) => {
  const frequencyValue = frequency.value; // Accessing the frequency value
  const discountPrice = typeof tier.discountPrice === 'string' ? tier.discountPrice : tier.discountPrice[frequencyValue];
  const price = typeof tier.price === 'string' ? tier.price : tier.price[frequencyValue];

  return (
    <div className="flex flex-wrap xl:flex-nowrap items-center bg-white dark:bg-gray-900/80 backdrop-blur-md mx-auto mt-4 max-w-2xl rounded-3xl ring-1 ring-gray-300/70 dark:ring-gray-700 xl:mx-0 xl:flex xl:max-w-none">
      <div className="p-8 sm:p-10 xl:flex-auto">
        <h3 className="text-black dark:text-white text-2xl font-bold tracking-tight">{tier.name}</h3>
        <p className="mt-6 text-base leading-7 text-gray-700 dark:text-gray-400">{tier.description}</p>
        <div className="mt-12 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-black dark:text-white">Included features</h4>
          <div className="h-px flex-auto bg-gray-100 dark:bg-gray-700" />
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-700 dark:text-gray-400">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-center gap-x-2 text-sm">
              <CheckIcon className="h-6 w-6 flex-none text-slate-500" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="-mt-2 p-2 xl:pr-8 xl:mt-0 w-full xl:max-w-md xl:flex-shrink-0">
        <div className={`${styles.fancyGlass} rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-300/50 dark:ring-gray-800/50 xl:flex xl:flex-col xl:justify-center xl:py-16`}>
          <div className="mx-auto max-w-xs px-8">
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className={`text-black dark:text-white text-5xl font-bold tracking-tight ${discountPrice ? 'line-through' : ''}`}>{price}</span>
              <span className="text-black dark:text-white">{discountPrice}</span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-700 dark:text-gray-400">{frequency.priceSuffix}</span>
            </p>
            <a href={tier.href} className="flex justify-center mt-8 flex-shrink-0">
              <button className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-300/70 text-slate-foreground hover:bg-slate-300/90 dark:bg-slate-700 dark:hover:bg-slate-700/90 text-black dark:text-white h-12 rounded-md px-6 sm:px-10 text-md">
                {tier.cta}
              </button>
            </a>
            <p className="mt-2 text-xs leading-5 text-gray-700 dark:text-gray-400">Sign up in seconds, no credit card required.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTierCard;
