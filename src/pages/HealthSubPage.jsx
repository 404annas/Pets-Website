import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck, Dna, Eye, Stethoscope,
    Database, ArrowRight, ArrowLeft,
    FileSearch, AlertCircle, Activity,
    Lock, Search, Check
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HealthSubPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-[#8ECC14]/20">

            {/* 1. MINIMALIST ARCHITECTURAL HERO */}
            <section className="pt-32 pb-20 px-6 border-b border-slate-100">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-12 h-[1px] bg-[#8ECC14]"></span>
                                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8ECC14]">Protocol 01-A</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
                                Health <br />
                                <span className="text-slate-200">Integrity.</span>
                            </h1>
                            <p className="text-xl text-slate-500 font-light leading-relaxed">
                                Health testing is not a checklist done once. It is an ongoing responsibility that protects the dogs we love and the families who welcome them.
                            </p>
                        </motion.div>
                    </div>
                    <div className="hidden lg:block pb-4">
                        <div className="text-right">
                            <p className="text-[10px] font-mono text-slate-300 uppercase mb-1">Standard Reference</p>
                            <p className="text-sm font-bold">PCA / VIP GUIDELINES</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. THE SPECIFICATION GRID (Different from Bento) */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Side Label */}
                    <div className="lg:col-span-3">
                        <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-slate-400 sticky top-32">
                            Biological Screening
                        </h2>
                    </div>

                    {/* Content Rows */}
                    <div className="lg:col-span-9 space-y-24">

                        {/* Row 1: DNA */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start group">
                            <div>
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center mb-6 group-hover:border-[#8ECC14] transition-colors">
                                    <Dna size={20} className="text-[#8ECC14]" />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">prcd PRA DNA Testing</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Screening for progressive retinal atrophy. By knowing the genetic status of our breeding dogs, we can scientifically ensure no puppy is born at risk for this specific form of vision loss.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-3xl border-l-4 border-[#8ECC14]">
                                <p className="text-[10px] font-mono uppercase text-slate-400 mb-4 tracking-widest">Purpose</p>
                                <p className="text-sm font-bold text-slate-700 leading-relaxed">
                                    "Knowing the status allows us to avoid pairings that could lead to avoidable inherited vision impairment."
                                </p>
                            </div>
                        </div>

                        {/* Row 2: Eyes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start group">
                            <div>
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center mb-6 group-hover:border-[#8ECC14] transition-colors">
                                    <Eye size={20} className="text-[#8ECC14]" />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Annual Eye Exams</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Eyes deserve ongoing attention. Annual exams by an ACVO ophthalmologist monitor conditions that DNA testing cannot detect.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-3xl border-l-4 border-[#8ECC14]">
                                <p className="text-[10px] font-mono uppercase text-slate-400 mb-4 tracking-widest">Requirement</p>
                                <p className="text-sm font-bold text-slate-700 leading-relaxed">
                                    "DNA testing is not a substitute for clinical exams. We conduct these annually to ensure long-term health."
                                </p>
                            </div>
                        </div>

                        {/* Row 3: Patellar */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start group">
                            <div>
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center mb-6 group-hover:border-[#8ECC14] transition-colors">
                                    <Stethoscope size={20} className="text-[#8ECC14]" />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Patellar Evaluation</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Evaluating knee stability in Toy Poodles helps reduce the risk of future mobility challenges and joint discomfort.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-3xl border-l-4 border-[#8ECC14]">
                                <p className="text-[10px] font-mono uppercase text-slate-400 mb-4 tracking-widest">Clinical Goal</p>
                                <p className="text-sm font-bold text-slate-700 leading-relaxed">
                                    "Ensuring these active, small dogs maintain mobility throughout their senior years."
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. THE DATA TRANSPARENCY (OFA/CHIC) */}
            <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-10 leading-none">
                            Public Data. <br />
                            <span className="text-[#8ECC14]">Public Trust.</span>
                        </h2>
                        <div className="space-y-12">
                            <div className="flex gap-6">
                                <Database className="text-[#8ECC14] shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-lg mb-2">OFA Public Database</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed font-light italic">
                                        The Orthopedic Foundation for Animals maintains a database where results are recorded publicly. Transparency is the only way to build trust.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <FileSearch className="text-[#8ECC14] shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-lg mb-2">CHIC Certification</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed font-light italic">
                                        A CHIC number signifies that the breeder completed all recommended tests and made the information available to the public.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="p-10 border border-white/10 rounded-[3rem] bg-white/5 backdrop-blur-sm">
                            <ShieldCheck className="text-[#8ECC14] mb-8" size={60} />
                            <p className="text-2xl font-light leading-relaxed mb-8">
                                "We believe openness protects dogs and families alike. A CHIC number doesn't mean flawless health—it means <span className="text-[#8ECC14] font-bold">total transparency.</span>"
                            </p>
                            <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest text-slate-500">
                                <div className="w-2 h-2 rounded-full bg-[#8ECC14]"></div>
                                VERIFIED REGISTRY DATA
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE ETHICS STATEMENT */}
            <section className="py-32 px-6 max-w-4xl mx-auto">
                <div className="text-center">
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8ECC14] mb-8 block">Final Declaration</span>
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-10">What we will never promise</h2>
                    <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
                        We will never promise a dog with zero health risk. No living being comes with guarantees. What we do promise is <span className="text-slate-900 font-bold">careful planning, responsible testing, and transparent records.</span>
                    </p>
                    <div className="flex items-center justify-center gap-2 text-[#8ECC14]">
                        <Activity size={20} />
                        <p className="font-mono text-xs font-bold tracking-widest">HEALTH FIRST. ALWAYS.</p>
                    </div>
                </div>
            </section>

            {/* 5. NAVIGATION LINKS */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto border-t border-slate-100 pt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <button
                        onClick={() => navigate('/breeding-program')}
                        className="group flex flex-col items-start p-8 rounded-[2rem] hover:bg-slate-50 transition-all text-left"
                    >
                        <ArrowLeft className="text-slate-300 group-hover:text-slate-900 transition-colors mb-4" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">Return</span>
                        <span className="text-xl font-black uppercase tracking-tight">Breeding Program</span>
                    </button>

                    <button
                        onClick={() => navigate('/puppy-raising')}
                        className="group flex flex-col items-end p-8 rounded-[2rem] hover:bg-[#E9FBC8]/30 transition-all text-right"
                    >
                        <ArrowRight className="text-[#8ECC14] mb-4" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#8ECC14] mb-1">Next Protocol</span>
                        <span className="text-xl font-black uppercase tracking-tight text-slate-900">Puppy Raising</span>
                    </button>
                </div>
            </section>

        </div>
    );
};

export default HealthSubPage;