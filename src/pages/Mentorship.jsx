import { Award, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Mentorship = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 px-6 bg-[#E2F1C4]">
      <div className="max-w-5xl mx-auto text-center">
        <Award size={40} className="text-[#8ECC14] mx-auto mb-8" />
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-8">
          Our Roots & <br /> <span className="text-[#8ECC14] drop-shadow-sm">Mentorship</span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-10 italic">
          "Good breeders are taught. Great breeders stay grateful."
        </p>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto leading-normal">
          Our journey was shaped by the mentorship of <strong className='text-[#8ECC14]'>Linda DuBose of Scarlet’s Fancy Poodles</strong>. 
          She taught us that breeding is not about volume or shortcuts—it’s about responsibility and love for the dogs.
        </p>
        <button 
          onClick={() => navigate('/breed-program')}
          className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold uppercase text-xs hover:bg-[#8ECC14] hover:text-white transition-all duration-300 cursor-pointer shadow-sm flex items-center gap-4 mx-auto"
        >
          Explore Breeders Program <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default Mentorship;