import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.commercial.eyebrow}
      title={pageContent.commercial.title}
      description={pageContent.commercial.description}
      sourcePage="/commercial"
      bullets={[
        'Keep this page available for credibility and search coverage.',
        'Position Wolf Pack Wash as reliable and presentation-focused.',
        'Make quote requests simple for storefront and property managers.',
      ]}
    />
  );
}
