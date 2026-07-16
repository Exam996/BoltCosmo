import {
  Scissors,
  Droplets,
  Sparkles,
  Layers,
  Zap,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Syringe,
  Smile,
  Activity,
  Wand2,
  Microscope,
  Cpu,
  Award,
  UserRound,
  Lock,
  IndianRupee,
  MonitorSmartphone,
  Sofa,
  Trophy,
  type LucideIcon,
} from 'lucide-react';

export const clinic = {
  name: 'Elite Cosmo Clinic',
  doctor: 'Dr. Ukarande',
  tagline: 'Best Hair Transplant & Cosmetic Clinic in Solapur',
  phone: '+91 9767483781',
  whatsapp: '919767483781',
  whatsappMessage:
    'Hello Elite Cosmo Clinic, I would like to book an appointment.',
  email: 'info@elitecosmoclinic.in',
  address: {
    line1: '146, Railway Lines Rd',
    line2: 'Near Bhandari Hospital',
    line3: 'Near Siddhi Suzuki Showroom',
    line4: 'Old Employment Chowk',
    city: 'Solapur, Maharashtra 413001',
  },
  hours: [
    { day: 'Mon – Sat', time: '10:00 AM – 8:00 PM' },
    { day: 'Sunday', time: '11:00 AM – 2:00 PM' },
  ],
  mapsQuery:
    'Elite Cosmo Clinic, 146 Railway Lines Road, Near Bhandari Hospital, Solapur',
};

export const stats = [
  { value: 1000, suffix: '+', label: 'Happy Patients' },
  { value: 500, suffix: '+', label: 'Hair Transplants' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 5, suffix: '★', label: 'Patient Satisfaction' },
];

export type Treatment = {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: 'Hair' | 'Skin' | 'Laser' | 'Facial';
  benefits: string[];
  duration: string;
  sessions: string;
  downtime: string;
  price: string;
  image: string;
  faqs: { question: string; answer: string }[];
};

export const treatments: Treatment[] = [
  {
    icon: Scissors,
    title: 'Hair Transplant',
    slug: 'hair-transplant',
    description:
      'FUE & DHI hair restoration with natural-looking density and an undetectable hairline.',
    longDescription:
      'Our hair transplant program uses both Follicular Unit Extraction (FUE) and Direct Hair Implantation (DHI) techniques to restore hair naturally and permanently. Under the expert hand of Dr. Ukarande, each graft is placed at the precise angle and depth to recreate an undetectable hairline that suits your facial proportions. We use high-resolution imaging to map your donor and recipient zones, ensuring optimal density and coverage. The procedure is performed under local anaesthesia in our sterile, comfortable operating suite — you remain awake, relaxed, and pain-free throughout.',
    category: 'Hair',
    benefits: [
      'Permanent, natural-growing hair from your own donor follicles',
      'Undetectable hairline designed to match your facial structure',
      'Minimally invasive FUE & DHI — no linear scar, quick recovery',
      'High graft survival rate with precision implantation',
      'Suitable for beard, moustache and eyebrow restoration too',
    ],
    duration: '4–8 hours (single session)',
    sessions: '1 session (follow-up at 6 & 12 months)',
    downtime: '5–7 days',
    price: 'From ₹25 per graft',
    image:
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1200',
    faqs: [
      {
        question: 'Is the hair transplant permanent?',
        answer:
          'Yes. The transplanted follicles are harvested from the permanent donor zone at the back of your scalp, which is genetically resistant to balding. They continue to grow naturally for the rest of your life.',
      },
      {
        question: 'When will I see results?',
        answer:
          'New growth begins at 3–4 months. Significant density appears by 6–8 months, with full results visible at 10–12 months post-procedure.',
      },
      {
        question: 'Is the procedure painful?',
        answer:
          'No. The procedure is performed under local anaesthesia. Most patients report only mild discomfort during the numbing injections and relax comfortably for the rest of the session.',
      },
    ],
  },
  {
    icon: Droplets,
    title: 'PRP Therapy',
    slug: 'prp-therapy',
    description:
      'Platelet-Rich Plasma therapy to stimulate follicles and reverse hair thinning.',
    longDescription:
      'Platelet-Rich Plasma (PRP) therapy harnesses the healing growth factors naturally present in your own blood to stimulate dormant hair follicles. A small sample of your blood is centrifuged to isolate a concentrated plasma rich in platelets, which is then precisely injected into areas of thinning. The growth factors reactivate follicles, strengthen existing hair, and improve overall scalp health. PRP is an excellent non-surgical option for early-stage hair loss and works synergistically alongside hair transplants.',
    category: 'Hair',
    benefits: [
      '100% natural — uses your own platelet-rich plasma',
      'Strengthens existing hair and reactivates dormant follicles',
      'No surgery, no scarring, minimal downtime',
      'Improves hair thickness, texture and scalp health',
      'Safe to combine with hair transplant for enhanced results',
    ],
    duration: '45–60 minutes per session',
    sessions: '3–6 sessions, 1 month apart',
    downtime: 'None',
    price: 'From ₹3,000 per session',
    image:
      'https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg?auto=compress&cs=tinysrgb&w=1200',
    faqs: [
      {
        question: 'Is PRP painful?',
        answer:
          'Most patients describe mild discomfort rather than pain. We apply a numbing cream for 30 minutes before the session and use very fine needles for the injections.',
      },
      {
        question: 'How many sessions will I need?',
        answer:
          'A typical course is 3–6 sessions spaced one month apart, followed by maintenance sessions every 4–6 months. Dr. Ukarande will tailor the plan to your hair condition.',
      },
    ],
  },
  {
    icon: Sparkles,
    title: 'Hydra Facial',
    slug: 'hydra-facial',
    description:
      'Deep-cleanse, exfoliate and hydrate for an instant glass-skin glow.',
    longDescription:
      'The Hydra Facial is a multi-step medical-grade facial that cleanses, exfoliates, extracts impurities and hydrates the skin in a single session. Using patented vortex technology, it dislodges debris from pores while infusing the skin with tailored serums containing antioxidants, peptides and hyaluronic acid. The result is an instant, visible glow with zero redness or downtime — making it the perfect pre-event treatment or a monthly staple for maintaining healthy, radiant skin.',
    category: 'Facial',
    benefits: [
      'Instant, visible glow after just one session',
      'Deep pore cleansing with painless vortex extraction',
      'Customised serums for your specific skin concerns',
      'Zero downtime — no redness or peeling',
      'Suitable for all skin types, including sensitive skin',
    ],
    duration: '45 minutes',
    sessions: 'Monthly for maintenance',
    downtime: 'None',
    price: 'From ₹2,000 per session',
    image:
      'https://images.pexels.com/photos/3993450/pexels-photo-3993450.jpeg?auto=compress&cs=tinysrgb&w=1200',
    faqs: [
      {
        question: 'What is a Hydra Facial?',
        answer:
          'A multi-step treatment that cleanses, exfoliates, extracts and hydrates in one session using patented vortex-fusion technology, delivering instant glow with no downtime.',
      },
      {
        question: 'How often should I get a Hydra Facial?',
        answer:
          'For maintenance, once a month is ideal. For specific concerns like pigmentation or acne, a short course of weekly sessions may be recommended.',
      },
    ],
  },
  {
    icon: Layers,
    title: 'Chemical Peel',
    slug: 'chemical-peel',
    description:
      'Medical-grade peels that resurface texture, tone and pigmentation.',
    longDescription:
      'Chemical peels use controlled medical-grade acid solutions to exfoliate the outer layers of skin, revealing fresher, smoother and more even-toned skin beneath. At Elite Cosmo Clinic we offer a range of peels — from gentle superficial peels for instant radiance to deeper medical peels for stubborn pigmentation, acne scars and fine lines. Each peel is selected and customised to your skin type and concern, ensuring safe, predictable and beautiful results.',
    category: 'Skin',
    benefits: [
      'Reduces pigmentation, dark spots and melasma',
      'Smooths skin texture and refines pores',
      'Stimulates collagen for firmer, brighter skin',
      'Effective for acne and post-acne marks',
      'Customised depth — from lunchtime glow to deep resurfacing',
    ],
    duration: '30–45 minutes',
    sessions: '4–6 sessions, 2–4 weeks apart',
    downtime: '2–7 days (depending on depth)',
    price: 'From ₹1,500 per session',
    image:
      'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1200',
    faqs: [
      {
        question: 'Is a chemical peel safe for Indian skin?',
        answer:
          'Yes, when performed by an experienced doctor. We select peel types and concentrations specifically suited to Indian skin tones to minimise any risk of pigmentation.',
      },
      {
        question: 'Will my skin peel visibly?',
        answer:
          'Superficial peels cause mild flaking; deeper peels cause more visible peeling for 3–7 days. We will guide you through aftercare step by step.',
      },
    ],
  },
  {
    icon: Zap,
    title: 'Laser Hair Reduction',
    slug: 'laser-hair-reduction',
    description:
      'Painless diode laser for smooth, hair-free skin on face and body.',
    longDescription:
      'Laser Hair Reduction (LHR) at Elite Cosmo Clinic uses USFDA-approved diode laser technology to safely and permanently reduce unwanted hair on the face and body. The laser targets the melanin in hair follicles, disabling their ability to regrow while keeping the surrounding skin protected by an in-built cooling system. The treatment is fast, effective and comfortable — even on sensitive areas — and is safe for all Indian skin tones. A course of sessions delivers smooth, hair-free skin with lasting results.',
    category: 'Laser',
    benefits: [
      'Permanent hair reduction with USFDA-approved diode laser',
      'Painless sessions with in-built skin cooling',
      'Safe for all Indian skin tones and sensitive areas',
      'Fast treatment — small areas in minutes',
      'No ingrown hairs, no razor bumps, no stubble',
    ],
    duration: '15–45 minutes (area dependent)',
    sessions: '6–8 sessions, 4–6 weeks apart',
    downtime: 'None',
    price: 'From ₹1,500 per session',
    image:
      'https://images.pexels.com/photos/3998024/pexels-photo-3998024.jpeg?auto=compress&cs=tinysrgb&w=1200',
    faqs: [
      {
        question: 'Is laser hair reduction safe?',
        answer:
          'Absolutely. We use USFDA-approved diode lasers with an in-built cooling system that protects your skin. It is safe for Indian skin tones and sensitive areas.',
      },
      {
        question: 'How many sessions are needed?',
        answer:
          'Typically 6–8 sessions spaced 4–6 weeks apart, as hair grows in cycles. Maintenance sessions once or twice a year keep you smooth long-term.',
      },
    ],
  },
  {
    icon: HeartPulse,
    title: 'Acne Treatment',
    slug: 'acne-treatment',
    description:
      'Customised medical protocols to clear active acne and prevent scarring.',
    longDescription:
      'Our acne treatment program goes far beyond topical products. Dr. Ukarande assesses the underlying causes of your acne — hormonal, bacterial, lifestyle or genetic — and designs a multi-modal plan that may include medical-grade chemical peels, laser therapy, prescription skincare and lifestyle guidance. The goal is not only to clear active breakouts quickly but to prevent scarring and keep skin clear long-term. Every protocol is monitored and adjusted at each visit for the best possible outcome.',
    category: 'Skin',
    benefits: [
      'Clears active acne and prevents new breakouts',
      'Reduces inflammation and redness fast',
      'Prevents acne scars with early intervention',
      'Customised medical-grade protocols',
      'Ongoing monitoring and plan adjustment',
    ],
    duration: '30–45 minutes per session',
    sessions: '4–8 sessions, 2–4 weeks apart',
    downtime: 'None',
    price: 'From ₹1,500 per session',
    image:
      'https://images.pexels.com/photos/3992866/pexels-photo-3992866.jpeg?auto=compress&cs=tinysrgb&w=1200',
    faqs: [
      {
        question: 'How long until I see results?',
        answer:
          'Most patients see reduced inflammation within 2–3 weeks and significant clearing after 4–6 weeks of consistent treatment.',
      },
      {
        question: 'Will my acne scars also improve?',
        answer:
          'Yes. Once active acne is controlled, we offer resurfacing treatments like peels, microneedling and lasers to fade existing scars.',
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Pigmentation Treatment',
    slug: 'pigmentation-treatment',
    description:
      'Targeted care for melasma, dark spots and uneven skin tone.',
    longDescription:
      'Pigmentation — whether melasma, sun damage, dark spots or post-acne marks — requires a precise, patient and multi-layered approach. We combine medical-grade peels, laser toning, prescription lightening agents and strict sun protection to fade existing pigmentation and prevent recurrence. Dr. Ukarande personalises every protocol to your specific type of pigmentation and skin tone, ensuring safe, gradual and visible improvement without rebound.',
    category: 'Skin',
    benefits: [
      'Fades melasma, dark spots and post-acne marks',
      'Evens skin tone and restores radiance',
      'Prevents recurrence with maintenance plan',
      'Safe for sensitive and Indian skin tones',
      'Combines lasers, peels and medical skincare',
    ],
    duration: '30–45 minutes per session',
    sessions: '4–8 sessions, 2–4 weeks apart',
    downtime: 'None to minimal',
    price: 'From ₹2,000 per session',
    image:
      'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1200',
    faqs: [
      {
        question: 'Can pigmentation come back?',
        answer:
          'Some types like melasma can recur without maintenance and sun protection. We provide a long-term plan to keep results stable and prevent rebound.',
      },
    ],
  },
  {
    icon: Activity,
    title: 'Anti-Aging Treatments',
    slug: 'anti-aging-treatments',
    description:
      'Collagen-boosting therapies to smooth fine lines and restore firmness.',
    longDescription:
      'Our anti-aging program combines the best of aesthetic dermatology — Botox, dermal fillers, collagen-stimulating lasers, microneedling and medical skincare — to soften fine lines, restore volume and improve skin firmness. Dr. Ukarande believes in a natural, refreshed look: you look like yourself, just well-rested and rejuvenated. Every plan is built around your facial anatomy and aging pattern for harmonious, age-appropriate results.',
    category: 'Facial',
    benefits: [
      'Softens fine lines and wrinkles',
      'Restores lost volume and facial contours',
      'Boosts collagen for firmer, smoother skin',
      'Natural, refreshed — never overdone',
      'Multi-modal plan tailored to your aging pattern',
    ],
    duration: '30–60 minutes per session',
    sessions: 'Varies by treatment',
    downtime: 'None to minimal',
    price: 'From ₹5,000 per session',
    image:
      'https://images.pexels.com/photos/3993450/pexels-photo-3993450.jpeg?auto=compress&cs=tinysrgb&w=1200',
    faqs: [
      {
        question: 'Will I look frozen or unnatural?',
        answer:
          'No. Dr. Ukarande uses a measured, natural-results philosophy. The goal is a refreshed, well-rested version of you — never overdone.',
      },
    ],
  },
  {
    icon: Wand2,
    title: 'Skin Tightening',
    slug: 'skin-tightening',
    description:
      'Non-surgical RF and ultrasound tightening for a lifted, youthful contour.',
    longDescription:
      'Non-surgical skin tightening at Elite Cosmo Clinic uses advanced Radiofrequency (RF) and ultrasound technology to heat the deeper layers of skin, stimulating collagen remodelling and contraction. The result is a gradual lifting, firming and contouring of loose or sagging skin on the face, neck and body — with no incisions, no anaesthesia and no downtime. It is an excellent option for patients seeking a refreshed, youthful appearance without surgery.',
    category: 'Facial',
    benefits: [
      'Lifts and firms sagging skin without surgery',
      'Stimulates natural collagen production',
      'No incisions, no anaesthesia, no downtime',
      'Gradual, natural-looking improvement',
      'Effective for face, neck and body',
    ],
    duration: '30–60 minutes per session',
    sessions: '4–6 sessions, 2–4 weeks apart',
    downtime: 'None',
    price: 'From ₹4,000 per session',
    image:
      'https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg?auto=compress&cs=tinysrgb&w=1200',
    faqs: [
      {
        question: 'Is skin tightening painful?',
        answer:
          'Most patients feel a warm, comfortable sensation. The devices have built-in cooling to protect the skin surface and keep you comfortable.',
      },
    ],
  },
  {
    icon: Stethoscope,
    title: 'Scar Treatment',
    slug: 'scar-treatment',
    description:
      'Advanced resurfacing for acne, surgical and stretch-mark scars.',
    longDescription:
      'Scars — whether from acne, surgery, injury or stretch marks — can be significantly improved with today&apos;s dermatological technology. We combine microneedling, fractional lasers, chemical peels and medical skincare to resurface scarred skin, stimulate collagen and smooth texture. Each scar type requires a tailored approach, and Dr. Ukarande will assess your scars and design a plan that delivers the smoothest, most even result possible.',
    category: 'Skin',
    benefits: [
      'Smooths acne, surgical and stretch-mark scars',
      'Stimulates collagen to fill depressed scars',
      'Improves texture and skin tone',
      'Customised plan for each scar type',
      'Safe, gradual, visible improvement',
    ],
    duration: '30–60 minutes per session',
    sessions: '4–8 sessions, 4 weeks apart',
    downtime: '3–5 days',
    price: 'From ₹3,000 per session',
    image:
      'https://images.pexels.com/photos/3992866/pexels-photo-3992866.jpeg?auto=compress&cs=tinysrgb&w=1200',
    faqs: [
      {
        question: 'Can old scars be treated?',
        answer:
          'Yes. Even old scars respond to resurfacing. While complete removal is not possible, significant improvement in texture and appearance is achievable.',
      },
    ],
  },
  {
    icon: Syringe,
    title: 'Botox',
    slug: 'botox',
    description:
      'Precision botulinum toxin to soften wrinkles while keeping natural expression.',
    longDescription:
      'Botox (botulinum toxin) is one of the most studied and safest aesthetic treatments in the world. Dr. Ukarande uses precise, measured injections to temporarily relax the muscles that cause dynamic wrinkles — frown lines, crow&apos;s feet and forehead lines — while preserving your natural facial expression. The treatment takes minutes, requires no downtime and delivers a smoother, refreshed appearance that lasts for months.',
    category: 'Facial',
    benefits: [
      'Softens frown lines, crow&apos;s feet and forehead lines',
      'Preserves natural facial expression',
      'Quick, lunchtime procedure — no downtime',
      'Results visible in 3–7 days, last 3–6 months',
      'Also treats excessive underarm sweating',
    ],
    duration: '15–20 minutes',
    sessions: 'Every 3–6 months',
    downtime: 'None',
    price: 'From ₹300 per unit',
    image:
      'https://images.pexels.com/photos/3993450/pexels-photo-3993450.jpeg?auto=compress&cs=tinysrgb&w=1200',
    faqs: [
      {
        question: 'Will Botox make my face look frozen?',
        answer:
          'No. When administered by an experienced doctor, Botox softens wrinkles while keeping you looking natural and expressive. We always start conservatively.',
      },
    ],
  },
  {
    icon: Smile,
    title: 'Dermal Fillers',
    slug: 'dermal-fillers',
    description:
      'Hyaluronic acid fillers to restore volume, define lips and contour cheeks.',
    longDescription:
      'Dermal fillers are injectable hyaluronic-acid gels that restore lost volume, smooth deep folds, define lips and contour the cheeks and jawline. As we age, we naturally lose facial volume — fillers replace it instantly, with results visible immediately and lasting 6–18 months. Dr. Ukarande uses premium, FDA-approved fillers and a meticulous, anatomy-first technique to create balanced, harmonious and natural-looking results.',
    category: 'Facial',
    benefits: [
      'Restores volume to cheeks, temples and under-eyes',
      'Smooths nasolabial folds and marionette lines',
      'Defines lips, jawline and chin',
      'Immediate results, no downtime',
      'FDA-approved hyaluronic acid fillers',
    ],
    duration: '30–45 minutes',
    sessions: 'Every 6–18 months',
    downtime: 'None (mild swelling 24–48h)',
    price: 'From ₹15,000 per syringe',
    image:
      'https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg?auto=compress&cs=tinysrgb&w=1200',
    faqs: [
      {
        question: 'Are dermal fillers safe?',
        answer:
          'Yes. We use only FDA-approved hyaluronic acid fillers, which are naturally metabolised by the body over time. They are reversible if ever needed.',
      },
    ],
  },
  {
    icon: Microscope,
    title: 'Plastic Surgery Consultation',
    slug: 'plastic-surgery-consultation',
    description:
      'Confidential consultation for rhinoplasty, liposuction and reconstructive surgery.',
    longDescription:
      'Our plastic surgery consultation offers a confidential, no-pressure space to discuss surgical options — rhinoplasty, liposuction, gynecomastia correction, scar revision and reconstructive procedures. Dr. Ukarande will assess your goals, explain what is realistically achievable, outline the surgical plan, recovery and costs, and help you decide whether surgery is the right path for you. Honesty, safety and natural outcomes are at the heart of every consultation.',
    category: 'Facial',
    benefits: [
      'Confidential, no-pressure consultation',
      'Honest assessment of what is achievable',
      'Detailed surgical, recovery and cost plan',
      'Natural, harmonious outcome focus',
      'Full spectrum: cosmetic & reconstructive',
    ],
    duration: '45–60 minutes',
    sessions: '1 consultation (follow-ups as needed)',
    downtime: 'Varies by procedure',
    price: 'Consultation ₹1,000 (adjustable on procedure)',
    image:
      'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1200',
    faqs: [
      {
        question: 'Is the consultation confidential?',
        answer:
          'Completely. Every consultation is private and judgement-free. You will never be pressured into any procedure.',
      },
    ],
  },
];

export const whyChooseUs: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Cpu,
    title: 'Latest Technology',
    description: 'USFDA-approved lasers, DHI pens and imaging for precise outcomes.',
  },
  {
    icon: Award,
    title: 'Experienced Doctor',
    description: 'A decade of focused practice in hair restoration and aesthetics.',
  },
  {
    icon: UserRound,
    title: 'Personalized Consultation',
    description: 'Every plan is tailored to your skin type, goals and lifestyle.',
  },
  {
    icon: Lock,
    title: 'Safe Procedures',
    description: 'Strict sterilisation protocols and internationally graded safety standards.',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    description: 'Transparent packages with EMI options — no hidden costs.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Modern Equipment',
    description: 'A clinic equipped with the same machines used in metro cities.',
  },
  {
    icon: Sofa,
    title: 'Comfortable Clinic',
    description: 'A calm, private and hygienic space designed for your comfort.',
  },
  {
    icon: Trophy,
    title: 'Excellent Results',
    description: 'A consistent track record of natural, long-lasting transformations.',
  },
];

export type GalleryItem = {
  category: 'Hair' | 'Skin' | 'Laser' | 'Facial';
  label: string;
  before: string;
  after: string;
};

export const galleryItems: GalleryItem[] = [
  {
    category: 'Hair',
    label: 'Hair Transplant — 8 months',
    before:
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=900',
    after:
      'https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    category: 'Skin',
    label: 'Acne Scar Resurfacing',
    before:
      'https://images.pexels.com/photos/3992866/pexels-photo-3992866.jpeg?auto=compress&cs=tinysrgb&w=900',
    after:
      'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    category: 'Laser',
    label: 'Laser Hair Reduction — Face',
    before:
      'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=900',
    after:
      'https://images.pexels.com/photos/3998024/pexels-photo-3998024.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    category: 'Facial',
    label: 'Hydra Facial Glow',
    before:
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=900',
    after:
      'https://images.pexels.com/photos/3993450/pexels-photo-3993450.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export type Testimonial = {
  name: string;
  treatment: string;
  rating: number;
  review: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Rahul Patil',
    treatment: 'Hair Transplant',
    rating: 5,
    review:
      'I was nervous about the procedure but Dr. Ukarande made it completely painless. Eight months later my hairline looks completely natural — nobody can tell I had a transplant.',
    initials: 'RP',
  },
  {
    name: 'Sneha Deshmukh',
    treatment: 'Hydra Facial',
    rating: 5,
    review:
      'The glow after just one session was unreal. The clinic is spotless and the staff genuinely care about your comfort. Best skin treatment I have had in Solapur.',
    initials: 'SD',
  },
  {
    name: 'Amol Kulkarni',
    treatment: 'Laser Hair Reduction',
    rating: 5,
    review:
      'After six sessions my facial hair growth is almost gone. The laser sessions were quick and painless. Highly recommend Elite Cosmo Clinic.',
    initials: 'AK',
  },
  {
    name: 'Priya Jadhav',
    treatment: 'PRP Therapy',
    rating: 5,
    review:
      'My hair fall reduced drastically within three PRP sessions. Dr. Ukarande explains everything patiently and the results speak for themselves.',
    initials: 'PJ',
  },
  {
    name: 'Vikas Shinde',
    treatment: 'Acne Treatment',
    rating: 5,
    review:
      'Years of stubborn acne finally cleared. The customised plan worked when nothing else did. Forever grateful to the team at Elite Cosmo Clinic.',
    initials: 'VS',
  },
  {
    name: 'Anjali Pawar',
    treatment: 'Dermal Fillers',
    rating: 5,
    review:
      'Very natural-looking results. My cheeks and lips look refreshed, not overdone. The doctor truly understands facial aesthetics.',
    initials: 'AP',
  },
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: 'Is Hair Transplant Permanent?',
    answer:
      'Yes. Transplanted follicles are taken from the permanent donor zone at the back of the scalp, which is genetically resistant to balding. Once they settle — usually within 3 to 4 months — they grow naturally for life. We recommend a follow-up plan to protect your existing hair.',
  },
  {
    question: 'Is PRP Therapy Painful?',
    answer:
      'Most patients describe PRP as mild discomfort rather than pain. We apply a numbing cream for 30 minutes before the session, and the injections use very fine needles. The whole procedure takes about 45 minutes with zero downtime.',
  },
  {
    question: 'How many sessions are needed?',
    answer:
      'It depends on the treatment. PRP usually needs 3 to 6 sessions a month apart. Laser Hair Reduction typically needs 6 to 8 sessions spaced 4 to 6 weeks apart. Hydra Facial is a monthly maintenance treatment. Dr. Ukarande will share an exact plan during your consultation.',
  },
  {
    question: 'What is Hydra Facial?',
    answer:
      'Hydra Facial is a multi-step treatment that cleanses, exfoliates, extracts impurities and hydrates the skin in one session. It delivers instant glow with no redness or downtime, making it ideal before events or as monthly skin maintenance.',
  },
  {
    question: 'Is Laser Hair Reduction safe?',
    answer:
      'Absolutely. We use USFDA-approved diode lasers with an in-built cooling system that protects your skin. It is safe for Indian skin tones and sensitive areas. Mild redness, if any, settles within a few hours.',
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Hair' | 'Skin' | 'Laser' | 'Facial' | 'Guide';
  date: string;
  readingTime: string;
  image: string;
  author: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'hair-transplant-guide-solapur',
    title: 'The Complete Hair Transplant Guide for Solapur Patients',
    excerpt:
      'Everything you need to know about FUE and DHI hair transplants — from consultation to recovery and final results.',
    category: 'Hair',
    date: '2025-06-12',
    readingTime: '8 min read',
    image:
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Dr. Ukarande',
    content: [
      'Hair loss affects millions of men and women across India, and Solapur is no exception. Whether caused by genetics, stress, nutritional deficiencies or hormonal changes, losing your hair can deeply impact your confidence. The good news is that modern hair transplant techniques make natural, permanent restoration entirely possible.',
      'At Elite Cosmo Clinic, we specialise in two advanced techniques: Follicular Unit Extraction (FUE) and Direct Hair Implantation (DHI). Both harvest individual follicles from the permanent donor zone at the back of your scalp and implant them into thinning or bald areas. The key difference is that DHI uses a specialised implanter pen that creates the incision and inserts the graft simultaneously, allowing even greater precision for the hairline.',
      'The procedure is performed under local anaesthesia and takes 4–8 hours depending on the number of grafts. You remain awake and comfortable throughout. Most patients return to work within a week. New hair growth begins at 3–4 months, with significant density by 6–8 months and full, natural results at 10–12 months.',
      'Choosing the right clinic and surgeon is the single most important decision in your hair transplant journey. Look for experience, before-and-after evidence, a sterile operating environment and a surgeon who designs your hairline to match your facial proportions — not a one-size-fits-all template.',
      'If you are considering a hair transplant in Solapur, we invite you to book a consultation with Dr. Ukarande. You will receive an honest assessment, a graft count estimate and a transparent quote — with no pressure to proceed.',
    ],
  },
  {
    slug: 'prp-therapy-explained',
    title: 'PRP Therapy for Hair Loss: Does It Really Work?',
    excerpt:
      'Platelet-Rich Plasma therapy is a natural, non-surgical option for early hair loss. Here is what the science says.',
    category: 'Hair',
    date: '2025-05-28',
    readingTime: '6 min read',
    image:
      'https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Dr. Ukarande',
    content: [
      'Platelet-Rich Plasma (PRP) therapy has gained significant attention as a non-surgical treatment for hair loss. But how does it work, and who benefits most?',
      'PRP uses the healing growth factors naturally present in your own blood. A small sample is drawn and centrifuged to isolate a concentrated plasma rich in platelets. This plasma is then injected into areas of thinning, where the growth factors stimulate dormant follicles, strengthen existing hair and improve scalp health.',
      'Clinical studies show PRP is most effective for early-stage androgenetic alopecia and diffuse thinning, where follicles are still alive but underactive. It is less effective for completely bald areas where follicles are no longer present — in those cases, a hair transplant is the better option.',
      'A typical course is 3–6 sessions spaced one month apart, with maintenance sessions every 4–6 months. PRP can also be combined with a hair transplant to improve graft survival and accelerate regrowth.',
      'At Elite Cosmo Clinic, PRP is performed under numbing cream with minimal discomfort. If you are noticing early thinning, PRP is an excellent first-line, natural option to explore before considering surgery.',
    ],
  },
  {
    slug: 'hydra-facial-benefits',
    title: '5 Reasons Hydra Facial Is the Ultimate Pre-Event Glow Treatment',
    excerpt:
      'Why Hydra Facial has become the go-to facial for brides, grooms and anyone who wants instant, camera-ready skin.',
    category: 'Facial',
    date: '2025-05-10',
    readingTime: '5 min read',
    image:
      'https://images.pexels.com/photos/3993450/pexels-photo-3993450.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Dr. Ukarande',
    content: [
      'The Hydra Facial has taken the aesthetic world by storm — and for good reason. It is one of the few treatments that delivers an immediate, visible glow with zero downtime, making it the perfect pre-event treatment.',
      '1. Instant results. Unlike peels or lasers that take weeks to reveal their effect, a Hydra Facial leaves your skin visibly brighter, smoother and more hydrated the moment you step out of the clinic.',
      '2. Deep pore cleansing. The patented vortex technology painlessly extracts blackheads, sebum and impurities from your pores — no squeezing, no redness.',
      '3. Customised hydration. The infusion step delivers antioxidants, peptides and hyaluronic acid deep into the skin, plumping fine lines and restoring radiance.',
      '4. Zero downtime. No peeling, no redness, no sensitivity. You can apply makeup the same evening and attend your event the next day with confidence.',
      '5. Suitable for everyone. Hydra Facial is safe for all skin types, including sensitive and acne-prone skin. It is the ideal monthly maintenance treatment for healthy, glowing skin.',
    ],
  },
  {
    slug: 'laser-hair-reduction-myths',
    title: '5 Laser Hair Reduction Myths — Debunked by a Dermatologist',
    excerpt:
      'Does laser hair reduction cause cancer? Is it permanent? We bust the most common myths with facts.',
    category: 'Laser',
    date: '2025-04-22',
    readingTime: '6 min read',
    image:
      'https://images.pexels.com/photos/3998024/pexels-photo-3998024.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Dr. Ukarande',
    content: [
      'Laser Hair Reduction is one of the most popular aesthetic treatments in India, yet several myths still surround it. Let us separate fact from fiction.',
      'Myth 1: Laser hair reduction causes cancer. Fact: The lasers used for hair reduction operate in the infrared spectrum and do not emit UV or ionising radiation. There is no link between laser hair reduction and cancer.',
      'Myth 2: One session is enough. Fact: Hair grows in cycles, and the laser only affects follicles in the active growth phase. That is why 6–8 sessions spaced 4–6 weeks apart are needed for lasting results.',
      'Myth 3: It is not safe for Indian skin. Fact: Modern diode lasers with cooling systems are specifically designed to safely treat darker skin tones. We use USFDA-approved devices suited for Indian skin.',
      'Myth 4: It is extremely painful. Fact: With in-built cooling, most patients describe the sensation as a warm snap — far more comfortable than waxing.',
      'Myth 5: Results are not permanent. Fact: Laser hair reduction delivers permanent hair reduction. Most patients see 80–90% reduction after a full course, with only occasional maintenance needed.',
    ],
  },
  {
    slug: 'skincare-routine-indian-skin',
    title: 'Building a Dermatologist-Approved Skincare Routine for Indian Skin',
    excerpt:
      'A simple, science-backed morning and evening routine tailored to Indian climate and skin tones.',
    category: 'Skin',
    date: '2025-04-05',
    readingTime: '7 min read',
    image:
      'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Dr. Ukarande',
    content: [
      'A good skincare routine does not need ten products. It needs the right products, used consistently. Here is a dermatologist-approved framework for Indian skin.',
      'Morning: Cleanse with a gentle, pH-balanced cleanser. Apply a vitamin C serum for antioxidant protection and glow. Follow with a broad-spectrum SPF 50 sunscreen — non-negotiable in the Indian sun.',
      'Evening: Cleanse to remove sunscreen and pollution. Apply a treatment product — retinol for anti-ageing, niacinamide for pigmentation, or salicylic acid for acne. Moisturise to restore the skin barrier.',
      'The biggest mistake we see is skipping sunscreen. UV exposure is the primary cause of premature ageing and pigmentation in Indian skin. Apply sunscreen every morning, rain or shine.',
      'Start simple, be consistent, and introduce actives one at a time. If you have a specific concern — acne, melasma, sensitive skin — book a consultation for a personalised prescription plan.',
    ],
  },
  {
    slug: 'when-to-consider-anti-aging-treatments',
    title: 'When Should You Start Anti-Aging Treatments? A Doctor&apos;s Perspective',
    excerpt:
      'Prevention is easier than correction. Here is the right age to start, and which treatments make sense at each stage.',
    category: 'Guide',
    date: '2025-03-18',
    readingTime: '6 min read',
    image:
      'https://images.pexels.com/photos/3993450/pexels-photo-3993450.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Dr. Ukarande',
    content: [
      'The question of when to start anti-aging treatments is one I hear every day. The honest answer: earlier than most people think.',
      'In your 20s, the focus is prevention. Sunscreen, antioxidants and good skincare habits prevent the damage that shows up decades later. This is the highest-ROI investment you can make in your skin.',
      'In your 30s, early signs appear — fine lines, mild volume loss and dullness. This is when treatments like Hydra Facials, mild peels and the first preventive Botox make sense.',
      'In your 40s and beyond, collagen loss accelerates. Dermal fillers restore volume, skin tightening addresses laxity, and a combination approach delivers the most natural, refreshed result.',
      'The key principle at every age is natural, refreshed results. The goal is not to look different — it is to look like the best version of yourself.',
    ],
  },
];
