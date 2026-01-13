import { ArrowRight, MoveDown } from "lucide-react"
import heroMain from "../assets/heroMain.png"
import heroSecondary from "../assets/heroSecondary.png"
import heroBottom from "../assets/heroBottom.png"
import manImage from "../assets/manIcon.avif"

const Hero = () => {
    return (
        <div className='relative bg-[#DCD7F8] min-h-screen w-full flex items-center overflow-hidden px-10 lg:px-20'>

            {/* Background Paw Print (heroSecondary) */}
            <img
                src={heroSecondary}
                alt="Decoration"
                className="absolute left-40 top-1/4 w-[230px] -z-0 pointer-events-none"
            />

            {/* Bottom Curve Shape (heroBottom) */}
            <img
                src={heroBottom}
                alt="Bottom Decor"
                className="absolute bottom-0 right-0 w-[40%] object-contain z-10"
            />

            <div className="relative z-20 flex flex-col md:flex-row items-center w-full">

                {/* Left Side: Main Dog Image */}
                <div className="w-1/2 flex justify-center items-end self-end">
                    <img
                        src={heroMain}
                        alt="Pet Image"
                        className="max-h-[90vh] object-contain"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col gap-5 w-1/2">
                    <span className="text-[#3F3B57] bg-[#C6C1E2] px-5 py-1.5 w-fit rounded-full font-semibold text-sm">
                        Welcome
                    </span>

                    <h1 className="text-[#3F3B57] text-[90px] leading-[0.9] font-bold">
                        Pet <br /> Doctor
                    </h1>

                    <div className="space-y-3 max-w-md">
                        <p className="text-[#3F3B57] font-medium text-lg">
                            We love pets like you do :)
                        </p>
                        <p className="text-[#444346] font-normal leading-normal">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odit atque quidem. Itaque, eius. Distinctio iste amet architecto quo dolores.
                        </p>
                        
                        {/* CTA Button */}
                        <div className="group flex items-center justify-between bg-[#C6C1E2] hover:bg-[#b8b2db] transition-colors duration-500 p-1.5 pl-8 px-2 rounded-full w-fit cursor-pointer mt-4">
                            <span className="text-[#3F3B57] font-semibold mr-4">Star Here!</span>
                            <div className="bg-[#ADA7CD] p-3 rounded-full">
                                <ArrowRight className="text-[#3F3B57] w-6 h-6" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Right Floating Elements */}
            <div className="absolute -bottom-17 right-30 z-30 flex flex-col items-end gap-6">

                {/* Call Us Today Pill */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm">
                        <img loading="lazy" className="w-16 h-10 object-cover rounded-full" src={manImage} alt="Man Image" />
                        <span className="text-gray-600 font-semibold">Call Us Today</span>
                        <span className="text-[#3F3B57] font-bold">800-236-000</span>
                    </div>
                </div>

                {/* Bouncing Scroll Down Arrow */}
                <div className="bg-[#C6C1E2] p-4 rounded-3xl relative bottom-24 -right-20 animate-bounce">
                    <MoveDown className="text-[#3F3B57] w-8 h-8" />
                </div>
            </div>

        </div>
    )
}

export default Hero