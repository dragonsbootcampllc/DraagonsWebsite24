export interface PricingTierFrequency {
    id: string;
    value: string;
    label: string;
    priceSuffix: string;
  }
  
  export interface PricingTier {
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
  
  export const frequencies: PricingTierFrequency[] = [
    { id: '1', value: '1', label: 'Pay Cash', priceSuffix: '/One time' },
    { id: '2', value: '2', label: '6 m installment', priceSuffix: '/month' },
    { id: '3', value: '3', label: '12 m installment', priceSuffix: '/month' },
    { id: '4', value: '4', label: '18 m installment', priceSuffix: '/month' },
  ];
  
  export const tiers: PricingTier[] = [
    {
      name: 'Dragons Bootcamp Program',
      id: '0',
      href: '/apply',
      price: { 1: '$499', 2: '$499', 3: '$699', 4: '$799' },
      discountPrice: { 1: '$399', 2: '$399', 3: '$559', 4: '$639' },
      description: `Our 6-month Bootcamp is tailored to make you job-ready.`,
      features: [
        `Learn what companies are looking for`,
        `Become a Thought Leader`,
        `Level Up, Get Seen`,
        `Strong Industry Connections`,
        `Supportive Community`,
      ],
      featured: false,
      highlighted: false,
      soldOut: false,
      cta: `Apply Now`,
    },
  ];
  