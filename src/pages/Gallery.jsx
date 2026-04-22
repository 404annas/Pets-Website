import React, { useEffect, useState } from 'react';
import { client, urlFor } from "../lib/sanity";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "galleryImage"] | order(order asc)`;

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

  return (
    <main className="bg-gradient-to-b from-white via-rose-50/40 to-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase text-brand-pink-700">
            Full Gallery
          </p>
          <h1 className="fr bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-4xl font-black uppercase tracking-tight text-transparent sm:text-5xl">
            Every Picture In One Place
          </h1>
          <p className="mt-4 text-sm leading-7 text-brand-blue-500 sm:text-base">
            Browse the complete collection of Poodles.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20 font-bold text-pink-600">Loading Poodle World...</div>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {images.length > 0 ? images.map((imgDoc, index) => (
              <div
                key={imgDoc._id || index}
                className="group overflow-hidden rounded-[16px] border border-white/80 bg-white shadow-sm"
              >
                {imgDoc.image && (
                  <img
                    loading="lazy"
                    src={urlFor(imgDoc.image).url()}
                    alt={imgDoc.title || "Poodle"}
                    className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
            )) : (
              <div className="col-span-full text-center text-gray-400 py-10">No images found.</div>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Gallery;
