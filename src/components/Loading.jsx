import React from "react";

const Loading = () => {
  return (
    <div className="min-w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <img src="/images/loading.svg" alt="loading..." />
        <p className="text-2xl font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
