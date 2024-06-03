import Image from "next/image";
function TestmonialSection() {
  const Head = {
    logo_image: "",
    Logo_name: "Neferdata",
  };
  const Description = {
    text1: "Dragons Bootcamp has been essential in",
    span1: "helping us find the new talent.",
    text2:
      "Their developers go beyond just implementing tasks; they take full ownership, consistently deliver outcomes, and",
    span2: "add their own perspective and ideas.",
  };
  const Info = {
    image: "/images/Kamil.jpeg",
    name: "Kamil litman",
    designation: "Founder & CEO @ Neferdata",
  };
  return (
    <div className="w-full max-w-[1440px] h-[800px] relative mt-5">
      <div className="w-full absolute h-[30%] bg-[#030014] shadow-[0px_2px_20px_20px_rgba(3,0,20,0.97)] z-10 rounded-b-[50%]"></div>
      <div className="container mx-auto flex justify-center h-[55%] relative w-full">
        <div className="content z-[20] absolute flex flex-col gap-6 max-w-[600px]">
          <div className="head flex justify-center items-center gap-2">
            <div className="logo h-11 w-11 rounded-full bg-gray-400 relative overflow-hidden">
              <Image
                src="/Brands/neferdata-logo.png"
                alt="logo"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="name text-xl">{Head.Logo_name} </div>
          </div>
          <div className="text text-white/60 text-[12px] md:text-xl text-center">
            {Description.text1}
            <span className="  text-white"> {Description.span1} </span>
            {Description.text2}
            <span className=" text-white"> {Description.span2}</span>
          </div>
          <div className="info flex justify-center items-center md:mt-4 gap-1 flex-col">
            <div className="image rounded-full flex justify-center items-center p-1  ring-1">
              <Image
                src={Info.image}
                alt="logo"
                width="80"
                height="80"
                className=" rounded-full"
              />
            </div>
            <div className="items text-center">
              <h3 className=" text-2xl">{Info.name}</h3>
              <p className=" text-[14px] md:text-xl text-white/60">
                {Info.designation}
              </p>
            </div>
          </div>
        </div>
        <div className="grediant-background rounded-b-[85px] bg-gradient-to-r from-[#236c8c] to-[#a3127e]  w-[calc(100%-80px)] z-[2] h-[calc(100%-40px)] absolute   ">
          {" "}
        </div>
        <div className="colored-background shadow-[inset_0px_0px_10px_2px_rgba(255,255,255,0.2)] mx-auto  bg-gradient-to-r from-[#2c2d7c] to-[#18113f] rounded-b-[120px]  w-full z-[1] h-full absolute ">
          {" "}
        </div>
      </div>
    </div>
  );
}
export default TestmonialSection;
