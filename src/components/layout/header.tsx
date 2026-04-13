import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site/config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[rgba(8,12,18,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-white uppercase">
          <Image
            src="/logos/wolfpack_wash_shield_transparent.png"
            alt="Wolf Pack Wash logo"
            width={68}
            height={68}
            className="h-14 w-14 object-contain [filter:brightness(1.12)_drop-shadow(0_0_1px_rgba(255,255,255,1))_drop-shadow(0_0_5px_rgba(255,255,255,0.45))] sm:h-16 sm:w-16"
            priority
          />
          <span className="leading-tight">
            <span className="block text-[13px] font-bold tracking-[0.22em] text-white sm:text-[14px]">Wolf Pack Wash</span>
            <span className="block text-[9px] tracking-[0.28em] text-sky-200/75 sm:text-[10px]">Exterior Cleaning</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/80 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={siteConfig.secondaryCta.href}
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5 sm:inline-flex"
          >
            {siteConfig.secondaryCta.label}
          </Link>
          <Link
            href={siteConfig.primaryCta.href}
            className="inline-flex rounded-full bg-[#C81920] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#a8141a]"
          >
            {siteConfig.primaryCta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
