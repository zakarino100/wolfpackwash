import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.windowCleaning;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.windowCleaning.eyebrow}
      title={pageContent.windowCleaning.title}
      description={pageContent.windowCleaning.description}
      sourcePage="/window-cleaning"
      bullets={[
        'Sell the brighter feel of the house, the cleaner view, and the streak-free finish people notice immediately.',
        'Position route scheduling and bundle pricing as a smart value move, not a pressure tactic.',
        'Support add-on logic without making the first quote request feel like work.',
      ]}
      steps={[
        {
          title: 'Request the quote from your phone',
          body: 'The process should feel fast and low-friction, whether the homeowner wants windows only or a larger exterior package.',
          image: '/generated/wpw-window-cleaning-premium.jpg',
        },
        {
          title: 'We scope the glass and access points',
          body: 'Set the expectation that the work is methodical, careful, and built around a clean finish rather than a rushed rinse-down.',
          image: '/generated/wpw-window-cleaning-premium.jpg',
        },
        {
          title: 'Enjoy cleaner glass and better light',
          body: 'Frame the result around how the house feels after the job, not just the fact that a task got checked off.',
          image: '/generated/wpw-hero-home-clean-premium.jpg',
        },
      ]}
    />
  );
}
