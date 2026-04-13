import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site/config";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07111b] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
<<<<<<< HEAD
            <Image src="/logos/wolfpack_wash_shield_logo_transparent.svg" alt="Wolf Pack Wash logo" width={56} height={56} className="h-14 w-14 object-contain" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Wolf Pack Wash</p>
          </div>
          <h2 className="mt-3 text-2xl font-semibold">Real results, fast response, clean systems.</h2>
          <p className="mt-3 max-w-xl text-sm text-white/70">
            Professional exterior cleaning across the Triangle — house washing, windows, gutters, concrete, lighting, and recurring care.
=======
            <Image src="/logos/wolfpack_wash_shield_transparent.png" alt="Wolf Pack Wash logo" width={56} height={56} className="h-14 w-14 object-contain" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white">Wolf Pack Wash</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-sky-200/75">Exterior Cleaning</p>
            </div>
          </div>
          <h2 className="mt-3 text-2xl font-semibold">Fast quotes, real proof, and exterior cleaning that makes the property look better quickly.</h2>
          <p className="mt-3 max-w-xl text-sm text-white/74">
            Trusted exterior cleaning across the Triangle, with mobile-friendly quoting, clear communication, and services that are easy to book and easy to believe.
>>>>>>> 50f7ab6 (Polish Wolf Pack Wash site, strengthen SEO, add blog and generated assets)
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Top pages</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            {siteConfig.nav.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Contact</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            <Link href={siteConfig.phoneHref} className="transition hover:text-white">
              {siteConfig.phoneDisplay}
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Get a free quote
            </Link>
            <Link href="/maintenance-plan" className="transition hover:text-white">
              Explore Exterior Care Plan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
