import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.deck.eyebrow}
      title={pageContent.deck.title}
      description={pageContent.deck.description}
      sourcePage="/deck-pressure-washing"
      bullets={[
        'Sell deck cleaning as getting the outdoor living space back.',
        'Position it as timely and seasonal.',
        'Use before-and-after proof once assets are loaded.',
      ]}
    />
  );
}
