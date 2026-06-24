"use client";

import { motion } from "motion/react";
import type { ItineraryItem } from "@/app/data/tours";

export default function ItineraryTimeline({ items }: { items: ItineraryItem[] }) {
  return (
    <div className="relative">
      <motion.div
        className="absolute left-[17px] top-2 bottom-2 w-0.5 bg-sky-blue/20 origin-top"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <div className="space-y-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex gap-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <div className="relative shrink-0 mt-0.5">
              <motion.div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${
                  i === 0
                    ? "bg-adventure-orange text-white"
                    : "bg-sky-blue/10 text-sky-blue"
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 300 }}
              >
                {i + 1}
              </motion.div>
            </div>
            <div className="flex-1 pb-2">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-semibold text-sky-blue bg-sky-blue/10 px-2.5 py-1 rounded-full">
                  {item.time}
                </span>
                <h4 className="font-montserrat font-semibold text-sm text-deep-slate">{item.title}</h4>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed ml-1">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
