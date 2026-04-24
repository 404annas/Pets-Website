import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Imports (Retained as fallbacks)
import lindaImg1 from "../assets/about3.jfif";
import lindaImg2 from "../assets/linda2.jpeg";
import award from "../assets/award.webp";
import pet1_1 from "../assets/pet1-1.webp";
import pet1_2 from "../assets/pet1-2.webp";
import pet1_3 from "../assets/pet1-3.webp";
import pet2_1 from "../assets/pet2-1.webp";
import pet2_2 from "../assets/pet2-2.webp";
import pet2_3 from "../assets/pet2-3.webp";
import pet3_1 from "../assets/pet3-1.jpeg";
import pet3_2 from "../assets/pet3-2.jpeg";
import pet3_3 from "../assets/pet3-3.webp";
import pet3_4 from "../assets/pet3-4.webp";
import pet3_5 from "../assets/pet3-5.jpeg";
import pet4_1 from "../assets/pet4-1.webp";
import pet4_2 from "../assets/pet4-2.webp";
import pet4_3 from "../assets/pet4-3.webp";
import pet4_4 from "../assets/pet4-4.webp";
import pet5_1 from "../assets/pet5-1.webp";
import pet5_2 from "../assets/pet5-2.webp";
import pet5_3 from "../assets/pet5-3.webp";
import pet5_4 from "../assets/pet5-4.webp";
import pet5_5 from "../assets/pet5-5.webp";
import pet6_1 from "../assets/pet6-1.webp";
import pet6_2 from "../assets/pet6-2.webp";
import pet6_3 from "../assets/pet6-3.webp";
import pet6_4 from "../assets/pet6-4.webp";
import pet6_5 from "../assets/pet6-5.webp";
import pet6_6 from "../assets/pet6-6.webp";

// Sanity Client
const client = createClient({
  projectId: 'm951hq80', 
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});
const builder = imageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

const FancyPoodles = () => {
  const [sanityData, setSanityData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    client.fetch(`*[_type == "fancyPoodles"][0]`).then(data => setSanityData(data));
  }, []);

  const puppies = [
    {
      name: "Calypso’s Female",
      price: "$3000",
      stats: ["8–10 lbs", "Dark Apricot", "Female"],
      desc: "Estimated adult weight 8–10 lbs, dark apricot color, vet check 100%. Health, temperament and beauty guaranteed.",
      images: sanityData?.puppyImages?.[0]?.images?.map(img => urlFor(img).url()) || [pet1_1, pet1_2, pet1_3]
    },
    {
      name: "Lupe’s Female Toy",
      price: "$3500",
      stats: ["Toy Poodle", "DOB: 11/25/2026", "Female"],
      desc: "Passed her vet check 100%, her temperament is excellent. Health, temperament and beauty are guaranteed.",
      images: sanityData?.puppyImages?.[1]?.images?.map(img => urlFor(img).url()) || [pet2_1, pet2_2, pet2_3]
    },
    {
      name: "Apricot Male Puppy",
      price: "$3000",
      stats: ["12–14 lbs", "Miniature", "Male"],
      desc: "Male, estimated adult weight 12–14 lbs. Temperament excellent. AKC Registered.",
      images: sanityData?.puppyImages?.[2]?.images?.map(img => urlFor(img).url()) || [pet3_3, pet3_2, pet3_1, pet3_4, pet3_5]
    },
    {
      name: "Apricot Miniature Puppy",
      price: "$3000",
      stats: ["9–12 lbs", "Miniature", "AKC Reg."],
      desc: "Estimated adult weight 9–12 lbs. Temperament excellent. AKC Registered.",
      images: sanityData?.puppyImages?.[3]?.images?.map(img => urlFor(img).url()) || [pet4_1, pet4_2, pet4_3, pet4_4]
    },
    {
      name: "Black Miniature Male",
      price: "$3000",
      stats: ["10–12 lbs", "Miniature", "Male"],
      desc: "Black Miniature Male, estimated adult weight 10–12 lbs. Temperament is excellent, AKC Registered.",
      images: sanityData?.puppyImages?.[4]?.images?.map(img => urlFor(img).url()) || [pet5_5, pet5_2, pet5_3, pet5_4, pet5_1]
    },
    {
      name: "June 2026 Future Litters",
      price: "Res: $1000",
      stats: ["12–18 lbs", "Miniature & Toy", "Champion Lines"],
      desc: "Miniature and Toy Puppies ready to home June 2026. Taking reservations now. Males and Females available.",
      images: sanityData?.puppyImages?.[5]?.images?.map(img => urlFor(img).url()) || [pet6_2, pet6_1, pet6_3, pet6_4, pet6_5, pet6_6]
    },
  ];

  return (
    <div className="bg-white min-h-screen md:pt-10 pt-10">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden px-4 lg:px-10">
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 z-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 rounded-full border-2 border-brand-pink-500/50 bg-brand-pink-500/10 flex items-center justify-center">
                  <span className="text-xs text-brand-pink-500 font-semibold">AKC</span>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-brand-blue-500/50 bg-brand-blue-500/10 flex items-center justify-center">
                  <span className="text-xs text-brand-blue-500 font-semibold">20+</span>
                </div>
              </div>
              <span className="text-xs font-semibold tracking-wide text-brand-blue-500 uppercase">
                Premier Reputable Breeder - <span className="text-brand-pink-500">For Over 20 Years</span>
              </span>
            </div>
            <h1 className="fr text-5xl md:text-7xl font-bold leading-[0.82] tracking-tighter text-slate-900 uppercase">
              Pure <br />
              <span className="bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent">Elegance.</span>
            </h1>
            <p className="mt-6 sm:mt-10 text-sm sm:text-base md:text-lg text-brand-blue-500 max-w-xl leading-normal">
              A legacy of excellence for over two decades. Specializing in the distinct health, temperament, and sophisticated beauty of the Toy and Miniature Poodle.
            </p>
            <div className="mt-6 sm:mt-10 flex flex-row items-center gap-2">
              <Link to={"https://redandapricotpoodles.com/available-poodles/"} target="_blank">
                <button className="px-6 py-4 sm:px-8 sm:py-5 bg-brand-blue-500 border-2 border-brand-blue-700 text-white rounded-xl text-xs font-semibold uppercase hover:bg-brand-blue-700 transition-all cursor-pointer">
                  View Fancy Poodles
                </button>
              </Link>
              <button onClick={() => { navigate("/application"); window.scrollTo(0, 0); }} className="text-xs font-semibold uppercase px-6 py-4 sm:px-8 sm:py-5 bg-brand-pink-500 border-2 border-brand-pink-700 text-white rounded-xl hover:bg-brand-pink-700 transition-all cursor-pointer">
                Puppy Application
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-[3rem] overflow-hidden border-[16px] border-blue-100 shadow-sm z-10">
              <img src={sanityData?.heroImageMain ? urlFor(sanityData.heroImageMain).url() : lindaImg1} alt="Premium Poodle" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
            <div className="absolute -left-12 bottom-12 w-56 h-56 rounded-[2.5rem] overflow-hidden border-[12px] border-pink-100 shadow-sm z-20 hidden xl:block translate-x-4">
              <img src={sanityData?.heroImageSecondary ? urlFor(sanityData.heroImageSecondary).url() : lindaImg2} alt="Puppy Detail" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* AVAILABLE PUPPIES SECTION */}
      <section className="py-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="fr text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent uppercase">Available Puppies</h2>
          <p className="text-brand-blue-500 font-medium">Currently showcasing {puppies.length} litters</p>
        </div>

        <div className="space-y-10 md:space-y-20">
          {puppies.map((puppy, index) => (
            <div key={index} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12">
                <div className={`lg:col-span-7 grid grid-cols-6 gap-2 h-fit ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  {puppy.images.map((img, imgIdx) => (
                    <div key={imgIdx} className={`overflow-hidden rounded-sm bg-slate-50 ${imgIdx === 0 ? "col-span-4 row-span-2" : "col-span-2"}`}>
                      <img src={img} className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700" alt={puppy.name} />
                    </div>
                  ))}
                </div>
                <div className={`lg:col-span-5 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex gap-2 mb-6">
                    {puppy.stats.map((s, i) => <span key={i} className="text-[10px] font-medium uppercase px-3 py-1 bg-brand-blue-500 text-white rounded-full">{s}</span>)}
                  </div>
                  <h3 className="fr bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-3xl md:text-4xl mb-6 font-semibold">{puppy.name}</h3>
                  <p className="text-sm sm:text-base text-brand-blue-500 leading-normal mb-6 sm:mb-10 pb-6 sm:pb-10 border-b border-blue-100">{puppy.desc}</p>
                  <div className="flex items-center gap-8">
                    <div className="text-3xl md:text-4xl font-bold fr text-brand-blue-700">{puppy.price}</div>
                    <button onClick={() => { navigate("/application"); window.scrollTo(0,0); }} className="flex-1 bg-brand-pink-500 text-white py-3 sm:py-4 px-6 rounded-sm text-xs sm:text-sm font-bold uppercase hover:bg-brand-pink-700 transition-all cursor-pointer">Request Reservation</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRESS RELEASE SECTION */}
      <section className="py-10 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-1 rounded-full bg-brand-pink-500/10 text-brand-pink-500 text-xs font-semibold uppercase mb-6 fr">Press Release</div>
              <h2 className="fr text-3xl md:text-4xl uppercase bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent font-bold mb-6">Scarlet’s Fancy Poodles Awarded</h2>
              <p className="text-brand-blue-500">Honored for our commitment to excellence over 20 years.</p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img src={sanityData?.awardImage ? urlFor(sanityData.awardImage).url() : award} alt="Award" className="w-full h-96 rounded-xl object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* --- INFO GRID --- */}
      <section className="py-10 bg-slate-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 overflow-hidden rounded-xl">
          <div className="bg-white p-6 sm:p-12">
            <h4 className="fr text-2xl mb-8 bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent font-semibold">About Moyen Poodles</h4>
            <p className="text-brand-blue-500 text-sm leading-loose">Moyen Poodles are between 15 and 20 inches tall. A medium-sized breed between miniature and standard. Highly intelligent, energetic, and excellent service companions.</p>
          </div>
          <div className="bg-white p-6 sm:p-12">
            <h4 className="fr text-2xl mb-8 bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent font-semibold">Health Standards</h4>
            <ul className="space-y-3 text-sm text-brand-pink-500">
              <li className="flex items-center gap-3">✓ AKC Compliance & Registration</li>
              <li className="flex items-center gap-3">✓ All Sires Genetically Tested</li>
              <li className="flex items-center gap-3">✓ Microchipped & Licensed Vet Exams</li>
              <li className="flex items-center gap-3">✓ Reputable Breeder for 20+ Years</li>
            </ul>
          </div>
          <div className="bg-white p-6 sm:p-12">
            <h4 className="fr text-2xl mb-8 bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent font-semibold">Breeding Rights</h4>
            <p className="text-brand-blue-500 text-sm leading-loose">We sell our puppies to excellent pet homes with AKC limited registration. We are NOT granting breeding rights at this time. All puppies must be neutered by 6 months.</p>
          </div>
        </div>
      </section>


      {/* --- POLICY SECTION --- */}
      <section className="py-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="fr text-3xl md:text-4xl mb-8 bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent uppercase font-bold leading-7">Safety & Health <br /> Reservation Policies</h2>
            <div className="p-6 sm:p-8 bg-brand-pink-500/5 border border-brand-pink-500/50 rounded-sm">
              <p className="text-brand-pink-500 font-bold fr text-sm mb-4 uppercase tracking-wide">Strict Notice</p>
              <p className="text-brand-blue-500 text-sm leading-normal">"We are NOT accepting visits until further notice. Poodles are the most highly trainable canines, but require significant time and care. If you do not have the time, please do not apply."</p>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h5 className="fr text-xl mb-4 text-brand-blue-700">The Deposit Process</h5>
              <p className="text-brand-blue-500 text-sm leading-normal mb-6">To reserve a puppy, you must request a Link and Password. Consult with all family members and landlords first.</p>
              <div className="p-4 bg-brand-blue-500/5 text-brand-blue-500 text-xs font-bold rounded-sm border-l-4 border-brand-blue-500">LOCKED: Link expires 3 hours after receipt.</div>
            </div>
            <div>
              <h5 className="fr text-xl mb-4 text-brand-pink-700">Veterinary Policy</h5>
              <p className="text-brand-pink-500 text-sm leading-normal">Availability is based on passing their vet check at 7 to 8 weeks. Each puppy receives a health statement from a licensed vet noted on a sheet with their microchip number.</p>
            </div>
            <div className="md:col-span-2 pt-8 border-t border-blue-100 text-center">
              <p className="text-brand-blue-700 text-xs fr tracking-wider uppercase">Scarlet’s Fancy Poodles — Quality Breeding Since 2004</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FancyPoodles;