import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.sidewalk.eyebrow}
      title={pageContent.sidewalk.title}
      description={pageContent.sidewalk.description}
      sourcePage="/sidewalk-pressure-washing"
      bullets={[
        'Sell cleaner walkways as a subtle but immediate upgrade.',
        'Keep this page easy to pair with driveway and house wash service.',
        'Use mobile-friendly proof once gallery assets are loaded.',
      ]}
    />
  );
}
