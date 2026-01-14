import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Twitter,
    Linkedin
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#C6E589] text-white pt-10 pb-8 px-6 md:px-10">
            {/* Top Section: Grid Layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">

                {/* Column 1: Logo & Contact */}
                <div className="lg:col-span-1">
                    <div className="flex items-center gap-2 mb-2">
                        <h2 className="text-3xl font-bold font-serif tracking-tight text-[#6fa00e]">Poodles Place.</h2>
                    </div>
                    <p className="text-[10px] uppercase tracking-tight text-gray-600 font-bold mb-8">
                        Premium Poodles Across the USA
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="bg-[#6fa00e] p-2.5 rounded-full text-[#C6E589]">
                                <MapPin size={18} strokeWidth={3} />
                            </div>
                            <span className="text-gray-600">United States</span>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="bg-[#6fa00e] p-2.5 rounded-full text-[#C6E589]">
                                <Phone size={18} strokeWidth={3} />
                            </div>
                            <span className="text-gray-600">+1 (800) 555-POOD</span>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="bg-[#6fa00e] p-2.5 rounded-full text-[#C6E589]">
                                <Mail size={18} strokeWidth={3} />
                            </div>
                            <span className="text-gray-600">info@poodleplace.com</span>
                        </div>
                    </div>
                </div>

                {/* Column 2: Adopt */}
                <div>
                    <h3 className="text-xl text-[#6fa00e] font-bold mb-6">
                        Our Poodles
                    </h3>
                    <ul className="space-y-4 text-gray-600">
                        <li className="hover:text-gray-800 cursor-pointer">Toy Poodles</li>
                        <li className="hover:text-gray-800 cursor-pointer">Miniature Poodles</li>
                        <li className="hover:text-gray-800 cursor-pointer">Standard Poodles</li>
                        <li className="hover:text-gray-800 cursor-pointer">Available Poodles</li>
                    </ul>
                </div>

                {/* Column 3: Navigation */}
                <div>
                    <h3 className="text-xl text-[#6fa00e] font-bold mb-6">
                        Quick Links
                    </h3>
                    <ul className="space-y-4 text-gray-600">
                        <p className='hover:text-gray-800 cursor-pointer' onClick={() => document.getElementById("choose")?.scrollIntoView({ behavior: "smooth" })}>
                            Choose
                        </p>
                        <p className='hover:text-gray-800 cursor-pointer' onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
                            Services
                        </p>
                        <li className="hover:text-gray-800 cursor-pointer">Store</li>
                        <li className="hover:text-gray-800 cursor-pointer">Pricing</li>
                        <p className='hover:text-gray-800 cursor-pointer' onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                            Contact
                        </p>
                    </ul>
                </div>

                {/* Column 4: Resources */}
                {/* <div>
                    <h3 className="text-xl text-[#6fa00e] font-bold mb-6">Resources</h3>
                    <ul className="space-y-4 text-gray-600">
                        <li className="hover:text-gray-800 cursor-pointer transition-colors">Blog</li>
                        <li className="hover:text-gray-800 cursor-pointer transition-colors">Changelog</li>
                        <li className="hover:text-gray-800 cursor-pointer transition-colors">Licensing</li>
                        <li className="hover:text-gray-800 cursor-pointer transition-colors">Style Guide</li>
                        <li className="hover:text-gray-800 cursor-pointer transition-colors">Instructions</li>
                    </ul>
                </div> */}

                {/* Column 5: Follow & Donation */}
                <div>
                    <h3 className="text-xl text-[#6fa00e] font-bold mb-6">Follow Us</h3>
                    <div className="flex gap-3 mb-10">
                        <div className="bg-[#6fa00e] p-2 rounded-full text-[#C6E589] cursor-pointer hover:scale-110 transition-transform duration-300">
                            <Facebook size={18} fill="currentColor" />
                        </div>
                        <div className="bg-[#6fa00e] p-2 rounded-full text-[#C6E589] cursor-pointer hover:scale-110 transition-transform duration-300">
                            <Instagram size={18} />
                        </div>
                        <div className="bg-[#6fa00e] p-2 rounded-full text-[#C6E589] cursor-pointer hover:scale-110 transition-transform duration-300">
                            <Twitter size={18} fill="currentColor" />
                        </div>
                        <div className="bg-[#6fa00e] p-2 rounded-full text-[#C6E589] cursor-pointer hover:scale-110 transition-transform duration-300">
                            <Linkedin size={18} fill="currentColor" />
                        </div>
                    </div>

                    <button className="bg-[#6fa00e] text-white font-bold px-8 py-4 rounded-full hover:bg-[3F3B57] transition-all duration-300 shadow-sm transform hover:-translate-y-1 cursor-pointer">
                        Donate Today
                    </button>
                </div>
            </div>

            {/* Bottom Bar: Copyright & Links */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-gray-500/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                <p>2026 © Poodles Place | All Rights Reserved</p>

                <div className="flex flex-wrap justify-center gap-6">
                    <span className="cursor-pointer">Developed by <a href="https://techxudo.com/   " target='_blank' className='text-gray-900'>Techxudo</a></span>
                    <span className="hover:text-gray-900 cursor-pointer underline transition-all duration-300">Privacy Policy</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;