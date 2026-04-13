import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.sidewalk;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.sidewalk.eyebrow}
      title={pageContent.sidewalk.title}
      description={pageContent.sidewalk.description}
      sourcePage="/sidewalk-pressure-washing"
      image="/hero-images/sidewalk-pressure-washing.png"
      bullets={[
        'Sidewalks and walkways collect algae, mold, leaf stains, and dark buildup that create a slippery, neglected look at the front of your home.',
        'A professional pressure wash removes the buildup completely and instantly improves the first impression of your property.',
        'Sidewalk cleaning pairs naturally with driveway washing and house washing for a complete exterior refresh in one visit.',
        'We serve Raleigh, Cary, Apex, Holly Springs, and the surrounding Triangle area.',
      ]}
      steps={[
        {
          title: 'Get a fast quote',
          body: 'Tell us the approximate sidewalk and walkway footage. We respond the same day with pricing and available scheduling.',
          image: '/step-images/sidewalk.png',
        },
        {
          title: 'We clean the entire approach to your home',
          body: 'Our crew removes algae, mold, stains, and built-up grime from sidewalks and walkways - leaving clean, bright concrete from curb to doorstep.',
          image: '/step-images/concrete.png',
        },
        {
          title: 'A cleaner, safer approach to the front door',
          body: 'Clean walkways change the first impression of your home before a visitor ever reaches the door - and reduce slip hazards from algae and mold buildup.',
          image: '/step-images/clean-result.png',
        },
      ]}
      gallery={[
        { src: '/step-images/sidewalk.png', alt: 'Sidewalk pressure washing - cleaning walkways in Raleigh NC' },
        { src: '/step-images/concrete.png', alt: 'Clean concrete sidewalk after pressure washing - Triangle area' },
        { src: '/step-images/concrete.png', alt: 'Removing algae and stains from walkways in Wake County' },
        { src: '/step-images/clean-result.png', alt: 'Sidewalk and walkway cleaning results - Cary NC' },
      ]}
      faqs={[
        {
          q: 'Why does my sidewalk look dark or green?',
          a: 'The dark coloring is usually algae, mold, or mildew growing on the concrete surface - especially in shaded or damp areas. It\'s very common in the Triangle\'s humid climate and is removed effectively with professional pressure washing.',
        },
        {
          q: 'Is sidewalk pressure washing safe for old concrete?',
          a: 'Yes, when done with the right pressure settings. We adjust our technique for older or more porous concrete to clean effectively without causing surface damage or erosion.',
        },
        {
          q: 'Can sidewalk washing be bundled with driveway cleaning?',
          a: 'Absolutely - it\'s one of the most common combinations we do. Bundle sidewalk and driveway washing for the most efficient way to clean all your concrete surfaces in one visit.',
        },
        {
          q: 'How long does sidewalk cleaning take?',
          a: 'Most sidewalk cleanings take 30-90 minutes depending on total footage and staining. We\'ll give you a clearer estimate with your quote.',
        },
      ]}
    />
  );
}
