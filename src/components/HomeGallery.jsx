import { Link } from "react-router-dom";
import {
  galleryImages,
  HOME_GALLERY_PREVIEW_COUNT,
} from "../data/galleryImages";

const previewImages = galleryImages.slice(0, HOME_GALLERY_PREVIEW_COUNT);

const HomeGallery = () => {
  return (
    <section className="bg-gradient-to-b from-white via-rose-50/40 to-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase text-brand-pink-700">
            Gallery
          </p>
          <h2 className="fr bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-3xl font-black uppercase tracking-tight text-transparent sm:text-4xl">
            A Peek Into Our Poodle World
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8">
          {previewImages.map((image) => (
            <div
              key={image.alt}
              className="group overflow-hidden rounded-[15px] border border-white/70 bg-white"
            >
              <img
                loading="lazy"
                src={image.src}
                alt={image.alt}
                className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-48 xl:h-56"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center rounded-lg bg-brand-pink-500 px-8 py-4 text-sm font-bold uppercase fr text-white transition-all duration-300 hover:scale-105 hover:bg-brand-pink-700"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
