import React, { useState } from "react";
import Link from "next/link";

const ContactForm = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className={"flex justify-center "}>
        <img
          className="w-1/6 h-auto float-left rotate-180"
          src="https://media1.giphy.com/media/xLrBCOqMk6d3IHIsl2/giphy.gif?cid=6c09b9527pt1kuv9uq3s20zlp8xtnm1z5436xu8zycusdlfx&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
        />
        <Link
          href="/Contact"
          passHref
        >
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="mt-5 md:mt-20 h-15 md:h-15 w-full md:w-60 inline-flex justify-center items-center gap-x-2 text-center bg-gradient-to-tl from-blue-600/10 to-violet-600/10 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-purple-700 text-white text-md md:text-md font-bold rounded-full focus:outline-none focus:ring-5 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-2 px-4 md:py-2 md:px-4 dark:focus:ring-offset-gray-800"
          >
            Contact Us
          </button>
        </Link>
        <img
          className="w-1/6 h-auto float-right"
          src="https://media1.giphy.com/media/xLrBCOqMk6d3IHIsl2/giphy.gif?cid=6c09b9527pt1kuv9uq3s20zlp8xtnm1z5436xu8zycusdlfx&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
        />
      </div>
    </div>
  );
};
export default ContactForm;
