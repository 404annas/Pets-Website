import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Twitter,
    Linkedin
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-pink-100 text-white pt-10 pb-8 px-6 md:px-10">
            {/* Top Section: Grid Layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">

                {/* Column 1: Logo & Contact */}
                <div className="lg:col-span-1">
                    <div className="flex items-center gap-2 mb-2">
                        <h2 className="text-3xl font-bold font-serif tracking-tight text-transparent bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text">USA Poodles</h2>
                    </div>
                    <p className="text-[10px] uppercase tracking-tight text-blue-600 font-bold mb-8">
                        Premium Poodles Across the USA
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="bg-pink-700 p-2.5 rounded-full text-pink-300">
                                <MapPin size={18} strokeWidth={3} />
                            </div>
                            <span className="text-gray-600">United States</span>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="bg-pink-700 p-2.5 rounded-full text-pink-300">
                                <Phone size={18} strokeWidth={3} />
                            </div>
                            <span className="text-gray-600">+1 (800) 555-POOD</span>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="bg-pink-700 p-2.5 rounded-full text-pink-300">
                                <Mail size={18} strokeWidth={3} />
                            </div>
                            <span className="text-gray-600">info@usapoodles.com</span>
                        </div>
                    </div>
                </div>

                {/* Column 3: Quick Links */}
                <div>
                    <h3 className="text-xl text-pink-700 font-bold mb-6">
                        Quick Links
                    </h3>
                    <ul className="space-y-4 text-gray-600">
                        <li className="hover:text-gray-800 cursor-pointer"><Link to="/">Home</Link></li>
                        <li className="hover:text-gray-800 cursor-pointer"><Link to="/about">About</Link></li>
                        <li className="hover:text-gray-800 cursor-pointer"><Link to="/application">Application</Link></li>
                        <li className="hover:text-gray-800 cursor-pointer"><Link to="/breed-program">Breed Program</Link></li>
                        <li className="hover:text-gray-800 cursor-pointer"><Link to="/health-testing">Health Testing</Link></li>
                        <li className="hover:text-gray-800 cursor-pointer"><Link to="/about-breeder">About Breeder</Link></li>
                        <li className="hover:text-gray-800 cursor-pointer"><Link to="/health-contract">Health Contract</Link></li>
                    </ul>
                </div>

                {/* Column 4: More Links */}
                <div>
                    <h3 className="text-xl text-pink-700 font-bold mb-6">
                        More Links
                    </h3>
                    <ul className="space-y-4 text-gray-600">
                        <li className="hover:text-gray-800 cursor-pointer"><Link to="/puppy-raising">Puppy Raising</Link></li>
                        <li className="hover:text-gray-800 cursor-pointer"><Link to="/past-litters">Past Litters</Link></li>
                        <li className="hover:text-gray-800 cursor-pointer"><Link to="/our-dogs">Our Dogs</Link></li>
                        <li className="hover:text-gray-800 cursor-pointer"><Link to="/dogs-page">Dogs Page</Link></li>
                        <li className="hover:text-gray-800 cursor-pointer"><Link to="/the-red-story">The Red Story</Link></li>
                        <li className="hover:text-gray-800 cursor-pointer"><Link to="/red-toy-standard">Red Toy Standard</Link></li>
                        <li className="hover:text-gray-800 cursor-pointer"><Link to="/available">Available Poodles</Link></li>
                    </ul>
                </div>

                {/* Column 5: Follow & Donation */}
                <div>
                    <h3 className="text-xl text-pink-700 font-bold mb-6">Follow Us</h3>
                    <div className="flex gap-3 mb-10">
                        <div className="bg-pink-700 p-2 rounded-full text-pink-300 cursor-pointer hover:scale-110 transition-transform duration-300">
                            <Facebook size={18} fill="currentColor" />
                        </div>
                        <div className="bg-pink-700 p-2 rounded-full text-pink-300 cursor-pointer hover:scale-110 transition-transform duration-300">
                            <Instagram size={18} />
                        </div>
                        <div className="bg-pink-700 p-2 rounded-full text-pink-300 cursor-pointer hover:scale-110 transition-transform duration-300">
                            <Twitter size={18} fill="currentColor" />
                        </div>
                        <div className="bg-pink-700 p-2 rounded-full text-pink-300 cursor-pointer hover:scale-110 transition-transform duration-300">
                            <Linkedin size={18} fill="currentColor" />
                        </div>
                    </div>

                    <button className="bg-pink-700 text-white font-bold px-8 py-4 rounded-full hover:bg-pink-800 transition-all duration-300 shadow-sm transform hover:-translate-y-1 cursor-pointer">
                        Donate Today
                    </button>
                </div>
            </div>

            {/* Bottom Bar: Copyright & Links */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-blue-500/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-600">
                <p>2026 © USA Poodles | All Rights Reserved</p>

                <div className="flex flex-wrap justify-center gap-6">
                    <span className="cursor-pointer">Developed by <a href="https://techxudo.com/   " target='_blank' className='text-blue-900'>Techxudo</a></span>
                    <span className="hover:text-blue-900 cursor-pointer underline transition-all duration-300">Privacy Policy</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;