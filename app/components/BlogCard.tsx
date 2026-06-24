"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { BlogPost } from "@/app/data/blog";

export default function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-level-1 hover:shadow-level-2 dark:shadow-black/20 dark:hover:shadow-black/30 transition-all">
          <div className="overflow-hidden">
            <motion.img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 bg-sky-blue/10 text-sky-blue text-xs font-semibold rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-on-surface-variant">{post.readTime}</span>
            </div>
            <h3 className="font-montserrat font-semibold text-lg text-deep-slate mb-2 group-hover:text-adventure-orange transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
            <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between">
              <span className="text-xs text-on-surface-variant">{post.date}</span>
              <span className="text-xs font-semibold text-deep-slate group-hover:text-adventure-orange transition-colors">
                Leer más →
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
