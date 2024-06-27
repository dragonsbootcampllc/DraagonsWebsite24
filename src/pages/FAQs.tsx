import ButtonComponent from "@/components/Micros/Button";
import React, { useEffect, useState, ChangeEvent } from "react";
import { motion } from 'framer-motion';

interface SearchResult {
  title: string;
  description: string;
}

const MyHelpCenter: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const results: SearchResult[] = [
      {
        title: "FAQs",
        description:
          "Learn how to make the most of your Zapier account to build automated workflows.",
      },
      {
        title: "Zaps",
        description:
          "Discover pre-built workflows and automate repetitive tasks with Zapier's extensive library of integrations.",
      },
      {
        title: "Tables",
        description:
          "Explore the powerful features of Zapier's Tables to organize and analyze your data.",
      },
    ];

    const filteredResults = results.filter((result) =>
      result.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    setSearchResults(filteredResults);
  }, [searchInput]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className='w-full min-h-screen grid place-items-center text-center p-2 my-12'>
   <div>
   <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='text-3xl flex-col content-center max-w-4xl text-center md:text-5xl z-10 flex justify-center m-auto relative mb-3 text-gray-200 font-semibold'
    >
      <h1 className='md:text-xl text-center text-lg font-medium text-purple-800 uppercase'>
        Help Center
      </h1>
      <h1>How can we help you?</h1>
    </motion.div>
    <div className='text-3xl md:text-xl text-center max-w-[1000px] gap-4 z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center m-auto relative mb-3 p-5 text-gray-200 font-semibold'>
      {searchResults.map((result, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className='w-full grid place-items-center sm:w-auto mx-2 mb-4'
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-purple-800/20 max-w-[400px] aspect-auto grid place-items-center p-4 shadow rounded-3xl'
          >
            <div>
              <h2 className='text-gray-200 text-lg sm:text-xl'>
                {result.title}
              </h2>
              <p className='text-gray-400 text-sm'>{result.description}</p>
              <div className='py-2'>
                <ButtonComponent CTAtext='Explore articles' />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
   </div>
  </div>
  );
};

export default MyHelpCenter;
