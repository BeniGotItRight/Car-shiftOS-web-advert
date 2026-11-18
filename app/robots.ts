import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'DuckDuckBot', 'Baiduspider', 'YandexBot'],
        allow: '/',
      },
      {
        userAgent: 'Facebot',
        allow: '/',
      },
      {
        userAgent: 'Applebot',
        allow: '/',
      },
      {
        // Explicitly allowed (not just covered by the '*' wildcard above) so
        // AI answer engines can crawl and cite Insights content directly.
        userAgent: ['GPTBot', 'Google-Extended', 'PerplexityBot', 'ClaudeBot', 'anthropic-ai', 'CCBot'],
        allow: '/',
      }
    ],
    sitemap: 'https://carshiftos.co.ke/sitemap.xml',
  }
}
