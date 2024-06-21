import Image from "next/image";
import Link from "next/link";

const Badge = ({ text }) => (
  <div className='badge w-fit mx-auto text-white/70 rounded-lg border border-white/40 px-2 py-1'>
    {text}
  </div>
);

const Card = ({
  isPremier,
  title,
  description,
  overlayStyle,
  label,
  isDisabled,
  image,
}) => (
  <Link
    href='/Contact'
    passHref={true}
    className={`bg-[#181619] rounded-2xl min-h-[500px]   relative overflow-hidden text-center p-5 flex flex-col gap-5 cursor-pointer transition-all hover:scale-[1.02] duration-300
        ${
          isPremier
            ? "shadow-[0_0_0_0_#fff] hover:shadow-[0_0_.5rem_0rem_rgb(234,179,8)] border-2 border-[rgba(162,121,0,0.6)]"
            : "hover:shadow-[0_0_.5rem_0rem_rgba(251,53,208,1)]"
        }
        ${
          isDisabled &&
          "hover:!scale-100 hover:shadow-none !opacity-40 !cursor-not-allowed"
        }`}>
    <div className='flex justify-between items-center'>
      <div className='grid w-full place-items-center'>
        <div
          className={`text-[14px] px-2 border border-white/60 rounded-xl ${
            isPremier && "border-yellow-500 text-yellow-500"
          }`}>
          {label}
        </div>
        <h1 className='font-semibold text-3xl bg-gradient-to-r from-white to-gray-200  text-transparent bg-clip-text'>
          {title}
        </h1>
      </div>
    </div>
    <p className='text-[14px] text-start font-semibold'>{description}</p>
    <div
      className='absolute top-0 left-0 w-full h-full opacity-50'
      style={{ background: overlayStyle }}
    />
    <div className='flex justify-center h-full w-full relative items-center'>
      <Image
        src={image}
        fill={true}
        alt='Bootcamp6Month'
        style={{ objectFit: "contain" }}
        className='absolute bottom-0 left-0 w-full h-full'
      />
    </div>
    <p className='opacity-45'>click on the card to learn more</p>
  </Link>
);

function TrainingServiceSection({ HeadData, CardsData }) {
  return (
    <div className='w-full min-h-screen max-w-[1400px] flex flex-col gap-8 text-white'>
      <div className='head container mx-auto flex flex-col gap-7 justify-center text-center max-w-[800px] pt-5'>
        <h1 className='md:text-2xl grid place-items-center text-xl md:text-center text-start font-medium text-purple-800 uppercase'>
          {HeadData.badge}
        </h1>

        <h1 className='text-4xl md:text-6xl font-semibold'>
          {HeadData.title_1}
          <span className='bg-gradient-to-r from-pink-600 to-blue-500 text-transparent bg-clip-text'>
            {HeadData.title_span}
          </span>
          {HeadData.title_2}
        </h1>
        <p className='text-white/50 text-lg md:text-base'>
          {HeadData.description}
        </p>
      </div>
      <div className='content container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {CardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default TrainingServiceSection;
