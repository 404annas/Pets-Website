import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronRight, ChevronLeft, Check, Home, Heart, Dog,
    Calendar, Send, ShieldCheck, AlertOctagon, Info, MessageSquare, Plus, Minus,
    ShieldAlert
} from 'lucide-react';

const ApplicationPage = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '', email: '', phone: '',
        homeType: '', householdSize: '', hasOtherPets: '',
        experienceLevel: '', reasonForPoodle: '',
        poodlePreference: '', colorPreference: '',
        commitmentAgreement: false
    });

    // --- VALIDATION LOGIC ---
    const isStepValid = () => {
        switch (currentStep) {
            case 0: return formData.fullName && formData.email && formData.phone;
            case 1: return formData.homeType && formData.householdSize && formData.hasOtherPets;
            case 2: return formData.experienceLevel.length > 10 && formData.reasonForPoodle.length > 10;
            case 3: return formData.poodlePreference && formData.colorPreference;
            case 4: return formData.commitmentAgreement;
            default: return false;
        }
    };

    const handleNext = () => {
        if (isStepValid()) {
            setDirection(1);
            setCurrentStep(prev => prev + 1);
            window.scrollTo({ top: 200, behavior: 'smooth' });
        }
    };

    const handleBack = () => {
        setDirection(-1);
        setCurrentStep(prev => prev - 1);
    };

    // --- FAQ DATA ---
    const faqs = [
        { q: "Do I need experience to apply?", a: "Not at all. What matters is honesty, preparedness, and a desire to provide a loving home." },
        { q: "How long does a review take?", a: "We aim to respond within 24–48 hours, and we communicate clearly if anything delays that." },
        { q: "Is the deposit refundable?", a: "Deposits are non-refundable and applied toward the puppy price. This is standard in ethical breeding." },
        { q: "Can I change my mind after applying?", a: "Yes. You can contact us anytime and discuss your situation. We believe in open communication." },
        { q: "Can I choose my puppy’s gender or color?", a: "We will ask about your preferences, and when possible we work with families to align preferences with temperament and best fit, not just looks." }
    ];

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-white -mt-20 flex items-center justify-center p-6">
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-md">
                    <div className="w-20 h-20 bg-[#E9FBC8] rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check size={40} className="text-[#8ECC14]" />
                    </div>
                    <h2 className="text-3xl text-[#8ECC14] font-bold mb-4">Application Submitted!</h2>
                    <p className="text-gray-600">We will review your details personally within 24–48 hours. Keep an eye on your email.</p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen text-slate-900">

            {/* 1. HERO SECTION */}
            <section className="pt-10 pb-10 px-4 max-w-5xl mx-auto text-center">
                <span className="text-[#C6E589] font-bold tracking-widest uppercase text-xs">First Step</span>
                <h1 className="text-3xl md:text-4xl text-[#8ECC14] font-bold mt-4 mb-6">Puppy Application Process</h1>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Choosing a puppy is a big deal. This process is built on clarity and care, helping us match you with the Toy Poodle who fits your family best.
                </p>
            </section>

            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 pb-10">

                {/* 2. THE FORM (LEFT COLUMN) */}
                <div className="lg:col-span-7">
                    <div className="bg-slate-50 rounded-[2rem] p-4 md:p-8 shadow-sm border border-[#C6E589]">
                        {/* Progress Header */}
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <p className="text-[#8ECC14] font-bold text-sm uppercase">Step {currentStep + 1} of 5</p>
                                <h3 className="text-xl font-bold">
                                    {currentStep === 0 && "Basic Information"}
                                    {currentStep === 1 && "Home Environment"}
                                    {currentStep === 2 && "Care Experience"}
                                    {currentStep === 3 && "Puppy Preferences"}
                                    {currentStep === 4 && "Final Commitment"}
                                </h3>
                            </div>
                            <div className="flex gap-1">
                                {[0, 1, 2, 3, 4].map(i => (
                                    <div key={i} className={`h-1.5 w-8 rounded-full ${i <= currentStep ? 'bg-[#8ECC14]' : 'bg-slate-200'}`} />
                                ))}
                            </div>
                        </div>

                        <form onSubmit={(e) => e.preventDefault()} className="relative overflow-hidden">
                            <AnimatePresence mode="popLayout" custom={direction}>
                                <motion.div
                                    key={currentStep}
                                    initial={{ x: direction > 0 ? 30 : -30, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: direction < 0 ? 30 : -30, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    {/* STEP 0: BASICS */}
                                    {currentStep === 0 && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="md:col-span-2">
                                                <label className="text-xs font-bold uppercase text-[#8ECC14] mb-1 block">Full Name *</label>
                                                <input type="text" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-inset focus:ring-[#8ECC14] outline-none transition-all" value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} />
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold uppercase text-[#8ECC14] mb-1 block">Email Address *</label>
                                                <input type="email" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-inset focus:ring-[#8ECC14] outline-none transition-all" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold uppercase text-[#8ECC14] mb-1 block">Phone Number *</label>
                                                <input type="number" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-inset focus:ring-[#8ECC14] outline-none transition-all" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 1: HOME */}
                                    {currentStep === 1 && (
                                        <div className="space-y-4">
                                            <div>
                                                <label className="text-xs font-bold uppercase text-[#8ECC14] mb-2 block">Living Situation *</label>
                                                <div className="flex flex-wrap gap-2">
                                                    {['House', 'Apartment', 'Other'].map(v => (
                                                        <button key={v} type="button" onClick={() => setFormData({ ...formData, homeType: v })} className={`px-4 py-2 rounded-lg border transition-all cursor-pointer ${formData.homeType === v ? 'bg-[#8ECC14] border-[#8ECC14] text-white' : 'bg-white border-slate-200 hover:border-[#8ECC14]'}`}>{v}</button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold uppercase text-[#8ECC14] mb-1 block">Who lives in your household? *</label>
                                                <input type="text" placeholder="e.g. 2 adults, 1 child" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-inset focus:ring-[#8ECC14] outline-none transition-all" value={formData.householdSize} onChange={e => setFormData({ ...formData, householdSize: e.target.value })} />
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold uppercase text-[#8ECC14] mb-1 block">Other Pets? *</label>
                                                <input type="text" placeholder="Specify breed/age or 'None'" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-inset focus:ring-[#8ECC14] outline-none transition-all" value={formData.hasOtherPets} onChange={e => setFormData({ ...formData, hasOtherPets: e.target.value })} />
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 2: EXPERIENCE */}
                                    {currentStep === 2 && (
                                        <div className="space-y-4">
                                            <div>
                                                <label className="text-xs font-bold uppercase text-[#8ECC14] mb-1 block">Dog Experience (Min 10 chars) *</label>
                                                <textarea className="w-full p-3 rounded-xl border border-slate-200 min-h-[80px] focus:ring-2 focus:ring-inset focus:ring-[#8ECC14] outline-none resize-none transition-all" value={formData.experienceLevel} onChange={e => setFormData({ ...formData, experienceLevel: e.target.value })} />
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold uppercase text-[#8ECC14] mb-1 block">Reason for a Toy Poodle? *</label>
                                                <textarea className="w-full p-3 rounded-xl border border-slate-200 min-h-[80px] focus:ring-2 focus:ring-inset focus:ring-[#8ECC14] outline-none resize-none transition-all" value={formData.reasonForPoodle} onChange={e => setFormData({ ...formData, reasonForPoodle: e.target.value })} />
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 3: PREFERENCES */}
                                    {currentStep === 3 && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-xs font-bold uppercase text-[#8ECC14] mb-2 block">Sex Preference *</label>
                                                <select className="w-full p-3 rounded-xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-inset focus:ring-[#8ECC14] transition-all" value={formData.poodlePreference} onChange={e => setFormData({ ...formData, poodlePreference: e.target.value })}>
                                                    <option value="">Select...</option>
                                                    <option>Male</option><option>Female</option><option>No Preference</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold uppercase text-[#8ECC14] mb-2 block">Color Preference *</label>
                                                <select className="w-full p-3 rounded-xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-inset focus:ring-[#8ECC14] transition-all" value={formData.colorPreference} onChange={e => setFormData({ ...formData, colorPreference: e.target.value })}>
                                                    <option value="">Select...</option>
                                                    <option>Deep Red</option><option>Apricot</option><option>Any</option>
                                                </select>
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 4: COMMITMENT */}
                                    {currentStep === 4 && (
                                        <div className="bg-[#E9FBC8]/30 p-4 rounded-xl border border-[#C6E598]">
                                            <div className="flex gap-3">
                                                <input type="checkbox" className="mt-1 accent-[#8ECC14]" checked={formData.commitmentAgreement} onChange={e => setFormData({ ...formData, commitmentAgreement: e.target.checked })} />
                                                <label className="text-sm text-gray-700">I confirm that I am prepared for the 15+ year commitment, grooming costs, and socialization required for a Toy Poodle.</label>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            {/* NAV BUTTONS */}
                            <div className="mt-8 flex justify-between items-center border-t pt-6">
                                <button type="button" onClick={handleBack} className={`text-gray-400 hover:text-gray-800 transition-all duration-300 font-bold flex items-center gap-1 cursor-pointer ${currentStep === 0 ? 'invisible' : 'visible'}`}><ChevronLeft size={18} /> Back</button>

                                {currentStep === 4 ? (
                                    <button type="button" disabled={!isStepValid()} onClick={() => setIsSubmitted(true)} className="bg-[#8ECC14] text-white px-8 py-3 rounded-xl font-bold disabled:opacity-30 flex items-center cursor-pointer hover:scale-95 transition-all duration-300 gap-2">Submit Application <Send size={18} /></button>
                                ) : (
                                    <button type="button" disabled={!isStepValid()} onClick={handleNext} className="bg-[#8ECC14] cursor-pointer hover:scale-95 transition-all duration-300 text-white px-8 py-3 rounded-xl font-bold disabled:opacity-30 disabled:hover:cursor-not-allowed flex items-center gap-2">Next Step <ChevronRight size={18} /></button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>

                {/* 3. HOW IT WORKS (RIGHT COLUMN) */}
                <div className="lg:col-span-5 space-y-10">
                    <div>
                        <h2 className="text-2xl font-extrabold mb-6">How it works</h2>
                        <div className="space-y-6">
                            {[
                                { s: "1", t: "Application", d: "Online form about your lifestyle and home environment." },
                                { s: "2", t: "Review", d: "Personal review within 24-48 hours via conversation." },
                                { s: "3", t: "Reservation", d: "Secure your spot with a non-refundable deposit." },
                                { s: "4", t: "Growth", d: "Weekly photos and temperament updates as they grow." },
                                { s: "5", t: "Go-Home", d: "Handoff with full health records and care guide." }
                            ].map(item => (
                                <div key={item.s} className="flex gap-4">
                                    <span className="w-8 h-8 rounded-full bg-[#C6E5A8] flex items-center justify-center font-bold text-xs flex-shrink-0 text-[#5f8a0b]">{item.s}</span>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase text-[#8ECC14] tracking-tight">{item.t}</h4>
                                        <p className="text-gray-500 text-sm">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Red Flags / Scam Warning */}
                </div>
            </div>

            <div className="bg-red-50 p-6 rounded-2xl max-w-4xl mx-auto mb-10 border border-red-100">
                <div className="flex items-center gap-2 text-red-600 mb-3">
                    <AlertOctagon size={20} />
                    <h4 className="font-bold text-3xl">Scam Alert</h4>
                </div>
                <p className="text-base text-red-800/80 leading-relaxed mb-4">Beware of breeders or advertisements who pressure immediate payment, refuse health testing, or use stock photos.</p>
                <ul className="text-sm space-y-2 text-red-700 font-medium">
                    <li className='flex items-center gap-2'><ShieldAlert size={20} /> Pressure you to send payment immediately</li>
                    <li className='flex items-center gap-2'><ShieldAlert size={20} /> Refuse to answer questions about health testing</li>
                    <li className='flex items-center gap-2'><ShieldAlert size={20} /> Use stock photos without breeder credentials</li>
                    <li className='flex items-center gap-2'><ShieldAlert size={20} /> Do not provide a clear application and screening process</li>
                </ul>
            </div>

            {/* 4. FAQ SECTION (FULL WIDTH) */}
            <section className="bg-slate-50 py-10 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <MessageSquare className="mx-auto text-[#8ECC14] mb-4" size={32} />
                        <h2 className="text-3xl md:text-4xl text-[#8ECC14] font-extrabold">Common Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} title={faq.q} content={faq.a} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white rounded-2xl border border-[#C6E5A8] overflow-hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full p-5 flex justify-between items-center text-left font-bold transition-all duration-300 text-[#8ECC14] hover:bg-[#e7fcd2] cursor-pointer">
                {title}
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                        <p className="p-5 pt-4 text-gray-500 text-sm leading-relaxed border-t border-slate-50">{content}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ApplicationPage;