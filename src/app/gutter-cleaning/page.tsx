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
      image="/hero-images/gutter-cleaning.png"
      bullets={[
        'Clogged gutters cause overflow, fascia rot, water intrusion, and foundation erosion - all of which cost far more to fix than a cleaning.',
        'We clear leaves, twigs, shingle grit, and debris from gutters and flush downspouts to confirm proper water flow.',
        'Gutter cleaning pairs naturally with house washing - bundle both and get the whole exterior handled in one visit.',
        'We service homes across Raleigh, Cary, Apex, Holly Springs, Morrisville, and the surrounding Wake County area.',
      ]}
      steps={[
        {
          title: 'Get a same-day quote',
          body: 'Fill out the quick form or call us directly. We\'ll respond with pricing and next available dates - no waiting, no back-and-forth.',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
        },
        {
          title: 'We clear and flush the entire system',
          body: 'Our crew removes all debris from gutters and flushes every downspout to confirm water is moving correctly away from your foundation.',
          image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=800&q=80',
        },
        {
          title: 'You stay ahead of the next problem',
          body: 'Clean gutters protect your roofline, fascia boards, siding, and foundation. It\'s one of the most preventive things you can do for your home each year.',
          image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
        },
      ]}
      gallery={[
        { src: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=800&q=80', alt: 'Gutter cleaning - removing debris and leaves in Raleigh NC' },
        { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Home exterior after gutter cleaning service' },
        { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', alt: 'Full exterior cleaning including gutters - Triangle NC' },
        { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', alt: 'Clean home exterior after gutter and house washing' },
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
