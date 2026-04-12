import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.gallery.eyebrow}
      title={pageContent.gallery.title}
      description={pageContent.gallery.description}
      sourcePage="/gallery"
      bullets={[
        'Organize by service so the content sells instead of overwhelming.',
        'Use before-and-after visuals as primary trust assets.',
        'Make this easy to update as more jobs are completed.',
      ]}
    />
  );
}
