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
      image="/hero-images/permanent-lighting.png"
      bullets={[
        'Permanent RGB lighting is installed once and stays on your home year-round - no setup, no takedown, no seasonal hassle.',
        'Change colors and schedules directly from your phone: white for everyday, red and green for Christmas, blue and red for the Fourth of July, or any color for game days.',
        'Built with commercial-grade weather-resistant fixtures that are designed to last - far superior to consumer lighting products.',
        'A permanent lighting install adds measurable curb appeal, distinction, and value to your home in Raleigh, Cary, Apex, and Holly Springs.',
      ]}
      steps={[
        {
          title: 'Get a design consultation and quote',
          body: 'We walk through your home\'s roofline, features, and goals. You\'ll get a clear picture of what the install looks like and what it costs - no surprises.',
          image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=800&q=80',
        },
        {
          title: 'We install your permanent lighting system',
          body: 'Our crew installs commercial-grade RGB fixtures along your roofline and any other features you want illuminated. Clean, concealed wiring and a weatherproof installation built to last.',
          image: 'https://images.unsplash.com/photo-1545181936-ac4e9e3a2b6c?w=800&q=80',
        },
        {
          title: 'Control everything from your phone, year-round',
          body: 'Set schedules, change colors, and adjust brightness right from the app. Your home looks great every night - for holidays, events, and everyday.',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
        },
      ]}
      gallery={[
        { src: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=800&q=80', alt: 'Permanent RGB lighting installed on home exterior - Raleigh NC' },
        { src: 'https://images.unsplash.com/photo-1545181936-ac4e9e3a2b6c?w=800&q=80', alt: 'Year-round exterior lighting - Triangle area home' },
        { src: 'https://images.unsplash.com/photo-1544979259-f3cd394b7a48?w=800&q=80', alt: 'App-controlled permanent lighting - Cary NC' },
        { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Permanent lighting installation results - Wake County' },
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
