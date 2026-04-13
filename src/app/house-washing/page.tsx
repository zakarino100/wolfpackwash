import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.houseWashing;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.houseWashing.eyebrow}
      title={pageContent.houseWashing.title}
      description={pageContent.houseWashing.description}
      sourcePage="/house-washing"
      bullets={[
        'Safe soft washing helps remove grime, algae, and buildup without treating the siding like concrete.',
        'This page should support both SEO traffic and people ready to buy after seeing an ad or referral.',
        'Lead with the visual result, trust cues, and an easy quote path before the visitor gets distracted.',
      ]}
      steps={[
        {
          title: 'Send photos or request a fast quote',
          body: 'Homeowners should be able to start from their phone in under a minute, without jumping through weird hoops.',
          image: '/generated/wpw-housewash-before-after.jpg',
        },
        {
          title: 'We recommend the right wash for the surface',
          body: 'Set expectations clearly, explain the process simply, and make the homeowner feel confident the house is being treated the right way.',
          image: '/generated/wpw-hero-home-clean-premium.jpg',
        },
        {
          title: 'The home looks cleaner fast',
          body: 'The finished result should feel like a visible curb-appeal upgrade, not just another contractor visit that blurred together.',
          image: '/generated/wpw-housewash-before-after.jpg',
        },
      ]}
    />
  );
}
