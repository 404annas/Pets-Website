import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ShieldCheck, Heart, Dna, Eye, Stethoscope,
    ArrowRight, CheckCircle2, ChevronDown,
    Microscope, ShieldAlert,
    UsersRound
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import smallPoodle1 from "../assets/small3.jfif"
import smallPoodle2 from "../assets/small4.jfif"

import poodle from "../assets/heroDog2.png"

const pillars = [
    {
        title: "Health Foundations",
        desc: "Decisions built around testing and evidence, following recognized Poodle health guidance. We verify genetic health to reduce avoidable risks.",
        icon: <Microscope size={22} />,
        label: "Genetic Integrity"
    },
    {
        title: "Stable Temperament",
        desc: "Stable nerves, curiosity, affection and confidence. Temperament is shaped from the first heartbeat until the day they join your home.",
        icon: <Heart size={22} />,
        label: "Behavioral Soundness"
    },
    {
        title: "Breed Type & Structure",
        desc: "Balanced structure that moves better and feels better. We strive to preserve the elegance and intelligence Toy Poodles are known for.",
        icon: <ShieldCheck size={22} />,
        label: "Structural Balance"
    }
];

const BreedProgram = () => {
    const navigate = useNavigate();
    const [isHealthPanelOpen, setIsHealthPanelOpen] = useState(false);

    // Helper for clean navigation
    const handleNavigation = (path) => {
        window.scrollTo(0, 0);
        navigate(path);
    };

    return (
        <div className="bg-white min-h-screen text-slate-900 overflow-x-hidden antialiased">

            {/* 1. HERO SECTION (Adult Red Toy Poodle BG) */}
            <section className="relative h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        loading='lazy'
                        src={poodle}
                        alt="Adult Red Toy Poodle with confident posture"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Professional Overlay */}
                    <div className="absolute inset-0 bg-black/50 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-2xl text-white"
                    >
                        <span className="text-brand-blue-500 font-medium uppercase tracking-widest text-xs mb-6 block">
                            Breeding Program and Ethics
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl fr font-bold uppercase leading-none mb-8">
                            Intentional. <br />
                            Preserved. <br />
                            <span className=" text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text">Not Accidental.</span>
                        </h1>
                        <p className="text-base md:text-lg text-gray-300 font-normal leading-relaxed mb-6">
                            Every decision is made with the future in mind. We never chase color at the expense of health or temperament.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button onClick={() => handleNavigation('/application')} className="px-8 py-4 bg-brand-pink-700 text-white font-bold uppercase text-xs tracking-widest rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                                Start Your Journey
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. MANIFESTO GRID */}
            <section className="py-10 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                    {[
                        { t: "The Whole Dog", d: "Color is beautiful, but a puppy must be structurally sound and emotionally steady." },
                        { t: "Transparency", d: "Realistic expectations about coat development and outcomes with no pressur.e" },
                        { t: "Small Scale", d: "Personal by design. We observe temperaments daily to ensure thoughtful matching." },
                        { t: "Placement Care", d: "A puppy is not sold—it is placed. We seek homes that value responsible ownership." }
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-50 p-10 flex flex-col justify-between min-h-[280px] hover:bg-slate-100 transition-all duration-500 border-b border-slate-100 lg:border-none">
                            <span className="text-brand-pink-700 font-black text-3xl">0{i + 1}</span>
                            <div>
                                <h3 className="text-lg font-bold mb-3 uppercase tracking-tight text-brand-blue-700">{item.t}</h3>
                                <p className="text-brand-blue-500 leading-relaxed text-sm">{item.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. THREE PILLAR CARDS */}
            <section className="px-4 md:px-10 py-10 bg-white">
            <div className="bg-slate-900 rounded-[2rem] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-10">
                    
                    {/* Header: Compact & Precise */}
                    <div className="pb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-xl">
                            <span className="text-brand-blue-500 font-semibold uppercase tracking-widest text-xs mb-3 block">
                                Core Breeding Philosophy
                            </span>
                            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-black fr uppercase leading-none">
                                The Three Pillars
                            </h2>
                        </div>
                        <p className="text-brand-blue-500 max-w-xs text-sm leading-normal border-l border-brand-blue-500/30 pl-6">
                            Every litter is the result of careful planning and a deep respect for the Toy Poodle breed.
                        </p>
                    </div>

                    {/* Content Grid: Professional Row Style */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-2xl overflow-hidden">
                        {pillars.map((pillar, idx) => (
                            <div 
                                key={idx} 
                                className={`p-6 sm:p-8 md:p-10 flex flex-col hover:bg-white/[0.02] transition-colors border-b md:border-b-0 md:border-r border-white/10 last:border-none`}
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-10 h-10 rounded-lg bg-brand-pink-700/10 flex items-center justify-center text-brand-pink-500">
                                        {pillar.icon}
                                    </div>
                                    <span className="text-brand-blue-500 text-xs font-black tracking-widest uppercase">
                                        0{idx + 1}
                                    </span>
                                </div>

                                <div className="mb-4">
                                    <span className="text-brand-pink-500 text-[10px] font-bold uppercase tracking-widest mb-1 block opacity-80">
                                        {pillar.label}
                                    </span>
                                    <h4 className="text-white text-lg md:text-xl font-bold uppercase tracking-tight">
                                        {pillar.title}
                                    </h4>
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {pillar.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Footer Detail */}
                    <div className="mt-10 flex sm:flex-row flex-col sm:gap-0 gap-2 items-center justify-between text-xs font-bold uppercase tracking-widest text-brand-blue-500">
                        <span>Quality over Quantity</span>
                        <div className="hidden md:block h-px flex-grow mx-8 bg-white/5"></div>
                        <span>Established with Integrity</span>
                    </div>
                </div>
            </div>
        </section>

            {/* 4. HEALTH TESTING ICON LIST */}
            <section className="py-10 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text fr mb-4">Reputable Guidance</h2>
                    <p className="text-brand-blue-500 text-base md:text-lg max-w-2xl mx-auto">Commonly recommended health testing for Toy Poodles per PCA and Versatility in Poodles.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { t: "prcd PRA DNA", d: "Genetic screening for vision.", icon: <Dna size={30} /> },
                        { t: "Annual Eyes", d: "ACVO Ophthalmologist (CAER).", icon: <Eye size={30} /> },
                        { t: "Patellar Evaluation", d: "Manual luxation evaluation.", icon: <Stethoscope size={30} /> }
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-pink-50 rounded-2xl flex flex-col items-center text-center border border-brand-pink-500">
                            <div className="text-brand-pink-500 mb-4">{item.icon}</div>
                            <h5 className="font-bold text-brand-pink-500 fr text-lg md:text-xl uppercase mb-2">{item.t}</h5>
                            <p className="text-xs md:text-sm text-brand-pink-500 leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>

                {/* 5. EXPANDABLE HEALTH PANEL */}
                <div className="mt-10 border border-brand-pink-500 rounded-2xl overflow-hidden">
                    <button
                        onClick={() => setIsHealthPanelOpen(!isHealthPanelOpen)}
                        className="w-full p-6 flex justify-between items-center bg-white hover:bg-pink-100 transition-colors cursor-pointer"
                    >
                        <span className="font-bold text-sm md:text-base uppercase tracking-tight flex items-center gap-2">
                            <ShieldAlert className="text-brand-pink-500" size={22} />
                            Health testing we follow
                        </span>
                        <ChevronDown className={`text-brand-pink-500 transition-transform ${isHealthPanelOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {isHealthPanelOpen && (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-4 md:p-8 bg-slate-50 border-t border-slate-200 text-sm text-slate-600 leading-relaxed space-y-4">
                                    <p>We perform prcd PRA DNA testing and Annual eye exams yearly via an ACVO ophthalmologist. These are specifically listed for Toy Poodles in the <span className="font-bold text-brand-blue-500">Poodle Club of America</span> health statement.</p>
                                    <p>Eye disease in poodles can involve more than one condition, which is why annual eye exams remain important even when DNA testing is completed.</p>
                                    {/* Subpage CTA Button */}
                                    <button
                                        onClick={() => handleNavigation('/health-testing')}
                                        className="flex items-center gap-2 px-6 py-3 bg-brand-blue-500 text-white font-bold uppercase text-xs tracking-widest rounded-lg hover:bg-brand-blue-700 transition-all duration-300 cursor-pointer"
                                    >
                                        View Health & OFA CHIC <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* 6. PUPPY RAISING SECTION */}
            <section className="py-10 px-6 bg-pink-50 border-y border-[#E9FBC8]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text tracking-tighter fr uppercase mb-8">Raised for <br />Real Life.</h2>
                        <p className="text-brand-pink-500 mb-10 leading-relaxed text-sm italic border-l-4 border-brand-pink-500 pl-4">
                            "We focus on early confidence building and calm exposure so puppies grow into companions who can handle normal life."
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Introduction to household sounds and movement",
                                "Gentle grooming exposure (face, handling)",
                                "Short sessions building curiosity and coordination",
                                "Human interaction teaching trust and calmness"
                            ].map((li, i) => (
                                <li key={i} className="flex gap-3 text-sm font-semibold text-slate-700 items-center">
                                    <p><CheckCircle2 size={20} className='text-brand-blue-700' /></p>
                                    {li}
                                </li>
                            ))}
                        </ul>
                        {/* Subpage CTA Button */}
                        <button
                            onClick={() => handleNavigation('/puppy-raising')}
                            className="px-8 py-4 bg-brand-blue-500 text-white font-bold uppercase text-xs tracking-widest rounded-xl hover:bg-brand-blue-700 transition-all duration-300 cursor-pointer flex items-center gap-2"
                        >
                            View Full Raising Protocol <ArrowRight size={16} />
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src={smallPoodle1} alt="Raised in home" className="rounded-3xl shadow-xl object-cover" />
                        <img src={smallPoodle2} alt="Grooming exposure" className="rounded-3xl shadow-xl mt-10 h-[100%] object-cover" />
                    </div>
                </div>
            </section>

            {/* 7. PLACEMENT ETHICS */}
            <section className="py-10 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <UsersRound className="text-brand-pink-700 mx-auto mb-8" size={30} />
                    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text fr uppercase mb-8">Placement Ethics</h2>
                    <p className="text-brand-blue-500 mb-10 text-base md:text-lg leading-normal">
                        We look for families who want a companion for life and understand grooming needs.
                        It’s about protecting the dogs and supporting the families.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => handleNavigation('/available')} className="px-10 py-5 bg-brand-blue-500 text-white font-bold uppercase text-sm tracking-widest rounded-xl hover:bg-brand-blue-700 transition-all duration-300 cursor-pointer">
                            See Available Puppies
                        </button>
                        <button onClick={() => handleNavigation('/application')} className="px-10 py-5 border-2 border-brand-pink-700 text-brand-pink-700 font-bold uppercase text-sm tracking-widest rounded-xl hover:bg-slate-50 transition-all duration-300 cursor-pointer">
                            Start Application
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BreedProgram;