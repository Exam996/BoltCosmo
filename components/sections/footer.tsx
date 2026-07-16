'use client';

import Link from 'next/link';
import { Sparkles, Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import { clinic } from '@/lib/data';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Book Appointment', href: '#appointment' },
];

const treatmentLinks = [
  'Hair Transplant',
  'PRP Therapy',
  'Hydra Facial',
  'Laser Hair Reduction',
  'Botox',
  'Dermal Fillers',
];

export function Footer() {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.06]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[60rem] max-w-full rounded-full bg-primary/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="#home" className="flex items-center gap-2.5">
              <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-primary text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold">Elite Cosmo</span>
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-accent">
                  Clinic
                </span>
              </span>
            </Link>
            <p className="mt-5 text-sm text-background/70 max-w-sm">
              {clinic.tagline}. Advanced hair, skin, laser and cosmetic treatments
              delivered with care, safety and natural results.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
                { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
                { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
                {
                  icon: MessageCircle,
                  label: 'WhatsApp',
                  href: `https://wa.me/${clinic.whatsapp}`,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-2xl bg-background/10 hover:bg-primary text-background/80 hover:text-white transition-all duration-300"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Treatments
            </h4>
            <ul className="mt-4 space-y-2.5">
              {treatmentLinks.map((t) => (
                <li key={t}>
                  <Link
                    href="#treatments"
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3.5 text-sm text-background/70">
              <li className="flex gap-3">
                <MapPin className="h-4.5 w-4.5 shrink-0 text-secondary mt-0.5" />
                <span>
                  {clinic.address.line1}, {clinic.address.line2},{' '}
                  {clinic.address.line3}, {clinic.address.line4},{' '}
                  {clinic.address.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${clinic.phone.replace(/\s/g, '')}`}
                  className="flex gap-3 hover:text-background"
                >
                  <Phone className="h-4.5 w-4.5 shrink-0 text-secondary mt-0.5" />
                  <span>{clinic.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${clinic.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 hover:text-background"
                >
                  <MessageCircle className="h-4.5 w-4.5 shrink-0 text-secondary mt-0.5" />
                  <span>WhatsApp: {clinic.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${clinic.email}`} className="flex gap-3 hover:text-background">
                  <Mail className="h-4.5 w-4.5 shrink-0 text-secondary mt-0.5" />
                  <span>{clinic.email}</span>
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-4.5 w-4.5 shrink-0 text-secondary mt-0.5" />
                <span>
                  {clinic.hours[0].day}: {clinic.hours[0].time}
                  <br />
                  {clinic.hours[1].day}: {clinic.hours[1].time}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/60">
          <p>
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <p>
            Crafted with care for {clinic.doctor} · {clinic.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
