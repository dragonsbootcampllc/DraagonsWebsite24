import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import slugify from 'slugify';

interface BlogViewProps {
    title: string;
    markdownContent: string;
}

interface DocumentHeader {
    id: string;
    title: string;
    type: string;
}

export default function BlogView({ title, markdownContent }: BlogViewProps) {
    const [activeSectionId, setActiveSectionId] = useState<string>('');
    const [documentHeaders, setDocumentHeaders] = useState<DocumentHeader[]>([]);
    const router = useRouter();

    const handleId = (type: string, text: string) => {
        const id = slugify(text, { lower: true });
        setDocumentHeaders((prevHeaders) => {
            if (!prevHeaders.some(header => header.id === id)) {
                return [...prevHeaders, { id, title: text, type }];
            }
            return prevHeaders;
        });
        return id;
    };

    const navigateToHeader = (id: string) => {
        const headerElement = document.getElementById(id);
        if (headerElement) {
            headerElement.scrollIntoView({ behavior: 'smooth' });
            setActiveSectionId(id);
            router.push(`#${id}`, undefined, { shallow: true });
        }
    };

    useEffect(() => {
        const updateActiveHeader = () => {
            const headerPositions = documentHeaders.map(header => {
                const element = document.getElementById(header.id);
                return { id: header.id, top: element?.getBoundingClientRect().top || Number.POSITIVE_INFINITY };
            });

            const nearestHeader = headerPositions.reduce((closest, current) => {
                return (current.top >= 50 && current.top < closest.top) ? current : closest;
            }, { id: '', top: Number.POSITIVE_INFINITY });

            if (nearestHeader.id) {
                setActiveSectionId(nearestHeader.id);
            }
        };

        window.addEventListener('scroll', updateActiveHeader);

        return () => {
            window.removeEventListener('scroll', updateActiveHeader);
        };
    }, [documentHeaders]);

    return (
        <div className="h-screen overflow-hidden w-full flex pt-24">
            <div className="w-full h-full text-white overflow-hidden overflow-y-auto pl-10 pr-12 box-border text-balance pb-28">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h1: ({ node, ...props }) => <h1 className="text-5xl w-full max-w-full inline-block font-bold mb-4 mt-10" id={handleId('h1', props.children.toString())} {...props} />,
                        h2: ({ node, ...props }) => <h2 className="text-3xl w-full max-w-full inline-block font-bold mb-4 mt-10" id={handleId('h2', props.children.toString())} {...props} />,
                        h3: ({ node, ...props }) => <h3 className="text-2xl w-full max-w-full inline-block font-bold mb-4 mt-10" id={handleId('h3', props.children.toString())} {...props} />,
                        h4: ({ node, ...props }) => <h4 className="text-xl max-w-full inline-block font-bold mb-4 mt-10" id={handleId('h4', props.children.toString())} {...props} />,
                        p: ({ node, ...props }) => <p className="text-lg max-w-full inline-block font-semibold text-slate-200 my-2" {...props} />,
                        a: ({ node, ...props }) => <a className="text-lg max-w-full inline-block font-semibold underline text-blue-500 hover:text-blue-600" {...props} />,
                        img: ({ node, ...props }) => <img className="my-4 max-h-[500px] max-w-[500px] m-auto rounded-3xl cursor-zoom-in active:scale-150 active:shadow-xl shadow active:z-50 transition-all select-none" {...props} />,
                        li: ({ node, ...props }) => <li className="my-1 max-w-full inline-block text-lg font-semibold list-decimal ml-14 w-full" {...props} />,
                        b: ({ node, ...props }) => <b className="font-bold max-w-full inline-block" {...props} />,
                        code: ({ node, ...props }) => <b className="bg-[#481b1b] max-w-full inline-block rounded-md px-3 py-1 font-mono" {...props} />,
                    }}
                >
                    {markdownContent}
                </ReactMarkdown>
            </div>

            <div className="w-[500px] h-full overflow-hidden pl-6 overflow-y-auto items-start justify-start text-start text-lg font-semibold flex flex-col gap-2">
                <h4 className="text-white text-2xl select-none">Table of content:</h4>
                <ul>
                    {documentHeaders.map(header => (
                        <li
                            key={header.id}
                            className={`cursor-pointer border-l-2 py-2 transition-all ${activeSectionId === header.id ? 'text-blue-500 border-l-blue-1' : 'text-white border-l-slate-600'} ${header.type === 'h1' ? 'pl-2' : header.type === 'h2' ? 'pl-5' : header.type === 'h3' ? 'pl-8' : 'pl-11'}`}
                            onClick={() => navigateToHeader(header.id)}
                        >
                            {header.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
