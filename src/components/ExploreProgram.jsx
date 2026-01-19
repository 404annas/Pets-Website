import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, HeartPulse, FileEdit, ArrowUpRight, UsersRound } from 'lucide-react';

const ExploreProgram = () => {
    const navigate = useNavigate();

    const links = [
        {
            t: "About The Poodles",
            d: "Who we are, how we got here, and why we do this.",
            link: "/about",
            icon: <UsersRound size={24} />,
            color: "bg-white"
        },
        {
            t: "Breeding Program",
            d: "How we select parents, plan litters, and raise puppies.",
            link: "/breed-program",
            icon: <HeartPulse size={24} />,
            color: "bg-[#E2F1C4]/40"
        },
        {
            t: "Health Guarantee",
            d: "Clear, honest commitments to your puppy’s wellbeing.",
            link: "/health-contract",
            icon: <ShieldCheck size={24} />,
            color: "bg-white"
        },
        {
            t: "Puppy Application",
            d: "A thoughtful process to ensure the best possible matches.",
            link: "/application",
            icon: <FileEdit size={24} />,
            color: "bg-[#8ECC14] text-white"
        }
    ];

    return (
        <section className="py-10 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-gray-500 font-semibold uppercase text-xs tracking-widest mb-4">
                            Explore Our Program
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none">
                            Not sure <br /> <span className="text-[#8ECC14]">where to start?</span>
                        </h3>
                    </div>
                    <p className="text-gray-500 max-w-xs text-sm md:text-base">
                        These pages answer the questions we hear most often and provide a deep dive into our daily operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {links.map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -12 }}
                            onClick={() => navigate(item.link)}
                            className={`${item.color} px-6 py-8 md:p-10 rounded-[3rem] border border-[#C6E589] flex flex-col justify-between h-[380px] cursor-pointer group shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden`}
                        >
                            {/* Decorative Background Number */}
                            <span className={`absolute -right-3 -bottom-6 text-9xl font-black opacity-5 pointer-events-none select-none ${i === 3 ? 'text-white' : 'text-gray-900'}`}>
                                0{i + 1}
                            </span>

                            <div className="relative z-10">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-transform duration-300 group-hover:scale-110 ${i === 3 ? 'bg-white text-[#8ECC14]' : 'bg-white text-[#8ECC14]'}`}>
                                    {item.icon}
                                </div>

                                <h3 className={`text-2xl font-black uppercase tracking-tighter mb-4 leading-tight`}>
                                    {item.t}
                                </h3>

                                <p className={`text-sm leading-relaxed ${i === 3 ? 'text-white/80' : 'text-gray-500'}`}>
                                    {item.d}
                                </p>
                            </div>

                            <div className="relative z-10 flex items-center gap-2 mt-8">
                                <span className={`text-[10px] font-black uppercase tracking-widest ${i === 3 ? 'text-white' : 'text-[#8ECC14]'}`}>
                                    View Details
                                </span>
                                <div className={`p-2 rounded-full transition-all duration-300 ${i === 3 ? 'bg-white text-[#8ECC14]' : 'bg-[#E2F1C4] text-[#8ECC14] group-hover:bg-[#8ECC14] group-hover:text-white'}`}>
                                    <ArrowUpRight size={14} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom decorative line */}
                <div className="mt-10 flex items-center gap-4">
                    <div className="h-px flex-grow bg-gray-100"></div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#8ECC14]">
                        Transparency • Trust • Lineage
                    </p>
                    <div className="h-px flex-grow bg-gray-100"></div>
                </div>
            </div>
        </section>
    );
};

export default ExploreProgram;