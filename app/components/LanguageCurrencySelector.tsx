"use client";

import { useState } from "react";
import { useAppContext } from "@/app/contexts/AppContext";

const languages = [
  { code: "es", label: "ES", name: "Español" },
  { code: "en", label: "EN", name: "English" },
];

const currencies = [
  { code: "USD", label: "USD", symbol: "$" },
  { code: "EUR", label: "EUR", symbol: "€" },
  { code: "PEN", label: "PEN", symbol: "S/" },
];

export default function LanguageCurrencySelector() {
  const { language, setLanguage, currency, setCurrency } = useAppContext();
  const [open, setOpen] = useState<"lang" | "currency" | null>(null);

  return (
    <div className="flex items-center gap-1">
      <div className="relative">
        <button
          onClick={() => setOpen(open === "lang" ? null : "lang")}
          className="flex items-center gap-1 px-2 sm:px-3 py-1.5 text-sm font-medium text-on-surface-variant dark:text-slate-400 hover:text-deep-slate dark:hover:text-white hover:bg-surface-container rounded-lg transition-colors"
        >
          {language === "es" ? (
            <span className="text-base">🇪🇸</span>
          ) : (
            <span className="text-base">🇬🇧</span>
          )}
          <span className="hidden sm:inline">{languages.find(l => l.code === language)?.label}</span>
        </button>
        {open === "lang" && (
          <div className="absolute top-full right-0 sm:left-0 mt-1 bg-white dark:bg-slate-900 rounded-xl shadow-level-3 dark:shadow-black/20 border border-outline-variant/30 py-1 min-w-[130px] z-50">
            {languages.map(l => (
              <button
                key={l.code}
                onClick={() => { setLanguage(l.code as "es" | "en"); setOpen(null); }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-surface-container transition-colors ${
                  language === l.code ? "font-semibold text-deep-slate" : "text-on-surface-variant"
                }`}
              >
                {l.name}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="relative">
        <button
          onClick={() => setOpen(open === "currency" ? null : "currency")}
          className="flex items-center gap-1 px-2 sm:px-3 py-1.5 text-sm font-medium text-on-surface-variant dark:text-slate-400 hover:text-deep-slate dark:hover:text-white hover:bg-surface-container rounded-lg transition-colors"
        >
          {currencies.find(c => c.code === currency)?.symbol}
          <span className="hidden sm:inline">{currencies.find(c => c.code === currency)?.label}</span>
        </button>
        {open === "currency" && (
          <div className="absolute top-full right-0 mt-1 bg-white dark:bg-slate-900 rounded-xl shadow-level-3 dark:shadow-black/20 border border-outline-variant/30 py-1 min-w-[100px] z-50">
            {currencies.map(c => (
              <button
                key={c.code}
                onClick={() => { setCurrency(c.code as "USD" | "EUR" | "PEN"); setOpen(null); }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-surface-container transition-colors ${
                  currency === c.code ? "font-semibold text-deep-slate" : "text-on-surface-variant"
                }`}
              >
                {c.symbol} {c.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
