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

  const pageData: PageData = {
    minisprint_name: "The Developer's Quest with Real-World Scenarios",
    description:
      'The program is designed to provide an in-depth understanding of various tech roles and the industry as a whole, aimed at individuals seeking to explore technical fields, early-career professionals, or those considering a career switch. It kicks off by shifting perspectives, placing students in the shoes of a business owner to help them grasp tech concepts. Key principles like "Don\'t Repeat Yourself" and automation are introduced. Through a simulated SaaS company project, students tackle real-world challenges such as team management, scalability, and budgeting. Later chapters address the tech industry\'s complexity, role inflation, and market differentiation, offering insights into the vast array of positions and responsibilities involved in building a product. The program also provides a roadmap for those wishing to pursue specific tech tracks. By demystifying the tech landscape, it aims to equip students with a solid foundation to navigate the industry effectively.',
    content: {
      duration: "21 hours",
      articles: "50",
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
      "A growth mindset and a desire to succeed.",
    ],
    Outcomes: [
      "Gain a deep understanding of tech roles.",
      "Develop problem-solving skills.",
      "Understand the mindset of tech professionals.",
    ],
    Topics: [
      { title: "Introduction", image: Topic1.src },
      { title: "Why it's A lot?!", image: Topic2.src },
      { title: "Positions Battle", image: Topic3.src },
      { title: "The Golden RoadMap", image: Topic4.src },
    ],
    price: 30,
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoaded && user) {
      const userCourses = (user.publicMetadata.courses as string[]) || [];
      setHasAccess(userCourses.includes(slug as string));
    }
  }, [isLoaded, user, slug]);

  const handleApplyCoupon = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/CouponSystem/validate-coupon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ coupon, program: "Mini Sprint" }),
      });

      if (!response.ok) throw new Error("Failed to validate coupon");

      const data = await response.json();

      if (data.discount) {
        applyDiscount(data.discount);
        if (data.discount === 100 && user) {
          const updatedUserCourses = (user.publicMetadata.courses as string[]) || [];
          updatedUserCourses.push(slug as string);

          await fetch("/api/public", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ stripe: { courses: updatedUserCourses }, userId: user.id }),
          });

          router.push(`/DragonsSprints/${slug}/Explore`);
        } else {
          setLoading(false);
        }
      } else {
        setError(data.message || "Invalid coupon code");
        setDiscountedPrice(pageData.price);
        setLoading(false);
      }
    } catch {
      setError("Invalid coupon");
      setLoading(false);
      setTimeout(() => setError(""), 2000);
    }
  };

  const applyDiscount = (discountPercentage: number) => {
    const discountedPrice = pageData.price * (1 - discountPercentage / 100);
    setDiscountedPrice(Math.floor(discountedPrice));
    setError("");
  };

  if (router.isFallback || (!isLoaded && !user) || loading) {
    return (
      <div className="min-w-full min-h-screen flex justify-center items-center">
        <div className="flex flex-col items-center">
          <img src="/images/loading.svg" alt="loading..." />
          <p className="text-2xl font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid place-items-center">
      <div className="h-full flex-col max-w-[1400px] w-full flex justify-center px-4 lg:px-0">
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
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-[1300px] px-2">
            <div className="w-full md:w-2/3">
              <div className="flex-shrink w-full flex flex-col gap-4">
                <OverViewComponent description={pageData.description} title="Overview" />
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
                <div className="w-full relative bg-purple-800 rounded-3xl cursor-pointer aspect-square md:h-[400px] h-[300px]">
                  <div className="text-base px-3 md:px-6 absolute grid place-items-center lg:text-3xl font-medium text-gray-200 h-full w-full">
                    <div className="w-full flex justify-center items-center">
                      <div className="rounded-md h-4/5 w-full text-gray-300 text-4xl font-bold flex flex-col justify-end gap-5 p-4">
                        <div className="flex flex-col relative">
                          <span className="text-5xl font-bold relative text-center">
                            ${discountedPrice.toFixed(2)}
                          </span>
                          {isLoaded && hasAccess ? (
                            <Link href={`/DragonsSprints/${slug}/Explore`}>
                              <div className="hidden lg:flex gap-4 mt-4 justify-center">
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
                          <div className="mt-4 text-center grid place-items-center gap-4">
                            <h1 className="text-xl md:text-2xl text-gray-400">Have a coupon code?</h1>
                            <input
                              type="text"
                              className="mt-2 px-4 py-2 border text-lg md:text-2xl rounded-full focus:outline-none focus:ring-2 w-full h-12 focus:ring-[#18094e] focus:border-[#190d43] bg-[#0f062e] border-[#110736]"
                              placeholder="Enter coupon code"
                              value={coupon}
                              onChange={(e) => setCoupon(e.target.value)}
                            />
                            <div onClick={handleApplyCoupon} className="w-full">
                              <ButtonComponentLite CTAtext="Apply" className="w-full !h-fit" />
                            </div>
                            {error && <span className="text-red-500">{error}</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-6">
                {[
                  { Icon: Document_1, label: `${pageData.content.articles} articles` },
                  { Icon: Time_1, label: pageData.content.duration },
                ].map(({ Icon, label }) => (
                  <div key={label} className="w-full flex items-center justify-start gap-2">
                    <Icon className="w-6 h-6 fill-gray-500" />
                    <p className="font-medium text-lg text-gray-300">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailPage;
