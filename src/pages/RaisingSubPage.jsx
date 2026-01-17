import React, { useEffect } from 'react';
import {
    ArrowLeft,
    ArrowRight,
    Scissors,
    Users,
    Zap,
    HeartHandshake,
    CheckCircle2,
    Activity,
    Sun,
    ShieldCheck,
    UsersRound
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RaisingSubPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen text-slate-900 selection:bg-[#8ECC14] selection:text-white">

            {/* 1. HERO SECTION */}
            <section className="py-10 px-6 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <span className="text-[#8ECC14] font-semibold uppercase tracking-widest text-xs mb-4 block">Raising Protocol</span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-6">
                        Raised with <span className="text-[#8ECC14]">Intention.</span>
                    </h1>
                    <p className="max-w-2xl text-base text-slate-500 font-medium leading-relaxed">
                        Puppies learn who they are from the world we give them. Genetics matter, but experience shapes confidence.
                    </p>
                </div>
            </section>

            {/* 2. THREE STAGES GRID */}
            <section className="py-10 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Stage 1 */}
                        <div className="border-t-4 border-[#8ECC14] pt-6">
                            <span className="text-sm font-semibold text-[#C6E589] uppercase mb-4 block">Phase 01</span>
                            <h3 className="text-2xl font-bold uppercase mb-4 text-[#8ECC14] tracking-tight">The Earliest Days</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                Quiet care and constant presence. We spend time watching how puppies nurse, settle, and respond to touch. These early moments tell us more than any checklist ever could.
                            </p>
                        </div>
                        {/* Stage 2 */}
                        <div className="border-t-4 border-slate-900 pt-6">
                            <span className="text-sm font-semibold text-[#C6E589] uppercase mb-4 block">Phase 02</span>
                            <h3 className="text-2xl font-bold uppercase mb-4 text-[#8ECC14] tracking-tight">The World Grows</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                Environment expands through household sounds, textures under paws, and short periods of exploration. Confidence grows best when puppies feel safe, not pushed.
                            </p>
                        </div>
                        {/* Stage 3 */}
                        <div className="border-t-4 border-slate-100 pt-6">
                            <span className="text-sm font-semibold text-[#C6E589] uppercase mb-4 block">Phase 03</span>
                            <h3 className="text-2xl font-bold uppercase mb-4 text-[#8ECC14] tracking-tight">Routine Builds Confidence</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                Regular feeding, rest, and interaction teach puppies what to expect. When the world makes sense, they handle new experiences calmly. Confident dogs are built day by day, everyday.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FOCUS PILLARS (SPLIT) */}
            <section className="py-10 px-6 bg-slate-900 text-white mx-4 md:mx-10 rounded-[2rem]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#8ECC14]">
                                <Scissors size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg md:text-xl font-bold uppercase mb-2 tracking-tight text-[#8ECC14]">Early Grooming</h4>
                                <p className="text-sm text-slate-400 font-normal leading-relaxed">Toy Poodles live with grooming their entire lives. We introduce brushing and face handling early so it feels normal and never scary.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#8ECC14]">
                                <UsersRound size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold uppercase mb-2 tracking-tight text-[#8ECC14]">Human Connection</h4>
                                <p className="text-sm text-slate-400 font-normal leading-relaxed">Hands bring comfort, voices bring reassurance. Puppies are included in everyday life so they grow into companions who seek connection.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1602165640367-68676c0ec5f0?w=1000&q=80"
                            className="w-full h-full object-cover opacity-70"
                            alt="Puppy bonding"
                        />
                    </div>
                </div>
            </section>

            {/* 4. PUPPY MATCHING */}
            <section className="py-10 px-6">
                <div className="max-w-5xl mx-auto bg-[#C6E589] px-8 py-10 md:p-12 rounded-[2rem] border border-[#aac96c]">
                    <div className="flex items-center gap-4 mb-6 text-[#75a712]">
                        <Zap size={30} fill="currentColor" />
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">Thoughtful Matching</h2>
                    </div>
                    <p className="text-base text-slate-600 leading-relaxed mb-8">
                        No two puppies are the same. Some are <span className="text-[#75a712] font-bold">bold explorers</span>, some are <span className="text-[#75a712] font-bold">gentle observers</span>. We pay attention to these differences to help families find a puppy that fits their lifestyle. Matching protects the puppy and the family.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#75a712] uppercase tracking-widest border-t border-[#75a712] pt-6">
                        <ShieldCheck size={20} className="text-[#75a712]" /> Support does not end at pickup
                    </div>
                </div>
            </section>

            {/* 5. CALL TO ACTION SECTION */}
            <section className="pt-5 pb-20 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <HeartHandshake className="mx-auto text-[#8ECC14] mb-6" size={40} />
                    <h2 className="text-3xl md:text-4xl font-black text-[#8ECC14] uppercase mb-6 tracking-tight">Our Relationship Continues</h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">Bringing a puppy home is exciting and sometimes overwhelming. We stay available because questions do not stop after the first day.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button onClick={() => navigate('/available')} className="px-10 py-4 bg-slate-900 text-white font-bold uppercase text-xs tracking-widest rounded-xl hover:bg-slate-800 hover:scale-105 transition-all duration-300 cursor-pointer">
                            See Available Puppies
                        </button>
                        <button onClick={() => navigate('/application')} className="px-10 py-4 bg-[#8ECC14] text-white font-bold uppercase text-xs tracking-widest rounded-xl hover:scale-105 shadow-sm shadow-[#8ECC14]/20 transition-all duration-300 cursor-pointer">
                            Apply for a Puppy
                        </button>
                    </div>
                </div>
            </section>

            {/* 6. NAV LINKS FOOTER */}
            <section className="pb-10 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                        onClick={() => { window.scrollTo(0, 0); navigate('/breed-program') }}
                        className="flex items-center justify-between p-10 bg-slate-50 rounded-3xl hover:bg-slate-100 transition-all duration-300 group cursor-pointer"
                    >
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 block mb-2">Back</span>
                            <span className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-[#8ECC14] transition-colors duration-300">Ethics Overview</span>
                        </div>
                        <ArrowLeft className="text-gray-400 group-hover:-translate-x-2 transition-transform duration-300" />
                    </button>

                    <button
                        onClick={() => { window.scrollTo(0, 0); navigate('/health-testing') }}
                        className="flex items-center justify-between p-10 bg-slate-900 text-white rounded-3xl hover:bg-slate-800 transition-all duration-300 cursor-pointer group"
                    >
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 block mb-2">Forward</span>
                            <span className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-[#8ECC14] transition-colors duration-300">Health Testing</span>
                        </div>
                        <ArrowRight className="text-[#8ECC14] group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                </div>
            </section>

        </div>
    );
};

export default RaisingSubPage;