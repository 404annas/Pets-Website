"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Pet Data ---
const PETS = [
    { id: 1, img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGV0fGVufDB8fDB8fHww", name: "Grey Longhair" },
    { id: 2, img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGV0fGVufDB8fDB8fHww", name: "Siamese" },
    { id: 3, img: "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?w=900&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBldHxlbnwwfHwwfHx8MA%3D%3D", name: "Abyssinian" },
    { id: 4, img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBldHxlbnwwfHwwfHx8MA%3D%3D", name: "Tabby" },
];

const PurpleSlider = () => {
    const [index, setIndex] = useState(0);
    const [screenWidth, setScreenWidth] = useState(1200);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % PETS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [index]);

    const getDisplayPets = () => {
        const prev = (index - 1 + PETS.length) % PETS.length;
        const curr = index % PETS.length;
        const next = (index + 1) % PETS.length;
        return [
            { ...PETS[prev], pos: "left" },
            { ...PETS[curr], pos: "center" },
            { ...PETS[next], pos: "right" },
        ];
    };

    return (
        <div className="relative w-full h-[500px] bg-gradient-to-b from-pink-50 to-blue-50 overflow-hidden flex items-center justify-center">

            {/* --- Dual Color Organic Blob (Static) --- */}
            <div className="absolute flex items-center justify-center pointer-events-none">
                <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[600px] h-[600px] drop-shadow-3xl"
                >
                    {/* Outer Pink Blob */}
                    <path
                        fill="#DB2777"
                        fillOpacity="0.4"
                        d="M47.5,-63.4C60.1,-54.1,68,-38.5,71.5,-22.4C75,-6.3,74.1,10.3,66.8,24.1C59.5,37.8,45.8,48.7,31.5,57.1C17.2,65.5,2.4,71.4,-13.7,69.5C-29.8,67.6,-47.2,57.9,-58.5,43.4C-69.8,28.8,-75,9.4,-72.1,-8.5C-69.2,-26.4,-58.1,-42.8,-43.8,-51.8C-29.5,-60.8,-11.9,-62.4,3.7,-67.4C19.3,-72.4,34.9,-72.8,47.5,-63.4Z"
                        transform="translate(100 100)"
                    />
                    {/* Inner Blue Blob */}
                    <path
                        fill="#1D4ED8"
                        fillOpacity="0.5"
                        d="M38.2,-51.2C49.1,-43.5,57.4,-32.1,61.1,-19.1C64.8,-6.2,63.9,8.4,58.1,20.8C52.3,33.2,41.6,43.4,29.1,50.7C16.6,58,2.4,62.3,-12.3,60.5C-27,58.7,-42.3,50.8,-52.1,38.6C-61.9,26.4,-66.2,9.9,-64.1,-5.4C-62,-20.7,-53.5,-34.8,-41.8,-42.4C-30.1,-50,-15,-51.1,-0.4,-50.6C14.2,-50.1,27.3,-58.9,38.2,-51.2Z"
                        transform="translate(100 100)"
                    />
                </svg>
                {/* Background Glow */}
                <div className="absolute w-[350px] h-[350px] bg-gradient-to-r from-pink-700 to-blue-700 blur-[120px] opacity-30" />
            </div>

            {/* --- Images Container --- */}
            <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="popLayout" initial={false}>
                    {getDisplayPets().map((pet) => {
                        const isCenter = pet.pos === "center";
                        const xOffset = screenWidth * 0.35;

                        return (
                            <motion.div
                                key={pet.id}
                                initial={{
                                    x: pet.pos === "right" ? screenWidth / 2 + 300 : -screenWidth / 2 - 300,
                                    opacity: 0,
                                    scale: 1.3
                                }}
                                animate={{
                                    x: pet.pos === "left" ? -xOffset : pet.pos === "right" ? xOffset : 0,
                                    opacity: 1,
                                    scale: 1.3,
                                    zIndex: isCenter ? 30 : 10,
                                }}
                                exit={{
                                    x: pet.pos === "left" ? -screenWidth / 2 - 300 : screenWidth / 2 + 300,
                                    opacity: 0,
                                    scale: 1.3
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                className="absolute"
                            >
                                <div className="relative group">
                                    <img
                                        src={pet.img}
                                        alt={pet.name}
                                        className="w-72 h-72 object-contain select-none pointer-events-none"
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* --- Pagination Dots --- */}
            <div className="absolute bottom-5 flex gap-2 z-50">
                {PETS.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${index === i ? "w-8 bg-black" : "w-2 bg-black/30"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default PurpleSlider;