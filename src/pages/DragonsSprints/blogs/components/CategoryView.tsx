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
        <div className="pl-10 pt-10 gap-10 flex flex-col justify-center items-center text-center h-full w-full overflow-hidden overflow-y-auto pb-24">
            <h1 className="text-7xl font-bold capitalize">{title}</h1>
            <p className="text-2xl text-slate-400 w-[900px]">{description}</p>
            <div className="flex gap-14 flex-wrap mt-12 justify-center">
                {blogs.map(({ title, description, url }, index) => (
                    <Link href={url  || ""} key={index}>
                        <span className="flex-col flex-1 h-40 text-start bg-white/20 backdrop-blur-sm p-7 gap-2 font-semibold border flex border-slate-200 rounded-xl w-full max-w-[380px] hover:border-blue-1 shadow hover:shadow-md hover:scale-[1.02] transition-all">
                            <h1 className="text-xl text-white font-bold">{title}</h1>
                            {description && (<p className="text-lg text-slate-400">{description.length > 75 ? `${description.substr(0, 75)}...` : description}</p>)}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default CategoryView;
  