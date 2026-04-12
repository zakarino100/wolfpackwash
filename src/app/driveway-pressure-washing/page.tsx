import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.driveway.eyebrow}
      title={pageContent.driveway.title}
      description={pageContent.driveway.description}
      sourcePage="/driveway-pressure-washing"
      image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
      bullets={[
        'Treat driveway as a fast visual win.',
        'Support house wash bundle framing naturally.',
        'Keep the page sharp, visual, and easy to quote.',
      ]}
    />
  );
}
