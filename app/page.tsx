"use client";

import { motion } from "motion/react";
import Link from "next/link";
import HeroSection from "@/app/components/HeroSection";
import TourCard from "@/app/components/TourCard";
import Testimonials from "@/app/components/Testimonials";
import CustomerGallery from "@/app/components/CustomerGallery";
import BlogCard from "@/app/components/BlogCard";
import { tours } from "@/app/data/tours";
import { blogPosts } from "@/app/data/blog";

export default function Home() {
  return (
    <>
      <HeroSection />

      <motion.section
        className="py-20 md:py-28 transition-colors"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-12">
          <motion.div
            className="flex items-end justify-between mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-deep-slate mb-3">
                Experiencias destacadas
              </h2>
              <p className="text-on-surface-variant max-w-lg">
                Seleccionamos los mejores tours para que vivas una experiencia única en el Perú.
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.slice(0, 6).map((tour, i) => (
              <TourCard key={tour.id} tour={tour} index={i} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 md:py-28 bg-deep-slate dark:bg-slate-950 text-white dark:text-white transition-colors"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              { icon: "shield", title: "Reserva Segura", desc: "Todos los pagos están protegidos con encriptación SSL y métodos de pago verificados." },
              { icon: "star", title: "+500 Opiniones", desc: "Viajeros satisfechos respaldan nuestra calidad con calificaciones de 5 estrellas." },
              { icon: "globe", title: "Guías Locales", desc: "Expertos conocedores de cada destino para una experiencia auténtica y enriquecedora." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="w-14 h-14 bg-adventure-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  {item.icon === "shield" ? (
                    <svg className="w-7 h-7 text-adventure-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ) : item.icon === "star" ? (
                    <svg className="w-7 h-7 text-adventure-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ) : (
                    <svg className="w-7 h-7 text-adventure-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Testimonials />

      <CustomerGallery />

      <motion.section
        className="py-20 md:py-28 transition-colors"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-12">
          <motion.div
            className="flex items-end justify-between mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-deep-slate mb-3">
                Inspiración para tu viaje
              </h2>
              <p className="text-on-surface-variant max-w-lg">
                Historias, guías y consejos para ayudarte a planificar la aventura perfecta.
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-deep-slate text-white text-sm font-semibold rounded-xl hover:bg-deep-slate/90 transition-colors"
            >
              Ver todos los artículos
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
