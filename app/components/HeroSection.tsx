"use client";

import { motion } from "motion/react";
import SearchBar from "./SearchBar";
import PersonaFilters from "./PersonaFilters";

export default function HeroSection() {
  return (
    <section className="relative bg-deep-slate overflow-hidden transition-colors">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-deep-slate/95 via-deep-slate/85 to-deep-slate/70 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1920&q=80)" }}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="relative z-20 max-w-[1280px] mx-auto px-4 md:px-12 py-16 sm:py-24 md:py-36">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explora el Perú con
            <span className="text-adventure-orange"> Confianza</span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Descubre experiencias únicas diseñadas para viajeros que buscan aventura, cultura y la seguridad de un servicio profesional.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <SearchBar />
          </motion.div>
          <motion.div
            className="mt-8 sm:mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-sm text-white/50 mb-4">¿Cómo quieres viajar?</p>
            <PersonaFilters />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
