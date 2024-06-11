import { useState } from 'react';
import { FaRegNewspaper } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import { BASE_URL, useCategories, CategoryWithIcon } from '../../../utils/blog';

// Define the CollapsedLinkProps interface
interface CollapsedLinkProps { 
    title: string; 
    url: string; 
    isCollapsed: boolean; 
    blogs: string[]; 
    onClick: () => void;
}

// Define the CollapsedLink component
const CollapsedLink = ({ title, url, isCollapsed, blogs, onClick }: CollapsedLinkProps) => {
    return (
        <div className="flex flex-col w-full text-slate-100">
            {blogs && blogs.length !== 0 ? (
                <>
                    <button
                        onClick={onClick}
                        className="cursor-pointer flex justify-center items-center font-semibold w-full box-border text-start h-8 relative"
                    >
                        <span className={`h-full aspect-square flex absolute left-0 top-1/2 -translate-y-1/2 justify-center items-center rounded-md hover:bg-[#1b1731] text-xl transition-all`}>
                            <span className={`transition-all ${isCollapsed ? 'rotate-0' : 'rotate-90'}`}>
                                <IoIosArrowForward />
                            </span>
                        </span>

                        <Link href={url} className="inline-block hover:bg-[#1b1731] rounded-md w-full transition-all h-full pl-9">
                            {title}
                        </Link>
                    </button>

                    <div className={`flex flex-col transition-all font-semibold overflow-hidden ${isCollapsed ? 'h-0 py-0' : 'h-auto py-2'}`}>
                        {blogs.map((blog_name, index) => (
                            <Link href={`${url}/${blog_name}`} key={index} className="inline-block border-l py-1 group border-l-slate-400 ml-4 w-full transition-all h-full">
                                <span className="inline-block group-hover:bg-[#1b1731] rounded-md w-[calc(100%-2rem)] transition-all h-full pl-1 ml-4">
                                    {blog_name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </>
            ) : (
                <span className="cursor-pointer flex justify-center items-center w-full box-border text-start h-8 relative">
                    <Link href={url} className="inline-block hover:bg-[#1b1731] rounded-md w-full transition-all h-full pl-2">
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
    }

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;


    return (
        <div className="border-r-2 border-r-slate-200 w-[22rem] px-8 pt-8 min-h-screen flex flex-col gap-4 bg-[#030014]">
            <Link href={BASE_URL} className="w-full flex gap-3 text-slate-100 font-semibold mb-3 text-xl items-center">
                <span className="text-2xl"><FaRegNewspaper /></span>
                <span>Start Guides</span>
            </Link>

            {categories.map(({ blogs, category }: CategoryWithIcon, index: number) => (
                <CollapsedLink
                    key={index}
                    title={category}
                    blogs={blogs}
                    url={`/${BASE_URL}/${category}`}
                    isCollapsed={collapsed[index]}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};
