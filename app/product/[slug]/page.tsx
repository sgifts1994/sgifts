import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Clock, Heart, Leaf, Package, Sparkles, Wind } from "lucide-react";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductActions } from "@/components/ProductActions";
import { ProductGrid } from "@/components/ProductGrid";
import { Reveal } from "@/components/Reveal";
import {
  categoryLabel,
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";
import { formatPrice } from "@/lib/format";
import { absoluteUrl, site } from "@/lib/site";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "المنتج غير موجود" };
  }

  const description = `${product.description} — ${formatPrice(product.price)} من sgifts.`;

  return {
    title: product.name,
    description,
    alternates: { canonical: `/product/${product.slug}` },
    openGraph: {
      type: "website",
      title: `${product.name} | sgifts`,
      description,
      url: `/product/${product.slug}`,
      images: [{ url: "/images/og-cover.jpg", width: 1392, height: 752, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | sgifts`,
      description,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getRelatedProducts(product, 3);
  const notes = [
    { label: "المقدمة", value: product.scentNotes.top, Icon: Sparkles },
    { label: "القلب", value: product.scentNotes.heart, Icon: Heart },
    { label: "القاعدة", value: product.scentNotes.base, Icon: Leaf },
  ].filter((note) => note.value);

  const burnLabel = product.category === "perfumes" ? "مدة الثبات" : "مدة الاشتعال";

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    sku: product.id,
    category: categoryLabel[product.category],
    image: [absoluteUrl("/images/og-cover.jpg")],
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/product/${product.slug}`),
      priceCurrency: "EGP",
      price: product.price,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pt-8 sm:pt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <nav aria-label="مسار التصفّح" className="mb-5 flex items-center gap-1 text-xs text-ink/60">
        <Link href="/" className="transition hover:text-primary">
          الرئيسية
        </Link>
        <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
        <Link href="/catalog" className="transition hover:text-primary">
          الكتالوج
        </Link>
        <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
        <span className="text-ink/80">{product.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <ProductGallery product={product} />

        <div className="lg:pt-2">
          <p className="text-xs font-bold tracking-wide text-primary">
            {categoryLabel[product.category]}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-extrabold leading-snug text-ink sm:text-4xl">
              {product.name}
            </h1>
            {product.badge && (
              <span
                className={
                  product.badge === "الأكثر طلبًا"
                    ? "rounded-full bg-accent px-3 py-1 text-[11px] font-extrabold text-accent-ink"
                    : "rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-extrabold text-primary"
                }
              >
                {product.badge}
              </span>
            )}
          </div>

          <p className="mt-3 text-xl font-extrabold text-primary">{formatPrice(product.price)}</p>

          <p className="mt-4 text-sm leading-8 text-ink/75 sm:text-[15px]">{product.description}</p>

          <dl className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-border/70 bg-surface px-4 py-3">
              <dt className="flex items-center gap-1.5 text-[11px] font-semibold text-ink/60">
                <Package className="h-3.5 w-3.5 text-primary" strokeWidth={1.6} aria-hidden="true" />
                المقاس
              </dt>
              <dd className="mt-1 text-sm font-bold text-ink">{product.size}</dd>
            </div>
            <div className="rounded-2xl border border-border/70 bg-surface px-4 py-3">
              <dt className="flex items-center gap-1.5 text-[11px] font-semibold text-ink/60">
                <Clock className="h-3.5 w-3.5 text-primary" strokeWidth={1.6} aria-hidden="true" />
                {burnLabel}
              </dt>
              <dd className="mt-1 text-sm font-bold text-ink">{product.burnTime}</dd>
            </div>
          </dl>

          {notes.length > 0 && (
            <section aria-labelledby="scent-title" className="mt-6 rounded-card bg-white/60 p-5">
              <h2
                id="scent-title"
                className="flex items-center gap-2 text-sm font-extrabold text-ink"
              >
                <Wind className="h-4 w-4 text-primary" strokeWidth={1.6} aria-hidden="true" />
                هرم الرائحة
              </h2>
              <ul className="mt-4 space-y-3">
                {notes.map(({ label, value, Icon }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold text-ink/55">{label}</span>
                    <span className="text-sm font-semibold text-ink">{value}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <ProductActions product={product} />

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink/60">
            <li>تغليف هدية مجاني</li>
            <li>·</li>
            <li>كارت إهداء بخط إيدك</li>
            <li>·</li>
            <li>توصيل لكل المحافظات</li>
          </ul>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-xl font-extrabold text-ink sm:text-2xl">ممكن يعجبك كمان</h2>
        <ProductGrid products={related} className="mt-5" />
      </section>

      <Reveal className="mt-10">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-card bg-primary/8 px-6 py-5">
          <p className="text-sm font-semibold text-ink/75">
            محتاجة مساعدة تختاري؟ قوليلنا لمين الهدية وإحنا نقترح.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-surface px-5 py-2.5 text-sm font-bold text-primary shadow-soft transition hover:bg-white"
          >
            تواصلي معنا
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
