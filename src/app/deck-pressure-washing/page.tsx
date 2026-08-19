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
      image="/hero-images/deck-pressure-washing.webp"
      bullets={[
        'Decks in the Triangle accumulate mold, mildew, algae, and weathered grime quickly - especially in shaded or humid areas.',
        'A proper pressure wash removes the buildup without splintering or damaging the wood, restoring the surface and extending the life of the deck.',
        'Most homeowners clean their deck once a year in spring to get the outdoor space ready before summer use.',
        'We service wood, composite, and Trex decks across Raleigh, Cary, Apex, Holly Springs, and Wake County.',
      ]}
      steps={[
        {
          title: 'Spot the grime before deck season starts',
          body: 'When pollen, algae, and weathering take over, the whole outdoor space feels neglected. We help you catch it before spring parties and summer cookouts roll around.',
          image: '/gallery-images/real-porch-deck.jpg',
        },
        {
          title: 'We clean it with the right pressure for the material',
          body: 'Wood, composite, and Trex all need a different touch. We wash aggressively enough to lift the buildup, but carefully enough to avoid splintering or surface damage.',
          image: '/step-images/deck.webp',
        },
        {
          title: 'Your outdoor space is ready to use again',
          body: 'The finished result is a cleaner, safer surface that makes the backyard feel inviting again instead of like another project you have been putting off.',
          image: '/gallery-images/real-house-wash.webp',
        },
      ]}
      gallery={[
        { src: '/gallery-images/real-porch-deck.jpg', alt: 'Deck and front porch cleaning candidate on a Triangle-area home' },
        { src: '/step-images/deck.webp', alt: 'Deck pressure washing - restoring outdoor living space in Raleigh NC' },
        { src: '/gallery-images/real-house-wash.webp', alt: 'Freshened exterior and outdoor living space after cleaning in Wake County' },
        { src: '/gallery-images/window-cleaning.webp', alt: 'Bright exterior details after a full exterior refresh on a Cary NC home' },
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
