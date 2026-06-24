"use client";

import { useAppContext, convertPrice, getCurrencySymbol } from "@/app/contexts/AppContext";
import { tours } from "@/app/data/tours";

export default function OrderSummary({
  tourId,
  date,
  passengers,
}: {
  tourId: string;
  date: string;
  passengers: number;
}) {
  const { currency } = useAppContext();
  const tour = tours.find(t => t.id === tourId);
  if (!tour) return null;

  const convertedPrice = convertPrice(tour.price, "USD", currency);
  const symbol = getCurrencySymbol(currency);
  const total = convertedPrice * passengers;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-level-1 dark:shadow-black/20 p-6 transition-colors">
      <h3 className="font-montserrat font-semibold text-lg text-deep-slate mb-5">Resumen de reserva</h3>
      <div className="flex gap-4 mb-5 pb-5 border-b border-outline-variant/20">
        <img src={tour.images[0]} alt={tour.title} className="w-20 h-20 rounded-xl object-cover shrink-0" />
        <div>
          <h4 className="font-semibold text-sm text-deep-slate">{tour.title}</h4>
          <p className="text-xs text-on-surface-variant mt-1">{tour.location}</p>
          <p className="text-xs text-on-surface-variant">{tour.duration}</p>
        </div>
      </div>
      <div className="space-y-3 mb-5 pb-5 border-b border-outline-variant/20">
        <div className="flex justify-between text-sm">
          <span className="text-on-surface-variant">Fecha</span>
          <span className="font-medium text-deep-slate">
            {new Date(date + "T00:00:00").toLocaleDateString("es-ES", {
              day: "numeric", month: "long", year: "numeric"
            })}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-on-surface-variant">Pasajeros</span>
          <span className="font-medium text-deep-slate">{passengers} persona(s)</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-on-surface-variant">Precio por persona</span>
          <span className="font-medium text-deep-slate">{symbol}{convertedPrice}</span>
        </div>
      </div>
      <div className="space-y-2 mb-5">
        <div className="flex justify-between text-sm">
          <span className="text-on-surface-variant">Subtotal</span>
          <span className="font-medium text-deep-slate">{symbol}{total}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-on-surface-variant">Impuestos</span>
          <span className="text-green-600 font-medium">Incluidos</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-on-surface-variant">Cargos por servicio</span>
          <span className="text-green-600 font-medium">Gratis</span>
        </div>
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
        <span className="font-semibold text-deep-slate">Total</span>
        <span className="font-montserrat text-xl font-bold text-deep-slate">{symbol}{total}</span>
      </div>
    </div>
  );
}
