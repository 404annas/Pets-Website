import React, { useEffect, useState } from 'react';
import { client, urlFor } from "../lib/sanity";
import { Link } from 'react-router-dom';

const Hero2 = () => {
    const [heroData, setHeroData] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const data = await client.fetch(`*[_type == "hero"][0]`);
                setHeroData(data);
            } catch (err) {
                console.error("Sanity error:", err);
            }
        };
        fetchImages();
    }, []);

    return (
        <section className="w-full min-h-screen overflow-hidden flex flex-col items-center pt-10 pb-10 px-4">

            {/* --- Heading Section with Decorations --- */}
            <div className="relative text-center max-w-5xl mx-auto z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-none relative z-10 uppercase fr bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent">
                    Premium Poodles Available <br />
                    <span className="relative inline-block bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent">
                        Across the USA
                    </span>
                </h1>

                <p className="mt-6 text-blue-600 text-base max-w-4xl mx-auto font-medium">
                    <span className='uppercase'>USA Poodle</span> is America’s premier breeder of AKC grand champion Red Toy Poodles. That’s all we do. We produce champions with perfect confirmation and perfect temperament.
                </p>
            </div>

            {/* --- Image Gallery Section --- */}
            <div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center z-10">

                {/* Background Paw Prints (Left) - SAME AS BEFORE */}
                <div className="absolute left-4 top-10 md:-left-8 text- pointer-events-none w-32 h-32 z-0 lg:block hidden">
                    <svg className="absolute top-0 right-0 w-10 h-10 transform rotate-20" fill="#3B82F6" viewBox="0 0 30 30"><path d="M22.1 19.3c-1.4-2.7-4.1-4.4-7.1-4.4-3 0-5.7 1.7-7.1 4.4-1.2 2.2-1.2 4.8 0 7 1.4 2.7 4.1 4.4 7.1 4.4 3 0 5.7-1.7 7.1-4.4 1.2-2.2 1.2-4.8 0-7zM9.6 11.5c2.2 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9-3.9 1.8-3.9 3.9 1.8 3.9 3.9 3.9zm10.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zM4.1 16.2c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zm21.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9z" /></svg>
                    <svg className="absolute top-6 left-0 w-8 h-8 transform -rotate-20" fill="#EC4899" viewBox="0 0 30 30"><path d="M22.1 19.3c-1.4-2.7-4.1-4.4-7.1-4.4-3 0-5.7 1.7-7.1 4.4-1.2 2.2-1.2 4.8 0 7 1.4 2.7 4.1 4.4 7.1 4.4 3 0 5.7-1.7 7.1-4.4 1.2-2.2 1.2-4.8 0-7zM9.6 11.5c2.2 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9-3.9 1.8-3.9 3.9 1.8 3.9 3.9 3.9zm10.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zM4.1 16.2c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zm21.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9z" /></svg>
                    <svg className="absolute bottom-0 left-6 w-14 h-14 transform" fill="#3B82F6" viewBox="0 0 30 30"><path d="M22.1 19.3c-1.4-2.7-4.1-4.4-7.1-4.4-3 0-5.7 1.7-7.1 4.4-1.2 2.2-1.2 4.8 0 7 1.4 2.7 4.1 4.4 7.1 4.4 3 0 5.7-1.7 7.1-4.4 1.2-2.2 1.2-4.8 0-7zM9.6 11.5c2.2 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9-3.9 1.8-3.9 3.9 1.8 3.9 3.9 3.9zm10.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zM4.1 16.2c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zm21.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9z" /></svg>
                </div>

                {/* 1. Cat Card (Left) */}
                <div className="w-70 h-[450px] flex items-end justify-center overflow-hidden rounded-full pt-10 sm:mt-12 md:mt-16 relative -rotate-12">
                    {heroData?.leftImage && (
                        <img
                            src={urlFor(heroData.leftImage).url()}
                            alt="Left Image"
                            className="w-full h-full object-cover rounded-full"
                        />
                    )}
                </div>

                {/* 2. Dog Card (Center) */}
                <div className="w-80 h-[550px] rounded-full flex items-end justify-center overflow-hidden pt-10 md:pt-16 relative z-10">
                    {heroData?.middleImage && (
                        <img
                            src={urlFor(heroData.middleImage).url()}
                            alt="Middle Image"
                            className="w-full h-full rounded-full object-cover"
                        />
                    )}
                </div>

                {/* 3. Rabbit Card (Right) */}
                <div className="w-70 h-[450px] rounded-full flex items-end justify-center overflow-hidden pt-10 sm:mt-12 md:mt-16 relative rotate-12">
                    {heroData?.rightImage && (
                        <img
                            src={urlFor(heroData.rightImage).url()}
                            alt="Right Image"
                            className="w-full h-full object-cover rounded-full"
                        />
                    )}
                </div>

                {/* Background Paw Prints (Right) - SAME AS BEFORE */}
                <div className="absolute right-0 bottom-20 md:-right-6 text-gray-200 pointer-events-none lg:block hidden">
                    <svg className="absolute top-0 right-0 w-10 h-10 transform rotate-20" fill="#3B82F6" viewBox="0 0 30 30"><path d="M22.1 19.3c-1.4-2.7-4.1-4.4-7.1-4.4-3 0-5.7 1.7-7.1 4.4-1.2 2.2-1.2 4.8 0 7 1.4 2.7 4.1 4.4 7.1 4.4 3 0 5.7-1.7 7.1-4.4 1.2-2.2 1.2-4.8 0-7zM9.6 11.5c2.2 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9-3.9 1.8-3.9 3.9 1.8 3.9 3.9 3.9zm10.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zM4.1 16.2c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zm21.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9z" /></svg>
                    <svg className="absolute top-6 left-0 w-8 h-8 transform -rotate-20" fill="#EC4899" viewBox="0 0 30 30"><path d="M22.1 19.3c-1.4-2.7-4.1-4.4-7.1-4.4-3 0-5.7 1.7-7.1 4.4-1.2 2.2-1.2 4.8 0 7 1.4 2.7 4.1 4.4 7.1 4.4 3 0 5.7-1.7 7.1-4.4 1.2-2.2 1.2-4.8 0-7zM9.6 11.5c2.2 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9-3.9 1.8-3.9 3.9 1.8 3.9 3.9 3.9zm10.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zM4.1 16.2c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zm21.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9z" /></svg>
                    <svg className="absolute bottom-0 left-6 w-14 h-14 transform" fill="#EC4899" viewBox="0 0 30 30"><path d="M22.1 19.3c-1.4-2.7-4.1-4.4-7.1-4.4-3 0-5.7 1.7-7.1 4.4-1.2 2.2-1.2 4.8 0 7 1.4 2.7 4.1 4.4 7.1 4.4 3 0 5.7-1.7 7.1-4.4 1.2-2.2 1.2-4.8 0-7zM9.6 11.5c2.2 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9-3.9 1.8-3.9 3.9 1.8 3.9 3.9 3.9zm10.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zM4.1 16.2c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zm21.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9z" /></svg>
                </div>
            </div>
        </section>
    );
};

export default Hero2;