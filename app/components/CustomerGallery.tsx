"use client";

import { motion } from "motion/react";

const customerPhotos = [
  { src: "https://images.unsplash.com/photo-1526392060635-9d601c43719e?w=400&q=80", name: "Valle Sagrado 2026" },
  { src: "https://images.unsplash.com/photo-1580619305218-8423a7a79b4c?w=400&q=80", name: "Amazonía Explorer" },
  { src: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=400&q=80", name: "Machu Picchu VIP" },
  { src: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400&q=80", name: "Andes Downhill" },
  { src: "https://images.unsplash.com/photo-1526392060635-9d601c43719e?w=400&q=80", name: "Laguna Humantay" },
  { src: "https://images.unsplash.com/photo-1580619305218-8423a7a79b4c?w=400&q=80", name: "Cocina Andina" },
];

export default function CustomerGallery() {
  return (
    <section className="py-20 md:py-28 transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-deep-slate mb-4">
            Clientes felices
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Las mejores fotos de nuestros viajeros. Únete a la comunidad Wanderlust y comparte tu experiencia.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {customerPhotos.map((photo, i) => (
            <motion.div
              key={i}
              className="relative group overflow-hidden rounded-2xl aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={photo.src}
                alt={photo.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-deep-slate/60 via-transparent to-transparent flex items-end p-3"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white text-xs font-medium">{photo.name}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
