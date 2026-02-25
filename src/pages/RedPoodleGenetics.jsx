import { useState } from 'react';
import { ChevronDown, Dna, Palette, Activity, ShieldCheck, Heart, Sparkles, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RedPoodleGenetics = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    { q: "Will my red Toy Poodle stay red?", a: "Red can shift as the coat matures. Many sources note that fading or change can occur early and continue as the dog grows. We select lines with a history of richer adult coats when possible." },
    { q: "At what age do red Toy Poodles change color?", a: "Some references describe changes starting in the early weeks, with noticeable shifts around 6 to 10 weeks, and continued change into adulthood." },
    { q: "Can a breeder guarantee a non-fading red?", a: "No ethical breeder should promise permanent coat shade. Genetics are complex and poodles are known for coat changes. What we do is show you patterns in our lines." },
    { q: "What nose color should a red Toy Poodle have?", a: "Many red descriptions highlight dark points, often black, as the ideal look for a sharp, finished appearance." },
    { q: "Does sun exposure affect coat color?", a: "Yes, environment can influence coat appearance. Frequent sun exposure can sometimes cause the outer tips of the curls to lighten or 'sun-bleach'." },
    { q: "Does diet affect coat color or shine?", a: "Nutrition and coat care are huge factors. A high-quality diet supports the vibrancy and condition of the hair follicles from the inside out." },
    { q: "Are red Toy Poodles rarer than other colors?", a: "Yes, especially deep reds with strong pigment. Consistent, rich reds are hard to reproduce predictably compared to more dominant colors." },
    { q: "Are red Toy Poodles more expensive?", a: "High demand and rarity can influence pricing. However, we price based on care, health work, and quality. Beware if 'rare color' is the only justification for a high price." },
    { q: "Do red Toy Poodles have different temperaments?", a: "No. Temperament is not determined by coat color. Personality comes from genetics, socialization, and individual development." },
    { q: "How do you reduce the chance of fading?", a: "We focus on pedigree planning and avoiding known fading lines, while acknowledging that environmental factors always play a role." }
  ];

  return (
    <div className="bg-white text-gray-700 leading-relaxed">
      
      {/* HERO SECTION */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-brand-pink-700 text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              The Red <br /> <span className="text-gray-900">Color Story</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-medium mb-6 leading-snug">
              "Red that turns heads, genetics that explain why."
            </p>
            <div className="bg-brand-blue-500/15 p-6 rounded-2xl border-l-4 border-brand-pink-700">
              <p className="text-base font-bold text-gray-700 uppercase flex items-center gap-2 mb-2">
                <AlertCircle size={16} /> Quick Take
              </p>
              <p className="text-gray-600 text-base leading-6">Red is rare. Red can change as puppies mature. Great breeders plan for the whole dog, not just the shade.</p>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <img loading='lazy' src="https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?auto=format&fit=crop&q=100&w=1000" className="rounded-3xl shadow-sm w-full h-92 object-cover" alt="Red puppy" />
            <img loading='lazy' src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=100&w=1000" className="rounded-3xl shadow-sm w-full h-92 object-cover" alt="Adult red poodle" />
          </div>
        </div>
      </section>

      {/* THE SCIENCE SECTION */}
      <section className="py-10 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-brand-pink-700 text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Why Red is Rare ?</h2>
              <p className="text-gray-600">
                True red became an official color in 1980. It feels rare because consistent, rich reds are hard to reproduce. Coat depth varies because multiple genetic factors influence intensity and maturity.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-blue-500">
                <Dna size={30} className="text-brand-blue-500 mb-4" />
                <h3 className="font-bold uppercase text-sm mb-2">Recessive Red</h3>
                <p className="text-xs text-gray-500">Intensity modifiers influence how dark or light the coat appears within the red/white family.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-blue-500">
                <Activity size={30} className="text-brand-blue-500 mb-4" />
                <h3 className="font-bold uppercase text-sm mb-2">The Rufus Gene</h3>
                <p className="text-xs text-gray-500">Ongoing research explores the "Rufus" influence connected to deeper red intensity.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-[3rem] border-2 border-brand-blue-500">
             <h2 className="text-brand-pink-700 text-2xl md:text-3xl font-black uppercase mb-6">Black Points</h2>
             <p className="text-gray-600 mb-6">When people say "that's a showy red," they are noticing contrast. Dark points—nose and eye rims—are preferred and make the look sharper and more "finished."</p>
             <div className="flex gap-2">
                <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-white text-[10px] font-bold uppercase">Points</div>
                <div className="w-14 h-14 bg-brand-pink-700 rounded-full flex items-center justify-center text-white text-[10px] font-bold uppercase">Coat</div>
             </div>
          </div>
        </div>
      </section>

      {/* COAT JOURNEY - 3 CARDS */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-brand-pink-700 text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">The Red Coat Journey</h2>
          <p className="text-gray-500">"What you may see as your puppy grows"</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { s: "Stage 01", t: "Newborn to Early Weeks", d: "Puppies are born looking very red, rich, and saturated. This is the peak of early intensity and future." },
            { s: "Stage 02", t: "Around 6 to 10 Weeks", d: "Some lines show a lighter phase, then a darker band near the skin as the puppy coat begins to change." },
            { s: "Stage 03", t: "Teenage to Adult Coat", d: "Some reds deepen again, while some soften into copper or apricot. The final shade is clearer by adulthood." }
          ].map((stage, i) => (
            <div key={i} className="group px-4 py-4 md:p-8 border border-brand-blue-500 rounded-3xl hover:bg-brand-blue-500/5 transition-colors">
              <span className="text-brand-blue-500 font-semibold text-xs uppercase tracking-widest mb-4 block">{stage.s}</span>
              <h3 className="text-xl font-bold mb-4">{stage.t}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{stage.d}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-sm text-gray-500 max-w-2xl mx-auto">
          Our promise: We will always tell you what we see and what lineage suggests. No exaggerated guarantees, just honest guidance.
        </p>
      </section>

      {/* WHAT WE SELECT FOR - ICON GRID */}
      <section className="py-10 px-6 bg-brand-blue-500/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <ShieldCheck size={24}/>, t: "Health First", d: "Foundational testing above all." },
              { icon: <Heart size={24}/>, t: "Temperament", d: "Stable, affectionate souls." },
              { icon: <Palette size={24}/>, t: "Pigment", d: "Strong black points & depth." },
              { icon: <Sparkles size={24}/>, t: "Lineage", d: "Patterns of how color matures." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl flex flex-col items-center text-center">
                <div className="text-brand-pink-700 mb-3">{item.icon}</div>
                <h4 className="text-lg font-black uppercase text-gray-900 mb-1">{item.t}</h4>
                <p className="text-xs text-gray-500 uppercase leading-tight">{item.d}</p>
              </div>
            ))}
          </div>
          <div>
             <h2 className="text-brand-pink-700 text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 leading-tight">Color is one piece <br /> of the puzzle</h2>
             <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
               We love rich reds, but we do not chase color at the expense of the dog. A complete dog includes temperament, health, conformation, and beauty—not only coat shade.
             </p>
             <div className="flex items-center gap-4">
               <div className="h-px flex-grow bg-brand-blue-500/20"></div>
               <span className="text-brand-pink-700 font-bold uppercase text-sm tracking-wide">Balanced Breeding</span>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - ACCORDION */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-center text-gray-900 text-3xl md:text-4xl font-black uppercase mb-10">Genetics FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100 last:border-0">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center py-6 text-left hover:text-brand-pink-700 transition-colors duration-300 cursor-pointer"
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

      {/* PINNED CTA BAR */}
      <section className="sticky bottom-0 bg-white/95 backdrop-blur-md border-t border-brand-blue-500/30 py-6 px-6 z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-900 font-bold uppercase text-base">
            Ready to meet your future red best friend?
          </p>
          <div className="flex md:flex-row flex-col gap-2">
            <button onClick={() => navigate("/available")} className="bg-brand-pink-700 text-white px-8 py-3 rounded-full font-bold uppercase text-xs hover:bg-gray-900 transition-colors cursor-pointer duration-300 shadow-sm shadow-brand-pink-700/20">
               See Available Puppies
            </button>
            <button onClick={() => navigate("/application")} className="bg-white border-2 border-brand-blue-500 text-gray-900 px-8 py-3 rounded-full font-bold uppercase text-xs hover:bg-brand-blue-500/20 transition-all duration-300 cursor-pointer">
               Apply for Waitlist
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RedPoodleGenetics;