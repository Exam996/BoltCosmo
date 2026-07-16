import { StickyCta } from '@/components/sticky-cta';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Treatments } from '@/components/sections/treatments';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Gallery } from '@/components/sections/gallery';
import { Testimonials } from '@/components/sections/testimonials';
import { Faq } from '@/components/sections/faq';
import { BlogTeaser } from '@/components/sections/blog-teaser';
import { Appointment } from '@/components/sections/appointment';
import { MapSection } from '@/components/sections/map-section';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Treatments />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Faq />
        <BlogTeaser />
        <Appointment />
        <MapSection />
      </main>
      <StickyCta />
    </>
  );
}
