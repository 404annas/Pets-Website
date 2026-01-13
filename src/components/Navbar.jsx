import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    // Lock body scroll when sidebar is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => (document.body.style.overflow = "auto");
    }, [open]);

    const menuItems = ["Home", "About", "Services", "Store", "Pricing", "Contact"];

    return (
        <>
            {/* NAVBAR */}
            <nav className="flex items-center justify-between px-6 lg:px-10 py-4 bg-white relative z-50">
                {/* Logo */}
                <img loading="lazy" className="w-28 lg:w-32" src={logo} alt="Logo" />

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-10 font-medium">
                    {menuItems.map((item, idx) => (
                        <p
                            key={item}
                            className={`relative cursor-pointer ${idx === 0 ? "text-[#8ECC14]" : "text-gray-800"
                                }
                after:absolute after:left-0 after:-bottom-0.5
                after:h-[2px] after:w-0 after:bg-[#8ECC14] hover:text-[#8ECC14] transition-all duration-300
                after:transition-all after:duration-300
                hover:after:w-full`}
                        >
                            {item}
                        </p>
                    ))}
                </div>

                {/* Desktop Button */}
                <div className="hidden lg:flex items-center gap-2 cursor-pointer font-medium bg-[#C6E589] hover:bg-[#b8da74] transition-all px-6 py-3 rounded-full">
                    <FaWhatsapp className="text-green-700" size={22} />
                    <span className="text-gray-800">800-234-000</span>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    onClick={() => setOpen(true)}
                    className="lg:hidden text-[#46425E] cursor-pointer"
                >
                    <HiMenuAlt3 size={24} />
                </button>
            </nav>

            {/* OVERLAY */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
            />

            {/* SIDEBAR */}
            <aside
                className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Close Button */}
                <div className="flex justify-end p-6 cursor-pointer">
                    <button onClick={() => setOpen(false)} className="cursor-pointer">
                        <HiX size={24} />
                    </button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col gap-6 px-8 font-medium">
                    {menuItems.map((item) => (
                        <p
                            key={item}
                            className="text-lg text-gray-800 cursor-pointer hover:text-[#46425E] transition"
                        >
                            {item}
                        </p>
                    ))}

                    {/* Button */}
                    <div className="mt-6 flex items-center gap-3 bg-[#C6E589] px-6 py-4 rounded-full cursor-pointer w-fit">
                        <FaWhatsapp className="text-green-700" size={22} />
                        <span className="text-gray-800 font-semibold">
                            800-234-000
                        </span>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Navbar;
