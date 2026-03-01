import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { petData } from '../data/petsData'; // Ensure your data file has 'gallery' and 'color' fields
// import FeaturedPets from '../components/FeaturedPets'; // Un-comment if needed
import {
    Calendar,
    Ruler,
    Palette,
    ClipboardCheck,
    ArrowRight,
    Camera,
    Info
} from 'lucide-react';

const PetDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const pet = petData.find(p => p.id === parseInt(id));
    const[activeImage, setActiveImage] = useState("");

    useEffect(() => {
        if (pet) {
            setActiveImage(pet.image);
            window.scrollTo(0, 0);
        }
    }, [id, pet]);

    if (!pet) return <div className="py-20 text-center text-2xl font-bold text-brand-blue-500">Poodle not found</div>;

    return (
        <div className="bg-white min-h-screen">
            {/* 1. HERO SECTION */}
            <div className="max-w-7xl mx-auto px-4 pt-10 pb-10 flex flex-col lg:flex-row gap-10 lg:items-start">
                {/* Image Gallery Column */}
                <div className="w-full lg:w-1/2">
                    <div className="relative group">
                        <img
                            loading='lazy'
                            src={activeImage}
                            alt={pet.name}
                            className="w-full h-[400px] md:h-[470px] object-cover object-center rounded-[20px] md:rounded-[30px] shadow-sm transition-all duration-500"
                        />
                        <div className="absolute top-6 left-6 bg-pink-50 fr backdrop-blur-sm px-4 py-2 rounded-full text-brand-pink-500 font-bold text-xs uppercase tracking-widest shadow-sm">
                            Available for Reservation
                        </div>
                    </div>

                    {/* Thumbnail Selector - FIX: Sliced to first 5 images only */}
                    {pet.gallery && (
                        <div className="flex gap-4 mt-4 overflow-x-auto pb-2 no-scrollbar">
                            {[pet.image, ...pet.gallery].slice(0, 5).map((img, idx) => (
                                <img
                                    loading='lazy'
                                    key={idx}
                                    src={img}
                                    onClick={() => setActiveImage(img)}
                                    className={`w-20 h-20 md:w-28 md:h-28 object-cover rounded-2xl cursor-pointer transition-all border-4 ${activeImage === img ? 'border-brand-blue-500 scale-95' : 'border-transparent opacity-70 hover:opacity-100'}`}
                                    alt="Gallery thumb"
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-1/2">
                    <p className="text-brand-blue-500 font-medium tracking-[0.2em] mb-2 uppercase text-xs flex items-center gap-2">
                        <span className="w-8 h-[2px] bg-brand-blue-500"></span> {pet.breed}
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text fr mb-4">{pet.name}</h1>

                    <div className="flex flex-wrap gap-4 mb-6">
                        <span className="bg-blue-50 text-brand-blue-500 px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
                            <Palette size={16} /> {pet.color || "Deep Red"}
                        </span>
                        <span className="bg-pink-50 text-brand-pink-500 px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
                            <Ruler size={16} /> {pet.estimatedSize || "Toy Class"}
                        </span>
                    </div>

                    <p className="text-brand-blue-500 leading-relaxed text-base mb-4 italic">
                        "{pet.personalitySnapshot || pet.description}"
                    </p>

                    {/* Key Dates Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                        <div className="bg-slate-50 p-5 rounded-2xl border border-brand-blue-500">
                            <p className="text-brand-blue-500 text-xs font-bold uppercase mb-1">Birthdate</p>
                            <p className="text-brand-blue-500 font-bold flex items-center gap-2">
                                <Calendar size={18} className="text-brand-blue-500" /> {pet.birthdate || "Oct 15, 2025"}
                            </p>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-2xl border border-brand-pink-500">
                            <p className="text-brand-pink-500 text-xs font-bold uppercase mb-1">Weight</p>
                            <p className="text-brand-pink-500 font-bold flex items-center gap-2">
                                <Ruler size={18} className="text-brand-pink-500" /> {pet.weight || "5 - 5.5 pounds"}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => { window.scrollTo(0, 0); navigate('/application') }}
                            className="flex-1 bg-brand-blue-500 text-white font-bold px-8 py-5 rounded-xl hover:bg-brand-blue-700 transition-all duration-300 shadow-md shadow-brand-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            Reserve {pet.name} <ArrowRight size={20} />
                        </button>
                        <button className="flex-1 border-2 border-brand-pink-500 text-slate-800 font-bold px-8 py-5 rounded-xl hover:bg-pink-50 transition-all duration-300 cursor-pointer">
                            Download Health Records
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. PHOTO GALLERY SECTION */}
            <div className="bg-slate-50 py-10 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <p className="text-brand-pink-500 font-medium uppercase tracking-widest text-xs mb-2">Visual Progress</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text fr uppercase">Photo Gallery</h2>
                        </div>
                        <Camera size={40} className="text-brand-blue-500 hidden md:block" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* FIX: Removed duplicate pet.image and removed .slice(0, 4) so it shows all images! */}
                        {[pet.image, ...pet.gallery].map((img, i) => (
                            <div key={i} className={`rounded-[30px] overflow-hidden shadow-sm ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                                <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. HEALTH & SPECS GRID */}
            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Technical Specs */}
                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold mb-8 flex text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text fr uppercase items-center gap-3">
                            <Info className="text-brand-blue-500" /> Essential Details
                        </h3>
                        <div className="space-y-4">
                            {[
                                { l: "Gender", v: pet.gender },
                                { l: "Current Weight", v: pet.weight },
                                { l: "Good With Dogs", v: pet.goodWithDogs || "Yes" },
                                { l: "Good With Kids", v: pet.goodWithKids || "Yes" },
                                { l: "Adoption Fee", v: pet.adoptionFee || "$3,500" },
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center p-4 bg-white rounded-2xl border border-brand-blue-500">
                                    <span className="text-brand-blue-700 fr font-medium text-sm">{item.l}</span>
                                    <span className="text-brand-pink-700 fr font-medium">{item.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Health Check */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-8 text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text fr uppercase flex items-center gap-3">
                            <ClipboardCheck className="text-brand-pink-500" /> Breeder Health Report
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {pet.health.map((item, index) => (
                                <div key={index} className="flex flex-col items-center p-8 bg-pink-50 rounded-[40px] border border-brand-pink-500">
                                    <div className={`p-4 rounded-full mb-4 ${item.active ? 'bg-brand-pink-500 text-white' : 'bg-brand-blue-500 text-white'}`}>
                                        <item.icon size={28} />
                                    </div>
                                    <p className="font-bold text-brand-pink-700 fr text-sm mb-1">{item.name}</p>
                                    {item.active ?
                                        <span className="text-[10px] fr text-brand-pink-500 font-black uppercase tracking-widest">Verified</span> :
                                        <span className="text-[10px] text-brand-pink-500 font-black uppercase tracking-widest">Pending</span>
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. RESERVATION PROCESS */}
            <div className="bg-slate-900 py-10 px-4 text-white">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text fr uppercase">How to Reserve {pet.name}?</h2>
                    <p className="text-brand-pink-500 max-w-2xl mx-auto">
                        Families who complete the application and deposit first are prioritized.
                        Our process is fair, transparent, and pressure-free.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {[
                        { n: "01", t: "Apply", d: "Complete the online puppy application." },
                        { n: "02", t: "Connect", d: "We review and connect with you personally." },
                        { n: "03", t: "Deposit", d: "Secure your reservation with a deposit." },
                        { n: "04", t: "Confirm", d: "Go-home dates and final details are locked in." },
                    ].map((step, i) => (
                        <div key={i} className="relative z-10 text-center md:text-left">
                            <span className="text-6xl font-black text-brand-pink-500 mb-4 block">{step.n}</span>
                            <h4 className="text-xl font-bold mb-2 text-brand-pink-500">{step.t}</h4>
                            <p className="text-brand-pink-500 text-sm leading-relaxed">{step.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PetDetail;