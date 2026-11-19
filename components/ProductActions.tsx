"use client";

import { useEffect, useState } from "react";
import { Heart, MessageCircle } from "lucide-react";
import { FavoriteButton } from "@/components/FavoriteButton";
import type { Product } from "@/data/products";
import { formatPrice, cn } from "@/lib/format";
import { productWhatsappMessage, whatsappLink } from "@/lib/whatsapp";

export function ProductActions({ product }: { product: Product }) {
  const [href, setHref] = useState(() =>
    whatsappLink(
      productWhatsappMessage({ name: product.name, price: formatPrice(product.price) }),
    ),
  );

  useEffect(() => {
    const productUrl = `${window.location.origin}/product/${product.slug}`;
    setHref(
      whatsappLink(
        productWhatsappMessage({
          name: product.name,
          price: formatPrice(product.price),
          url: productUrl,
        }),
      ),
    );
  }, [product.name, product.price, product.slug]);

  return (
    <div className="mt-7">
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-bold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-[#9a4468] sm:flex-none sm:min-w-[240px]",
            !product.inStock && "pointer-events-none opacity-50",
          )}
          aria-disabled={!product.inStock}
        >
          <MessageCircle className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
          {product.inStock ? "اطلبي على واتساب" : "غير متوفر حاليًا"}
        </a>

        <FavoriteButton
          productId={product.id}
          productName={product.name}
          className="relative h-12 w-12 border-border bg-surface hover:bg-background"
        />
      </div>

      <p className="mt-3 flex items-center gap-1.5 text-xs leading-6 text-ink/60">
        <Heart className="h-3.5 w-3.5 text-primary-soft" strokeWidth={1.8} aria-hidden="true" />
        الرسالة بتوصل جاهزة باسم المنتج ولينك الصفحة — مش محتاجة تكتبي حاجة.
      </p>
    </div>
  );
}
