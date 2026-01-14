import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ChevronLeft,
    ChevronRight,
    RotateCcw,
    Heart,
    Pill,
    Cpu,
    ShieldCheck,
    Activity,
    Thermometer
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import your assets here
import dog1 from "../assets/dog1.avif";
import dog2 from "../assets/dog2.avif";
import dog3 from "../assets/dog3.avif";
import dog4 from "../assets/dog4.avif";

const petData = [
    {
        id: 1,
        name: "Bella",
        breed: "TOY POODLE",
        weight: "6 lbs",
        gender: "Female",
        age: "4 months",
        image: "https://images.unsplash.com/photo-1655964107490-4b90c428e4d0?w=1000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D",
        health: [
            { id: 'h1', name: "Heart", icon: Heart, active: true },
            { id: 'h2', name: "Meds", icon: Pill, active: false },
            { id: 'h3', name: "Chip", icon: Cpu, active: true },
            { id: 'h4', name: "Vax", icon: ShieldCheck, active: false },
            { id: 'h5', name: "Pulse", icon: Activity, active: true },
            { id: 'h6', name: "Check", icon: Thermometer, active: false },
        ]
    },
    {
        id: 2,
        name: "Max",
        breed: "MINIATURE POODLE",
        weight: "14 lbs",
        gender: "Male",
        age: "6 months",
        image: "https://images.unsplash.com/photo-1602165640367-68676c0ec5f0?w=1000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TUlOSUFUVVJFJTIwUE9PRExFfGVufDB8fDB8fHww",
        health: [
            { id: 's1', name: "Heart", icon: Heart, active: true },
            { id: 's2', name: "Meds", icon: Pill, active: true },
            { id: 's3', name: "Chip", icon: Cpu, active: false },
            { id: 's4', name: "Vax", icon: ShieldCheck, active: true },
            { id: 's5', name: "Pulse", icon: Activity, active: true },
            { id: 's6', name: "Check", icon: Thermometer, active: false },
        ]
    },
    {
        id: 3,
        name: "Luna",
        breed: "STANDARD POODLE",
        weight: "45 lbs",
        gender: "Female",
        age: "1 year",
        image: "https://images.unsplash.com/photo-1614261812340-5ee9a3ed33a3?w=1000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U1RBTkRBUkQlMjBQT09ETEV8ZW58MHx8MHx8fDA%3D",
        health: [
            { id: 'd1', name: "Heart", icon: Heart, active: false },
            { id: 'd2', name: "Meds", icon: Pill, active: true },
            { id: 'd3', name: "Chip", icon: Cpu, active: false },
            { id: 'd4', name: "Vax", icon: ShieldCheck, active: true },
            { id: 'd5', name: "Pulse", icon: Activity, active: true },
            { id: 'd6', name: "Check", icon: Thermometer, active: false },
        ]
    },
    {
        id: 4,
        name: "Charlie",
        breed: "TOY POODLE",
        weight: "7 lbs",
        gender: "Male",
        age: "5 months",
        image: "https://images.unsplash.com/photo-1625760492002-15adf1fe003e?w=1000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VE9ZJTIwUE9PRExFfGVufDB8fDB8fHww",
        health: [
            { id: 'm1', name: "Heart", icon: Heart, active: true },
            { id: 'm2', name: "Meds", icon: Pill, active: false },
            { id: 'm3', name: "Chip", icon: Cpu, active: false },
            { id: 'm4', name: "Vax", icon: ShieldCheck, active: true },
            { id: 'm5', name: "Pulse", icon: Activity, active: true },
            { id: 'm6', name: "Check", icon: Thermometer, active: false },
        ]
    }
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
                <div
                    className={`absolute inset-0 w-full h-full [backface-visibility:hidden] 
                    ${isFlipped ? "pointer-events-none" : "pointer-events-auto"}`} // Fix: Disable clicks when flipped
                >
                    <div className="group relative h-full w-full rounded-[40px] overflow-hidden shadow-md">
                        <img
                            loading='lazy'
                            src={pet.image}
                            alt={pet.name}
                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />
                        <div className="absolute top-6 right-6 bg-[#8ECC14] p-2 rounded-full shadow-md text-white z-10">
                            <RotateCcw size={24} />
                        </div>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-white py-4 rounded-3xl text-center shadow-sm z-10">
                            <h2 className="text-3xl font-bold text-[#8ECC14]">{pet.name}</h2>
                            <p className="text-xs tracking-widest text-gray-800 uppercase mt-1">{pet.breed}</p>
                        </div>
                    </div>
                </div>

                {/* BACK SIDE */}
                <div
                    className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] 
                    ${isFlipped ? "pointer-events-auto" : "pointer-events-none"}`} // Fix: Only enable clicks when flipped
                >
                    <div className="h-full w-full bg-white rounded-[40px] shadow-md border border-gray-100 flex flex-col items-center p-8 overflow-hidden relative">
                        <div className="absolute top-6 right-6 bg-[#8ECC14] p-2 rounded-full text-white">
                            <RotateCcw size={24} />
                        </div>

                        <h2 className="text-3xl font-bold text-[#8ECC14] mt-4">{pet.name}</h2>
                        <p className="text-xs tracking-widest text-gray-500 uppercase mt-1 mb-6">{pet.breed}</p>

                        <div className="flex items-center gap-2 border border-[#B2D33C] px-6 py-2 rounded-full text-gray-700 font-medium mb-6 text-sm">
                            <span>{pet.weight}</span> • <span>{pet.gender}</span> • <span>{pet.age}</span>
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

                        {/* This button will now work perfectly */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/pet/${pet.id}`);
                            }}
                            className="relative z-[100] bg-[#C6E589] text-gray-800 font-bold px-10 py-3 rounded-2xl hover:scale-103 transition-all mt-auto mb-4 cursor-pointer duration-300"
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
    const [visibleCards, setVisibleCards] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setVisibleCards(1);
            else setVisibleCards(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        if (currentIndex < petData.length - visibleCards) setCurrentIndex(prev => prev + 1);
    };

    const prevSlide = () => {
        if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
    };

    // Responsive math: adjusts width + 2rem (gap-8)
    const movePercentage = visibleCards === 1 ? 100 : 33.333;
    const gapCorrection = visibleCards === 1 ? 2 : 0.666;

    return (
        <div id='services' className="bg-white py-10 flex flex-col items-center px-4 overflow-hidden">
            <div className="text-center mb-10 max-w-5xl">
                <p className="uppercase text-[#C6E589] font-medium tracking-widest pb-4 text-sm">Available Poodles</p>
                <h1 className="text-3xl sm:text-4xl font-bold text-[#333333] pb-6 leading-tight">
                    <span className="text-[#8ECC14]">Healthy Poodles </span>For Loving Homes
                </h1>
                <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
                    Explore our carefully raised Toy, Miniature, and Standard Poodles.
                    Vet-checked, vaccinated, and ready for families across the USA.
                </p>

                {/* <div className="flex md:flex-row flex-col items-center justify-center gap-4 mt-10">
                    <button className="font-bold bg-[#C6E589] text-gray-800 hover:bg-[#8ECC14] px-10 py-4 cursor-pointer rounded-full transition-all duration-300 shadow-sm">
                        Show Dogs
                    </button>
                    <button className="font-bold border-2 border-[#C6E589] text-gray-800 hover:bg-[#C6E589] px-10 py-3.5 cursor-pointer rounded-full transition-all duration-300">
                        Show Cats
                    </button>
                </div> */}
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
                <div className="flex items-center gap-4 mt-8">
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