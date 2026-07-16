'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, staggerContainer, fadeUpItem } from '@/components/reveal';
import { treatments } from '@/lib/data';

export function Treatments() {
  return (
    <section id="treatments" className="relative py-24 sm:py-32 bg-mist/40 dark:bg-background">
      <div className="absolute inset-0 -z-10 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Our Treatments
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Comprehensive Care for <span className="text-gradient-primary">Hair, Skin &amp; You</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            From advanced hair transplants to medical-grade facials — every
            treatment is delivered with precision, safety and an eye for natural results.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {treatments.map((t) => (
            <motion.article
              key={t.title}
              variants={fadeUpItem}
              whileHover={{ y: -8 }}
              className="group relative bg-card border border-border/50 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-primary text-white shadow-luxe transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <t.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {t.description}
              </p>
              <Link
                href={`/treatments/${t.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-secondary transition-colors"
              >
                Learn More
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 rounded-b-2xl bg-primary transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </motion.div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-2xl border border-primary bg-card text-primary hover:bg-primary/5 px-6 py-3 text-sm font-semibold transition-all duration-300"
          >
            Read our blog
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
