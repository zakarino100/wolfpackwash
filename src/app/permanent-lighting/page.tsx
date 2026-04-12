import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.permanentLighting.eyebrow}
      title={pageContent.permanentLighting.title}
      description={pageContent.permanentLighting.description}
      sourcePage="/permanent-lighting"
      image="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=1600&q=80"
      bullets={[
        'Position this as a premium home upgrade, not a gimmick.',
        'Sell convenience, aesthetics, and year-round flexibility.',
        'Use visuals and quote flow to qualify premium homeowners.',
      ]}
    />
  );
}
