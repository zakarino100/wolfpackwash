import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.reviews.eyebrow}
      title={pageContent.reviews.title}
      description={pageContent.reviews.description}
      sourcePage="/reviews"
      bullets={[
        'Stack strong trust, proof, and local validation.',
        'Keep the reading experience light and mobile-friendly.',
        'Move users naturally back into the quote flow.',
      ]}
    />
  );
}
