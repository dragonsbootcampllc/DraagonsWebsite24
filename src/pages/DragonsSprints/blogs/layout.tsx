import { useRouter } from "next/router";
import BlogSidebar from "./components/Sidebar/Sidebar";
import OverView from "./components/OverView/OverView";
import Link from "next/link";
import { ReactNode } from "react";

// Define the BlogLayout component with TypeScript
const BlogLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  // Function to format URL titles
  const formatTitles = (text: string): string => {
    return text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      .replace("Ai ", "AI ")
      .replace(" Ai ", " AI ")
      .replace(" Api ", " API ")
      .replace(" Api ", " API ");
  };

  // Function to create breadcrumb navigation
  const currentUrlEnds = () => {
    const titles = router.asPath.split("/").filter(Boolean);
    let currentUrl = "";
    return titles.map((title) => {
      currentUrl += "/" + title;
      return { title: formatTitles(title), url: currentUrl };
    });
  };

  return (
    <div className="grid mb-20 relative z-20 place-items-center">
      <div className="w-full relative grid pt-20 max-w-[1400px]">
        <div className="w-full flex relative">
          







          {/* Sidebar - fixed */}
          <div className="w-[32rem] sticky top-24 h-screen overflow-y-auto no-scrollbar">
            <BlogSidebar />
          </div>











          {/* Main Content Area */}
          <div className="w-full relative px-2 md:px-10 flex flex-col">
            
            {/* Breadcrumb navigation */}
            <div className="w-full min-h-24 select-none text-gray-400 box-border flex items-center md:text-2xl mb-10 md:m-0 gap-4 font-semibold">
              <div>
                {currentUrlEnds().map(({ title, url }, index, arr) => (
                  <span key={index} className="flex items-center">
                    <Link href={url}>
                      <span className={`cursor-pointer hover:text-blue-500 ${index + 1 === arr.length ? "text-slate-200" : "text-gray-500"}`}>
                        {title}
                      </span>
                    </Link>
                    {index + 1 !== arr.length && (
                      <span className={`mx-2 text-gray-400`}>&gt;</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Dynamic children content */}
            <div className="min-h-full w-full box-border flex justify-center">
              {children}
            </div>
          </div>











          {/* Overview section - fixed */}
          <div className="w-[28rem] h-screen sticky top-24 no-scrollbar">
            <OverView
              Instructor="Dragons Team"
              tags={["HTML", "CSS", "JS", "React", "NextJS", "Redux"]} // 3 tags min & 6 max
              Description="This is a mini sprint course that will help you learn the basics of web development." // 150 characters max
              LessonNum={5} // Number of Topics in the course
              Topics={[
                "What is HTML?",
                "What is CSS?",
                "What is JS?",
                "What is React?",
                "What is NextJS?",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
