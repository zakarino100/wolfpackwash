import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.fenceDeck;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.fenceDeck.eyebrow}
      title={pageContent.fenceDeck.title}
      description={pageContent.fenceDeck.description}
      sourcePage="/fence-deck-cleaning"
      image="/hero-images/fence-deck-cleaning.png"
      bullets={[
        'Fences and decks are the most weather-exposed surfaces on the property - mold, mildew, algae, and UV graying happen fast, especially in the Triangle\'s humid climate.',
        'Cleaning both in a single visit is more efficient than separate appointments - we sequence the fence first, then the deck, for a thorough finish with no rework.',
        'A professional pressure wash restores the appearance of wood, vinyl, and composite surfaces and extends the life of both structures - often delaying costly replacement by years.',
        'We serve Raleigh, Cary, Apex, Holly Springs, and the surrounding Wake County area.',
      ]}
      steps={[
        {
          title: 'Get a fast quote for both surfaces',
          body: 'Tell us your fence length, fence material, deck size, and deck material. We\'ll respond the same day with pricing and scheduling for a combined visit.',
          image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80',
        },
        {
          title: 'We clean the fence and deck in the right order',
          body: 'Our crew tackles the fence first, then moves to the deck - using the correct pressure and technique for each material type to get a clean result without surface damage.',
          image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
        },
        {
          title: 'Your entire outdoor space looks like it belongs together',
          body: 'Clean fence, clean deck - the whole backyard feels restored and usable again. No more avoiding the space because it looks rough or feels slippery.',
          image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&q=80',
        },
      ]}
      gallery={[
        { src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80', alt: 'Deck cleaning - restored outdoor living space in Raleigh NC' },
        { src: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80', alt: 'Fence washing - removing mold and algae from wood fence' },
        { src: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&q=80', alt: 'Clean wood deck after professional pressure washing - Triangle area' },
        { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', alt: 'Fence and deck cleaning results - Wake County NC' },
      ]}
      faqs={[
        {
          q: 'Why should I clean my fence and deck together instead of separately?',
          a: 'Cleaning both surfaces in one visit is more efficient and cost-effective than scheduling separate appointments. We sequence the work properly - fence first, then deck - so there\'s no rework and the crew doesn\'t have to return for a second setup.',
        },
        {
          q: 'Can you clean both wood and vinyl fences?',
          a: 'Yes - we adjust our pressure and technique based on the material. Wood fences can handle more pressure than vinyl, which requires a lower setting to avoid warping or surface damage. We use the right approach for each fence type.',
        },
        {
          q: 'Is it safe to pressure wash a composite or Trex deck?',
          a: 'Yes, with the correct settings. Composite decking requires lower pressure than wood to prevent surface etching or damage. Our crew is experienced with composite, Trex, and wood decking and adjusts technique accordingly.',
        },
        {
          q: 'Should I stain or seal my fence and deck after cleaning?',
          a: 'Cleaning is always the required first step before any staining or sealing. We recommend waiting 24-48 hours after the wash for the wood to dry fully before applying any stain or sealant. We\'re happy to flag whether your surfaces look ready for treatment after the job.',
        },
      ]}
    />
  );
}
