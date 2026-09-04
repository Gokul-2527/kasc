"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ images, activeIndex, onClose, onNav }) {
  const image = images[activeIndex];
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-dark/95 p-4 sm:p-10"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-gold hover:text-navy-dark"
        >
          <X size={20} />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); onNav(-1); }}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 hidden -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-gold hover:text-navy-dark sm:flex"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onNav(1); }}
          aria-label="Next image"
          className="absolute right-3 top-1/2 hidden -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-gold hover:text-navy-dark sm:flex"
        >
          <ChevronRight size={22} />
        </button>

        <motion.div
          key={image.id}
          layoutId={`gallery-${image.id}`}
          onClick={(e) => e.stopPropagation()}
          className="relative h-[70vh] w-full max-w-3xl overflow-hidden rounded-2xl"
        >
          <Image src={image.src} alt={image.title} fill sizes="90vw" className="object-contain" />
        </motion.div>

        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-5 py-2 text-center text-sm text-white backdrop-blur-md"
        >
          <span className="font-medium">{image.title}</span>
          <span className="ml-2 text-white/50">{image.category}</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
