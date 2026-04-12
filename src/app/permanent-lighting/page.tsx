import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.permanentLighting.eyebrow}
      title={pageContent.permanentLighting.title}
      description={pageContent.permanentLighting.description}
      sourcePage="/permanent-lighting"
      bullets={[
        'Position this as a premium home upgrade, not a gimmick.',
        'Sell convenience, aesthetics, and year-round flexibility.',
        'Use visuals and quote flow to qualify premium homeowners.',
      ]}
    />
  );
}
