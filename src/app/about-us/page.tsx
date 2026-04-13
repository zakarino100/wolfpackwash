import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.about;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.about.eyebrow}
      title={pageContent.about.title}
      description={pageContent.about.description}
      sourcePage="/about-us"
      image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
      bullets={[
        'Lead with trust, local responsiveness, and a homeowner-friendly process that feels reliable.',
        'Keep the tone direct and believable so the page builds confidence without sounding like a cheesy brand monologue.',
        'Support both paid and organic traffic without bloating the page or burying the quote path.',
      ]}
      steps={[
        {
          title: 'Reach out from your phone',
          body: 'The first impression should be simple, fast, and low-friction, especially for people comparing multiple companies.',
        },
        {
          title: 'Get clear communication and honest recommendations',
          body: 'The brand should feel responsive and practical, not vague, flaky, or weirdly salesy.',
        },
        {
          title: 'See the difference in the finished result',
          body: 'This page should reinforce that Wolf Pack Wash is about visible outcomes, not just checking a box on a to-do list.',
        },
      ]}
    />
  );
}
