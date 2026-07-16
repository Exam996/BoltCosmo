'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import Link from 'next/link';
import { CalendarCheck, MessageCircle, Star, ShieldCheck, ChevronDown } from 'lucide-react';
import { clinic, stats } from '@/lib/data';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value, count]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-background to-secondary/[0.06]" />
        <div className="absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <motion.div
          className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-foreground/80 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
            {clinic.tagline}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Transform Your
            <span className="block text-gradient-primary">Confidence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
          >
            Best Hair Transplant, Skin, Laser & Cosmetic Clinic in Solapur —
            where advanced technology meets personalised, natural-looking results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <Link
              href="#appointment"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-luxe transition-transform hover:scale-[1.03]"
            >
              <CalendarCheck className="h-4.5 w-4.5" />
              Book Appointment
            </Link>
            <a
              href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
                clinic.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-4.5 w-4.5 text-[#25D366]" />
              WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground"
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span>Rated 5.0 by 1000+ patients</span>
            <ShieldCheck className="h-4 w-4 text-secondary" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-luxe">
              <img
                src="https://images.pexels.com/photos/7088512/pexels-photo-7088512.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Elite Cosmo Clinic dermatology treatment room"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -left-4 sm:-left-8 top-10 glass-card rounded-2xl p-4 w-44 shadow-luxe"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary/15 text-secondary">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">USFDA</p>
                  <p className="text-sm font-semibold">Approved Lasers</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, delay: 1 }}
              className="absolute -right-4 sm:-right-8 bottom-12 glass-card rounded-2xl p-4 w-48 shadow-luxe"
            >
              <p className="text-xs text-muted-foreground">Led by</p>
              <p className="text-sm font-semibold">{clinic.doctor}</p>
              <p className="text-xs text-accent">Hair Transplant Specialist</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-14 lg:mt-20"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass-card rounded-2xl p-5 text-center"
            >
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient-primary">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground"
        aria-hidden
      >
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
