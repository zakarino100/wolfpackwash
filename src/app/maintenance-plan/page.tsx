import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.maintenancePlan.eyebrow}
      title={pageContent.maintenancePlan.title}
      description={pageContent.maintenancePlan.description}
      sourcePage="/maintenance-plan"
      bullets={[
        'Make the middle tier feel like the clear smart buy.',
        'Sell the recurring plan as convenience and long-term property care.',
        'Keep the package framing easy to understand on mobile.',
      ]}
    />
  );
}
