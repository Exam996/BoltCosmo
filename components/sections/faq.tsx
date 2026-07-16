'use client';

import { Reveal } from '@/components/reveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs, clinic } from '@/lib/data';
import { MessageCircle } from 'lucide-react';

export function Faq() {
  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-mist/40 dark:bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-secondary">
              FAQ
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Questions, <span className="text-gradient-primary">Answered</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Everything you need to know before your visit. Still unsure? Our
              Elite AI Assistant or WhatsApp team can help anytime.
            </p>
            <a
              href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(clinic.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold hover:text-primary transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              Ask on WhatsApp
            </a>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="glass-card rounded-2xl px-4 sm:px-6"
            >
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${i}`}
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
      </div>
    </section>
  );
}
