import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ScrollProgress } from '@/components/scroll-progress';
import { Navbar } from '@/components/navbar';
import { FloatingActions } from '@/components/floating-actions';
import { Footer } from '@/components/sections/footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const siteUrl = 'https://elitecosmoclinic.in';
const description =
  'Elite Cosmo Clinic by Dr. Ukarande — the best hair transplant, skin, laser & cosmetic clinic in Solapur. 1000+ happy patients, 500+ hair transplants, 10+ years of trusted care.';
const keywords =
  'hair transplant Solapur, cosmetic clinic Solapur, dermatologist Solapur, laser hair reduction, PRP therapy, hydra facial, plastic surgery Solapur, Dr Ukarande, Elite Cosmo Clinic';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Elite Cosmo Clinic | Best Hair Transplant & Cosmetic Clinic in Solapur',
    template: '%s | Elite Cosmo Clinic',
  },
  description,
  keywords,
  authors: [{ name: 'Dr. Ukarande', url: siteUrl }],
  creator: 'Elite Cosmo Clinic',
  publisher: 'Elite Cosmo Clinic',
  alternates: { canonical: siteUrl },
  themeColor: '#0B3D91',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Elite Cosmo Clinic',
    title: 'Elite Cosmo Clinic | Best Hair Transplant & Cosmetic Clinic in Solapur',
    description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elite Cosmo Clinic — Solapur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Cosmo Clinic | Best Hair Transplant & Cosmetic Clinic in Solapur',
    description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  category: 'Medical Business',
};

export const viewport = {
  themeColor: '#0B3D91',
  width: 'device-width',
  initialScale: 1,
};

const medicalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': `${siteUrl}#clinic`,
  name: 'Elite Cosmo Clinic',
  description,
  url: siteUrl,
  telephone: '+91 9767483781',
  image: `${siteUrl}/og-image.jpg`,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      '146, Railway Lines Rd, Near Bhandari Hospital, Near Siddhi Suzuki Showroom, Old Employment Chowk',
    addressLocality: 'Solapur',
    addressRegion: 'Maharashtra',
    postalCode: '413001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.6599,
    longitude: 75.9064,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '11:00',
      closes: '14:00',
    },
  ],
  founder: {
    '@type': 'Person',
    name: 'Dr. Ukarande',
    jobTitle: 'Hair Transplant Specialist & Cosmetic Dermatologist',
  },
  medicalSpecialty: ['Dermatology', 'PlasticSurgery', 'HairTransplant'],
  areaServed: { '@type': 'City', name: 'Solapur' },
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Hair Transplant Permanent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Transplanted follicles are taken from the permanent donor zone at the back of the scalp, which is genetically resistant to balding. Once they settle — usually within 3 to 4 months — they grow naturally for life.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is PRP Therapy Painful?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most patients describe mild discomfort rather than pain. We apply a numbing cream for 30 minutes before the session, and the injections use very fine needles. The whole procedure takes about 45 minutes with zero downtime.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many sessions are needed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the treatment. PRP usually needs 3 to 6 sessions a month apart. Laser Hair Reduction typically needs 6 to 8 sessions spaced 4 to 6 weeks apart. Hydra Facial is a monthly maintenance treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Hydra Facial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hydra Facial is a multi-step treatment that cleanses, exfoliates, extracts impurities and hydrates the skin in one session. It delivers instant glow with no redness or downtime.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Laser Hair Reduction safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We use USFDA-approved diode lasers with an in-built cooling system that protects your skin. It is safe for Indian skin tones and sensitive areas.',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqPageSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <FloatingActions />
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
