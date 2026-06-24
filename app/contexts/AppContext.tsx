"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

type Language = "es" | "en";
type Currency = "USD" | "EUR" | "PEN";

interface AppState {
  language: Language;
  currency: Currency;
  favorites: string[];
  searchQuery: string;
  darkMode: boolean;
  setLanguage: (lang: Language) => void;
  setCurrency: (curr: Currency) => void;
  toggleFavorite: (tourId: string) => void;
  isFavorite: (tourId: string) => boolean;
  setSearchQuery: (query: string) => void;
  toggleDarkMode: () => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

const currencySymbols: Record<Currency, string> = {
  USD: "$",
  EUR: "€",
  PEN: "S/"
};

export function convertPrice(price: number, from: Currency, to: Currency): number {
  if (from === to) return price;
  const rates: Record<string, number> = {
    "USD-EUR": 0.92,
    "USD-PEN": 3.75,
    "EUR-USD": 1.09,
    "EUR-PEN": 4.08,
    "PEN-USD": 0.27,
    "PEN-EUR": 0.25,
  };
  const key = `${from}-${to}`;
  const rate = rates[key];
  return rate ? Math.round(price * rate) : price;
}

export function getCurrencySymbol(currency: Currency): string {
  return currencySymbols[currency];
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleFavorite = useCallback((tourId: string) => {
    setFavorites(prev =>
      prev.includes(tourId) ? prev.filter(id => id !== tourId) : [...prev, tourId]
    );
  }, []);

  const isFavorite = useCallback((tourId: string) => favorites.includes(tourId), [favorites]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  return (
    <AppContext.Provider value={{
      language, currency, favorites, searchQuery, darkMode,
      setLanguage, setCurrency, toggleFavorite, isFavorite, setSearchQuery, toggleDarkMode
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within AppProvider");
  return ctx;
}
