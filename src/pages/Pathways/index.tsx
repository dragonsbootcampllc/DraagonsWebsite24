import React from 'react';
import { useRouter } from 'next/router';


const pathways = [
  { id: 'frontend', name: 'Frontend Development' },
  { id: 'backend', name: 'Backend Development' },
  { id: 'devops', name: 'DevOps' },
  { id: 'fullstack', name: 'Fullstack Development' },
  { id: 'aidata', name: 'AI and Data Science' },
  { id: 'dataanalysis', name: 'Data Analyst' },
  { id: 'android', name: 'Android' },
  { id: 'ios', name: 'iOS' },
  { id: 'ux', name: 'UX Design' },
  { id: 'cybersecurity', name: 'Cybersecurity' },
  { id: 'blockchain', name: 'Blockchain' },
  { id: 'techwrite', name: 'Technical Writer' },
  { id: 'game', name: 'Game Development' },
  { id: 'mlops', name: 'MLOps' },
  { id: 'productmanager', name: 'Product Manager' },
  { id: 'qa', name: 'Quality Assurance' },
  { id: 'devrelations', name: 'Developer Relations' },
  { id: 'softwarearch', name: 'Software Architect' },
  { id: 'postgresql', name: 'PostgreSQL' },
];

const PathwaysGrid = () => {
  const router = useRouter();

  const handlePathwayClick = (id: string) => {
    router.push(`/Pathways/${id}`);
  };

  return (
    <div className='md:p-16'>
      <h1 className='text-center font-bold text-3xl md:text-5xl max-md:mt-10 mb-10'>Developer Pathways</h1>
      <p className='text-xl mb-6 max-w-3xl text-center mx-auto max-md:px-4'>
        Dragons Bootcamp offers a variety of pathways to help you learn the skills you need to succeed in the tech
        industry. Choose a pathway below to learn more about it.
      </p>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mb-10 gap-4 max-md:px-4 md:px-20">
        {pathways.map((pathway) => (
          <div
            key={pathway.id}
            className="p-4 border hover:border-purple-500 text-center rounded-lg cursor-pointer hover:text-purple-500 duration-300"
            onClick={() => handlePathwayClick(pathway.id)}
          >
            {pathway.name}
          </div>
        ))}
      </div>
      <p className='font-semibold text-2xl text-center pt-5'>More Soon</p>
    </div>
  );
};

export default PathwaysGrid;
