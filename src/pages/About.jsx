import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    PawPrint,
    ShieldCheck,
    ChevronLeft,
    ChevronRight,
    UsersRound,
    Handshake,
    Award,
    ExternalLink,
    CheckCircle2
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const testimonials = [
    { name: "Linda DuBose", img: "https://i.pravatar.cc/150?u=11", text: "As a mentor, I've watched this program prioritize genetics and temperament above all else. They truly honor the legacy of Scarlet’s Fancy Poodles." },
    { name: "Sarah J.", img: "https://i.pravatar.cc/150?u=28", text: "The connection to the Apricot Red Poodle Club gave us so much confidence. You aren't just buying a puppy; you're joining a community." },
    { name: "Michael Brown", img: "https://i.pravatar.cc/150?u=19", text: "Incredible health standards! It's clear that their mentorship from experienced breeders has made them one of the most ethical kennels today." },
    { name: "David Smith", img: "https://i.pravatar.cc/150?u=21", text: "The AKC standards are met with precision. My Toy Poodle is structurally perfect and has the best temperament of any dog I've owned." }
];

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    const navigate = useNavigate()

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

    const movePercentage = visibleCards === 1 ? 100 : 33.333;
    const gapCorrection = visibleCards === 1 ? 2 : 0.666;

    return (
        <div className="bg-white min-h-screen">

            {/* SECTION 1: OUR JOURNEY */}
            <section className="py-10 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-16">
                <div className="w-full lg:w-1/2 relative">
                    <div className="relative z-10 w-[85%] h-[500px] overflow-hidden rounded-[60px] shadow-md">
                        <img loading='lazy' src="https://images.unsplash.com/photo-1721035667386-50a2d3b2cd68?w=1000&q=100" className="w-full h-full object-cover" alt="Journey" />
                    </div>
                    <div className="absolute -bottom-10 -right-4 z-20 w-64 h-64 border-[15px] border-white rounded-[50px] overflow-hidden shadow-md">
                        <img loading='lazy' src="https://images.unsplash.com/photo-1605244863941-3a3ed921c60d?w=1000&q=100" className="w-full h-full object-cover" alt="Small Poodle" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <p className="uppercase text-pink-700 font-semibold tracking-wider text-xs mb-4">OUR JOURNEY</p>
                    <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold fr text-[#333] leading-none mb-8">
                        From <span className="text-transparent bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text">Humble Beginnings</span> to Heartfelt Journeys
                    </h2>
                    <p className="text-blue-500 text-base md:text-lg leading-relaxed mb-10">
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
                                <div className="bg-pink-100 p-4 rounded-2xl text-pink-700 group-hover:bg-pink-700 group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-pink-700 fr">{item.title}</h4>
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
                        <div className="w-16 h-16 bg-pink-200 animate-pulse rounded-2xl mb-8"></div>
                        <p className="uppercase text-pink-700 font-semibold tracking-wider text-xs mb-4">OUR HEARTFELT MISSION</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold fr text-[#333] leading-none mb-8">
                            <span className="text-transparent bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text">Nurturing Lives,</span> Creating Bonds With Furry Pets
                        </h2>
                        <p className="text-blue-500 text-base md:text-lg leading-relaxed mb-10">
                            Ensuring poodles are healthy, well-trained, and emotionally ready for your family.
                        </p>
                        <button onClick={() => navigate("/our-dogs")} className="bg-pink-700 text-white font-bold px-6 py-4 rounded-xl hover:bg-pink-800 hover:text-white transition-all duration-300 shadow-sm cursor-pointer">
                            Meet Our Dogs
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
            {/* <section className="py-10 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-20 items-center">
                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 relative">
                        <div className="w-full h-64 overflow-hidden rounded-[50px] shadow-md">
                            <img loading='lazy' src="https://images.unsplash.com/photo-1594387974538-72145cc6c0c6?w=1000&q=100" className="w-full h-full object-cover" alt="Adoption" />
                        </div>
                        <div className="bg-[#F9FFF0] flex flex-col items-center justify-center p-8 rounded-[50px] text-center group hover:bg-blue-700 transition-all duration-300">
                            <h3 className="text-5xl font-bold text-blue-700 group-hover:text-white mb-2">95%</h3>
                            <p className="text-blue-700 font-bold text-xs uppercase group-hover:text-white">Adoption Success Rate</p>
                        </div>
                        <div className="bg-[#F9FFF0] flex flex-col items-center justify-center p-8 rounded-[50px] text-center group hover:bg-pink-700 transition-all duration-300">
                            <h3 className="text-5xl font-bold text-pink-700 group-hover:text-white mb-2">98%</h3>
                            <p className="text-pink-700 font-bold text-xs uppercase group-hover:text-white">Care Satisfaction</p>
                        </div>
                        <div className="w-full h-64 overflow-hidden rounded-[50px] shadow-md">
                            <img loading='lazy' src="https://media.istockphoto.com/id/2208781930/photo/portrait-of-two-beautiful-curly-dogs-sharing-a-beige-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=cRgAVcD9DjrX04dD8UMa9iOkvn7odJTYL3K_5AzSQmQ=" className="w-full h-full object-cover" alt="Dogs" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-[10px] border-white rounded-[40px] overflow-hidden shadow-xl z-20">
                            <img src="https://images.unsplash.com/photo-1766471416360-e7932245d3c2?w=1000&q=100" className="w-full h-full object-cover" alt="Poodle" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <p className="uppercase text-pink-700 font-semibold tracking-wider text-xs mb-4">TRANSFORMING LIVES</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl fr font-bold text-[#333] leading-none mb-8">
                            Our <span className="text-transparent bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text">Impact</span> by the <span className="text-transparent bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text">Numbers</span>
                        </h2>
                        <p className="text-blue -500 text-base md:text-lg leading-relaxed mb-10">
                            Hundreds of poodles placed into loving homes across the country.
                        </p>
                        <button onClick={() => navigate("/#contact")} className="bg-pink-700 font-bold px-6 py-4 rounded-xl hover:bg-pink-800 text-white transition-all duration-300 shadow-sm cursor-pointer">
                            Donate To Our Cause
                        </button>
                    </div>
                </div>
            </section> */}

            {/* SECTION: PARTNERS & MENTORSHIP (New Section) */}
            {/* SECTION: PARTNERS & MENTORSHIP */}
            <section className="py-10 px-6 bg-[#F9FFF0]">
                <div className="max-w-7xl mx-auto">
                    {/* Header Block */}
                    <div className="text-center mb-10">
                        <p className="uppercase text-pink-700 font-semibold tracking-wider text-xs mb-4">Partners & Mentorship</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl fr font-bold text-[#333] mb-6 leading-14">
                            Support Our <span className="text-transparent bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text">Mission</span>
                        </h2>
                        <p className="text-blue-500 max-w-3xl mx-auto leading-normal text-base md:text-lg">
                            Behind every ethical breeding program is a network of support, wisdom, and shared values.
                            These partnerships ensure our puppies thrive and continue the tradition of quality this breed deserves.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-10">
                        {/* Left Column: Mentors & Organizations */}
                        <div className="space-y-10">
                            {/* Mentor Spotlight */}
                            <div>
                                <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text fr mb-6 flex items-center gap-3">
                                    <UsersRound className="text-pink-500" size={28} /> Mentors Who Made Us Better
                                </h3>
                                <div className="bg-white px-4 py-6 md:p-8 rounded-[40px] shadow-sm border border-pink-500">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-pink-500">
                                            <img src="https://i.pravatar.cc/150?u=44" className="w-full h-full object-cover" alt="Linda DuBose" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-[#333]">Honoring Linda DuBose</h4>
                                            <p className="text-pink-700 text-sm font-semibold italic">Scarlet’s Fancy Poodles</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 leading-relaxed text-sm mb-6">
                                        Our founder’s close friend and mentor taught us that thoughtful pairing, deep respect for genetics, and unwavering focus on temperament matter far more than superficial color claims. Her influence is woven through every puppy we place.
                                    </p>
                                    <Link to={"/about-breeder"} className="flex items-center gap-2 text-pink-700 font-bold text-sm hover:underline cursor-pointer">
                                        Visit About Breeder <ExternalLink size={14} />
                                    </Link>
                                </div>
                            </div>

                            {/* Organizations */}
                            <div>
                                <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-700 to-pink-700 bg-clip-text fr mb-6 flex items-center gap-3">
                                    <Handshake className="text-blue-500" size={28} /> Breed Organizations
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-6 bg-white rounded-3xl border border-blue-200 hover:shadow-sm transition-all duration-300">
                                        <Award className="text-blue-700 mb-3" size={32} />
                                        <h5 className="font-bold text-sm text-[#333] mb-2 uppercase">Apricot Red Poodle Club</h5>
                                        <p className="text-xs text-blue-400 leading-relaxed">Promoting excellence, education, and research specifically for red and apricot.</p>
                                    </div>
                                    <div className="p-6 bg-white rounded-3xl border border-pink-200 hover:shadow-sm transition-all duration-300">
                                        <ShieldCheck className="text-pink-700 mb-3" size={32} />
                                        <h5 className="font-bold text-sm text-[#333] mb-2 uppercase">American Kennel Club</h5>
                                        <p className="text-xs text-pink-400 leading-relaxed">Supporting recognized standards, health recommendations, and breed integrity.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Values & Benefits */}
                        <div className="space-y-10">
                            {/* Mentorship Values */}
                            <div className="bg-white p-8 rounded-[40px] border border-pink-500">
                                <h3 className="text-xl font-bold text-[#333] mb-6">What Mentorship Means to Us</h3>
                                <div className="space-y-6">
                                    {[
                                        { t: "Continued Learning", d: "A shared commitment to evolving ethical practices and breed standards." },
                                        { t: "Giving Back", d: "Sharing what we've learned with emerging breeders and maintaining openness." },
                                        { t: "Growth & Humility", d: "Securing a strong future for the breed through deep, thoughtful study." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="mt-1 bg-pink-700 p-1.5 rounded-full text-pink-300">
                                                <CheckCircle2 size={14} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-[#333] text-sm uppercase">{item.t}</h5>
                                                <p className="text-pink-500 text-xs">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefit to Families */}
                            <div className="bg-blue-50 p-8 rounded-[40px]">
                                <h3 className="text-xl font-bold text-[#333] mb-4">Why This Matters to You</h3>
                                <p className="text-blue-500 text-sm leading-relaxed mb-6">
                                    When you bring a puppy home, you are bringing decades of shared wisdom and medical practices grounded in experience.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                                    <li className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#333]"><PawPrint size={18} className="text-blue-700" /> Decades of Wisdom</li>
                                    <li className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#333]"><PawPrint size={18} className="text-blue-700" /> Network of Support</li>
                                    <li className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#333]"><PawPrint size={18} className="text-blue-700" /> Ethical Standards</li>
                                    <li className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#333]"><PawPrint size={18} className="text-blue-700" /> Dog-First Philosophy</li>
                                </ul>
                            </div>

                            {/* Final CTA Block */}
                            <div className="text-center pt-4">
                                <h4 className="text-xl font-bold text-[#333] mb-6">Interested in Learning More?</h4>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button onClick={() => navigate("/#contact")} className="bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl hover:bg-blue-800 transition-all duration-300 cursor-pointer text-sm shadow-sm">
                                        Contact Us About Mentorship
                                    </button>
                                    <button onClick={() => navigate('/breed-program')} className="border-2 border-pink-500 text-[#333] hover:text-white font-bold px-8 py-4 rounded-2xl hover:bg-pink-500 transition-all duration-300 cursor-pointer text-sm">
                                        See Our Breeding Program
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: TESTIMONIALS SLIDER */}
            {/* <section className="py-10 px-6 bg-white overflow-hidden relative">
                <div className="absolute top-0 left-10 w-16 h-16 bg-pink-500 rounded-2xl -z-10"></div>
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl fr font-bold text-[#333]">
                        Happy Clients <span className="text-transparent bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text">Testimonials</span>
                    </h2>
                </div>
                <div className="max-w-7xl mx-auto px-4 lg:px-12 relative">
                    <button onClick={prevSlide} disabled={currentIndex === 0} className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 border-2 border-blue-200 text-blue-700 rounded-full transition-all duration-300 cursor-pointer bg-white md:block hidden ${currentIndex === 0 ? 'opacity-30 hover:cursor-not-allowed' : 'hover:bg-blue-500 hover:text-white'}`}>
                        <ChevronLeft size={24} />
                    </button>
                    <div className="overflow-hidden w-full">
                        <motion.div className="flex gap-8 md:gap-12" animate={{ x: `calc(-${currentIndex * movePercentage}% - ${currentIndex * gapCorrection}rem)` }} transition={{ type: "spring", stiffness: 100, damping: 20 }}>
                            {testimonials.map((user, i) => (
                                <div key={i} className="flex flex-col-reverse items-center text-center w-full md:w-[calc(33.333%-2rem)] flex-shrink-0">
                                    <p className="text-gray-500 italic relative px-4 text-sm md:text-base leading-relaxed">"{user.text}"</p>
                                    <h4 className="text-xl font-bold text-blue-700 mb-2">{user.name}</h4>
                                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 mb-4 border-[#F9FFF0] shadow-sm">
                                        <img loading='lazy' src={user.img} className="w-full h-full object-cover" alt={user.name} />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    <button onClick={nextSlide} disabled={currentIndex >= testimonials.length - visibleCards} className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 border-2 border-blue-200 text-blue-700 rounded-full transition-all duration-300 cursor-pointer bg-white md:block hidden ${currentIndex >= testimonials.length - visibleCards ? 'opacity-30 hover:cursor-not-allowed' : 'hover:bg-blue-500 hover:text-white'}`}>
                        <ChevronRight size={24} />
                    </button>
                </div>
                <div className="flex items-center justify-center gap-4 mt-8 md:hidden">
                    <button onClick={prevSlide} disabled={currentIndex === 0} className="p-3 border-2 border-blue-200 rounded-full text-blue-700"><ChevronLeft size={20} /></button>
                    <button onClick={nextSlide} disabled={currentIndex >= testimonials.length - visibleCards} className="p-3 border-2 border-blue-200 rounded-full text-blue-700"><ChevronRight size={20} /></button>
                </div>
                <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-200 rounded-2xl -z-10"></div>
            </section> */}

            {/* SECTION 5: OUR ELITE FACILITIES */}
            <section className="py-10 px-6 md:px-10 bg-[#FAFAFA]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                    <div className="w-full lg:w-1/2">
                        <p className="uppercase text-pink-700 font-bold tracking-wider text-xs mb-4">WORLD CLASS CARE</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl fr font-bold text-[#333] leading-none mb-8">
                            A <span className="text-transparent bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text">Heavenly</span> Space for Our Residents
                        </h2>
                        <p className="text-blue-500 text-base md:text-lg leading-relaxed mb-10">
                            Poodles live in luxury suites with access to private play areas and constant care.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="bg-pink-700 w-12 h-1"></div>
                            <p className="font-bold text-pink-700">Environment First Philosophy</p>
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