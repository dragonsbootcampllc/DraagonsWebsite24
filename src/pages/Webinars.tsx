import TypingEffect from '@/components/Utils/TypingEffect';
import Image from 'next/image';
import React from 'react';

interface Webinar {
  title: string;
  description: string;
  link: string;
}

interface Speaker {
  name: string;
  title: string;
  img_src: string;
}

const webinars: Webinar[] = [
  {
    title: "Replacing Twilio for Telehealth",
    description: "Following Twilio's EOL (End of Life) notice for its Programmable Video product...",
    link: "#",
  },
  {
    title: "AMA & Talk: Scaling your Android build with Jetpack & Dagger",
    description: "Join 100ms Android developer webinar series featuring in-depth tech talks...",
    link: "#",
  },
  {
    title: "Building a Virtual Events template using 100ms & Vercel",
    description: "Learn how you can leverage Next.js, 100ms, and a headless CMS to build a self...",
    link: "#",
  },
  {
    title: "Building a Twitter Spaces clone in React Native",
    description: "Learn how to build a Twitter Spaces clone using React Native and 100ms...",
    link: "#",
  },
  {
    title: "Building a FaceTime clone for iOS",
    description: "Learn how to build a FaceTime clone for iOS using 100ms...",
    link: "#",
  },
  {
    title: "Build Clubhouse like app for iOS",
    description: "Learn how to build a Clubhouse like app for iOS using 100ms...",
    link: "#",
  },
];

const speakers: Speaker[] = [
  {
    name: 'GAURAV AGARWAL',
    title: 'Ex-VP & GM, Twilio Video',
    img_src: 'https://placehold.co/400x400'
  },
  {
    name: 'ANIKET BEHERA',
    title: 'Co-founder & COO, 100ms',
    img_src: 'https://placehold.co/400x400'
  },
]

export default function Webinars() {
  return (
    <>
      <section className="relative text-white h-screen flex flex-col justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <Image
            src='/images/bg/webinar-hero-bg.jpg'
            alt='Background Image'
            layout="fill"
            objectFit="cover"
            quality={100}
            className="z-0 blur-md"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-purple-950/60 z-10"></div>
        </div>
        <h2 className="text-7xl font-bold mb-4">Webinars</h2>
        {/* <p className="text-3xl mb-6 text-center">
          Join industry experts for insights and best practice advice.
        </p> */}
        <TypingEffect texts={['Join industry experts for insights and best practice advice.']} className='text-3xl mb-6 text-center h-7 flex justify-center items-center' />
        <p className="text-lg">Live and on-demand.</p>
      </section>
      <FeaturedWebinar />
      <AllWebinars />
    </>
  );
}

function FeaturedWebinar() {
  return (
    <section className="text-white p-10 flex relative justify-center items-center h-screen">
      <div className="absolute inset-0 -z-10 bg-[#38276a] bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-blue-400 text-sm">Featured Webinar</p>
          <h2 className="text-4xl font-bold mt-2">
            Replacing Twilio for Telehealth
          </h2>
          <p className="mt-4 text-gray-400">
            Following Twilio's EOL (End of Life) notice for its Programmable Video product, telehealth providers are facing a critical transition. They need to choose a new vendor, migrate code, and migrate users, all before December 5, 2024.
          </p>
          <div className="mt-6">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-14h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              <span>March 16th</span>
            </div>
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
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
          <p className="bg-blue-600 cursor-pointer transition-all hover:bg-blue-500 inline-block text-white px-2 py-1 rounded-full text-sm mb-2">
            WEBINAR
          </p>
          
          <h3 className="text-2xl font-bold text-center mb-4">
            Replacing Twilio for Telehealth
          </h3>
          
          <div className="flex items-center justify-center w-full">
            {
              speakers.map(({ name, title, img_src }: Speaker, index: number) => (
                <div key={index} className="flex justify-center cursor-pointer items-center group flex-col">
                  <img
                    src={img_src}
                    alt={name}
                    className="w-16 h-16 group-hover:rounded-[6%] rounded-[50%] translate-y-5 group-hover:translate-y-0 group-hover:rotate-0 rotate-[360deg] transition-all inline-block mb-2"
                  />
                  <p className="text-sm font-bold -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">{name}</p>
                  <p className="text-xs text-gray-400 -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">{title}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}

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
