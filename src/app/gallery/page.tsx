import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.gallery.eyebrow}
      title={pageContent.gallery.title}
      description={pageContent.gallery.description}
      sourcePage="/gallery"
      image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
      bullets={[
        'Organize by service so the content sells instead of overwhelming.',
        'Use before-and-after visuals as primary trust assets.',
        'Make this easy to update as more jobs are completed.',
      ]}
    />
  );
}
