import React, { useEffect, useState, ChangeEvent } from "react";

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
    <div className="w-full text-center p-2 my-12">
      <h1 className="text-4xl">Welcome to the Help Center</h1>
      <div className="p-10 text-7xl">
        <h2>How can we help you?</h2>
      </div>
      <input
        type="search"
        placeholder="Search..."
        className="shadow appearance-none border rounded min-w-[200px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={searchInput}
        onChange={handleSearch}
      />
      <div className="text-3xl md:text-xl text-center max-w-4xl z-10 border-violet-600 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center m-auto relative mb-3 p-5 text-gray-200 font-semibold">
        {searchResults.map((result, index) => (
          <div key={index} className="bg-white p-4 shadow rounded-lg mb-4 mr-5">
            <h2 className="text-gray-600">{result.title}</h2>
            <p className="text-gray-400">{result.description}</p>
            <button className="bg-violet-600 text-white py-2 mt-5 px-4 rounded-[1rem] duration-[0.5s] hover:bg-blue-600">
              Explore articles
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHelpCenter;
