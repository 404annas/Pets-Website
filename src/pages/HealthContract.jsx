import { ShieldCheck, Stethoscope, AlertTriangle, ClipboardList, CheckCircle2, MessageSquare, PawPrint, Download, Balloon, Heart, Copyright, FileCheckCorner, Bandage, Accessibility, Activity, ReplaceAll } from 'lucide-react';
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
            <section className="bg-white pt-10 pb-5 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <h1 className="text-[#8ECC14] text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
                            Health <br /> Guarantee
                        </h1>
                        <p className="text-gray-800 font-bold uppercase tracking-wide text-sm md:text-base">
                            & Formal Contractual Agreement
                        </p>
                    </div>
                    <div className="md:text-right">
                        <p className="text-gray-800 text-xl font-bold italic mb-2">"Because Puppies Are Loved, <span className='text-[#8ECC14]'>Not Sold</span>"</p>
                        <div className="h-1 w-24 bg-[#8ECC14] md:ml-auto"></div>
                    </div>
                </div>
            </section>

            {/* INTRO - Minimalist Box */}
            <section className="py-10 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-[#E2F1C4] px-y py-8 md:p-12 rounded-[2rem] flex flex-col lg:flex-row gap-10 items-center">
                        <div className="lg:w-2/3">
                            <p className="text-base sm:text-lg md:text-xl text-gray-800 font-medium leading-snug">
                                Welcoming a puppy into your home is an emotional and meaningful decision,
                                and it deserves <span className="text-[#8ECC14] font-bold">clarity, trust, and mutual responsibility.</span>
                            </p>
                        </div>
                        <div className="lg:w-1/3 text-sm text-gray-600 space-y-4">
                            <p>This agreement is not a burden. It is our promise to you, and to our dogs, that we take health seriously and believe a strong start matters.</p>
                            <button className="flex items-center gap-2 text-[#8ECC14] font-bold uppercase tracking-widest text-xs hover:gap-4 cursor-pointer duration-300 transition-all">
                                <Download size={16} /> Download Sample PDF
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* AT PLACEMENT - Grid Layout */}
            <section className="py-10 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-4">
                        <h2 className="text-gray-900 text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                            At the Time <br /> of <span className='text-[#8ECC14]'>Placement</span>
                        </h2>
                        <p className="text-gray-500 mb-6">
                            Your puppy will be certified by a veterinarian as being in good health on the day it leaves our home.
                        </p>
                        <Stethoscope size={40} className="text-[#C6E589]" strokeWidth={1.5} />
                    </div>

                    <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4">
                        {[
                            { t: "Vaccinations", d: "Age-appropriate vaccinations and deworming." },
                            { t: "Vet Exam", d: "Full clinical examination by a licensed veterinarian." },
                            { t: "Health Record", d: "Detailed records of care and recommendations." }
                        ].map((item, idx) => (
                            <div key={idx} className="border border-[#C6E589] p-6 rounded-2xl hover:border-[#8ECC14] transition-colors duration-300 group">
                                <CheckCircle2 className="text-[#C6E589] mb-4 group-hover:text-[#8ECC14]" size={24} />
                                <h3 className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-2">{item.t}</h3>
                                <p className="text-sm text-gray-500">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COVERAGE COMPARISON - Split Sleek Cards */}
            <section className="py-10 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4">

                    {/* What is Included */}
                    <div className="bg-[#F9FFF0] border border-[#C6E589] px-6 py-8 md:p-12 rounded-[3rem]">
                        <div className="flex items-center gap-4 mb-8">
                            <ShieldCheck className="text-[#8ECC14]" size={32} />
                            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter">What is Covered ?</h2>
                        </div>
                        <ul className="space-y-6">
                            {covered.map((text, i) => (
                                <li key={i} className="flex gap-4 items-center text-gray-700">
                                    <span>{text.icon}</span>
                                    {text.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* What is Not Covered */}
                    <div className="bg-gray-50 border border-gray-100 p-8 md:p-12 rounded-[3rem]">
                        <div className="flex items-center gap-4 mb-8">
                            <AlertTriangle className="text-gray-400" size={32} />
                            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-gray-400">Not Covered !</h2>
                        </div>
                        <ul className="space-y-6 text-gray-500">
                            {notCovered.map((text, i) => (
                                <li key={i} className="flex gap-4 items-start">
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
                    <h2 className="text-[#8ECC14] text-4xl md:text-5xl font-black uppercase tracking-tighter">Your Responsibilities</h2>
                    <p className="text-gray-600 italic pl-2 pt-2">A health guarantee is a partnership.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-0 border-t border-gray-100">
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
                        <div key={idx} className="p-8 border-r border-gray-100 last:border-r-0 hover:bg-[#E2F1C4]/30 transition-colors">
                            <span className="text-[#8ECC14] text-xs font-bold uppercase tracking-widest mb-4 block">
                                {item.step}
                            </span>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* THE PACKET - Grid of Documents */}
            <section className="py-10 px-6 bg-[#E2F1C4]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-10 gap-6">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                            Full Contract <br /> Included With <br /> <span className='text-[#8ECC14]'>Every Puppy</span>
                        </h2>
                        <p className="text-gray-600 max-w-sm text-sm">
                            We provide these documents so there is no guesswork, no hidden terms, and no surprise obligations later.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            "Sales Contract",
                            "Health Guarantee",
                            "Vet Check Forms",
                            "AKC Paperwork",
                            "Microchip Info"
                        ].map((doc, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm border-1 border-[#b7e261]">
                                <ClipboardList className="text-[#C6E589] mb-3" size={24} />
                                <span className="text-sm font-bold uppercase tracking-widest text-gray-800 leading-tight">
                                    {doc}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RESOLUTION & CTA */}
            <section className="py-10 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-5xl font-black uppercase text-[#8ECC14] mb-6">Communication is Key</h2>
                    <p className="text-gray-500 mb-10">
                        If a covered condition is confirmed, we work hard to be fair to both families and puppies.
                        Options may include a replacement puppy or a partial refund depending on circumstances.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => navigate("/#contact")} className="bg-[#8ECC14] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-900 transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2">
                            <MessageSquare size={18} /> Contact Us With Questions
                        </button>
                        <Link to={"/available"} className="bg-white border-2 border-[#C6E589] text-gray-900 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#C6E589] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2">
                            <PawPrint size={18} /> See Available Puppies
                        </Link>
                    </div>

                    <p className="mt-10 text-[#8ECC14] text-xs uppercase tracking-widest font-bold">
                        Transparent • Professional • Responsible
                    </p>
                </div>
            </section>

        </div>
    );
};

export default HealthContract;