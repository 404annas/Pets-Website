import React from 'react';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
    return (
        <nav className="w-full flex items-center justify-between px-8 py-4 bg-whie border-b border-gray-100">

            {/* 1. Logo Section (Left) */}
            <div className="flex-1 flex justify-start items-center">
                <Link to={"/"} className='text-4xl font-bold font-serif cursor-pointer text-[#8ECC14]'>USA Poodles</Link>
            </div>

            {/* 2. Navigation Links (Center) */}
            <ul className="flex-1 hidden md:flex justify-center items-center space-x-7 text- font-medium text-gray-600">
                <li className="cursor-pointer hover:text-gray-900 transition-colors duration-300">Services</li>
                <li className="cursor-pointer hover:text-gray-900 transition-colors duration-300">Patients</li>
                <li className="cursor-pointer hover:text-gray-900 transition-colors duration-300">Testimonial</li>
                <li className="cursor-pointer hover:text-gray-900 transition-colors duration-300">Gallery</li>
                <li className="cursor-pointer hover:text-gray-900 transition-colors duration-300">FAQ</li>
            </ul>

            {/* 3. Call to Action Button (Right) */}
            <div className="flex-1 flex justify-end items-center">
                <button className="bg-[#8ECC14] text-gray-800 text- font-semibold py-3 px-6 rounded-full transition-all cursor-pointer hover:scale-97 duration-300 text-white">
                    Book An Appointment
                </button>
            </div>

        </nav>
    );
};

export default Navbar2;