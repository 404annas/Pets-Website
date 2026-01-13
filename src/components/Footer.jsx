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
        <footer className="bg-[#DCD7F8] text-white pt-10 pb-8 px-6 md:px-10">
            {/* Top Section: Grid Layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-10">

                {/* Column 1: Logo & Contact */}
                <div className="lg:col-span-1">
                    <div className="flex items-center gap-2 mb-2">
                        <h2 className="text-3xl font-bold tracking-tight text-[#3F3B57]">Pet Place</h2>
                    </div>
                    <p className="text-[10px] uppercase tracking-tight text-gray-600 font-bold mb-8">
                        Unleashing joy, one paw at a time
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="bg-[#3F3B57] p-2.5 rounded-full text-[#DCD7F8]">
                                <MapPin size={18} strokeWidth={3} />
                            </div>
                            <span className="text-gray-600">New York</span>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="bg-[#3F3B57] p-2.5 rounded-full text-[#DCD7F8]">
                                <Phone size={18} strokeWidth={3} />
                            </div>
                            <span className="text-gray-600">(012) 3456 7890</span>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="bg-[#3F3B57] p-2.5 rounded-full text-[#DCD7F8]">
                                <Mail size={18} strokeWidth={3} />
                            </div>
                            <span className="text-gray-600">hello@petplace.com</span>
                        </div>
                    </div>
                </div>

                {/* Column 2: Adopt */}
                <div>
                    <h3 className="text-xl text-[#3F3B57] font-bold mb-6">Adopt</h3>
                    <ul className="space-y-4 text-gray-600">
                        <li className="hover:text-gray-800 cursor-pointer transition-colors">Dogs & Puppies</li>
                        <li className="hover:text-gray-800 cursor-pointer transition-colors">Cats & Kittens</li>
                        <li className="hover:text-gray-800 cursor-pointer transition-colors">Adopt a Pet</li>
                        <li className="hover:text-gray-800 cursor-pointer transition-colors">Volunteer</li>
                        <li className="hover:text-gray-800 cursor-pointer transition-colors">Team</li>
                    </ul>
                </div>

                {/* Column 3: Navigation */}
                <div>
                    <h3 className="text-xl text-[#3F3B57] font-bold mb-6">Navigation</h3>
                    <ul className="space-y-4 text-gray-600">
                        <li className="hover:text-gray-800 cursor-pointer transition-colors">Job Positions</li>
                        <li className="hover:text-gray-800 cursor-pointer transition-colors">Events</li>
                        <li className="hover:text-gray-800 cursor-pointer transition-colors">About</li>
                        <li className="hover:text-gray-800 cursor-pointer transition-colors">Contact</li>
                        <li className="hover:text-gray-800 cursor-pointer transition-colors">Donation</li>
                    </ul>
                </div>

                {/* Column 4: Resources */}
                <div>
                    <h3 className="text-xl text-[#3F3B57] font-bold mb-6">Resources</h3>
                    <ul className="space-y-4 text-gray-600">
                        <li className="hover:text-gray-800 cursor-pointer transition-colors">Blog</li>
                        <li className="hover:text-gray-800 cursor-pointer transition-colors">Changelog</li>
                        <li className="hover:text-gray-800 cursor-pointer transition-colors">Licensing</li>
                        <li className="hover:text-gray-800 cursor-pointer transition-colors">Style Guide</li>
                        <li className="hover:text-gray-800 cursor-pointer transition-colors">Instructions</li>
                    </ul>
                </div>

                {/* Column 5: Follow & Donation */}
                <div>
                    <h3 className="text-xl text-[#3F3B57] font-bold mb-6">Follow Us</h3>
                    <div className="flex gap-3 mb-10">
                        <div className="bg-[#3F3B57] p-2 rounded-full text-[#DCD7F8] cursor-pointer hover:scale-110 transition-transform duration-300">
                            <Facebook size={18} fill="currentColor" />
                        </div>
                        <div className="bg-[#3F3B57] p-2 rounded-full text-[#DCD7F8] cursor-pointer hover:scale-110 transition-transform duration-300">
                            <Instagram size={18} />
                        </div>
                        <div className="bg-[#3F3B57] p-2 rounded-full text-[#DCD7F8] cursor-pointer hover:scale-110 transition-transform duration-300">
                            <Twitter size={18} fill="currentColor" />
                        </div>
                        <div className="bg-[#3F3B57] p-2 rounded-full text-[#DCD7F8] cursor-pointer hover:scale-110 transition-transform duration-300">
                            <Linkedin size={18} fill="currentColor" />
                        </div>
                    </div>

                    <button className="bg-[#3F3B57] text-white font-bold px-8 py-4 rounded-full hover:bg-[3F3B57] transition-all duration-300 shadow-sm transform hover:-translate-y-1 cursor-pointer">
                        Donate Today
                    </button>
                </div>
            </div>

            {/* Bottom Bar: Copyright & Links */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-gray-500/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                <p>2026 © Pet Place | All Rights Reserved</p>

                <div className="flex flex-wrap justify-center gap-6">
                    <span className="cursor-pointer">Developed by <a href="https://techxudo.com/   " target='_blank' className='text-gray-900'>Techxudo</a></span>
                    <span className="hover:text-gray-900 cursor-pointer underline transition-all duration-300">Privacy Policy</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;