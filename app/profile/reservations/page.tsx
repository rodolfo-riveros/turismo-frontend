import Link from "next/link";

export default function ReservationsPage() {
  const reservations = [
    { tour: "Valle Sagrado Esencial", date: "15 Jun 2026", status: "Confirmado", price: "$378", code: "WL-2026-001" },
    { tour: "Machu Picchu VIP", date: "20 Jul 2026", status: "Pendiente", price: "$900", code: "WL-2026-002" },
    { tour: "Laguna Humantay", date: "12 Ago 2025", status: "Completado", price: "$170", code: "WL-2025-089" },
    { tour: "Cocina Andina", date: "5 Ene 2025", status: "Completado", price: "$75", code: "WL-2025-012" },
    { tour: "Amazonía Explorer", date: "18 Feb 2026", status: "Cancelado", price: "$0", code: "WL-2026-015" },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-12 py-10 transition-colors">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link href="/profile" className="text-sm text-sky-blue hover:text-sky-blue/80 mb-2 inline-block">← Volver al perfil</Link>
          <h1 className="font-montserrat text-2xl font-bold text-deep-slate">Mis reservas</h1>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-level-1 dark:shadow-black/20 overflow-hidden transition-colors">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant/20">
                <th className="text-left p-5 font-semibold text-deep-slate">Tour</th>
                <th className="text-left p-5 font-semibold text-deep-slate">Código</th>
                <th className="text-left p-5 font-semibold text-deep-slate">Fecha</th>
                <th className="text-left p-5 font-semibold text-deep-slate">Estado</th>
                <th className="text-left p-5 font-semibold text-deep-slate">Total</th>
                <th className="text-left p-5 font-semibold text-deep-slate">Voucher</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((r, i) => (
                <tr key={i} className="border-b border-outline-variant/10 hover:bg-surface-container/50 transition-colors">
                  <td className="p-5 font-medium text-deep-slate">{r.tour}</td>
                  <td className="p-5 text-on-surface-variant">{r.code}</td>
                  <td className="p-5 text-on-surface-variant">{r.date}</td>
                  <td className="p-5">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      r.status === "Confirmado" ? "bg-green-100 dark:bg-green-900/30 dark:text-green-400 text-green-700" :
                      r.status === "Completado" ? "bg-sky-blue/10 text-sky-blue" :
                      r.status === "Cancelado" ? "bg-red-100 dark:bg-red-900/30 text-red-500" :
                      "bg-amber-100 dark:bg-amber-900/30 text-amber-700"
                    }`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="p-5 font-semibold text-deep-slate">{r.price}</td>
                  <td className="p-5">
                    {r.status !== "Cancelado" ? (
                      <button className="text-xs font-semibold text-sky-blue hover:text-sky-blue/80 transition-colors flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        PDF
                      </button>
                    ) : (
                      <span className="text-xs text-on-surface-variant">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
