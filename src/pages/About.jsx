import { PawPrint, ShieldCheck, ChevronLeft, ChevronRight, UsersRound } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white min-h-screen">

            {/* SECTION 1: OUR JOURNEY (Design based on Reference 1) */}
            <section className="py-10 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-16">
                {/* Left Side: Overlapping Image Cluster */}
                <div className="w-full lg:w-1/2 relative">
                    <div className="relative z-10 w-[85%] h-[500px] overflow-hidden rounded-[60px] shadow-md">
                        <img
                            loading='lazy'
                            src="https://images.unsplash.com/photo-1721035667386-50a2d3b2cd68?w=1000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvb2RsZXN8ZW58MHx8MHx8fDA%3D"
                            className="w-full h-full object-cover"
                            alt="Veterinary Journey"
                        />
                    </div>
                    {/* Overlapping Cat Image */}
                    <div className="absolute -bottom-10 -right-4 z-20 w-64 h-64 border-[15px] border-white rounded-[50px] overflow-hidden shadow-md">
                        <img
                            loading='lazy'
                            src="https://images.unsplash.com/photo-1605244863941-3a3ed921c60d?w=1000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9vZGxlfGVufDB8fDB8fHww"
                            className="w-full h-full object-cover"
                            alt="Small Poodle"
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2">
                    <p className="uppercase text-[#E5F4A3] font-semibold tracking-wider text-xs mb-4">OUR JOURNEY</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#333] leading-none mb-8">
                        From <span className="text-[#8ECC14]">Humble Beginnings</span> to Heartfelt Journeys
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10">
                        Poodles Place started as a small backyard hobby, driven by a love for poodles and a desire
                        to see them in loving homes. Over the years, we’ve grown into a trusted community for
                        poodle enthusiasts, focused on responsible breeding, excellent care, and lifelong companionship.
                    </p>

                    {/* Icon List Section */}
                    <div className="space-y-8">
                        {[
                            { title: "Mission & Values", description: "We focus on ethical breeding, socialization, and health-first philosophy.", icon: <PawPrint size={20} /> },
                            { title: "Meet the Team", description: "Our team of breeders and caretakers are passionate about every thing.", icon: <UsersRound size={20} /> },
                            { title: "Shelter Facilities", description: "We provide spacious, clean, and loving environments for all our poodles.", icon: <ShieldCheck size={20} /> }
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

            {/* SECTION 2: HEARTFELT MISSION (Design based on Reference 2) */}
            <section className="py-10 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center mb-10 gap-10 md:gap-20">
                    <div className="w-full lg:w-1/2">
                        <div className="w-16 h-16 bg-[#E5F4A3] rounded-2xl mb-8"></div>
                        <p className="uppercase text-[#E5F4A3] font-semibold tracking-wider text-xs mb-4">OUR HEARTFELT MISSION</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333] leading-none mb-8">
                            <span className="text-[#8ECC14]">Nurturing Lives,</span> Creating Bonds With Furry Pets
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10">
                            Our mission is to raise poodles that are not only healthy and well-trained but
                            emotionally ready to become a beloved part of your family. Every dog receives
                            individualized care, early socialization, and lots of love.
                        </p>
                        <button className="bg-[#C6E589] text-[#3F3B57] font-bold px-10 py-5 rounded-[25px] hover:bg-[#8ECC14] hover:text-white transition-all duration-300 shadow-md cursor-pointer">
                            Make a Difference
                        </button>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        <div className="w-full h-[550px] overflow-hidden rounded-[60px] shadow-md">
                            <img
                                loading='lazy'
                                src="https://images.unsplash.com/photo-1544047963-99e58dfea839?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9uZCUyMHdpdGglMjBwb29kbGV8ZW58MHx8MHx8fDA%3D"
                                className="w-full h-full object-cover"
                                alt="Mission Image"
                            />
                        </div>
                        {/* Decorative Dog Overlap */}
                        <div className="absolute -bottom-12 -left-12 w-72 h-72 border-[15px] border-white rounded-[50px] overflow-hidden shadow-md">
                            <img
                                loading='lazy'
                                src="https://images.unsplash.com/photo-1581562324420-eff2f5aaa4b5?w=1000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9vZGxlfGVufDB8fDB8fHww"
                                className="w-full h-full object-cover"
                                alt="Poodle Pup"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#E5F4A3] rounded-2xl -z-10"></div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: IMPACT BY THE NUMBERS (Bento Design based on Reference 3) */}
            <section className="py-10 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-20 items-center">
                    {/* Bento Stat Cluster */}
                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 relative">
                        <div className="w-full h-64 overflow-hidden rounded-[50px] shadow-md">
                            <img loading='lazy' src="https://images.unsplash.com/photo-1594387974538-72145cc6c0c6?w=1000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9vZGxlJTIwYWRvcHR8ZW58MHx8MHx8fDA%3D" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-[#F9FFF0] flex flex-col items-center justify-center p-8 rounded-[50px] text-center group hover:bg-[#8ECC14] transition-all duration-300">
                            <h3 className="text-5xl font-bold text-[#8ECC14] group-hover:text-white mb-2">95%</h3>
                            <p className="text-gray-500 font-bold text-xs uppercase group-hover:text-white">Adoption Success <br /> Rate</p>
                        </div>
                        <div className="bg-[#F9FFF0] flex flex-col items-center justify-center p-8 rounded-[50px] text-center group hover:bg-[#8ECC14] transition-all duration-300">
                            <h3 className="text-5xl font-bold text-[#8ECC14] group-hover:text-white mb-2">98%</h3>
                            <p className="text-gray-500 font-bold text-xs uppercase group-hover:text-white">Veterinary Care <br /> Satisfaction</p>
                        </div>
                        <div className="w-full h-64 overflow-hidden rounded-[50px] shadow-md">
                            <img loading='lazy' src="https://media.istockphoto.com/id/2208781930/photo/portrait-of-two-beautiful-curly-dogs-sharing-a-beige-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=cRgAVcD9DjrX04dD8UMa9iOkvn7odJTYL3K_5AzSQmQ=" className="w-full h-full object-cover" />
                        </div>
                        {/* Center Overlap Cat Image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-[10px] border-white rounded-[40px] overflow-hidden shadow-xl z-20">
                            <img loading='lazy' src="https://images.unsplash.com/photo-1766471416360-e7932245d3c2?w=1000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvb2RsZSUyMHdpdGglMjBnbGFzc2VzfGVufDB8fDB8fHww" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <p className="uppercase text-[#C6E589] font-semibold tracking-wider text-xs mb-4">TRANSFORMING LIVES</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333] leading-none mb-8">
                            Our <span className="text-[#8ECC14]">Impact</span> by the Numbers
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10">
                            We have placed hundreds of poodles into loving homes across the country,
                            ensuring each adoption is a perfect match and every dog thrives in its new family.
                        </p>
                        <button className="bg-[#C6E589] text-[#3F3B57] font-bold px-10 py-5 rounded-[25px] hover:bg-[#8ECC14] hover:text-white transition-all duration-300 cursor-pointer shadow-md">
                            Donate To Our Cause
                        </button>
                    </div>
                </div>
            </section>

            {/* SECTION 4: TESTIMONIALS (Design based on Reference 4) */}
            <section className="py-10 px-6 bg-white relative">
                <div className="absolute top-0 left-10 w-16 h-16 bg-[#C6E589] rounded-2xl -z-10"></div>
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333]">
                        Happy Clients <span className="text-[#8ECC14]">Testimonials</span>
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto flex items-center justify-between gap-8">
                    {/* Left Arrow */}
                    <button className="p-5 border-2 border-[#C6E589] text-[#8ECC14] rounded-full hover:bg-[#C6E589] hover:text-white transition-all duration-300 cursor-pointer hidden md:block">
                        <ChevronLeft size={24} />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                        {[
                            { name: "Michael Brown", img: "https://i.pravatar.cc/150?u=1" },
                            { name: "David Smith", img: "https://i.pravatar.cc/150?u=2" },
                            { name: "Jessica Williams", img: "https://i.pravatar.cc/150?u=3" },
                            { name: "Jess Will", img: "https://i.pravatar.cc/150?u=5" }
                        ].map((user, i) => (
                            <div key={i} className="flex flex-col-reverse items-center text-center">
                                <p className="text-gray-500 italic relative px-4">
                                    "Poodles Place helped me find the perfect companion. Every interaction was caring and professional!"
                                </p>
                                <h4 className="text-xl font-bold text-[#8ECC14] mb-2">{user.name}</h4>
                                <div className="w-24 h-24 rounded-full overflow-hidden border-4 mb-4 border-[#F9FFF0]">
                                    <img loading='lazy' src={user.img} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button className="p-5 border-2 border-[#C6E589] text-[#8ECC14] rounded-full hover:bg-[#C6E589] hover:text-white transition-all duration-300 cursor-pointer hidden md:block">
                        <ChevronRight size={24} />
                    </button>
                </div>
                <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#C6E589] rounded-2xl -z-10"></div>
            </section>

            {/* SECTION 5: OUR ELITE FACILITIES (New Added Section) */}
            <section className="py-10 px-6 bg-[#FAFAFA]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                    <div className="w-full lg:w-1/2">
                        <p className="uppercase text-[#C6E589] font-bold tracking-wider text-xs mb-4">WORLD CLASS CARE</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333] leading-none mb-8">
                            A <span className="text-[#8ECC14]">Heavenly</span> Space for Our Residents
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
                            Our poodles live in luxury suites with access to private play areas, grooming services,
                            and constant care. Every detail is designed to ensure they thrive and enjoy life until
                            they find their forever home.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="bg-[#8ECC14] w-12 h-1"></div>
                            <p className="font-bold text-[#3F3B57]">Environment First Philosophy</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                        <img loading='lazy' src="https://images.unsplash.com/photo-1651571475974-07deef85e33b?w=1000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BhY2UlMjBmb3IlMjBwb29kbGV8ZW58MHx8MHx8fDA%3D" className="w-full h-64 object-cover rounded-[50px]" />
                        <img loading='lazy' src="https://images.unsplash.com/photo-1556292577-86da403c8d42?w=1000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BhY2UlMjBmb3IlMjBwb29kbGV8ZW58MHx8MHx8fDA%3D" className="w-full h-64 object-cover rounded-[50px] mt-12" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;