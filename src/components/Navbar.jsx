import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    // Lock body scroll when sidebar is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [open]);

    // Menu with section IDs
    const menuItems = [
        { label: "Home", type: "route", path: "/" },
        { label: "About", type: "route", path: "/about" },
        { label: "Past Litters", type: "route", path: "/past-litters" },
        { label: "Breed Program", type: "route", path: "/breed-program" },
        { label: "The Red Story", type: "route", path: "/the-red-story" },
        { label: "Poodle Standard", type: "route", path: "/red-toy-standard" },
        { label: "Application", type: "route", path: "/application" },
    ];

    const navigate = useNavigate();
    const location = useLocation();

    const handleNavScroll = (hash) => {
        setOpen(false);

        if (location.pathname !== "/") {
            navigate(`/#${hash}`);
        } else {
            document
                .getElementById(hash)
                ?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            {/* NAVBAR */}
            <nav className="flex items-center justify-between px-6 lg:px-10 py-4 bg-white relative z-50">
                {/* Logo */}
                {/* <img
                    loading="lazy"
                    className="w-28 lg:w-32 cursor-pointer"
                    src={logo}
                    alt="Logo"
                    onClick={() => handleScroll("home")}
                /> */}
                <Link to={"/"} className="text-[#8ECC14] font-bold cursor-pointer text-2xl font-serif sm:text-3xl  md:text-4xl" >USA Poodles</Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-5 font-medium">
                    {menuItems.map((item, idx) =>
                        item.type === "route" ? (
                            <Link
                                key={item.label}
                                to={item.path}
                                className="relative cursor-pointer text-gray-800
            after:absolute after:left-0 after:-bottom-0.5
            after:h-[2px] after:w-0 after:bg-[#8ECC14]
            hover:text-[#8ECC14] transition-all duration-300
            after:transition-all after:duration-300
            hover:after:w-full"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <p
                                key={item.label}
                                onClick={() => handleNavScroll(item.id)}
                                className={`relative cursor-pointer ${item.label === "Home" ? "text-[#8ECC14]" : "text-gray-800"
                                    }
            after:absolute after:left-0 after:-bottom-0.5
            after:h-[2px] after:w-0 after:bg-[#8ECC14]
            hover:text-[#8ECC14] transition-all duration-300
            after:transition-all after:duration-300
            hover:after:w-full`}
                            >
                                {item.label}
                            </p>
                        )
                    )}
                </div>

                {/* Desktop Button */}
                <div onClick={() => navigate("/#contact")} className="hidden lg:flex items-center gap-2 cursor-pointer font-medium bg-[#C6E589] hover:bg-[#b8da74] transition-all px-6 py-3 rounded-full">
                    <FaWhatsapp className="text-green-700" size={22} />
                    <span className="text-gray-800">Contact</span>
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
                <div className="flex justify-end p-6">
                    <button onClick={() => setOpen(false)}>
                        <HiX size={24} />
                    </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex flex-col gap-6 px-8 font-medium">
                    {menuItems.map((item) =>
                        item.type === "route" ? (
                            <Link
                                key={item.label}
                                to={item.path}
                                onClick={() => setOpen(false)}
                                className="text-lg text-gray-800 cursor-pointer hover:text-[#8ECC14] transition"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <p
                                key={item.label}
                                onClick={() => handleNavScroll(item.id)}
                                className="text-lg text-gray-800 cursor-pointer hover:text-[#8ECC14] transition"
                            >
                                {item.label}
                            </p>
                        )
                    )}

                    {/* Button */}
                    <div onClick={() => navigate("/#contact")} className="mt-6 flex items-center gap-3 bg-[#C6E589] px-6 py-4 rounded-full cursor-pointer w-fit">
                        <FaWhatsapp className="text-green-700" size={22} />
                        <span className="text-gray-800 font-semibold">
                            Contact
                        </span>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Navbar;
