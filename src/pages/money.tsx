import { useState } from 'react';

const Pricing = () => {
  const [region, setRegion] = useState<'Egypt' | 'International'>('Egypt');
  const [basicPlanSize, setBasicPlanSize] = useState<'Small' | 'Medium' | 'Large'>('Medium');

  return (
    <div className="container mx-auto px-4 py-8">

    <div>
      <div> </div>
    </div>

      {/* Region Toggle */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 rounded-md mx-2 ${region === 'Egypt' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setRegion('Egypt')}
        >
          Egypt
        </button>
        <button
          className={`px-4 py-2 rounded-md mx-2 ${region === 'International' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setRegion('International')}
        >
          International
        </button>
      </div>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Basic Plan */}
        <div className="border rounded-lg p-6 bg-white shadow-md">
          <h3 className="text-lg font-semibold mb-4">Basic</h3>
          {/* Basic Plan Size Toggle */}
          <div className="flex justify-around mb-4">
            {['Small', 'Medium', 'Large'].map((size) => (
              <button
                key={size}
                className={`px-3 py-1 ${basicPlanSize === size ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setBasicPlanSize(size as 'Small' | 'Medium' | 'Large')}
              >
                {size}
              </button>
            ))}
          </div>
          <p className="mb-2">Players per week: {basicPlanSize === 'Small' ? 'up to 5,000' : basicPlanSize === 'Medium' ? 'up to 10,000' : 'up to 20,000'}</p>
          <p className="mb-2">Monthly cost: {basicPlanSize === 'Small' ? '$29.99' : basicPlanSize === 'Medium' ? '$42.99' : '$59.99'}</p>
          <ul className="list-disc pl-6">
            <li>Auto-update existing reports</li>
            <li>Unlimited shortlists</li>
            <li>International career included</li>
          </ul>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">Select Plan</button>
        </div>

        {/* Individuals Plan */}
        <div className="border rounded-lg p-6 bg-white shadow-md">
          <h3 className="text-lg font-semibold mb-4">Individuals</h3>
          <p className="mb-2">450,000 players</p>
          <p className="mb-2">One-time payment: $13500.00</p>
          <ul className="list-disc pl-6">
            <li>Basic features included</li>
            <li>Match highlights</li>
            <li>Junior career history</li>
            <li>Huge reports storage</li>
          </ul>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">Select Plan</button>
        </div>

        {/* Professionals Plan */}
        <div className="border rounded-lg p-6 bg-white shadow-md">
          <h3 className="text-lg font-semibold mb-4">Professionals</h3>
          <p className="mb-2">Custom size</p>
          <ul className="list-disc pl-6">
            <li>Previous plans features included</li>
            <li>Up to 8 staff members per account</li>
            <li>Player development plans</li>
            <li>Advanced AI analytics</li>
          </ul>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">Select Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
