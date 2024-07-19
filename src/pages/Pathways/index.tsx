import React from 'react';
import { useRouter } from 'next/router';


const pathways = [
  { id: 'frontend', name: 'Frontend Development' },
  { id: 'backend', name: 'Backend Development' },
  { id: 'fullstack', name: 'Fullstack Development' },
  { id: 'data', name: 'Data Science' },
  { id: 'mobile', name: 'Mobile Development' },
  { id: 'uiux', name: 'UI/UX Design' },
  { id: 'cybersecurity', name: 'Cybersecurity' },
  { id: 'cloud', name: 'Cloud Computing' },
  { id: 'devops', name: 'DevOps' },
  { id: 'blockchain', name: 'Blockchain' },
  { id: 'iot', name: 'Internet of Things' },
  { id: 'arvr', name: 'AR/VR Development' },
  { id: 'robotics', name: 'Robotics' },
  { id: 'ai', name: 'Artificial Intelligence' },
  { id: 'quantum', name: 'Quantum Computing' },
  { id: 'game', name: 'Game Development' },
  { id: 'digitalmarketing', name: 'Digital Marketing' },
  { id: 'sales', name: 'Sales' },
  { id: 'hr', name: 'Human Resources' },
  { id: 'finance', name: 'Finance' },
  { id: 'management', name: 'Management' },
  { id: 'entrepreneurship', name: 'Entrepreneurship' },
  { id: 'productmanagement', name: 'Product Management' },
];

const PathwaysGrid = () => {
  const router = useRouter();

  const handlePathwayClick = (id: string) => {
    router.push(`/Pathways/${id}`);
  };

  return (
    <div className='p-20'>
      <h1 className='text-center font-bold text-5xl mb-10'>Pathways Recommended by Dragons Bootcamp</h1>
      <p className='text-xl mb-6 max-w-3xl text-center mx-auto'>
        Dragons Bootcamp offers a variety of pathways to help you learn the skills you need to succeed in the tech
        industry. Choose a pathway below to learn more about it.
      </p>
      <div className="grid grid-cols-4 gap-4 px-20">
        {pathways.map((pathway) => (
          <div
            key={pathway.id}
            className="p-4 border hover:border-purple-500 text-center rounded cursor-pointer hover:text-purple-500 duration-300"
            onClick={() => handlePathwayClick(pathway.id)}
          >
            {pathway.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PathwaysGrid;
