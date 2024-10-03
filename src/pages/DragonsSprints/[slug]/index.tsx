import { GetStaticPaths, GetStaticProps } from "next";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import ButtonComponent from "@/components/Micros/Button";
import ButtonComponentLite from "@/components/Micros/ButtonLite";
import { Document_1, Time_1 } from "@/components/Icons";
import CourseHeader from "@/pages/DragonsSprints/Components/Header/CourseHeader";
import OverViewComponent from "@/pages/DragonsSprints/Components/OverView";
import TopicsComponent from "../Components/Topics";
import Transformation from "../Components/Transformation";
import CheckOutButton from "@/components/CheckoutButton";
// topics images
import Topic1 from "@/../public/images/DragonsSprint-CarrerSprint/IntroductionPoster-Dragons.png";
import Topic2 from "@/../public/images/DragonsSprint-CarrerSprint/WhyitsalotPoster.png";
import Topic3 from "@/../public/images/DragonsSprint-CarrerSprint/Positionbattleposter.png";
import Topic4 from "@/../public/images/DragonsSprint-CarrerSprint/theMaze.jpeg";

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
  price: number;
}

export const getStaticPaths: GetStaticPaths = async () => {
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
      '"The Developer\'s Quest With Real-World Scenarios" is an intensive 7 days program designed to guide aspiring developers through various technical career paths. This comprehensive course covers a wide range of topics, from front-end and back-end development to DevOps, full-stack applications, mobile development, and emerging technologies like blockchain and IoT. Through hands-on experience with real-world scenarios, daily mentorship, and industry insights, participants gain practical skills and knowledge to make informed career decisions. The program includes building responsive web applications, creating RESTful APIs, implementing CI/CD pipelines, and exploring data science and machine learning. By the end, participants will have a clear understanding of different tech career paths, hands-on experience with diverse technologies, and valuable connections in the industry.',
    content: {
      duration: "21 hours",
      assignments: "",
      articles: "8",
      resources: "5",
    },
    Instructors: ["General"],
    Category: ["General"],
    Level: ["Beginner"],
    Language: ["Arabic"],
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
    price: 30
  };

  return {
    props: { pageData },
    revalidate: 60,
  };
};

function CourseDetailPage({ pageData }: { pageData: PageData }) {
  const router = useRouter();
  const { slug } = router.query;
  const { user, isLoaded } = useUser();
  const [hasAccess, setHasAccess] = useState(false);
  const [discountedPrice, setDiscountedPrice] = useState(pageData.price);
  const [coupon, setCoupon] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isLoaded && user) {
      const userCourses = (user.publicMetadata.courses as string[]) || [];
      setHasAccess(userCourses.includes(slug as string));
    }
  }, [isLoaded, user, slug]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleApplyCoupon = () => {
    fetch("/api/CouponSystem/validate-coupon", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ coupon, program: "Mini Sprint" }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to validate coupon");
        }
        return response.json();
      })
      .then((data) => {
        if (data.discount) {
          if (data.discount === 100 && user) {
            const updatedUserCourses = (user.publicMetadata.courses as string[]) || [];
            updatedUserCourses.push(slug as string);

            fetch("/api/public", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ stripe: { courses: updatedUserCourses }, userId: user.id }),
            }).catch(() => {
              setError("An error occurred. Please try again.");
            });
          }
          applyDiscount(data.discount);
        } else {
          setError(data.message || "Invalid coupon code");
          setDiscountedPrice(pageData.price);
        }
      })
      .catch(() => {
        setError("Invalid coupon");
        setTimeout(() => {
          setError(""); // Clear the error after 2 seconds
        }, 2000);
      });
  };

  const applyDiscount = (discountPercentage: number) => {
    const discountedPrice = pageData.price * (1 - discountPercentage / 100);
    setDiscountedPrice(Math.floor(discountedPrice));
    setError("");
  };

  return (
    <div className="grid place-items-center">
      <div className="h-full flex-col max-w-[1400px] w-full flex justify-center">
        <CourseHeader
          title={pageData.minisprint_name}
          description={pageData.description}
          duration={pageData.content.duration}
          Instructors={pageData.Instructors}
          Category={pageData.Category}
          Level={pageData.Level}
          Language={pageData.Language}
          HasCertificate={pageData.HasCertificate}
        />
        <div className="w-full flex py-4 justify-center">
          <div className="flex md:flex-row gap-4 flex-col w-full max-w-[1300px] px-2">
            <div className="w-full md:w-2/3">
              <div className="flex-shrink w-full flex flex-col gap-4">
                <OverViewComponent
                  description={pageData.description}
                  title="Overview"
                />
                <TopicsComponent Topics={pageData.Topics} title="Topics" />
                <Transformation
                  title="Transformation"
                  Requirements={pageData.requirements}
                  Outcomes={pageData.Outcomes}
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 h-full flex-shrink">
              <div className="w-full relative p-1 bg-purple-800/20 rounded-3xl">
                <div className="w-full relative aspect-square bg-purple-800 h-[400px] rounded-3xl cursor-pointer">
                  <div className="text-base px-3 md:px-6 absolute grid place-items-center lg:text-3xl font-medium text-gray-200 h-full w-full">
                    <div className="w-full flex justify-center items-center">
                      <div className="rounded-md h-4/5 w-full text-gray-300 text-4xl font-bold flex flex-col justify-end gap-5 p-4">
                        <div className="flex flex-col relative">
                          <div className="flex flex-col gap-4">
                            <span className="text-5xl font-bold relative text-center">
                              ${discountedPrice.toFixed(2)}
                            </span>
                            {isLoaded && hasAccess ? (
                              <Link href={`/DragonsSprints/${slug}/Explore`}>
                                <div className="lg:flex gap-4 hidden mt-4 justify-center">
                                  <ButtonComponent CTAtext="Go to Course" className="!h-fit" />
                                </div>
                              </Link>
                            ) : (
                              <div className="flex gap-4 mt-4 justify-center">
                                <CheckOutButton
                                  CTAtext="Buy Now"
                                  className="h-full"
                                  createCheckoutSession="/api/Checkout-DragonsSprint"
                                />
                              </div>
                            )}
                          </div>
                          <div className="mt-4 text-center grid place-items-center gap-4">
                            <h1 className="text-2xl text-gray-400">Have a coupon code?</h1>
                            <input
                              type="text"
                              className="mt-2 px-4 py-2 border text-2xl rounded-full focus:outline-none focus:ring-2 w-full h-12 focus:ring-[#18094e] focus:border-[#190d43] bg-[#0f062e] border-[#110736]"
                              placeholder="Enter coupon code"
                              value={coupon}
                              onChange={(e) => setCoupon(e.target.value)}
                            />
                            <div onClick={handleApplyCoupon} className="h-14 w-64">
                              <ButtonComponentLite CTAtext="Apply Coupon" />
                            </div>
                          </div>
                          <div className="h-5 text-center grid place-items-center gap-4">
                            {error && <p style={{ color: "red", fontSize: "20px" }}>{error}</p>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full mt-4 bg-purple-800/20 rounded-3xl px-6 flex py-6 flex-col gap-4 justify-start">
                <div className="flex-col flex items-center w-full">
                  <p className="font-semibold text-lg text-white">
                    What's included?
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  {[
                    {
                      Icon: Document_1,
                      label: `${pageData.content.articles} articles`,
                    },
                    {
                      Icon: Time_1,
                      label: pageData.content.duration,
                    },
                  ].map(({ Icon, label }) => (
                    <div className="w-full flex items-center justify-start gap-2">
                      <Icon className="w-6 h-6 fill-gray-500" />
                      <p className="font-medium text-lg text-gray-300">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-[400px] w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailPage;
