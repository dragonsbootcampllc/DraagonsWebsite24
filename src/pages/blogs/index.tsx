import React from 'react';
import Link from 'next/link';
import { FaQuestion } from "react-icons/fa6";
import Layout from './layout';
import { BASE_URL, CategoryWithIcon, useCategories } from "../../utils/blog";

export default function BlogDiscovery() {
    const { categories, error, isLoading } = useCategories();

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
        <Layout>
            <div className="w-full flex flex-col items-center h-full overflow-hidden overflow-y-auto box-border py-12 px-12 gap-10 justify-center text-slate-200">
                <span className="p-4">
                    <span className="rounded-full flex justify-center items-center shadow-purple-400 shadow-lg animate-bounce bg-white text-purple-950 text-5xl w-16 aspect-square">
                        <FaQuestion />
                    </span>
                </span>

                <h1 className="text-8xl text-center font-semibold text-white">
                    How can we help?
                </h1>

                <p className="text-2xl font-semibold w-96 text-center">
                    Get answers to common questions on all things Dragons
                </p>

                <input className="w-1/2 text-2xl box-border p-4 focus:outline-none bg-white/20 backdrop-blur-sm focus:border-blue-1 shadow translate-all cursor-text h-16 rounded-xl border border-slate-200" placeholder="Search help (e.g. use cases, step by step guides)"></input>

                <div className="flex justify-center items-center gap-16 flex-wrap mt-12 cursor-pointer">
                    {categories.map(({ icon: Icon, category, description }: CategoryWithIcon, index: number) => (
                        <Link
                            href={`${BASE_URL}/${category}`}
                            className="items-center box-border bg-white/20 backdrop-blur-sm p-7 gap-4 text-xl font-semibold border flex border-slate-200 rounded-xl w-96 hover:border-blue-1 shadow hover:shadow-md hover:scale-[1.02] transition-all"
                            key={index}
                        >
                            <span className="text-8xl text-white"><Icon /></span>
                            <span>
                                {category}
                                <span className="text-slate-400 break-all pl-2">{description}</span>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
