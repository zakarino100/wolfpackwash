import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.deck;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.deck.eyebrow}
      title={pageContent.deck.title}
      description={pageContent.deck.description}
      sourcePage="/deck-pressure-washing"
      image="/hero-images/deck-pressure-washing.png"
      bullets={[
        'Decks in the Triangle accumulate mold, mildew, algae, and weathered grime quickly - especially in shaded or humid areas.',
        'A proper pressure wash removes the buildup without splintering or damaging the wood, restoring the surface and extending the life of the deck.',
        'Most homeowners clean their deck once a year in spring to get the outdoor space ready before summer use.',
        'We service wood, composite, and Trex decks across Raleigh, Cary, Apex, Holly Springs, and Wake County.',
      ]}
      steps={[
        {
          title: 'Get a fast, free quote',
          body: 'Tell us the approximate size and material of your deck. We\'ll respond the same day with pricing and available scheduling.',
          image: '/step-images/deck.png',
        },
        {
          title: 'We wash and restore the surface',
          body: 'Our crew uses the right pressure and technique for your deck type - removing mold, mildew, algae, and staining without damaging the wood or composite surface.',
          image: '/step-images/deck.png',
        },
        {
          title: 'Your outdoor space is ready to use again',
          body: 'The deck looks cleaner, feels safer, and is ready for spring and summer - no more avoiding the space because it looks rough.',
          image: '/step-images/clean-result.png',
        },
      ]}
      gallery={[
        { src: '/step-images/deck.png', alt: 'Deck pressure washing - restoring outdoor living space in Raleigh NC' },
        { src: '/step-images/deck.png', alt: 'Clean wood deck after professional pressure washing' },
        { src: '/step-images/get-quote.png', alt: 'Outdoor deck cleaning results - Triangle area' },
        { src: '/step-images/clean-result.png', alt: 'Before and after deck washing - Wake County NC' },
      ]}
      faqs={[
        {
          q: 'How often should I get my deck pressure washed?',
          a: 'Most Triangle-area homeowners clean their deck once a year - typically in spring before outdoor season. Decks in shaded or humid areas may need cleaning twice a year due to faster mold and algae growth.',
        },
        {
          q: 'Can you pressure wash a composite or Trex deck?',
          a: 'Yes - we adjust our pressure settings and technique for composite decking. Composite requires lower pressure than wood to avoid surface damage while still removing mold, mildew, and buildup effectively.',
        },
        {
          q: 'Will pressure washing damage my deck boards?',
          a: 'Not when done correctly. We use the right pressure and wide fan tips to clean thoroughly without splintering wood or damaging composite. Incorrect DIY pressure washing can cause damage - professional technique makes the difference.',
        },
        {
          q: 'Should I stain or seal my deck after pressure washing?',
          a: 'If your deck needs staining or sealing, cleaning is the essential first step. We can let you know after the wash whether the surface looks ready for treatment. We recommend waiting 24-48 hours after washing before applying any stain or sealant.',
        },
      ]}
    />
  );
}
