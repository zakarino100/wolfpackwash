import { buildMetadata } from '@/lib/site/seo';

export const pageSeo = {
  home: buildMetadata({
    title: 'Wolf Pack Wash | House Washing, Window Cleaning, Gutter Cleaning, and Exterior Cleaning',
    description:
      'Wolf Pack Wash helps homeowners with house washing, window cleaning, gutter cleaning, concrete cleaning, and exterior lighting with fast quotes and strong local service.',
    path: '/',
    keywords: ['house washing Raleigh', 'gutter cleaning Raleigh', 'window cleaning Raleigh'],
  }),
  about: buildMetadata({
    title: 'About Wolf Pack Wash | Exterior Cleaning You Can Actually Count On',
    description:
      'Learn more about Wolf Pack Wash, the exterior cleaning company focused on fast quotes, clear communication, and visible results for homeowners.',
    path: '/about-us',
  }),
  services: buildMetadata({
    title: 'Exterior Cleaning Services | Wolf Pack Wash',
    description:
      'Explore house washing, window cleaning, gutter cleaning, concrete cleaning, lighting, and exterior care services from Wolf Pack Wash.',
    path: '/services',
  }),
  contact: buildMetadata({
    title: 'Get a Free Quote | Wolf Pack Wash',
    description:
      'Request a free quote from Wolf Pack Wash for house washing, windows, gutters, concrete cleaning, lighting, and exterior care services.',
    path: '/contact',
  }),
  houseWashing: buildMetadata({
    title: 'House Washing | Wolf Pack Wash',
    description:
      'Professional house washing from Wolf Pack Wash helps remove grime, algae, and buildup so your home looks clean, sharp, and well-maintained.',
    path: '/house-washing',
  }),
  windowCleaning: buildMetadata({
    title: 'Window Cleaning | Wolf Pack Wash',
    description:
      'Professional window cleaning from Wolf Pack Wash helps homeowners get cleaner glass, better light, and a sharper-looking home.',
    path: '/window-cleaning',
  }),
  gutterCleaning: buildMetadata({
    title: 'Gutter Cleaning | Wolf Pack Wash',
    description:
      'Gutter cleaning from Wolf Pack Wash helps protect your home from overflow, drainage issues, and preventable exterior damage.',
    path: '/gutter-cleaning',
  }),
  residential: buildMetadata({
    title: 'Residential Exterior Cleaning | Wolf Pack Wash',
    description:
      'Residential exterior cleaning from Wolf Pack Wash covers house washing, windows, gutters, concrete, and recurring care for homeowners.',
    path: '/residential',
  }),
  commercial: buildMetadata({
    title: 'Commercial Exterior Cleaning | Wolf Pack Wash',
    description:
      'Commercial exterior cleaning from Wolf Pack Wash helps storefronts and properties stay clean, sharp, and presentation-ready.',
    path: '/commercial',
  }),
  blog: buildMetadata({
    title: 'Wolf Pack Wash Blog | Exterior Cleaning Tips and Homeowner Guides',
    description:
      'Helpful exterior cleaning articles from Wolf Pack Wash covering house washing, gutter cleaning, window cleaning, and homeowner upkeep questions.',
    path: '/blog',
  }),
} as const;
