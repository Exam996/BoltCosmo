import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Repeat,
  CalendarOff,
  IndianRupee,
  CalendarCheck,
  MessageCircle,
  ChevronRight,
} from 'lucide-react';
import { treatments, clinic } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Reveal } from '@/components/reveal';

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const treatment = treatments.find((t) => t.slug === params.slug);
  if (!treatment) return {};
  return {
    title: `${treatment.title} in Solapur | Elite Cosmo Clinic`,
    description: treatment.description,
    alternates: { canonical: `/treatments/${treatment.slug}` },
    openGraph: {
      title: `${treatment.title} in Solapur | Elite Cosmo Clinic`,
      description: treatment.description,
      images: [{ url: treatment.image, width: 1200, height: 630, alt: treatment.title }],
    },
  };
}

export default function TreatmentDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const treatment = treatments.find((t) => t.slug === params.slug);
  if (!treatment) notFound();

  const related = treatments
    .filter((t) => t.category === treatment.category && t.slug !== treatment.slug)
    .slice(0, 3);

  const info = [
    { icon: Clock, label: 'Duration', value: treatment.duration },
    { icon: Repeat, label: 'Sessions', value: treatment.sessions },
    { icon: CalendarOff, label: 'Downtime', value: treatment.downtime },
    { icon: IndianRupee, label: 'Price', value: treatment.price },
  ];

  const treatmentSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: treatment.title,
    description: treatment.description,
    url: `https://elitecosmoclinic.in/treatments/${treatment.slug}`,
    procedureType: 'Non-surgical',
    howPerformed: treatment.longDescription.slice(0, 200),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(treatmentSchema) }}
      />
      <main className="pt-24 sm:pt-28">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/#treatments" className="hover:text-primary">Treatments</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">{treatment.title}</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative py-12 sm:py-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/[0.06] via-background to-secondary/[0.05]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                {treatment.category}
              </span>
              <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {treatment.title}
              </h1>
              <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
                {treatment.longDescription}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/#appointment"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white shadow-luxe"
                >
                  <CalendarCheck className="h-4.5 w-4.5" />
                  Book Appointment
                </Link>
                <a
                  href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
                    `Hello Elite Cosmo Clinic, I would like to know more about ${treatment.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold"
                >
                  <MessageCircle className="h-4.5 w-4.5 text-[#25D366]" />
                  Ask on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-luxe">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Info cards */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {info.map((item) => (
                <Reveal key={item.label}>
                  <div className="glass-card rounded-2xl p-5 h-full">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5.5 w-5.5" />
                    </span>
                    <p className="mt-3 text-xs text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold mt-1">{item.value}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits + FAQ */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
                Key <span className="text-gradient-primary">Benefits</span>
              </h2>
              <ul className="mt-6 space-y-4">
                {treatment.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <span className="text-foreground/80">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
                Treatment <span className="text-gradient-primary">FAQs</span>
              </h2>
              <Accordion type="single" collapsible className="mt-6 glass-card rounded-2xl px-4 sm:px-6">
                {treatment.faqs.map((faq, i) => (
                  <AccordionItem
                    key={faq.question}
                    value={`faq-${i}`}
                    className="border-border/60"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-16 bg-mist/40 dark:bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-center">
                Related <span className="text-gradient-primary">Treatments</span>
              </h2>
              <div className="mt-10 grid sm:grid-cols-3 gap-5">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/treatments/${r.slug}`}
                    className="group glass-card rounded-2xl p-6 hover:shadow-luxe transition-shadow"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
                      <r.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold">{r.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                      {r.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                      Learn More
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative glass-card rounded-[2rem] p-10 sm:p-14 text-center overflow-hidden">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-primary/10 blur-3xl" />
                <h2 className="relative font-display text-2xl sm:text-3xl font-bold">
                  Ready to begin your <span className="text-gradient-primary">transformation?</span>
                </h2>
                <p className="relative mt-4 text-muted-foreground max-w-xl mx-auto">
                  Book a consultation with {clinic.doctor} and take the first step
                  towards natural, confidence-boosting results.
                </p>
                <div className="relative mt-7 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/#appointment"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white shadow-luxe"
                  >
                    <CalendarCheck className="h-4.5 w-4.5" />
                    Book Appointment
                  </Link>
                  <Link
                    href="/#treatments"
                    className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold"
                  >
                    <ArrowLeft className="h-4.5 w-4.5" />
                    All Treatments
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
