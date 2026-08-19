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
      image="/hero-images/concrete-cleaning.webp"
      bullets={[
        'Pressure washing removes oil stains, tire marks, algae, mold, and dark buildup from driveways, walkways, and patios that resist normal cleaning.',
        'Clean concrete makes an immediate, visible difference - it\'s one of the fastest ways to improve curb appeal and make the whole property feel maintained.',
        'Concrete cleaning pairs naturally with a house wash or driveway cleaning for a complete exterior refresh in one visit.',
        'We serve Raleigh, Cary, Apex, Holly Springs, and the surrounding Triangle area.',
      ]}
      steps={[
        {
          title: 'See the staining before guests do',
          body: 'Dark traffic lanes, algae, and oil marks are usually the first thing people notice when they pull up. We help you decide which concrete surfaces need the biggest reset first.',
          image: '/gallery-images/real-driveway.jpg',
        },
        {
          title: 'We pre-treat and surface clean the slab',
          body: 'Our crew uses the right detergent, dwell time, and pressure for the concrete in front of us so we lift grime and organic growth without chewing up the surface.',
          image: '/step-images/concrete.webp',
        },
        {
          title: 'The front of the property snaps back',
          body: 'Once the concrete is bright again, the garage, walkway, and landscaping all read cleaner. It is one of the fastest visual wins on the entire property.',
          image: '/step-images/sidewalk.webp',
        },
      ]}
      gallery={[
        { src: '/gallery-images/real-driveway.jpg', alt: 'Concrete pressure washing - driveway cleaning in Raleigh NC' },
        { src: '/gallery-images/driveway-wash-v2.webp', alt: 'Concrete cleaning before and after on a driveway in the Triangle area' },
        { src: '/step-images/concrete.webp', alt: 'Clean concrete after professional pressure washing - Cary NC' },
        { src: '/step-images/sidewalk.webp', alt: 'Clean walkway and patio results - Wake County NC' },
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
