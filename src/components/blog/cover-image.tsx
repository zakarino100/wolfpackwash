import Image from "next/image";

type CoverImageProps = {
  src: string;
  alt: string;
  sizes: string;
  /** Put a preload link in the head. */
  preload?: boolean;
  /** Use "high" only for the post cover, which is the LCP element. */
  fetchPriority?: "high" | "low" | "auto";
  quality?: number;
  frame?: "rounded" | "bleed";
};

export function CoverImage({
  src,
  alt,
  sizes,
  preload = false,
  fetchPriority = "auto",
  quality = 60,
  frame = "rounded",
}: CoverImageProps) {
  const radius = frame === "rounded" ? "rounded-[1.35rem]" : "";
  if (src === "brand") {
    return (
      <div className={`relative aspect-[4/3] overflow-hidden bg-[#07111b] ${radius}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,25,32,0.5),transparent_58%)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <Image src="/logos/wpw-emblem.png" alt={alt} width={96} height={96} className="h-20 w-20 object-contain" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">Wolf Pack Wash</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative aspect-[4/3] overflow-hidden bg-[#0d1b27] ${radius}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        preload={preload}
        fetchPriority={preload ? fetchPriority : "auto"}
        decoding={fetchPriority === "high" ? "sync" : "async"}
        className="object-cover"
      />
    </div>
  );
}
