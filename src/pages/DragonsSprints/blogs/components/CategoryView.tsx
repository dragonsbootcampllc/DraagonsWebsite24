import Link from 'next/link';

export interface Blog {
    title: string;
    description: string;
    url: string;
}

interface CategoryViewProps {
    title: string;
    description: string;
    blogs: Blog[];
}
function CategoryView({ title, description, blogs }: CategoryViewProps) {
    return (
        <div className=" gap-10 flex flex-col justify-center items-center text-center min-h-screen w-full">
            <h1 className="text-7xl font-bold capitalize">{title}</h1>
            {/* <p className="text-2xl text-slate-400 w-[900px]">{description}</p> */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {blogs ? blogs.map(({ title, description, url }, index) => (
                    <Link href={url  || ""} key={index}>
                        <span className="flex-col flex-1 h-40 text-start bg-purple-400/20 backdrop-blur-sm p-4 gap-2 font-semibold  flex  rounded-xl w-full  shadow hover:shadow-md hover:scale-[1.02] transition-all">
                            <h1 className="text-xl text-white font-bold">{title}</h1>
                            {description && (<p className="text-lg text-slate-400">{description.length > 70 ? `${description.substr(0, 75)}...` : description}</p>)}
                        </span>
                    </Link>
                )) : <></>}
            </div>
        </div>
    );
}
export default CategoryView;
