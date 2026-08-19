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
      image="/hero-images/window-cleaning.webp"
      bullets={[
        'Streak-free glass inside and out - we clean panes, frames, tracks, and sills for a thorough finish.',
        'Clean windows dramatically increase natural light and improve the entire feel of your home from both inside and out.',
        'Window cleaning pairs naturally with a house wash - most homeowners bundle both for a complete exterior refresh in one visit.',
        'We service single-story and multi-story homes across Raleigh, Cary, Apex, Holly Springs, and the Triangle area.',
      ]}
      steps={[
        {
          title: 'See the haze before it dulls the whole house',
          body: 'Hard-water spotting, pollen film, and dirty tracks make even a nice home look tired. We start by identifying the glass, frames, and problem buildup that is killing the shine.',
          image: '/gallery-images/window-cleaning.webp',
        },
        {
          title: 'We detail the glass, frames, and tracks',
          body: 'Our crew works pane by pane, scrubbing the glass, wiping frames, and clearing tracks and sills so the finish looks clean up close, not just from the driveway.',
          image: '/step-images/window.webp',
        },
        {
          title: 'The home feels brighter immediately',
          body: 'Once the glass is clean, more light comes in, the views sharpen up, and the entire exterior reads cleaner from the street.',
          image: '/gallery-images/real-siding-side.jpg',
        },
      ]}
      gallery={[
        { src: '/gallery-images/window-cleaning.webp', alt: 'Professional window cleaning - streak-free glass in Raleigh NC' },
        { src: '/step-images/window.webp', alt: 'Window cleaning in progress on a Triangle-area home' },
        { src: '/gallery-images/real-siding-side.jpg', alt: 'Clean exterior windows and siding on a Raleigh area home' },
        { src: '/gallery-images/real-house-wash.webp', alt: 'Brightened home exterior after a wash and window cleaning visit in Cary NC' },
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
