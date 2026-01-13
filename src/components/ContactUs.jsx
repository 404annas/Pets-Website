import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import contactMain from "../assets/contactMain.webp";

const ContactUs = () => {
    const pillVariants = {
        initial: { width: 56 },
        hover: {
            width: "auto",
            transition: { duration: 0.3, ease: "easeOut" },
        },
    };

    return (
        <section className="bg-white py-10 px-4 overflow-hidden">
            {/* Header */}
            <div className="text-center max-w-5xl mx-auto mb-12">
                <p className="uppercase text-gray-400 font-medium tracking-widest text-xs mb-2">
                    Get in Touch
                </p>
                <h1 className="font-bold text-[#333333] text-3xl sm:text-4xl">
                    Make <span className="text-[#3F3B57]">Appointment</span>
                </h1>
                <p className="text-gray-500 mt-6 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                    porro veritatis reprehenderit error sit quod maxime.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
                {/* LEFT FORM */}
                <div className="w-full lg:w-1/2 border-2 border-[#3F3B57] rounded-[35px] sm:rounded-[45px] p-5 sm:p-8">
                    <div className="mb-6">
                        <p className="uppercase text-gray-400 font-medium tracking-widest text-xs mb-2">
                            Get in Touch
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#3F3B57]">
                            Appointment Form
                        </h2>
                    </div>

                    <form className="space-y-4">
                        {[
                            { label: "Name *", placeholder: "Enter your name", type: "text" },
                            {
                                label: "Email *",
                                placeholder: "Enter your email",
                                type: "email",
                            },
                        ].map((field) => (
                            <div key={field.label}>
                                <label className="text-sm font-semibold text-gray-600">
                                    {field.label}
                                </label>
                                <input
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#3F3B57]"
                                />
                            </div>
                        ))}

                        <div>
                            <label className="text-sm font-semibold text-gray-600">
                                I'm Interested In *
                            </label>
                            <div className="relative mt-2">
                                <select className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:border-[#3F3B57]">
                                    <option>Select a Choice...</option>
                                    <option>Adopt a Dog</option>
                                    <option>Adopt a Cat</option>
                                    <option>Volunteer</option>
                                </select>
                                <ChevronDown
                                    size={18}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-600">
                                Message
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Write your message"
                                className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-[#3F3B57]"
                            />
                        </div>

                        <button className="w-full mt-4 bg-[#3F3B57] hover:bg-[#2d2a41] text-white font-bold py-4 rounded-full transition-all">
                            Contact Us Now
                        </button>
                    </form>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full lg:w-1/2 relative flex justify-center">
                    <div className="absolute inset-0 bg-[#A3CF17]/10 blur-[120px] rounded-full -z-10" />

                    <div className="relative w-full max-w-[420px] sm:max-w-[500px]">
                        <img
                            src={contactMain}
                            alt="Contact"
                            className="w-full h-auto object-contain"
                        />

                        {/* Pills */}
                        {[
                            {
                                icon: <Mail size={22} />,
                                text: "hello@yoursite.com",
                                className:
                                    "top-[20%] left-10 -translate-x-1/2 sm:left-0 sm:translate-x-0",
                            },
                            {
                                icon: <MapPin size={22} />,
                                text: "123 Sample St, NY",
                                className:
                                    "top-[45%] right-10 translate-x-1/2 sm:right-0 sm:translate-x-0",
                            },
                            {
                                icon: <Phone size={22} />,
                                text: "+1 (555) 000-0000",
                                className:
                                    "bottom-[10%] left-25 -translate-x-1/2 sm:left-10",
                            },
                        ].map((pill, i) => (
                            <motion.div
                                key={i}
                                variants={pillVariants}
                                initial="initial"
                                whileHover="hover"
                                className={`absolute ${pill.className} flex items-center bg-[#3F3B57] rounded-full overflow-hidden shadow-lg h-12 cursor-pointer`}
                            >
                                <div className="min-w-[48px] h-12 flex items-center justify-center bg-white rounded-full m-0.5 border-4 border-[#3F3B57] text-[#3F3B57]">
                                    {pill.icon}
                                </div>
                                <span className="text-white font-semibold px-4 text-sm whitespace-nowrap">
                                    {pill.text}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
