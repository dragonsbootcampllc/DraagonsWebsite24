interface SectionProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
  content: string;
  reverse?: boolean;
}
export default function Section({
  title,
  imgSrc,
  imgAlt,
  content,
  reverse,
}: SectionProps) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-around my-8 p-6 shadow-lg ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      <img
        className="mx-4 my-2"
        src={imgSrc}
        alt={imgAlt}
        width={400}
        height={400}
      />
      <div className="w-full md:w-1/2 mx-4 my-2">
        <h2 className="text-3xl font-bold mb-4 sm:text-center">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}
