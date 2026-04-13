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
      image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
      bullets={[
        'Guide visitors into the exact service they need without making them read a novel first.',
        'Create strong internal links for SEO and user flow while keeping the page easy to scan on mobile.',
        'Make the service categories and bundle opportunities visually obvious so the next click feels easy.',
      ]}
      steps={[
        {
          title: 'Pick the service that fits the property',
          body: 'The page should help the homeowner self-sort quickly instead of forcing them to guess where to go next.',
        },
        {
          title: 'See the value clearly',
          body: 'Each service should explain the transformation, the trust angle, and when it makes sense to bundle.',
        },
        {
          title: 'Request the quote without friction',
          body: 'Every branch of the service hub should feed cleanly into the quote process so interest does not die on the page.',
        },
      ]}
    />
  );
}
