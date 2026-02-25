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
    UsersRound,
    Eye,
    Compass,
    Target
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RaisingSubPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen text-slate-900 selection:bg-brand-pink-700 selection:text-white">

            {/* 1. HERO SECTION */}
            <section className="py-10 px-6 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <span className="text-brand-pink-700 font-semibold uppercase tracking-widest text-xs mb-4 block">Raising Protocol</span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl fr font-black tracking-tighter uppercase leading-none mb-6">
                        Raised with <span className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text">Intention.</span>
                    </h1>
                    <p className="max-w-2xl text-base text-brand-blue-500 font-medium leading-relaxed">
                        Puppies learn who they are from the world we give them. Genetics matter, but experience shapes confidence.
                    </p>
                </div>
            </section>

            {/* 2. THREE STAGES GRID */}
            <section className="py-10 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Stage 1 */}
                        <div className="border-t-4 border-brand-pink-700 pt-6">
                            <span className="text-sm font-semibold text-brand-blue-500 uppercase mb-4 block">Phase 01</span>
                            <h3 className="text-2xl font-bold uppercase mb-4 fr text-brand-pink-700 tracking-tight">The Earliest Days</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                Quiet care and constant presence. We spend time watching how puppies nurse, settle, and respond to touch. These early moments tell us more than any checklist ever could.
                            </p>
                        </div>
                        {/* Stage 2 */}
                        <div className="border-t-4 border-slate-900 pt-6">
                            <span className="text-sm font-semibold text-brand-blue-500 uppercase mb-4 block">Phase 02</span>
                            <h3 className="text-2xl font-bold uppercase mb-4 text-brand-pink-700 fr tracking-tight">The World Grows</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                Environment expands through household sounds, textures under paws, and short periods of exploration. Confidence grows best when puppies feel safe, not pushed.
                            </p>
                        </div>
                        {/* Stage 3 */}
                        <div className="border-t-4 border-brand-blue-700 pt-6">
                            <span className="text-sm font-semibold text-brand-blue-500 uppercase mb-4 block">Phase 03</span>
                            <h3 className="text-2xl font-bold uppercase mb-4 text-brand-pink-700 fr tracking-tight">Routine Builds Confidence</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                Regular feeding, rest, and interaction teach puppies what to expect. When the world makes sense, they handle new experiences calmly. Confident dogs are built day by day, everyday.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FOCUS PILLARS (SPLIT) */}
            <section className="py-10 px-6 bg-slate-900 text-white mx-4 md:mx-10 rounded-[1rem]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-pink-500">
                                <Scissors size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg md:text-xl font-bold uppercase mb-2 tracking-tight text-brand-pink-500">Early Grooming</h4>
                                <p className="text-sm text-slate-400 font-normal leading-relaxed">Toy Poodles live with grooming their entire lives. We introduce brushing and face handling early so it feels normal and never scary.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-blue-500">
                                <UsersRound size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold uppercase mb-2 tracking-tight text-brand-blue-500">Human Connection</h4>
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
            <section className="bg-white py-10 px-6">
                <div className="max-w-7xl mx-auto border border-gray-100 rounded-[2.5rem] overflow-hidden">

                    {/* Top Header Bar */}
                    <div className="bg-gray-50 border-b border-gray-100 px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-3">
                            <Target className="text-brand-pink-700" size={20} />
                            <span className="text-xs font-bold uppercase tracking-widest text-brand-pink-700">Placement Protocol</span>
                        </div>
                        <div className="h-px flex-grow bg-brand-pink-700 hidden md:block mx-8"></div>
                        <span className="text-brand-pink-700 text-xs font-bold uppercase tracking-widest">Est. 2024 • Professional Matching</span>
                    </div>

                    <div className="grid lg:grid-cols-2">

                        {/* Left Side: The Narrative */}
                        <div className="px-6 py-8 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-100">
                            <h2 className="text-gray-900 text-4xl md:text-5xl fr font-black uppercase tracking-tighter leading-none mb-4">
                                Thoughtful <br />
                                <span className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text">Matching</span>
                            </h2>
                            <p className="text-brand-blue-500 text-base leading-relaxed mb-6">
                                No two puppies are the same. We pay attention to the differences that define a dog's future, helping families find a puppy that fits their specific lifestyle.
                            </p>
                            <div className="bg-blue-50 px-4 py-6 md:p-8 rounded-2xl">
                                <p className="text-brand-blue-500 font-medium leading-normal md:text-base text-sm">
                                    "Our goal is to ensure the energy in the home matches the energy of the pup. This protection benefits the puppy, the family, and the bond they will share for the next 15 years."
                                </p>
                            </div>
                        </div>

                        {/* Right Side: The Evaluation (Technical Data Look) */}
                        <div className="px-6 py-8 md:p-10 bg-white flex flex-col justify-center">
                            <div className="space-y-1">

                                {/* Profile A */}
                                <div className="group border border-brand-blue-500 rounded-2xl px-4 py-6 md:p-6 hover:border-brand-blue-500 transition-all duration-300">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-brand-blue-500/15 flex items-center justify-center text-brand-pink-700">
                                                <Compass size={18} />
                                            </div>
                                            <h4 className="font-black uppercase text-base tracking-tight text-gray-900">The Bold Explorer</h4>
                                        </div>
                                        <span className="text-xs md:block hidden font-bold text-brand-blue-500 uppercase">Profile A</span>
                                    </div>
                                    <p className="text-gray-500 text-sm leading-normal">
                                        Highly curious, driven by scent and sound. These pups lead the pack and thrive in active, adventurous environments.
                                    </p>
                                </div>

                                {/* Connector */}
                                <div className="ml-10 h-6 border-l-2 border-dashed border-brand-blue-500"></div>

                                {/* Profile B */}
                                <div className="group border border-brand-pink-500 rounded-2xl px-4 py-6 md:p-6 hover:border-brand-blue-500 transition-all">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-brand-pink-500/15 flex items-center justify-center text-brand-blue-700">
                                                <Eye size={18} />
                                            </div>
                                            <h4 className="font-black uppercase text-base tracking-tight text-gray-900">The Gentle Observer</h4>
                                        </div>
                                        <span className="text-xs font-bold md:block hidden text-brand-pink-500 uppercase">Profile B</span>
                                    </div>
                                    <p className="text-gray-500 text-sm leading-normal">
                                        Intuitive and calm. These pups prefer to watch before engaging, making them exceptional companions for quieter, focused homes.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Bottom Status Bar */}
                    <div className="bg-brand-pink-700 py-6 px-10 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-3 text-white">
                            <ShieldCheck size={20} />
                            <span className="text-xs font-bold uppercase tracking-widest">Our support does not end</span>
                        </div>
                        <button onClick={() => navigate("/#contact")} className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all duration-300 cursor-pointer">
                            Inquire About Our Process <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </section>

            {/* 5. CALL TO ACTION SECTION */}
            <section className="pt-5 pb-20 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <HeartHandshake className="mx-auto text-brand-pink-700 mb-6" size={40} />
                    <h2 className="text-3xl md:text-4xl font-black text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text fr uppercase mb-6 tracking-tight">Our Relationship Continues</h2>
                    <p className="text-brand-blue-500 mb-8 leading-relaxed">Bringing a puppy home is exciting and sometimes overwhelming. We stay available because questions do not stop after the first day.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button onClick={() => navigate('/available')} className="px-10 py-4 bg-brand-blue-700 text-white font-bold uppercase text-xs tracking-widest rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                            See Available Puppies
                        </button>
                        <button onClick={() => navigate('/application')} className="px-10 py-4 bg-brand-pink-700 text-white font-bold uppercase text-xs tracking-widest rounded-xl hover:scale-105 shadow-sm shadow-brand-pink-700/20 transition-all duration-300 cursor-pointer">
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
                            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-500 block mb-2">Back</span>
                            <span className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-brand-blue-500 transition-colors duration-300">Ethics Overview</span>
                        </div>
                        <ArrowLeft className="text-brand-blue-500 group-hover:-translate-x-2 transition-transform duration-300" />
                    </button>

                    <button
                        onClick={() => { window.scrollTo(0, 0); navigate('/health-testing') }}
                        className="flex items-center justify-between p-10 bg-slate-900 text-white rounded-3xl hover:bg-slate-800 transition-all duration-300 cursor-pointer group"
                    >
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-widest text-brand-pink-500 block mb-2">Forward</span>
                            <span className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-brand-pink-500 transition-colors duration-300">Health Testing</span>
                        </div>
                        <ArrowRight className="text-brand-pink-500 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                </div>
            </section>

        </div>
    );
};

export default RaisingSubPage;