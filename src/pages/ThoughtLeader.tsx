import React from 'react';
import Hero from "@/components/JopReady/Hero";
import PrepareLeader from '@/components/ThoughtLeader/PrepareLeader';

const HeroObj = {
    News: {
      id: 1,
      date: "2020-01-01",
      content: "New Season just landed💯",
      link: "/blog/news",
    },
    subHeadingText: " With Dragons Bootcamp in ",
    heroHighlightedText: "Only 6 Month",
    heroHeading: "Become thought Leader ",
    Disctiption: "Join Dragons Bootcamp and become thought Leader in just 6 months. Gain essential skills and hands-on experience for a successful career",
  };
  
const ThoughtoutLeader = () => {
    return (
        <div>     
            <Hero 
                News={HeroObj.News}
                subHeadingText={HeroObj.subHeadingText}
                heroHighlightedText={HeroObj.heroHighlightedText}
                heroHeading={HeroObj.heroHeading}
                Disctiption={HeroObj.Disctiption} />
            <PrepareLeader/>
        </div>
    );
}

export default ThoughtoutLeader;
