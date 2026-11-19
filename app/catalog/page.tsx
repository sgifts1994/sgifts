import type { Metadata } from "next";
import { CatalogView } from "@/components/CatalogView";
import { isCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "الكتالوج",
  description:
    "كل شموع وبرفانات وبوكسات هدايا sgifts في مكان واحد. فلترة بالفئة وترتيب بالسعر عشان تلاقي الهدية المناسبة بسرعة.",
  alternates: { canonical: "/catalog" },
  openGraph: {
    title: "كتالوج sgifts",
    description: "شموع، برفانات، وبوكسات هدايا مغلّفة بحب.",
    url: "/catalog",
  },
};

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const initialCategory = isCategory(category) ? category : "all";

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pt-10 sm:pt-14">
      <header className="max-w-2xl">
        <p className="text-xs font-bold tracking-wide text-primary">الكتالوج</p>
        <h1 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">اختاري الهدية ♡</h1>
        <p className="mt-3 text-sm leading-7 text-ink/65 sm:text-[15px]">
          من شمعة صغيرة لليل هادي، لبوكس كامل جاهز يتقدم. كل حاجة هنا بتتغلّف وتتحضّر قبل
          التوصيل.
        </p>
      </header>

      <div className="mt-8">
        <CatalogView initialCategory={initialCategory} />
      </div>
    </div>
  );
}
