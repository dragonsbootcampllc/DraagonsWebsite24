import React, { useState } from "react";
import { useRouter } from "next/router";
import ButtonComponent from "@/components/Micros/Button";
import { Correct_1, Document_1, Time_1 } from "@/components/Icons";
import CourseHeasder from "@/pages/DragonsSprints/Components/Header/CourseHeader";
import OverViewComponent from "@/pages/DragonsSprints/Components/OverView";
import TopicsComponent from "./Components/Topics";
import CoverImage from "@/../public/45f.png";
import Transformation from "./Components/Transformation";

interface Coupon {
  name: string;
  discount: number;
}

export default function minisprint_explore_view() {
  const router = useRouter();
  const minisprint_name = "The Developer's Quest with Real-World Scenarios";
  const [coupon, setCoupon] = useState<Coupon | null>({
    name: "DISCOUNT20",
    discount: 20,
  });
  const [couponInput, setCouponInput] = useState("");
  const [discount, setDiscount] = useState(0);

  const description =
    '"The Developer\'s Quest With Real-World Scenarios" is an intensive 2-week program designed to give aspiring developers a deep dive into various technical career paths. Through a combination of learning, practice, and mentorship, participants will gain hands-on experience with real-world scenarios, helping them make informed decisions about their career direction in the tech industry.';
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
    "not shy to ask questions. :)"
  ];

  const Outcomes = [
    "Understand the different technical career paths offered in the tech industry.",
    "Acquire practical experience with real-world scenarios.",
    "Make informed decisions about your career direction.",
    "Build a network of peers and potential career connections.",
    "Gain insights and networking opportunities with experienced mentors and industry professionals."
  ];
  const add_coupon = (couponData: Coupon | null) => {
    setCoupon(couponData);
  };
  const price = 30;

  const Topics = [
    {
      title: "Introduction",
      image: CoverImage.src,
    },
    {
      title: "Introduction",
      image: CoverImage.src,
    },
    {
      title: "Introduction",
      image: CoverImage.src,
    },
    {
      title: "Introduction",
      image: CoverImage.src,
    },
  ];

  const [error, setError] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(price);

  // Function to handle applying coupon
  const handleApplyCoupon = () => {
    setError("");
    fetch("/api/CouponSystem/validate-coupon.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ coupon: couponInput }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to validate coupon");
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.discount) {
          const discountPercentage = data.discount;
          applyDiscount(discountPercentage);
          setCoupon({ name: couponInput, discount: discountPercentage });
          setCouponInput("");
        } else {
          setError(data.message || "Invalid coupon code");
          setDiscountedPrice(price);
          setCoupon(null);
        }
      })
      .catch((err) => {
        setError("An error occurred. Please try again.");
        setDiscountedPrice(price);
        setCoupon(null);
      });
  };

  const applyDiscount = (discountPercentage: any) => {
    const discountedAmount = price * (discountPercentage / 100);
    const newPrice = price - discountedAmount;
    setDiscountedPrice(newPrice);
  };

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
              {" "}
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
            <div className='w-1/3 h-full flex-shrink '>
              <div className='w-full p-1 bg-purple-800/20 rounded-3xl'>
                <div className='w-full relative aspect-square bg-purple-800 min-h-[200px] rounded-3xl cursor-pointer'>
                  <div className='text-base px-3 md:px-6 absolute  grid place-items-center   lg:text-3xl font-medium text-gray-200 h-full w-full '>
                    <div className='w-full h-[400px]  flex justify-center items-center'>
                      <div className='rounded-md h-4/5 w-full text-gray-300 text-4xl font-bold flex flex-col justify-end gap-5 p-4'>
                        <span className='flex justify-center h-full items-center relative'>
                          <span className='text-5xl font-bold relative'>
                            ${discountedPrice.toFixed(2)}
                          </span>
                          {coupon && (
                            <>
                              <span className='text-xl font-bold line-through px-2 text-gray-300/40'>
                                ${price.toFixed(2)}
                              </span>
                              <span className='text-xl text-yellow-500 animate-pulse hover:scale-105 transition-all'>
                                {coupon.discount}%
                              </span>
                            </>
                          )}
                        </span>
                        {error && (
                          <span className='text-red-500 text-sm'>{error}</span>
                        )}

                        <input
                          type='text'
                          className='inline-block p-2 text-lg text-black bg-blue-200 border-blue-500 transition-all shadow-[0_0_0_0px_rgba(13,119,252,0.5)] focus:shadow-[0_0_0_3px_rgba(13,119,252,0.5)] border rounded-lg focus:outline-none overflow-y-auto overflow-x-hidden w-full h-20'
                          onChange={(e) => setCouponInput(e.target.value)}
                          value={couponInput}
                          placeholder='Enter coupon code'
                        />
                        <ButtonComponent
                          CTAtext='Apply Coupon'
                          onClick={handleApplyCoupon}
                          className='!h-fit'
                        />
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
