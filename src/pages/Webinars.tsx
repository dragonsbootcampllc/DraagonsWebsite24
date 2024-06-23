import TypingEffect from '@/components/Utils/TypingEffect';
import Image from 'next/image';
import React from 'react';
import Hero_2 from "@/components/Hero/Hero_2";
import FeaturedWebinar from '@/components/Webinar/FeaturedWebinar';
import AllWebinars from '@/components/Webinar/AllWebinars';

const allWebinarsObj = {
  webinars: [
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
  ]
}

const featuredWebinarObj = {
  speakers: [
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
};


const heroObj = {
  News: {
    id: 2,
    date: "2020-01-01",
    content: "New Season just landed💯",
    link: "/blog/news",
  },
  hero_heading: "Join industry ",
  sub_heading_text: "experts for insights and best ",
  hero_highlighted_text: "practice advice",
  description: "Live and on-demand.",
};


export default function Webinars() {
  return (
    <>
      <Hero_2 {...heroObj} />
      <FeaturedWebinar {...featuredWebinarObj} />
      <AllWebinars {...allWebinarsObj} />
    </>
  );
}




