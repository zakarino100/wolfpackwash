import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.concrete.eyebrow}
      title={pageContent.concrete.title}
      description={pageContent.concrete.description}
      sourcePage="/concrete-pressure-washing"
      image="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1600&q=80"
      bullets={[
<<<<<<< HEAD
        'Removes years of oil stains, dirt, and algae growth from concrete.',
        'Dramatically improves curb appeal before a listing or just for pride.',
        'Pairs perfectly with driveway and sidewalk cleaning for a complete reset.',
=======
        'Focus on visual transformation, curb appeal, and how much cleaner concrete changes the feel of the whole property.',
        'Use driveway and walkway results to create contrast and urgency without overcomplicating the message.',
        'Make bundling obvious without cluttering the page or hiding the standalone value of the service.',
      ]}
      steps={[
        {
          title: 'Show us the concrete areas that need help',
          body: 'Driveways, walkways, and problem spots should be easy to identify and quote from a phone-first experience.',
          image: '/generated/wpw-driveway-cleaning-proof.jpg',
        },
        {
          title: 'We target the buildup and staining',
          body: 'This page should reinforce that the service is about visible improvement, not just spraying water around.',
          image: '/generated/wpw-driveway-cleaning-proof.jpg',
        },
        {
          title: 'The whole property feels cleaner',
          body: 'When concrete looks better, the rest of the exterior usually feels more maintained too. That is the emotional payoff this page should sell.',
          image: '/generated/wpw-hero-home-clean-premium.jpg',
        },
>>>>>>> 50f7ab6 (Polish Wolf Pack Wash site, strengthen SEO, add blog and generated assets)
      ]}
    />
  );
}
