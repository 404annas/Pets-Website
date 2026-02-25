import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft,
    ChevronRight,
    RotateCcw,
    Heart,
    Pill,
    Cpu,
    ShieldCheck,
    Activity,
    Thermometer,
    Users,
    Truck,
    UsersRound
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const petData = [
    {
        id: 1,
        name: "Bella",
        breed: "TOY POODLE",
        availability: "Available",
        color: "Deep Red",
        size: "Small Toy Class",
        birthdate: "Oct 15, 2025",
        goHome: "Dec 10–12, 2025",
        personality: "Warm snuggler, curious about sounds.",
        weight: "6 lbs",
        gender: "Female",
        age: "4 months",
        image: "https://images.unsplash.com/photo-1655964107490-4b90c428e4d0?w=1000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D",
        health: [
            { id: 'h1', name: "Heart", icon: Heart, active: true },
            { id: 'h2', name: "Meds", icon: Pill, active: false },
            { id: 'h3', name: "Chip", icon: Cpu, active: true },
            { id: 'h4', name: "Vax", icon: ShieldCheck, active: true },
            { id: 'h5', name: "Pulse", icon: Activity, active: true },
            { id: 'h6', name: "Check", icon: Thermometer, active: true },
        ]
    },
    {
        id: 2,
        name: "Rufus",
        breed: "TOY POODLE",
        availability: "Available",
        color: "Rich Red",
        size: "Toy Standard",
        birthdate: "Oct 15, 2025",
        goHome: "Dec 10–12, 2025",
        personality: "Playful explorer, loves gentle games.",
        weight: "7 lbs",
        gender: "Male",
        age: "4 months",
        image: "https://images.unsplash.com/photo-1625760492002-15adf1fe003e?w=1000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VE9ZJTIwUE9PRExFfGVufDB8fDB8fHww",
        health: [
            { id: 'm1', name: "Heart", icon: Heart, active: true },
            { id: 'm2', name: "Meds", icon: Pill, active: true },
            { id: 'm3', name: "Chip", icon: Cpu, active: true },
            { id: 'm4', name: "Vax", icon: ShieldCheck, active: true },
            { id: 'm5', name: "Pulse", icon: Activity, active: true },
            { id: 'm6', name: "Check", icon: Thermometer, active: true },
        ]
    },
    {
        id: 3,
        name: "Luna",
        breed: "STANDARD POODLE",
        color: "Apricot",
        availability: "Waitlist",
        size: "Standard Class",
        birthdate: "Sept 20, 2025",
        goHome: "Waitlist",
        personality: "Gentle soul, highly intelligent.",
        weight: "45 lbs",
        gender: "Female",
        age: "1 year",
        image: "https://images.unsplash.com/photo-1614261812340-5ee9a3ed33a3?w=1000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U1RBTkRBUkQlMjBQT09ETEV8ZW58MHx8MHx8fDA%3D",
        health: [
            { id: 'd1', name: "Heart", icon: Heart, active: true },
            { id: 'd2', name: "Meds", icon: Pill, active: true },
            { id: 'd3', name: "Chip", icon: Cpu, active: true },
            { id: 'd4', name: "Vax", icon: ShieldCheck, active: true },
            { id: 'd5', name: "Pulse", icon: Activity, active: true },
            { id: 'd6', name: "Check", icon: Thermometer, active: true },
        ]
    },
];

const PetCard = ({ pet }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const navigate = useNavigate();

    return (
        <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="relative h-[550px] pb-10 w-full md:w-[calc(33.333%-1.333rem)] flex-shrink-0 [perspective:1000px] cursor-pointer"
        >
            <motion.div
                className="relative w-full h-full [transform-style:preserve-3d]"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 150, damping: 20, mass: 1 }}
            >
                {/* FRONT SIDE */}
                <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] ${isFlipped ? "pointer-events-none" : "pointer-events-auto"}`}>
                    <div className="group relative h-full w-full rounded-[40px] overflow-hidden shadow-md">
                        <img loading='lazy' src={pet.image} alt={pet.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute top-6 right-6 bg-gradient-to-r from-pink-700 to-blue-700 p-2 rounded-full shadow-md text-white z-10"><RotateCcw size={24} /></div>

                        <div className="absolute top-6 left-6 bg-white/90 px-4 py-1.5 rounded-full text-pink-700 font-bold text-[10px] uppercase tracking-widest z-10 shadow-sm border border-pink-200">{pet.availability}</div>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-white py-4 rounded-3xl text-center shadow-sm z-10">
                            <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text">{pet.name}</h2>
                            <p className="text-xs tracking-widest text-gray-800 uppercase mt-1">{pet.breed}</p>
                        </div>
                    </div>
                </div>

                {/* BACK SIDE */}
                <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] ${isFlipped ? "pointer-events-auto" : "pointer-events-none"}`}>
                    <div className="h-full w-full bg-white rounded-[40px] shadow-md border border-gray-100 flex flex-col items-center p-6 text-center">
                        <div className="absolute top-6 right-6 bg-gradient-to-r from-pink-700 to-blue-700 p-2 rounded-full text-white"><RotateCcw size={24} /></div>

                        <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text mt-4">{pet.name}</h2>
                        <p className="text-sm tracking-widest text-gray-500 uppercase mt-1 mb-4">{pet.color} • {pet.size}</p>

                        <div className="flex gap-2 mb-4 text-xs font-bold text-gray-600 bg-slate-50 px-4 py-2 rounded-full">
                            <span>Born: {pet.birthdate}</span> | <span className="text-blue-700">Home: {pet.goHome}</span>
                        </div>

                        <p className="text-xs text-gray-500 italic mb-4 leading-tight px-2">"{pet.personality}"</p>

                        <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-pink-700">Health Check:</h3>
                        <div className="grid grid-cols-3 gap-x-6 gap-y-3 mb-6">
                            {pet.health.map((item) => (
                                <div key={item.id} className="flex flex-col items-center">
                                    <div className={`p-4 rounded-full ${item.active ? 'bg-pink-200 text-pink-500' : 'bg-blue-200 text-blue-500'}`}>
                                        <item.icon size={18} />
                                    </div>
                                    <span className="text-xs font-medium mt-1 uppercase text-gray-500">{item.name}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={(e) => { e.stopPropagation(); navigate(`/pet/${pet.id}`); }}
                            className="bg-pink-400 text-white font-bold w-full py-3.5 rounded-2xl hover:bg-pink-500 transition-all duration-300 mt-auto cursor-pointer"
                        >
                            Get More Details
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const FeaturedPets = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setVisibleCards(1);
            else setVisibleCards(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => { if (currentIndex < petData.length - visibleCards) setCurrentIndex(prev => prev + 1); };
    const prevSlide = () => { if (currentIndex > 0) setCurrentIndex(prev => prev - 1); };

    const movePercentage = visibleCards === 1 ? 100 : 33.333;
    const gapCorrection = visibleCards === 1 ? 2 : 0.666;

    return (
        <div id='available' className="bg-white py-10 flex flex-col items-center px-4 overflow-hidden">
            <div className="text-center mb-10 max-w-4xl">
                <p className="uppercase text-pink-700 font-bold tracking-widest pb-3 text-xs">Available Puppies</p>
                <h1 className="text-3xl md:text-4xl font-bold text-[#333333] fr pb-4">
                    Meet Today’s <span className="text-transparent bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text">Little Red Hearts</span>
                </h1>
                <p className="text-blue-500 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                    Every puppy is from health-tested parents, raised in a loving home environment,
                    and evaluated for temperament and confidence.
                </p>
            </div>

            <div className="w-full max-w-6xl overflow-hidden px-2">
                <motion.div
                    className="flex gap-8"
                    animate={{ x: `calc(-${currentIndex * movePercentage}% - ${currentIndex * gapCorrection}rem)` }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    {petData.map(pet => (
                        <PetCard key={pet.id} pet={pet} />
                    ))}
                </motion.div>
            </div>

            {petData.length > visibleCards && (
                <div className="flex items-center gap-4">
                    <button onClick={prevSlide} disabled={currentIndex === 0} className={`border-2 border-pink-400 p-3.5 rounded-full text-pink-700 cursor-pointer transition-all ${currentIndex === 0 ? 'opacity-30 hover:cursor-not-allowed' : 'hover:bg-pink-400 hover:text-white'}`}>
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={nextSlide} disabled={currentIndex >= petData.length - visibleCards} className={`border-2 border-pink-400 p-3.5 rounded-full text-pink-700 cursor-pointer transition-all ${currentIndex >= petData.length - visibleCards ? 'opacity-30 hover:cursor-not-allowed' : 'hover:bg-pink-400 hover:text-white'}`}>
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}

            {/* LOWER CONTENT SECTIONS */}
            <div className="mt-5 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Waitlist */}
                <div className="bg-pink-100/30 px-4 py-6 md:p-8 rounded-[40px] border border-pink-200/30">
                    <UsersRound size={30} className="text-pink-500 mb-4" />
                    <h3 className="text-2xl text-transparent bg-gradient-to-r from-pink-500 to-blue-700 bg-clip-text font-bold fr mb-3">No Puppies Right Now?</h3>
                    <p className="text-blue-500 text-sm md:text-base mb-6 leading-relaxed">
                        If our current litters are committed, join the waitlist. We notify
                        families first as soon new litters are confirmed or spots open.
                    </p>
                    <button onClick={() => {window.scrollTo(0,0); navigate('/application')}} className="bg-pink-700 text-white font-bold px-8 py-3 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300">Join the Waitlist</button>
                </div>

                {/* Shipping */}
                <div className="bg-blue-50 px-4 py-6 md:p-8 rounded-[40px] border border-blue-200">
                    <Truck size={30} className="text-blue-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-3 text-transparent bg-gradient-to-r from-pink-500 to-blue-700 bg-clip-text fr">Visiting & Pickup</h3>
                    <p className="text-pink-500 text-sm md:text-base mb-6 leading-relaxed">
                        We support breeder transport for out-of-town families
                        including trusted travel partners and health certificates.
                    </p>
                    <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="border-2 border-blue-800 text-blue-800 font-bold px-8 py-2.5 rounded-2xl cursor-pointer hover:bg-blue-800 hover:text-white transition-all duration-300">Inquire Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedPets;