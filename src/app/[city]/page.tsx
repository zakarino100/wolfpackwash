import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityLanding } from "@/components/sections/city-landing";
import { buildCityMetadata, getPublishedCities, getPublishedCity, isReservedCitySlug } from "@/lib/site/cities";

type CityPageProps = {
  params: Promise<{ city: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedCities()
    .filter((city) => !isReservedCitySlug(city.slug))
    .map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  if (isReservedCitySlug(slug)) return {};
  const city = getPublishedCity(slug);
  if (!city) return {};
  return buildCityMetadata(city);
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  if (isReservedCitySlug(slug)) notFound();
  const city = getPublishedCity(slug);
  if (!city) notFound();
  return <CityLanding city={city} />;
}
