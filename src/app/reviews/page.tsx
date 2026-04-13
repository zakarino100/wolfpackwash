import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.reviews;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.reviews.eyebrow}
      title={pageContent.reviews.title}
      description={pageContent.reviews.description}
      sourcePage="/reviews"
      image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80"
      bullets={[
        'Homeowners across Raleigh, Cary, Apex, and Holly Springs trust Wolf Pack Wash for consistent results and clear communication.',
        'Our most common feedback: the crew shows up on time, the work is thorough, and the before-and-after difference is immediately visible.',
        'Many of our customers are on recurring exterior care plans — they book once and let us handle the rest every season.',
        'Same-day quote response, transparent pricing, and no-surprise billing are the things customers mention most.',
      ]}
    />
  );
}
