import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ChevronRight, CalendarCheck, MessageCircle } from 'lucide-react';
import { blogPosts, clinic } from '@/lib/data';
import { Reveal } from '@/components/reveal';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'Elite Cosmo Clinic',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="pt-24 sm:pt-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium line-clamp-1">{post.title}</span>
          </nav>
        </div>

        <article className="py-10">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                {post.category}
              </span>
              <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {post.title}
              </h1>
              <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readingTime}
                </span>
                <span>· {post.author}</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-8">
            <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-luxe">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </Reveal>

          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-10">
            <Reveal>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                {post.content.map((para, i) => (
                  <p key={i} className="text-foreground/80 leading-relaxed mb-5 text-base sm:text-lg">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 glass-card rounded-2xl p-6 sm:p-8 text-center">
                <h3 className="font-display text-xl font-bold">
                  Have questions about this treatment?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Book a consultation with {clinic.doctor} or message us on WhatsApp.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/#appointment"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-luxe"
                  >
                    <CalendarCheck className="h-4 w-4" />
                    Book Appointment
                  </Link>
                  <a
                    href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(clinic.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold"
                  >
                    <MessageCircle className="h-4 w-4 text-[#25D366]" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </article>

        {/* Related */}
        <section className="py-16 bg-mist/40 dark:bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-center">
              More <span className="text-gradient-primary">Articles</span>
            </h2>
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={0.05 * i}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col glass-card rounded-2xl overflow-hidden h-full hover:shadow-luxe transition-shadow"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-xs font-semibold text-primary">{p.category}</span>
                      <h3 className="mt-2 text-base font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {p.title}
                      </h3>
                      <span className="mt-3 text-xs text-muted-foreground">{p.readingTime}</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all articles
          </Link>
        </div>
      </main>
    </>
  );
}
