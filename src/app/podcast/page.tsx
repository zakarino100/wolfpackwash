import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { buildMetadata } from '@/lib/site/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Wolf Pack Wash Podcast | Exterior Cleaning Conversations and Homeowner Insights',
  description:
    'Explore Wolf Pack Wash podcast-style content, homeowner insights, and exterior cleaning conversations built to support trust and search visibility.',
  path: '/podcast',
  keywords: ['Wolf Pack Wash podcast', 'exterior cleaning podcast', 'homeowner tips'],
});

export default function Page() {
  return (
    <PageBuilder
      eyebrow="Wolf Pack Wash Podcast"
      title="Conversations, homeowner insights, and exterior-cleaning content worth coming back to."
      description="This page preserves the existing podcast slug while giving Wolf Pack Wash room to publish trust-building audio, video, or interview content later without losing current search equity."
      sourcePage="/podcast"
      bullets={[
        'Preserve the legacy podcast route so existing search value does not fall off during migration.',
        'Use this page as a trust-building content hub even before a full media library is added.',
        'Keep the message tied to homeowner education, local relevance, and exterior-cleaning expertise.',
      ]}
      steps={[
        {
          title: 'Publish useful conversations and homeowner guidance',
          body: 'This route can later support interviews, FAQ-style episodes, and educational content that strengthens trust around the brand.',
        },
        {
          title: 'Turn content into search and trust assets',
          body: 'The goal is not just to host media. It is to answer real questions in a format that people and search systems both understand.',
        },
        {
          title: 'Guide interested visitors deeper into the site',
          body: 'Podcast listeners and readers should have a clean next step into service pages, blog posts, or the quote flow when it makes sense.',
        },
      ]}
    />
  );
}
