import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.gutterCleaning.eyebrow}
      title={pageContent.gutterCleaning.title}
      description={pageContent.gutterCleaning.description}
      sourcePage="/gutter-cleaning"
      bullets={[
        'Lead with protection and overflow prevention.',
        'Make it easy to bundle with house wash or recurring care.',
        'Keep the page trust-heavy and simple to act on.',
      ]}
    />
  );
}
