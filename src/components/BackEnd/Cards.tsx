import { GlareCard } from "@/components/ui/glare-card";
import Button from "@/components/Micros/Button";
import Link from "next/link";

interface DataObj {
    title: string;
    description: string;
    link: string;
};
interface HeadTextProps {
    heroHighlightedText: string;
    headlineText: string;
    subheadlineText: string;
    descriptionText: string;
}

interface BackEndProps {
    DataObj: DataObj[];
    headText: HeadTextProps;

}
;

const CTA = {
    ctaApplyText: "Apply Now",
}

export default function Cards({ DataObj ,headText }: BackEndProps) {
    return (
        <div className="bg-[#0e0124]  rounded-t-[25px] py-10">
            <div className="w-full flex flex-col container mx-auto min-h-screen justify-center items-center gap-8 text-white">
                <div className='heading md:max-w-[1200px] text-center'>
                    <h1
                        style={{ fontFamily: "interV" }}
                        className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto z-10 relative mb-3 text-gray-200 font-semibold'>
                        <span className='bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text'>
                            {headText.heroHighlightedText}
                        </span>
                        {headText.headlineText}
                        {headText.subheadlineText}
                    </h1>
                    <p className='text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-white/70 mt-4 mb-8'>
                        {headText.descriptionText}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {DataObj.map((BackEndCard, index) => (
                        <GlareCard Type={'a'} url={BackEndCard.link}>
                            <div key={index} className="bg-purple-950 cursor-pointer p-6 h-full flex flex-col justify-between rounded-lg">

                                <div className="flex flex-col gap-5">
                                    <span className="bg-purple-900/80 text-[#fadd46] text-xs font-bold w-fit uppercase px-2 py-1 rounded">
                                        Up-to-date
                                    </span>
                                    <h3 className="text-2xl font-bold">{BackEndCard.title}</h3>
                                </div>

                                <p className="mt-4 text-gray-400">{BackEndCard.description}</p>

                                <span className="mt-4  text-white/80 hover:text-white">
                                    Read more &rarr;
                                </span>

                            </div>
                        </GlareCard>
                    ))}
                </div>
                <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/Pricing" passHref>
                        <div className="h-12 w-48 md:h-16 md:w-64">
                            <Button CTAtext={CTA.ctaApplyText} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export type {
    Cards
};