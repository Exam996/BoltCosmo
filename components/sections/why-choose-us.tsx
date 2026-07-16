'use client';

import { motion } from 'framer-motion';
import { Reveal, staggerContainer, fadeUpItem } from '@/components/reveal';
import { whyChooseUs } from '@/lib/data';

export function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#FAFAF8] via-[#F1F5F4] to-[#FAFAF8]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            The Elite <span className="text-gradient-gold">Difference</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            Eight reasons thousands of patients across Solapur trust Elite Cosmo Clinic
            with their confidence.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {whyChooseUs.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUpItem}
              whileHover={{ y: -6 }}
              className="group relative bg-card border border-border/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe"
            >
              <span className="absolute right-5 top-5 font-display text-4xl font-bold text-foreground/5 group-hover:text-primary/10 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
