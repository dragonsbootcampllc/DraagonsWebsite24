"use client";

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    phoneNumber: string;
    program: string;
    IsCoupon: boolean;
    CouponCode: string;
}

const ApplyPricing = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        phoneNumber: '',
        program: 'frontend',
        IsCoupon: false,
        CouponCode: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/Apply/HandelApplyForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Data saved successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    country: '',
                    phoneNumber: '',
                    program: 'frontend',
                    IsCoupon: false,
                    CouponCode: '',
                });
            } else {
                alert('Failed to save data');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const router = useRouter();
    const { program, coupon } = router.query;

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            program: program as string || 'frontend',
            CouponCode: coupon ? (coupon as string) : '',
            IsCoupon: !!coupon,
        }));
    }, [program, coupon]);

    return (
        <div className="container mx-auto w-full flex flex-col gap-8 justify-center items-center mb-24 px-4">
            <form onSubmit={handleSubmit} className="w-full md:w-[600px] bg-purple-950 p-5 rounded-xl shadow-lg mt-[100px]">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="mb-4 flex-1">
                        <label className="block text-sm font-medium text-white/70">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            className="mt-1 p-2 border focus:outline-none text-black border-gray-300 rounded-md w-full"
                            required
                        />
                    </div>
                    <div className="mb-4 flex-1">
                        <label className="block text-sm font-medium text-white/70">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="mt-1 text-black focus:outline-none p-2 border border-gray-300 rounded-md w-full"
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-white/70">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 text-black focus:outline-none border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-white/70">Country</label>
                        <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            value={formData.country}
                            onChange={handleChange}
                            className="mt-1 p-2 border focus:outline-none border-gray-300 text-black rounded-md w-full"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-white/70">Phone Number</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="mt-1 p-2 border focus:outline-none border-gray-300 text-black rounded-md w-full"
                            required
                        />
                    </div>
                </div>
                <div className="my-4">
                    <label className="block text-sm font-medium text-white/70">Select Program</label>
                    <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className="mt-1 p-2 border text-black border-gray-300 rounded-md w-full"
                    >
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                        <option value="dataAnalysis">Data Analysis</option>
                    </select>
                </div>
                <input type="hidden" name="Coupon" onChange={handleChange} value={formData.CouponCode} />
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="w-fit flex p-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ApplyPricing;
