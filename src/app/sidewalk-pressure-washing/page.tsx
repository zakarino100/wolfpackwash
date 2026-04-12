import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.sidewalk.eyebrow}
      title={pageContent.sidewalk.title}
      description={pageContent.sidewalk.description}
      sourcePage="/sidewalk-pressure-washing"
      image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
      bullets={[
        'Sell cleaner walkways as a subtle but immediate upgrade.',
        'Keep this page easy to pair with driveway and house wash service.',
        'Use mobile-friendly proof once gallery assets are loaded.',
      ]}
    />
  );
}
