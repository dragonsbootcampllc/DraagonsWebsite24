import { useRouter } from "next/router";
import BlogSidebar from "./components/Sidebar/Sidebar";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const BlogLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const formatTitles = (text: string): string => {
    let formatedText = text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    formatedText = formatedText
      .replace("Ai ", "AI ")
      .replace(" Ai ", " AI ")
      .replace(" Api ", " API ")
      .replace(" Api ", " API ");

    return formatedText;
  };

  const currentUrlEnds = () => {
    const titles = router.asPath.split("/").filter(Boolean);
    let currentUrl = "";
    return titles.map((title) => {
      currentUrl += "/" + title;
      return { title: formatTitles(title), url: currentUrl };
    });
  };

  return (
    <div className="relative container mx-auto z-20 min-h-screen">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Mobile sidebar toggle */}
          <div className="md:hidden fixed top-4 left-4 z-50">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-white p-2 rounded-md bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Sidebar */}
          <div
            className={`fixed inset-y-0 left-0 transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:relative md:translate-x-0 transition duration-200 ease-in-out z-30 w-[350px]  overflow-y-auto`}
          >
            <div className="max-h-screen">
              <BlogSidebar />
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 ">
            <div className="py-6">
              {/* Breadcrumbs */}
              <nav className="text-sm sm:text-base lg:text-lg font-medium text-gray-400 mb-4">
                <ol className="list-none p-0 inline-flex flex-wrap">
                  {currentUrlEnds().map(({ title, url }, index, arr) => (
                    <li key={index} className="flex items-center">
                      <Link href={url} passHref>
                        <span
                          className={`cursor-pointer transition-all hover:text-blue-400 ${
                            index + 1 === arr.length
                              ? "text-white"
                              : "text-gray-400"
                          }`}
                        >
                          {title}
                        </span>
                      </Link>
                      {index + 1 !== arr.length && (
                        <span className="mx-2 text-gray-500">&gt;</span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Content */}
              <div className="bg-gray-800 rounded-lg shadow-xl p-4 sm:p-6 lg:p-8">
                {children}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default BlogLayout;