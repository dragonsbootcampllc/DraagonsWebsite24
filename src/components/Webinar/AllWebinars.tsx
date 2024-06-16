import { GlareCard } from "@/components/ui/glare-card";

interface Webinar {
    title: string;
    description: string;
    link: string;
};

interface AllWebinarsProps {
    webinars: Webinar[];
}

export default function AllWebinars({ webinars }: AllWebinarsProps) {
    return (
        <section className="text-white py-10 h-full">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8">All Webinars</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {webinars.map((webinar, index) => (
                        <GlareCard Type={'a'} url={webinar.link}>
                            <span key={index} className="bg-gray-800 cursor-pointer p-6 h-full flex flex-col justify-between items-start rounded-lg">
                                <span>
                                    <span className="bg-blue-900 text-blue-400 text-xs font-bold uppercase px-2 py-1 rounded">
                                        On-Demand
                                    </span>
                                    <h3 className="mt-4 text-2xl font-bold">{webinar.title}</h3>
                                </span>
                                <span>
                                    <p className="mt-2 text-gray-400">{webinar.description}</p>
                                    <span
                                        className="mt-4  text-blue-400 hover:text-blue-300"
                                    >
                                        View Talk &rarr;
                                    </span>
                                </span>
                            </span>
                        </GlareCard>
                    ))}
                </div>
            </div>
        </section>
    );
}

export type {
    Webinar
};