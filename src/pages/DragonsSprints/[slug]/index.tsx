import { GetStaticPaths, GetStaticProps } from "next";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import ButtonComponent from "@/components/Micros/Button";
import { Correct_1, Document_1, Time_1 } from "@/components/Icons";
import CourseHeasder from "@/pages/DragonsSprints/Components/Header/CourseHeader";
import OverViewComponent from "@/pages/DragonsSprints/Components/OverView";
import TopicsComponent from "../Components/Topics";

import CoverImage from "@/../public/45f.png";
import Transformation from "../Components/Transformation";
import CheckOutButton from "@/components/CheckoutButton";
// topics images
import Topic1 from "@/../public/images/DragonsSprint-CarrerSprint/IntroductionPoster-Dragons.png";
import Topic2 from "@/../public/images/DragonsSprint-CarrerSprint/WhyitsalotPoster.png";
import Topic3 from "@/../public/images/DragonsSprint-CarrerSprint/Positionbattleposter.png";
import Topic4 from "@/../public/images/DragonsSprint-CarrerSprint/theMaze.jpeg";

interface Coupon {
  name: string;
  discount: number;
}

interface PageData {
  minisprint_name: string;
  description: string;
  content: {
    duration: string;
    assignments: string;
    articles: string;
    resources: string;
  };
  Instructors: string[];
  Category: string[];
  Level: string[];
  Language: string[];
  HasCertificate: boolean;
  requirements: string[];
  Outcomes: string[];
  Topics: { title: string; image: string }[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all possible course slugs
  // This is a placeholder. Replace with your actual data fetching logic
  const slugs = ["CareerSprint", "OtherCourse1", "OtherCourse2"];

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  // Fetch the necessary data for the page
  // This is a placeholder. Replace with your actual data fetching logic
  const pageData: PageData = {
    minisprint_name: "The Developer's Quest with Real-World Scenarios",
    description:
      '"The Developer\'s Quest With Real-World Scenarios" is an intensive 2-week program designed to guide aspiring developers through various technical career paths. This comprehensive course covers a wide range of topics, from front-end and back-end development to DevOps, full-stack applications, mobile development, and emerging technologies like blockchain and IoT. Through hands-on experience with real-world scenarios, daily mentorship, and industry insights, participants gain practical skills and knowledge to make informed career decisions. The program includes building responsive web applications, creating RESTful APIs, implementing CI/CD pipelines, and exploring data science and machine learning. By the end, participants will have a clear understanding of different tech career paths, hands-on experience with diverse technologies, and valuable connections in the industry.',
    content: {
      duration: "70 hours / 2 weeks",
      assignments: "",
      articles: "8",
      resources: "5",
    },
    Instructors: ["General"],
    Category: ["General"],
    Level: ["Beginner"],
    Language: ["Arabic", "English"],
    HasCertificate: true,
    requirements: [
      "Basic understanding of programming concepts.",
      "Access to a computer and the internet.",
      "A willingness to learn, collaborate with others and positive attitude.",
      "A passion for technology and innovation.",
      "A growth mindset and a desire to succeed.",
      "A commitment to completing the program.",
      "not shy to ask questions. :)",
    ],
    Outcomes: [
      "Understand the different technical career paths offered in the tech industry.",
      "Acquire practical experience with real-world scenarios.",
      "Make informed decisions about your career direction.",
      "Build a network of peers and potential career connections.",
      "Gain insights and networking opportunities with experienced mentors and industry professionals.",
    ],
    Topics: [
      {
        title: "Introduction",
        image: Topic1.src,
      },
      {
        title: "Why it's A lot?!",
        image: Topic2.src,
      },
      {
        title: "Positions Battle",
        image: Topic3.src,
      },
      {
        title: "The Golden RoadMap",
        image: Topic4.src,
      },
    ],
  };

  if (!pageData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { pageData },
    revalidate: 60, // Revalidate every 60 seconds
  };
};

function CourseDetailPage({ pageData }: { pageData: PageData }) {
  const router = useRouter();
  const { slug } = router.query;
  const { user, isLoaded } = useUser();
  const [hasAccess, setHasAccess] = useState(false);
  const [discountedPrice, setDiscountedPrice] = useState(30);

  useEffect(() => {
    if (isLoaded && user) {
      const userCourses = (user.publicMetadata.courses as string[]) || [];
      setHasAccess(userCourses.includes(slug as string));
    }
  }, [isLoaded, user, slug]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className='grid place-items-center '>
      <div className='h-full flex-col max-w-[1400px] w-full flex justify-center'>
        <CourseHeasder
          title={pageData.minisprint_name}
          description={pageData.description}
          duration={pageData.content.duration}
          Instructors={pageData.Instructors}
          Category={pageData.Category}
          Level={pageData.Level}
          Language={pageData.Language}
          HasCertificate={pageData.HasCertificate}
        />
        <div className='w-full flex py-4 justify-center'>
          <div className='flex md:flex-row gap-4 flex-col w-full max-w-[1300px] px-2'>
            <div className='w-full md:w-2/3'>
              <div className='flex-shrink  w-full flex flex-col gap-4 '>
                <OverViewComponent
                  description={pageData.description}
                  title={"Overview"}
                />
                <TopicsComponent Topics={pageData.Topics} title={"Topics"} />
                <Transformation
                  title={"Transformation"}
                  Requirements={pageData.requirements}
                  Outcomes={pageData.Outcomes}
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
                        {isLoaded && hasAccess ? (
                          <Link href={`/DragonsSprints/${slug}/Explore`}>
                            <div className='lg:flex gap-4  hidden mt-4 justify-center'>
                              <div className='h-16 w-64  '>
                                <ButtonComponent
                                  CTAtext='Go to Course'
                                  className='!h-fit'
                                />
                              </div>
                            </div>
                          </Link>
                        ) : (
                          <div className='flex gap-4   mt-4 justify-center'>
                            <div className='h-16 max-w-64 w-full min-w-32  '>
                              <CheckOutButton
                                CTAtext='Buy Now'
                                className='h-full'
                                createCheckoutSession='/api/Checkout-DragonsSprint'
                              />
                            </div>
                          </div>
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

export default CourseDetailPage;
