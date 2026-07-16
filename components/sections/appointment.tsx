'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck, Loader2, CheckCircle2, Phone, Mail, MapPin, Clock, MessageCircle, X, CalendarDays, Stethoscope, User } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { supabase } from '@/lib/supabase';
import { treatments, clinic } from '@/lib/data';
import { toast } from 'sonner';

type Status = 'idle' | 'loading' | 'success';

export function Appointment() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    full_name: '',
    phone: '',
    email: '',
    treatment: '',
    preferred_date: '',
    message: '',
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    if (!form.full_name || !form.phone || !form.treatment || !form.preferred_date) {
      toast.error('Please fill in your name, phone, treatment and preferred date.');
      return;
    }

    setStatus('loading');
    try {
      const { error } = await supabase.from('appointments').insert({
        full_name: form.full_name,
        phone: form.phone,
        email: form.email || null,
        treatment: form.treatment,
        preferred_date: form.preferred_date,
        message: form.message || null,
      });

      if (error) throw error;

      setStatus('success');
      toast.success('Appointment request received! We will call you shortly.');
    } catch (err) {
      console.error(err);
      setStatus('idle');
      toast.error('Could not submit. Please try again or WhatsApp us.');
    }
  };

  const closeModal = () => {
    setStatus('idle');
    setForm({
      full_name: '',
      phone: '',
      email: '',
      treatment: '',
      preferred_date: '',
      message: '',
    });
  };

  const formattedDate = form.preferred_date
    ? new Date(form.preferred_date).toLocaleDateString('en-IN', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

  const contactItems = [
    { icon: Phone, label: 'Call Us', value: clinic.phone, href: `tel:${clinic.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: 'Email', value: clinic.email, href: `mailto:${clinic.email}` },
    { icon: MapPin, label: 'Visit', value: `${clinic.address.line1}, ${clinic.address.city}` },
    { icon: Clock, label: 'Hours', value: `${clinic.hours[0].day}: ${clinic.hours[0].time}` },
  ];

  return (
    <section id="appointment" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/[0.06] via-background to-secondary/[0.05]" />
      <div className="absolute -top-20 right-0 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <Reveal className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Book Appointment
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Begin Your <span className="text-gradient-primary">Transformation</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-base sm:text-lg">
              Share a few details and our team will call you to confirm your
              consultation with {clinic.doctor}. No payment required to book.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {contactItems.map((c) => {
                const Icon = c.icon;
                const content = (
                  <div className="glass-card rounded-2xl p-4 h-full hover:shadow-luxe transition-shadow">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-xs text-muted-foreground">{c.label}</p>
                    <p className="text-sm font-semibold">{c.value}</p>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={c.label}>{content}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative glass-card rounded-[2rem] p-6 sm:p-10 shadow-luxe">
              <AnimatePresence mode="wait">
                {status === 'success' ? null : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="grid sm:grid-cols-2 gap-4"
                  >
                    <div className="sm:col-span-2">
                      <label className="text-sm font-medium" htmlFor="full_name">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <Input
                        id="full_name"
                        value={form.full_name}
                        onChange={(e) => update('full_name', e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="mt-1.5"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium" htmlFor="phone">
                        Phone Number <span className="text-accent">*</span>
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="+91 9XXXXXXXXX"
                        className="mt-1.5"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium" htmlFor="email">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="you@email.com"
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">
                        Treatment <span className="text-accent">*</span>
                      </label>
                      <Select
                        value={form.treatment}
                        onValueChange={(v) => update('treatment', v)}
                      >
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select a treatment" />
                        </SelectTrigger>
                        <SelectContent>
                          {treatments.map((t) => (
                            <SelectItem key={t.title} value={t.title}>
                              {t.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium" htmlFor="preferred_date">
                        Preferred Date <span className="text-accent">*</span>
                      </label>
                      <Input
                        id="preferred_date"
                        type="date"
                        value={form.preferred_date}
                        onChange={(e) => update('preferred_date', e.target.value)}
                        className="mt-1.5"
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-sm font-medium" htmlFor="message">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        placeholder="Tell us about your concerns..."
                        className="mt-1.5"
                        rows={4}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-gradient-to-r from-primary to-secondary text-white shadow-luxe h-12 text-base"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <CalendarCheck className="h-5 w-5" />
                            Book Appointment
                          </>
                        )}
                      </Button>
                      <p className="mt-3 text-center text-xs text-muted-foreground">
                        Your information is private and never shared.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Dialog open={status === 'success'} onOpenChange={(o) => !o && closeModal()}>
        <DialogContent className="max-w-md overflow-hidden p-0">
          <div className="relative bg-gradient-to-br from-primary to-secondary p-8 text-center text-white">
            <button
              type="button"
              aria-label="Close"
              onClick={closeModal}
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white/15 hover:bg-white/25 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <motion.span
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.15 }}
              className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-white/15"
            >
              <CheckCircle2 className="h-11 w-11" />
            </motion.span>
            <DialogTitle className="mt-5 font-display text-2xl font-bold text-white">
              Appointment Confirmed!
            </DialogTitle>
            <DialogDescription className="mt-1.5 text-white/85">
              We have received your request and will call you shortly to confirm.
            </DialogDescription>
          </div>
          <div className="p-6 space-y-3">
            <div className="flex items-center gap-3 rounded-xl bg-muted/50 p-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary shrink-0">
                <User className="h-4.5 w-4.5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Patient</p>
                <p className="text-sm font-semibold truncate">{form.full_name || 'Your name'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-muted/50 p-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary shrink-0">
                <Stethoscope className="h-4.5 w-4.5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Treatment</p>
                <p className="text-sm font-semibold truncate">{form.treatment || 'Selected treatment'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-muted/50 p-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary shrink-0">
                <CalendarDays className="h-4.5 w-4.5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Preferred Date</p>
                <p className="text-sm font-semibold truncate">{formattedDate || 'To be confirmed'}</p>
              </div>
            </div>
            <a
              href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
                `Hello Elite Cosmo Clinic, I just booked an appointment for ${form.treatment} on ${formattedDate}. Name: ${form.full_name}, Phone: ${form.phone}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-luxe hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-4.5 w-4.5" />
              Confirm on WhatsApp
            </a>
            <Button
              variant="outline"
              className="w-full"
              onClick={closeModal}
            >
              Book Another Appointment
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
