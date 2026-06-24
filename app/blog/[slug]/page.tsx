import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPostBySlug, blogPosts } from "@/app/data/blog";

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2);

  return (
    <article className="max-w-[800px] mx-auto px-4 md:px-12 py-10 transition-colors">
      <Link href="/blog" className="text-sm text-sky-blue hover:text-sky-blue/80 mb-6 inline-block">← Volver al blog</Link>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-sky-blue/10 text-sky-blue text-xs font-semibold rounded-full">{post.category}</span>
          <span className="text-xs text-on-surface-variant">{post.date}</span>
          <span className="text-xs text-on-surface-variant">· {post.readTime} de lectura</span>
        </div>
        <h1 className="font-montserrat text-3xl md:text-4xl font-bold text-deep-slate leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">{post.excerpt}</p>
      </div>

      <div className="rounded-2xl overflow-hidden mb-10">
        <img src={post.image} alt={post.title} className="w-full h-[400px] object-cover" />
      </div>

      <div className="max-w-none text-on-surface-variant leading-relaxed space-y-4">
        {post.content.split("\n\n").map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed">{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-outline-variant/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-deep-slate rounded-full flex items-center justify-center text-white text-xs font-bold">
            W
          </div>
          <div>
            <p className="text-sm font-semibold text-deep-slate">{post.author}</p>
            <p className="text-xs text-on-surface-variant">Agencia de viajes Wanderlust</p>
          </div>
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <div className="mt-16">
          <h2 className="font-montserrat text-xl font-bold text-deep-slate mb-6">Artículos relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map(p => (
              <Link key={p.id} href={`/blog/${p.slug}`} className="group block bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-level-1 hover:shadow-level-2 dark:shadow-black/20 dark:hover:shadow-black/30 transition-all">
                <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <span className="px-2.5 py-1 bg-sky-blue/10 text-sky-blue text-[10px] font-semibold rounded-full">{p.category}</span>
                  <h3 className="font-montserrat font-semibold text-sm text-deep-slate mt-2 group-hover:text-adventure-orange transition-colors">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
