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
      image="https://images.unsplash.com/photo-1545181936-ac4e9e3a2b6c?w=1600&q=80"
      bullets={[
        'Professional holiday lighting installs that look polished and designed - not like they were thrown together in an afternoon.',
        'We handle the entire process: design consultation, installation, maintenance during the season, and full removal when it\'s over.',
        'No more climbing ladders in the cold, dealing with tangled strands, or taking down messy DIY setups after the holidays.',
        'Seasonal capacity fills quickly - booking early is the best way to guarantee your install date for Thanksgiving through New Year\'s.',
      ]}
      steps={[
        {
          title: 'Request your holiday lighting quote',
          body: 'Book early to lock in your install date. We\'ll discuss your home, the look you want, and the full scope of the installation.',
          image: 'https://images.unsplash.com/photo-1545181936-ac4e9e3a2b6c?w=800&q=80',
        },
        {
          title: 'We design and install everything professionally',
          body: 'Our crew installs your holiday lighting cleanly and safely - rooflines, trees, bushes, and any other features you want highlighted.',
          image: 'https://images.unsplash.com/photo-1544979259-f3cd394b7a48?w=800&q=80',
        },
        {
          title: 'Enjoy the season without the hassle',
          body: 'Your home looks great all season long. When the holidays are over, we come back and remove everything cleanly - no leftover hardware, no storage headaches.',
          image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=800&q=80',
        },
      ]}
      gallery={[
        { src: 'https://images.unsplash.com/photo-1545181936-ac4e9e3a2b6c?w=800&q=80', alt: 'Professional holiday light installation on home in Raleigh NC' },
        { src: 'https://images.unsplash.com/photo-1544979259-f3cd394b7a48?w=800&q=80', alt: 'Christmas lighting installation - Triangle area home' },
        { src: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=800&q=80', alt: 'Holiday lighting on roofline - Cary NC' },
        { src: 'https://images.unsplash.com/photo-1513031300226-c8fb12de9ade?w=800&q=80', alt: 'Professional holiday lighting install - Wake County NC' },
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
