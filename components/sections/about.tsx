'use client';

import { motion } from 'framer-motion';
import { Award, Microscope, HeartHandshake, ShieldCheck, Sparkles, Stethoscope, BadgeCheck, GraduationCap } from 'lucide-react';
import { Reveal, staggerContainer, fadeUpItem } from '@/components/reveal';
import { clinic } from '@/lib/data';

const pillars = [
  { icon: Stethoscope, title: 'Expert Care', text: 'A decade of focused dermatology & hair restoration.' },
  { icon: Microscope, title: 'Latest Technology', text: 'USFDA-approved lasers and DHI hair transplant systems.' },
  { icon: HeartHandshake, title: 'Personalized Treatment', text: 'Every plan is designed around your goals and skin type.' },
  { icon: ShieldCheck, title: 'Safe Procedures', text: 'Strict sterilisation and internationally graded protocols.' },
  { icon: Sparkles, title: 'Natural Results', text: 'Subtle, confidence-boosting outcomes — never overdone.' },
  { icon: Award, title: 'Professional Environment', text: 'A calm, private and hygienic clinic built for comfort.' },
];

const credentials = [
  '10+ years in aesthetic dermatology',
  '500+ successful hair transplants',
  'Trained in advanced FUE & DHI techniques',
  'Member, Indian Association of Dermatologists',
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-radial-fade" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            About Elite Cosmo
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Where Aesthetics Meets <span className="text-gradient-primary">Medical Excellence</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            Elite Cosmo Clinic is Solapur&apos;s destination for advanced hair, skin,
            laser and cosmetic treatments — combining state-of-the-art technology
            with a deeply personalised, ethical approach to care.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUpItem}
              whileHover={{ y: -6 }}
              className="group glass-card rounded-2xl p-6 transition-shadow hover:shadow-luxe"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.1} className="mt-16">
          <div className="relative grid lg:grid-cols-5 gap-8 items-center glass-card rounded-[2rem] p-6 sm:p-10 overflow-hidden">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
            <div className="lg:col-span-2 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-luxe">
                <img
                  src="https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt={`${clinic.doctor} — Hair Transplant Specialist`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-4 py-3 shadow-luxe"
              >
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-semibold">1000+ Patients</span>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Meet Your Doctor
              </span>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold">
                {clinic.doctor}
              </h3>
              <p className="mt-1 text-accent font-medium">
                Best Hair Transplant Specialist in Solapur
              </p>
              <p className="mt-4 text-muted-foreground">
                With over a decade of dedicated practice, {clinic.doctor} has
                transformed thousands of lives through advanced hair restoration
                and aesthetic dermatology. Known for natural-looking hairlines,
                ethical consultations and a patient-first philosophy, the doctor
                brings metro-grade expertise to Solapur.
              </p>

              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm">
                    <GraduationCap className="mt-0.5 h-4.5 w-4.5 shrink-0 text-secondary" />
                    <span className="text-foreground/80">{c}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#appointment"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-luxe"
                >
                  Schedule a Consultation
                </a>
                <a
                  href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(clinic.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
