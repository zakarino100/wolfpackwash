import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.gutterCleaning.eyebrow}
      title={pageContent.gutterCleaning.title}
      description={pageContent.gutterCleaning.description}
      sourcePage="/gutter-cleaning"
      image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
      bullets={[
        'Prevents water overflow, fascia damage, and foundation erosion.',
        'Pairs naturally with house washing and the exterior care plan.',
        'Fast, low-mess service that protects your home year-round.',
      ]}
    />
  );
}
