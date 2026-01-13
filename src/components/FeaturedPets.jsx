import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ChevronLeft, ChevronRight, RotateCcw,
    Heart, Pill, Cpu, ShieldCheck, Activity, Thermometer
} from 'lucide-react';
import dog1 from "../assets/dog1.avif"
import dog2 from "../assets/dog2.avif"
import dog3 from "../assets/dog3.avif"
import dog4 from "../assets/dog4.avif"

const petData = [
    {
        id: 1,
        name: "Rocky",
        breed: "GERMAN SHEPHERD",
        weight: "75 lbs",
        gender: "Male",
        age: "3 years",
        image: dog1,
        health: [
            { id: 'h1', name: "Heart", icon: Heart, active: true },
            { id: 'h2', name: "Meds", icon: Pill, active: false },
            { id: 'h3', name: "Chip", icon: Cpu, active: true },
            { id: 'h4', name: "Vax", icon: ShieldCheck, active: false },
            { id: 'h5', name: "Pulse", icon: Activity, active: false },
            { id: 'h6', name: "Check", icon: Thermometer, active: true },
        ]
    },
    {
        id: 2,
        name: "Sadie",
        breed: "SHIH TZU",
        weight: "12 lbs",
        gender: "Female",
        age: "5 years",
        image: dog2,
        health: [
            { id: 's1', name: "Heart", icon: Heart, active: false },
            { id: 's2', name: "Meds", icon: Pill, active: false },
            { id: 's3', name: "Chip", icon: Cpu, active: false },
            { id: 's4', name: "Vax", icon: ShieldCheck, active: true },
            { id: 's5', name: "Pulse", icon: Activity, active: true },
            { id: 's6', name: "Check", icon: Thermometer, active: true },
        ]
    },
    {
        id: 3,
        name: "Duke",
        breed: "BOXER",
        weight: "70 lbs",
        gender: "Male",
        age: "2 years",
        image: dog3,
        health: [
            { id: 'd1', name: "Heart", icon: Heart, active: true },
            { id: 'd2', name: "Meds", icon: Pill, active: true },
            { id: 'd3', name: "Chip", icon: Cpu, active: true },
            { id: 'd4', name: "Vax", icon: ShieldCheck, active: false },
            { id: 'd5', name: "Pulse", icon: Activity, active: false },
            { id: 'd6', name: "Check", icon: Thermometer, active: false },
        ]
    },
    {
        id: 4, // Changed ID to 4
        name: "Max",
        breed: "GOLDEN RETRIEVER",
        weight: "65 lbs",
        gender: "Male",
        age: "4 years",
        image: dog4,
        health: [
            { id: 'm1', name: "Heart", icon: Heart, active: true },
            { id: 'm2', name: "Meds", icon: Pill, active: true },
            { id: 'm3', name: "Chip", icon: Cpu, active: true },
            { id: 'm4', name: "Vax", icon: ShieldCheck, active: true },
            { id: 'm5', name: "Pulse", icon: Activity, active: true },
            { id: 'm6', name: "Check", icon: Thermometer, active: true },
        ]
    }
];

const PetCard = ({ pet }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        // Added onClick here and cursor-pointer to the main wrapper
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
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                    <div className="group relative h-full w-full rounded-[40px] overflow-hidden shadow-md">
                        <img
                            loading='lazy'
                            src={pet.image}
                            alt={pet.name}
                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />

                        {/* Rotate Icon (Now just a visual cue) */}
                        <div className="absolute top-6 right-6 bg-[#8ECC14] p-2 rounded-full shadow-md text-white hover:scale-110 transition-transform duration-300 z-10">
                            <RotateCcw size={24} />
                        </div>

                        {/* Name Plate */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-white py-4 rounded-3xl text-center shadow-sm z-10">
                            <h2 className="text-3xl font-bold text-[#8ECC14]">{pet.name}</h2>
                            <p className="text-xs tracking-widest text-gray-800 uppercase mt-1">{pet.breed}</p>
                        </div>
                    </div>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="h-full w-full bg-white rounded-[40px] shadow-md border border-gray-100 flex flex-col items-center p-8 overflow-hidden">

                        {/* Rotate Icon (Visual cue) */}
                        <div className="absolute top-6 right-6 bg-[#8ECC14] p-2 rounded-full text-white hover:scale-110 transition-transform duration-300">
                            <RotateCcw size={24} />
                        </div>

                        <h2 className="text-3xl font-bold text-[#8ECC14] mt-4">{pet.name}</h2>
                        <p className="text-xs tracking-widest text-gray-500 uppercase mt-1 mb-6">{pet.breed}</p>

                        <div className="flex items-center gap-2 border border-[#B2D33C] px-6 py-2 rounded-full text-gray-700 font-medium mb-6 text-sm">
                            <span>{pet.weight}</span>
                            <span className="text-[#B2D33C]">•</span>
                            <span>{pet.gender}</span>
                            <span className="text-[#B2D33C]">•</span>
                            <span>{pet.age}</span>
                        </div>

                        <h3 className="font-serif text-xl font-bold mb-6 text-[#8ECC14]">Health Info:</h3>

                        <div className="grid grid-cols-3 gap-x-8 gap-y-6 mb-10">
                            {pet.health.map((item) => (
                                <div key={item.id} className="relative group flex flex-col items-center">
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        {item.name}
                                    </span>
                                    <div className={`p-4 rounded-full transition-all duration-300 transform group-hover:-translate-y-2 ${item.active ? 'bg-[#E5F4A3] text-[#7A9518]' : 'bg-gray-100 text-gray-400'}`}>
                                        <item.icon size={24} />
                                        <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold text-white ${item.active ? 'bg-[#B2D33C]' : 'bg-gray-400'}`}>
                                            {item.active ? '✓' : '✕'}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* StopPropagation ensures clicking this button doesn't trigger a flip if you add a link here */}
                        <button
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#C6E589] text-gray-800 font-bold px-10 py-3 rounded-2xl hover:scale-103 transition-all mt-auto mb-4 cursor-pointer duration-300"
                        >
                            More Info
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const FeaturedPets = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 3;

    // Navigation Logic
    const nextSlide = () => {
        if (currentIndex < petData.length - visibleCards) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <div className="bg-white py-10 flex flex-col items-center px-4">
            {/* Header section remains same */}
            <div className="text-center mb-10 max-w-5xl">
                <p className="uppercase text-[#C6E589] font-medium tracking-widest pb-4 text-sm">Our Charming Residents</p>
                <h1 className="text-3xl sm:text-4xl font-bold text-[#333333] pb-6 leading-tight">
                    <span className="text-[#8ECC14]">Featured Pets </span>Looking for a Home
                </h1>
                <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod placeat error laboriosam.
                    Temporibus porro veritatis reprehenderit error sit quod maxime.
                </p>

                <div className="flex md:flex-row flex-col items-center justify-center gap-4 mt-10">
                    <button className="font-bold bg-[#C6E589] text-gray-800 hover:bg-[#8ECC14] px-10 py-4 cursor-pointer rounded-full transition-all duration-300 shadow-sm">
                        Show Dogs
                    </button>
                    <button className="font-bold border-2 border-[#C6E589] text-gray-800 hover:bg-[#C6E589] px-10 py-3.5 cursor-pointer rounded-full transition-all duration-300">
                        Show Cats
                    </button>
                </div>
            </div>

            {/* SLIDER CONTAINER */}
            <div className="w-full max-w-6xl overflow-hidden px-2">
                <motion.div
                    className="flex gap-8"
                    animate={{ x: `calc(-${currentIndex * (100 / visibleCards)}% - ${currentIndex * 1.33}rem)` }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    {petData.map(pet => (
                        <PetCard key={pet.id} pet={pet} />
                    ))}
                </motion.div>
            </div>

            {/* Slider Controls - Only shown if more than 3 cards */}
            {petData.length > visibleCards && (
                <div className="flex items-center gap-4">
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className={`border-2 border-[#C6E589] p-4 rounded-full text-[#8ECC14] transition-all duration-300 cursor-pointer 
                        ${currentIndex === 0 ? 'opacity-30 hover:cursor-not-allowed' : 'hover:bg-[#C6E589]'}`}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentIndex >= petData.length - visibleCards}
                        className={`border-2 border-[#C6E589] p-4 rounded-full text-[#8ECC14] transition-all duration-300 cursor-pointer 
                        ${currentIndex >= petData.length - visibleCards ? 'opacity-30 hover:cursor-not-allowed' : 'hover:bg-[#C6E589]'}`}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default FeaturedPets;