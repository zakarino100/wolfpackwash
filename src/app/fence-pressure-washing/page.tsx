import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.fence.eyebrow}
      title={pageContent.fence.title}
      description={pageContent.fence.description}
      sourcePage="/fence-pressure-washing"
      bullets={[
        'Sell restoration over replacement.',
        'Keep the value proposition visual and simple.',
        'Support fence cleaning as part of a broader exterior refresh.',
      ]}
    />
  );
}
