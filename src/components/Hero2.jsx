import React from 'react'

import heroMainLeft from "../assets/point1.jfif"
import heroMainMiddle from "../assets/about1.jfif"
import heroMainRight from "../assets/poodle16.jfif"
import { Link } from 'react-router-dom';

const Hero2 = () => {
    return (
        <section className="w-full min-h-screen overflow-hidden flex flex-col items-center pt-10 pb-10 px-4">

            {/* --- Heading Section with Decorations --- */}
            <div className="relative text-center max-w-5xl mx-auto z-10">

                {/* Decorative SVG: Blue Circle */}
                {/* <div className="absolute -top-4 -left-8 md:-left-12 w-8 h-8 rounded-full bg-blue-500 border-2 border-white shadow-sm z-20"></div> */}

                {/* Decorative SVG: Pink Circle */}
                {/* <div className="absolute top-10 -right-6 md:-right-10 w-12 h-5 rounded-full bg-pink-500 z-0"></div> */}

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-none relative z-10 uppercase fr bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent">
                    Premium Poodles Available <br />
                    <span className="relative inline-block bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent">
                        Across the USA
                    </span>
                </h1>

                <p className="mt-6 text-blue-600 text-base max-w-4xl mx-auto font-medium">
                    USA Poodle is America’s premier breeder of AKC grand champion Red Toy Poodles. That’s all we do. We produce champions with perfect confirmation and perfect temperament.
                </p>

                {/* <Link to={"/available"}>
                    <button className="mt-8 bg-[#8ECC14] hover:bg-[#7cb111] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 cursor-pointer">
                        View Available Poodles
                    </button>
                </Link> */}
            </div>

            {/* --- Image Gallery Section --- */}
            <div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center z-10">

                {/* Background Paw Prints (Left) */}
                <div className="absolute left-4 top-10 md:-left-8 text- pointer-events-none w-32 h-32 z-0 lg:block hidden">

                    {/* 1. Top Right Paw (Smallest) */}
                    <svg className="absolute top-0 right-0 w-10 h-10 transform rotate-20" fill="#3B82F6" viewBox="0 0 30 30">
                        <path d="M22.1 19.3c-1.4-2.7-4.1-4.4-7.1-4.4-3 0-5.7 1.7-7.1 4.4-1.2 2.2-1.2 4.8 0 7 1.4 2.7 4.1 4.4 7.1 4.4 3 0 5.7-1.7 7.1-4.4 1.2-2.2 1.2-4.8 0-7zM9.6 11.5c2.2 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9-3.9 1.8-3.9 3.9 1.8 3.9 3.9 3.9zm10.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zM4.1 16.2c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zm21.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9z" />
                    </svg>

                    {/* 2. Mid Left Paw (Medium) */}
                    <svg className="absolute top-6 left-0 w-8 h-8 transform -rotate-20" fill="#EC4899" viewBox="0 0 30 30">
                        <path d="M22.1 19.3c-1.4-2.7-4.1-4.4-7.1-4.4-3 0-5.7 1.7-7.1 4.4-1.2 2.2-1.2 4.8 0 7 1.4 2.7 4.1 4.4 7.1 4.4 3 0 5.7-1.7 7.1-4.4 1.2-2.2 1.2-4.8 0-7zM9.6 11.5c2.2 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9-3.9 1.8-3.9 3.9 1.8 3.9 3.9 3.9zm10.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zM4.1 16.2c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zm21.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9z" />
                    </svg>

                    {/* 3. Bottom Center Paw (Largest) */}
                    <svg className="absolute bottom-0 left-6 w-14 h-14 transform" fill="#3B82F6" viewBox="0 0 30 30">
                        <path d="M22.1 19.3c-1.4-2.7-4.1-4.4-7.1-4.4-3 0-5.7 1.7-7.1 4.4-1.2 2.2-1.2 4.8 0 7 1.4 2.7 4.1 4.4 7.1 4.4 3 0 5.7-1.7 7.1-4.4 1.2-2.2 1.2-4.8 0-7zM9.6 11.5c2.2 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9-3.9 1.8-3.9 3.9 1.8 3.9 3.9 3.9zm10.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zM4.1 16.2c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zm21.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9z" />
                    </svg>

                </div>

                {/* 1. Cat Card (Left - Purple) */}
                <div className="w-56 h-96 flex items-end justify-center overflow-hidden rounded-full pt-10 sm:mt-12 md:mt-16 relative -rotate-12">
                    {/* REPLACE SRC WITH TRANSPARENT CAT PNG */}
                    <img
                        loading='lazy'
                        src={heroMainLeft}
                        alt="Cat"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>

                {/* 2. Dog Card (Center - Blue - Tallest) */}
                <div className="w-70 h-[500px] rounded-full flex items-end justify-center overflow-hidden pt-10 md:pt-16 relative z-10">
                    {/* REPLACE SRC WITH TRANSPARENT DOG PNG */}
                    <img
                        loading='lazy'
                        src={heroMainMiddle}
                        alt="Dog"
                        className="w-full h-full rounded-full object-cover"
                    />
                </div>

                {/* 3. Rabbit Card (Right - Yellow) */}
                <div className="w-56 h-96 rounded-full flex items-end justify-center overflow-hidden pt-10 sm:mt-12 md:mt-16 relative rotate-12">
                    {/* REPLACE SRC WITH TRANSPARENT RABBIT PNG */}
                    <img
                        loading='lazy'
                        src={heroMainRight}
                        alt="Rabbit"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>

                {/* Background Paw Prints (Right) */}
                <div className="absolute right-0 bottom-20 md:-right-6 text-gray-200 pointer-events-none lg:block hidden">

                    {/* 1. Top Right Paw (Smallest) */}
                    <svg className="absolute top-0 right-0 w-10 h-10 transform rotate-20" fill="#3B82F6" viewBox="0 0 30 30">
                        <path d="M22.1 19.3c-1.4-2.7-4.1-4.4-7.1-4.4-3 0-5.7 1.7-7.1 4.4-1.2 2.2-1.2 4.8 0 7 1.4 2.7 4.1 4.4 7.1 4.4 3 0 5.7-1.7 7.1-4.4 1.2-2.2 1.2-4.8 0-7zM9.6 11.5c2.2 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9-3.9 1.8-3.9 3.9 1.8 3.9 3.9 3.9zm10.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zM4.1 16.2c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zm21.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9z" />
                    </svg>

                    {/* 2. Mid Left Paw (Medium) */}
                    <svg className="absolute top-6 left-0 w-8 h-8 transform -rotate-20" fill="#EC4899" viewBox="0 0 30 30">
                        <path d="M22.1 19.3c-1.4-2.7-4.1-4.4-7.1-4.4-3 0-5.7 1.7-7.1 4.4-1.2 2.2-1.2 4.8 0 7 1.4 2.7 4.1 4.4 7.1 4.4 3 0 5.7-1.7 7.1-4.4 1.2-2.2 1.2-4.8 0-7zM9.6 11.5c2.2 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9-3.9 1.8-3.9 3.9 1.8 3.9 3.9 3.9zm10.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zM4.1 16.2c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zm21.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9z" />
                    </svg>

                    {/* 3. Bottom Center Paw (Largest) */}
                    <svg className="absolute bottom-0 left-6 w-14 h-14 transform rotate-" fill="#EC4899" viewBox="0 0 30 30">
                        <path d="M22.1 19.3c-1.4-2.7-4.1-4.4-7.1-4.4-3 0-5.7 1.7-7.1 4.4-1.2 2.2-1.2 4.8 0 7 1.4 2.7 4.1 4.4 7.1 4.4 3 0 5.7-1.7 7.1-4.4 1.2-2.2 1.2-4.8 0-7zM9.6 11.5c2.2 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9-3.9 1.8-3.9 3.9 1.8 3.9 3.9 3.9zm10.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zM4.1 16.2c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zm21.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9z" />
                    </svg>

                </div>

            </div>

        </section>
    );
};

export default Hero2;