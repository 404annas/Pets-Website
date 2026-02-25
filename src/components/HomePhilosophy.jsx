import { Activity, Heart, Ruler } from 'lucide-react';

const HomePhilosophy = () => {
    return (
        <section className="py-10 px-6 bg-gradient-to-b from-white to-pink-50">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
                <div className="lg:w-1/2 order-2 lg:order-1">
                    <div className="grid grid-cols-1 gap-4">
                        {[
                            { t: "Health", d: "Parents are screened following breed guidelines to reduce genetic risks.", icon: <Activity className="text-pink-700" /> },
                            { t: "Temperament", d: "Calm confidence and affection matter. We breed for stable, loving souls.", icon: <Heart className="text-blue-700" /> },
                            { t: "Structure", d: "Striving to preserve the elegance and balance Poodles are known for.", icon: <Ruler className="text-pink-700" /> }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-6 rounded-3xl border border-pink-200 hover:border-pink-400 transition-colors duration-300">
                                <div className="shrink-0">{item.icon}</div>
                                <div>
                                    <h4 className="font-black uppercase text-base text-gray-900">{item.t}</h4>
                                    <p className="text-gray-500 text-sm mt-1">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                    <h2 className="text-pink-700 text-xs font-semibold uppercase tracking-widest mb-6">Our Philosophy</h2>
                    <h3 className="text-3xl md:text-4xl font-black uppercase fr text-gray-900 mb-8">We believe great dogs <br /> are <span className="text-transparent bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text">not accidents.</span></h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-8">
                        This approach is not fast, easy, or highly profitable. It is simply the right way to do it.
                        Every litter is the result of careful planning and a deep respect for the Toy Poodle breed.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HomePhilosophy;