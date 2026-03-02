import { title } from 'framer-motion/client';
import { ShieldCheck, Stethoscope, AlertTriangle, ClipboardList, CheckCircle2, MessageSquare, PawPrint, Download, Balloon, Heart, Copyright, FileCheckCorner, Bandage, Accessibility, Activity, ReplaceAll, BadgePercent } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const HealthContract = () => {
    const covered = [
        {
            text: "Present at birth (Genetic/Congenital)",
            icon: <Balloon size={20} />
        },
        {
            text: "Conditions that impair quality of life",
            icon: <Heart size={20} />
        },
        {
            text: "Confirmed by a licensed veterinarian",
            icon: <Copyright size={20} />
        },
        {
            text: "Documented with supporting vet records",
            icon: <FileCheckCorner size={20} />
        },
    ]

    const notCovered = [
        {
            text: "Routine or minor treatable conditions",
            icon: <Bandage size={20} />
        },
        {
            text: "Accidents or injuries after placement",
            icon: <Accessibility size={20} />
        },
        {
            text: "Lack of preventive care",
            icon: <Activity size={20} />
        },
        {
            text: "Parasites appearing after placement",
            icon: <ReplaceAll size={20} />
        },
    ]

    const navigate = useNavigate();

    return (
        <div className="bg-white text-gray-700 leading-relaxed">

            {/* HERO SECTION - Sleek & High-Contrast */}
            <section className="bg-white pt-10 pb-5 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <h1 className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text text-4xl sm:text-5xl md:text-7xl fr font-black uppercase tracking-tighter leading-none mb-4">
                            Health <br /> Guarantee
                        </h1>
                        <p className="text-brand-blue-700 font-semibold uppercase tracking-wide text-sm md:text-base">
                            & Formal Contractual Agreement
                        </p>
                    </div>
                    <div className="md:text-right">
                        <p className="text-gray-800 text-base sm:text-lg md:text-xl font-bold mb-2">"Because Puppies Are Loved, <span className='text-brand-pink-500'>Not Sold</span>"</p>
                        <div className="h-1 w-24 bg-brand-pink-500 md:ml-auto -mt-2"></div>
                    </div>
                </div>
            </section>

            {/* INTRO - Minimalist Box */}
            <section className="py-10 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-blue-50 px-4 py-8 md:p-12 rounded-2xl flex flex-col lg:flex-row gap-10 items-center">
                        <div className="lg:w-2/3">
                            <p className="text-base sm:text-lg md:text-xl text-brand-blue-700 font-medium leading-snug">
                                Welcoming a puppy into your home is an emotional and meaningful decision,
                                and it deserves <span className="text-brand-pink-700 font-bold">clarity, trust, and mutual responsibility.</span>
                            </p>
                        </div>
                        <div className="lg:w-1/3 text-sm text-brand-blue-500 space-y-4">
                            <p>This agreement is not a burden. It is our promise to you, and to our dogs, that we take health seriously and believe a strong start matters.</p>
                            <button className="flex items-center gap-2 text-brand-pink-700 font-bold uppercase tracking-widest text-xs hover:gap-4 cursor-pointer duration-300 transition-all">
                                <Download size={16} /> Download Sample PDF
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* AT PLACEMENT - Grid Layout */}
            <section className="py-10 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-4">
                        <h2 className="text-gray-900 text-4xl md:text-5xl font-black uppercase fr tracking-tighter mb-6">
                            At the Time <br /> of <span className='text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text'>Placement</span>
                        </h2>
                        <p className="text-brand-blue-500 mb-6">
                            Your puppy will be certified by a veterinarian as being in good health on the day it leaves our home.
                        </p>
                        <Stethoscope size={40} className="text-brand-blue-500" strokeWidth={1.5} />
                    </div>

                    <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4">
                        {[
                            { t: "Vaccinations", d: "Age-appropriate vaccinations and deworming." },
                            { t: "Vet Exam", d: "Full clinical examination by a licensed veterinarian." },
                            { t: "Health Record", d: "Detailed records of care and recommendations." }
                        ].map((item, idx) => (
                            <div key={idx} className="border border-brand-blue-500 p-6 rounded-2xl hover:border-brand-pink-700 transition-colors duration-300 group">
                                <CheckCircle2 className="text-brand-blue-500 mb-4 group-hover:text-brand-pink-700" size={24} />
                                <h3 className="font-bold text-gray-900 uppercase fr text-xs tracking-widest mb-2">{item.t}</h3>
                                <p className="text-sm text-gray-500">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COVERAGE COMPARISON - Split Sleek Cards */}
            <section className="py-10 px-4 sm:px-6 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4">

                    {/* What is Included */}
                    <div className="bg-brand-blue-500/5 border border-brand-blue-500 px-4 py-8 md:p-12 rounded-2xl">
                        <div className="flex items-center gap-4 mb-8">
                            <ShieldCheck className="text-brand-blue-700" size={32} />
                            <h2 className="text-xl md:text-2xl font-black uppercase fr tracking-tighter text-brand-blue-700">What is Covered ?</h2>
                        </div>
                        <ul className="space-y-6">
                            {covered.map((text, i) => (
                                <li key={i} className="flex gap-4 sm:text-base text-sm items-center text-brand-blue-500">
                                    <span>{text.icon}</span>
                                    {text.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* What is Not Covered */}
                    <div className="bg-brand-pink-500/5 border border-brand-pink-500 px-4 py-8 md:p-12 rounded-2xl">
                        <div className="flex items-center gap-4 mb-8">
                            <AlertTriangle className="text-brand-pink-700" size={32} />
                            <h2 className="text-xl md:text-2xl font-black fr uppercase tracking-tighter text-brand-pink-700">Not Covered !</h2>
                        </div>
                        <ul className="space-y-6 text-brand-pink-500">
                            {notCovered.map((text, i) => (
                                <li key={i} className="flex gap-4 sm:text-base text-sm items-start">
                                    <span>{text.icon}</span>
                                    {text.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* FAMILY RESPONSIBILITIES - Horizontal Timeline Style */}
            <section className="py-10 px-6 max-w-7xl mx-auto">
                <div className="mb-10">
                    <h2 className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text text-4xl md:text-5xl font-black uppercase fr tracking-tight">Your Responsibilities</h2>
                    <p className="text-brand-blue-500 pl-2 pt-2">A health guarantee is a partnership.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-0 border border-brand-blue-500">
                    {[
                        {
                            step: "72 Hours",
                            title: "Initial Exam",
                            desc: "Puppy must be examined by your vet within 72 hours of placement to validate this guarantee."
                        },
                        {
                            step: "Routine",
                            title: "Preventive Care",
                            desc: "Providing vaccinations, parasite prevention, and prompt professional attention."
                        },
                        {
                            step: "Transition",
                            title: "Care Guidance",
                            desc: "Following grooming and care guidance provided during the go-home transition."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="p-6 sm:p-8 border-r border-brand-blue-500 last:border-r-0 hover:bg-blue-50 transition-colors duration-300">
                            <span className="text-brand-pink-700 text-xs font-bold uppercase tracking-widest mb-4 block">
                                {item.step}
                            </span>
                            <h3 className="text-lg sm:text-xl md:text-2xl fr font-bold text-gray-900 mb-4">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* THE PACKET - Grid of Documents */}
            <section className="relative py-10 px-4 sm:px-6 bg-blue-50 overflow-hidden">
                {/* Subtle Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(var(--color-brand-pink-700) 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start md:items-end mb-16 gap-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="h-[1px] w-10 bg-brand-pink-700"></span>
                                <span className="text-brand-pink-700 font-semibold tracking-[0.2em] text-xs uppercase">Guaranteed Protection</span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl fr font-black uppercase tracking-tight leading-none text-gray-900">
                                Full Contract <br />
                                <span className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text" style={{ WebkitTextStroke: '1px var' }}>Included With</span> <br />
                                <span className='text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text'>Every Puppy</span>
                            </h2>
                        </div>
                        <div className="lg:mb-2">
                            <p className="text-gray-700 max-w-sm text-base leading-normal border-l-2 border-brand-pink-700 pl-6">
                                We provide these documents so there is <span className="font-bold text-brand-pink-700">no guesswork</span>, no hidden terms, and no surprise obligations later.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
                        {[
                            {
                                title: "Sales Contract",
                                icon: <BadgePercent />
                            },
                            {
                                title: "Health Guarantee",
                                icon: <Heart />
                            },
                            {
                                title: "Vet Check Forms",
                                icon: <Stethoscope />
                            },
                            {
                                title: "AKC Paperwork",
                                icon: <FileCheckCorner />
                            },
                            {
                                title: "Microchip Info",
                                icon: <Accessibility />
                            }
                        ].map((doc, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-white/80 backdrop-blur-sm p-6 sm:p-8 flex flex-col items-start justify-between 
                                       hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(142,204,20,0.3)]
                                       border border-brand-blue-500"
                            >
                                {/* Number Indicator */}
                                <span className="absolute top-6 right-8 text-xs font-black text-brand-pink-700/30 group-hover:text-brand-pink-700 transition-colors">
                                    0{idx + 1}
                                </span>

                                <div className="bg-brand-blue-500/15 p-3 rounded-2xl mb-12 group-hover:scale-110 transition-transform duration-500">
                                    {doc.icon}
                                </div>

                                <div>
                                    <h3 className="text-base font-black uppercase text-gray-800 leading-tight mb-2">
                                        {doc.title}
                                    </h3>
                                    <div className="flex items-center gap-1">
                                        <CheckCircle2 size={12} className="text-brand-pink-700" />
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Verified Paperwork</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RESOLUTION & CTA */}
            <section className="py-10 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black uppercase text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text fr mb-6">Communication is the Key</h2>
                    <p className="text-brand-blue-500 mb-10">
                        If a covered condition is confirmed, we work hard to be fair to both families and puppies.
                        Options may include a replacement puppy or a partial refund depending on circumstances.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => navigate("/#contact")} className="bg-brand-pink-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-pink-700 transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2">
                            <MessageSquare size={18} /> Contact Us With Questions
                        </button>
                        <Link to={"/available"} className="bg-white border-2 border-brand-blue-500 text-gray-900 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-blue-500/20 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2">
                            <PawPrint size={18} /> See Available Puppies
                        </Link>
                    </div>

                    <p className="mt-10 text-brand-pink-700 text-xs uppercase tracking-widest font-semibold">
                        Transparent • Professional • Responsible
                    </p>
                </div>
            </section>

        </div>
    );
};

export default HealthContract;
