"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function PhotoGallery({ images, title }: { images: string[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  function goTo(index: number, dir: number) {
    setDirection(dir);
    setActiveIndex(index);
  }

  function next() {
    goTo(activeIndex === images.length - 1 ? 0 : activeIndex + 1, 1);
  }

  function prev() {
    goTo(activeIndex === 0 ? images.length - 1 : activeIndex - 1, -1);
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchMove(e: React.TouchEvent) {
    touchEndX.current = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="space-y-3">
      <div
        className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/9] md:aspect-[2.2/1] bg-surface-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            alt={`${title} - Foto ${activeIndex + 1}`}
            className="w-full h-full object-cover absolute inset-0 pointer-events-none"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4">
          <button
            onClick={prev}
            className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm flex items-center justify-center text-deep-slate hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-level-1 dark:shadow-black/20"
            aria-label="Foto anterior"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm flex items-center justify-center text-deep-slate hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-level-1 dark:shadow-black/20"
            aria-label="Foto siguiente"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-deep-slate/70 text-white text-xs font-medium rounded-full backdrop-blur-sm">
          {activeIndex + 1} / {images.length}
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 sm:hidden">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > activeIndex ? 1 : -1)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === activeIndex ? "bg-white w-3" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="hidden sm:flex gap-2 overflow-x-auto pb-1 scrollbar-none -mx-4 md:mx-0 px-4 md:px-0">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > activeIndex ? 1 : -1)}
            className={`shrink-0 w-20 h-16 rounded-xl overflow-hidden border-2 transition-all ${
              i === activeIndex ? "border-adventure-orange opacity-100" : "border-transparent opacity-60 hover:opacity-80"
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
