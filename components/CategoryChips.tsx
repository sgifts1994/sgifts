"use client";

import Link from "next/link";
import { Flame, Gift, LayoutGrid, PartyPopper, SprayCan } from "lucide-react";
import type { Category } from "@/data/products";
import { categories } from "@/data/products";
import { cn } from "@/lib/format";

type CategoryId = Category | "all";

const icons = {
  all: LayoutGrid,
  candles: Flame,
  perfumes: SprayCan,
  boxes: Gift,
  occasions: PartyPopper,
} satisfies Record<CategoryId, typeof LayoutGrid>;

interface CategoryChipsProps {
  active?: CategoryId;
  onSelect?: (category: CategoryId) => void;
  className?: string;
}

export function CategoryChips({ active = "all", onSelect, className }: CategoryChipsProps) {
  return (
    <div
      className={cn("flex flex-wrap items-center gap-2", className)}
      role={onSelect ? "group" : undefined}
      aria-label="فلاتر الفئات"
    >
      {categories.map((category) => {
        const Icon = icons[category.id];
        const isActive = active === category.id;
        const styles = cn(
          "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition",
          isActive
            ? "border-primary bg-primary text-white shadow-soft"
            : "border-border bg-surface text-ink/75 hover:border-primary-soft hover:text-primary",
        );

        const content = (
          <>
            <Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
            {category.label}
          </>
        );

        if (onSelect) {
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelect(category.id)}
              aria-pressed={isActive}
              className={styles}
            >
              {content}
            </button>
          );
        }

        return (
          <Link
            key={category.id}
            href={category.id === "all" ? "/catalog" : `/catalog?category=${category.id}`}
            aria-current={isActive ? "page" : undefined}
            className={styles}
          >
            {content}
          </Link>
        );
      })}
    </div>
  );
}
