"use client";

import { motion } from "motion/react";
import { testimonials } from "@/app/data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <motion.section
      className="py-20 md:py-28 bg-surface transition-colors"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-deep-slate mb-4">
            Lo que dicen nuestros viajeros
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Historias reales de viajeros que confiaron en nosotros para su aventura.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
