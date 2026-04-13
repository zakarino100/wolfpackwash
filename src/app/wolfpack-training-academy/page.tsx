import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { buildMetadata } from '@/lib/site/seo';

export const metadata: Metadata = buildMetadata({
  title: 'WolfPack Training Academy | Exterior Cleaning Training and Education',
  description:
    'Explore WolfPack Training Academy content for training, learning, and future education resources tied to the Wolf Pack Wash brand.',
  path: '/wolfpack-training-academy',
  keywords: ['WolfPack Training Academy', 'pressure washing training', 'exterior cleaning training'],
});

export default function Page() {
  return (
    <PageBuilder
      eyebrow="WolfPack Training Academy"
      title="Training, learning, and brand education without losing the legacy route."
      description="This page preserves the existing WolfPack Training Academy slug so migration does not drop current search value, while leaving room for future recruiting, training, or educational content tied to the brand."
      sourcePage="/wolfpack-training-academy"
      bullets={[
        'Preserve the legacy training academy slug so existing SEO value is not abandoned during the rebuild.',
        'Keep the page broad enough to support future training, recruiting, or educational content if the brand wants it later.',
        'Make the page feel credible and intentional rather than like a broken leftover route from the old site.',
      ]}
      steps={[
        {
          title: 'Use the route to preserve continuity',
          body: 'The first job of this page is protecting the legacy URL so the rebuild does not drop existing search equity.',
        },
        {
          title: 'Create room for future educational content',
          body: 'If Wolf Pack Wash expands training, recruiting, or educational resources, this page can evolve cleanly instead of starting from zero later.',
        },
        {
          title: 'Connect the route back into the main brand',
          body: 'The page should still feel like part of the overall Wolf Pack Wash ecosystem, with clear paths back to services and trust-building content.',
        },
      ]}
    />
  );
}
