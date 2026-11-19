"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { CategoryChips } from "@/components/CategoryChips";
import { ProductGrid } from "@/components/ProductGrid";
import type { Category } from "@/data/products";
import { isCategory, products } from "@/data/products";

type CategoryId = Category | "all";
type SortKey = "featured" | "price-asc" | "price-desc";

const sortOptions: Array<{ id: SortKey; label: string }> = [
  { id: "featured", label: "الترتيب المقترح" },
  { id: "price-asc", label: "السعر: من الأقل للأعلى" },
  { id: "price-desc", label: "السعر: من الأعلى للأقل" },
];

export function CatalogView({ initialCategory = "all" }: { initialCategory?: CategoryId }) {
  const router = useRouter();
  const [category, setCategory] = useState<CategoryId>(initialCategory);
  const [sort, setSort] = useState<SortKey>("featured");

  // الـ static export مش بيقرأ searchParams على السيرفر، فبناخد الفئة من الرابط هنا.
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("category");
    if (isCategory(fromUrl ?? undefined)) setCategory(fromUrl as Category);
  }, []);

  const visibleProducts = useMemo(() => {
    const filtered =
      category === "all"
        ? [...products]
        : products.filter((product) => product.category === category);

    if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);

    return filtered;
  }, [category, sort]);

  function handleCategory(next: CategoryId) {
    setCategory(next);
    const href = next === "all" ? "/catalog" : `/catalog?category=${next}`;
    router.replace(href, { scroll: false });
  }

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-card border border-border/70 bg-surface/80 p-4 shadow-[0_6px_18px_rgba(176,82,122,0.06)] sm:p-5">
        <CategoryChips active={category} onSelect={handleCategory} />

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70">
            <SlidersHorizontal className="h-4 w-4 text-primary" strokeWidth={1.6} aria-hidden="true" />
            {visibleProducts.length} {visibleProducts.length === 1 ? "منتج" : "منتج"}
          </p>

          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm font-semibold text-ink/70">
              ترتيب
            </label>
            <div className="relative">
              <select
                id="sort"
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
                className="appearance-none rounded-full border border-border bg-background py-2.5 ps-4 pe-10 text-sm font-semibold text-ink transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute end-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      <ProductGrid products={visibleProducts} className="mt-6" />
    </div>
  );
}
