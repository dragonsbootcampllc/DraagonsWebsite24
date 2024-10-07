import { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { TbCircleCheck } from "react-icons/tb";

const Pricing = () => {
  const [region, setRegion] = useState<'Egypt' | 'International'>('Egypt');
  const [basicPlanSize, setBasicPlanSize] = useState<'Small' | 'Medium' | 'Large'>('Medium');
  const [individualPlanSize, setIndividualPlanSize] = useState<'Small' | 'Medium' | 'Large'>('Medium');
  const [professionalPlanSize, setProfessionalPlanSize] = useState<'Small' | 'Medium' | 'Large'>('Large');

  return (
    <div className="container mx-auto px-4 py-10">

      <div className='flex flex-col items-center justify-center mt-12 mb-10'>
        <div className="mb-2">
          <h3 className="text-2xl mb-4 border border-purple-700 rounded-md px-4 py-2 text-center">Pricing Plans</h3>
        </div>
        <h2 className='text-center text-2xl font-bold mb-1'>
          Choose a plan that fits your needs
        </h2>
        <p className='text-center max-w-[550px]'>
          Choose a plan that fits your plan that fits your needs Choose a plan that fits your needs Choose a plan that fits your needs
        </p>
      </div>



      {/* Region Toggle */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-2 w-56 py-2 flex gap-2 items-center rounded-md mx-2 ${region === 'Egypt' ? 'bg-purple-500/20 border border-purple-700 text-white' : 'border border-purple-700 text-white'}`}
          onClick={() => setRegion('Egypt')}
        >
          <FaHome className='text-4xl rounded-full' />
          <div className='flex text-start flex-col'>
            <span className='text-xl'>Egypt</span>
            <span className='text-sm'>3 Tiers plans</span>
          </div>
        </button>
        <button
          className={`px-2 py-2 flex gap-2 items-center w-56 rounded-md mx-2 ${region === 'International' ? 'bg-purple-500/20 border border-purple-700 text-white' : 'border border-purple-700 text-white'}`}
          onClick={() => setRegion('International')}
        >
          <TiWorld className='text-4xl rounded-full' />
          <div className='flex text-start flex-col'>
            <span className='text-xl'>International</span>
            <span className='text-sm'>3 Tiers plans</span>
          </div>
        </button>
      </div>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 px-36 gap-6">
        {/* Basic Plan */}
        <div className="border border-purple-700 rounded-lg p-6 bg-purple-800/20 shadow-md">
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl">Basic</h3>
            <h3 className=' text-white bg-purple-800/20 px-3 py-1 rounded'>One time fee</h3>
          </div>
          <h2 className='py-4'>enim ipsum maxime hic laudantium exercitationem repellendus adipisci totam</h2>
          {/* Basic Plan Size Toggle */}
          <div className="flex justify-around gap-3 mb-4">
            {['Small', 'Medium', 'Large'].map((size) => (
              <button
                key={size}
                className={`px-3 rounded-md w-[calc(100%/3)] py-1 ${basicPlanSize === size ? 'bg-purple-500/20 border border-purple-700 text-white' : 'border border-purple-700 text-white'}`}
                onClick={() => setBasicPlanSize(size as 'Small' | 'Medium' | 'Large')}
              >
                {size}
              </button>
            ))}
          </div>
          <div className='pb-2 border-b border-dotted'>
            <p className="mb-2">Players per week: {basicPlanSize === 'Small' ? 'up to 5,000' : basicPlanSize === 'Medium' ? 'up to 10,000' : 'up to 20,000'}</p>
            <p className="mb-2">Monthly cost: {basicPlanSize === 'Small' ? '$29.99' : basicPlanSize === 'Medium' ? '$42.99' : '$59.99'}</p>
          </div>
          <ul className='mt-4'>
            <li className='flex items-center gap-2'><TbCircleCheck />Auto-update existing reports</li>
            <li className='flex items-center gap-2'><TbCircleCheck />Unlimited shortlists</li>
            <li className='flex items-center gap-2'><TbCircleCheck />International career included</li>
          </ul>
          <button className="mt-4 w-full bg-purple-700 text-white py-2 rounded">Select Plan</button>
        </div>

        {/* Individuals Plan */}
        <div className="border border-purple-700 rounded-lg p-6 bg-purple-800/20 shadow-md">
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl">Individuals</h3>
            <h3 className=' text-white bg-purple-800/20 px-3 py-1 rounded'>One time fee</h3>
          </div>
          <h2 className='py-4'>enim ipsum maxime hic laudantium exercitationem repellendus adipisci totam</h2>
          {/* Individuals Plan Size Toggle */}
          <div className="flex justify-around gap-3 mb-4">
            {['Small', 'Medium', 'Large'].map((size) => (
              <button
                key={size}
                className={`px-3 rounded-md w-[calc(100%/3)] py-1 ${individualPlanSize === size ? 'bg-purple-700 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setIndividualPlanSize(size as 'Small' | 'Medium' | 'Large')}
              >
                {size}
              </button>
            ))}
          </div>
          <div className='pb-2 border-b border-dotted'>
            <div className="mb-2 flex justify-between"><p className='text-gray-400'>Players per week:</p> <span>{individualPlanSize === 'Small' ? 'up to 5,000' : individualPlanSize === 'Medium' ? 'up to 10,000' : 'up to 20,000'}</span></div>
            <div className="mb-2 flex justify-between"><p className='text-gray-400'>Monthly cost:</p> <span>{individualPlanSize === 'Small' ? '$29.99' : individualPlanSize === 'Medium' ? '$42.99' : '$59.99'}</span></div>
          </div>
          <ul className='mt-4'>
            <li className='flex items-center gap-2'><TbCircleCheck />Auto-update existing reports</li>
            <li className='flex items-center gap-2'><TbCircleCheck />Unlimited shortlists</li>
            <li className='flex items-center gap-2'><TbCircleCheck />International career included</li>
          </ul>
          <button className="mt-4 w-full bg-purple-700 text-white py-2 rounded">Select Plan</button>
        </div>

        {/* Professionals Plan */}
        <div className="border border-purple-700 rounded-lg p-6 bg-purple-800/20 shadow-md">
          <div className='flex justify-between items-center'>
            <h3 className="text-2xl">Professionals</h3>
            <h3 className=' text-white bg-purple-800/20 px-3 py-1 rounded'>One time fee</h3>
          </div>
          <h2 className='py-4'>enim ipsum maxime hic laudantium exercitationem repellendus adipisci totam</h2>
          {/* Professionals Plan Size Toggle */}
          <div className="flex justify-around gap-3 mb-4">
            {['Small', 'Medium', 'Large'].map((size) => (
              <button
                key={size}
                className={`px-3 rounded-md w-[calc(100%/3)] py-1 ${professionalPlanSize === size ? 'bg-purple-700 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setProfessionalPlanSize(size as 'Small' | 'Medium' | 'Large')}
              >
                {size}
              </button>
            ))}
          </div>
          <div className='pb-2 border-b border-dotted'>
            <p className="mb-2">Players per week: {professionalPlanSize === 'Small' ? 'up to 5,000' : professionalPlanSize === 'Medium' ? 'up to 10,000' : 'up to 20,000'}</p>
            <p className="mb-2">Monthly cost: {professionalPlanSize === 'Small' ? '$29.99' : professionalPlanSize === 'Medium' ? '$42.99' : '$59.99'}</p>
          </div>
          <ul className='mt-4'>
            <li className='flex items-center gap-2'><TbCircleCheck /> Auto-update existing reports</li>
            <li className='flex items-center gap-2'><TbCircleCheck /> Unlimited shortlists</li>
            <li className='flex items-center gap-2'><TbCircleCheck /> International career included</li>
          </ul>
          <button className="mt-4 w-full bg-purple-700 text-white py-2 rounded">Select Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
