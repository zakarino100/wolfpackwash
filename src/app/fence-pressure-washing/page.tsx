import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.fence.eyebrow}
      title={pageContent.fence.title}
      description={pageContent.fence.description}
      sourcePage="/fence-pressure-washing"
      image="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1600&q=80"
      bullets={[
        'Sell restoration over replacement so the value proposition feels obvious.',
        'Keep the message visual, simple, and tied to the overall appearance of the property.',
        'Support fence cleaning as part of a broader exterior refresh without burying the standalone service.',
      ]}
      steps={[
        {
          title: 'Show us the fence condition',
          body: 'Help the homeowner quickly understand whether the fence looks restorable rather than making them feel like replacement is the only option.',
        },
        {
          title: 'Lift the buildup and weathered look',
          body: 'The page should emphasize visual improvement and a fresher appearance, not just generic cleaning language.',
        },
        {
          title: 'Bring the fence back into the overall curb-appeal picture',
          body: 'The result should feel like part of a cleaner, sharper home exterior, not an isolated maintenance chore.',
        },
      ]}
    />
  );
}
