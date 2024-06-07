import React from "react";
import dynamic from "next/dynamic";
import useSWRInfinite from "swr/infinite";
import ContactForm from './ContactForm';
const Talantcard = dynamic(() => import("./Talantcard"));

const fetcher = (url) => fetch(url).then((res) => res.json());

function MapedComponents(props) {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null; // reached the end
    return `/api/staticdata?page=${pageIndex + 1}`;
  };

  // Use the useSWRInfinite hook to fetch the data for each page and concatenate it together
  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  // Concatenate the data from all pages into a single array
  const talents = data ? [].concat(...data) : [];

  function fetchData() {
    setSize(size + 1);
  }

  return (
    <div>
      <div
        className={
          "w-full max-w-[1600px]  flex-wrap  gap-1 justify-center flex  relative mx-auto  h-full "
        }
      >
        {talents.map((talent, index) => (
          <Talantcard
            key={index}
            Name={talent.Name}
            personal_photo={talent.personal_photo}
            City={talent.City}
            Team={talent.Team}
            Link_profile_Linkedin={talent.Link_profile_Linkedin}
            Link_profile_Github={talent.Link_profile_Github}
            Link_profile_Discord={talent.Link_profile_Discord}
            tags={talent.tags}
            isBoard={talent.isBoard}
            isRecomended={talent.isRecomended}
            isMaintainer={talent.isMaintainer}
          />
        ))}
      </div>

      <div className={"flex justify-center mt-3 mb-5"}>
        <button
          onClick={fetchData}
          className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600/10 to-violet-600/10 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
        >
          Load More
          <svg
            className="w-2.5 h-2.5 rotate-90 "
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      {error && <div>Error fetching data</div>}
      {!error && data && !data[data.length - 1].length && (
        <div
          className={
            "flex-col gap-4 w-full flex place-items-center justify-center mx-auto mb-12"
          }
        >
          <p className={" mt-5 text-xl font-bold text-yellow-400/40"}>You can contact us to get access to all talents.</p>
          < ContactForm />
        </div>
      )}
    </div>
  );
}

export default MapedComponents;
