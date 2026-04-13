import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.services;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.services.eyebrow}
      title={pageContent.services.title}
      description={pageContent.services.description}
      sourcePage="/services"
      image="/hero-images/house-washing.png"
      bullets={[
        'House washing and soft washing - the safe, effective way to remove pollen, algae, and grime from any siding type.',
        'Window cleaning, gutter cleaning, and concrete pressure washing - bundle multiple services for the best value and complete results in one visit.',
        'Deck, driveway, fence, and sidewalk pressure washing - every surface on the exterior, handled by one reliable team.',
        'Holiday light installation and permanent RGB lighting - professional installs that make your home stand out year-round.',
      ]}
      steps={[
        {
          title: 'Pick the service your home needs',
          body: 'Browse the full list of exterior cleaning and lighting services, or tell us what you\'re dealing with and we\'ll recommend the right approach.',
          image: '/step-images/choose-service.png',
        },
        {
          title: 'Get a same-day quote',
          body: 'Fill out the quick form or call us directly. We respond the same day with clear pricing - no estimates that change at the door.',
          image: '/step-images/get-quote.png',
        },
        {
          title: 'We show up, do the work, and do it right',
          body: 'On schedule, thorough, and with results you can see immediately. That\'s the Wolf Pack Wash standard on every job.',
          image: '/step-images/clean-result.png',
        },
      ]}
      faqs={[
        {
          q: 'What areas does Wolf Pack Wash serve?',
          a: 'We serve Raleigh, Cary, Apex, Holly Springs, Morrisville, Fuquay-Varina, Garner, and the broader Wake County and Triangle area in North Carolina.',
        },
        {
          q: 'Can I bundle multiple services in one visit?',
          a: 'Yes - bundling is one of the best ways to save time and money. Popular combinations include house washing + window cleaning + gutter cleaning, or driveway + concrete + sidewalk washing. We\'ll sequence the work efficiently in one visit.',
        },
        {
          q: 'How quickly do you respond to quote requests?',
          a: 'Most quote requests receive a same-day response. We aim to get back to you with clear pricing and availability within hours of receiving your form.',
        },
        {
          q: 'Do you offer recurring exterior care plans?',
          a: 'Yes - our Exterior Care Plan puts your home on a recurring cleaning schedule with priority scheduling and member pricing. It\'s the best option for homeowners who want to stay ahead of buildup without chasing appointments every season.',
        },
      ]}
    />
  );
}
