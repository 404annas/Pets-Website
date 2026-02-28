import { useState } from 'react';
import { Heart, Star, ArrowUpRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import poodle11 from "../assets/poodle11.jfif"
import poodle12 from "../assets/poodle12.jfif"
import poodle13 from "../assets/poodle13.jfif"
import poodle14 from "../assets/poodle14.jfif"
import poodle15 from "../assets/poodle15.jfif"
import poodle16 from "../assets/poodle16.jfif"

const OurDogs = () => {
    const [filter, setFilter] = useState('all');

    const navigate = useNavigate();

    const dams = [
        {
            id: 1,
            callName: "Ruby",
            registeredName: "Crimson Rose of Scarlet",
            color: "Deep Red",
            size: "10 inches, 6 lbs",
            birthday: "March 12, 2022",
            sire: "Jasper Van Gogh",
            dam: "Scarlet O'Hara",
            personality: "Sweet, observant, and quietly hilarious when she thinks no one is watching.",
            bestTrait: "Intuitive connection",
            loves: "Morning porch coffee",
            knownFor: "Her mahogany coat",
            img: "https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?auto=format&fit=crop&q=100&w=1000"
        },
        {
            id: 2,
            callName: "Bella",
            registeredName: "Midnight Belle of the Ball",
            color: "Rich Apricot",
            size: "9.5 inches, 5.5 lbs",
            birthday: "June 05, 2021",
            sire: "Winston Duke",
            dam: "Lady Penelope",
            personality: "The undisputed queen of the household; graceful and highly intelligent.",
            bestTrait: "Calm confidence",
            loves: "Plush toys",
            knownFor: "Expressive eyes",
            img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=100&w=1000"
        },
        {
            id: 3,
            callName: "Milo",
            registeredName: "Golden Spark of Avalon",
            color: "Cream with Apricot",
            size: "10.2 inches, 6.2 lbs",
            birthday: "September 18, 2022",
            sire: "Oliver Twist",
            dam: "Daisy May",
            personality: "Playful, curious, and extremely people-oriented.",
            bestTrait: "High adaptability",
            loves: "Chasing balls",
            knownFor: "Endless energy",
            img: "https://images.unsplash.com/photo-1614261812340-5ee9a3ed33a3?w=1000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvb2RsZXxlbnwwfHwwfHx8MA%3D%3D"
        }
    ];

    const sires = [
        {
            id: 3,
            callName: "Jasper",
            registeredName: "Jasper's Royal Red Legacy",
            color: "Mahogany Red",
            size: "11 inches, 7 lbs",
            birthday: "August 20, 2020",
            sire: "King Arthur Red",
            dam: "Ginger Snap",
            personality: "Confident cuddle expert, playful, and surprisingly gentle with puppies.",
            bestTrait: "Gentle soul",
            loves: "Playing fetch",
            knownFor: "Incredible pigment",
            img: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=100&w=1000"
        }
    ];

    const DogCard = ({ dog, type }) => (
        <div className="bg-white border border-brand-blue-500 rounded-[2.5rem] overflow-hidden group shadow-sm hover:shadow-md transition-all duration-500 flex flex-col h-full">
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-[4/5]">
                <img
                    loading='lazy'
                    src={dog.img}
                    alt={dog.callName}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-md text-[10px] font-bold uppercase tracking-widest text-brand-pink-500 shadow-sm">
                        {type === 'dam' ? 'Dam / Queen' : 'Sire / King'}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                    <h3 className="text-3xl md:text-4xl font-black fr text-gray-900 leading-none mb-1">{dog.callName}</h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{dog.registeredName}</p>
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6 text-xs border-y border-gray-50 py-6">
                    <div className='text-sm'><span className="text-gray-400 block text-xs uppercase mb-1 tracking-tighter">Color</span><strong>{dog.color}</strong></div>
                    <div className='text-sm'><span className="text-gray-400 block text-xs uppercase mb-1 tracking-tighter">Size</span><strong>{dog.size}</strong></div>
                    <div className='text-sm'><span className="text-gray-400 block text-xs uppercase mb-1 tracking-tighter">Sire</span><strong className="text-sm">{dog.sire}</strong></div>
                    <div className='text-sm'><span className="text-gray-400 block text-xs uppercase mb-1 tracking-tighter">Dam</span><strong className="text-sm">{dog.dam}</strong></div>
                </div>

                <p className="text-gray-600 text-sm mb-6 border-l-2 border-brand-blue-500 pl-4">
                    "{dog.personality}"
                </p>

                <div className="space-y-2 mb-8 flex-grow">
                    <div className="flex justify-between text-[11px]"><span className="text-gray-400 uppercase font-semibold">Best Trait</span> <span className='text-xs'>{dog.bestTrait}</span></div>
                    <div className="flex justify-between text-[11px]"><span className="text-gray-400 uppercase font-semibold">Loves</span> <span className='text-xs'>{dog.loves}</span></div>
                    <div className="flex justify-between text-[11px]"><span className="text-gray-400 uppercase font-semibold">Known For</span> <span className='text-xs'>{dog.knownFor}</span></div>
                </div>

                <div className="bg-brand-blue-500/5 p-4 rounded-2xl mb-6">
                    <div className="flex items-center gap-2 mb-1">
                        <CheckCircle size={18} className="text-brand-pink-700" />
                        <span className="text-sm font-bold uppercase text-gray-800">Health Testing</span>
                    </div>
                    <p className="text-xs text-gray-500">OFA and DNA testing completed, results available upon request.</p>
                </div>

                <div className="grid grid-cols-1 gap-3 mt-auto">
                    {/* <button onClick={() => navigate("/dogs-page")} className="bg-gray-900 text-white text-xs font-bold uppercase py-3 rounded-full hover:bg-brand-pink-700 transition-colors duration-300 cursor-pointer">
                        Full Profile
                    </button> */}
                    <button onClick={() => navigate("/#contact")} className="border-2 border-brand-blue-500 text-gray-600 text-xs font-bold uppercase py-3 rounded-full hover:border-brand-pink-500 transition-all duration-300 cursor-pointer">
                        Inquire
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-white text-gray-700">

            {/* HERO COLLAGE SECTION */}
            <section className="py-10 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text fr text-4xl sm:text-5xl md::text-6xl lg:text-7xl font-black leading-[0.9] uppercase tracking-tighter mb-8">
                            Meet our <br /> <span className="text-gray-900 underline decoration-brand-blue-500 decoration-8">Kings & Queens</span>
                        </h1>
                        <p className="text-base md:text-lg text-brand-blue-500 max-w-lg">
                            "Healthy puppies start with healthy parents, and we take that seriously."
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 h-[400px]">
                        <div className="bg-gray-100 rounded-2xl overflow-hidden"><img src={poodle11} className="w-full h-full object-cover grayscale" alt="Poodle 1" /></div>
                        <div className="bg-gray-100 rounded-2xl overflow-hidden translate-y-4"><img src={poodle15} className="w-full h-full object-cover" alt="Poodle 5" /></div>
                        <div className="bg-gray-100 rounded-2xl overflow-hidden translate-y-8"><img src={poodle12} className="w-full h-full object-cover grayscale" alt="Poodle 2" /></div>
                        <div className="bg-gray-100 rounded-2xl overflow-hidden"><img src={poodle14} className="w-full h-full object-cover object-top" alt="Poodle 4" /></div>
                        <div className="bg-gray-100 rounded-2xl overflow-hidden -translate-y-4"><img src={poodle13} className="w-full h-full object-cover grayscale" alt="Poodle 3" /></div>
                        <div className="bg-gray-100 rounded-2xl overflow-hidden -translate-y-8"><img src={poodle16} className="w-full h-full object-cover" alt="Poodle 6" /></div>
                    </div>
                </div>
            </section>

            {/* PHILOSOPHY SECTION */}
            <section className="py-10 px-6 bg-blue-50">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text fr text-4xl font-black uppercase mb-6 tracking-tighter leading-none">
                            Healthy puppies start with <br /> healthy parents.
                        </h2>
                        <p className="text-base md:text-lg leading-normal text-brand-blue-500 mb-6">
                            Our Toy Poodles are not <span className='text-brand-blue-700 font-medium'>“breeding stock.”</span> They are our daily companions, our little comedians, and our proud constants. If you want to understand our program, start here. The parents tell the story.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {["AKC Registered", "Loved as Family", "Health Focused", "Integrity Minded"].map((text, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-pink-700">
                                    <Star size={18} className="text-brand-pink-700" /> {text}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 bg-white px-6 py-8 md:px-8 md:py-10 rounded-2xl shadow-sm">
                        <h3 className="text-gray-900 font-black fr uppercase text-lg md:text-xl tracking-wide mb-6">Transparency Matters!</h3>
                        <div className="space-y-6">
                            <p className="text-sm text-brand-blue-500">"Lineage analysis helps us avoid repeating known health risks and preserve stable temperaments."</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                                <li className="flex items-center gap-2 text-sm font-semibold text-gray-700"><CheckCircle size={18} className="text-brand-blue-500" /> Color & Size</li>
                                <li className="flex items-center gap-2 text-sm font-semibold text-gray-700"><CheckCircle size={18} className="text-brand-blue-500" /> Pedigree History</li>
                                <li className="flex items-center gap-2 text-sm font-semibold text-gray-700"><CheckCircle size={18} className="text-brand-blue-500" /> Health Summaries</li>
                                <li className="flex items-center gap-2 text-sm font-semibold text-gray-700"><CheckCircle size={18} className="text-brand-blue-500" /> Full Photo Galleries</li>
                            </ul>

                            <button
                                onClick={() => navigate('/dogs-page')}
                                className="flex items-center gap-2 text-brand-pink-500 font-bold uppercase tracking-widest text-xs border-b-2 border-brand-pink-500 pb-1 hover:text-brand-pink-700 hover:border-brand-pink-700 transition-all duration-300 cursor-pointer"
                            >
                                Why Pedigree Matters ? <ArrowUpRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FILTER TABS */}
            <section className="py-10 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10 pb-10">
                    <div>
                        <h2 className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text fr text-4xl md:text-5xl font-black uppercase tracking-tighter">Our Kings & Queens</h2>
                        <p className="text-brand-blue-500 text-base">Scroll to meet our dams and sires</p>
                    </div>
                    <div className="flex bg-blue-50 p-1.5 rounded-full">
                        {['all', 'dams', 'sires'].map((t) => (
                            <button
                                key={t}
                                onClick={() => setFilter(t)}
                                className={`px-8 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-300 cursor-pointer ${filter === t ? 'bg-brand-pink-700 text-white shadow-sm' : 'text-brand-blue-500 hover:text-brand-blue-700'}`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                {/* DAMS GRID */}
                {(filter === 'all' || filter === 'dams') && (
                    <div className="mb-10">
                        <div className="mb-10">
                            <h3 className="text-gray-900 fr text-2xl md:text-3xl font-black uppercase mb-2 flex items-center gap-4">
                                Meet the Dams <div className="h-px flex-grow bg-gray-100"></div>
                            </h3>
                            <p className="text-brand-blue-500 text-xs ">Our moms, the soul of the nursery. Tap a photo to open full profile.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {dams.map(dam => <DogCard key={dam.id} dog={dam} type="dam" />)}
                        </div>
                    </div>
                )}

                {/* SIRES GRID */}
                {(filter === 'all' || filter === 'sires') && (
                    <div className="mb-10">
                        <div className="mb-10">
                            <h3 className="text-gray-900 fr text-2xl md:text-3xl font-black uppercase mb-2 flex items-center gap-4">
                                Meet the Sires <div className="h-px flex-grow bg-gray-100"></div>
                            </h3>
                            <p className="text-brand-pink-500 text-xs">Our dads, the charm and confidence. Tap a photo to open full profile.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {sires.map(sire => <DogCard key={sire.id} dog={sire} type="sire" />)}
                        </div>
                    </div>
                )}
            </section>

            {/* RETIRED / GUARDIAN SECTION */}
            <section className="py-10 px-6 bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-pink-700/10 blur-[100px]"></div>
                <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-2/3">
                        <h2 className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text fr text-4xl md:text-5xl font-black uppercase mb-6 tracking-tighter">Retired Dogs & <br /> Guardian Homes</h2>
                        <p className="text-gray-400 text-base md:text-lg leading-normal mb-8 max-w-2xl">
                            Retirement is not an afterthought here. It is part of doing this ethically. Some of our dogs remain cherished family members, while others live in carefully selected guardian homes. They deserve comfort, attention, and a life that stays rich and loved.
                        </p>
                    </div>
                    <div className="md:w-1/3">
                        <div className="p-1 border border-brand-pink-700 rounded-[2rem]">
                            <img src="https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=80&w=600" className="rounded-[1.8rem] w-full h-96 object-cover object-bottom opacity-70" alt="Retired Poodle" />
                        </div>
                    </div>
                </div>
            </section>

            {/* HELP CHOOSING CTA */}
            <section className="py-10 px-6 max-w-5xl mx-auto text-center">
                <div className="bg-blue-50 rounded-[3rem] px-6 py-8 lg:p-10">
                    <Heart size={40} className="text-brand-pink-700 mx-auto mb-8" />
                    <h2 className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text text-3xl md:text-5xl font-black uppercase tracking-tight fr mb-6 leading-none">
                        Want help choosing <br /> who you connect with?
                    </h2>
                    <p className="text-brand-blue-500 mb-10 max-w-3xl mx-auto">
                        People fall in love with different things. Whether you want a calm lap companion or a bright little athlete, tell us what fits your life and we will guide you toward the right lines.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                        <button onClick={() => navigate("/available")} className="bg-brand-pink-500 text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide text-xs hover:bg-brand-pink-700 transition-all duration-300 cursor-pointer shadow-sm shadow-brand-pink-700/20">
                            See Available Puppies
                        </button>
                        <button onClick={() => navigate("/application")} className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold uppercase tracking-wide text-xs border-2 border-gray-200 hover:border-brand-blue-500 transition-all duration-300 cursor-pointer">
                            Start Puppy Application
                        </button>
                        <button onClick={() => navigate("/dogs-page")} className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold uppercase tracking-wide text-xs border-2 border-brand-blue-500 hover:bg-brand-blue-500/20 transition-all duration-300 cursor-pointer">
                            Pedigree & Lineage
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default OurDogs;
