import { ArrowRight, MoveDown } from "lucide-react"
import heroMain from "../assets/heroMain.png"
import heroBottom from "../assets/heroBottom.png"
import manImage from "../assets/manIcon.avif"
import heroPaw from "../assets/heroPaw3.png"

const Hero = () => {
    return (
        <div className="relative bg-[#C6E589] min-h-screen w-full flex items-center overflow-hidden
            px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-0">

            {/* Background Decoration */}
            <img
                src={heroPaw}
                alt="Decoration"
                className="absolute hidden md:block left-20 lg:left-40 top-1/4 w-[180px] lg:w-[230px] pointer-events-none border-none"
            />

            {/* Bottom Curve */}
            <img
                src={heroBottom}
                alt="Bottom Decor"
                className="absolute bottom-0 right-0 w-[70%] sm:w-[55%] lg:w-[45%] object-contain z-10 border-none"
            />

            <div className="relative z-20 flex flex-col-reverse md:flex-row items-center w-full gap-10">

                {/* Left Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end border-none">
                    <img
                        src={heroMain}
                        alt="Poodle Image"
                        className="max-h-[60vh] md:max-h-[80vh] lg:max-h-[90vh] object-contain"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 flex flex-col gap-5 text-center md:text-left border-none">

                    <span className="mx-auto md:mx-0 text-gray-800 bg-[#8ECC14] px-5 py-1.5 w-fit rounded-full font-semibold text-sm">
                        Trusted Poodle Breeders
                    </span>

                    <h1 className="text-[#82b912] font-bold leading-[0.9]
                        text-[52px] sm:text-[64px] md:text-[80px]">
                        Healthy <br /> Poodles
                    </h1>

                    <div className="space-y-3 max-w-md mx-auto md:mx-0">
                        <p className="text-gray-800 font-medium text-lg">
                            Premium Poodles Available Across the USA
                        </p>

                        <p className="text-[#444346] font-normal leading-normal">
                            We provide well-trained, healthy and happy Poodles including
                            male & female, toy, miniature and standard sizes.
                            Raised with love and ready for their new homes.
                        </p>
                        {/* CTA */}
                        <div className="group flex items-center justify-between bg-[#8ECC14]
                            hover:bg-[#7db311] transition-colors duration-500
                            p-1.5 pl-8 px-2 rounded-full w-fit cursor-pointer mt-4 mx-auto md:mx-0">

                            <span onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="text-gray-800 font-semibold mr-4">
                                View Available Poodles
                            </span>

                            <div className="bg-[#C6E589] p-3 rounded-full">
                                <ArrowRight className="text-gray-800 w-6 h-6" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Floating Bottom Right Elements */}
            <div className="hidden lg:flex absolute -bottom-13 right-30 z-30 flex-col items-end gap-6 border-none">

                <div className="flex items-center gap-2 text-sm">
                    <img className="w-16 h-10 object-cover rounded-full" src={manImage} alt="Support" />
                    <span className="text-gray-600 font-semibold">Call or WhatsApp</span>
                    <span className="text-gray-800 font-bold">+1 (800) 236-000</span>
                </div>

                <div className="bg-[#8ECC14] p-4 rounded-3xl relative bottom-24 -right-20 animate-bounce">
                    <MoveDown className="text-gray-800 w-8 h-8" />
                </div>
            </div>

        </div>
    )
}

export default Hero
