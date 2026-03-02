import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera, Heart, Info } from 'lucide-react';

const LITTER_DATA = [
    {
        id: "ruby-x-jasper",
        parents: "Ruby x Jasper",
        description: "This beautiful red and deep-apricot litter brought us 5 lively pups. This pairing focused on maintaining the deep mahogany red coat and intelligent temperament.",
        stats: { born: "January 14, 2025", count: "5 Puppies", colors: "Red, Apricot", temperament: "Confident explorers" },
        images: ["https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800"]
    },
    {
        id: "bella-x-winston",
        parents: "Bella x Winston",
        description: "A balanced litter with vivid red coats and engaging personalities. These pups were quick learners and utterly affectionate.",
        stats: { born: "May 22, 2025", count: "4 Puppies", colors: "Vivid Red", temperament: "Social Butterflies" },
        images: ["https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?auto=format&fit=crop&q=80&w=800"]
    },
    {
        id: "penny-x-oliver",
        parents: "Penny x Oliver",
        description: "Red coat depth and social confidence defined this group. Many were noted for their bright curiosity.",
        stats: { born: "October 9, 2024", count: "6 Puppies", colors: "Deep Red", temperament: "Bright Curiosity" },
        images: ["https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800"]
    },
    {
        id: "daisy-x-max",
        parents: "Daisy x Max",
        description: "Rich red hues with expressive temperaments. They made fast friends during puppy socialization days.",
        stats: { born: "June 17, 2024", count: "3 Puppies", colors: "Rich Red", temperament: "Expressive & Social" },
        images: ["https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=800"]
    },
    {
        id: "poppy-x-leo",
        parents: "Poppy x Leo",
        description: "Energetic and affectionate, several went on to be service companions and therapy dogs.",
        stats: { born: "April 3, 2023", count: "5 Puppies", colors: "Apricot", temperament: "Service Potential" },
        images: ["https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800"]
    }
];

const LitterShowcase = () => {
    const { id } = useParams(); // This gets the ID from the URL (e.g. "ruby-x-jasper")
    const navigate = useNavigate();

    // 2. FIND the specific litter that matches the URL ID
    const litter = LITTER_DATA.find(item => item.id === id);

    // If ID is wrong or not found, show a simple error
    if (!litter) {
        return <div className="py-20 text-center">Litter not found. <Link to="/past-litters" className="text-brand-blue-500">Go Back</Link></div>;
    }

    return (
        <div className="bg-white min-h-screen">
            {/* HEADER NAV */}
            <nav className="py-6 px-6 border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-md z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/past-litters" className="flex items-center gap-2 text-brand-pink-500 hover:text-brand-blue-500 transition-colors duration-300 text-xs font-bold uppercase tracking-wide">
                        <ArrowLeft size={16} /> Back to Archive
                    </Link>
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-pink-500">{litter.parents} <span className='text-brand-blue-500'>Profile</span></div>
                </div>
            </nav>

            <section className="py-10 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-10">
                    {/* LEFT: TEXT CONTENT */}
                    <div className="lg:col-span-5">
                        <h1 className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text fr text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none mb-4">
                            {litter.parents}
                        </h1>

                        <p className="text-brand-blue-500 text-sm sm:text-base leading-relaxed mb-6">
                            {litter.description}
                        </p>

                        {/* DOG DETAILS CARD */}
                        <div className="bg-pink-50 border-l-4 border-brand-pink-500 px-6 py-8 md:p-8 rounded-r-3xl mb-10">
                            <h3 className="text-brand-blue-700 font-black uppercase fr text-sm tracking-wide mb-6 flex items-center gap-2">
                                <Info size={18} className="text-brand-blue-700" /> Litter Specification
                            </h3>
                            <div className="space-y-4">
                                {Object.entries(litter.stats).map(([key, value]) => (
                                    <div key={key} className="flex justify-between border-b border-[#E2F1C4] pb-2 capitalize">
                                        <span className="text-xs uppercase font-semibold text-brand-blue-700 tracking-wide">{key}</span>
                                        <span className="text-sm font-semibold text-brand-pink-700">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <button onClick={() => navigate("/#contact")} className="bg-brand-pink-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-pink-700 transition-all duration-300 cursor-pointer text-center">
                                Inquire About Future Pairings
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: PHOTO MASONRY */}
                    <div className="lg:col-span-7">
                        <div className="columns-1 md:columns-2 gap-4 space-y-4">
                            {litter.images.map((img, index) => (
                                <div key={index} className="relative group overflow-hidden rounded-xl shadow-sm">
                                    <img
                                        loading='lazy'
                                        src={img}
                                        alt={`Litter puppy ${index}`}
                                        className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Heart size={16} className="text-[#8ECC14]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER SECTION */}
            <section className="py-10 px-6 bg-gray-50 border-t border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <Camera size={40} className="mx-auto text-brand-pink-700 mb-4" />
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text fr">The Development Matters</h2>
                    <p className="text-brand-blue-500 mb-8 max-w-xl mx-auto text-sm md:text-base">
                        Our galleries aren't just for show. They allow you to see the consistency of coat,
                        structure, and expression across our generations.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link to="/available" className="text-brand-pink-700 font-black uppercase tracking-widest text-xs border-b-2 border-brand-pink-700 fr pb-1">
                            Check Availability
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LitterShowcase;