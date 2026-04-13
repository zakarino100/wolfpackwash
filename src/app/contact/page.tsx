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
      image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
      bullets={[
        'This should be one of the strongest pure conversion pages on the site, not a generic contact-afterthought page.',
        'Keep the quote form fast, mobile-friendly, and clear enough that the homeowner knows what happens next.',
        'Support both call-now visitors and form-first visitors without making either path feel second-class.',
      ]}
      steps={[
        {
          title: 'Tell us what you need',
          body: 'Keep the form focused on the information that helps move the quote forward, not a bunch of unnecessary friction.',
        },
        {
          title: 'We follow up fast',
          body: 'Set the expectation for quick communication and a clear next step so the lead feels handled, not dumped into a void.',
        },
        {
          title: 'Lock in the job',
          body: 'Make the finish line obvious: quote approved, date set, and the property on the way to looking better.',
        },
      ]}
    />
  );
}
