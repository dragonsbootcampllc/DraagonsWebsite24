import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import ButtonComponent from "@/components/Micros/Button";
import { Correct_1, Document_1, Time_1 } from "@/components/Icons";
import CourseHeasder from "@/pages/DragonsSprints/Components/Header/CourseHeader";
import OverViewComponent from "@/pages/DragonsSprints/Components/OverView";
import TopicsComponent from "../Components/Topics";
import CoverImage from "@/../public/45f.png";
import Transformation from "../Components/Transformation";
import CheckOutButton from "@/components/CheckoutButton";

interface Coupon {
  name: string;
  discount: number;
}

export default function CourseDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const { user, isLoaded } = useUser();
  const [hasAccess, setHasAccess] = useState(false);
  const minisprint_name = "The Developer's Quest with Real-World Scenarios";
  const [discountedPrice, setDiscountedPrice] = useState(30);

  useEffect(() => {
    if (isLoaded && user) {
      const userCourses = user.publicMetadata.courses as string[] || [];
      setHasAccess(userCourses.includes(slug as string));
    }
  }, [isLoaded, user, slug]);

  const description =
    '"The Developer\'s Quest With Real-World Scenarios" is an intensive 2-week program designed to guide aspiring developers through various technical career paths. This comprehensive course covers a wide range of topics, from front-end and back-end development to DevOps, full-stack applications, mobile development, and emerging technologies like blockchain and IoT. Through hands-on experience with real-world scenarios, daily mentorship, and industry insights, participants gain practical skills and knowledge to make informed career decisions. The program includes building responsive web applications, creating RESTful APIs, implementing CI/CD pipelines, and exploring data science and machine learning. By the end, participants will have a clear understanding of different tech career paths, hands-on experience with diverse technologies, and valuable connections in the industry.';
  const benefits = [
    "test test test test",
    "test 1 test 1 test 1 test 1",
    "test 2 test 2 test 2 test 2",
    "test 3 test 3 test 3",
    "test 4 test 4 test 4 test 4 test 4 test 4",
  ];
  const content = {
    duration: "70 hours / 2 weeks",
    assignments: "",
    articles: "8",
    resources: "5",
  };
  const Instructors = ["General"];
  const Category = ["General"];
  const Level = ["Beginner"];
  const Language = ["Arabic", "English"];
  const HasCertificate = true;

  const requirements = [
    "Basic understanding of programming concepts.",
    "Access to a computer and the internet.",
    "A willingness to learn, collaborate with others and positive attitude.",
    "A passion for technology and innovation.",
    "A growth mindset and a desire to succeed.",
    "A commitment to completing the program.",
    "not shy to ask questions. :)",
  ];

  const Outcomes = [
    "Understand the different technical career paths offered in the tech industry.",
    "Acquire practical experience with real-world scenarios.",
    "Make informed decisions about your career direction.",
    "Build a network of peers and potential career connections.",
    "Gain insights and networking opportunities with experienced mentors and industry professionals.",
  ];

  const Topics = [
    {
      title: "Introduction",
      image: CoverImage.src,
    },
    {
      title: "Why it's A lot?!",
      image: CoverImage.src,
    },
    {
      title: "Positions Battle",
      image: CoverImage.src,
    },
    {
      title: "The Golden RoadMap",
      image: CoverImage.src,
    },
  ];

  return (
    <div className='grid place-items-center '>
      <div className='h-full flex-col max-w-[1400px] w-full flex justify-center'>
        <CourseHeasder
          title={minisprint_name}
          description={description}
          duration={content.duration}
          Instructors={Instructors}
          Category={Category}
          Level={Level}
          Language={Language}
          HasCertificate={HasCertificate}
        />
        <div className='w-full flex py-4 justify-center'>
          <div className='flex md:flex-row gap-4 flex-col w-full max-w-[1300px] px-2'>
            <div className='w-full md:w-2/3'>
              <div className='flex-shrink  w-full flex flex-col gap-4 '>
                <OverViewComponent
                  description={description}
                  title={"Overview"}
                />
                <TopicsComponent Topics={Topics} title={"Topics"} />
                <Transformation
                  title={"Transformation"}
                  Requirements={requirements}
                  Outcomes={Outcomes}
                />
              </div>
            </div>
            <div className=' w-full md:w-1/3 h-full flex-shrink '>
              <div className='w-full relative p-1 bg-purple-800/20 rounded-3xl'>
                <div className='w-full relative aspect-square bg-purple-800 h-[200px] rounded-3xl cursor-pointer'>
                  <div className='text-base  px-3 md:px-6 absolute  grid place-items-center   lg:text-3xl font-medium text-gray-200 h-full w-full '>
                    <div className='w-full  flex justify-center items-center'>
                      <div className='rounded-md h-4/5 w-full text-gray-300 text-4xl font-bold flex flex-col justify-end gap-5 p-4'>
                        <span className='flex justify-center h-full items-center relative'>
                          <span className='text-5xl font-bold relative'>
                            ${discountedPrice.toFixed(2)}
                          </span>
                        </span>
                        {hasAccess ? (
                          <Link href={`/DragonsSprints/${slug}/Explore`}>
                            <ButtonComponent
                              CTAtext='Go to Course'
                              className='!h-fit'
                            />
                          </Link>
                        ) : (
                          <CheckOutButton
                            CTAtext='Buy Now'
                            className='!h-fit'
                            createCheckoutSession='/api/Checkout-DragonsSprint'
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}