import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, FileText, AlertTriangle, ShieldAlert } from 'lucide-react';

const faqData = {
    "Availability and Process": [
        { q: "Do you always have puppies available?", a: "Not always. Responsible breeding takes time, planning, and respect for each dog’s health. Puppies are posted on our Available Puppies page when they are old enough to be assessed and meet health checkpoints." },
        { q: "How does your waitlist work?", a: "If no puppies are currently available, you can join our waitlist. We notify people on the list about upcoming litters and expected timelines so you never miss a chance, and we can match puppies thoughtfully rather than rushing placements." },
        { q: "Can I reserve a puppy before it is born?", a: "Yes. Once a litter is planned and confirmed, we share expected birth and go-home dates and allow reservations through our application process." }
    ],
    "Breed Specifics": [
        { q: "Will my red Poodle stay red?", a: "Red is a complex expression within the Toy Poodle coat family. Some puppies hold deep red into adulthood and others lighten slightly. Both are normal, and we communicate color expectations honestly based on line history and experience." },
        { q: "Are Toy Poodles good with children?", a: "Yes, when early socialization and gentle introductions are provided. Because Toy Poodles are small, supervised interaction helps protect both the puppy and young children." },
        { q: "Do Toy Poodles shed?", a: "Toy Poodles have a curly coat with minimal shedding, which many people find easier on allergies. Regular grooming is part of maintaining coat health." }
    ],
    "Health & Testing": [
        { q: "What health testing do you do on parents?", a: "We perform all recommended breed health tests for Toy Poodles, including core eye exams, DNA testing, and joint evaluations. We are happy to share documentation and results openly before placement." },
        { q: "Do puppies come with a health guarantee?", a: "Yes. Every puppy leaves with a written health guarantee and contract that explains coverage, how to activate it, and what is included. We encourage early veterinary checks to support that guarantee." },
        { q: "Do you provide vaccination and vet records?", a: "Yes. Every puppy includes a health record showing vaccines, deworming, microchip information, and recommended next steps for care." }
    ],
    "Visiting & Pickup": [
        { q: "Can I visit the puppies in person?", a: "We arrange visits thoughtfully so the environment stays calm and comfortable for the mom and puppies. We believe meetings should feel natural and positive, not rushed." },
        { q: "Can I meet the parents?", a: "Yes. The dam and well-behaved sires are shown to prospective families. Seeing parents helps you understand possible adult size, structure, and temperament, all important factors in your decision." },
        { q: "What if I live far away?", a: "We help families with trusted transport planning and guidance, prioritizing what is safest for the puppy. Details are shared once a reservation is secured." }
    ],
    "Training and Early Life": [
        { q: "Do you start training before puppies go home?", a: "Yes. We begin gentle handling, early social interaction, and exposure to normal home sounds so puppies grow confident and learn positively from the start." },
        { q: "When can puppies go home?", a: "Puppies are placed at the appropriate age where they are healthy, social, and developmentally ready to transition — we never rush this. The usual go-home window is listed on the Available Puppies page." }
    ],
    "Caring for Your Toy Poodle": [
        { q: "What grooming will my Toy Poodle need?", a: "Toy Poodles have a professional grooming life ahead of them. Regular brushing and professional grooming sessions keep the coat healthy and prevent matting. We provide grooming introduction tips and tools to help you feel confident." },
        { q: "How much exercise do they need?", a: "Toy Poodles enjoy walks, play sessions, and mental engagement. They adapt well to both active and quieter homes as long as they get daily attention and stimulation." }
    ],
    "Common Family Concerns": [
        { q: "Are males and females different in temperament?", a: "Both are affectionate and playful. Individual personality often shines brighter than gender alone. We observe puppies and share temperament notes to help guide your choice." },
        { q: "What should I ask a breeder before choosing a puppy?", a: "Good questions include imprint and temperament practices, health testing details, how often the dam has birthed litters, socialization routines, and pedigree history. Responsible breeders welcome these conversations." },
        {
            q: "What red flags should I watch for?",
            a: `Be cautious if:
• Puppies are always available with no waitlist
• The breeder avoids health testing transparency
• Communication feels rushed or defensive
• “Teacup” or similar labels are used as marketing ploys rather than breed standards

These are common markers breeders and breed club guides suggest you avoid.`
        }
    ]
};

const FAQSection = () => {
    const [activeTab, setActiveTab] = useState("Availability and Process");
    const [openIndex, setOpenIndex] = useState(null);

    // Helper to turn bullet strings into Icon rows
    const formatAnswer = (text) => {
        if (!text.includes('•')) return text;

        return text.split('\n').map((line, i) => {
            if (line.trim().startsWith('•')) {
                return (
                    <div key={i} className="flex items-start gap-3 my-2 group/item">
                        <ShieldAlert size={18} className="text-[#8ECC14] mt-1 flex-shrink-0 transition-transform group-hover/item:scale-110" />
                        <span className="text-gray-700">{line.replace('•', '').trim()}</span>
                    </div>
                );
            }
            return <div key={i} className={line.trim() === "" ? "h-2" : ""}>{line}</div>;
        });
    };

    return (
        <div id='faqs' className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">

                {/* Header Section */}
                <header className="text-center mb-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[#C6E598] font-medium tracking-wider uppercase text-sm"
                    >
                        Resources & Guidance
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-3xl md:text-4xl font-bold text-[#8ECC14] tracking-tight"
                    >
                        Frequently Asked Questions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        We get a lot of questions, and we think that’s a great thing. Curious or careful, both show you care about doing this right. Many of the answers below are based on real questions families have asked over time.
                    </motion.p>
                </header>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {Object.keys(faqData).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => { setActiveTab(tab); setOpenIndex(null); }}
                            className={`px-5 py-2.5 rounded-full text-sm cursor-pointer font-medium transition-all duration-300 shadow-sm ${activeTab === tab
                                ? 'bg-white text-[#8ECC14] shadow-md ring-1 ring-[#C6E598]'
                                : 'bg-transparent text-gray-500 hover:bg-gray-100'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Accordion Container */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#C6E598]">
                    <div className="divide-y divide-slate-100">
                        {faqData[activeTab].map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={index} className="group">
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full px-8 py-7 flex justify-between items-center text-left transition-colors hover:bg-[#ebf8d3] cursor-pointer"
                                    >
                                        <span className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-[#8ECC14]' : 'text-slate-800'}`}>
                                            {item.q}
                                        </span>
                                        <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-[#C6E598] text-[#73a312] rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                                            {isOpen ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            >
                                                <div className="px-8 pb-8 text-gray-600 leading-relaxed text-base border-t border-slate-50 pt-4 whitespace-pre-line">
                                                    {formatAnswer(item.a)}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Still Have Questions? Section */}
                <div className="mt-10 bg-[#E9FBC8] rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden text-center">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#8ECC14] mb-4">Still Have Questions?</h2>
                        <p className="text-gray-700 max-w-xl mx-auto mb-10 text-base md:text-lg">
                            No problem. We are here to help and want you to feel confident and informed. Reach out if you want more detail on any topic.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold transition-all duration-300 cursor-pointer shadow-sm hover:translate-y-[-2px]">
                                <MessageCircle size={20} />
                                Contact Us
                            </button>
                            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="flex items-center gap-2 px-8 py-4 bg-[#8ECC14] text-white rounded-2xl font-bold transition-all duration-300 shadow-sm cursor-pointer hover:translate-y-[-2px]">
                                <FileText size={20} />
                                Start Your Puppy Application
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;