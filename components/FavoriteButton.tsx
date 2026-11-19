"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/components/FavoritesProvider";
import { cn } from "@/lib/format";

interface FavoriteButtonProps {
  productId: string;
  productName: string;
  className?: string;
}

export function FavoriteButton({ productId, productName, className }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(productId);

  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={
        active ? `إزالة ${productName} من المفضلة` : `إضافة ${productName} إلى المفضلة`
      }
      onClick={() => toggleFavorite(productId)}
      className={cn(
        "z-20 grid h-10 w-10 place-items-center rounded-full border border-white/70 bg-surface/85 text-primary backdrop-blur transition hover:scale-105 hover:bg-surface hover:shadow-soft",
        active && "border-primary-soft bg-surface",
        className,
      )}
    >
      <Heart
        className={cn("h-[18px] w-[18px] transition", active && "fill-primary")}
        strokeWidth={1.6}
        aria-hidden="true"
      />
    </button>
  );
}
