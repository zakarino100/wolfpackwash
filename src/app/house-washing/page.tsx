import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.houseWashing.eyebrow}
      title={pageContent.houseWashing.title}
      description={pageContent.houseWashing.description}
      sourcePage="/house-washing"
      bullets={[
        'This page should support both SEO and paid-media conversion.',
        'Use strong proof and clear package framing.',
        'Keep the quote path frictionless and obvious.',
      ]}
    />
  );
}
