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
      <h1 className="2xl:text-7xl text-6xl font-bold capitalize">{title}</h1>
      <p className="text-2xl text-slate-400 w-[900px]">{description}</p>
      <div className="flex gap-14 flex-wrap mt-12 justify-center">
        {blogs ? blogs.map(({ title, description, url }, index) => (
          <Link href={url || ""} key={index}>
            <span className="flex-col flex-1 h-40 group text-start backdrop-blur-sm p-4 gap-2 font-semibold border flex border-purple-500 rounded-xl w-full max-w-[350px] hover:border-purple-700 duration-300 transition-all">
              <h1 className="text-xl text-purple-500 group-hover:text-purple-700 duration-300 font-bold">{title}</h1>
              {description && (<p className="text-lg text-slate-400">{description.length > 70 ? `${description.substr(0, 75)}...` : description}</p>)}
            </span>
          </Link>
        )) : <></>}
      </div>
    </div>
  );
}
export default CategoryView;
