import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import slugify from "slugify";
import QuizCompo from "./Quiz/QuizCompo";
import OverView from "./OverView/OverView";
import Sidebar from "./Sidebar/Sidebar";
import { Quiz } from "../utils/blog";

interface BlogViewProps {
  title: string;
  markdownContent: string;
  quiz: Quiz[];
  category: string;
  blog: string;
}

interface DocumentHeader {
  id: string;
  title: string;
  type: string;
}

export default function BlogView({ title, markdownContent, quiz, category, blog }: BlogViewProps) {
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  const [documentHeaders, setDocumentHeaders] = useState<DocumentHeader[]>([]);
  const router = useRouter();


  const handleId = (type: string, text: string) => {
    const id = slugify(text, { lower: true });
    setDocumentHeaders((prevHeaders) => {
      if (!prevHeaders.some((header) => header.id === id)) {
        return [...prevHeaders, { id, title: text, type }];
      }
      return prevHeaders;
    });
    return id;
  };

  const navigateToHeader = (id: string) => {
    const headerElement = document.getElementById(id);
    if (headerElement) {
      headerElement.scrollIntoView({ behavior: "smooth" });
      setActiveSectionId(id);
      router.push(`#${id}`, undefined, { shallow: true });
    }
  };

  useEffect(() => {
    const updateActiveHeader = () => {
      const headerPositions = documentHeaders.map((header) => {
        const element = document.getElementById(header.id);
        return {
          id: header.id,
          top: element?.getBoundingClientRect().top || Number.POSITIVE_INFINITY,
        };
      });

      const nearestHeader = headerPositions.reduce(
        (closest, current) =>
          current.top >= 50 && current.top < closest.top ? current : closest,
        { id: "", top: Number.POSITIVE_INFINITY }
      );

      if (nearestHeader.id) {
        setActiveSectionId(nearestHeader.id);
      }
    };

    window.addEventListener("scroll", updateActiveHeader);

    return () => {
      window.removeEventListener("scroll", updateActiveHeader);
    };
  }, [documentHeaders]);

  return (
    <div className={`h-full font-sans relative max-w-[1400px] w-full flex pt-16`}>

    <div className="max-w-[20rem] w-full max-md:hidden sticky top-24 h-screen overflow-y-auto no-scrollbar">
      <Sidebar />
    </div>



      <div className='w-full h-full text-white px-4 box-border text-balance pb-28'>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => (
              <h1
                className='text-3xl md:text-4xl lg:text-5xl inline-block font-bold mb-4 mt-10'
                id={handleId("h1", String(props.children))}
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <h2
                className='text-xl md:text-3xl lg:text-4xl inline-block font-bold mb-4 mt-10'
                id={handleId("h2", String(props.children))}
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className='text-md md:text-2xl lg:text-3xl inline-block font-bold mb-4 mt-10'
                id={handleId("h3", String(props.children))}
                {...props}
              />
            ),
            h4: ({ node, ...props }) => (
              <h4
                className='text-base md:text-xl lg:text-2xl inline-block font-bold mb-4 mt-10'
                id={handleId("h4", String(props.children))}
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p
                className='text-sm md:text-lg lg:text-xl font-semibold inline-block text-slate-200 my-2'
                {...props}
              />
            ),
            a: ({ node, ...props }) => (
              <a
                className='text-sm md:text-lg lg:text-xl font-semibold inline-block underline text-blue-500 hover:text-blue-600'
                {...props}
              />
            ),
            img: ({ node, ...props }) => (
              <img
                className='w-full max-w-[100%] max-h-[500px] my-4 m-auto rounded-3xl cursor-zoom-in active:scale-150 active:shadow-xl shadow active:z-50 transition-all select-none'
                {...props}
              />
            ),
            li: ({ node, ...props }) => (
              <li
                className='text-sm md:text-lg lg:text-xl my-1 inline-block font-semibold list-decimal ml-2 md:ml-6 '
                {...props}
              />
            ),
            b: ({ node, ...props }) => (
              <b className='font-bold max-w-full inline-block' {...props} />
            ),
            code: ({ node, ...props }) => (
              <code className='bg-[#481b1b] text-white rounded-md px-2 py-1 font-mono text-sm md:text-base' {...props} />
            ),
          }}>
          {markdownContent}
        </ReactMarkdown>

        <div className="mt-20">
          <h2 className="font-bold mb-4 max-md:font-bold text-6xl text-purple-500 max-md:text-3xl">Test your information</h2>
          {
            quiz && 0 != quiz.length ?
              (<div className="flex flex-col gap-4">
                <QuizCompo questions={Object.values(quiz).map(({ question, options }) => { return { question, choices: Object.values(options) } })} category={category} blog={blog} />
              </div>) : (<></>)
          }
        </div>
      </div>








        <div className="max-w-[20rem] w-full max-lg:hidden h-screen sticky top-24 no-scrollbar">
          <OverView
            Instructor="Dragons Team"
            tags={["React", "JavaScript", "CSS"]}
            Description="This is a brief description of the course."
            LessonNum={5}
            Topics={["Introduction", "Components", "State Management"]}
          />
        </div>


























      {/*
        <div className='max-w-[300px]  w-full hidden top-28 sticky h-auto  overflow-y-auto items-start justify-start text-start text-md font-semibold md:flex flex-col '>
      
                <h4 className='text-white text-sm select-none'>ON THIS PAGE</h4>
                <ul className=''>
                    {documentHeaders.map((header,i) => (
                        <li
                            key={header.id}
                            className={`cursor-pointer py-2 transition-all ${
                                activeSectionId === header.id ? "text-blue-500 " : "text-white "
                            } ${
                                header.type === "h1"
                                    ? "hidden"
                                    :  header.type === "h2"
                                    ? "pl-2 text-md  font-normal "
                                    :header.type === "h3"
                                    ? "pl-8 ml-4 text-md border-l-2  font-light"
                                    : "pl-11"
                            }`}
                            onClick={() => navigateToHeader(header.id)}>
                            {header.title}
                        </li>

                    ))}

                </ul>
            </div>
             */}
    </div>
  );
}
