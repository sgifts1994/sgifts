import Link from "next/link";
import { ProductArt } from "@/components/ProductArt";
import { FavoriteButton } from "@/components/FavoriteButton";
import type { Product } from "@/data/products";
import { categoryLabel } from "@/data/products";
import { formatPrice } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex h-full flex-col rounded-card border border-border/60 bg-surface p-2.5 shadow-[0_4px_14px_rgba(176,82,122,0.06)] transition duration-300 ease-out hover:-translate-y-1 hover:border-primary-soft/70 hover:shadow-soft">
      <Link
        href={`/product/${product.slug}`}
        className="flex h-full flex-col rounded-[20px] focus-visible:outline-offset-4"
        aria-label={`${product.name} — ${formatPrice(product.price)}`}
      >
        <div className="relative overflow-hidden rounded-[20px]">
          <ProductArt
            category={product.category}
            tileColor={product.tileColor}
            label={`${product.name} — ${categoryLabel[product.category]}`}
            className="transition duration-500 ease-out group-hover:scale-[1.04]"
          />

          {product.badge && (
            <span
              className={
                product.badge === "الأكثر طلبًا"
                  ? "absolute top-3 start-3 rounded-full bg-accent px-3 py-1 text-[11px] font-extrabold text-accent-ink shadow-[0_2px_8px_rgba(106,68,0,0.12)]"
                  : "absolute top-3 start-3 rounded-full bg-surface/90 px-3 py-1 text-[11px] font-extrabold text-primary backdrop-blur"
              }
            >
              {product.badge}
            </span>
          )}

          {!product.inStock && (
            <span className="absolute bottom-3 start-3 rounded-full bg-ink/80 px-3 py-1 text-[11px] font-semibold text-white">
              غير متوفر حاليًا
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col px-1 pb-1 pt-3.5">
          <span className="text-[11px] font-semibold text-ink/55">
            {categoryLabel[product.category]}
          </span>
          <h3 className="mt-1 text-[15px] font-extrabold leading-6 text-ink transition group-hover:text-primary sm:text-base">
            {product.name}
          </h3>
          <p className="mt-auto pt-2 text-sm font-semibold text-primary">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>

      <FavoriteButton
        productId={product.id}
        productName={product.name}
        className="absolute top-5 end-5"
      />
    </article>
  );
}
