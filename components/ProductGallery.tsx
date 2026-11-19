"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductArt } from "@/components/ProductArt";
import type { Product } from "@/data/products";
import { cn } from "@/lib/format";

export function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const hasPhotos = product.images.length > 0;

  return (
    <div>
      <div className="relative overflow-hidden rounded-hero border border-border/60 bg-surface p-2 shadow-soft">
        {hasPhotos ? (
          <div className="relative aspect-square w-full overflow-hidden rounded-[24px] bg-background">
            <Image
              src={product.images[active] ?? product.images[0]}
              alt={`${product.name} — صورة ${active + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
              priority={active === 0}
            />
          </div>
        ) : (
          <ProductArt
            category={product.category}
            tileColor={product.tileColor}
            variant={active}
            label={`${product.name} — صورة ${active + 1}`}
            className="rounded-[24px]"
          />
        )}

        {product.badge && (
          <span
            className={cn(
              "absolute top-5 start-5 rounded-full px-3 py-1 text-[11px] font-extrabold",
              product.badge === "الأكثر طلبًا"
                ? "bg-accent text-accent-ink"
                : "bg-surface/90 text-primary backdrop-blur",
            )}
          >
            {product.badge}
          </span>
        )}
      </div>

      <div className="mt-3 flex gap-2.5">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActive(index)}
            aria-pressed={active === index}
            aria-label={`عرض صورة ${index + 1} من ${product.name}`}
            className={cn(
              "h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 p-0.5 transition",
              active === index ? "border-primary" : "border-transparent opacity-80 hover:opacity-100",
            )}
          >
            <ProductArt
              category={product.category}
              tileColor={product.tileColor}
              variant={index}
              label=""
              className="h-full w-full rounded-xl"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
