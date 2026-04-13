import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.sidewalk.eyebrow}
      title={pageContent.sidewalk.title}
      description={pageContent.sidewalk.description}
      sourcePage="/sidewalk-pressure-washing"
      image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
      bullets={[
        'Sell cleaner walkways as a subtle but immediate upgrade people notice before they reach the door.',
        'Keep this page easy to pair with driveway and house washing service so the bundle logic feels natural.',
        'Use mobile-friendly proof and simple service framing once gallery assets are loaded.',
      ]}
      steps={[
        {
          title: 'Point out the walkway problem areas',
          body: 'The quote path should make it easy to show stained, darkened, or dirty sections that are dragging down the front of the property.',
        },
        {
          title: 'Clean up the approach to the home',
          body: 'The page should reinforce that sidewalks affect first impression more than homeowners usually think.',
        },
        {
          title: 'Make the property feel more dialed in',
          body: 'A cleaner walkway is a small detail with a strong payoff when it is paired with the rest of the exterior.',
        },
      ]}
    />
  );
}
