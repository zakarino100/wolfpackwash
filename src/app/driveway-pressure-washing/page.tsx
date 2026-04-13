import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.driveway;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.driveway.eyebrow}
      title={pageContent.driveway.title}
      description={pageContent.driveway.description}
      sourcePage="/driveway-pressure-washing"
      image="/hero-images/driveway-pressure-washing.png"
      bullets={[
        'Driveways accumulate oil stains, tire marks, pollen, algae, and dark traffic buildup that make the whole front of your home look neglected.',
        'A professional pressure wash lifts stubborn stains and buildup that household hoses and detergents simply can\'t reach.',
        'Most homeowners see an immediate before-and-after improvement - a clean driveway is one of the fastest curb appeal upgrades you can make.',
        'We serve Raleigh, Cary, Apex, Holly Springs, Morrisville, and all of Wake County NC.',
      ]}
      steps={[
        {
          title: 'Request a fast quote',
          body: 'Give us details about your driveway size and any specific staining concerns. We respond the same day with pricing and scheduling.',
          image: '/step-images/get-quote.png',
        },
        {
          title: 'We treat and pressure wash the surface',
          body: 'Our crew pre-treats stained areas and applies the right pressure for your driveway material - removing oil, algae, and buildup without surface damage.',
          image: '/step-images/concrete.png',
        },
        {
          title: 'Pull into a cleaner-looking property',
          body: 'The difference is noticeable from the street. A clean driveway makes the entire front of your home look more maintained and well cared for.',
          image: '/step-images/clean-result.png',
        },
      ]}
      gallery={[
        { src: '/step-images/concrete.png', alt: 'Driveway pressure washing - removing oil stains and buildup in Raleigh NC' },
        { src: '/step-images/concrete.png', alt: 'Before and after driveway cleaning - Triangle area' },
        { src: '/step-images/sidewalk.png', alt: 'Clean concrete driveway after professional pressure washing' },
        { src: '/step-images/clean-result.png', alt: 'Driveway cleaning results - Wake County NC' },
      ]}
      faqs={[
        {
          q: 'Can you remove oil stains from a driveway?',
          a: 'Yes - with the right pre-treatment, we can significantly reduce or fully remove oil stains, rust marks, tire tracks, and organic staining from most concrete and asphalt driveways.',
        },
        {
          q: 'How long does driveway pressure washing take?',
          a: 'Most standard residential driveways take 1-2 hours depending on size and how much buildup needs to be removed. We\'ll give you a clearer time estimate with your quote.',
        },
        {
          q: 'How often should I get my driveway pressure washed?',
          a: 'Most homeowners in the Raleigh area benefit from annual driveway cleaning - typically in spring. Driveways with heavy vehicle use, oil exposure, or tree coverage may benefit from twice-yearly cleaning.',
        },
        {
          q: 'Can driveway cleaning be bundled with other services?',
          a: 'Yes - driveway washing pairs naturally with house washing, sidewalk cleaning, and concrete work. Bundle services for the most cost-effective way to refresh the entire exterior in one visit.',
        },
      ]}
    />
  );
}
