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
  frontend: "Frontend",
  backend: "Backend",
  fullstack: "Fullstack",
  data: "Data Science",
  AndroidDeveloper: "Android Developer",
  IOSDeveloper: "IOS Developer",
  PostgreSQLDBA: "PostgreSQL DBA",
  BlockchainDeveloper: "Blockchain Developer",
  QAEngineer: "QA Engineer",
  SoftwareArchitect: "Software Architect",
  uiux: "UI/UX Design",
  cybersecurity: "Cybersecurity",
  cloud: "Cloud Computing",
  devops: "DevOps",
  iot: "Internet of Things",
  arvr: "AR/VR Development",
  robotics: "Robotics",
  ai: "Artificial Intelligence",
  quantum: "Quantum Computing",
  game: "Game Development",
  digitalmarketing: "Digital Marketing",
  sales: "Sales",
  hr: "Human Resources",
  finance: "Finance",
  management: "Management",
  entrepreneurship: "Entrepreneurship",
  productmanagement: "Product Management",
  design: "Design",
  testing: "Testing",
  softskills: "Soft Skills",
  bigdata: "Big Data",
  cyberphysicalsystems: "Cyber-Physical Systems",
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
