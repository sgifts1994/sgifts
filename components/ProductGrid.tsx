import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import type { Product } from "@/data/products";
import { cn } from "@/lib/format";

interface ProductGridProps {
  products: Product[];
  className?: string;
}

export function ProductGrid({ products, className }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-card border border-dashed border-border bg-surface/70 px-6 py-16 text-center">
        <p className="text-lg font-extrabold text-ink">مفيش منتجات في القسم ده لسه</p>
        <p className="mt-2 text-sm text-ink/70">
          جرّبي تشوفي الكل، أو كلّمينا على واتساب ونساعدك تختاري.
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4",
        className,
      )}
    >
      {products.map((product, index) => (
        <Reveal key={product.id} delay={(index % 4) * 70} className="h-full">
          <ProductCard product={product} />
        </Reveal>
      ))}
    </div>
  );
}
