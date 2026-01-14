import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PawPrint, ShieldCheck, ChevronLeft, ChevronRight, UsersRound } from 'lucide-react';

const testimonials = [
    { name: "Michael Brown", img: "https://i.pravatar.cc/150?u=19", text: "Poodles Place helped me find the perfect companion. Every interaction was caring and professional!" },
    { name: "David Smith", img: "https://i.pravatar.cc/150?u=21", text: "Finding a healthy, socialized poodle was easy. They really care about where their dogs go." },
    { name: "Jessica Williams", img: "https://i.pravatar.cc/150?u=13", text: "The facility is world-class. You can tell the dogs are happy and loved from day one." },
    { name: "Robert Wilson", img: "https://i.pravatar.cc/150?u=5", text: "Best decision of our lives! Our poodle is smart, healthy, and fits right in with our kids." },
    { name: "Sarah Jenkins", img: "https://i.pravatar.cc/150?u=28", text: "Incredible support even after adoption. They are always there to answer my training questions." }
];

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    // Responsive Logic for Slider
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
        if (currentIndex < testimonials.length - visibleCards) setCurrentIndex(prev => prev + 1);
    };

    const prevSlide = () => {
        if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
    };

    // Math for smooth translation
    const movePercentage = visibleCards === 1 ? 100 : 33.333;
    const gapCorrection = visibleCards === 1 ? 2 : 0.666; // Based on gap-8 or gap-12

    return (
        <div className="bg-white min-h-screen">

            {/* SECTION 1: OUR JOURNEY */}
            <section className="py-10 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-16">
                <div className="w-full lg:w-1/2 relative">
                    <div className="relative z-10 w-[85%] h-[500px] overflow-hidden rounded-[60px] shadow-md">
                        <img
                            loading='lazy'
                            src="https://images.unsplash.com/photo-1721035667386-50a2d3b2cd68?w=1000&auto=format&fit=crop&q=100"
                            className="w-full h-full object-cover"
                            alt="Journey"
                        />
                    </div>
                    <div className="absolute -bottom-10 -right-4 z-20 w-64 h-64 border-[15px] border-white rounded-[50px] overflow-hidden shadow-md">
                        <img
                            loading='lazy'
                            src="https://images.unsplash.com/photo-1605244863941-3a3ed921c60d?w=1000&auto=format&fit=crop&q=100"
                            className="w-full h-full object-cover"
                            alt="Small Poodle"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <p className="uppercase text-[#8ECC14] font-semibold tracking-wider text-xs mb-4">OUR JOURNEY</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#333] leading-none mb-8">
                        From <span className="text-[#8ECC14]">Humble Beginnings</span> to Heartfelt Journeys
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10">
                        Poodles Place started as a small backyard hobby, driven by a love for poodles and a desire
                        to see them in loving homes. Focused on responsible breeding and lifelong companionship.
                    </p>

                    <div className="space-y-8">
                        {[
                            { title: "Mission & Values", description: "Ethical breeding, socialization, and health-first philosophy.", icon: <PawPrint size={20} /> },
                            { title: "Meet the Team", description: "Passionate breeders and caretakers.", icon: <UsersRound size={20} /> },
                            { title: "Shelter Facilities", description: "Spacious, clean, and loving environments.", icon: <ShieldCheck size={20} /> }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-6 group">
                                <div className="bg-[#E5F4A3] p-4 rounded-2xl text-[#8ECC14] group-hover:bg-[#8ECC14] group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#8ECC14]">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 2: HEARTFELT MISSION */}
            <section className="py-10 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center mb-10 gap-10 md:gap-20">
                    <div className="w-full lg:w-1/2">
                        <div className="w-16 h-16 bg-[#E5F4A3] rounded-2xl mb-8"></div>
                        <p className="uppercase text-[#8ECC14] font-semibold tracking-wider text-xs mb-4">OUR HEARTFELT MISSION</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333] leading-none mb-8">
                            <span className="text-[#8ECC14]">Nurturing Lives,</span> Creating Bonds With Furry Pets
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10">
                            Ensuring poodles are healthy, well-trained, and emotionally ready for your family.
                        </p>
                        <button className="bg-[#C6E589] text-[#3F3B57] font-bold px-10 py-5 rounded-[25px] hover:bg-[#8ECC14] hover:text-white transition-all duration-300 shadow-md cursor-pointer">
                            Make a Difference
                        </button>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        <div className="w-full h-[550px] overflow-hidden rounded-[60px] shadow-md">
                            <img loading='lazy' src="https://images.unsplash.com/photo-1544047963-99e58dfea839?w=2000&q=100" className="w-full h-full object-cover" alt="Mission" />
                        </div>
                        <div className="absolute -bottom-12 -left-12 w-72 h-72 border-[15px] border-white rounded-[50px] overflow-hidden shadow-md">
                            <img loading='lazy' src="https://images.unsplash.com/photo-1581562324420-eff2f5aaa4b5?w=1000&q=100" className="w-full h-full object-cover" alt="Pup" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: IMPACT BY THE NUMBERS */}
            <section className="py-10 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-20 items-center">
                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 relative">
                        <div className="w-full h-64 overflow-hidden rounded-[50px] shadow-md">
                            <img loading='lazy' src="https://images.unsplash.com/photo-1594387974538-72145cc6c0c6?w=1000&q=100" className="w-full h-full object-cover" alt="Adoption" />
                        </div>
                        <div className="bg-[#F9FFF0] flex flex-col items-center justify-center p-8 rounded-[50px] text-center group hover:bg-[#8ECC14] transition-all duration-300">
                            <h3 className="text-5xl font-bold text-[#8ECC14] group-hover:text-white mb-2">95%</h3>
                            <p className="text-gray-500 font-bold text-xs uppercase group-hover:text-white">Adoption Success Rate</p>
                        </div>
                        <div className="bg-[#F9FFF0] flex flex-col items-center justify-center p-8 rounded-[50px] text-center group hover:bg-[#8ECC14] transition-all duration-300">
                            <h3 className="text-5xl font-bold text-[#8ECC14] group-hover:text-white mb-2">98%</h3>
                            <p className="text-gray-500 font-bold text-xs uppercase group-hover:text-white">Care Satisfaction</p>
                        </div>
                        <div className="w-full h-64 overflow-hidden rounded-[50px] shadow-md">
                            <img loading='lazy' src="https://media.istockphoto.com/id/2208781930/photo/portrait-of-two-beautiful-curly-dogs-sharing-a-beige-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=cRgAVcD9DjrX04dD8UMa9iOkvn7odJTYL3K_5AzSQmQ=" className="w-full h-full object-cover" alt="Dogs" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-[10px] border-white rounded-[40px] overflow-hidden shadow-xl z-20">
                            <img src="https://images.unsplash.com/photo-1766471416360-e7932245d3c2?w=1000&q=100" className="w-full h-full object-cover" alt="Poodle" />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <p className="uppercase text-[#C6E589] font-semibold tracking-wider text-xs mb-4">TRANSFORMING LIVES</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333] leading-none mb-8">
                            Our <span className="text-[#8ECC14]">Impact</span> by the Numbers
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10">
                            Hundreds of poodles placed into loving homes across the country.
                        </p>
                        <button className="bg-[#C6E589] text-[#3F3B57] font-bold px-10 py-5 rounded-[25px] hover:bg-[#8ECC14] hover:text-white transition-all duration-300 shadow-md cursor-pointer">
                            Donate To Our Cause
                        </button>
                    </div>
                </div>
            </section>

            {/* SECTION 4: TESTIMONIALS SLIDER */}
            <section className="py-10 px-6 bg-white overflow-hidden relative">
                <div className="absolute top-0 left-10 w-16 h-16 bg-[#C6E589] rounded-2xl -z-10"></div>
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333]">
                        Happy Clients <span className="text-[#8ECC14]">Testimonials</span>
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto px-4 lg:px-12 relative">
                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 border-2 border-[#C6E589] text-[#8ECC14] rounded-full transition-all duration-300 cursor-pointer bg-white md:block hidden
                        ${currentIndex === 0 ? 'opacity-30 hover:cursor-not-allowed' : 'hover:bg-[#C6E589] hover:text-white'}`}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Testimonial Track */}
                    <div className="overflow-hidden w-full">
                        <motion.div
                            className="flex gap-8 md:gap-12"
                            animate={{ x: `calc(-${currentIndex * movePercentage}% - ${currentIndex * gapCorrection}rem)` }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        >
                            {testimonials.map((user, i) => (
                                <div key={i} className="flex flex-col-reverse items-center text-center w-full md:w-[calc(33.333%-2rem)] flex-shrink-0">
                                    <p className="text-gray-500 italic relative px-4 text-sm md:text-base leading-relaxed">
                                        "{user.text}"
                                    </p>
                                    <h4 className="text-xl font-bold text-[#8ECC14] mb-2">{user.name}</h4>
                                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 mb-4 border-[#F9FFF0] shadow-sm">
                                        <img loading='lazy' src={user.img} className="w-full h-full object-cover" alt={user.name} />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        disabled={currentIndex >= testimonials.length - visibleCards}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 border-2 border-[#C6E589] text-[#8ECC14] rounded-full transition-all duration-300 cursor-pointer bg-white md:block hidden
                        ${currentIndex >= testimonials.length - visibleCards ? 'opacity-30 hover:cursor-not-allowed' : 'hover:bg-[#C6E589] hover:text-white'}`}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Mobile Controls (Visible only on small screens) */}
                <div className="flex items-center justify-center gap-4 mt-8 md:hidden">
                    <button onClick={prevSlide} disabled={currentIndex === 0} className="p-3 border-2 border-[#C6E589] rounded-full text-[#8ECC14]"><ChevronLeft size={20} /></button>
                    <button onClick={nextSlide} disabled={currentIndex >= testimonials.length - visibleCards} className="p-3 border-2 border-[#C6E589] rounded-full text-[#8ECC14]"><ChevronRight size={20} /></button>
                </div>

                <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#C6E589] rounded-2xl -z-10"></div>
            </section>

            {/* SECTION 5: OUR ELITE FACILITIES */}
            <section className="py-10 px-6 md:px-10 bg-[#FAFAFA]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                    <div className="w-full lg:w-1/2">
                        <p className="uppercase text-[#C6E589] font-bold tracking-wider text-xs mb-4">WORLD CLASS CARE</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333] leading-none mb-8">
                            A <span className="text-[#8ECC14]">Heavenly</span> Space for Our Residents
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
                            Poodles live in luxury suites with access to private play areas and constant care.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="bg-[#8ECC14] w-12 h-1"></div>
                            <p className="font-bold text-[#3F3B57]">Environment First Philosophy</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                        <img loading='lazy' src="https://images.unsplash.com/photo-1651571475974-07deef85e33b?w=1000&q=100" className="w-full h-64 object-cover rounded-[50px]" alt="Facility" />
                        <img loading='lazy' src="https://images.unsplash.com/photo-1556292577-86da403c8d42?w=1000&q=100" className="w-full h-64 object-cover rounded-[50px] mt-12" alt="Play Area" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;