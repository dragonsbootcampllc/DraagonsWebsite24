import React, { useState, useEffect } from "react";
import styles from "../../styles/pricing.module.css";
import ButtonComponent from "../Micros/Button";
import ButtonComponentlite from "../Micros/ButtonLite";
import Link from "next/link";

export interface PricingTierFrequency {
  id: string;
  value: number;
  label: string;
  priceSuffix: string;
}

export interface PricingTier {
  program: string;
  name: string;
  id: string;
  href: string;
  discountPrice: Record<number, number>;
  price: Record<number, number>; // Updated to accept numbers directly
  description: string | React.ReactNode;
  features: string[];
  featured?: boolean;
  highlighted?: boolean;
  cta: string;
  soldOut?: boolean;
}

interface PricingTierCardProps {
  tier: PricingTier;
  frequency: PricingTierFrequency;
}

const PricingTierCard: React.FC<PricingTierCardProps> = ({
  tier,
  frequency,
}) => {
  const [coupon, setCoupon] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 2000); // Hide error after 2 seconds
      return () => clearTimeout(timer); // Clear timeout if error changes
    }
  }, [error]);

  // Function to handle applying coupon
  const handleApplyCoupon = () => {
    fetch("/api/CouponSystem/validate-coupon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ coupon, program: tier.program }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to validate coupon");
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.discount) {
          applyDiscount(data.discount);
        } else {
          setError(data.message || "Invalid coupon code");
          setDiscount(0);
        }
      })
      .catch((err) => {
        setError("Invalid coupon code");
        setDiscount(0);
      });
  };

  // Function to calculate and apply discount
  const applyDiscount = (discountPercentage: number) => {
    const frequencyValue: number = frequency.value;

    if (!tier.price[frequencyValue]) {
      setError("Price not found for selected frequency");
      setDiscount(0);
      return;
    }

    const priceNumber: number = tier.price[frequencyValue];
    const discountedPrice: number = priceNumber * (1 - discountPercentage / 100);

    setDiscount(Math.floor(discountedPrice));
    setError("");
  };

  // Function to handle coupon input change
  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoupon(e.target.value);
  };

  // Render
  const priceDisplay: string = `$${tier.price[frequency.value] ?? 0}`;
  const queryParams = new URLSearchParams({ program: tier.program }).toString();

  return (
    <div className="flex flex-wrap container xl:flex-nowrap items-center bg-purple-800/20 backdrop-blur-md mx-auto mt-4 max-w-2xl rounded-3xl ring-1 ring-gray-400/70 dark:ring-gray-700 xl:mx-0 xl:flex xl:max-w-none">
      <div className="p-8 sm:p-10 xl:flex-auto">
        <h3 className="text-white text-3xl font-semibold tracking-tight">
          {tier.name}
        </h3>
        <p className="mt-6 text-xl leading-7 text-white/70">
          {tier.description}
        </p>
        <div className="mt-12 flex items-center gap-x-4">
          <div className="h-px flex-auto bg-gray-700" />
        </div>
        {/* Coupon code section */}
        <div className="mt-4 text-center grid place-items-center gap-3">
          <h1 className="text-2xl text-gray-400">Have a coupon code?</h1>
          <input
            type="text"
            className="mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 w-full h-16 focus:ring-blue-500 focus:border-transparent bg-gray-800 border-gray-600"
            placeholder="Enter coupon code"
            value={coupon}
            onChange={handleCouponChange}
          />
          <div className="h-4">
            {error && <p style={{ color: "red", fontSize: "20px" }}>{error}</p>}
          </div>
          <div onClick={handleApplyCoupon} className="h-14 w-60">
            <ButtonComponentlite CTAtext="Apply Coupon" />
          </div>
        </div>
      </div>
      <div className="-mt-2 p-2 xl:pr-8 xl:mt-0 w-full xl:max-w-md xl:flex-shrink-0">
        <div className={`${styles.fancyGlass} rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-600 xl:flex xl:flex-col xl:justify-center xl:py-16`}>
          <div className="mx-auto max-w-xs px-8">
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              {discount ? (
                <>
                  <span className="text-white text-6xl font-bold tracking-tighter">
                    ${discount}
                  </span>
                  <span className="text-white line-through">{priceDisplay}</span>
                </>
              ) : (
                <span className="text-white text-6xl font-bold tracking-tighter">
                  {priceDisplay}
                </span>
              )}
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-400">
                {frequency.priceSuffix}
              </span>
            </p>
            <Link href={`/Apply?${queryParams}&coupon=${coupon}`} className="flex justify-center mt-8 flex-shrink-0">
              <div className="h-16 w-64">
                <ButtonComponent CTAtext={tier.cta} />
              </div>
            </Link>
            <p className="mt-2 text-xs leading-5 text-gray-400">
              Sign up in seconds, no credit card required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTierCard;
