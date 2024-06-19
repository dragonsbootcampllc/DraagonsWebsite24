import React from 'react';
export interface PricingTierFrequency {
    id: string;
    value: string;
    label: string;
    priceSuffix: string;
  }
  

interface PricingOptionProps {
  option: PricingTierFrequency;
  selected: boolean;
  onSelect: (value: string) => void;
}

const PricingOption: React.FC<PricingOptionProps> = ({ option, selected, onSelect }) => (
  <label
    className={`cursor-pointer rounded-full px-2.5 py-2 transition-all ${selected ? 'bg-slate-500/90 text-white' : 'bg-transparent text-gray-500 hover:bg-slate-500/10'}`}
    htmlFor={option.value}
  >
    {option.label}
    <button
      value={option.value}
      id={option.value}
      className="hidden"
      role="radio"
      aria-checked={selected}
      onClick={() => onSelect(option.value)}
    >
      {option.label}
    </button>
  </label>
);

export default PricingOption;
