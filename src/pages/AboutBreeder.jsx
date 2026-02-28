import { AudioLines, AudioWaveform, Ban, Blocks, Dna, HeartHandshake, Home, Languages, LineSquiggle, SearchCheck, ShieldCheck } from "lucide-react";

import poodleSmall from "../assets/small1.jfif"
import middlePoodle from "../assets/middle2.jfif"
import aboutBreeder from "../assets/about8.jfif"
import aboutBreeder2 from "../assets/about11.jfif"

import point1 from "../assets/point1.jfif"
import point2 from "../assets/point2.jfif"
import point3 from "../assets/point3.jfif"

const AboutBreeder = () => {
    const images = {
        hero: "https://images.unsplash.com/photo-1604916287784-c324202b3205?auto=format&fit=crop&q=80&w=1200",
        puppy1: "https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?auto=format&fit=crop&q=80&w=600",
        puppy2: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=80&w=600",
        mentor: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=800",
        moments: [
            "https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=400",
            "https://images.pexels.com/photos/5965259/pexels-photo-5965259.jpeg?auto=compress&cs=tinysrgb&w=400",
            "https://images.pexels.com/photos/7310222/pexels-photo-7310222.jpeg?auto=compress&cs=tinysrgb&w=400",
            "https://images.pexels.com/photos/20124401/pexels-photo-20124401/free-photo-of-cocker-spaniel-puppy-lying-on-a-fluffy-blanket.jpeg?auto=compress&cs=tinysrgb&w=400"
        ]
    };

    const beliefs = [
        {
            t: "Dogs first. Always.",
            d: "If a decision benefits us but not the dog, it’s the wrong decision. Full stop.",
            icon: <HeartHandshake size={32} strokeWidth={1.5} />,
            bg: "bg-white"
        },
        {
            t: "Temperament is Mandatory.",
            d: "A beautiful coat won’t help if a dog can’t feel safe, confident, and loved in the world. We raise dogs meant to live closely with people.",
            icon: <ShieldCheck size={32} strokeWidth={1.5} />,
            bg: "bg-brand-blue-500/15"
        },
        {
            t: "Health is a responsibility.",
            d: "Testing, transparency, and honesty matter, especially when things are inconvenient. It's a responsibility, not a marketing point.",
            icon: <Dna size={32} strokeWidth={1.5} />,
            bg: "bg-white"
        },
        {
            t: "The right home, not fastest.",
            d: "We care about where our puppies go. We care about who you are. And we care about how life will look for that dog ten years from now.",
            icon: <SearchCheck size={32} strokeWidth={1.5} />,
            bg: "bg-white"
        },
        {
            t: "Real life creates real dogs.",
            d: "Our puppies grow up hearing everyday sounds, meeting different people, and learning how to exist calmly in a home.",
            icon: <Home size={32} strokeWidth={1.5} />,
            bg: "bg-brand-blue-500/20"
        }
    ];

    const moments = [
        {
            img: point1,
            title: "Opening Eyes",
            desc: "The first time a puppy opens their eyes and sees the world.",
            id: "01"
        },
        {
            img: point2,
            title: "Wobbly Steps",
            desc: "The awkward, wobbly first steps across our living room floor.",
            id: "02"
        },
        {
            img: point3,
            title: "Quiet Sleep",
            desc: "The quiet moment when one falls asleep in the palm of your hand.",
            id: "03"
        },
    ];

    return (
        <div className="bg-white text-gray-700 leading-relaxed overflow-x-hidden">

            {/* SECTION 1: HERO & INTRO */}
            <section className="relative bg-white py-10 overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-start gap-10">

                        {/* Text Column */}
                        <div className="w-full lg:w-3/5">
                            <div className="inline-block px-4 py-1 bg-brand-pink-500 text-white text-xs font-bold uppercase tracking-[0.3em] mb-6">
                                Established with Love
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl fr font-black text-gray-800 leading-none mb-8 uppercase">
                                About the <br />
                                <span className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text">Breeder</span>
                            </h1>

                            <div className="max-w-xl">
                                <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-6 border-l-4 border-brand-blue-700 pl-6 uppercase tracking-tight">
                                    Who we are — <span className="text-brand-blue-500">Passionate people, playful poodles</span>
                                </h2>

                                <div className="space-y-4 text-gray-500 text-base leading-relaxed italic">
                                    <p>
                                        If you walked into our home on a normal day, you wouldn’t find a showroom or a quiet kennel.
                                        You’d probably hear tiny feet tapping across the floor, a puppy protesting bath time,
                                        and someone laughing because a red fluffball just tried to steal a sock.
                                    </p>
                                    <p className="not-italic font-semibold text-brand-blue-500 text-lg">
                                        That’s who we are!
                                    </p>
                                    <p>
                                        We are not breeders who hide behind glossy photos and big promises. We are hands-on,
                                        deeply involved, and completely in love with this breed. Every puppy here is known,
                                        noticed, and adored long before they ever meet their future family.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="w-full lg:w-2/5 relative">
                            {/* Abstract shape behind image */}
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-[12px] border-brand-blue-500 z-0 rounded-2xl" />

                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-sm">
                                <img
                                    src={middlePoodle}
                                    alt="Red Toy Poodle in a home environment"
                                    className="w-full h-[500px] object-cover object-top"
                                />
                                {/* Subtle overlay tag */}
                                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4">
                                    <p className="text-xs uppercase tracking-widest text-brand-pink-700 font-bold">
                                        Real Life • Real Dogs • Real Connection
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 2: THE ORIGIN STORY */}
            <section className="bg-blue-50 py-10 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">

                    {/* Header with Background Text Effect */}
                    <div className="relative mb-10 text-center lg:text-left">
                        <span className="absolute -top-10 left-0 text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black opacity-80 select-none fr hidden lg:block">
                            ORIGIN
                        </span>
                        <h2 className="relative z-10 text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text text-4xl md:text-5xl fr font-black uppercase tracking-tight">
                            How this all really started ?
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-10 items-start">

                        {/* Part 1: The First Poodle (Visual Card) */}
                        <div className="lg:col-span-5 relative group">
                            <div className="absolute inset-0 bg-brand-blue-500/20 rounded-3xl translate-x-3 translate-y-3"></div>
                            <div className="relative bg-white px-6 py-8 sm:p-8 md:p-12 rounded-3xl shadow-sm border border-brand-blue-500/30">
                                <p className="text-brand-pink-700 font-semibold mb-4 tracking-widest uppercase text-xs">Phase 01</p>
                                <p className="text-2xl font-medium text-gray-800 leading-snug mb-6">
                                    This did not begin with a plan to <span className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text">“become breeders.”</span>
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    It started the way it often does — with one Toy Poodle who completely changed everything.
                                    That first dog wasn’t perfect on paper. What she was, was smart, affectionate, expressive,
                                    and endlessly entertaining.
                                </p>
                                <img
                                    src={poodleSmall}
                                    alt="First Poodle"
                                    className="mt-8 rounded-xl w-full h-80 object-cover"
                                />
                            </div>
                        </div>

                        {/* Part 2: Curiosity & Research (Staggered text) */}
                        <div className="lg:col-span-7 space-y-12 lg:pl-12">
                            <div className="max-w-xl">
                                <h3 className="text-brand-pink-700 fr font-bold text-xl md:text-2xl mb-4">The Curiosity Phase</h3>
                                <p className="text-brand-blue-500 text-base md:text-lg leading-relaxed">
                                    She made us curious. Curious about genetics. Curious about temperament.
                                    Curious about why some dogs seem to glow with confidence while others struggle.
                                </p>
                                <div className="mt-6 flex gap-4">
                                    <div className="h-[1px] w-12 bg-brand-blue-500/20 self-center"></div>
                                    <p className="italic text-brand-pink-700 text-sm">Late nights reading pedigrees & studying health testing</p>
                                </div>
                            </div>

                            {/* The "2 AM" Highlight Block */}
                            <div className="bg-white/60 backdrop-blur-md px-4 py-6 md:p-8 rounded-2xl border-l-8 border-brand-pink-500 shadow-sm">
                                <h3 className="text-gray-800 fr font-bold text-xl mb-4 uppercase tracking-tighter">The Real Lessons</h3>
                                <p className="text-gray-700 leading-loose italic">
                                    "Then came the lessons you don’t get from books.
                                    <span className="text-brand-pink-500 font-bold not-italic px-1 underline decoration-brand-blue-500">Weighing newborns at 2 a.m.</span>
                                    Holding our breath during first feedings. Learning to tell the difference
                                    between a tired squeak and a hungry cry."
                                </p>
                                <div className="mt-8 grid grid-cols-3 gap-2">
                                    <div className="h-1 bg-brand-pink-700"></div>
                                    <div className="h-1 bg-brand-blue-500"></div>
                                    <div className="h-1 bg-white"></div>
                                </div>
                            </div>

                            <div className="max-w-xl">
                                <p className="text-brand-blue-500 text-sm md:text-base leading-relaxed">
                                    Realizing that breeding well is equal parts science, instinct, and humility.
                                    There is nothing casual about doing this right.
                                    <span className="block mt-4 text-brand-pink-700 fr font-bold text-xl md:text-2xl uppercase tracking-tighter">
                                        And there is nothing more rewarding.
                                    </span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 3: BELIEFS (The Grid) */}
            <section className="py-10 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-gray-900 text-4xl md:text-5xl fr uppercase font-black leading-none mb-6">
                        What we <br />
                        <span className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text underline decoration-brand-blue-500 decoration-8 underline-offset-8">Believe</span>
                    </h2>
                    <p className="text-brand-blue-500 text-base md:text-lg max-w-xl mx-auto">
                        There are a lot of breeders out there. What makes the difference is what guides them when no one is watching.
                    </p>
                </div>

                {/* The 3-then-2 Centered Flexbox Layout */}
                <div className="flex flex-wrap justify-center gap-4">
                    {beliefs.map((item, idx) => (
                        <div
                            key={idx}
                            className={`${item.bg} border border-brand-blue-500 px-6 py-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden w-full md:w-[calc(48%-1.5rem)] lg:w-[calc(33.33%-1.5rem)]`}
                        >
                            <span className="absolute -right-4 -bottom-8 text-9xl font-black text-gray-100/50 group-hover:text-brand-blue-500/20 transition-colors pointer-events-none">
                                {idx + 1}
                            </span>
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm mb-8 text-brand-pink-700 group-hover:bg-brand-pink-700 group-hover:text-white transition-all duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4 relative z-10 fr ">{item.t}</h3>
                            <p className="text-gray-500 leading-relaxed relative z-10">{item.d}</p>
                            <div className="absolute bottom-0 left-0 h-1 bg-brand-blue-500 w-0 group-hover:w-full transition-all duration-700"></div>
                        </div>
                    ))}

                    {/* Full Width Quote Card */}
                    <div className="max-w-6xl mt-6 bg-gray-900 p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                        <p className="text-white text-base md:text-lg md:max-w-2xl italic opacity-90 leading-relaxed text-center md:text-left">
                            "If a decision benefits us but not the dog, it’s the wrong decision. Full stop."
                        </p>
                        <p className="text-brand-pink-500 font-bold uppercase tracking-widest text-sm shrink-0">
                            Our Core Promise
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: MENTORSHIP */}
            <section className="bg-white py-10 px-8 border-gray-100">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                    <img src={aboutBreeder} alt="Mentorship" className="w-full md:w-1/3 h-88 object-cover rounded-full shadow-sm" />
                    <div className="flex-1">
                        <h2 className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text text-2xl md:text-3xl fr uppercase font-bold mb-6">How we learned to do this properly ?</h2>
                        <p className="text-base md:text-lg text-brand-blue-500 mb-6">
                            No one becomes a good breeder alone. We were incredibly fortunate to learn under <strong>Linda DuBose of Scarlet’s Fancy Poodles</strong>, through real mentorship.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                            <p className="bg-brand-blue-500/15 p-3 rounded flex items-center gap-2"><Languages size={20} />Reading puppy body language</p>
                            <p className="bg-brand-pink-500/15 p-3 rounded flex items-center gap-2"><Ban size={20} /> When NOT to breed</p>
                            <p className="bg-brand-pink-500/15 p-3 rounded flex items-center gap-2"><ShieldCheck size={20} /> Patience protects the breed</p>
                            <p className="bg-brand-blue-500/15 p-3 rounded flex items-center gap-2"><Blocks size={20} /> Integrity outlasts trends</p>
                        </div>
                        <p className="mt-8 italic text-brand-blue-500">"Breeding is a community effort. Pretending otherwise is how breeds get damaged."</p>
                    </div>
                </div>
            </section>

            {/* SECTION 5: WHO IS RAISING THEM */}
            <section className="py-10 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-stretch gap-0">

                        {/* LEFT SIDE: Narrative & The "No Mystery" Label */}
                        <div className="lg:w-5/12 pb-10 lg:pb-0 lg:pr-10 flex flex-col justify-center">
                            <span className="text-brand-pink-700 font-semibold tracking-widest uppercase text-xs mb-6 block">
                                Direct Connection
                            </span>
                            <h2 className="text-gray-900 text-3xl sm:text-4xl fr uppercase md:text-5xl font-black leading-[0.9] mb-10 tracking-tighter">
                                Who is actually <br />
                                <span className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text">raising your puppy</span>
                            </h2>

                            <div className="space-y-6 text-gray-500 text-base md:text-lg max-w-md">
                                <p>
                                    This is a small program on purpose. There is no rotating staff. No handoffs.
                                    <span className="text-brand-pink-700 font-bold px-1 underline decoration-brand-blue-500 decoration-4">
                                        No mystery about who raised your puppy.
                                    </span>
                                </p>
                                <p>
                                    The same people who weigh the puppies and clean the whelping area are the people you’ll talk to when you have questions.
                                </p>
                            </div>

                            {/* Tasks as a Sleek Vertical List */}
                            <div className="mt-10 space-y-4">
                                {["Weigh the puppies", "Clean the whelping area", "First grooming session", "Sit on the floor during playtime"].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group cursor-default">
                                        <div className="w-8 h-[1px] bg-brand-blue-500/20 group-hover:w-12 transition-all duration-300"></div>
                                        <span className="uppercase text-xs font-bold tracking-widest text-brand-blue-500 group-hover:text-brand-pink-700 transition-colors">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT SIDE: The Mosaic & Personal Insight */}
                        <div className="lg:w-7/12 lg:pl-16 pt-12 lg:pt-0 flex flex-col">
                            <div className="relative">
                                {/* Main Large Image */}
                                <div className="aspect-[16/14] overflow-hidden rounded-sm shadow-2xl">
                                    <img
                                        src={aboutBreeder2}
                                        alt="Raising puppies"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Overlapping Insight Card */}
                                <div className="absolute -bottom-10 -left-10 bg-brand-blue-700/30 p-8 md:p-12 max-w-sm shadow-sm hidden md:block">
                                    <p className="text-white text-base md:text-lg font-medium leading-normal">
                                        "We know who prefers the red toy over the blue one. We know who falls asleep mid-play."
                                    </p>
                                    <p className="mt-6 text-xs font-black uppercase tracking-widest text-brand-pink-500">
                                        The details matter.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 6: THE PROMISE (2028) */}
            <section className="py-10 px-8 text-center max-w-5xl mx-auto">
                <h2 className="text-brand-pink-700 uppercase tracking-widest text-xs font-bold mb-6">Looking Ahead</h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase fr tracking-tight text-gray-900 mb-8">By <span className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text">2028,</span> our goal is not to be <span className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text">bigger.</span> It’s to be <span className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text">better.</span></h3>
                <p className="text-base md:text-lg text-brand-blue-500 italic mb-12">
                    "If this ever stops being about love for the dogs, we’ll stop. That’s the promise."
                </p>
                <div className="flex flex-wrap justify-center gap-8 text-brand-pink-700 font-medium">
                    <span className="flex items-center gap-2"><LineSquiggle /> Strengthening Red Lines</span>
                    <span className="flex items-center gap-2"><AudioLines /> Sound Structure</span>
                    <span className="flex items-center gap-2"><AudioWaveform /> Joyful Temperaments</span>
                </div>
            </section>

            {/* SECTION 7: MOMENTS (Candid Gallery) */}
            <section className="py-10 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Header Area */}
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 gap-6">
                        <div className="relative">
                            <span className="text-brand-blue-500 fr font-black text-4xl md:text-5xl lg:text-6xl opacity-20 absolute -top-8 -left-4 select-none">
                                CANDID
                            </span>
                            <h2 className="text-transparent bg-gradient-to-r from-brand-pink-700 to-brand-blue-700 bg-clip-text text-3xl sm:text-4xl md:text-5xl fr font-black uppercase tracking-tighter relative z-10">
                                Moments we love most
                            </h2>
                        </div>
                    </div>

                    {/* Horizontal Row Wrapper */}
                    <div className="flex overflow-x-auto pb-10 gap-4 snap-x snap-mandatory no-scrollbar">
                        {moments.map((item, i) => (
                            <div
                                key={i}
                                className="min-w-[300px] md:min-w-[400px] snap-center group"
                            >
                                {/* Image Container with Custom Frame */}
                                <div className="relative h-[500px] w-full mb-6 overflow-hidden rounded-2xl">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                                    />

                                    {/* ID Tag */}
                                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
                                        <span className="text-brand-pink-700 font-black text-xs">{item.id}</span>
                                    </div>

                                    {/* Glassmorphism Bottom Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-brand-pink-700/90 to-transparent backdrop-blur-sm">
                                        <p className="text-white text-sm font-medium leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Title & Decorative Line */}
                                <div className="px-2">
                                    <div className="flex items-center gap-4 mb-1">
                                        <div className="h-[2px] w-8 bg-brand-blue-500"></div>
                                        <h3 className="text-brand-pink-700 font-black text-xl uppercase tracking-tighter">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-900 text-xs font-bold uppercase pl-12">
                                        Daily Life • 2026
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Subtle Scroll Hint */}
                    <div className="flex justify-center mt-4">
                        <div className="w-48 h-1 bg-brand-pink-500 rounded-full overflow-hidden">
                            <div className="w-1/3 h-full bg-brand-blue-500 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* CSS for hiding scrollbar but keeping functionality */}
                <style dangerouslySetInnerHTML={{
                    __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
            </section>

        </div>
    );
};

export default AboutBreeder;
