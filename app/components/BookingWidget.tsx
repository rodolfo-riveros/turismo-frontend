"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useAppContext, convertPrice, getCurrencySymbol } from "@/app/contexts/AppContext";
import type { Tour } from "@/app/data/tours";

export default function BookingWidget({ tour }: { tour: Tour }) {
  const { currency } = useAppContext();
  const router = useRouter();
  const [passengers, setPassengers] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");

  const convertedPrice = convertPrice(tour.price, "USD", currency);
  const total = convertedPrice * passengers;
  const symbol = getCurrencySymbol(currency);

  const handleReserve = () => {
    const params = new URLSearchParams({
      tourId: tour.id,
      date: selectedDate,
      passengers: String(passengers),
    });
    router.push(`/checkout?${params.toString()}`);
  };

  const weekDays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];

  const todayDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(todayDate.getMonth());
  const [currentYear, setCurrentYear] = useState(todayDate.getFullYear());

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isPastDate = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <motion.div
      className="bg-white dark:bg-slate-900 rounded-2xl shadow-level-2 dark:shadow-black/20 p-6 sticky top-24 transition-colors"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-5 pb-5 border-b border-outline-variant/20">
        <p className="text-xs text-on-surface-variant mb-1">Desde</p>
        <motion.p
          className="font-montserrat text-3xl font-bold text-deep-slate"
          key={convertedPrice}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {symbol}{convertedPrice}
          <span className="text-sm font-normal text-on-surface-variant"> /persona</span>
        </motion.p>
        <p className="text-xs text-on-surface-variant mt-1">{tour.duration}</p>
      </div>

      <div className="mb-5">
        <label className="text-xs font-semibold text-deep-slate mb-2 block">Fecha del tour</label>
        <div className="bg-surface-container rounded-xl p-3">
          <div className="flex items-center justify-between mb-3">
            <motion.button
              onClick={prevMonth}
              className="p-1 text-on-surface-variant hover:text-deep-slate"
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <span className="text-sm font-semibold text-deep-slate">
              {months[currentMonth]} {currentYear}
            </span>
            <motion.button
              onClick={nextMonth}
              className="p-1 text-on-surface-variant hover:text-deep-slate"
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
          <div className="grid grid-cols-7 gap-0.5 text-center">
            {weekDays.map(d => (
              <span key={d} className="text-[10px] font-semibold text-on-surface-variant py-1">{d}</span>
            ))}
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
              const past = isPastDate(day);
              const selected = selectedDate === dateStr;
              const available = !past && (day % 3 !== 0);

              return (
                <motion.button
                  key={day}
                  disabled={!available}
                  onClick={() => setSelectedDate(dateStr)}
                  className={`text-xs sm:text-sm py-1.5 sm:py-2 rounded-lg transition-all ${
                    selected
                      ? "bg-adventure-orange text-white font-semibold"
                      : available
                        ? "hover:bg-sky-blue/10 text-deep-slate cursor-pointer"
                        : "text-on-surface-variant/30 cursor-not-allowed"
                  }`}
                  whileHover={available ? { scale: 1.15 } : {}}
                  whileTap={available ? { scale: 0.95 } : {}}
                >
                  {day}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mb-5">
        <label className="text-xs font-semibold text-deep-slate mb-2 block">Pasajeros</label>
        <div className="flex items-center justify-between bg-surface-container rounded-xl px-4 py-2.5">
          <motion.button
            onClick={() => setPassengers(Math.max(1, passengers - 1))}
            className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center text-deep-slate hover:bg-deep-slate hover:text-white transition-colors shadow-level-1 dark:shadow-black/20 text-sm font-bold"
            whileTap={{ scale: 0.9 }}
          >
            -
          </motion.button>
          <motion.span
            className="text-sm font-semibold text-deep-slate"
            key={passengers}
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.15 }}
          >
            {passengers}
          </motion.span>
          <motion.button
            onClick={() => setPassengers(Math.min(tour.maxCapacity, passengers + 1))}
            className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center text-deep-slate hover:bg-deep-slate hover:text-white transition-colors shadow-level-1 dark:shadow-black/20 text-sm font-bold"
            whileTap={{ scale: 0.9 }}
          >
            +
          </motion.button>
        </div>
      </div>

      <div className="space-y-2 mb-5 pb-5 border-b border-outline-variant/20">
        <div className="flex justify-between text-sm">
          <span className="text-on-surface-variant">{symbol}{convertedPrice} x {passengers} persona(s)</span>
          <span className="text-deep-slate font-semibold">{symbol}{convertedPrice * passengers}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-on-surface-variant">Impuestos y tasas</span>
          <span className="text-green-600 font-semibold">Incluido</span>
        </div>
      </div>

      <motion.div
        className="flex justify-between items-center mb-5"
        key={total}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="text-sm font-semibold text-deep-slate">Total</span>
        <span className="font-montserrat text-xl font-bold text-deep-slate">{symbol}{total}</span>
      </motion.div>

      <motion.button
        onClick={handleReserve}
        disabled={!selectedDate}
        className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all ${
          selectedDate
            ? "bg-adventure-orange text-white hover:bg-adventure-orange/90 shadow-level-2"
            : "bg-surface-container text-on-surface-variant/50 cursor-not-allowed"
        }`}
        whileHover={selectedDate ? { scale: 1.02 } : {}}
        whileTap={selectedDate ? { scale: 0.98 } : {}}
      >
        Reservar ahora
      </motion.button>
      <div className="flex items-center justify-center gap-2 mt-3">
        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <span className="text-xs text-on-surface-variant">Pago 100% seguro</span>
      </div>
    </motion.div>
  );
}
