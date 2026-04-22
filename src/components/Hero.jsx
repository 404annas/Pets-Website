import { useState, useEffect } from "react"; // Added useEffect
import { ArrowRight, MoveDown, X, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroMain from "../assets/heroMain.png";
import heroBottom from "../assets/heroBottom.png";
import manImage from "../assets/manIcon.avif";
import heroPaw from "../assets/heroPaw3.png";
import { useNavigate } from "react-router-dom";

import poodle from "../assets/poodle6.jfif";
import poodle3 from "../assets/poodle3.jfif";

const Hero = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    // Stop scroll logic
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Cleanup: ensures scroll is restored if the component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <div className="relative bg-[#C6E589] min-h-screen w-full flex items-center overflow-hidden
            px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-0">

            {/* Background Decoration */}
            <img
                src={heroPaw}
                alt="Decoration"
                className="absolute hidden md:block left-20 lg:left-40 top-1/4 w-[180px] lg:w-[230px] pointer-events-none border-none"
            />

            {/* Bottom Curve */}
            <img
                src={heroBottom}
                alt="Bottom Decor"
                className="absolute bottom-0 right-0 w-[70%] sm:w-[55%] lg:w-[45%] object-contain z-10 border-none"
            />

            <div className="relative z-20 flex flex-col-reverse md:flex-row items-center w-full gap-10">

                {/* Left Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end border-none">
                    <img
                        src={heroMain}
                        alt="Poodle Image"
                        className="max-h-[60vh] md:max-h-[80vh] lg:max-h-[90vh] object-contain"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 flex flex-col gap-5 text-center md:text-left border-none">

                    <span className="mx-auto md:mx-0 text-gray-800 bg-[#8ECC14] px-5 py-1.5 w-fit rounded-full font-semibold text-sm">
                        Trusted Poodle Breeders
                    </span>

                    <h1 className="text-[#82b912] font-bold leading-[0.9]
                        text-[52px] sm:text-[64px] md:text-[80px]">
                        Healthy <br /> Poodles
                    </h1>

                    <div className="space-y-3 max-w-md mx-auto md:mx-0">
                        <p className="text-gray-800 font-medium text-lg">
                            Premium Poodles Available Across the USA
                        </p>

                        <p className="text-[#444346] font-normal leading-normal">
                            We provide well-trained, healthy and happy Poodles including
                            male & female, toy, miniature and standard sizes.
                            Raised with love and ready for their new homes.
                        </p>
                        {/* CTA */}
                        <div className="group flex items-center justify-between bg-[#8ECC14]
                            hover:bg-[#7db311] transition-colors duration-500
                            p-1.5 pl-8 px-2 rounded-full w-fit cursor-pointer mt-4 mx-auto md:mx-0">

                            <span onClick={() => navigate("/available")} className="text-gray-800 font-semibold mr-4">
                                View Available Poodles
                            </span>

                            <div className="bg-[#C6E589] p-3 rounded-full">
                                <ArrowRight className="text-gray-800 w-6 h-6" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* TRIGGER DIV */}
            <div
                onClick={() => setIsOpen(true)}
                className="bg-[#8ECC14] p-2 rounded-full relative top-80 sm:top-60 md:top-40 lg:left-10 lg:top-20 cursor-pointer hover:scale-110 transition-all duration-300 z-40 border-4 border-white shadow-xl"
            >
                <img loading="lazy" className="w-12 h-12 rounded-full cursor-pointer object-cover" src={poodle} alt="Poodle" />
            </div>

            {/* POPUP MODAL */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-[#E2F1C4] w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/20"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-5 right-5 z-50 p-2 bg-white/50 hover:bg-white rounded-full transition-all duration-300 cursor-pointer"
                            >
                                <X size={20} className="text-gray-800" />
                            </button>

                            {/* Left Side: Dual Images */}
                            <div className="w-full md:w-1/2 p-6 md:p-8 bg-[#8ECC14]/20 flex flex-col gap-4">
                                <img loading="lazy" src={poodle3} alt="Red Poodle 1" className="w-full h-full object-cover rounded-3xl shadow-lg" />
                            </div>

                            {/* Right Side: Content */}
                            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="w-8 h-[2px] bg-[#8ECC14]"></span>
                                    <span className="text-[#8ECC14] font-bold text-xs uppercase tracking-widest">Premium Collection</span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-none uppercase mb-4">
                                    The Rare <br /> <span className="text-[#8ECC14]">Red Poodle</span>
                                </h2>

                                <p className="text-gray-700 text-sm leading-relaxed mb-6 font-medium">
                                    Our Red Poodles are celebrated for their deep mahogany coats and exceptional temperaments.
                                    Beyond their stunning color, they carry a lineage of intelligence and health excellence
                                    perfect for luxury companionship.
                                </p>

                                <div className="space-y-3 mb-8">
                                    {[
                                        "Genetic Health Cleared",
                                        "Rich Mahogany Coat",
                                        "Socialized from Day 1"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <CheckCircle size={16} className="text-[#8ECC14]" />
                                            <span className="text-xs font-semibold text-gray-800 uppercase tracking-tight">{text}</span>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => { navigate("/available"); setIsOpen(false); }}
                                    className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#8ECC14] transition-all duration-300 cursor-pointer"
                                >
                                    Explore This Breed
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Floating Bottom Right Elements */}
            <div className="hidden lg:flex absolute -bottom-13 right-30 z-30 flex-col items-end gap-6 border-none">

                <div className="flex items-center gap-2 text-sm">
                    <img className="w-16 h-10 object-cover rounded-full" src={manImage} alt="Support" />
                    <span className="text-gray-600 font-semibold">Call or WhatsApp</span>
                    <span className="text-gray-800 font-bold">+1 (800) 236-000</span>
                </div>

                <div className="bg-[#8ECC14] p-4 rounded-3xl relative bottom-24 -right-20 animate-bounce">
                    <MoveDown className="text-gray-800 w-8 h-8" />
                </div>
            </div>

        </div>
    )
}

export default Hero;