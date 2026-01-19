import React from 'react';
import { Sparkles, Palette, Brain, ShieldCheck } from 'lucide-react';

const WhyRed = () => {
    const points = [
        { t: "Color that lasts", d: "We focus on lines known for richer tones rather than apricot shades that fade quickly.", icon: <Palette /> },
        { t: "Striking black points", d: "Dark noses, eye rims, and lips create that classic, dramatic contrast.", icon: <Sparkles /> },
        { t: "Bright Minds", d: "Red Toy Poodles are known for being expressive and deeply bonded to people.", icon: <Brain /> },
        { t: "Bred with Intention", d: "Every pairing is planned with structure and health in mind, never shortcuts.", icon: <ShieldCheck /> }
    ];

    return (
        <section className="py-10 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-[#8ECC14] text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Why Red Toy Poodles <br /> Steal Hearts</h2>
                    <p className="text-gray-500 font-semibold uppercase text-xs">More than a color. It is a presence.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {points.map((p, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group">
                            <div className="w-12 h-12 bg-[#E2F1C4] rounded-xl flex items-center justify-center text-[#8ECC14] mb-6 group-hover:bg-[#8ECC14] group-hover:text-white transition-colors">
                                {p.icon}
                            </div>
                            <h3 className="text-lg font-black uppercase tracking-tight text-gray-900 mb-3">{p.t}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{p.d}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <p className="text-lg text-gray-600 font-medium">"We do not chase color alone. We protect the whole dog."</p>
                </div>
            </div>
        </section>
    );
};

export default WhyRed;