import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://elitecosmoclinic.in/sitemap.xml',
    host: 'https://elitecosmoclinic.in',
  };
}
