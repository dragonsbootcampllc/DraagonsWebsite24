export default function Webinars() {
  return (
    <>
      <section className="text-white h-screen flex flex-col justify-center items-center">
        <h2 className="text-7xl font-bold mb-4">Webinars</h2>
        <p className="text-3xl mb-6 text-center">
          Join industry experts for insights and best practice advice.
        </p>
        <p className="text-lg">Live and on-demand.</p>
      </section>
      <FeaturedWebinar />
      <AllWebinars />
    </>
  );
}

function FeaturedWebinar() {
  return (
    <section className="text-white p-10 flex justify-center items-center h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-blue-400 text-sm">Featured Webinar</p>
          <h2 className="text-4xl font-bold mt-2">
            Replacing Twilio for Telehealth
          </h2>
          <p className="mt-4 text-gray-400">
            Following Twilio's EOL (End of Life) notice for its Programmable
            Video product, telehealth providers are facing a critical
            transition. They need to choose a new vendor, migrate code, and
            migrate users, all before December 5, 2024.
          </p>
          <div className="mt-6">
            <div className="flex items-center mb-2">
              <svg
                className="w-5 h-5 text-blue-400 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-14h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              <span>March 16th</span>
            </div>
            <div className="flex items-center mb-2">
              <svg
                className="w-5 h-5 text-blue-400 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm1-16h-2v6H6.993v2h6.007v-6h3.007V8H13V6zm-1 14h2v2h-2z" />
              </svg>
              <span>8:30 AM IST</span>
            </div>
          </div>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Watch Now
          </button>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg">
          <p className="bg-blue-600 text-white p-2 border rounded-full text-sm mb-2">
            WEBINAR
          </p>
          <h3 className="text-2xl font-bold text-center mb-4">
            Replacing Twilio for Telehealth
          </h3>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex justify-center items-center flex-col">
              <img
                src="https://placehold.co/400x400"
                alt="Gaurav Agarwal"
                className="w-16 h-16 rounded-full mb-2"
              />
              <p className="text-sm font-bold">GAURAV AGARWAL</p>
              <p className="text-xs text-gray-400">Ex-VP & GM, Twilio Video</p>
            </div>
            <div className="flex justify-center items-center flex-col">
              <img
                src="https://placehold.co/400x400"
                alt="Aniket Behera"
                className="w-16 h-16 rounded-full mb-2"
              />
              <p className="text-sm font-bold">ANIKET BEHERA</p>
              <p className="text-xs text-gray-400">Co-founder & COO, 100ms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const webinars = [
  {
    title: "Replacing Twilio for Telehealth",
    description:
      "Following Twilio's EOL (End of Life) notice for its Programmable Video product...",
    link: "#",
  },
  {
    title: "AMA & Talk: Scaling your Android build with Jetpack & Dagger",
    description:
      "Join 100ms Android developer webinar series featuring in-depth tech talks...",
    link: "#",
  },
  {
    title: "Building a Virtual Events template using 100ms & Vercel",
    description:
      "Learn how you can leverage Next.js, 100ms, and a headless CMS to build a self...",
    link: "#",
  },
  {
    title: "Building a Twitter Spaces clone in React Native",
    description:
      "Learn how to build a Twitter Spaces clone using React Native and 100ms...",
    link: "#",
  },
  {
    title: "Building a FaceTime clone for iOS",
    description: "Learn how to build a FaceTime clone for iOS using 100ms...",
    link: "#",
  },
  {
    title: "Build Clubhouse like app for iOS",
    description:
      "Learn how to build a Clubhouse like app for iOS using 100ms...",
    link: "#",
  },
];

function AllWebinars() {
  return (
    <section className="text-white py-10 h-full">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">All Webinars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {webinars.map((webinar, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <span className="bg-blue-900 text-blue-400 text-xs font-bold uppercase px-2 py-1 rounded">
                On-Demand
              </span>
              <h3 className="mt-4 text-2xl font-bold">{webinar.title}</h3>
              <p className="mt-2 text-gray-400">{webinar.description}</p>
              <a
                href={webinar.link}
                className="mt-4 inline-block text-blue-400 hover:text-blue-300"
              >
                View Talk &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
