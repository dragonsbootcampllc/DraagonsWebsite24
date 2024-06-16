interface Speaker {
    name: string;
    title: string;
    img_src: string;
};

interface FeaturedWebinarProps {
    speakers: Speaker[];
}

export default function FeaturedWebinar({ speakers }: FeaturedWebinarProps) {
    return (
        <section className="text-white p-10 flex relative justify-center items-center h-screen">
            <div className="absolute inset-0 -z-10 bg-[#38276a] bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <p className="text-blue-400 text-sm">Featured Webinar</p>
                    <h2 className="text-4xl font-bold mt-2">
                        Replacing Twilio for Telehealth
                    </h2>
                    <p className="mt-4 text-gray-400">
                        Following Twilio's EOL (End of Life) notice for its Programmable Video product, telehealth providers are facing a critical transition. They need to choose a new vendor, migrate code, and migrate users, all before December 5, 2024.
                    </p>
                    <div className="mt-6">
                        <div className="flex items-center mb-2">
                            <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-14h2v6h-2zm0 8h2v2h-2z" />
                            </svg>
                            <span>March 16th</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm1-16h-2v6H6.993v2h6.007v-6h3.007V8H13V6zm-1 14h2v2h-2z" />
                            </svg>
                            <span>8:30 AM IST</span>
                        </div>
                    </div>
                    <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Watch Now
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg">
                    <p className="bg-blue-600 cursor-pointer transition-all hover:bg-blue-500 inline-block text-white px-2 py-1 rounded-full text-sm mb-2">
                        WEBINAR
                    </p>

                    <h3 className="text-2xl font-bold text-center mb-4">
                        Replacing Twilio for Telehealth
                    </h3>

                    <div className="flex items-center justify-center w-full">
                        {
                            speakers.map(({ name, title, img_src }: Speaker, index: number) => (
                                <div key={index} className="flex justify-center cursor-pointer items-center group flex-col">
                                    <img
                                        src={img_src}
                                        alt={name}
                                        className="w-16 h-16 group-hover:rounded-[6%] rounded-[50%] translate-y-5 group-hover:translate-y-0 group-hover:rotate-0 rotate-[360deg] transition-all inline-block mb-2"
                                    />
                                    <p className="text-sm font-bold -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">{name}</p>
                                    <p className="text-xs text-gray-400 -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">{title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export type {
    Speaker
};