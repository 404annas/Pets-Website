import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, ChevronDown, LoaderCircle } from "lucide-react";
import contactMain from "../assets/poodle11.jfif";

const ContactUs = () => {
    const initialFormData = {
        name: "",
        email: "",
        inquiryType: "",
        message: "",
    };

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [activePill, setActivePill] = useState(null);
    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState({
        type: "",
        text: "",
    });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1023px)");
        const updateScreenSize = () => {
            const small = mediaQuery.matches;
            setIsSmallScreen(small);
            if (!small) {
                setActivePill(null);
            }
        };

        updateScreenSize();
        mediaQuery.addEventListener("change", updateScreenSize);

        return () => mediaQuery.removeEventListener("change", updateScreenSize);
    }, []);

    useEffect(() => {
        if (submitMessage.type !== "success") {
            return undefined;
        }

        const timeoutId = window.setTimeout(() => {
            setSubmitMessage({ type: "", text: "" });
        }, 3000);

        return () => window.clearTimeout(timeoutId);
    }, [submitMessage]);

    const pillVariants = {
        initial: { width: 56 },
        hover: {
            width: "auto",
            transition: { duration: 0.3, ease: "easeOut" },
        },
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitMessage({ type: "", text: "" });

        if (!serviceId || !templateId || !publicKey) {
            setSubmitMessage({
                type: "error",
                text: "Email service is not configured yet. Please add the EmailJS environment values.",
            });
            return;
        }

        setIsSubmitting(true);

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: formData.name,
                    email: formData.email,
                    inquiry_type: formData.inquiryType,
                    message: formData.message,
                },
                publicKey
            );

            setFormData(initialFormData);
            setSubmitMessage({
                type: "success",
                text: "We have received your inquiry and will get back to you soon.",
            });
        } catch (error) {
            setSubmitMessage({
                type: "error",
                text: "Something went wrong while sending your inquiry. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
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

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {[
                            {
                                label: "Name *",
                                placeholder: "Enter your name",
                                type: "text",
                                name: "name",
                            },
                            {
                                label: "Email *",
                                placeholder: "Enter your email",
                                type: "email",
                                name: "email",
                            },
                        ].map((field) => (
                            <div key={field.label}>
                                <label className="text-sm font-semibold text-pink-600">
                                    {field.label}
                                </label>
                                <input
                                    name={field.name}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-pink-500"
                                />
                            </div>
                        ))}

                        <div>
                            <label className="text-sm font-semibold text-pink-600">
                                Nature of Inquiry *
                            </label>
                            <div className="relative mt-2">
                                <select
                                    name="inquiryType"
                                    value={formData.inquiryType}
                                    onChange={handleChange}
                                    required
                                    className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:border-pink-500 text-gray-700"
                                >
                                    <option value="" disabled>Select Inquiry Type...</option>

                                    <optgroup label="New Puppy Inquiry">
                                        <option value="Toy Poodle (Red/Apricot)">Toy Poodle (Red/Apricot)</option>
                                        <option value="Join the Waiting List">Join the Waiting List</option>
                                        <option value="Service/Therapy Potential">Service/Therapy Potential</option>
                                    </optgroup>

                                    <optgroup label="Specific Pairings / Archive">
                                        <option value="Ruby x Jasper Line">Ruby x Jasper Line</option>
                                        <option value="Bella x Winston Line">Bella x Winston Line</option>
                                        <option value="Penny x Oliver Line">Penny x Oliver Line</option>
                                        <option value="Daisy x Max Line">Daisy x Max Line</option>
                                    </optgroup>

                                    <optgroup label="Health & Contract">
                                        <option value="Health Guarantee Questions">Health Guarantee Questions</option>
                                        <option value="Contract Review">Contract Review</option>
                                    </optgroup>

                                    <optgroup label="Other">
                                        <option value="General Question">General Question</option>
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
                                name="message"
                                rows={4}
                                placeholder="Write your message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-pink-500"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full mt-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-full transition-all cursor-pointer duration-300 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <LoaderCircle size={20} className="animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                "Send Inquiry"
                            )}
                        </button>

                        {submitMessage.text && (
                            <p
                                className={`text-sm font-medium ${
                                    submitMessage.type === "success"
                                        ? "text-green-600"
                                        : "text-red-500"
                                }`}
                            >
                                {submitMessage.text}
                            </p>
                        )}
                    </form>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full lg:w-1/2 relative flex justify-center">
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
                                text: "info@usapoodles.com",
                                className:
                                    "top-[20%] left-30 sm:left-10 -translate-x-1/2 sm:left-0 sm:translate-x-0",
                            },
                            {
                                icon: <MapPin size={22} />,
                                text: "CENTRAL COAST, CALIFORNIA",
                                className:
                                    "top-[55%] sm:top-[45%] right-23 sm:right-10 translate-x-1/2 sm:right-0 sm:translate-x-0",
                            },
                            {
                                icon: <Phone size={22} />,
                                text: "(805) 888-0133",
                                className:
                                    "bottom-[10%] left-25 -translate-x-1/2 sm:left-10",
                            },
                        ].map((pill, i) => (
                            <motion.div
                                key={i}
                                variants={pillVariants}
                                initial="initial"
                                animate={isSmallScreen && activePill === i ? "hover" : "initial"}
                                whileHover={!isSmallScreen ? "hover" : undefined}
                                onClick={() =>
                                    isSmallScreen &&
                                    setActivePill((current) => (current === i ? null : i))
                                }
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
