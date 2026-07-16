'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { testimonials } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const count = testimonials.length;

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + count) % count);
  }, [count]);

  useEffect(() => {
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [go]);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#FAFAF8] via-[#F1F5F4] to-[#FAFAF8]" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Patient Reviews
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Loved by <span className="text-gradient-gold">Patients</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            Real stories from real people who rediscovered their confidence at
            Elite Cosmo Clinic.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="relative bg-card border border-border/50 rounded-[2rem] p-8 sm:p-12 shadow-[0_8px_30px_rgb(15,118,110,0.02)] overflow-hidden">
            <Quote className="absolute -top-4 left-8 h-24 w-24 text-primary/5" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-5 text-lg sm:text-xl font-medium leading-relaxed text-foreground/90">
                  &ldquo;{t.review}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-white font-semibold shadow-sm">
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-accent">{t.treatment}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to review ${i + 1}`}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    className={cn(
                      'h-2 rounded-full transition-all duration-300',
                      i === index
                        ? 'w-8 bg-primary shadow-sm'
                        : 'w-2 bg-foreground/20 hover:bg-foreground/40'
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous review"
                  onClick={() => go(-1)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-primary bg-card text-primary hover:bg-primary/5 transition-colors duration-300"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next review"
                  onClick={() => go(1)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-primary bg-card text-primary hover:bg-primary/5 transition-colors duration-300"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
