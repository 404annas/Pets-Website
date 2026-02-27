import { FaInstagram } from "react-icons/fa";
import akcLogo from "../assets/floatLogo.avif";

const FloatingIcons = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
            <a
                href="https://marketplace.akc.org/breeder/usapoodle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-110"
                aria-label="Open featured link"
            >
                <img
                loading="lazy"
                    src={akcLogo}
                    alt="AKC Logo"
                    className="w-full h-full object-cover"
                />
            </a>

            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg bg-gradient-to-br from-[#db7726] via-[#c0246a] to-[#434caf] transition-transform duration-300 hover:scale-110"
                aria-label="Open Instagram"
            >
                <FaInstagram size={24} />
            </a>
        </div>
    );
};

export default FloatingIcons;
