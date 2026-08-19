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
      image="/gallery-images/house-wash-v3.webp"
      bullets={[
        'House washing before-and-afters showing the difference soft washing makes on siding, brick, and stucco.',
        'Window cleaning results with streak-free glass and noticeably better light from both inside and out.',
        'Concrete, driveway, and sidewalk transformations where years of buildup are lifted in a single visit.',
        'Lighting installs - both seasonal holiday lighting and permanent RGB systems across Triangle-area homes.',
      ]}
      gallery={[
        { src: '/gallery-images/house-wash-v3.webp', alt: 'House washing - removing pollen, algae, and grime from siding' },
        { src: '/gallery-images/window-cleaning.webp', alt: 'Window cleaning - streak-free glass on Triangle area home' },
        { src: '/gallery-images/driveway-wash-v2.webp', alt: 'Driveway pressure washing - before and after results' },
        { src: '/gallery-images/house-wash-v2.webp', alt: 'House wash - vinyl siding restoration in Cary NC' },
        { src: '/gallery-images/driveway-wash.webp', alt: 'Driveway and concrete cleaning - years of buildup lifted' },
        { src: '/gallery-images/house-wash.webp', alt: 'House washing - soft wash results on Triangle area home' },
        { src: '/gallery-images/permanent-lighting.webp', alt: 'Permanent RGB lighting installation - year-round exterior lighting' },
      ]}
    />
  );
}
