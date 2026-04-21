import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { client, urlFor } from "../lib/sanity";

const HomeGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sanity Query: Images ordered by the 'order' field
    const query = `*[_type == "galleryImage"] | order(order asc) [0...24]`;

    client.fetch(query)
      .then((data) => {
        setImages(data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Gallery Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-20 font-bold text-pink-600">Loading Poodle World...</div>;

  return (
    <section className="bg-gradient-to-b from-white via-rose-50/40 to-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase text-brand-pink-700">Gallery</p>
          <h2 className="fr bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-3xl font-black uppercase tracking-tight text-transparent sm:text-4xl">
            A Peek Into Our Poodle World
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8">
          {images.length > 0 ? images.map((imgDoc, index) => (
            <div key={imgDoc._id || index} className="group overflow-hidden rounded-[15px] border border-white/70 bg-white shadow-sm">
              {imgDoc.image && (
                <img
                  loading="lazy"
                  src={urlFor(imgDoc.image).url()}
                  alt={imgDoc.title || "Poodle"}
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-48 xl:h-56"
                />
              )}
            </div>
          )) : (
            <div className="col-span-full text-center text-gray-400 py-10">No images found in Sanity. Please upload some!</div>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link to="/gallery" className="inline-flex items-center justify-center rounded-lg bg-pink-500 px-8 py-4 text-sm font-bold uppercase text-white hover:bg-pink-700 transition-all hover:scale-105">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;