import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-12 py-10 transition-colors">
      <div className="flex items-center gap-5 mb-10">
        <div className="w-16 h-16 rounded-2xl bg-adventure-orange/10 flex items-center justify-center text-2xl font-bold text-adventure-orange">
          V
        </div>
        <div>
          <h1 className="font-montserrat text-2xl font-bold text-deep-slate">Viajero Wanderlust</h1>
          <p className="text-sm text-on-surface-variant">viajero@email.com</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs font-semibold text-amber-500">★ 1,250 WanderPoints</span>
            <span className="px-2 py-0.5 bg-adventure-orange/10 text-adventure-orange text-[10px] font-bold rounded-full">Explorador</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-level-1 dark:shadow-black/20 transition-colors">
          <div className="w-10 h-10 bg-sky-blue/10 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-5 h-5 text-sky-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <p className="text-2xl font-bold text-deep-slate">3</p>
          <p className="text-sm text-on-surface-variant">Reservas activas</p>
          <Link href="/profile/reservations" className="inline-block mt-3 text-xs font-semibold text-sky-blue hover:text-sky-blue/80 transition-colors">
            Ver todas →
          </Link>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-level-1 dark:shadow-black/20 transition-colors">
          <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <p className="text-2xl font-bold text-deep-slate">6</p>
          <p className="text-sm text-on-surface-variant">Tours favoritos</p>
          <Link href="/profile/favorites" className="inline-block mt-3 text-xs font-semibold text-sky-blue hover:text-sky-blue/80 transition-colors">
            Ver todos →
          </Link>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-level-1 dark:shadow-black/20 transition-colors">
          <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-2xl font-bold text-deep-slate">5</p>
          <p className="text-sm text-on-surface-variant">Viajes completados</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-level-1 dark:shadow-black/20 overflow-hidden transition-colors">
        <div className="p-6 border-b border-outline-variant/20">
          <h2 className="font-montserrat font-semibold text-lg text-deep-slate">Últimas reservas</h2>
        </div>
        {[
          { tour: "Valle Sagrado Esencial", date: "15 Jun 2026", status: "Confirmado", price: "$378" },
          { tour: "Machu Picchu VIP", date: "20 Jul 2026", status: "Pendiente", price: "$900" },
          { tour: "Laguna Humantay", date: "12 Ago 2025", status: "Completado", price: "$170" },
        ].map((reservation, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 gap-3 sm:gap-0 hover:bg-surface-container/50 transition-colors border-b border-outline-variant/10 last:border-b-0">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 bg-surface-container rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-deep-slate truncate">{reservation.tour}</p>
                <p className="text-xs text-on-surface-variant">{reservation.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 self-end sm:self-auto">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                reservation.status === "Confirmado" ? "bg-green-100 dark:bg-green-900/30 dark:text-green-400 text-green-700" :
                reservation.status === "Completado" ? "bg-sky-blue/10 text-sky-blue" :
                "bg-amber-100 dark:bg-amber-900/30 text-amber-700"
              }`}>
                {reservation.status}
              </span>
              <span className="text-sm font-semibold text-deep-slate shrink-0">{reservation.price}</span>
              <button className="text-xs font-semibold text-sky-blue hover:text-sky-blue/80 transition-colors shrink-0">
                Descargar PDF
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
