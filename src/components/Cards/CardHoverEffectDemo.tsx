import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo(props:any) {
  return (
    <div className="max-w-5xl mx-auto px-8">
         {props.Values && (
        <div className='text-3xl  flex-col content-center max-w-4xl text-center md:text-5xl z-10 flex justify-center m-auto relative mb-3 text-gray-200 font-semibold'>
          <h1 className='md:text-xl text-center text-lg font-medium text-purple-800 uppercase'>
            {props.Values.mainHeader}
          </h1>
       <div className="w-full grid place-items-center">
       <h1 className="max-w-[800px]">
            {props.Values.subHeader}
          </h1>
        </div>
          <p className='text-white/50 text-lg md:text-base head container mx-auto flex flex-col gap-7 justify-center text-center max-w-[800px] pt-5'>
            {props.Values.description}
          </p>
        </div>
      )}
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Innovation",
    description:
      "Embracing cutting-edge technologies and teaching methods to keep our students ahead of the curve.",
  },
  {
    title: "Excellence",
    description:
      "Striving for the highest standards in education and training, ensuring our graduates are industry-ready.",
  },
  {
    title: "Support",
    description:
      "Providing a nurturing and collaborative learning environment with mentorship and resources to help students succeed.",
  },
  {
    title: "Integrity",
    description:
      "Valuing transparency and honesty in all interactions, maintaining the highest ethical standards.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Leveraging data and feedback to constantly refine and enhance our programs.",
  },
  {
    title: "Impact",
    description:
      "Committed to making a positive difference in the tech industry and the lives of our students through transformative education.",
  },
];
CardHoverEffectDemo.defaultProps = {
  Values: {
    mainHeader: "OUR Values",
    subHeader: "Our Core Values Drive Everything We Do ",
    description:
      " Our values are the foundation of our culture and the guiding principles that shape our programs, our team, and our community. They are the heart of our organization, and they inspire us to be the best we can be every day.",
  },
};

export default CardHoverEffectDemo;


