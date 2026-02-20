import React from 'react';
import { motion } from 'framer-motion';
import poodle from "../assets/beniMain2.png"

const BackgroundPaw = ({ className }) => (
    <svg className={`absolute pointer-events-none text-gray-100 z-0 ${className}`} fill="limeGreen" viewBox="0 0 30 30">
        <path d="M22.1 19.3c-1.4-2.7-4.1-4.4-7.1-4.4-3 0-5.7 1.7-7.1 4.4-1.2 2.2-1.2 4.8 0 7 1.4 2.7 4.1 4.4 7.1 4.4 3 0 5.7-1.7 7.1-4.4 1.2-2.2 1.2-4.8 0-7zM9.6 11.5c2.2 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9-3.9 1.8-3.9 3.9 1.8 3.9 3.9 3.9zm10.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zM4.1 16.2c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zm21.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9z" />
    </svg>
);

const Benefits = () => {
    return (
        <section className="relative w-full bg-white flex flex-col items-center pt-10 overflow-hidden">

            <BackgroundPaw className="top-10 left-10 w-12 h-12 transform -rotate-12 opacity-60" />
            <BackgroundPaw className="top-32 left-40 w-16 h-16 transform rotate-45 opacity-40" />
            <BackgroundPaw className="bottom-20 left-20 w-14 h-14 transform -rotate-45 opacity-50" />
            <BackgroundPaw className="top-20 right-20 w-14 h-14 transform rotate-12 opacity-50" />
            <BackgroundPaw className="bottom-40 right-16 w-20 h-20 transform -rotate-12 opacity-30" />
            <BackgroundPaw className="top-1/2 left-12 w-10 h-10 transform rotate-90 opacity-40" />
            <BackgroundPaw className="top-1/3 right-40 w-12 h-12 transform -rotate-45 opacity-50" />

            <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl animate-pulse uppercase cur font-black text-black tracking-tight mb-4">
                    Selling Now
                </h2>
            </div>

            <div className="relative mt-10">

                {/* Big Animated Arrow */}
                <svg
                    className="absolute -top-25 right-10 w-40 h-60 z-20 hidden md:block"
                    viewBox="0 0 100 100"
                    fill="none"
                >
                    <motion.path
                        d="M50 20 Q80 5 50 80 M50 80 L40 65 M50 80 L65 70"
                        stroke="black"
                        strokeWidth="3"
                        fill="transparent"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </svg>

                {/* Modern Sleek Tag — positioned at arrow tip (bottom of SVG, right side) */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.4 }}
                    className="absolute bottom-60 -right-20 z-30 hidden md:block"
                >
                    <div className="relative flex items-center gap-3 bg-black/90 backdrop-blur-sm text-white pl-3 pr-5 py-2.5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-white/10">
                        {/* Glowing avatar dot */}
                        <div className="relative flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center text-black text-xs font-black">R</div>
                            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-lime-400 border-2 border-black rounded-full animate-pulse" />
                        </div>
                        {/* Text */}
                        <div className="flex flex-col leading-tight">
                            <span className="font-black uppercase tracking-wider cur text-4xl text-white">Ricky</span>
                        </div>
                    </div>
                </motion.div>

                <img
                    className="w-[500px] h-[500px] block relative z-10"
                    src={poodle}
                    alt="Poodle"
                />
            </div>

        </section>
    );
};

export default Benefits;