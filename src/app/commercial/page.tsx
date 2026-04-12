import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.commercial.eyebrow}
      title={pageContent.commercial.title}
      description={pageContent.commercial.description}
      sourcePage="/commercial"
      image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
      bullets={[
        'Keep this page available for credibility and search coverage.',
        'Position Wolf Pack Wash as reliable and presentation-focused.',
        'Make quote requests simple for storefront and property managers.',
      ]}
    />
  );
}
