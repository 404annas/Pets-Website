import intro1 from "../assets/intro1.png"
import intro2 from "../assets/intro2.png"
import intro3 from "../assets/intro3.png"

const Intro = () => {
    return (
        <section className="bg-white py-10 flex flex-col items-center">
            {/* Header Section */}
            <div className="text-center mb-16">
                <span className="text-gray-400 uppercase font-medium tracking-wide">Intro</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#3F3B57] mt-2">
                    Get to know us more
                </h2>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">

                {/* Card 1 - Pet Experts */}
                <div className="flex flex-col items-center text-center group">
                    <div
                        className="w-44 h-32 flex items-center justify-center bg-[#FEF4E0] mb-8"
                        style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }} // Giggle wiggle shape
                    >
                        <img className="w-24 h-24 object-contain" src={intro1} alt="Pet Experts" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#3F3B57] mb-3">Pet Experts</h3>
                    <p className="text-gray-500 leading-relaxed mb-6 px-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, delectus!
                    </p>
                    <button className="px-6 py-2 rounded-full border-2 border-[#FFD278] text-[#FFD278] font-bold hover:bg-[#FFD278] hover:text-white transition-all duration-300 cursor-pointer">
                        Read More
                    </button>
                </div>

                {/* Card 2 - Vet Services */}
                <div className="flex flex-col items-center text-center group">
                    <div
                        className="w-44 h-32 flex items-center justify-center bg-[#E6F8FF] mb-8"
                        style={{ borderRadius: "40% 60% 70% 30% / 50% 60% 40% 50%" }}
                    >
                        <img className="w-24 h-24 object-contain" src={intro2} alt="Vet Services" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#3F3B57] mb-3">Vet Services</h3>
                    <p className="text-gray-500 leading-relaxed mb-6 px-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, delectus!
                    </p>
                    <button className="px-6 py-2 rounded-full border-2 border-[#4DAFFF] text-[#4DAFFF] font-bold hover:bg-[#4DAFFF] hover:text-white transition-all duration-300 cursor-pointer">
                        Read More
                    </button>
                </div>

                {/* Card 3 - Contact Us */}
                <div className="flex flex-col items-center text-center group">
                    <div
                        className="w-44 h-32 flex items-center justify-center bg-[#FFEAF1] mb-8"
                        style={{ borderRadius: "50% 50% 30% 70% / 70% 40% 60% 30%" }}
                    >
                        <img className="w-24 h-24 object-contain" src={intro3} alt="Contact Us" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#3F3B57] mb-3">Contact Us</h3>
                    <p className="text-gray-500 leading-relaxed mb-6 px-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, delectus!
                    </p>
                    <button className="px-6 py-2 rounded-full border-2 border-[#E5B5C1] text-[#E5B5C1] font-bold hover:bg-[#E5B5C1] hover:text-white transition-all duration-300 cursor-pointer">
                        Read More
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Intro