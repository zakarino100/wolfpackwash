import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.maintenancePlan.eyebrow}
      title={pageContent.maintenancePlan.title}
      description={pageContent.maintenancePlan.description}
      sourcePage="/maintenance-plan"
      image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
      bullets={[
        'Make the middle tier feel like the clear smart buy without needing pushy sales language.',
        'Sell the recurring plan as convenience, property protection, and easier long-term curb appeal.',
        'Keep the package framing easy to understand on mobile and simple enough to quote around.',
      ]}
      steps={[
        {
          title: 'Choose the level of upkeep that fits the home',
          body: 'The offer should feel practical and easy to compare, with clear value separation between the tiers.',
        },
        {
          title: 'Stay ahead of buildup instead of reacting late',
          body: 'This page should sell the relief of not having to wait until the property already looks rough.',
        },
        {
          title: 'Keep the property looking sharper year-round',
          body: 'The recurring plan should feel like a smart homeowner habit, not a complicated subscription gimmick.',
        },
      ]}
    />
  );
}
