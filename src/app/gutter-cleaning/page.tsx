import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.gutterCleaning;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.gutterCleaning.eyebrow}
      title={pageContent.gutterCleaning.title}
      description={pageContent.gutterCleaning.description}
      sourcePage="/gutter-cleaning"
      bullets={[
        'Lead with overflow prevention, water management, and protecting the home from avoidable damage.',
        'Make bundling with house washing or recurring care feel like the common-sense move.',
        'Keep the trust level high and the quote path simple so the visitor acts before the next storm cycle.',
      ]}
      steps={[
        {
          title: 'We inspect the obvious trouble spots',
          body: 'Overflow points, debris buildup, and water-routing issues should be framed clearly instead of overcomplicated.',
          image: '/generated/wpw-gutter-cleaning-proof.jpg',
        },
        {
          title: 'We clear and flush the system',
          body: 'The service should feel thorough, not rushed, with a clear explanation of what is being removed and why it matters.',
          image: '/generated/wpw-gutter-cleaning-proof.jpg',
        },
        {
          title: 'You stay ahead of the next problem',
          body: 'Position the result around prevention, cleaner rooflines, and fewer future headaches from backed-up gutters.',
          image: '/generated/wpw-hero-home-clean-premium.jpg',
        },
      ]}
    />
  );
}
