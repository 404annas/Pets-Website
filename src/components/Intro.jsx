import intro1 from "../assets/intro1.png"
import intro2 from "../assets/intro2.png"
import intro3 from "../assets/intro3.png"

const Intro = () => {
    return (
        <section className="bg-white flex flex-col items-center
            py-10
            px-4 sm:px-6 lg:px-10">

            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
                <span className="text-[#C6E589] uppercase font-medium tracking-wide text-sm sm:text-base">
                    Intro
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#8ECC14] mt-2">
                    Get to know us more
                </h2>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                gap-10 sm:gap-12
                max-w-6xl w-full">

                {/* Card 1 */}
                <div className="flex flex-col items-center text-center">
                    <div
                        className="w-36 h-28 sm:w-40 sm:h-30 md:w-44 md:h-32
                            flex items-center justify-center bg-[#FEF4E0] mb-6 sm:mb-8"
                        style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
                    >
                        <img
                            loading="lazy"
                            className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 object-contain"
                            src={intro1}
                            alt="Pet Experts"
                        />
                    </div>

                    <h3 className="text-2xl font-bold text-[#8ECC14] mb-3">
                        Pet Experts
                    </h3>

                    <p className="text-gray-500 leading-relaxed mb-6 px-4 max-w-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, delectus!
                    </p>

                    <button className="px-6 py-2 rounded-full border-2 border-[#FFD278]
                        text-[#FFD278] font-bold hover:bg-[#FFD278] hover:text-white
                        transition-all duration-300 cursor-pointer">
                        Read More
                    </button>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center text-center">
                    <div
                        className="w-36 h-28 sm:w-40 sm:h-30 md:w-44 md:h-32
                            flex items-center justify-center bg-[#E6F8FF] mb-6 sm:mb-8"
                        style={{ borderRadius: "40% 60% 70% 30% / 50% 60% 40% 50%" }}
                    >
                        <img
                            loading="lazy"
                            className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 object-contain"
                            src={intro2}
                            alt="Vet Services"
                        />
                    </div>

                    <h3 className="text-2xl font-bold text-[#8ECC14] mb-3">
                        Vet Services
                    </h3>

                    <p className="text-gray-500 leading-relaxed mb-6 px-4 max-w-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, delectus!
                    </p>

                    <button className="px-6 py-2 rounded-full border-2 border-[#4DAFFF]
                        text-[#4DAFFF] font-bold hover:bg-[#4DAFFF] hover:text-white
                        transition-all duration-300 cursor-pointer">
                        Read More
                    </button>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center text-center">
                    <div
                        className="w-36 h-28 sm:w-40 sm:h-30 md:w-44 md:h-32
                            flex items-center justify-center bg-[#FFEAF1] mb-6 sm:mb-8"
                        style={{ borderRadius: "50% 50% 30% 70% / 70% 40% 60% 30%" }}
                    >
                        <img
                            loading="lazy"
                            className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 object-contain"
                            src={intro3}
                            alt="Contact Us"
                        />
                    </div>

                    <h3 className="text-2xl font-bold text-[#8ECC14] mb-3">
                        Contact Us
                    </h3>

                    <p className="text-gray-500 leading-relaxed mb-6 px-4 max-w-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, delectus!
                    </p>

                    <button className="px-6 py-2 rounded-full border-2 border-[#E5B5C1]
                        text-[#E5B5C1] font-bold hover:bg-[#E5B5C1] hover:text-white
                        transition-all duration-300 cursor-pointer">
                        Read More
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Intro
