"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageCurrencySelector from "./LanguageCurrencySelector";
import DarkModeToggle from "./DarkModeToggle";
import { useAppContext } from "@/app/contexts/AppContext";

export default function Header() {
  const { favorites } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-outline-variant/20 dark:border-slate-800/50">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-adventure-orange rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3M9 21h6" />
              </svg>
            </div>
            <span className="font-montserrat text-xl font-bold text-deep-slate dark:text-white">Wanderlust</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-on-surface-variant dark:text-slate-400 hover:text-deep-slate dark:hover:text-white transition-colors">
              Inicio
            </Link>
            <Link href="/tours/valle-sagrado" className="text-sm font-medium text-on-surface-variant dark:text-slate-400 hover:text-deep-slate dark:hover:text-white transition-colors">
              Tours
            </Link>
            <Link href="/blog" className="text-sm font-medium text-on-surface-variant dark:text-slate-400 hover:text-deep-slate dark:hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/profile" className="text-sm font-medium text-on-surface-variant dark:text-slate-400 hover:text-deep-slate dark:hover:text-white transition-colors">
              Mi Perfil
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/profile/favorites"
              className="relative p-2 text-on-surface-variant dark:text-slate-400 hover:text-deep-slate dark:hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {favorites.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-adventure-orange text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>
            <DarkModeToggle />
            <LanguageCurrencySelector />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-on-surface-variant"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-outline-variant/20 dark:border-slate-800/50 pt-4">
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm font-medium text-on-surface-variant dark:text-slate-400 hover:text-deep-slate dark:hover:text-white" onClick={() => setMobileMenuOpen(false)}>Inicio</Link>
              <Link href="/tours/valle-sagrado" className="text-sm font-medium text-on-surface-variant dark:text-slate-400 hover:text-deep-slate dark:hover:text-white" onClick={() => setMobileMenuOpen(false)}>Tours</Link>
              <Link href="/blog" className="text-sm font-medium text-on-surface-variant dark:text-slate-400 hover:text-deep-slate dark:hover:text-white" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
              <Link href="/profile" className="text-sm font-medium text-on-surface-variant dark:text-slate-400 hover:text-deep-slate dark:hover:text-white" onClick={() => setMobileMenuOpen(false)}>Mi Perfil</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
