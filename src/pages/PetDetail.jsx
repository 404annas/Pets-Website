import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { petData } from '../data/petsData';
import FeaturedPets from '../components/FeaturedPets';

const PetDetail = () => {
    const { id } = useParams();
    const pet = petData.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!pet) return <div className="py-10 text-center text-2xl">No Poodle found</div>;

    return (
        <div className="bg-white min-h-screen">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
                <div className="w-full lg:w-1/2">
                    <div className="w-20 h-20 bg-[#E5F4A3] rounded-3xl mb-10"></div>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#8ECC37] mb-4">{pet.name}</h1>
                    <p className="text-gray-400 font-bold tracking-[0.2em] mb-8 uppercase text-sm">{pet.breed}</p>
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-12">{pet.description}</p>

                    <div className="bg-[#E5F4A3] rounded-[50px] px-6 py-8 sm:p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                        <div className="flex items-center gap-2 text-xl"><span className="text-[#8ECC14] font-bold">Breed:</span> <span className="text-gray-600 text-sm">{pet.breed}</span></div>
                        <div className="flex items-center gap-2 text-xl"><span className="text-[#8ECC14] font-bold">Age:</span> <span className="text-gray-600 text-sm">{pet.age}</span></div>
                        <div className="flex items-center gap-2 text-xl"><span className="text-[#8ECC14] font-bold">Weight:</span> <span className="text-gray-600 text-sm">{pet.weight}</span></div>
                        <div className="flex items-center gap-2 text-xl"><span className="text-[#8ECC14] font-bold">Gender:</span> <span className="text-gray-600 text-sm">{pet.gender}</span></div>
                        <div className="flex items-center gap-2 text-xl"><span className="text-[#8ECC14] font-bold">Good With Dogs?:</span> <span className="text-gray-600 text-sm">{pet.goodWithDogs}</span></div>
                        <div className="flex items-center gap-2 text-xl"><span className="text-[#8ECC14] font-bold">Good With Kids?:</span> <span className="text-gray-600 text-sm">{pet.goodWithKids}</span></div>
                        <div className="flex items-center gap-2 text-xl col-span-full"><span className="text-[#8ECC14] font-bold">Adoption Fee:</span> <span className="text-gray-600 text-sm">{pet.adoptionFee}</span></div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <img loading='lazy' src={pet.image} alt={pet.name} className="w-full h-[650px] object-cover rounded-[80px] shadow-md mb-10" />
                    <div className="flex md:flex-row flex-col justify-center gap-4 md:gap-6">
                        <button className="bg-[#C6E589] text-gray-800 font-bold px-8 py-3 rounded-full hover:bg-[#8ECC14] transition-all duration-300 text-base cursor-pointer">How To Adopt ?</button>
                        <button className="border-2 border-[#8ECC14] text-[#8ECC14] font-bold px-8 py-3 rounded-full hover:bg-[#8ECC14] hover:text-white transition-all duration-300 text-base cursor-pointer">View Gallery</button>
                    </div>
                </div>
            </div>

            {/* Health Info Section */}
            <div className="py-10 px-4 text-center">
                <h3 className="text-[#8ECC37] font-medium mb-10 uppercase text-lg sm:text-xl md:text-2xl">Health Info:</h3>
                <div className="max-w-6xl mx-auto bg-[#E5F4A3] rounded-[50px] px-4 py-8 md:py-10 md:px-10 flex flex-wrap justify-center gap-16">
                    {pet.health.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-6">
                            <div className={`p-6 rounded-full relative ${item.active ? 'bg-[#8ECC37] text-[#E5F4A3]' : 'bg-gray-100 text-gray-400'}`}>
                                <item.icon size={40} />
                                <div className={`absolute top-0 right-0 w-7 h-7 rounded-full border-4 border-white flex items-center justify-center text-[10px] font-bold text-white ${item.active ? 'bg-[#B2D33C]' : 'bg-gray-400'}`}>
                                    {item.active ? '✓' : '✕'}
                                </div>
                            </div>
                            <p className="text-gray-600 font-bold text-lg">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="">
                <FeaturedPets />
            </div>
        </div>
    );
};

export default PetDetail;