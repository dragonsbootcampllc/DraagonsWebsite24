import React from "react";
import dynamic from "next/dynamic";
import useSWRInfinite from "swr/infinite";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={170}
            width={170}
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 125"
            fill={"gray"}
            xmlSpace="preserve"
          >
            <style
              type="text/css"
              dangerouslySetInnerHTML={{ __html: "\n\t.st0{fill:#FFFFFF;}\n" }}
            />
            <g>
              <g>
                <path d="M50,8.8c-20.3,0-36.7,16.5-36.7,36.7v39.4c0,3.4,2.8,6.2,6.2,6.2h61c3.4,0,6.2-2.8,6.2-6.2V45.6    C86.7,25.3,70.3,8.8,50,8.8z M84.7,84.9c0,2.3-1.9,4.2-4.2,4.2h-61c-2.3,0-4.2-1.9-4.2-4.2V45.6c0-19.2,15.6-34.7,34.7-34.7    s34.7,15.6,34.7,34.7V84.9z" />
                <path d="M33.6,35.7c-2.9,0-5.2,2.3-5.2,5.2s2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2S36.5,35.7,33.6,35.7z M35.3,41.9    c-0.9,0-1.6-1-1.6-2.3s0.7-2.3,1.6-2.3c0.9,0,1.6,1,1.6,2.3S36.3,41.9,35.3,41.9z" />
                <path d="M66.4,35.7c-2.9,0-5.2,2.3-5.2,5.2s2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2S69.3,35.7,66.4,35.7z M68.1,41.9    c-0.9,0-1.6-1-1.6-2.3s0.7-2.3,1.6-2.3c0.9,0,1.6,1,1.6,2.3S69,41.9,68.1,41.9z" />
                <path d="M50,49.2c-4.7,0-8.6,3.8-8.6,8.6c0,0.6,0.4,1,1,1s1-0.4,1-1c0-3.6,2.9-6.6,6.6-6.6s6.6,2.9,6.6,6.6c0,0.6,0.4,1,1,1    s1-0.4,1-1C58.6,53.1,54.7,49.2,50,49.2z" />
              </g>
            </g>
          </svg>
          <h1 className={"-mt-14 text-xl font-bold text-yellow-400/40"}>
            No more talents to load
          </h1>
        </div>
      )}
    </div>
  );
}

export default MapedComponents;
