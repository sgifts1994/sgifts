import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Heart, Leaf, Package, Sparkles } from "lucide-react";
import { ProductArt } from "@/components/ProductArt";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "قصتنا",
  description:
    "حكاية sgifts: بدأنا بشمعة واحدة وحلم إن كل هدية تطلع من عندنا تحس إن حد اختارها مخصوص لصاحبتها.",
  alternates: { canonical: "/story" },
  openGraph: {
    title: "قصتنا | sgifts",
    description: "شمعة واحدة، فكرة بسيطة، وحب للتفاصيل.",
    url: "/story",
    images: [{ url: "/images/og-cover.jpg", width: 1392, height: 752, alt: "هدايا sgifts" }],
  },
};

const steps = [
  {
    title: "بنختار الريحة الأول",
    body: "قبل أي شكل أو تغليف، بنجرّب الشمعة والبرفان. الريحة اللي مش هتحبيها في أوضتك مش هتطلع لأي حد.",
  },
  {
    title: "بنجرّب الشكل والحجم",
    body: "برطمان مريح في الإيد، فتيلة بتولّع بسهولة، وبوكس بيفتح من غير ما يتخرب. التفاصيل دي بتفرق.",
  },
  {
    title: "بنغلّف كأنها هدية لأختي",
    body: "شريطة ساتان، ورق ناعم، وكارت بنكتبه بإيدنا. بنبعت صورة البوكس قبل التوصيل لو حبيتي.",
  },
];

export default function StoryPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 pt-10 sm:pt-14">
      <header className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-4 py-1.5 text-xs font-bold text-primary">
          <Heart className="h-3.5 w-3.5 fill-primary-soft text-primary-soft" aria-hidden="true" />
          من قلب البيت
        </span>
        <h1 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">قصتنا ♡</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-8 text-ink/70 sm:text-base">
          إحنا مش متجر كبير، إحنا بنات زيكن بنحب الهدايا اللي بتتحضّر مخصوص. الفرق إننا بنغلّفها
          لغيرنا كل يوم.
        </p>
      </header>

      <Reveal className="mt-10">
        <div className="hero-gradient relative overflow-hidden rounded-hero px-6 py-10 shadow-soft sm:px-10 sm:py-14">
          <div className="grid items-center gap-8 sm:grid-cols-[0.9fr_1.1fr]">
            <div className="relative mx-auto w-full max-w-[240px] -rotate-3 rounded-card bg-surface p-2 shadow-lift">
              <ProductArt
                category="candles"
                tileColor="#FFF0CF"
                label="أول شمعة من sgifts"
                className="rounded-[20px]"
              />
            </div>
            <blockquote className="text-lg font-extrabold leading-9 text-ink sm:text-xl sm:leading-10">
              «الهدية مش لازم تكون غالية عشان تفرّح… بس لازم تحس إن حد اختارها مخصوص ليها.»
              <footer className="mt-3 text-xs font-semibold text-ink/60">
                — أول سطر كتبناه في دفتر البراند
              </footer>
            </blockquote>
          </div>
        </div>
      </Reveal>

      <section className="mx-auto mt-14 max-w-2xl space-y-5 text-sm leading-8 text-ink/75 sm:text-[15px] sm:leading-9">
        <h2 className="text-2xl font-extrabold text-ink">بدأت بشمعة واحدة</h2>
        <p>
          في أول شتاء، عملنا شمعة واحدة صغيرة لصاحبتنا. الشمعة خلصت، بس الكارت اللي كتبناه ظل
          على التسريحة سنين. وقتها فهمنا إن اللي بيفضل في الذاكرة هو الإحساس، مش الهدية نفسها.
        </p>
        <p>
          بعدها بقينا نجمع الريحات: ياسمين بلدي، فانيلا دافية، مسك ناعم. نجرّب كل شمعة لأسبوع
          في بيتنا قبل ما نعرضها. اللي مايعجبنا كفاية، مش بنبيعه.
        </p>
        <p>
          النهارده عندنا شموع وبرفانات وبوكسات هدايا، وكل بوكس بيتجهّز بإيد واحدة: نختار الشمعة،
          نغلّف، نكتب الكارت، ونبعت صورة قبل التوصيل. الحاجات دي هي اللي بتخلي sgifts مختلفة —
          مش العدد الكبير، بس الحب في التفاصيل.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-center text-2xl font-extrabold text-ink">إزاي بنختار كل حاجة</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 80}>
              <div className="h-full rounded-card border border-border/60 bg-surface p-5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-sm font-extrabold text-primary">
                  {index + 1}
                </span>
                <h3 className="mt-3 text-base font-extrabold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink/65">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        <div className="rounded-card bg-white/70 p-5 text-center">
          <Sparkles className="mx-auto h-5 w-5 text-primary" strokeWidth={1.6} aria-hidden="true" />
          <h2 className="mt-3 text-sm font-extrabold text-ink">ريحة قبل الشكل</h2>
          <p className="mt-1.5 text-xs leading-6 text-ink/65">مفيش منتج بيدخل من غير ما نجرّبه.</p>
        </div>
        <div className="rounded-card bg-white/70 p-5 text-center">
          <Package className="mx-auto h-5 w-5 text-primary" strokeWidth={1.6} aria-hidden="true" />
          <h2 className="mt-3 text-sm font-extrabold text-ink">تغليف آمن</h2>
          <p className="mt-1.5 text-xs leading-6 text-ink/65">بنجهّز البوكس كأنه هيتقدم قدامنا.</p>
        </div>
        <div className="rounded-card bg-white/70 p-5 text-center">
          <Leaf className="mx-auto h-5 w-5 text-primary" strokeWidth={1.6} aria-hidden="true" />
          <h2 className="mt-3 text-sm font-extrabold text-ink">حاجات بتعاد</h2>
          <p className="mt-1.5 text-xs leading-6 text-ink/65">برطمانات الشموع تتستخدم تاني في البيت.</p>
        </div>
      </section>

      <section className="mt-12 rounded-hero border border-border/70 bg-surface p-8 text-center shadow-soft">
        <h2 className="text-2xl font-extrabold text-ink">عايزة تشوفي بنفسك؟</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-ink/65">
          الكتالوج فيه مجموعة الشتاء والصيف، وبوكسات جاهزة. ولو لسه محتارة، كلّمينا وإحنا نقترح.
        </p>
        <Link
          href="/catalog"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#9a4468]"
        >
          شوفي الكتالوج
          <ArrowLeft className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
