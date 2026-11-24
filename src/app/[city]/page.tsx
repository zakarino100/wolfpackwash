import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityLanding } from "@/components/sections/city-landing";
import { buildCityMetadata, getPublishedCities, getPublishedCity } from "@/lib/site/cities";

type CityPageProps = {
  params: Promise<{ city: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedCities().map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getPublishedCity(slug);
  if (!city) return {};
  return buildCityMetadata(city);
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = getPublishedCity(slug);
  if (!city) notFound();
  return <CityLanding city={city} />;
}
