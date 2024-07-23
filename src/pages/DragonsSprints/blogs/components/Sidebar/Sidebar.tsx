import { useState } from "react";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import {
    BASE_URL,
    CategorySummary,
    useCategories,
} from "../../utils/blog";

// Define the CollapsedLinkProps interface
interface CollapsedLinkProps {
    title: string;
    url: string;
    isCollapsed: boolean;
    blogs: string[];
    onClick: () => void;
}

// Define the CollapsedLink component
const CollapsedLink = ({
    title,
    url,
    isCollapsed,
    blogs,
    onClick,
}: CollapsedLinkProps) => {
    return (
        <div className='flex flex-col w-full text-slate-100'>
            {blogs && blogs.length !== 0 ? (
                <>
                    <button
                        onClick={onClick}
                        className='cursor-pointer relative flex justify-center place-items-center items-center font-semibold w-full box-border text-start h-8 '>
                        <div
                            className={`h-full aspect-square hover:bg-[#1b1731] flex justify-center items-center rounded-lg  `}>
                            <span
                                className={` ${isCollapsed ? "rotate-0" : "rotate-90"}`}>
                                <IoIosArrowForward />
                            </span>
                        </div>

                        <span className='h-full w-full grid place-items-center relative'>
                            <Link
                                href={url || ""}
                                className=' py-[4px] px-3  rounded-md w-full transition-all h-full '>
                                {title}
                            </Link>
                        </span>
                    </button>

                    <div
                        className={`flex flex-col transition-all font-semibold overflow-hidden ${isCollapsed ? "h-0 py-0" : "h-auto py-2"}`}>
                        {blogs.map((blog_name, index) => (
                            <Link
                                href={`${url}/${blog_name}`}
                                key={index}
                                className='inline-block border-l py-2 group border-l-white/40 w-full hover:border-l-[#36b5ee] transition-all h-full'>
                                <span className='inline-block text-white/70 group-hover:text-[#36b5ee] rounded-md w-[calc(100%-2rem)] transition-all h-full pl-1 ml-4'>
                                    {blog_name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </>
            ) : (
                <span className='cursor-pointer flex justify-center items-center w-full box-border text-start h-8 relative'>
                    <Link
                        href={url || ""}
                        className='inline-block hover:bg-[#1b1731] rounded-md w-full transition-all h-full pl-2'>
                        {title}
                    </Link>
                </span>
            )}
        </div>
    );
};

export default function Sidebar() {
    const { categories, error, isLoading } = useCategories();
    const [collapsed, setCollapsed] = useState<boolean[]>([]);

    const handleClick = (index: number) => {
        setCollapsed((prevCollapsed) => {
            const newCollapsed = [...prevCollapsed];
            newCollapsed[index] = !newCollapsed[index];
            return newCollapsed;
        });
    };

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
        <div className=' h-full hidden  relative min-h-screen  md:flex flex-col gap-4 '>
            <div className='sticky z-20 top-20'>
                <Link
                    href={BASE_URL || ""}
                    className='w-full hover:bg-purple-800/20 mt-5  rounded-2xl flex gap-3 text-slate-100 font-semibold mb-3 text-xl items-center'>
                    <span className='text-2xl bg-purple-800 p-[6px] rounded-xl '>
                        <FaRegNewspaper className='h-5 w-5' />
                    </span>
                    <span>Start Guides</span>
                </Link>

                {categories &&
                    categories.map(
                        ({ blogs, category }: CategorySummary, index: number) => (
                            <CollapsedLink
                                key={index}
                                title={category}
                                blogs={blogs}
                                url={`/${BASE_URL}/${decodeURIComponent(category)}`}
                                isCollapsed={collapsed[index]}
                                onClick={() => handleClick(index)}
                            />
                        )
                    )}
            </div>
        </div>
    );
}
