import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.softWashing.eyebrow}
      title={pageContent.softWashing.title}
      description={pageContent.softWashing.description}
      sourcePage="/soft-washing"
      image="https://images.unsplash.com/photo-1505409628601-edc9af17fda6?w=1600&q=80"
      bullets={[
        'Explain the process in plain homeowner language.',
        'Show why soft washing is safer than blasting siding with pressure.',
        'Use this page to build trust and reduce price resistance.',
      ]}
    />
  );
}
