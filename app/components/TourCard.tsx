"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useAppContext, convertPrice, getCurrencySymbol } from "@/app/contexts/AppContext";
import type { Tour } from "@/app/data/tours";

export default function TourCard({ tour, index = 0 }: { tour: Tour; index?: number }) {
  const { currency, isFavorite, toggleFavorite } = useAppContext();

  return (
    <motion.div
      className="group bg-white dark:bg-slate-900 rounded-2xl shadow-level-1 hover:shadow-level-2 dark:shadow-black/20 dark:hover:shadow-black/30 transition-all overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <div className="relative overflow-hidden">
        <Link href={`/tours/${tour.slug}`}>
          <motion.img
            src={tour.images[0]}
            alt={tour.title}
            className="w-full h-56 object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
          />
        </Link>
        <button
          onClick={(e) => { e.preventDefault(); toggleFavorite(tour.id); }}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors ${
            isFavorite(tour.id)
              ? "bg-adventure-orange text-white"
              : "bg-white/80 dark:bg-slate-900/80 text-on-surface-variant hover:bg-white dark:hover:bg-slate-800"
          }`}
        >
          <motion.svg
            className="w-4 h-4"
            fill={isFavorite(tour.id) ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            whileTap={{ scale: 1.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </motion.svg>
        </button>
        <div className="absolute bottom-3 left-3 flex gap-1.5">
          {tour.category.slice(0, 2).map(cat => (
            <span key={cat}             className="px-2.5 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-xs font-medium text-deep-slate rounded-full">
              {cat}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1 text-sm text-on-surface-variant mb-1.5">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-xs">{tour.location}</span>
        </div>
        <Link href={`/tours/${tour.slug}`}>
          <h3 className="font-montserrat font-semibold text-lg text-deep-slate mb-2 group-hover:text-adventure-orange transition-colors">
            {tour.title}
          </h3>
        </Link>
        <p className="text-sm text-on-surface-variant line-clamp-2 mb-4 leading-relaxed">
          {tour.subtitle}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-deep-slate">{tour.rating}</span>
            <span className="text-xs text-on-surface-variant">({tour.reviewCount})</span>
          </div>
          <div className="text-right">
            <p className="text-xs text-on-surface-variant">Desde</p>
            <p className="text-lg font-bold text-adventure-orange">
              {getCurrencySymbol(currency)}{convertPrice(tour.price, "USD", currency)}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
