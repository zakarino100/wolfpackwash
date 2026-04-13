import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.concrete;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.concrete.eyebrow}
      title={pageContent.concrete.title}
      description={pageContent.concrete.description}
      sourcePage="/concrete-pressure-washing"
      image="/hero-images/concrete-cleaning.png"
      bullets={[
        'Pressure washing removes oil stains, tire marks, algae, mold, and dark buildup from driveways, walkways, and patios that resist normal cleaning.',
        'Clean concrete makes an immediate, visible difference - it\'s one of the fastest ways to improve curb appeal and make the whole property feel maintained.',
        'Concrete cleaning pairs naturally with a house wash or driveway cleaning for a complete exterior refresh in one visit.',
        'We serve Raleigh, Cary, Apex, Holly Springs, and the surrounding Triangle area.',
      ]}
      steps={[
        {
          title: 'Request your quote',
          body: 'Tell us which surfaces need cleaning - driveway, walkways, patio, or all three. We\'ll get back to you the same day with pricing.',
          image: '/step-images/get-quote.png',
        },
        {
          title: 'We treat and pressure wash the surface',
          body: 'Our crew applies the right pre-treatment and pressure to your specific concrete type - lifting stains, algae, and buildup without damaging the surface.',
          image: '/step-images/concrete.png',
        },
        {
          title: 'The whole property feels sharper',
          body: 'Clean concrete changes the way a property looks and feels from the street. It\'s one of the highest-impact exterior improvements you can make.',
          image: '/step-images/clean-result.png',
        },
      ]}
      gallery={[
        { src: '/step-images/concrete.png', alt: 'Concrete pressure washing - driveway cleaning in Raleigh NC' },
        { src: '/step-images/concrete.png', alt: 'Removing oil stains and algae from concrete surfaces' },
        { src: '/step-images/sidewalk.png', alt: 'Clean walkway and patio after pressure washing - Triangle NC' },
        { src: '/step-images/clean-result.png', alt: 'Exterior concrete cleaning results - Wake County' },
      ]}
      faqs={[
        {
          q: 'Can pressure washing remove oil stains from concrete?',
          a: 'Yes - with the right pre-treatment and pressure, we can significantly reduce or fully remove oil stains, tire marks, rust, algae, and most organic buildup from concrete driveways and walkways.',
        },
        {
          q: 'How often should concrete be pressure washed?',
          a: 'Most homeowners benefit from annual concrete cleaning. Driveways and walkways in Raleigh and the Triangle pick up pollen, algae, and traffic stains quickly - especially in shaded or north-facing areas.',
        },
        {
          q: 'Is pressure washing safe for all concrete surfaces?',
          a: 'Yes, when done correctly. We adjust the pressure and technique for each surface type - avoiding damage to sealed concrete, stamped finishes, or older surfaces that need gentler treatment.',
        },
        {
          q: 'Can I bundle concrete washing with a house wash?',
          a: 'Absolutely. Combining concrete cleaning with a house wash is one of the most cost-effective ways to refresh the entire exterior in one visit. Most homeowners see an immediate curb appeal improvement.',
        },
      ]}
    />
  );
}
