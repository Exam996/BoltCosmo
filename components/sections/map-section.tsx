'use client';

import { Reveal } from '@/components/reveal';
import { MapPin, Navigation } from 'lucide-react';
import { clinic } from '@/lib/data';

export function MapSection() {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    clinic.mapsQuery
  )}&output=embed`;

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Visit Us
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Find <span className="text-gradient-primary">Elite Cosmo Clinic</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            Centrally located on Railway Lines Road, Solapur — easy to reach
            from anywhere in the city.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-4 glass-card rounded-[2rem] p-8 flex flex-col justify-center">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-luxe">
                <MapPin className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{clinic.name}</h3>
              <address className="mt-3 not-italic text-sm text-muted-foreground leading-relaxed">
                {clinic.address.line1},<br />
                {clinic.address.line2},<br />
                {clinic.address.line3},<br />
                {clinic.address.line4},<br />
                {clinic.address.city}
              </address>
              <div className="mt-5 space-y-2">
                {clinic.hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  clinic.mapsQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-luxe"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>

            <div className="lg:col-span-8 rounded-[2rem] overflow-hidden shadow-luxe min-h-[360px] lg:min-h-[480px] border border-border/60">
              <iframe
                title="Elite Cosmo Clinic location on Google Maps"
                src={src}
                className="h-full w-full min-h-[360px] lg:min-h-[480px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
