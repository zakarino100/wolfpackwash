import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.deck.eyebrow}
      title={pageContent.deck.title}
      description={pageContent.deck.description}
      sourcePage="/deck-pressure-washing"
      image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80"
      bullets={[
        'Sell deck cleaning as getting the outdoor living space back, not just cleaning boards.',
        'Position it as timely, seasonal, and tied to how people actually use the space.',
        'Use before-and-after proof and lifestyle framing once real assets are loaded.',
      ]}
      steps={[
        {
          title: 'Show us the deck condition',
          body: 'This should help homeowners quickly decide whether it is time to clean up the space before heavy outdoor use.',
        },
        {
          title: 'Remove the weathered, dirty look',
          body: 'The page should frame the service around making the space feel usable again, not just checking off maintenance.',
        },
        {
          title: 'Enjoy the outdoor space again',
          body: 'The payoff is emotional here. The deck looks better, feels cleaner, and is ready to use instead of being avoided.',
        },
      ]}
    />
  );
}
