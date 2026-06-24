"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CheckoutForm from "@/app/components/CheckoutForm";
import OrderSummary from "@/app/components/OrderSummary";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tourId = searchParams.get("tourId") || "1";
  const date = searchParams.get("date") || "";
  const passengers = parseInt(searchParams.get("passengers") || "1");
  const [completed, setCompleted] = useState(false);

  if (completed) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center transition-colors">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="font-montserrat text-3xl font-bold text-deep-slate mb-4">¡Reserva confirmada!</h1>
        <p className="text-on-surface-variant mb-6">Recibirás un email con tu itinerario y el comprobante de pago.</p>
        <p className="text-sm text-on-surface-variant mb-8">También puedes descargar tu voucher desde tu perfil.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => router.push("/profile")} className="px-6 py-3 bg-deep-slate text-white text-sm font-semibold rounded-xl hover:bg-deep-slate/90 transition-colors">
            Ir a mi perfil
          </button>
          <button onClick={() => router.push("/")} className="px-6 py-3 border-2 border-deep-slate/20 text-deep-slate text-sm font-semibold rounded-xl hover:bg-surface-container transition-colors">
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-12 py-10 transition-colors">
      <h1 className="font-montserrat text-2xl md:text-3xl font-bold text-deep-slate mb-8">Completa tu reserva</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <CheckoutForm passengers={passengers} onComplete={() => setCompleted(true)} />
        </div>
        <div className="lg:col-span-2">
          <div className="lg:sticky lg:top-24">
            <OrderSummary tourId={tourId} date={date} passengers={passengers} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-4 border-adventure-orange/30 border-t-adventure-orange rounded-full animate-spin" />
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
