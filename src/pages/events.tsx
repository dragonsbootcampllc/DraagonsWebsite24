import React, { ReactNode, useState } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/JopReady/Hero";
import { LayoutGridDemo } from "@/components/EventGrid";
import CallToActionComponent from "@/components/JopReady/CallToActionComponent";
const WebinarsSection = dynamic(() => import("@/components/WebinarsSection/WebinarsSection"), { ssr: false, loading: () => <p></p> });

const Events = () => {
  const [popup, setPopup] = useState<ReactNode>(null);


  const handel_popup = (component: ReactNode) => {
    setPopup(component);
  };

  const HeroObj = {
    News: {
      id: 1,
      date: "2020-01-01",
      content: "New Season just landed💯",
      link: "/blog/news",
    },
    heroHeading: "Join us for ",
    subHeadingText: "exciting events with ",
    heroHighlightedText: "High profile speakers!",
    Disctiption:
      "Join us for our next event and meet high profile speakers from the industry!",
  };

  return (
    <div id='aboutus' className='relative w-full flex  justify-center'>
      <Hero
        News={HeroObj.News}
        subHeadingText={HeroObj.subHeadingText}
        heroHighlightedText={HeroObj.heroHighlightedText}
        heroHeading={HeroObj.heroHeading}
        Disctiption={HeroObj.Disctiption}
      />

      <div className="w-full my-20">
        <LayoutGridDemo />
      </div>

      <div className='my-28 w-full flex justify-center items-center'>
        <WebinarsSection handel_popup={handel_popup} />
      </div>

      <CallToActionComponent />

    </div>
  );
};

export default Events;
