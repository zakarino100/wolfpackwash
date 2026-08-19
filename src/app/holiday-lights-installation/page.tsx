import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.holidayLights;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.holidayLights.eyebrow}
      title={pageContent.holidayLights.title}
      description={pageContent.holidayLights.description}
      sourcePage="/holiday-lights-installation"
      image="/hero-images/holiday-lights.webp"
      bullets={[
        'Professional holiday lighting installs that look polished and designed - not like they were thrown together in an afternoon.',
        'We handle the entire process: design consultation, installation, maintenance during the season, and full removal when it\'s over.',
        'No more climbing ladders in the cold, dealing with tangled strands, or taking down messy DIY setups after the holidays.',
        'Seasonal capacity fills quickly - booking early is the best way to guarantee your install date for Thanksgiving through New Year\'s.',
      ]}
      steps={[
        {
          title: 'Choose the look before the season gets crowded',
          body: 'We talk through the roofline, trees, garland, and the style you want so the install feels intentional, not like a last-minute string of lights tossed up on the house.',
          image: '/step-images/holiday-lights.webp',
        },
        {
          title: 'We design and install everything professionally',
          body: 'Our crew installs your holiday lighting cleanly and safely - rooflines, trees, bushes, and any other features you want highlighted.',
          image: '/step-images/crew-arrives.webp',
        },
        {
          title: 'Enjoy the season without the hassle',
          body: 'Your home looks great all season long. When the holidays are over, we come back and remove everything cleanly - no leftover hardware, no storage headaches.',
          image: '/step-images/perm-lighting.webp',
        },
      ]}
      gallery={[
        { src: '/step-images/holiday-lights.webp', alt: 'Professional holiday light installation on home in Raleigh NC' },
        { src: '/step-images/crew-arrives.webp', alt: 'Holiday lighting crew on site for a Triangle-area install' },
        { src: '/step-images/perm-lighting.webp', alt: 'Holiday lighting on roofline - Cary NC' },
        { src: '/hero-images/holiday-lights.webp', alt: 'Finished holiday lighting display on a Wake County home exterior' },
      ]}
      faqs={[
        {
          q: 'When should I book holiday light installation in Raleigh?',
          a: 'We recommend booking by September or October to guarantee your preferred install date. November slots fill quickly - especially for Thanksgiving weekend installs. The earlier you book, the more date flexibility you have.',
        },
        {
          q: 'Do you provide the lights or do I need to supply them?',
          a: 'We provide professional-grade commercial lighting that looks far better than standard retail strands. Our lights are brighter, longer-lasting, and designed to handle outdoor conditions throughout the season.',
        },
        {
          q: 'Do you take down the lights at the end of the season?',
          a: 'Yes - takedown and removal is included. We come back after the holidays, remove everything cleanly, and store the hardware. You don\'t have to deal with anything once the season ends.',
        },
        {
          q: 'What areas of my home can you light?',
          a: 'We can install lights on rooflines, gutters, dormers, columns, trees, shrubs, walkways, and any other exterior features. We\'ll work with you on the design to get the look you want.',
        },
      ]}
    />
  );
}
