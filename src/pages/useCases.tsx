import { FaArrowDown } from "react-icons/fa";
import Tabs from "../components/UseCases/Taps";
import Section from "@/components/UseCases/Section";

export default function Home() {
  return (
    <>
      <section className="py-20 min-h-screen flex justify-center items-center">
        <div className="container mx-auto ">
          <h1 className="text-6xl font-bold text-center mb-8">
            Transform Your <span className="text-fuchsia-800">Career</span> with <span className="text-fuchsia-800">Dragons</span> Tech Bootcamp
          </h1>

          <h1 className="text-4xl font-bold text-center mb-8">
            Why You Should Take Dragons Tech Bootcamp?
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-around mt-6">
            <FaArrowDown
              className="w-16 h-16 animate-bounce text-fuchsia-800"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
      <section className="py-20 min-h-screen">
        <div className="flex items-center justify-center flex-wrap">
          <h3 className="text-5xl text-center">What Are Our Programs For?</h3>
          <Tabs />
        </div>
      </section>
      <section className="py-20 min-h-screen">
        <div className="min-h-screen flex items-center justify-center flex-wrap">
          <h3 className="text-5xl">How we will help you?</h3>
          <div className="container mx-auto p-6">
            <Section
              title="Computer Science Graduates & IT Masters"
              imgSrc="https://via.placeholder.com/400"
              imgAlt="Placeholder Image 1"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <Section
              title="Aspiring Developers"
              imgSrc="https://via.placeholder.com/400"
              imgAlt="Placeholder Image 2"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              reverse
            />
            <Section
              title="Upskilling Devs"
              imgSrc="https://via.placeholder.com/400"
              imgAlt="Placeholder Image 2"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <Section
              title="Tech Entrepreneurs"
              imgSrc="https://via.placeholder.com/400"
              imgAlt="Placeholder Image 2"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              reverse
            />
          </div>
        </div>
      </section>
    </>
  );
}
