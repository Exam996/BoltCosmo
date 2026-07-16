'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight, Newspaper } from 'lucide-react';
import { Reveal, staggerContainer, fadeUpItem } from '@/components/reveal';
import { blogPosts } from '@/lib/data';

export function BlogTeaser() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#FAFAF8] via-[#F1F5F4] to-[#FAFAF8]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            <Newspaper className="h-3.5 w-3.5" />
            From the Blog
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Expert <span className="text-gradient-gold">Insights</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            Evidence-based guides on hair, skin, laser and cosmetic treatments
            from Dr. Ukarande.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.map((post) => (
            <motion.div key={post.slug} variants={fadeUpItem}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-card border border-border/50 rounded-2xl overflow-hidden h-full shadow-sm hover:shadow-luxe transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-semibold text-primary">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 pt-4 border-t border-border/60 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read More
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.15} className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-2xl bg-primary hover:bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-luxe transition-all duration-300"
          >
            View All Articles
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
