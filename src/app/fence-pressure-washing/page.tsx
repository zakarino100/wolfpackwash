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
        'Sell restoration over replacement.',
        'Keep the value proposition visual and simple.',
        'Support fence cleaning as part of a broader exterior refresh.',
      ]}
    />
  );
}
