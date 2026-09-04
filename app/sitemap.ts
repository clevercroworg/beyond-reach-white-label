import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.beyondreach.agency';
  
  const routes = [
    '',
    '/white-label-seo-agency-india',
    '/white-label-ppc-agency-india',
    '/white-label-google-ads-management',
    '/white-label-meta-ads-agency',
    '/white-label-web-development',
    '/white-label-landing-page-development',
    '/how-it-works',
    '/case-studies',
    '/about',
    '/resources',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
