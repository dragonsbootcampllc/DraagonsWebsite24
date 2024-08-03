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
  frontend: 'Frontend',
  backend: 'Backend',
  fullstack: 'Fullstack',
  aidata: 'Data Science',
  dataanalysis: 'Data Analysis',
  android: 'Android',
  ios: 'iOS',
  ux: 'UX Design',
  cybersecurity: 'Cybersecurity',
  blockchain: 'Blockchain',
  techwrite: 'Technical Writing',
  game: 'Game Development',
  mlops: 'MLOps',
  productmanager: 'Product Management',
  qa: 'Quality Assurance',
  devrelations: 'Developer Relations',
};

const PathwayDetail = ({ pathwayData }: { pathwayData: PathwayData | null }) => {
  const router = useRouter();
  const { id } = router.query;

  if (!pathwayData || !id || !(id as PathwayKey in pathways)) {
    return <p>Pathway not found</p>;
  }

  return (
    <div className="md:p-20">
      <h1 className="text-center font-bold max-md:my-10 text-6xl max-md:text-5xl mb-10">{pathways[id as PathwayKey]}</h1>
      <p className="text-center max-md:mb-4 max-md:px-4 text-2xl">Details about {pathways[id as PathwayKey]} Pathway offered by Dragons Bootcamp for you</p>
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
