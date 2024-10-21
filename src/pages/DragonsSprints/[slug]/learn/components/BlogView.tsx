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

export default function BlogView({
  title,
  markdownContent,
  quiz,
  category,
  blog,
}: BlogViewProps) {
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
    <div
      dir="rtl"
      lang="ar"
      className={`h-full font-sans relative max-w-[1600px] w-full flex pt-16`}
    >
      <div className="max-w-[20rem] w-full max-md:hidden sticky top-24 h-screen overflow-y-auto no-scrollbar">
        <Sidebar />
      </div>

      <div className="w-full h-full text-white px-8 box-border text-balance pb-28">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => (
              <h1
                className="text-3xl block md:text-4xl lg:text-5xl font-bold mb-4 mt-10"
                id={handleId("h1", String(props.children))}
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <h2
                className="text-xl block md:text-3xl lg:text-4xl font-bold mb-4 mt-10"
                id={handleId("h2", String(props.children))}
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className="text-md block md:text-2xl lg:text-3xl font-bold mb-4 mt-10"
                id={handleId("h3", String(props.children))}
                {...props}
              />
            ),
            h4: ({ node, ...props }) => (
              <h4
                className="text-base md:text-xl lg:text-2xl inline-block font-bold mb-4 mt-10"
                id={handleId("h4", String(props.children))}
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p
                className="text-sm md:text-lg block lg:text-xl font-semibold text-slate-200 my-2"
                {...props}
              />
            ),
            a: ({ node, ...props }) => (
              <a
                className="text-sm md:text-lg lg:text-xl font-semibold inline-block underline text-blue-500 hover:text-blue-600"
                {...props}
              />
            ),
            img: ({ node, ...props }) => {
              const { alt, src } = props;
              if (!src) return null; // Add this check for undefined src

              if (src.endsWith(".video")) {
                const videoSrc = src.slice(0, src.length - 6);
                return (
                  <video
                    autoPlay
                    className="my-4 block max-h-[700px] aspect-video max-w-[700px] w-full m-auto rounded-3xl shadow transition-all"
                    {...(props as React.VideoHTMLAttributes<HTMLVideoElement>)}
                    src={videoSrc}
                  />
                );
              } else if (src.endsWith(".iframe")) {
                const videoSrc = src.slice(0, src.length - 7);
                return (
                  <iframe
                    className="my-4 block max-h-[700px] max-w-[700px] aspect-video w-full m-auto rounded-3xl shadow transition-all"
                    src={videoSrc}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    {...(props as React.IframeHTMLAttributes<HTMLIFrameElement>)}
                    allowFullScreen
                  />
                );
              } else if (src.endsWith(".logo")) {
                const logoSrc = src.slice(0, src.length - 5);
                return (
                  <img
                    className="my-4 block max-h-[200px] max-w-[200px] w-full rounded-sm active:shadow-xl active:z-50 transition-all select-none"
                    {...props}
                    src={logoSrc}
                    alt={alt}
                  />
                );
              } else {
                return (
                  <img
                    className="my-4 inline-block max-h-[700px] max-w-[700px] m-auto cursor-zoom-in w-full rounded-3xl active:scale-150 active:shadow-xl shadow active:z-50 transition-all select-none"
                    {...props}
                    alt={alt}
                  />
                );
              }
            },
            li: ({ node, ...props }) => (
              <li
                className="text-sm md:text-lg block lg:text-xl my-1 font-semibold list-decimal ml-2 md:ml-6 "
                {...props}
              />
            ),
            b: ({ node, ...props }) => (
              <b className="font-bold max-w-full inline-block" {...props} />
            ),
            code: ({ node, ...props }) => (
              <code
                className="bg-[#481b1b] text-white rounded-md px-2 py-1 font-mono text-sm md:text-base"
                {...props}
              />
            ),
          }}
        >
          {markdownContent}
        </ReactMarkdown>

        {quiz && quiz.length !== 0 ? (
          <div className="mt-20">
            <h2 className="font-bold mb-4 max-md:font-bold text-6xl text-purple-500 max-md:text-3xl">
              اختبر معلوماتك
            </h2>

            <div className="flex flex-col gap-4">
              <QuizCompo
                questions={Object.values(quiz).map(({ question, options }) => {
                  return { question, choices: Object.values(options) };
                })}
                category={category}
                blog={blog}
              />
            </div>
          </div>
        ) : null}
      </div>

      <div className="max-w-[20rem] w-full max-lg:hidden h-screen sticky top-24 no-scrollbar">
        <OverView
          Instructor="Dragons Team"
          Description="فهم المسارات الفنية المهنية مع سيناريوهات من الواقع الفعلي وتعلم مكثف لمدة 7 أيام من الممارسة والإرشاد."
          LessonNum={5}
          Topics={[
            "مقدمة",
            "لماذا هذا كثير؟!",
            "معركة المناصب",
            "خريطة الطريق الذهبية",
          ]}
        />
      </div>
    </div>
  );
}
