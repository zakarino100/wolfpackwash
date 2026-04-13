import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.driveway.eyebrow}
      title={pageContent.driveway.title}
      description={pageContent.driveway.description}
      sourcePage="/driveway-pressure-washing"
      image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
      bullets={[
        'Treat driveway cleaning as one of the fastest visual wins on the property.',
        'Support house wash bundle framing naturally so the homeowner sees the whole curb-appeal picture.',
        'Keep the page sharp, visual, and easy to quote from a phone.',
      ]}
      steps={[
        {
          title: 'Send the driveway details',
          body: 'The intake should feel fast and simple, especially for homeowners who mainly want to know if the result is worth it.',
        },
        {
          title: 'We clean off the visible buildup',
          body: 'Frame the service around removing dark buildup, staining, and that neglected look people notice right away.',
        },
        {
          title: 'The front of the home looks sharper',
          body: 'This page should sell the emotional payoff of pulling into a cleaner-looking property every day.',
        },
      ]}
    />
  );
}
