import React from "react";
import Link from "next/link";
import Button from "@/components/Micros/Button";
import ButtonLite from "@/components/Micros/ButtonLite";

interface CTAProps {
  ctaApplyText: string;
  ctaReadMoreText: string;
}

interface HeadTextProps {
  headlineText: string;
  heroHighlightedText: string;
  subheadlineText: string;
  descriptionText: string;
}

const CTA: CTAProps = {
  ctaApplyText: "Apply Now",
  ctaReadMoreText: "Read More",
};

const headText: HeadTextProps = {
  headlineText: "Continuous Learning and Growth with ",
  heroHighlightedText: "Internship Programs",
  subheadlineText: " Available Year-Round",
  descriptionText:
    "We offer internship programs throughout the year to provide continuous learning and growth opportunities.",
};

const YearRoundedInternship: React.FC = () => {
  return (
    <div className="w-full container mx-auto flex flex-col min-h-screen justify-center items-center gap-8 text-white px-4 sm:px-6 lg:px-8">
      <div className="heading md:max-w-[1000px] text-center">
        <h1
          style={{ fontFamily: "interV" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto z-10 relative mb-3 text-gray-200 font-semibold"
        >
          {headText.headlineText}
          <span className="bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text">
            {headText.heroHighlightedText}
          </span>
          {headText.subheadlineText}
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-white/70 mt-4 mb-8">
          {headText.descriptionText}
        </p>
      </div>
      <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/Pricing" passHref>
          <div className="h-12 w-48 md:h-16 md:w-64">
            <Button CTAtext={CTA.ctaApplyText} />
          </div>
        </Link>
        <Link href="/YearRoundedInternship" passHref>
          <div className="h-12 w-48 md:h-16 md:w-64">
            <ButtonLite CTAtext={CTA.ctaReadMoreText} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default YearRoundedInternship;
