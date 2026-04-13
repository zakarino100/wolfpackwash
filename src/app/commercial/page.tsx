import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.commercial;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.commercial.eyebrow}
      title={pageContent.commercial.title}
      description={pageContent.commercial.description}
      sourcePage="/commercial"
      image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
      bullets={[
        'Keep this page available for credibility, local search coverage, and business-owner trust.',
        'Position Wolf Pack Wash as reliable, presentation-focused, and easy to work with for repeat exterior maintenance.',
        'Make quote requests simple for storefront owners, managers, and property operators.',
      ]}
      steps={[
        {
          title: 'Tell us about the property',
          body: 'The intake should feel simple whether the visitor manages a storefront, office, or small commercial site.',
        },
        {
          title: 'We scope the work and scheduling needs',
          body: 'Set expectations around reliability, presentation, and minimizing friction for the business or property team.',
        },
        {
          title: 'Keep the exterior looking professional',
          body: 'Frame the result around appearance, trust, and the impact that clean exteriors have on customers and tenants.',
        },
      ]}
    />
  );
}
