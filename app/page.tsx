import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Heart, Sparkles } from "lucide-react";
import { Hero } from "@/components/Hero";
import { CategoryChips } from "@/components/CategoryChips";
import { ProductGrid } from "@/components/ProductGrid";
import { GiftBoxBuilder } from "@/components/GiftBoxBuilder";
import { Reveal } from "@/components/Reveal";
import { ProductArt } from "@/components/ProductArt";
import { getBestSellers, products } from "@/data/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "هدايا تخلّي يومها أحلى",
  description: site.description,
  alternates: { canonical: "/" },
};

const values = [
  {
    title: "تغليف بيهتم بالتفاصيل",
    body: "ورق ناعم، شريطة ساتان، وكارت مكتوب بإيد — كأنك غلّفتيها بنفسك.",
  },
  {
    title: "ريحة بتفضل معاها",
    body: "شموع بزيت عطري وفتيلة قطنية، وبرفانات خفيفة تفضل طول اليوم.",
  },
  {
    title: "توصيل آمن",
    body: "بنجهّز البوكس في نفس يوم الطلب ونغلّفه كويس عشان يوصل زي ما هو.",
  },
];

export default function HomePage() {
  const bestSellers = getBestSellers(4);
  const newArrivals = products.filter((product) => product.badge === "جديد").slice(0, 3);

  return (
    <>
      <Hero />

      <section className="mx-auto w-full max-w-6xl px-4 pt-10 sm:pt-14">
        <CategoryChips />
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pt-12 sm:pt-16">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-bold tracking-wide text-primary">مختارة بحب</p>
            <h2 className="mt-1 text-2xl font-extrabold text-ink sm:text-3xl">الأكثر طلبًا</h2>
            <p className="mt-2 text-sm text-ink/65">
              الهدايا اللي بتترجع تتطلب تاني — أغلب البنات بتبدأ من هنا.
            </p>
          </div>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-primary transition hover:border-primary-soft hover:bg-background"
          >
            شوفي الكل
            <ArrowLeft className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>

        <ProductGrid products={bestSellers} className="mt-6" />
      </section>

      <section id="gift-box" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 pt-16">
        <Reveal>
          <div className="rounded-hero border border-border/70 bg-surface p-6 shadow-soft sm:p-8 lg:p-10">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-bold tracking-wide text-primary">على مزاجك</p>
                <h2 className="mt-1 text-2xl font-extrabold text-ink sm:text-3xl">
                  صمّمي بوكس هديتك 🎁
                </h2>
                <p className="mt-2 max-w-lg text-sm leading-7 text-ink/65">
                  اختاري شمعة وبرفان، اكتبي كارت الإهداء، وإحنا نجهّز البوكس ونغلّفه. آخر خطوة
                  رسالة واتساب جاهزة بكل التفاصيل.
                </p>
              </div>
            </div>

            <GiftBoxBuilder />
          </div>
        </Reveal>
      </section>

      {newArrivals.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 pt-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold tracking-wide text-primary">وصل حديثًا</p>
              <h2 className="mt-1 text-2xl font-extrabold text-ink sm:text-3xl">جديد عندنا</h2>
            </div>
          </div>
          <ProductGrid products={newArrivals} className="mt-6" />
        </section>
      )}

      {/* قصة البراند */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-16">
        <Reveal>
          <div className="grid items-center gap-8 rounded-hero bg-white/60 p-6 sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:p-10">
            <div className="relative">
              <div className="mx-auto max-w-sm rotate-[-4deg] rounded-card bg-surface p-2.5 shadow-soft">
                <ProductArt
                  category="candles"
                  tileColor="#FDE3E8"
                  label="شمعة من مجموعة sgifts"
                  className="rounded-[20px]"
                />
              </div>
              <span className="absolute -bottom-3 start-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1.5 text-xs font-extrabold text-accent-ink shadow-soft">
                صُنع بإيد ♡
              </span>
            </div>

            <div>
              <p className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-primary">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
                حكايتنا
              </p>
              <h2 className="mt-2 text-2xl font-extrabold leading-snug text-ink sm:text-3xl">
                بدأنا بشمعة واحدة… وفضلنا نغلّف هدايا
              </h2>
              <p className="mt-4 text-sm leading-8 text-ink/70 sm:text-[15px]">
                sgifts بدأت من فكرة بسيطة: الهدية مش لازم تكون غالية عشان تفرّح، بس لازم تحس إن
                حد اختارها مخصوص ليها. عشان كده بنختار الريحة، بنجرّب الشمعة، وبنكتب الكارت
                بإيد واحدة واحدة.
              </p>
              <Link
                href="/story"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary-soft px-5 py-3 text-sm font-bold text-primary transition hover:bg-primary hover:text-white"
              >
                اقرأي قصتنا
                <ArrowLeft className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* قيم البراند */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 80}>
              <div className="h-full rounded-card border border-border/60 bg-surface p-5">
                <Heart className="h-5 w-5 text-primary-soft" strokeWidth={1.6} aria-hidden="true" />
                <h3 className="mt-3 text-base font-extrabold text-ink">{value.title}</h3>
                <p className="mt-1.5 text-sm leading-7 text-ink/65">{value.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
