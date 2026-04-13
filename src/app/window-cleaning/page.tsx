import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.windowCleaning;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.windowCleaning.eyebrow}
      title={pageContent.windowCleaning.title}
      description={pageContent.windowCleaning.description}
      sourcePage="/window-cleaning"
      image="/hero-images/window-cleaning.png"
      bullets={[
        'Streak-free glass inside and out - we clean panes, frames, tracks, and sills for a thorough finish.',
        'Clean windows dramatically increase natural light and improve the entire feel of your home from both inside and out.',
        'Window cleaning pairs naturally with a house wash - most homeowners bundle both for a complete exterior refresh in one visit.',
        'We service single-story and multi-story homes across Raleigh, Cary, Apex, Holly Springs, and the Triangle area.',
      ]}
      steps={[
        {
          title: 'Get a fast quote',
          body: 'Tell us your home size and approximate number of windows. We respond the same day with pricing and available dates.',
          image: '/step-images/window.png',
        },
        {
          title: 'We clean every pane thoroughly',
          body: 'Our crew works methodically through every window - cleaning glass, wiping frames, and removing buildup from tracks and sills for a proper finish.',
          image: '/step-images/get-quote.png',
        },
        {
          title: 'Enjoy cleaner glass and better light',
          body: 'The difference is immediately noticeable - more natural light, better views from inside, and a noticeably sharper exterior from the street.',
          image: '/step-images/clean-result.png',
        },
      ]}
      gallery={[
        { src: '/step-images/window.png', alt: 'Professional window cleaning - streak-free glass in Raleigh NC' },
        { src: '/step-images/get-quote.png', alt: 'Clean windows and home exterior after service' },
        { src: '/step-images/clean-result.png', alt: 'Window cleaning results on Triangle area home' },
        { src: '/step-images/clean-result.png', alt: 'Exterior window washing - Cary NC' },
      ]}
      faqs={[
        {
          q: 'Do you clean both inside and outside windows?',
          a: 'Yes - we offer interior and exterior window cleaning. Most homeowners opt for both to get the full benefit of streak-free glass and better natural light throughout the home.',
        },
        {
          q: 'How often should I get my windows professionally cleaned?',
          a: 'Twice a year is the most common recommendation - once in spring after pollen season and once in fall before the holidays. Homes near trees or on busy roads may benefit from more frequent cleaning.',
        },
        {
          q: 'Can you clean windows on a two-story home safely?',
          a: 'Yes. We service single-story and multi-story homes across the Triangle. Our crew and equipment are set up to safely access upper-level windows without damaging landscaping or siding.',
        },
        {
          q: 'Can I bundle window cleaning with a house wash?',
          a: 'Absolutely - bundling is one of our most popular options. We sequence the work so the house wash happens first, then we detail the windows for a perfect final finish.',
        },
      ]}
    />
  );
}
