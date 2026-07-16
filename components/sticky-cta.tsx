'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck, Phone, Sparkles } from 'lucide-react';
import { clinic } from '@/lib/data';

export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > 700;
      const nearBottom =
        window.innerHeight + window.scrollY >
        document.body.scrollHeight - 700;
      setShow(past && !nearBottom);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 inset-x-0 z-40 px-4 pb-4 pointer-events-none"
        >
          <div className="mx-auto max-w-3xl pointer-events-auto">
            <div className="glass-card rounded-2xl shadow-luxe px-4 sm:px-5 py-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <span className="hidden sm:grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shrink-0">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate">
                    Book your consultation
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    with {clinic.doctor}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`tel:${clinic.phone.replace(/\s/g, '')}`}
                  aria-label="Call clinic"
                  className="grid h-10 w-10 place-items-center rounded-xl glass hover:text-primary transition-colors"
                >
                  <Phone className="h-4.5 w-4.5" />
                </a>
                <Link
                  href="/#appointment"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 sm:px-5 py-2.5 text-sm font-semibold text-white shadow-luxe"
                >
                  <CalendarCheck className="h-4 w-4" />
                  <span className="hidden sm:inline">Book Appointment</span>
                  <span className="sm:hidden">Book</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
