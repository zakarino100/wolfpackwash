import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.residential.eyebrow}
      title={pageContent.residential.title}
      description={pageContent.residential.description}
      sourcePage="/residential"
      image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80"
      bullets={[
        'Sell convenience, speed, and a visibly better-looking property.',
        'Tie house washing, windows, gutters, and concrete into one ecosystem.',
        'Use this page as a residential service hub with strong conversion paths.',
      ]}
    />
  );
}
