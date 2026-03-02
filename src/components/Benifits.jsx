import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    Heart,
    Pill,
    Cpu,
    ShieldCheck,
    Activity,
    Thermometer
} from 'lucide-react';

import mainPoodle from "../assets/mainPoodle.jfif";

const BackgroundPaw = ({ className, color }) => (
    <svg className={`lg:block hidden absolute pointer-events-none z-0 ${className}`} fill={color || "#EC4899"} viewBox="0 0 30 30">
        <path d="M22.1 19.3c-1.4-2.7-4.1-4.4-7.1-4.4-3 0-5.7 1.7-7.1 4.4-1.2 2.2-1.2 4.8 0 7 1.4 2.7 4.1 4.4 7.1 4.4 3 0 5.7-1.7 7.1-4.4 1.2-2.2 1.2-4.8 0-7zM9.6 11.5c2.2 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9-3.9 1.8-3.9 3.9 1.8 3.9 3.9 3.9zm10.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zM4.1 16.2c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9zm21.8 0c2.2 0 3.9-1.7 3.9-3.9 0-2.2-1.7-3.9-3.9-3.9s-3.9 1.8-3.9 3.9c0 2.2 1.8 3.9 3.9 3.9z" />
    </svg>
);

const sellingPet = {
    id: 1,
    name: "Ricky",
    breed: "TOY POODLE",
    availability: "Available",
    color: "Deep Red",
    size: "Small Toy Class",
    birthdate: "Dec 15, 2025",
    weight: "35 oz",
    personality: "Warm snuggler, curious about sounds.",
    health: [
        { id: 'h1', name: "Heart", icon: Heart, active: true },
        { id: 'h2', name: "Meds", icon: Pill, active: false },
        { id: 'h3', name: "Chip", icon: Cpu, active: true },
        { id: 'h4', name: "Vax", icon: ShieldCheck, active: true },
        { id: 'h5', name: "Pulse", icon: Activity, active: true },
        { id: 'h6', name: "Check", icon: Thermometer, active: true },
    ],
    image: mainPoodle
};

const SellingCard = ({ pet }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const navigate = useNavigate();

    return (
        <div
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            className="relative h-[500px] w-[340px] md:w-[380px] [perspective:1000px] z-10"
        >
            <motion.div
                className="relative w-full h-full [transform-style:preserve-3d]"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 150, damping: 20, mass: 1 }}
            >
                <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] ${isFlipped ? "pointer-events-none" : "pointer-events-auto"}`}>
                    <div className="group relative h-full w-full rounded-[40px] overflow-hidden shadow-md">
                        <img loading="lazy" src={pet.image} alt={pet.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute top-6 left-6 bg-white/90 px-4 py-1.5 rounded-full text-pink-700 font-bold text-[10px] uppercase tracking-widest fr z-10 shadow-sm border border-pink-200">
                            {pet.availability}
                        </div>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-white py-4 rounded-3xl text-center shadow-sm z-10">
                            <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text fr uppercase">{pet.name}</h2>
                            <p className="text-xs tracking-widest text-brand-blue-500 uppercase mt-1">{pet.breed}</p>
                        </div>
                    </div>
                </div>

                <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] ${isFlipped ? "pointer-events-auto" : "pointer-events-none"}`}>
                    <div className="h-full w-full bg-white rounded-[40px] shadow-md border border-gray-100 flex flex-col items-center p-6 text-center">
                        <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text mt-4 fr uppercase">{pet.name}</h2>
                        <p className="text-sm tracking-widest text-brand-blue-500 uppercase mt-1 mb-4">{pet.color} - {pet.size}</p>
                        <div className="flex gap-2 mb-4 text-xs font-bold text-gray-600 bg-slate-50 px-4 py-2 rounded-full">
                            <span>Born: {pet.birthdate}</span> | <span className="text-blue-700">Weight: {pet.weight}</span>
                        </div>
                        <p className="text-xs text-gray-500 italic mb-4 leading-tight px-2">"{pet.personality}"</p>
                        <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-pink-700">Health Check:</h3>
                        <div className="grid grid-cols-3 gap-x-6 gap-y-3">
                            {pet.health.map((item) => (
                                <div key={item.id} className="flex flex-col items-center">
                                    <div className={`p-4 rounded-full ${item.active ? 'bg-pink-200 text-pink-500' : 'bg-blue-200 text-blue-500'}`}>
                                        <item.icon size={18} />
                                    </div>
                                    <span className="text-xs font-medium mt-1 uppercase text-gray-500">{item.name}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={(e) => { e.stopPropagation(); navigate(`/pet/${pet.id}`); }}
                            className="bg-pink-400 text-white font-bold w-full py-3.5 rounded-2xl hover:bg-pink-500 transition-all duration-300 mt-auto cursor-pointer"
                        >
                            Get More Details
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Benefits = () => {
    return (
        <section className="relative w-full bg-gradient-to-b from-white to-pink-50 flex flex-col items-center py-6 overflow-hidden">

            <BackgroundPaw className="top-10 left-10 w-12 h-12 transform -rotate-12 opacity-60" color="#DB2777" />
            <BackgroundPaw className="top-32 left-40 w-16 h-16 transform rotate-45 opacity-40" color="#1D4ED8" />
            <BackgroundPaw className="bottom-20 left-20 w-14 h-14 transform -rotate-45 opacity-50" color="#DB2777" />
            <BackgroundPaw className="top-20 right-20 w-14 h-14 transform rotate-12 opacity-50" color="#1D4ED8" />
            <BackgroundPaw className="bottom-40 right-16 w-20 h-20 transform -rotate-12 opacity-30" color="#DB2777" />
            <BackgroundPaw className="top-1/2 left-12 w-10 h-10 transform rotate-90 opacity-40" color="#1D4ED8" />
            <BackgroundPaw className="top-1/3 right-40 w-12 h-12 transform -rotate-45 opacity-50" color="#DB2777" />

            <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl animate-pulse uppercase fr font-black bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent mb-4">
                    Selling Now
                </h2>
            </div>

            <div className="relative mt-4">
                <svg
                    className="absolute -top-15 -right-25 w-28 h-44 z-30 hidden md:block pointer-events-none"
                    viewBox="0 0 80 180"
                    fill="none"
                >
                    <motion.path
                        d="M10 12 C42 -2 58 24 52 54 C46 84 34 108 24 125 M24 126 L13 112 M24 126 L38 118"
                        stroke="#DB2777"
                        strokeWidth="3"
                        fill="transparent"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </svg>

                <SellingCard pet={sellingPet} />
            </div>

        </section>
    );
};

export default Benefits;
