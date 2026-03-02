import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import contactMain from "../assets/contactMain.svg";

const ContactUs = () => {
    const pillVariants = {
        initial: { width: 56 },
        hover: {
            width: "auto",
            transition: { duration: 0.3, ease: "easeOut" },
        },
    };

    return (
        <section id="contact" className="bg-white py-10 px-4 overflow-hidden">
            {/* Header */}
            <div className="text-center max-w-5xl mx-auto mb-12">
                <p className="uppercase text-pink-700 font-medium tracking-widest text-xs mb-2">
                    Contact Breeder
                </p>
                <h1 className="font-bold fr text-[#333333] text-3xl sm:text-4xl">
                    Reserve Your <span className="text-transparent bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text">Poodle Puppy</span>
                </h1>
                <p className="text-blue-500 mt-6 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
                    Interested in a Toy, Miniature, or Standard Poodle?
                    Contact us to check availability, pricing, and delivery across the USA.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
                {/* LEFT FORM */}
                <div className="w-full lg:w-1/2 border-2 border-blue-500 rounded-[35px] sm:rounded-[45px] p-6 sm:p-8">
                    <div className="mb-6">
                        <p className="uppercase text-blue-400 font-medium tracking-widest text-xs mb-2">
                            Inquiry Form
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text">
                            Poodle Reservation
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
                                <label className="text-sm font-semibold text-pink-600">
                                    {field.label}
                                </label>
                                <input
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-pink-500"
                                />
                            </div>
                        ))}

                        <div>
                            <label className="text-sm font-semibold text-pink-600">
                                Nature of Inquiry *
                            </label>
                            <div className="relative mt-2">
                                <select className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:border-pink-500 text-gray-700">
                                    <option value="" disabled selected>Select Inquiry Type...</option>

                                    <optgroup label="New Puppy Inquiry">
                                        <option>Toy Poodle (Red/Apricot)</option>
                                        <option>Join the Waiting List</option>
                                        <option>Service/Therapy Potential</option>
                                    </optgroup>

                                    <optgroup label="Specific Pairings / Archive">
                                        <option>Ruby x Jasper Line</option>
                                        <option>Bella x Winston Line</option>
                                        <option>Penny x Oliver Line</option>
                                        <option>Daisy x Max Line</option>
                                    </optgroup>

                                    <optgroup label="Health & Contract">
                                        <option>Health Guarantee Questions</option>
                                        <option>Contract Review</option>
                                    </optgroup>

                                    <optgroup label="Other">
                                        <option>General Question</option>
                                    </optgroup>
                                </select>
                                <ChevronDown
                                    size={18}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400 pointer-events-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-pink-600">
                                Message
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Write your message"
                                className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-pink-500"
                            />
                        </div>

                        <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-full transition-all cursor-pointer duration-300 shadow-lg shadow-blue-500/20">
                            Send Inquiry
                        </button>
                    </form>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full lg:w-1/2 -mt-20 md:-mt-40 relative flex justify-center">
                    {/* <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full -z-10" /> */}

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
                                className={`absolute ${pill.className} flex items-center bg-blue-500 rounded-full overflow-hidden shadow-lg h-12 cursor-pointer`}
                            >
                                <div className="min-w-[48px] h-12 flex items-center justify-center bg-white rounded-full m-0.5 border-4 border-blue-500 text-blue-500">
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