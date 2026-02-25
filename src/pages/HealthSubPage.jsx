import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Dna, Eye, Stethoscope, Database, 
  ArrowRight, ArrowLeft, ShieldCheck, 
  Search, Check, Activity, FileText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HealthSubPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen text-slate-900 overflow-x-hidden selection:bg-[#8ECC14]/20">
      
      {/* 1. EDITORIAL HERO */}
      <section className="relative pt-20 md:pt-28 pb-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between pb-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="h-[1.5px] w-12 bg-brand-pink-700"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-pink-700">Protocol & Standards</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl fr font-bold uppercase leading-none mb-10">
                Health comes <br />
                <span className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text">Before</span> Everything.
              </h1>
              <p className="text-base md:text-lg text-brand-blue-500 font-normal leading-normal max-w-2xl">
                Every pairing. Every litter. Every time. Protecting the dogs we love and the families who welcome them.
              </p>
            </motion.div>
          </div>
          <div className="mt-10 md:mt-0">
             <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue-500 border border-brand-blue-700 text-[10px] font-bold uppercase tracking-widest text-white">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue-700 animate-pulse"></div>
                Active Monitoring
             </div>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY ROW (Asymmetric) */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-pink-700 mb-6">Real Life Impact</h2>
            <h3 className="text-3xl md:text-4xl font-bold uppercase fr leading-none">
              Testing does not create <span className='text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text'>perfect dogs</span>. It creates <span className='text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text'>informed choices</span>.
            </h3>
          </div>
          <div className="lg:col-span-8 lg:pl-20">
            <p className="text-base md:text-lg text-brand-blue-500 font-normal leading-relaxed mb-10">
              When you bring a Toy Poodle home, you are planning for years of companionship. Health testing stacks the odds in favor of a long, comfortable, happy life. It allows us to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
               {[
                 "Reduce avoidable inherited risk",
                 "Make informed breeding decisions",
                 "Be honest with families about facts",
                 "Protect the Toy Poodle breed lineage"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 pb-4 border-b border-slate-100">
                    <Check size={20} className="text-brand-pink-700" />
                    <span className="text-base font-bold tracking-tight text-brand-blue-500">{item}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE TRIAD (Technical Cards with Border Accents) */}
      <section className="py-10 px-14 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-pink-700 mb-4 block">Monitoring</span>
            <h2 className="text-3xl md:text-4xl font-bold fr uppercase text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text">Primary Screenings</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                t: "prcd PRA DNA Testing", 
                d: "Genetic screening for a form of retinal atrophy that leads to vision loss. Knowing the status of every puppy.",
                icon: <Dna />
              },
              { 
                t: "Annual Eye Examinations", 
                d: "Manual evaluations by ACVO ophthalmologists. These monitor conditions that DNA testing cannot detect.",
                icon: <Eye />
              },
              { 
                t: "Patellar luxation evaluation", 
                d: "Evaluating knee stability to reduce the risk of future mobility challenges and joint discomfort.",
                icon: <Stethoscope />
              }
            ].map((test, i) => (
              <div key={i} className="group relative">
                <div className="w-10 h-10 bg-white shadow-sm border border-brand-blue-500 flex items-center justify-center text-brand-blue-500 mb-8 group-hover:bg-brand-blue-500 group-hover:text-white transition-all duration-500">
                  {test.icon}
                </div>
                <h4 className="text-xl font-bold mb-4  text-brand-pink-700 fr uppercase tracking-tight">{test.t}</h4>
                <p className="text-brand-blue-500 text-sm leading-relaxed font-normal">{test.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE DATA BLOCK (OFA / CHIC) - Floating Design */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[4rem] px-10 py-14 md:p-20 text-white flex flex-col lg:flex-row gap-10 items-center overflow-hidden relative">
          <div className="lg:w-1/2 z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold fr uppercase leading-none mb-10">
              Transparency is <br />
              <span className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text">Mandatory.</span>
            </h2>
            <div className="space-y-10">
               <div>
                 <h5 className="text-brand-pink-500 font-bold text-xs sm:text-sm uppercase tracking-widest mb-2">OFA Public Database</h5>
                 <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed max-w-md">Results are recorded publicly through the Orthopedic Foundation for Animals. Transparency builds trust.</p>
               </div>
               <div>
                 <h5 className="text-brand-pink-500 font-bold text-xs sm:text-sm uppercase tracking-widest mb-2">CHIC Certification</h5>
                 <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed max-w-md">Recognition for completing recommended breed testing. It means the information is available publicly.</p>
               </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative z-10">
             <div className="bg-white/5 border border-white/10 px-6 py-8 md:p-10 backdrop-blur-md">
                <ShieldCheck className="text-brand-blue-500 mb-8" size={30} />
                <p className="text-xl font-light leading-relaxed mb-8">
                  "Openness protects families. A CHIC number signifies <span className="text-brand-blue-500 font-bold">accountability</span> and <span className="text-brand-blue-500 font-bold">verified results</span>."
                </p>
                <div className="flex gap-2">
                  <div className="h-1 w-8 bg-brand-blue-500"></div>
                  <div className="h-1 w-8 bg-white/20"></div>
                  <div className="h-1 w-8 bg-white/20"></div>
                </div>
             </div>
          </div>
          {/* Abstract Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink-500/10 blur-[120px]"></div>
        </div>
      </section>

      {/* 5. THE PROMISE (Monochrome Minimal) */}
      <section className="py-10 px-6 max-w-4xl mx-auto text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-pink-700 mb-8 block">Final Note</span>
        <h2 className="text-3xl md:text-4xl font-bold fr uppercase mb-6 text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text">What we will never promise</h2>
        <p className="text-base md:text-lg text-gray-500 font-normal leading-relaxed mb-10">
          We will never promise a dog with zero health risk. No living being comes with guarantees. What we do promise is <span className="text-brand-blue-500 font-bold underline decoration-brand-blue-500 decoration-2 underline-offset-8">careful planning and transparent records.</span>
        </p>
        <Activity className="mx-auto text-brand-blue-500" size={32} />
      </section>

      {/* 6. SOPHISTICATED NAV */}
      <section className="pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <button 
            onClick={() => {window.scrollTo(0,0); navigate('/breed-program')}}
            className="flex items-center justify-between p-10 bg-slate-50 rounded-3xl hover:bg-slate-100 transition-all duration-300 group cursor-pointer"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-500 block mb-2">Back</span>
              <span className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-brand-blue-500 transition-colors duration-300">Ethics Overview</span>
            </div>
            <ArrowLeft className="text-brand-blue-500 group-hover:-translate-x-2 transition-transform duration-300" />
          </button>

          <button 
            onClick={() => {window.scrollTo(0,0); navigate('/puppy-raising')}}
            className="flex items-center justify-between p-10 bg-slate-900 text-white rounded-3xl hover:bg-slate-800 transition-all duration-300 cursor-pointer group"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-pink-500 block mb-2">Forward</span>
              <span className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-brand-pink-500 transition-colors duration-300">Raising Protocol</span>
            </div>
            <ArrowRight className="text-brand-pink-500 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </section>

    </div>
  );
};

export default HealthSubPage;