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
      }
    ],
    sitemap: 'https://carshiftos.co.ke/sitemap.xml',
  }
}
