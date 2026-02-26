import { useNavigate } from 'react-router-dom';
import { Camera, Heart, Home, Users, ArrowRight } from 'lucide-react';

const GalleryHub = () => {
    const navigate = useNavigate();

    const collections = [
        {
            title: "The Past Litters Archive",
            subtitle: "A Legacy of Excellence",
            desc: "Our archive is a living record of every pairing we have ever done. We maintain this gallery so families can see the consistency of our lines, the retention of our deep red coats, and the steady development of temperament from birth to placement.",
            highlights: ["Visual growth tracking", "Coat color evolution", "Litter consistency"],
            img: "https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?auto=format&fit=crop&q=80&w=1200",
            buttonText: "Explore the Archive",
            link: "/past-litters",
            icon: <Camera className="text-brand-blue-500" />
        },
        {
            title: "Our Sires & Dams",
            subtitle: "The Genetic Foundation",
            desc: "Great puppies start with exceptional parents. This collection showcases our adult Poodles in their element—at home, in the field, and as part of our family. We choose our dogs for their glowing confidence, sound structure, and joyful souls.",
            highlights: ["Health-tested parents", "Confident temperaments", "Sound structure"],
            img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1200",
            buttonText: "Meet Our Dogs",
            link: "/our-dogs",
            icon: <Heart className="text-brand-pink-500" />
        },
        {
            title: "Life at Home",
            subtitle: "Real Life Creates Real Dogs",
            desc: "We don't believe in quiet kennels. Our puppies grow up in the heart of our home. This gallery documents the sounds of the vacuum, the chaos of first baths, and the 'poodle pile' naps that happen in our living room every single day.",
            highlights: ["Early socialization", "Household desensitization", "Hands-on care"],
            img: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=80&w=1200",
            buttonText: "Inquire Now",
            link: "/#contact",
            icon: <Home className="text-brand-blue-500" />
        },
        {
            title: "Happy Families",
            subtitle: "The Journey Continues",
            desc: "Our relationship with a puppy doesn't end at go-home day. This collection is a tribute to the families who have welcomed our fluffballs into their lives. From mountain hikes to birthday parties, see how our puppies grow up.",
            highlights: ["Owner updates", "Then & Now photos", "Life-long community"],
            img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1200",
            buttonText: "See Success Stories",
            link: "/#faqs",
            icon: <Users className="text-brand-pink-500" />
        }
    ];

    return (
        <div className="bg-white">
            {/* HEADER */}
            <section className="py-10 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div className="max-w-2xl">
                        <h1 className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight fr leading-none mb-4">
                            Our Visual <br /> <span className="text-gray-900">Collections</span>
                        </h1>
                        <p className="text-brand-blue-500 text-base md:text-lg pl-1 leading-normal">
                            A deep dive into the heart of our program. Explore our legacy, our environment, and the families who make this all possible.
                        </p>
                    </div>
                    <div className="h-24 w-[2px] bg-gradient-to-b from-brand-pink-500 to-transparent hidden lg:block"></div>
                </div>
            </section>

            {/* COLLECTION BLOCKS */}
            <section className="py-10 px-6">
                <div className="max-w-7xl mx-auto space-y-20">
                    {collections.map((item, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 group relative">
                                <div className="absolute -inset-4 bg-[#E2F1C4] rounded-[2rem] -z-10 group-hover:scale-105 transition-transform duration-700"></div>
                                <div className="overflow-hidden rounded-2xl shadow-md">
                                    <img
                                    loading='lazy'
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-[400px] object-cover"
                                    />
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-white shadow-sm rounded-xl">
                                        {item.icon}
                                    </div>
                                    <span className="text-brand-blue-500 font-semibold uppercase tracking-widest text-xs">Collection {idx + 1}</span>
                                </div>

                                <h2 className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text text-3xl md:text-4xl font-black uppercase tracking-tight fr mb-2">{item.title}</h2>
                                <h3 className="text-brand-pink-700 text-base md:text-lg font-bold italic mb-6">{item.subtitle}</h3>

                                <p className="text-brand-blue-500 leading-relaxed mb-8">
                                    {item.desc}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                                    {item.highlights.map((tag, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-brand-pink-500"></div>
                                            <span className="text-[10px] font-semibold fr uppercase tracking-widest text-gray-500">{tag}</span>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => navigate(item.link)}
                                    className="flex items-center gap-4 group/btn text-brand-pink-500 font-black text-xs uppercase tracking-widest"
                                >
                                    <span className="border-b-2 border-brandpink-500 pb-1 group-hover/btn:text-brand-pink-700 group-hover/btn:border-brand-pink-700 transition-all duration-300 cursor-pointer">
                                        {item.buttonText}
                                    </span>
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform duration-300 text-brand-pink-500" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER CTA */}
            <section className="py-10 px-6 max-w-7xl mx-auto">
                <div className="bg-gray-900 rounded-2xl px-8 py-10 md:p-20 text-center relative overflow-hidden">
                    {/* Decorative Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink-500 blur-[120px] opacity-20"></div>

                    <h2 className="text-white fr text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-8 relative z-10">
                        Have a question about <br /> our visual history?
                    </h2>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                        <button
                            onClick={() => navigate('/#contact')}
                            className="bg-brand-pink-500 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all duration-300 cursor-pointer shadow-md shadow-brand-pink-500/20"
                        >
                            Contact Breeder
                        </button>
                        <button
                            onClick={() => navigate('/available')}
                            className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-blue-500 hover:text-white transition-all duration-300 cursor-pointer shadow-md"
                        >
                            See Available Puppies
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GalleryHub;