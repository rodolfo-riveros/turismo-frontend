"use client";

import { useState } from "react";

const filters = [
  { id: "solo", label: "Viajo solo", icon: "🧑" },
  { id: "kids", label: "Con niños", icon: "👨‍👩‍👧‍👦" },
  { id: "budget", label: "Económico", icon: "💰" },
  { id: "adventure", label: "Aventura", icon: "⛰️" },
  { id: "luxury", label: "Lujo", icon: "✨" },
  { id: "short", label: "Pocos días", icon: "📅" },
];

export default function PersonaFilters() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {filters.map(f => (
        <button
          key={f.id}
          onClick={() => setActive(active === f.id ? null : f.id)}
          className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
            active === f.id
              ? "bg-deep-slate text-white shadow-level-2"
              : "bg-white dark:bg-slate-900 text-on-surface-variant border border-outline-variant/30 hover:border-deep-slate/20 hover:shadow-level-1"
          }`}
        >
          <span className="text-sm sm:text-base">{f.icon}</span>
          {f.label}
        </button>
      ))}
    </div>
  );
}
