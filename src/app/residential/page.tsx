import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.residential;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.residential.eyebrow}
      title={pageContent.residential.title}
      description={pageContent.residential.description}
      sourcePage="/residential"
      image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80"
      bullets={[
        'Sell convenience, speed, and the visual payoff of a better-looking property right away.',
        'Tie house washing, windows, gutters, and concrete into one clear residential care system.',
        'Use this page like a homeowner service hub with strong internal links and strong conversion paths.',
      ]}
      steps={[
        {
          title: 'Choose what needs attention',
          body: 'Help the homeowner quickly understand whether they need house washing, windows, gutters, concrete cleaning, or a bundle.',
        },
        {
          title: 'Get a quote without the back-and-forth headache',
          body: 'This should feel like a cleaner, easier booking experience than the average contractor process.',
        },
        {
          title: 'Enjoy the curb-appeal win',
          body: 'Frame the result around cleaner presentation, less buildup, and the feeling of the property being taken care of.',
        },
      ]}
    />
  );
}
