'use client';

import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { galleryItems } from '@/lib/data';
import { cn } from '@/lib/utils';

const filters = ['All', 'Hair', 'Skin', 'Laser', 'Facial'] as const;

function BeforeAfterSlider({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl cursor-ew-resize select-none shadow-luxe"
      onMouseDown={(e) => {
        dragging.current = true;
        update(e.clientX);
      }}
      onMouseMove={(e) => dragging.current && update(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => update(e.touches[0].clientX)}
      onTouchMove={(e) => update(e.touches[0].clientX)}
    >
      <img
        src={after}
        alt={`After — ${label}`}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        draggable={false}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          alt={`Before — ${label}`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${ref.current?.clientWidth ?? 100}%` }}
          loading="lazy"
          draggable={false}
        />
      </div>

      <span className="absolute left-3 top-3 rounded-full bg-foreground/70 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white backdrop-blur">
        Before
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-secondary/80 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white backdrop-blur">
        After
      </span>

      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
        style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white text-primary shadow-luxe">
          <MoveHorizontal className="h-5 w-5" />
        </span>
      </div>

      <span className="absolute bottom-3 left-3 rounded-full glass px-3 py-1 text-xs font-medium text-white">
        {label}
      </span>
    </div>
  );
}

export function Gallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const items =
    filter === 'All'
      ? galleryItems
      : galleryItems.filter((g) => g.category === filter);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-mist/40 dark:bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Before &amp; After
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Real <span className="text-gradient-primary">Transformations</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            Drag the slider to reveal the difference. Every result is achieved
            with safety, precision and natural-looking outcomes.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all',
                filter === f
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-luxe'
                  : 'glass text-foreground/80 hover:text-primary'
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <motion.div
          layout
          className="mt-12 grid sm:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                key={item.label}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <BeforeAfterSlider
                  before={item.before}
                  after={item.after}
                  label={item.label}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
