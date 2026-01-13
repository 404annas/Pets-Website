import logo from "../assets/logo.png"
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-10 py-4 bg-white'>
            <img loading='lazy' className='w-32' src={logo} alt="Logo" />
            <div className="flex items-center gap-6 font-medium">
                {["Home", "About", "Services", "Store", "Pricing"].map((item, idx) => (
                    <p
                        key={item}
                        className={`
        relative cursor-pointer ${idx === 0 ? "text-[#46425E]" : "text-gray-800"}
        after:absolute after:left-0 after:-bottom-0.5
        after:h-[2px] after:w-0 after:bg-[#46425E]
        after:transition-all after:duration-300 after:ease-out
        hover:after:w-full
      `}
                    >
                        {item}
                    </p>
                ))}
            </div>
            <div className='flex items-center gap-2 cursor-pointer font-medium bg-[#DCD7F8] hover:bg-[#c9c3e9] transition-all duration-300 hover:scale-103 px-6 py-3 rounded-full'>
                <FaWhatsapp className='text-green-600' size={24} />
                <button className='cursor-pointer text-[#46425E]'>800-234-000</button>
            </div>
        </div>
    )
}

export default Navbar