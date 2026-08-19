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
      image="/hero-images/roof-washing.webp"
      bullets={[
        'Those dark streaks on your roof are caused by Gloeocapsa magma - an algae species that feeds on the limestone filler in asphalt shingles, accelerating granule loss and shortening roof life.',
        'Pressure washing a roof is too aggressive and can void shingle warranties. We use soft washing - low pressure with a professional-grade algaecide solution - to safely remove staining without damage.',
        'A professionally cleaned roof can add years of life to your shingles and immediately improve the overall appearance of the entire home from the street.',
        'We serve homeowners in Raleigh, Cary, Apex, Holly Springs, Morrisville, and all of Wake County NC.',
      ]}
      steps={[
        {
          title: 'Catch the streaking before it ages the roof',
          body: 'Those black streaks are not just cosmetic. They are algae growth working against the shingles, and the longer they sit, the older the whole home looks from the street.',
          image: '/gallery-images/real-roof.webp',
        },
        {
          title: 'We soft wash it the safe way',
          body: 'We apply a professional roof-safe treatment that kills algae and organic growth without blasting granules off the shingles or voiding the roof warranty with high pressure.',
          image: '/step-images/roof-wash.webp',
        },
        {
          title: 'The roof looks newer and lasts longer',
          body: 'The finished roof looks cleaner immediately, and more importantly, you stop the biological growth that was chewing away at the shingles underneath.',
          image: '/gallery-images/real-house-wash.webp',
        },
      ]}
      gallery={[
        { src: '/gallery-images/real-roof.webp', alt: 'Roof washing - removing algae and black streaks from shingles in Raleigh NC' },
        { src: '/step-images/roof-wash.webp', alt: 'Soft washing a roof to kill algae and lichen - Triangle NC' },
        { src: '/gallery-images/real-house-wash.webp', alt: 'Clean home exterior after roof soft wash - Wake County NC' },
        { src: '/gallery-images/house-wash-v2.webp', alt: 'Professional roof and exterior soft washing - Cary NC' },
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
