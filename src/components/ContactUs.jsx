import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, PawPrint, ChevronDown } from 'lucide-react';
import contactMain from "../assets/contactMain.webp";

const ContactUs = () => {
    // Animation variant for expanding pills
    const pillVariants = {
        initial: { width: "56px" },
        hover: {
            width: "auto",
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    return (
        <div className="bg-white py-10 flex flex-col items-center px-4 overflow-hidden">
            {/* Header Section */}
            <div className="text-center max-w-5xl mb-10">
                <p className="uppercase text-gray-400 font-medium tracking-widest pb-2 text-xs">Get in Touch</p>
                <h1 className="font-bold text-[#333333] text-4xl">
                    Make <span className="text-[#3F3B57]">Appointment</span>
                </h1>
                <p className="text-gray-500 max-w-3xl mx-auto mt-6 leading-relaxed">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod placeat error laboriosam.
                    Temporibus porro veritatis reprehenderit error sit quod maxime.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl w-full">

                {/* LEFT SIDE: Appointment Form */}
                <div className="w-full lg:w-[50%] border-2 border-[#3F3B57] rounded-[45px] p-4 sm:p-6 md:p-8 shadow-sm">
                    <div className="mb-8">
                        <p className="uppercase text-gray-400 font-medium tracking-widest text-xs mb-2">GET IN TOUCH</p>
                        <h2 className="text-3xl font-bold text-[#3F3B57]">Appointment Form</h2>
                    </div>

                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-600">Name *</label>
                            <input
                                type="text"
                                placeholder="e.g. Enter your first name"
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#3F3B57] transition-colors placeholder:text-gray-300"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-600">Email *</label>
                            <input
                                type="email"
                                placeholder="e.g. Enter your best email"
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#3F3B57] transition-colors placeholder:text-gray-300"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-600">I'm Interested In *</label>
                            <div className="relative">
                                <select className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#3F3B57] transition-colors bg-white cursor-pointer">
                                    <option>Select a Choice...</option>
                                    <option>Adopt a Dog</option>
                                    <option>Adopt a Cat</option>
                                    <option>Volunteer</option>
                                    <option>Job Position</option>
                                    <option>Other</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-600">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Write your message"
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#3F3B57] transition-colors placeholder:text-gray-300 resize-none"
                            ></textarea>
                        </div>

                        <div className="flex items-center gap-3 py-2">
                            <input type="checkbox" id="privacy" className="w-4 h-4 accent-[#3F3B57]" />
                            <label htmlFor="privacy" className="text-sm text-gray-600">
                                I accept the Website <a href="#" className="text-[#3F3B57] underline underline-offset-2">Privacy Policy</a>
                            </label>
                        </div>

                        <button className="w-full bg-[#3F3B57] hover:bg-[#2d2a41] text-white font-bold py-4 rounded-full transition-all duration-300 cursor-pointer shadow-sm transform hover:-translate-y-1 mt-4">
                            Contact Us Now
                        </button>
                    </form>
                </div>

                {/* RIGHT SIDE: Interactive Image */}
                <div className="w-full lg:w-[55%] relative flex justify-center items-center">
                    {/* Background Decorative Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#A3CF17]/5 blur-[100px] rounded-full -z-10"></div>

                    <div className="relative">
                        {/* Main Image */}
                        <img
                            loading="lazy"
                            className="w-[550px] h-auto object-cover"
                            src={contactMain}
                            alt="Woman with Dog"
                        />

                        {/* Email Pill */}
                        <motion.div
                            initial="initial"
                            whileHover="hover"
                            variants={pillVariants}
                            className="absolute top-[40%] left-20 flex items-center bg-[#3F3B57] rounded-full overflow-hidden shadow-lg cursor-pointer h-14"
                        >
                            <div className="min-w-[56px] h-14 flex items-center justify-center bg-white rounded-full m-0.5 border-4 border-[#3F3B57]">
                                <Mail className="text-[#3F3B57]" size={22} />
                            </div>
                            <span className="text-white font-bold px-6 whitespace-nowrap">hello@yoursite.com</span>
                        </motion.div>

                        {/* Location Pill */}
                        <motion.div
                            initial="initial"
                            whileHover="hover"
                            variants={pillVariants}
                            className="absolute top-[55%] right-35 flex items-center bg-[#3F3B57] rounded-full overflow-hidden shadow-lg cursor-pointer h-14"
                        >
                            <div className="min-w-[56px] h-14 flex items-center justify-center bg-white rounded-full m-0.5 border-4 border-[#3F3B57]">
                                <MapPin className="text-[#3F3B57]" size={22} />
                            </div>
                            <span className="text-white font-bold px-6 whitespace-nowrap">123 Sample St, New York</span>
                        </motion.div>

                        {/* Phone Pill */}
                        <motion.div
                            initial="initial"
                            whileHover="hover"
                            variants={pillVariants}
                            className="absolute bottom-[20%] left-40 flex items-center bg-[#3F3B57] rounded-full overflow-hidden shadow-lg cursor-pointer h-14"
                        >
                            <div className="min-w-[56px] h-14 flex items-center justify-center bg-white rounded-full m-0.5 border-4 border-[#3F3B57]">
                                <Phone className="text-[#3F3B57]" size={22} />
                            </div>
                            <span className="text-white font-bold px-6 whitespace-nowrap">+1 (555) 000-0000</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;