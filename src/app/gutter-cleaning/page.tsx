import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.gutterCleaning;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.gutterCleaning.eyebrow}
      title={pageContent.gutterCleaning.title}
      description={pageContent.gutterCleaning.description}
      sourcePage="/gutter-cleaning"
      image="/hero-images/gutter-cleaning.webp"
      bullets={[
        'Clogged gutters cause overflow, fascia rot, water intrusion, and foundation erosion - all of which cost far more to fix than a cleaning.',
        'We clear leaves, twigs, shingle grit, and debris from gutters and flush downspouts to confirm proper water flow.',
        'Gutter cleaning pairs naturally with house washing - bundle both and get the whole exterior handled in one visit.',
        'We service homes across Raleigh, Cary, Apex, Holly Springs, Morrisville, and the surrounding Wake County area.',
      ]}
      steps={[
        {
          title: 'Catch the overflow before it stains and rots',
          body: 'When gutters clog, water rolls over the edge and starts attacking fascia, siding, mulch beds, and foundations. We help you fix it before the next heavy rain turns it into a bigger repair.',
          image: '/gallery-images/real-gutter.webp',
        },
        {
          title: 'We clear, flush, and verify the full run',
          body: 'Our crew removes leaves and debris by hand, clears the trouble spots, and flushes every downspout so you know the whole system is moving water the way it should.',
          image: '/gallery-images/real-gutter-guard.jpg',
        },
        {
          title: 'Your roofline drains clean again',
          body: 'The result is simple: cleaner gutters, proper flow, and a home that is better protected the next time Raleigh gets one of those hard afternoon storms.',
          image: '/step-images/gutter.webp',
        },
      ]}
      gallery={[
        { src: '/gallery-images/real-gutter.webp', alt: 'Gutter cleaning - removing debris and leaves in Raleigh NC' },
        { src: '/gallery-images/real-gutter-guard.jpg', alt: 'Gutter line inspected and cleaned along the roof edge in the Triangle area' },
        { src: '/step-images/gutter.webp', alt: 'Clearing and flushing gutters and downspouts - Triangle NC' },
        { src: '/gallery-images/real-house-wash.webp', alt: 'Clean home exterior after gutter and house washing - Wake County NC' },
      ]}
      faqs={[
        {
          q: 'How often should gutters be cleaned in Raleigh NC?',
          a: 'Most Triangle-area homeowners should clean gutters at least twice a year - once in late spring after tree pollen drops and once in late fall after leaves come down. Homes with heavy tree coverage may need 3-4 cleanings per year.',
        },
        {
          q: 'What happens if I don\'t clean my gutters?',
          a: 'Clogged gutters cause water to overflow against your siding, fascia boards, and foundation. Over time, this leads to rot, water intrusion, mold, and foundation damage - repairs that can cost thousands of dollars.',
        },
        {
          q: 'Do you flush downspouts as part of the gutter cleaning?',
          a: 'Yes. We clear all debris from the gutters and flush every downspout to verify proper water flow before we leave. If we find any blockages or damage, we\'ll let you know.',
        },
        {
          q: 'Can gutter cleaning be bundled with house washing?',
          a: 'Absolutely - it\'s one of our most popular combinations. We do the house wash first, then clean the gutters, so you get a completely refreshed exterior in a single visit.',
        },
      ]}
    />
  );
}
