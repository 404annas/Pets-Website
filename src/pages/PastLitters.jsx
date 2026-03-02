import { useState } from 'react';
import { Calendar, Info, Camera, ArrowUpRight, History } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const PastLitters = () => {
    const [activeYear, setActiveYear] = useState('2025');
    const navigate = useNavigate();

    const archiveData = [
        {
            year: "2025",
            litters: [
                {
                    parents: "Ruby x Jasper",
                    date: "January 14, 2025",
                    goHome: "March 8–10, 2025",
                    details: "This beautiful red and deep-apricot litter brought us 5 lively pups. All went on to loving homes.",
                    highlights: "Strong color retention, calm temperaments, confident explorers.",
                    img: "https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?auto=format&fit=crop&q=80&w=800"
                },
                {
                    parents: "Bella x Winston",
                    date: "May 22, 2025",
                    goHome: "July 15–17, 2025",
                    details: "A balanced litter with vivid red coats and engaging personalities. Quick learners and affectionate.",
                    highlights: "Vivid red coats, high engagement, social butterflies.",
                    img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800"
                }
            ]
        },
        {
            year: "2024",
            litters: [
                {
                    parents: "Penny x Oliver",
                    date: "October 9, 2024",
                    goHome: "December 1–3, 2024",
                    details: "Red coat depth and social confidence defined this group. Many were noted for quick social responses.",
                    highlights: "Deep red hues, social confidence, bright curiosity.",
                    img: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=800"
                },
                {
                    parents: "Daisy x Max",
                    date: "June 17, 2024",
                    goHome: "August 10–12, 2024",
                    details: "Rich red hues with expressive temperaments. They made fast friends during socialization days.",
                    highlights: "Expressive eyes, rapid socialization, consistent sizing.",
                    img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800"
                }
            ]
        },
        {
            year: "2023",
            litters: [
                {
                    parents: "Poppy x Leo",
                    date: "April 3, 2023",
                    goHome: "June 1–3, 2023",
                    details: "Energetic and affectionate, these puppies enjoyed early play sessions and calm family interactions.",
                    highlights: "Therapy dog potential, high affection, dense coats.",
                    img: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=80&w=800"
                }
            ]
        }
    ];

    const scrollToYear = (year) => {
        setActiveYear(year);
        const element = document.getElementById(`year-${year}`);
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-white">

            {/* HERO SECTION */}
            <section className="py-10 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div className="max-w-2xl">
                        <h1 className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text fr text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
                            Past Litters <br /> <span className='text-gray-900'>Archive</span>
                        </h1>
                        <p className="text-brand-blue-500 text-base md:text-lg leading-6 font-normal">
                            A living history of our Toy Poodle families—showcasing health, temperament, and lineage in action.
                        </p>
                    </div>
                    <div className="hidden lg:block">
                        <History size={100} className="text-brand-pink-700" />
                    </div>
                </div>
            </section>

            {/* STICKY FILTER NAV */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-blue-700">Jump to Year</span>
                    <div className="flex gap-4 md:gap-8">
                        {['2025', '2024', '2023'].map((year) => (
                            <button
                                key={year}
                                onClick={() => scrollToYear(year)}
                                className={`text-sm font-bold uppercase cursor-pointer tracking-widest transition-all ${activeYear === year ? 'text-brand-pink-700 border-b-2 border-brand-pink-700' : 'text-brand-blue-500 hover:text-brand-blue-700'
                                    }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* ARCHIVE CONTENT */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {archiveData.map((section, sIdx) => (
                    <div key={sIdx} id={`year-${section.year}`} className="py-10 border-b border-gray-50 last:border-0">

                        <div className="flex flex-col lg:flex-row gap-12">
                            {/* Year Indicator */}
                            <div className="lg:w-1/6">
                                <div className="sticky top-24">
                                    <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-blue-500 leading-none fr select-none">
                                        {section.year.slice(2)}
                                    </span>
                                    <p className="text-brand-pink-700 font-bold uppercase tracking-widest text-xs mt-2">Historical Records</p>
                                </div>
                            </div>

                            {/* Litters List */}
                            <div className="lg:w-5/6 space-y-20">
                                {section.litters.map((litter, lIdx) => (
                                    <div key={lIdx} className="group flex flex-col md:flex-row gap-10 items-start">

                                        {/* Image side */}
                                        <div className="w-full md:w-1/2 relative overflow-hidden rounded-sm">
                                            <img
                                                loading='lazy'
                                                src={litter.img}
                                                alt={litter.parents}
                                                className="w-full aspect-[4/3] object-cover"
                                            />
                                            <div
                                                onClick={() => navigate(`/past-litters/${litter.parents.replace(/\s+/g, '-').toLowerCase()}`)}
                                                className="absolute bottom-0 left-0 cursor-pointer bg-brand-pink-500 text-white p-4 flex items-center gap-3 hover:bg-brand-pink-700 transition-colors duration-300"
                                            >
                                                <Camera size={18} />
                                                <span className="text-[10px] font-black uppercase tracking-widest">View Full Gallery</span>
                                            </div>
                                        </div>

                                        {/* Details side */}
                                        <div className="w-full md:w-1/2">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="h-px w-8 bg-brand-blue-500"></div>
                                                <h3 className="text-3xl font-black text-gray-900 fr tracking-tighter uppercase">{litter.parents}</h3>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 mb-8">
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-brand-pink-500 font-bold uppercase tracking-widest">Born</span>
                                                    <span className="text-sm font-semibold">{litter.date}</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-brand-pink-500 font-bold uppercase tracking-widest">Go Home</span>
                                                    <span className="text-sm font-semibold">{litter.goHome}</span>
                                                </div>
                                            </div>

                                            <div className="space-y-4 mb-8">
                                                <div className="flex items-start gap-4">
                                                    <Info className="text-brand-blue-500 shrink-0" size={20} />
                                                    <p className="text-brand-blue-500 text-sm leading-relaxed">{litter.details}</p>
                                                </div>
                                                <div className="bg-brand-blue-500/5 p-4 border-l-4 border-brand-blue-500">
                                                    <span className="block text-[10px] font-black text-brand-pink-700 uppercase mb-1">Outcome Highlights</span>
                                                    <p className="text-gray-700 text-sm font-medium">{litter.highlights}</p>
                                                </div>
                                            </div>

                                            <button onClick={() => navigate("/#contact")} className="group/btn flex items-center gap-2 text-brand-pink-500 font-black text-xs uppercase tracking-widest border-b-2 border-brand-pink-500 pb-1 hover:text-brand-pink-700 hover:border-brand-pink-700 cursor-pointer transition-all duration-300">
                                                Discuss this Pairing <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* FOOTER CTA */}
            <section className="py-10 px-6 bg-gray-50 border-t border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text fr text-3xl font-black uppercase mb-6 tracking-tighter">Looking for your future Poodle?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to={"/available"} className="bg-brand-pink-500 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-pink-700 transition-colors duration-300">
                            View Available Puppies
                        </Link>
                        <button onClick={() => navigate("/galleries")} className="bg-white border-2 border-brand-blue-500 text-gray-700 hover:bg-blue-50 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs cursor-pointer hover:border-brand-blue-500 transition-all duration-300">
                            Browse All Photo Galleries
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default PastLitters;