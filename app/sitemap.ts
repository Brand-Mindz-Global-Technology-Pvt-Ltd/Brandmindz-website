import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage
    {
      url: 'https://www.brandmindz.com/',
      lastModified: new Date('2026-07-21'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // About
    {
      url: 'https://www.brandmindz.com/about',
      lastModified: new Date('2026-07-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Services
    {
      url: 'https://www.brandmindz.com/services/branding',
      lastModified: new Date('2026-07-21'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.brandmindz.com/services/designing',
      lastModified: new Date('2026-07-21'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.brandmindz.com/services/development',
      lastModified: new Date('2026-07-21'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.brandmindz.com/services/digital-marketing',
      lastModified: new Date('2026-07-21'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.brandmindz.com/services/ecommerce',
      lastModified: new Date('2026-07-21'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Industries
    {
      url: 'https://www.brandmindz.com/industries',
      lastModified: new Date('2026-07-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Case Studies
    {
      url: 'https://www.brandmindz.com/case-studies',
      lastModified: new Date('2026-07-21'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Sustainability
    {
      url: 'https://www.brandmindz.com/sustainability',
      lastModified: new Date('2026-07-21'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Resources
    {
      url: 'https://www.brandmindz.com/resources',
      lastModified: new Date('2026-07-21'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Contact
    {
      url: 'https://www.brandmindz.com/contact',
      lastModified: new Date('2026-07-21'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}
