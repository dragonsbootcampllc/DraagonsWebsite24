import React from "react";
import hand from "../../public/JSON/68978-3d-hand.json";
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });
function FormSideSection() {
  return (
    <div className="lg:w-[500px] relative  h-full flex justify-center mx-auto min-w-[300px]">
      <div className="w-[200px] hover:scale-90 duration-1000 lg:mb-[100px] lg:w-[500px]">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: hand,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={400}
          width={400}
        />
        <div>
          <h1
            className="text-2xl font-bold  text-center w-full hidden lg:block"
            style={{ fontFamily: "Poppins-Bold", width: "400" }}
          >
            Be one of us and let&apos;s change people&apos;s lives ✨{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default FormSideSection;
