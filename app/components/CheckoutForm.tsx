"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface CheckoutFormProps {
  passengers: number;
  onComplete: () => void;
}

export default function CheckoutForm({ passengers, onComplete }: CheckoutFormProps) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    document: "",
    passengers: Array.from({ length: passengers }).map(() => ({
      name: "",
      document: "",
    })),
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
    acceptTerms: false,
  });

  const updateField = (field: string, value: string | boolean) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const updatePassenger = (index: number, field: string, value: string) => {
    setForm(prev => {
      const updated = [...prev.passengers];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, passengers: updated };
    });
  };

  const canProceedStep1 = form.fullName && form.email && form.phone && form.document;
  const canProceedStep2 = form.passengers.every(p => p.name && p.document);
  const canProceedStep3 = form.cardNumber && form.cardName && form.expiry && form.cvv && form.acceptTerms;

  const handleSubmit = () => {
    onComplete();
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-level-1 dark:shadow-black/20 p-6 md:p-8 transition-colors">
      <div className="flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-8">
        {[1, 2, 3].map(s => (
          <motion.div key={s} className="flex items-center gap-1 sm:gap-2 flex-1" animate={{ opacity: 1 }} transition={{ delay: s * 0.1 }}>
            <motion.div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step >= s ? "bg-adventure-orange text-white" : "bg-surface-container text-on-surface-variant"
              }`}
              animate={step === s ? { scale: [1, 1.15, 1] } : {}}
              transition={{ duration: 0.4 }}
            >
              {s}
            </motion.div>
            <span className={`text-[10px] sm:text-xs font-medium hidden sm:block ${step >= s ? "text-deep-slate" : "text-on-surface-variant"}`}>
              {s === 1 ? "Datos" : s === 2 ? "Pasajeros" : "Pago"}
            </span>
            {s < 3 && <div className={`flex-1 h-0.5 ${step > s ? "bg-adventure-orange" : "bg-surface-container"}`} />}
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            className="space-y-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-montserrat font-semibold text-lg text-deep-slate">Tus datos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-deep-slate mb-1.5 block">Nombre completo</label>
                <input type="text" value={form.fullName} onChange={e => updateField("fullName", e.target.value)}
                  className="w-full px-4 py-3 bg-surface-container rounded-xl text-sm text-deep-slate outline-none focus:bg-white focus:ring-2 focus:ring-sky-blue focus:shadow-level-2 transition-all" />
              </div>
              <div>
                <label className="text-xs font-semibold text-deep-slate mb-1.5 block">Correo electrónico</label>
                <input type="email" value={form.email} onChange={e => updateField("email", e.target.value)}
                  className="w-full px-4 py-3 bg-surface-container rounded-xl text-sm text-deep-slate outline-none focus:bg-white focus:ring-2 focus:ring-sky-blue focus:shadow-level-2 transition-all" />
              </div>
              <div>
                <label className="text-xs font-semibold text-deep-slate mb-1.5 block">Teléfono</label>
                <input type="tel" value={form.phone} onChange={e => updateField("phone", e.target.value)}
                  className="w-full px-4 py-3 bg-surface-container rounded-xl text-sm text-deep-slate outline-none focus:bg-white focus:ring-2 focus:ring-sky-blue focus:shadow-level-2 transition-all" />
              </div>
              <div>
                <label className="text-xs font-semibold text-deep-slate mb-1.5 block">Documento de identidad</label>
                <input type="text" value={form.document} onChange={e => updateField("document", e.target.value)}
                  className="w-full px-4 py-3 bg-surface-container rounded-xl text-sm text-deep-slate outline-none focus:bg-white focus:ring-2 focus:ring-sky-blue focus:shadow-level-2 transition-all" />
              </div>
            </div>
            <motion.button
              onClick={() => setStep(2)}
              disabled={!canProceedStep1}
              className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all ${
                canProceedStep1 ? "bg-adventure-orange text-white hover:bg-adventure-orange/90" : "bg-surface-container text-on-surface-variant/50 cursor-not-allowed"
              }`}
              whileHover={canProceedStep1 ? { scale: 1.01 } : {}}
              whileTap={canProceedStep1 ? { scale: 0.99 } : {}}
            >
              Continuar
            </motion.button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            className="space-y-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-montserrat font-semibold text-lg text-deep-slate">Pasajeros</h3>
            {form.passengers.map((p, i) => (
              <motion.div
                key={i}
                className="p-4 bg-surface-container rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-xs font-semibold text-deep-slate mb-3">Pasajero {i + 1}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-deep-slate mb-1.5 block">Nombre completo</label>
                    <input type="text" value={p.name} onChange={e => updatePassenger(i, "name", e.target.value)}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-800 rounded-xl text-sm text-deep-slate outline-none focus:ring-2 focus:ring-sky-blue transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-deep-slate mb-1.5 block">Documento</label>
                    <input type="text" value={p.document} onChange={e => updatePassenger(i, "document", e.target.value)}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-800 rounded-xl text-sm text-deep-slate outline-none focus:ring-2 focus:ring-sky-blue transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="flex gap-3">
              <motion.button onClick={() => setStep(1)}
                className="flex-1 py-3.5 rounded-xl text-sm font-semibold border-2 border-deep-slate/20 text-deep-slate hover:bg-surface-container transition-all"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}>
                Atrás
              </motion.button>
              <motion.button onClick={() => setStep(3)}
                disabled={!canProceedStep2}
                className={`flex-1 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                  canProceedStep2 ? "bg-adventure-orange text-white hover:bg-adventure-orange/90" : "bg-surface-container text-on-surface-variant/50 cursor-not-allowed"
                }`}
                whileHover={canProceedStep2 ? { scale: 1.01 } : {}}
                whileTap={canProceedStep2 ? { scale: 0.99 } : {}}>
                Continuar al pago
              </motion.button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            className="space-y-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-montserrat font-semibold text-lg text-deep-slate">Pago seguro</h3>
            <motion.div
              className="flex items-center gap-2 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-xs text-on-surface-variant">Conexión segura SSL · Datos encriptados</span>
            </motion.div>
            <motion.div
              className="flex gap-2 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="px-3 py-1 bg-surface-container rounded-lg text-xs font-medium text-on-surface-variant">Visa</span>
              <span className="px-3 py-1 bg-surface-container rounded-lg text-xs font-medium text-on-surface-variant">Mastercard</span>
              <span className="px-3 py-1 bg-surface-container rounded-lg text-xs font-medium text-on-surface-variant">Amex</span>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="text-xs font-semibold text-deep-slate mb-1.5 block">Número de tarjeta</label>
                <input type="text" value={form.cardNumber} onChange={e => updateField("cardNumber", e.target.value)} maxLength={19} placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-3 bg-surface-container rounded-xl text-sm text-deep-slate outline-none focus:bg-white focus:ring-2 focus:ring-sky-blue focus:shadow-level-2 transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-semibold text-deep-slate mb-1.5 block">Titular de la tarjeta</label>
                <input type="text" value={form.cardName} onChange={e => updateField("cardName", e.target.value)}
                  className="w-full px-4 py-3 bg-surface-container rounded-xl text-sm text-deep-slate outline-none focus:bg-white focus:ring-2 focus:ring-sky-blue focus:shadow-level-2 transition-all" />
              </div>
              <div>
                <label className="text-xs font-semibold text-deep-slate mb-1.5 block">Vencimiento</label>
                <input type="text" value={form.expiry} onChange={e => updateField("expiry", e.target.value)} placeholder="MM/AA"
                  className="w-full px-4 py-3 bg-surface-container rounded-xl text-sm text-deep-slate outline-none focus:bg-white focus:ring-2 focus:ring-sky-blue focus:shadow-level-2 transition-all" />
              </div>
              <div>
                <label className="text-xs font-semibold text-deep-slate mb-1.5 block">CVV</label>
                <input type="text" value={form.cvv} onChange={e => updateField("cvv", e.target.value)} maxLength={4} placeholder="123"
                  className="w-full px-4 py-3 bg-surface-container rounded-xl text-sm text-deep-slate outline-none focus:bg-white focus:ring-2 focus:ring-sky-blue focus:shadow-level-2 transition-all" />
              </div>
            </div>
            <div className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={form.acceptTerms} onChange={e => updateField("acceptTerms", e.target.checked)}
                className="mt-0.5 w-5 h-5 sm:w-4 sm:h-4 rounded-md border-outline-variant text-adventure-orange focus:ring-adventure-orange shrink-0" />
              <span className="text-xs text-on-surface-variant leading-relaxed">Acepto los términos y condiciones, la política de privacidad y la política de cancelación.</span>
            </div>
            <div className="flex gap-3">
              <motion.button onClick={() => setStep(2)}
                className="flex-1 py-3.5 rounded-xl text-sm font-semibold border-2 border-deep-slate/20 text-deep-slate hover:bg-surface-container transition-all"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}>
                Atrás
              </motion.button>
              <motion.button onClick={handleSubmit}
                disabled={!canProceedStep3}
                className={`flex-1 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                  canProceedStep3 ? "bg-adventure-orange text-white hover:bg-adventure-orange/90 shadow-level-2" : "bg-surface-container text-on-surface-variant/50 cursor-not-allowed"
                }`}
                whileHover={canProceedStep3 ? { scale: 1.01 } : {}}
                whileTap={canProceedStep3 ? { scale: 0.99 } : {}}>
                Pagar ahora
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
