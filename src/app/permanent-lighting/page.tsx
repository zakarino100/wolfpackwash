import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.permanentLighting.eyebrow}
      title={pageContent.permanentLighting.title}
      description={pageContent.permanentLighting.description}
      sourcePage="/permanent-lighting"
      image="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=1600&q=80"
      bullets={[
        'Position this as a premium home upgrade, not a gimmick or an off-season filler service.',
        'Sell convenience, aesthetics, and year-round flexibility in a way that feels high-end and practical.',
        'Use visuals and quote flow to qualify premium homeowners without making the page feel intimidating.',
      ]}
      steps={[
        {
          title: 'Talk through the look and goals',
          body: 'This page should help the homeowner understand the upgrade clearly, not feel like they are buying a complicated tech product.',
          image: '/generated/wpw-permanent-lighting-premium.jpg',
        },
        {
          title: 'Install a cleaner year-round lighting solution',
          body: 'The message should emphasize convenience, presentation, and avoiding the repeated hassle of seasonal setups.',
          image: '/generated/wpw-permanent-lighting-premium.jpg',
        },
        {
          title: 'Enjoy the exterior upgrade long-term',
          body: 'The payoff is a home that feels more custom, more flexible, and more dialed in throughout the year.',
          image: '/generated/wpw-permanent-lighting-premium.jpg',
        },
      ]}
    />
  );
}
