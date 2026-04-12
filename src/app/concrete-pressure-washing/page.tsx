import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.concrete.eyebrow}
      title={pageContent.concrete.title}
      description={pageContent.concrete.description}
      sourcePage="/concrete-pressure-washing"
      bullets={[
        'Focus on visual transformation and curb appeal.',
        'Use driveway and walkway results to create contrast and urgency.',
        'Make bundling obvious without cluttering the page.',
      ]}
    />
  );
}
