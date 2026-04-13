import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.gallery;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.gallery.eyebrow}
      title={pageContent.gallery.title}
      description={pageContent.gallery.description}
      sourcePage="/gallery"
      image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
      bullets={[
        'House washing before-and-afters showing the difference soft washing makes on siding, brick, and stucco.',
        'Window cleaning results with streak-free glass and noticeably better light from both inside and out.',
        'Concrete, driveway, and sidewalk transformations where years of buildup are lifted in a single visit.',
        'Lighting installs - both seasonal holiday lighting and permanent RGB systems across Triangle-area homes.',
      ]}
      gallery={[
        { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', alt: 'House washing - removing pollen, algae, and grime from siding' },
        { src: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80', alt: 'Window cleaning - streak-free glass on Triangle area home' },
        { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', alt: 'Driveway pressure washing - before and after results' },
        { src: 'https://images.unsplash.com/photo-1545181936-ac4e9e3a2b6c?w=800&q=80', alt: 'Holiday light installation - professional install in Raleigh NC' },
        { src: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=800&q=80', alt: 'Gutter cleaning - removing debris and restoring water flow' },
        { src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80', alt: 'Deck pressure washing - restored outdoor living space' },
        { src: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80', alt: 'Fence pressure washing - wood and vinyl fence restoration' },
        { src: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=800&q=80', alt: 'Permanent RGB lighting installation - year-round exterior lighting' },
      ]}
    />
  );
}
