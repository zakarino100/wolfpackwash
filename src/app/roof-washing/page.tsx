import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.roofWashing;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.roofWashing.eyebrow}
      title={pageContent.roofWashing.title}
      description={pageContent.roofWashing.description}
      sourcePage="/roof-washing"
      image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
      bullets={[
        'Those dark streaks on your roof are caused by Gloeocapsa magma - an algae species that feeds on the limestone filler in asphalt shingles, accelerating granule loss and shortening roof life.',
        'Pressure washing a roof is too aggressive and can void shingle warranties. We use soft washing - low pressure with a professional-grade algaecide solution - to safely remove staining without damage.',
        'A professionally cleaned roof can add years of life to your shingles and immediately improve the overall appearance of the entire home from the street.',
        'We serve homeowners in Raleigh, Cary, Apex, Holly Springs, Morrisville, and all of Wake County NC.',
      ]}
      steps={[
        {
          title: 'Request a same-day roof cleaning quote',
          body: 'Tell us your roof size, pitch, and material (asphalt shingles, tile, metal). We respond the same day with clear pricing and available scheduling.',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
        },
        {
          title: 'We soft wash the roof from the ground up',
          body: 'Our crew applies a professional-grade soft wash solution to the roof surface - safely killing algae, mold, lichen, and bacteria without walking on the shingles or using damaging pressure.',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        },
        {
          title: 'The roof looks clean and the shingles are protected',
          body: 'Streaks, dark patches, and green growth are gone. The roof looks newer, the home\'s curb appeal improves immediately, and the shingles are protected from further algae damage.',
          image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
        },
      ]}
      gallery={[
        { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', alt: 'Roof washing - removing algae and black streaks from shingles in Raleigh NC' },
        { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Clean home exterior after roof soft wash - Triangle area' },
        { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', alt: 'Roof cleaning results - before and after soft washing in Wake County' },
        { src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80', alt: 'Professional roof washing service - Cary NC' },
      ]}
      faqs={[
        {
          q: 'What causes the dark streaks and black stains on my roof?',
          a: 'The dark streaks are caused by Gloeocapsa magma, an algae species that thrives in humid climates like the Triangle. It feeds on the limestone filler in asphalt shingles, breaking down granules over time and shortening the life of your roof. Black streaks are the most visible sign, but algae can be present before you see obvious discoloration.',
        },
        {
          q: 'Why can\'t I just pressure wash my roof?',
          a: 'High-pressure washing damages asphalt shingles by blasting off granules, which are critical to the protective function of the shingle. Many roofing manufacturers specifically state that pressure washing voids the shingle warranty. Soft washing uses low pressure and a professional cleaning solution to remove algae and staining safely.',
        },
        {
          q: 'How long does roof washing take to work?',
          a: 'Results are visible immediately after the soft wash is applied and rinsed. The cleaning solution continues working for several days after the service, killing any remaining algae spores. Most homeowners see a significant improvement the same day.',
        },
        {
          q: 'How often should a roof be soft washed?',
          a: 'In North Carolina\'s humid climate, most roofs benefit from a professional cleaning every 2-3 years. Roofs with heavy tree coverage or north-facing slopes that stay damp longer may need cleaning more frequently to prevent algae from re-establishing.',
        },
      ]}
    />
  );
}
