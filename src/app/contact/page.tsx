import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.contact;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.contact.eyebrow}
      title={pageContent.contact.title}
      description={pageContent.contact.description}
      sourcePage="/contact"
      image="/hero-images/contact.png"
      bullets={[
        'Fill out the quick form below and we\'ll get back to you the same day with pricing and availability - no waiting, no runaround.',
        'Prefer to talk it through? Call us directly and we can scope the job, answer questions, and lock in a date on the spot.',
        'We serve Raleigh, Cary, Apex, Holly Springs, Morrisville, Fuquay-Varina, Garner, and the broader Triangle area.',
      ]}
      steps={[
        {
          title: 'Tell us what you need',
          body: 'Fill out the quick form with your service, address, and any details about the job. Takes less than two minutes.',
          image: '/step-images/choose-service.png',
        },
        {
          title: 'We follow up fast',
          body: 'Most requests get a same-day response with clear pricing and available scheduling - no waiting, no callbacks that go nowhere.',
          image: '/step-images/get-quote.png',
        },
        {
          title: 'Lock in the date',
          body: 'Approve the quote, pick a date, and we handle the rest. Show up day-of to a crew that\'s on time and ready to work.',
          image: '/step-images/crew-arrives.png',
        },
      ]}
    />
  );
}
