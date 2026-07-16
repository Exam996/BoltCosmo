'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Bot, Trash2 } from 'lucide-react';
import { clinic } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type Msg = { role: 'bot' | 'user'; text: string; ts: number };

const STORAGE_KEY = 'elite-ai-conversation';
const GREETING = `Hi! I am the Elite AI Assistant. I can help with timings, treatments, pricing, hair transplant & skin FAQs, location and booking. How can I assist you today?`;

const quickPrompts = [
  'Clinic timings?',
  'Treatments?',
  'Pricing?',
  'Hair transplant info',
  'Location?',
];

const knowledge: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['timing', 'hour', 'open', 'time', 'when', 'close'],
    answer:
      'We are open Monday to Saturday, 10:00 AM to 8:00 PM, and Sunday 11:00 AM to 2:00 PM. Would you like to book an appointment for a specific time?',
  },
  {
    keywords: ['treatment', 'service', 'offer', 'do you do', 'available'],
    answer:
      'We offer Hair Transplant (FUE & DHI), PRP Therapy, Hydra Facial, Chemical Peel, Laser Hair Reduction, Acne & Pigmentation Treatment, Anti-Aging, Skin Tightening, Scar Treatment, Botox, Dermal Fillers and Plastic Surgery Consultation. Which one interests you?',
  },
  {
    keywords: ['price', 'cost', 'charge', 'fee', 'how much', 'rate', 'pricing'],
    answer:
      'Pricing depends on your needs: consultations start at ₹500 (adjustable on treatment). Hydra Facial from ₹2,000, PRP per session from ₹3,000, Laser Hair Reduction from ₹1,500 per session, Hair Transplant from ₹25/graft. For an exact quote, book a free assessment — shall I share the WhatsApp link?',
  },
  {
    keywords: ['hair transplant', 'transplant', 'bald', 'graft', 'fue', 'dhi', 'hairline'],
    answer:
      'Our hair transplants use FUE & DHI techniques with natural-looking density and an undetectable hairline. Results are permanent and visible from 3-4 months, full at 10-12 months. 500+ transplants done. Would you like to book a consultation with Dr. Ukarande?',
  },
  {
    keywords: ['prp', 'hair fall', 'thinning'],
    answer:
      'PRP (Platelet-Rich Plasma) therapy uses your own blood plasma to stimulate hair follicles. Usually 3-6 monthly sessions. Mild discomfort with numbing cream, no downtime. Great for early hair thinning. Want to book a session?',
  },
  {
    keywords: ['hydra', 'facial', 'glow'],
    answer:
      'Hydra Facial cleanses, exfoliates, extracts and hydrates in one session — instant glow with zero downtime. Ideal monthly or before events. From ₹2,000. Shall I book one for you?',
  },
  {
    keywords: ['laser', 'hair reduction', 'lhr', 'hair removal'],
    answer:
      'Laser Hair Reduction uses USFDA-approved diode lasers with cooling — safe for Indian skin, painless, 6-8 sessions needed. From ₹1,500/session. Want to schedule a patch test?',
  },
  {
    keywords: ['acne', 'pimple', 'breakout'],
    answer:
      'Our acne protocols combine medical-grade peels, lasers and topical plans to clear active acne and prevent scarring. Customised to your skin. Book a consultation for a personalised plan.',
  },
  {
    keywords: ['pigmentation', 'melasma', 'dark spot', 'tan'],
    answer:
      'We treat pigmentation, melasma and dark spots with chemical peels, lasers and skincare. Results visible in 4-6 weeks. Consult Dr. Ukarande for the right plan.',
  },
  {
    keywords: ['botox', 'filler', 'anti aging', 'wrinkle', 'aging', 'fine line'],
    answer:
      'Botox softens wrinkles keeping natural expression; Dermal Fillers restore volume to cheeks, lips and under-eyes. Results last 6-18 months. Done by Dr. Ukarande personally. Want to book?',
  },
  {
    keywords: ['location', 'address', 'where', 'map', 'direction', 'reach'],
    answer:
      'We are at 146, Railway Lines Rd, Near Bhandari Hospital, Near Siddhi Suzuki Showroom, Old Employment Chowk, Solapur, Maharashtra 413001. You will find a map at the bottom of this page. Need directions on WhatsApp?',
  },
  {
    keywords: ['doctor', 'ukarande', 'who', 'experience', 'specialist', 'qualification'],
    answer:
      'Dr. Ukarande is our lead specialist — Best Hair Transplant Specialist in Solapur with 10+ years experience, 500+ hair transplants and 1000+ happy patients. Trained in advanced FUE & DHI. Would you like to consult him?',
  },
  {
    keywords: ['book', 'appointment', 'schedule', 'consult', 'visit', 'slot'],
    answer:
      `I would be happy to help you book! You can fill the appointment form on this page, or message us directly on WhatsApp: https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(clinic.whatsappMessage)}`,
  },
  {
    keywords: ['safe', 'pain', 'hurt', 'side effect', 'risk'],
    answer:
      'All our procedures use USFDA-approved technology with strict sterilisation. Most are painless or involve numbing cream. Safety is our top priority. Any specific treatment you are concerned about?',
  },
];

function getAnswer(input: string, history: Msg[]): string {
  const text = input.toLowerCase();

  // Context-aware: if user previously asked about a treatment and now asks about price
  const lastUserMsgs = history.filter((m) => m.role === 'user').slice(-2);
  const lastBotMsgs = history.filter((m) => m.role === 'bot').slice(-2);
  const askedAboutTreatment = lastBotMsgs.some((m) =>
    m.text.includes('Which one interests you')
  );

  for (const entry of knowledge) {
    if (entry.keywords.some((k) => text.includes(k))) {
      // Contextual follow-up: treatment name + price
      if (
        (text.includes('price') || text.includes('cost') || text.includes('how much')) &&
        askedAboutTreatment &&
        lastUserMsgs.length > 0
      ) {
        const last = lastUserMsgs[lastUserMsgs.length - 1].text.toLowerCase();
        if (last.includes('hair transplant')) {
          return 'Hair Transplant pricing starts from ₹25 per graft. The total cost depends on the number of grafts you need, which we assess during consultation. Shall I share the WhatsApp link to book a free assessment?';
        }
        if (last.includes('prp')) {
          return 'PRP Therapy starts from ₹3,000 per session. A typical course is 3-6 sessions. Shall I book your first session?';
        }
        if (last.includes('hydra') || last.includes('facial')) {
          return 'Hydra Facial starts from ₹2,000 per session. Monthly maintenance is recommended. Shall I book one for you?';
        }
        if (last.includes('laser')) {
          return 'Laser Hair Reduction starts from ₹1,500 per session. 6-8 sessions are typically needed. Want to schedule a patch test?';
        }
      }
      return entry.answer;
    }
  }

  // Greeting detection
  if (/^(hi|hello|hey|namaste|good (morning|afternoon|evening))/.test(text)) {
    return 'Hello! Welcome to Elite Cosmo Clinic. I can help with timings, treatments, pricing, FAQs and booking. What would you like to know?';
  }

  // Thanks detection
  if (/(thank|thanks|thank you|grateful)/.test(text)) {
    return 'You are most welcome! Is there anything else I can help you with? You can also book directly on WhatsApp: https://wa.me/' + clinic.whatsapp;
  }

  return `I can help with clinic timings, treatments, pricing, hair transplant info, skin & laser FAQs, location and booking. For anything else, message us on WhatsApp: https://wa.me/${clinic.whatsapp}`;
}

export function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Load conversation from localStorage on mount
  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Msg[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
          return;
        }
      }
    } catch {}
    // Default greeting if no history exists
    setMessages([{ role: 'bot', text: GREETING, ts: Date.now() }]);
  }, []);

  // Persist conversation to localStorage
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages, mounted]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  const clearChat = useCallback(() => {
    const fresh = [{ role: 'bot' as const, text: GREETING, ts: Date.now() }];
    setMessages(fresh);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  }, []);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    const userMsg: Msg = { role: 'user', text: trimmed, ts: Date.now() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      const answer = getAnswer(trimmed, messages);
      setMessages((m) => [...m, { role: 'bot', text: answer, ts: Date.now() }]);
      setTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating buttons - bottom right */}
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-20 right-0 w-[calc(100vw-3rem)] sm:w-96 max-w-md glass-card rounded-3xl shadow-luxe overflow-hidden flex flex-col"
              style={{ maxHeight: '70vh' }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary to-secondary text-white">
                <span className="relative grid h-10 w-10 place-items-center rounded-full bg-white/15">
                  <Bot className="h-5 w-5" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-400 ring-2 ring-primary" />
                </span>
                <div className="flex-1">
                  <p className="font-semibold leading-tight">Elite AI Assistant</p>
                  <p className="text-xs text-white/80">Typically replies instantly</p>
                </div>
                {messages.length > 1 && (
                  <button
                    type="button"
                    aria-label="Clear conversation"
                    onClick={clearChat}
                    className="grid h-8 w-8 place-items-center rounded-full hover:bg-white/15 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
                <button
                  type="button"
                  aria-label="Close chat"
                  onClick={() => setChatOpen(false)}
                  className="grid h-8 w-8 place-items-center rounded-full hover:bg-white/15 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Messages */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 space-y-3 bg-background/40"
              >
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      'flex',
                      m.role === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    <div
                      className={cn(
                        'max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm',
                        m.role === 'user'
                          ? 'bg-gradient-to-r from-primary to-secondary text-white rounded-br-sm'
                          : 'glass-card rounded-bl-sm'
                      )}
                    >
                      {m.text}
                    </div>
                  </motion.div>
                ))}
                {typing && (
                  <div className="flex justify-start">
                    <div className="glass-card rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                      {[0, 1, 2].map((d) => (
                        <motion.span
                          key={d}
                          className="h-2 w-2 rounded-full bg-foreground/40"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.15 }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Quick prompts */}
              {messages.length <= 2 && mounted && (
                <div className="px-4 pb-2 flex flex-wrap gap-2">
                  {quickPrompts.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => send(p)}
                      className="rounded-full glass px-3 py-1.5 text-xs font-medium hover:text-primary transition-colors"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="p-3 border-t border-border/60 flex items-center gap-2 bg-background/60"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 bg-background border-border/60"
                />
                <button
                  type="submit"
                  aria-label="Send"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-r from-primary to-secondary text-white shadow-luxe"
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* AI Assistant button */}
        <button
          type="button"
          aria-label="Open Elite AI Assistant"
          onClick={() => setChatOpen((o) => !o)}
          className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-luxe transition-transform hover:scale-110"
        >
          {!chatOpen && (
            <span className="absolute inset-0 rounded-full bg-secondary/40 animate-pulse-ring" />
          )}
          {chatOpen ? <X className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
        </button>

        {/* WhatsApp button (below AI) */}
        <a
          href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
            clinic.whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe transition-transform hover:scale-110"
        >
          {!chatOpen && (
            <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-pulse-ring" style={{ animationDelay: '0.5s' }} />
          )}
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </>
  );
}
