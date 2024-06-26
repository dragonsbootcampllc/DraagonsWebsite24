import React from 'react';
import ButtonComponent from '../Micros/Button';
import ButtonLite from '../Micros/ButtonLite';
import { Date_1, Time_1 } from '../Icons';

export interface MinisprintCardProps {
    price: string;
    title: string;
    description: string;
    imageUrl: string;
    duration: string;
    startDate: string;
    exploreUrl: string;
}

const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
        return description.substring(0, maxLength) + '...';
    }
    return description;
};

const MinisprintCard: React.FC<MinisprintCardProps> = ({ price, title, description, imageUrl, duration, startDate, exploreUrl }) => {
    const maxDescriptionLength = 100;
    const BASE_URL = '/minisprints';

    return (
        <div className="max-w-sm rounded-xl relative overflow-hidden shadow-lg cursor-pointer bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all group">
            <div className='w-full h-64 flex justify-center items-center overflow-hidden'>
                <img className="min-w-full min-h-full object-cover group-hover:scale-110 group-hover:rotate-6 transition-all" src={imageUrl} alt={title} />
            </div>
            <div className='p-4 flex flex-col gap-4'>
                <div>
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-slate-300 text-base">
                        {truncateDescription(description, maxDescriptionLength)}
                    </p>
                </div>
                <div>
                    <p className="text-slate-100 font-semibold rotate-45 absolute top-2 -right-11 py-1 bg-yellow-500 border-y border-yellow-500/40 w-[150px] text-center text-lg shadow-lg">
                        {price}
                        <span className='absolute inset-0 overflow-hidden rounded-full'>
                            <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] transition-opacity duration-500 opacity-100 rotate-180 group-hover:animate-pulse' />
                        </span>
                    </p>
                    <p className="text-slate-300 flex"><span className="mr-1 w-5 aspect-square"><Time_1 /></span> Duration: {duration}</p>
                    <p className="text-slate-300 flex"><span className="mr-1 w-5 aspect-square"><Date_1 /></span> Start Date: {startDate}</p>
                </div>
                <div className="flex justify-end gap-3">
                    <ButtonLite CTAtext='Explore' className='!w-fit' type='link' href={`${BASE_URL}/${exploreUrl}`} />
                    <ButtonComponent CTAtext='Buy' className='!w-fit' />
                </div>
            </div>
        </div>
    );
};

export default MinisprintCard;
