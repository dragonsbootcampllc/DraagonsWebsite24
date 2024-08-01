import React, { useState } from 'react';
import frequencies from '../../DATA/Pricing/frequencies.json';
import PricingTier from '../../DATA/Pricing/tiers.json';
import PricingOption from './PricingOption';
import PricingTierCard from './PricingTierCard';
import styles from '../../styles/pricing.module.css';



const PricingPage: React.FC = () => {
  const [frequency, setFrequency] = useState(frequencies[0]);

  const handleFrequencyChange = (value: string) => {
    const selectedFrequency = frequencies.find((f) => f.value === value);
    if (selectedFrequency) {
      setFrequency(selectedFrequency);
    }
  };

  const bannerText = "Get 25% off now for a limited time!";

  return (
    <div className={`flex flex-col w-full items-center ${styles.fancyOverlay}`}>
      <div className="container mx-auto w-full flex flex-col gap-8 justify-center items-center mb-24">

        <div className="text  max-w-[1000px]">
          <div
            style={{ fontFamily: "interV" }}
            className="text-4xl md:text-6xl lg:text-7xl content-center max-w-4xl text-center z-10 flex justify-center m-auto relative mb-3 text-gray-200 font-semibold"
          >
            <h1>
              <span className="bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text">Empower </span> Your Success with Dragons Bootcamp
            </h1>
          </div>
          <p className="text-base md:text-xl text-center mt-4 mb-8 text-white/70">
            Everyone should have the opportunity for growth. That’s why we offer a range of payment options.
          </p>
        </div>

        {bannerText && (
          <div className="flex justify-center my-4">
            <p className="px-4 py-3 text-sm font-semibold bg-yellow-400/40 text-white rounded-xl">{bannerText}</p>
          </div>
        )}



        {/* {frequencies.length > 1 && (
            <div className="mt-16 relative flex justify-center">
              <div className='w-full grid place-items-center absolute   '>
                <span className='text-2xl mt-1 text-white font-semibold'>installments Available Soon</span>
              </div>
              <div
                role="radiogroup"
                className="grid gap-x-1 opacity-30 bg-purple-800/20 rounded-full p-1 text-center text-xs font-semibold leading-5 bg-black ring-1 ring-inset ring-gray-800"
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
          )} */}


        {/* Assuming PricingTier is an array of PricingTierType */}
        <div className='flex flex-col max-w-[1000px] gap-6'>
          <PricingTierCard tier={PricingTier[0] as any} frequency={frequency as any} />
          <PricingTierCard tier={PricingTier[1] as any} frequency={frequency as any} />
          <PricingTierCard tier={PricingTier[2] as any} frequency={frequency as any} />
        </div>
      </div>

    </div>
  );
};

export default PricingPage;
