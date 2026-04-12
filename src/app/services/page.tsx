import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.services.eyebrow}
      title={pageContent.services.title}
      description={pageContent.services.description}
      sourcePage="/services"
      bullets={[
        'Guide users into the exact service they need without friction.',
        'Create strong internal links for SEO and user flow.',
        'Keep service categories visually obvious on mobile first.',
      ]}
    />
  );
}
