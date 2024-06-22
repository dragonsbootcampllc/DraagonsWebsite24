import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const DSA = () => {
  return (
    <div className="min-h-screen bg-[#030014] flex flex-col justify-center items-center px-4 md:px-16 py-4">
    <header className="flex flex-col items-center text-center mt-32 mb-24 max-w-3xl">
      <h1 className="text-6xl max-md:text-3xl font-bold mb-4">
        Dragons Student Activities: Connect, Create, Innovate
      </h1>
      <p  className="text-lg mb-8 max-w-[700px]">
        Join our tech-focused student community. Connect with peers, discuss
        latest trends, and build lasting friendships. Participate in a wide
        range of activities designed to enhance your skills and network.
      </p>
      <button className="bg-gray-900 text-white text-lg px-4 py-2 rounded-full opacity-50 cursor-not-allowed" disabled>
        Explore the world of Student Community
      </button>
    </header>
<div className="min-h-screen bg-[#030014] flex flex-col justify-center items-center px-4 md:px-16 py-4">
  <div className="flex flex-col px-10 justify-center text-center items-center mb-12 max-w-3xl">
    <h2  className="text-3xl font-semibold mb-4">Hackathons</h2>
    <p  className="text-md mb-8 max-w-[700px]">
      Participate in our thrilling hackathons where you can team up with
      fellow students to solve real-world problems. Showcase your coding
      skills, collaborate, and compete for exciting prizes. It's a
      fantastic opportunity to innovate and bring your ideas to life.
    </p>
    <img
      src="/images/hackathon.jpeg"
      alt="Hackathon"
      width="800"
      height="400"
      className="rounded-lg mb-8"
    />
  </div>

  <div  className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="flex flex-col px-10 items-center mb-12 max-w-3xl">
      <h2  className="text-3xl font-semibold mb-4">Info Sessions</h2>
      <p  className="text-md mb-8 max-w-[700px]">
        Stay informed with our info sessions. We regularly host sessions where
        industry experts share their insights on the latest trends in
        technology. Learn about new tools, frameworks, and best practices that
        are shaping the tech world.
      </p>
      <img
        src="/images/5.png"
        alt="Info Session"
        width="800"
        height="400"
        className="rounded-lg mb-8"
      />
    </div>
    <div  className="flex flex-col px-10 items-center mb-12 max-w-3xl">
      <h2  className="text-3xl font-semibold mb-4">Meetings</h2>
      <p  className="text-md mb-8 max-w-[700px]">
        Join our regular meetings to connect with peers and mentors. These
        gatherings are a great way to discuss ongoing projects, share ideas,
        and get feedback. Whether in person or online, our meetings are
        designed to foster collaboration and community.
      </p>
      <img
        src="/images/15.png"
        alt="Meeting"
        width="800"
        height="400"
        className="rounded-lg mb-8"
      />
    </div>
  </div>

  <div  className="flex flex-col px-10 items-center max-w-3xl">
    <h2  className="text-3xl font-semibold mb-4">Gamified Profiles</h2>
    <p  className="text-md mb-8 max-w-[700px]">
      Our platform includes gamified profiles to make learning and
      participation more engaging. Earn points and badges as you take part
      in activities, complete projects, and contribute to the community.
      It's a fun way to track your progress and stay motivated.
    </p>
    <img
      src="/images/image.png"
      alt="Gamified Profile"
      width="800"
      height="400"
      className="rounded-lg mb-8"

        />
 <div className="flex flex-col px-10 items-center max-w-3xl">
  <h2 className="text-3xl font-semibold mb-4 p-10">Our Student Activity Partners</h2>
  <Slider
    dots={true}
    infinite={true}
    speed={500}
    slidesToShow={3}
    slidesToScroll={1}
     className="max-w-[900px] my-slider"
  >
   <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDiuwrEZCz3lzKjeLumQEFSZyleJUYPT2IUGDmdUVv6DLJm4DrNZ_R77FUA&s" alt="Partner 1" className="slider-image" />
    </div>
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDiuwrEZCz3lzKjeLumQEFSZyleJUYPT2IUGDmdUVv6DLJm4DrNZ_R77FUA&s" alt="Partner 2" className="slider-image" />
    </div>
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDiuwrEZCz3lzKjeLumQEFSZyleJUYPT2IUGDmdUVv6DLJm4DrNZ_R77FUA&s" alt="Partner 3" className="slider-image" />
    </div>
  </Slider>
</div>
      </div>
    </div>
    </div>

  );
};

export default DSA;
