import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.services.eyebrow}
      title={pageContent.services.title}
      description={pageContent.services.description}
      sourcePage="/services"
      image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
      bullets={[
        'Guide users into the exact service they need without friction.',
        'Create strong internal links for SEO and user flow.',
        'Keep service categories visually obvious on mobile first.',
      ]}
    />
  );
}
