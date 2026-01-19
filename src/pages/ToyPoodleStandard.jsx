import { useState } from 'react';
import { ChevronDown, Ruler, Brain, HeartPulse, Scissors, Search, Zap, Users, Home, Smile, ShieldCheck, ArrowRight, UsersRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ToyPoodleStandard = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    { q: "Will my red Toy Poodle stay red?", a: "Red Toy Poodles are known for their rich coloring, but coat shade can change as a puppy matures. Some dogs retain deep red tones into adulthood, while others soften slightly into copper or warm apricot shades." },
    { q: "Are Toy Poodles good with children?", a: "Yes, they can be wonderful family dogs. They are affectionate and emotionally attuned. Because of their small size, gentle handling and supervision are important, especially with younger children." },
    { q: "Do Toy Poodles bark a lot?", a: "They are alert and aware, meaning they may bark to notify their family of something new. Excessive barking is usually a sign of boredom or lack of stimulation rather than a breed flaw." },
    { q: "Are Toy Poodles easy to train?", a: "Yes, they are among the easiest breeds to train. They respond best to praise, consistency, and interaction, often outperforming much larger breeds." },
    { q: "How much exercise does a Toy Poodle need?", a: "They don't need intense exercise, but they do need daily activity. Short walks, indoor play, and mental puzzles are usually enough to keep them balanced." },
    { q: "Are Toy Poodles good for apartment living?", a: "Yes. Their size and adaptability make them excellent apartment dogs. What matters most is engagement with their people, not the square footage of the home." },
    { q: "Do Toy Poodles get along with other pets?", a: "When properly socialized, they often do very well with other dogs and even cats. Early exposure and calm introductions help build confidence." }
  ];

  return (
    <div className="bg-white text-gray-700 leading-relaxed">

      {/* HERO SECTION */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-[#8ECC14] text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              More than <br /> <span className="text-gray-900">Curly Cuteness</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-800 font-medium mb-6 leading-snug">
              "A Breed With Brains, Heart, and Style."
            </p>
            <p className="text-gray-600 text-base max-w-xl">
              Spend five minutes with a Toy Poodle and you’ll realize they’re opinionated puzzle-solvers, stylish couch companions, and built-in cheerleaders for your day.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-[#E2F1C4] rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img 
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=100&w=1000" 
                alt="Elegant Toy Poodle" 
                className="relative z-10 rounded-[3rem] shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* AKC OFFICIAL TRAITS */}
      <section className="py-10 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-[#8ECC14] text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-center">AKC Official Traits</h2>
            <p className="text-center text-gray-500 uppercase text-xs font-semibold">What the Standard Says & What It Means at Home</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: <Ruler size={32}/>, t: "Size & Proportion", d: "10 inches or shorter at the shoulder. A true Toy looks squarely balanced—not too long or leggy—so every step is confident and graceful." },
              { icon: <HeartPulse size={32}/>, t: "Temperament", d: "Alert and emotionally responsive. They feel your mood, follow your movements, and are people-oriented without being clingy." },
              { icon: <Brain size={32}/>, t: "Intelligence", d: "One of the smartest breeds on the planet. They love mental enrichment, puzzles, and training games as much as lap time." },
              { icon: <Scissors size={32}/>, t: "Coat Type", d: "Tight, low-shedding curls that are allergy-friendly. Requires professional grooming every 4–6 weeks to maintain health." }
            ].map((trait, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start group hover:border-[#8ECC14] transition-colors duration-300">
                <div className="text-[#C6E589] group-hover:text-[#8ECC14] transition-colors duration-300">{trait.icon}</div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-2">{trait.t}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{trait.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPICAL BEHAVIORS */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="bg-gray-900 rounded-[3rem] px-6 py-10 sm:p-10 md:p-16 relative overflow-hidden text-center text-white mb-20">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#8ECC14] blur-[120px] opacity-20"></div>
           <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 relative z-10">
             "Half dog, half brain <br /> <span className="text-[#8ECC14]">with a sprinkle of clown spirit."</span>
           </h2>
           <p className="text-gray-400">— Common owner description —</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { 
                icon: <Search size={24} />, 
                t: "Curious Thinkers", 
                d: "They don’t just sniff, they investigate. They turn toys over with paws and study your shoes like a mystery." 
            },
            { 
                icon: <Zap size={24} />, 
                t: "Playful, Yet Poised", 
                d: "Lap warmers one minute, zoom-about playmakers the next. They thrive on hide-and-seek and fetch." 
            },
            { 
                icon: <UsersRound size={24} />, 
                t: "Social Butterflies", 
                d: "Adore people and children. They are wonderful family companions, loyal cuddle and loving buddies." 
            }
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-[#E2F1C4] rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#8ECC14] group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{item.t}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK VISUAL CHECKLIST */}
      <section className="py-10 px-6 bg-[#E2F1C4]/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-semibold uppercase text-xs tracking-widest text-[#C6E589] mb-10">Quick Visual Checklist</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { i: <Ruler size={30}/>, t: "Size", c: "10″ Height" },
              { i: <Brain size={30}/>, t: "Brainy", c: "Eager Learner" },
              { i: <Smile size={30}/>, t: "People", c: "Affectionate" },
              { i: <Scissors size={30}/>, t: "Coat", c: "Dense Curls" },
              { i: <Zap size={30}/>, t: "Energy", c: "Playful/Poised" },
              { i: <ShieldCheck size={30}/>, t: "Social", c: "Adaptive" }
            ].map((check, i) => (
              <div key={i} className="bg-white px-3 py-6 md:p-6 rounded-2xl shadow-sm text-center flex flex-col items-center">
                <div className="text-[#8ECC14] mb-3">{check.i}</div>
                <h4 className="text-base font-bold uppercase text-gray-900 mb-1">{check.t}</h4>
                <p className="text-[11px] text-gray-400 font-bold uppercase">{check.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-center text-gray-900 text-3xl md:text-4xl font-black uppercase mb-10">Standard FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100 last:border-0">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center py-6 text-left hover:text-[#8ECC14] transition-colors duration-300 cursor-pointer"
              >
                <span className="font-bold text-base uppercase pr-8">{faq.q}</span>
                <ChevronDown className={`shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} size={20} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PINNED NAVIGATION BAR */}
      <section className="sticky bottom-0 bg-white/95 backdrop-blur-md border-t border-[#E2F1C4] py-6 px-6 z-40 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/the-red-story')}
              className="flex items-center gap-2 text-[#8ECC14] font-bold text-base uppercase cursor-pointer group"
            >
              The Science of Red <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="flex gap-3">
            <button 
                onClick={() => navigate('/available')}
                className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold uppercase text-xs hover:bg-[#8ECC14] transition-colors duration-300 cursor-pointer"
            >
               Available Puppies
            </button>
            <button 
                onClick={() => navigate('/application')}
                className="bg-white border-2 border-gray-100 text-gray-900 px-8 py-3 rounded-full font-bold uppercase text-xs hover:border-[#C6E589] transition-all duration-300 cursor-pointer"
            >
               Puppy Application
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ToyPoodleStandard;