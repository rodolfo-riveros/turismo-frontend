"use client";

import Link from "next/link";
import { useAppContext } from "@/app/contexts/AppContext";
import { tours } from "@/app/data/tours";
import TourCard from "@/app/components/TourCard";

export default function FavoritesPage() {
  const { favorites } = useAppContext();
  const favoriteTours = tours.filter(t => favorites.includes(t.id));

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-12 py-10 transition-colors">
      <Link href="/profile" className="text-sm text-sky-blue hover:text-sky-blue/80 mb-2 inline-block">← Volver al perfil</Link>
      <h1 className="font-montserrat text-2xl font-bold text-deep-slate mb-8">Mis favoritos</h1>

      {favoriteTours.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-level-1 dark:shadow-black/20 p-12 text-center transition-colors">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h2 className="font-montserrat text-xl font-bold text-deep-slate mb-2">Sin favoritos aún</h2>
          <p className="text-sm text-on-surface-variant mb-6">Guarda tus tours favoritos con el corazón y compáralos aquí.</p>
          <Link href="/" className="inline-flex px-6 py-3 bg-adventure-orange text-white text-sm font-semibold rounded-xl hover:bg-adventure-orange/90 transition-colors">
            Explorar tours
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteTours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      )}
    </div>
  );
}
