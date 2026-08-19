import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.permanentLighting;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.permanentLighting.eyebrow}
      title={pageContent.permanentLighting.title}
      description={pageContent.permanentLighting.description}
      sourcePage="/permanent-lighting"
      image="/hero-images/permanent-lighting.webp"
      bullets={[
        'Permanent RGB lighting is installed once and stays on your home year-round - no setup, no takedown, no seasonal hassle.',
        'Change colors and schedules directly from your phone: white for everyday, red and green for Christmas, blue and red for the Fourth of July, or any color for game days.',
        'Built with commercial-grade weather-resistant fixtures that are designed to last - far superior to consumer lighting products.',
        'A permanent lighting install adds measurable curb appeal, distinction, and value to your home in Raleigh, Cary, Apex, and Holly Springs.',
      ]}
      steps={[
        {
          title: 'Plan the roofline and the look you actually want',
          body: 'We walk the front elevation, note the roofline, peaks, and accent areas, and map out a clean permanent-lighting layout that looks built into the house instead of clipped on as an afterthought.',
          image: '/step-images/perm-lighting.webp',
        },
        {
          title: 'We install the system cleanly and discreetly',
          body: 'Our crew mounts commercial-grade RGB fixtures with concealed wiring and weatherproof components so the home looks sharp in the daytime and even better once the lights come on at night.',
          image: '/step-images/holiday-lights.webp',
        },
        {
          title: 'Run every color and schedule from your phone',
          body: 'After install, you can swap scenes, set timers, and change colors for holidays, events, game days, or everyday curb appeal without climbing a ladder ever again.',
          image: '/gallery-images/permanent-lighting.webp',
        },
      ]}
      gallery={[
        { src: '/step-images/perm-lighting.webp', alt: 'Permanent RGB lighting installed on home exterior - Raleigh NC' },
        { src: '/step-images/holiday-lights.webp', alt: 'Year-round exterior lighting - Triangle area home' },
        { src: '/gallery-images/permanent-lighting.webp', alt: 'Permanent lighting glowing along a home roofline at dusk in Cary NC' },
        { src: '/hero-images/permanent-lighting.webp', alt: 'Permanent exterior lighting installation results on a Wake County home' },
      ]}
      faqs={[
        {
          q: 'What is permanent exterior lighting?',
          a: 'Permanent exterior lighting uses weatherproof RGB LED fixtures installed along your roofline and home features. Unlike holiday lights, they stay up year-round and can be changed to any color through a smartphone app - making them ideal for holidays, events, and everyday use.',
        },
        {
          q: 'How do I control the permanent lighting?',
          a: 'Your lights are controlled through a smartphone app. You can change colors, set schedules, adjust brightness, and create custom scenes - all from your phone. Many homeowners set their lights to come on automatically at sunset and go off at a set time.',
        },
        {
          q: 'How long do permanent lighting fixtures last?',
          a: 'Commercial-grade permanent lighting fixtures are built to last 10+ years with minimal maintenance. Unlike consumer lights, they\'re rated for continuous outdoor exposure and are designed to withstand rain, wind, and UV exposure.',
        },
        {
          q: 'Is permanent lighting worth it compared to seasonal lights?',
          a: 'For homeowners who put up holiday lights annually, permanent lighting typically pays for itself in 2-3 years when you factor in the cost of seasonal lights, installation labor, and takedown. And you get a far better-looking result year-round.',
        },
      ]}
    />
  );
}
