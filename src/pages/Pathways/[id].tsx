import { useRouter } from 'next/router';
import React from 'react';
import Flow from './Components/Flow'; // Adjust the import path as necessary
import pathwaysData from '../../../public/pathways.json'; // Adjust the import path as necessary

interface NodeData {
  id: string;
  position: {
    x: number;
    y: number;
  };
  data: {
    label: string;
  };
}

interface EdgeData {
  id: string;
  source: string;
  target: string;
}

interface PathwayData {
  nodes: NodeData[];
  edges: EdgeData[];
}

// Extracting the keys of pathwaysData as a type
type PathwayKey = keyof typeof pathwaysData;

const pathways: Record<PathwayKey, string> = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  fullstack: 'Fullstack Development',
  data: 'Data Science',
  mobile: 'Mobile Development',
  uiux: 'UI/UX Design',
  cybersecurity: 'Cybersecurity',
  cloud: 'Cloud Computing',
  devops: 'DevOps',
  blockchain: 'Blockchain',
  iot: 'Internet of Things',
  arvr: 'AR/VR Development',
  robotics: 'Robotics',
  ai: 'Artificial Intelligence',
  quantum: 'Quantum Computing',
  game: 'Game Development',
  digitalmarketing: 'Digital Marketing',
  sales: 'Sales',
  hr: 'Human Resources',
  finance: 'Finance',
  management: 'Management',
  entrepreneurship: 'Entrepreneurship',
  productmanagement: 'Product Management',
  design: 'Design',
  testing: 'Testing',
  softskills: 'Soft Skills',
  bigdata: 'Big Data',
  cyberphysicalsystems: 'Cyber-Physical Systems',
};

const PathwayDetail = ({ pathwayData }: { pathwayData: PathwayData | null }) => {
  const router = useRouter();
  const { id } = router.query;

  if (!pathwayData || !id || !(id as PathwayKey in pathways)) {
    return <p>Pathway not found</p>;
  }

  return (
    <div className="p-20">
      <h1 className="text-center font-bold text-6xl mb-10">{pathways[id as PathwayKey]}</h1>
      <p className="text-center text-2xl">Details about {pathways[id as PathwayKey]}</p>
      <div className='w-full mx-auto mb-5'>
        <Flow initialNodes={pathwayData.nodes} initialEdges={pathwayData.edges} />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  // Generate paths for each pathway
  const paths = Object.keys(pathwaysData).map((key) => ({
    params: { id: key }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: PathwayKey } }) {
  const pathwayData = pathwaysData[params.id] || null;
  return {
    props: { pathwayData },
  };
}

export default PathwayDetail;
