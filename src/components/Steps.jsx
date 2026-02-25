import { HeartPlus, Route, UserRoundCheck } from 'lucide-react';
import React from 'react';

// Reusable exact paw cluster from your design
const PawCluster = ({ className }) => (
    <div className={`absolute pointer-events-none w-32 h-32 text- z-0 ${className}`}>
        <svg className="absolute top-0 right-0 w-7 h-7 transform rotate-12" fill="#EC4899" viewBox="0 0 30 30"><path d="M22.1 19.3c-1.4-2.7-4.1-4.4-7.1-4.4-3 0-5.7 1.7-7.1 4.4-1.2 2.2-1.2 4.8 0 7 1.4 2.7 4.1 4.4 7.1 4.4 3 0 5.7-1.7 7.1-4.4 1.2-2.2 1.2-4.8 0-7zM9.6 11.5c2.2 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9-3.9 1.8-3.9 3.9 1.8 3.9 3.9 3.9zm10.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zM4.1 16.2c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zm21.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9z" /></svg>
        <svg className="absolute top-6 left-0 w-8 h-8 transform -rotate-12" fill="#3B82F6" viewBox="0 0 30 30"><path d="M22.1 19.3c-1.4-2.7-4.1-4.4-7.1-4.4-3 0-5.7 1.7-7.1 4.4-1.2 2.2-1.2 4.8 0 7 1.4 2.7 4.1 4.4 7.1 4.4 3 0 5.7-1.7 7.1-4.4 1.2-2.2 1.2-4.8 0-7zM9.6 11.5c2.2 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9-3.9 1.8-3.9 3.9 1.8 3.9 3.9 3.9zm10.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zM4.1 16.2c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zm21.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9z" /></svg>
        <svg className="absolute bottom-0 left-6 w-11 h-11 transform rotate-12" fill="#EC4899" viewBox="0 0 30 30"><path d="M22.1 19.3c-1.4-2.7-4.1-4.4-7.1-4.4-3 0-5.7 1.7-7.1 4.4-1.2 2.2-1.2 4.8 0 7 1.4 2.7 4.1 4.4 7.1 4.4 3 0 5.7-1.7 7.1-4.4 1.2-2.2 1.2-4.8 0-7zM9.6 11.5c2.2 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9-3.9 1.8-3.9 3.9 1.8 3.9 3.9 3.9zm10.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zM4.1 16.2c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zm21.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9z" /></svg>
    </div>
);

const Steps = () => {
    return (
        <section className="relative w-full min-h-screen bg-white flex flex-col items-center py-10 overflow-hidden">

            {/* Background Scattered Paws */}
            <PawCluster className="top-24 left-10 md:left-32 transform -rotate-12" />
            <PawCluster className="top-72 -left-4 md:left-20 transform rotate-45 scale-75 opacity-70" />
            <PawCluster className="bottom-20 left-12 md:left-40 transform -rotate-45" />
            <PawCluster className="top-32 right-8 md:right-32 transform rotate-12 scale-90" />
            <PawCluster className="bottom-40 right-4 md:right-24 transform rotate-90 scale-75 opacity-60" />

            {/* Heading Section */}
            <div className="text-center z-10 relative mb-10 px-4">
                <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent fr mb-4">
                    WHY CHOOSE OUR POODLES?
                </h2>
                <p className="text-blue-600 text-sm md:text-base font-medium">
                    Exceptional care, advanced technology, and unbeatable value.
                </p>
            </div>

            {/* The Signpost Structure */}
            <div className="relative w-full max-w-md flex flex-col items-center z-10 mt-4">

                {/* 1. Signpost Cap (Top Circle) */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black rounded-full z-10"></div>

                {/* 2. Signpost Pole (Vertical Line) */}
                <div className="absolute top-4 bottom-8 left-1/2 transform -translate-x-1/2 w-4 bg-black z-0"></div>

                {/* 3. Signpost Base (Bottom Ellipse) */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-black rounded-full z-0 shadow-md"></div>

                {/* The Planks (Signs) */}
                <div className="relative z-10 flex flex-col items-center gap-5 pt-16 pb-16 w-full px-4 uppercase">

                    {/* 1. Expert Care (Pink) */}
                    <div className="bg-gradient-to-r from-pink-500 to-pink-700 text-white text-lg md:text-xl font-bold py-3 px-6 rounded-lg shadow-sm w-64 md:w-72 flex items-center justify-center gap-3 transform -rotate-2 -translate-x-2">
                        <span className="text-2xl drop-shadow-sm"><UserRoundCheck /></span> Expert Breeders
                    </div>

                    {/* 2. Top Equipment (Blue) */}
                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg md:text-xl font-bold py-3 px-6 rounded-lg shadow-sm w-64 md:w-90 flex items-center justify-center gap-3 transform rotate-2 translate-x-4">
                        <span className="text-2xl drop-shadow-sm"><HeartPlus /></span> Health & Vet Checked
                    </div>

                    {/* 3. Affordable (Pink-Blue Gradient) */}
                    <div className="bg-gradient-to-r from-pink-400 to-blue-400 text-white text-lg md:text-xl font-bold py-3 px-6 rounded-lg shadow-sm w-56 md:w-88 flex items-center justify-center gap-3 transform -translate-x-3">
                        <span className="text-2xl drop-shadow-sm"><Route /></span> Easy Adoption Process
                    </div>

                    {/* 4. Compassionate Care (Pink) */}
                    <div className="bg-gradient-to-r from-pink-500 to-pink-700 text-white text-lg md:text-xl font-bold py-3 px-6 rounded-lg shadow-sm w-full md:w-auto flex items-center justify-center gap-3">
                        <span className="text-2xl drop-shadow-sm">❤️</span> COMPASSIONATE CARE
                    </div>

                    {/* 5. Fast Service (Blue) */}
                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg md:text-xl font-bold py-3 px-6 rounded-lg shadow-sm w-64 md:w-72 flex items-center justify-center gap-3 transform -rotate-3 -translate-x-4">
                        <span className="text-2xl drop-shadow-sm">⏱️</span> FAST SERVICE
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Steps;