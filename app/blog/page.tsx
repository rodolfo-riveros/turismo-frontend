import BlogCard from "@/app/components/BlogCard";
import { blogPosts } from "@/app/data/blog";

export default function BlogPage() {
  const categories = Array.from(new Set(blogPosts.map(p => p.category)));

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-12 py-10 transition-colors">
      <div className="max-w-2xl mb-12">
        <h1 className="font-montserrat text-3xl md:text-4xl font-bold text-deep-slate mb-4">
          Inspiración para tu viaje
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          Historias, guías y consejos para ayudarte a planificar la aventura perfecta en el Perú.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        <button className="px-4 py-2 bg-deep-slate dark:bg-slate-800 text-white text-sm font-medium rounded-full">
          Todos
        </button>
        {categories.map(cat => (
          <button key={cat} className="px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface-variant text-sm font-medium rounded-full hover:bg-surface-container-high transition-colors">
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
