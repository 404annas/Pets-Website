import { useNavigate } from 'react-router-dom';
import { Network, Dna, Palette, ShieldCheck, Layers, FileText, ChevronRight, MessageSquare } from 'lucide-react';

const OurDogsSubpage = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white text-gray-700 leading-relaxed">

            {/* BREADCRUMB - Subtle navigation */}
            <nav className="py-4 px-4 sm:px-6 max-w-7xl mx-auto flex items-center gap-2 text-xs font-bold uppercase text-gray-400">
                <button onClick={() => navigate('/our-dogs')} className="text-brand-pink-500 hover:text-brand-pink-700 cursor-pointer">Our Dogs</button>
                <ChevronRight size={12} />
                <span className="text-gray-900">Pedigree & Lineage</span>
            </nav>

            {/* HERO SECTION - Minimalist & Focused */}
            <section className="py-10 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                    <div className="lg:w-2/3">
                        <h1 className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text fr text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-none mb-4">
                            Pedigree <br /> <span className="text-gray-900">& Lineage</span>
                        </h1>
                        <p className="text-base sm:text-lg text-brand-blue-500 font-medium leading-tight max-w-xl">
                            Why pedigree matters <span className="text-brand-pink-500">more than most people realize.</span>
                        </p>
                    </div>
                    <div className="lg:w-1/3 bg-blue-50 px-4 py-6 md:p-8 rounded-2xl relative overflow-hidden">
                        <Network className="absolute -right-4 -bottom-4 text-brand-pink-700/20" size={160} />
                        <p className="relative z-10 text-sm text-brand-blue-700">
                            "When a breeder looks at a dog, they also see generations of history standing quietly behind them."
                        </p>
                    </div>
                </div>
            </section>

            {/* INTRO GRID - Key Concepts */}
            <section className="py-10 px-6 bg-blue-50 border-y border-gray-100">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { icon: <ShieldCheck />, t: "Health Patterns", d: "Tracking outcomes across generations to avoid repeating risks." },
                        { icon: <Layers />, t: "Temperament", d: "Understanding how confidence and affection show up in the line." },
                        { icon: <Dna />, t: "Structure", d: "Ensuring balanced proportions and movement stay consistent." },
                        { icon: <Palette />, t: "Color History", d: "Predicting how rich red coats will mature over time." }
                    ].map((item, idx) => (
                        <div key={idx} className="group">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-pink-700 mb-6 group-hover:bg-brand-pink-700 group-hover:text-white transition-all">
                                {item.icon}
                            </div>
                            <h3 className="font-bold uppercase text-base text-gray-900 mb-3 fr">{item.t}</h3>
                            <p className="text-sm text-gray-500">{item.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* THE STORY SECTION - Narrative Layout */}
            <section className="py-10 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    <div>
                        <h2 className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text fr text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
                            A story, not just a chart
                        </h2>
                        <div className="space-y-6 text-brand-blue-500">
                            <p>
                                A pedigree is a living record of where a dog comes from. Names on a chart only matter if the dogs behind those names were healthy, stable, and well-bred.
                            </p>
                            <div className="px-4 py-6 border-l-4 border-brand-pink-500 bg-gray-50">
                                "Consistency matters for families. When lineage is thoughtfully managed, families have a clearer idea of what to expect as their puppy grows."
                            </div>
                            <p>
                                Our goal is not uniformity. It is reliability. By studying previous generations, we avoid the chance outcomes of "bragging rights" breeding.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-white border border-brand-blue-500 px-4 py-6 md:p-8 rounded-xl">
                            <h3 className="text-gray-900 font-bold uppercase fr text-lg md:text-xl mb-4">Breeding for Improvement</h3>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-brand-blue-500/15 flex items-center justify-center shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-pink-700 animate-pulse"></div></div>
                                    <span>Consistency in temperament and size</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-brand-blue-500/15 flex items-center justify-center shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-pink-700 animate-pulse"></div></div>
                                    <span>How pigment appears in nose and eye rims</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-brand-blue-500/15 flex items-center justify-center shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-pink-700 animate-pulse"></div></div>
                                    <span>How health outcomes repeat or improve</span>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 py-6 md:p-8 rounded-xl bg-brand-pink-500 text-white">
                            <FileText size={32} className="mb-4" />
                            <h4 className="font-bold uppercase text-lg md:text-xl mb-2">Transparency First</h4>
                            <p className="text-sm opacity-90">When you ask about a pedigree, we walk you through the lineage highlights and share what is known and what is unfolding.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TITLES & ACCOMPLISHMENTS - Split Content */}
            <section className="py-10 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text fr text-3xl md:text-4xl font-black uppercase mb-6">Titles in Context</h2>
                        <p className="text-brand-blue-500 mb-6">
                            Some dogs carry recognitions, but they are only part of the picture. We look at the full story:
                        </p>
                        <div className="flex flex-col gap-3">
                            <div className="bg-white p-4 rounded-xl border border-brand-blue-500 flex justify-between items-center group cursor-default">
                                <span className="text-xs font-bold uppercase text-brand-blue-500">Accomplished Foundation</span>
                                <span className="text-brand-blue-700 text-sm font-semibold">Health First</span>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-brand-pink-500 flex justify-between items-center group cursor-default">
                                <span className="text-xs font-bold uppercase text-brand-pink-500">Breed Standards</span>
                                <span className="text-brand-pink-700 text-sm font-semibold">Temperament Always</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white px-6 py-6 md:p-8 rounded-2xl border-2 border-brand-blue-500 relative">
                        <h3 className="text-brand-pink-700 fr font-bold uppercase text-lg md:text-xl mb-4">Ethics over Trends</h3>
                        <p className="text-brand-blue-500 text-sm leading-normal">
                            "A titled dog with poor health history is not a good foundation. An untitled dog with strong health, temperament, and consistency can be invaluable. This is how ethics show up quietly, generation after generation."
                        </p>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-10 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto bg-gray-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-brand-pink-700/20 blur-[60px]"></div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl fr font-black uppercase tracking-tight mb-8 relative z-10">
                        Curious about the lineage <br /> behind a specific dog?
                    </h2>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                        <button
                            onClick={() => navigate('/our-dogs')}
                            className="bg-brand-pink-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide text-xs hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            Meet Our Dogs
                        </button>
                        <button
                            onClick={() => navigate('/#contact')}
                            className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold uppercase tracking-wide text-xs hover:bg-brand-blue-500 hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                        >
                            <MessageSquare size={16} /> Ask About Pedigrees
                        </button>
                    </div>

                    <p className="mt-12 text-brand-pink-500 text-xs uppercase tracking-widest font-bold">
                        Education Builds Confidence
                    </p>
                </div>
            </section>

        </div>
    );
};

export default OurDogsSubpage;