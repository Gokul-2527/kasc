"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import Lightbox from "./Lightbox";
import { galleryCategories, galleryImages } from "../../data/gallery";

const aspectClass = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

export default function GalleryGrid({ showFilters = true, limit }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered = useMemo(() => {
    const list =
      activeCategory === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory);
    return limit ? list.slice(0, limit) : list;
  }, [activeCategory, limit]);

  return (
    <div>
      {showFilters && (
        <div className="mb-10 flex flex-wrap gap-2.5">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                activeCategory === cat
                  ? "border-navy bg-navy text-white"
                  : "border-hairline text-muted hover:border-navy hover:text-navy"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {filtered.map((img, i) => (
          <motion.button
            key={img.id}
            layoutId={`gallery-${img.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
            onClick={() =>
              setActiveIndex(filtered.findIndex((f) => f.id === img.id))
            }
            className={`group relative block w-full overflow-hidden rounded-2xl ${
              aspectClass[img.aspect]
            } break-inside-avoid`}
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-dark/80 via-navy-dark/0 to-navy-dark/0 p-5 opacity-0 transition duration-300 group-hover:opacity-100">
              <span className="text-sm font-semibold text-white">
                {img.title}
              </span>
              <span className="text-xs text-white/70">{img.category}</span>
            </div>
            <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-navy opacity-0 transition group-hover:opacity-100">
              <Expand size={14} />
            </span>
          </motion.button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={filtered}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNav={(dir) =>
            setActiveIndex(
              (prev) => (prev + dir + filtered.length) % filtered.length
            )
          }
        />
      )}
    </div>
  );
}
