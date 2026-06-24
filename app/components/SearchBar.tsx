"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { tours } from "@/app/data/tours";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<typeof tours>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleChange(value: string) {
    setQuery(value);
    if (value.length >= 2) {
      const filtered = tours.filter(t =>
        t.title.toLowerCase().includes(value.toLowerCase()) ||
        t.location.toLowerCase().includes(value.toLowerCase()) ||
        t.category.some(c => c.toLowerCase().includes(value.toLowerCase()))
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }

  function handleSelect(slug: string) {
    setShowSuggestions(false);
    setQuery("");
    router.push(`/tours/${slug}`);
  }

  return (
    <div ref={wrapperRef} className="relative w-full max-w-2xl mx-auto">
      <div className="flex items-center bg-white dark:bg-slate-900 rounded-2xl shadow-level-2 dark:shadow-black/20 border border-outline-variant/20 overflow-hidden transition-all focus-within:shadow-level-3 focus-within:border-sky-blue">
        <svg className="w-5 h-5 text-on-surface-variant ml-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={e => handleChange(e.target.value)}
          onFocus={() => query.length >= 2 && setShowSuggestions(true)}
          placeholder="Busca destinos, aventuras o experiencias..."
          className="flex-1 px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-deep-slate placeholder-on-surface-variant/50 bg-transparent outline-none min-w-0"
        />
        <button className="mr-1 sm:mr-2 px-4 sm:px-5 py-2.5 bg-adventure-orange text-white text-sm font-semibold rounded-xl hover:bg-adventure-orange/90 transition-colors shrink-0">
          Buscar
        </button>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 sm:left-auto right-0 mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-level-3 dark:shadow-black/20 border border-outline-variant/20 overflow-hidden z-40 max-h-80 overflow-y-auto">
          {suggestions.map(tour => (
            <button
              key={tour.id}
              onClick={() => handleSelect(tour.slug)}
              className="w-full flex items-center gap-4 px-5 py-3.5 hover:bg-surface-container transition-colors text-left"
            >
              <img
                src={tour.images[0]}
                alt={tour.title}
                className="w-12 h-12 rounded-xl object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-deep-slate truncate">{tour.title}</p>
                <p className="text-xs text-on-surface-variant truncate">{tour.location} · {tour.duration}</p>
              </div>
              <span className="text-sm font-bold text-adventure-orange shrink-0">${tour.price}</span>
            </button>
          ))}
        </div>
      )}

      {showSuggestions && query.length >= 2 && suggestions.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-level-3 dark:shadow-black/20 border border-outline-variant/20 p-5 text-center z-40">
          <p className="text-sm text-on-surface-variant">No encontramos resultados para &ldquo;{query}&rdquo;</p>
        </div>
      )}
    </div>
  );
}
