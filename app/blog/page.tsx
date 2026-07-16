import Link from 'next/link';
import { Calendar, Clock, ArrowUpRight, Newspaper } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import { Reveal } from '@/components/reveal';

export const metadata = {
  title: 'Skin, Hair & Aesthetics Blog | Elite Cosmo Clinic',
  description:
    'Expert insights from Dr. Ukarande on hair transplants, skincare, laser treatments and anti-aging — straight from Solapur&apos;s premier cosmetic clinic.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <main className="pt-24 sm:pt-28">
      <section className="relative py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/[0.06] via-background to-secondary/[0.05]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <Newspaper className="h-3.5 w-3.5" />
              Elite Blog
            </span>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Expert <span className="text-gradient-primary">Insights</span>
            </h1>
            <p className="mt-5 text-muted-foreground text-base sm:text-lg">
              Evidence-based guides on hair, skin, laser and cosmetic treatments
              from Dr. Ukarande and the Elite Cosmo Clinic team.
            </p>
          </Reveal>

          {/* Featured post */}
          <Reveal delay={0.1} className="mt-12">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-8 glass-card rounded-[2rem] overflow-hidden hover:shadow-luxe transition-shadow"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </div>
              <div className="p-6 sm:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(featured.date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readingTime}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read Article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Rest of posts */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={0.05 * i}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col glass-card rounded-2xl overflow-hidden h-full hover:shadow-luxe transition-shadow"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-semibold text-primary">
                        {post.category}
                      </span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 pt-4 border-t border-border/60 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Read More
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
