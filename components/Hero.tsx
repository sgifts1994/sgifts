import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { ProductArt } from "@/components/ProductArt";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-4 sm:pt-6">
      <div className="hero-gradient relative overflow-hidden rounded-hero px-6 py-10 shadow-soft sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.55),transparent_55%)]"
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-bold text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
              هدايا مغلّفة بحب من sgifts
            </span>

            <h1 className="mt-5 text-[34px] font-extrabold leading-[1.25] text-ink sm:text-5xl lg:text-[56px]">
              هدية تخلّي
              <br />
              يومها أحلى
            </h1>

            <p className="mt-4 max-w-md text-sm leading-7 text-ink/75 sm:text-base sm:leading-8">
              شموع معطّرة، برفانات ناعمة، وبوكسات بتتحضّر بإيد واحدة واحدة. اختاري حاجة تشبهها،
              وإحنا نكتب الكارت ونغلّفها وتبعتها على عنوانها.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/catalog"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-[#9a4468]"
              >
                تسوقي الآن
                <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </Link>
              <a
                href="#gift-box"
                className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-6 py-3.5 text-sm font-bold text-primary backdrop-blur transition hover:bg-white"
              >
                صمّمي بوكس هديتك
              </a>
            </div>

            <p className="mt-5 text-xs font-semibold text-ink/65 sm:text-sm">
              تغليف هدية مجاني · توصيل لكل المحافظات
            </p>
          </div>

          {/* ترتيب الشموع البصري */}
          <div
            aria-hidden="true"
            className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[400px]"
          >
            <div className="absolute inset-6 rounded-full bg-white/25 blur-2xl" />

            <div className="absolute start-0 top-8 w-[52%] -rotate-6 animate-float rounded-card bg-surface p-2 shadow-lift">
              <ProductArt
                category="candles"
                tileColor="#FFF0CF"
                label="شمعة ياسمين الليل"
                className="rounded-[20px]"
              />
            </div>

            <div className="absolute end-0 top-0 w-[45%] rotate-[8deg] animate-float-slow rounded-card bg-surface p-2 shadow-lift">
              <ProductArt
                category="perfumes"
                tileColor="#FDE3E8"
                variant={1}
                label="برفان نسمة ورد"
                className="rounded-[20px]"
              />
            </div>

            <div className="absolute bottom-0 end-6 w-[56%] -rotate-3 animate-float rounded-card bg-surface p-2 shadow-lift [animation-delay:1.2s]">
              <ProductArt
                category="boxes"
                tileColor="#E9E0F5"
                label="بوكس هدية بحب"
                className="rounded-[20px]"
              />
            </div>

            <div className="absolute bottom-10 start-0 flex items-center gap-2 rounded-full bg-surface/95 px-4 py-2.5 text-xs font-bold text-primary shadow-soft backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary-soft" />
              بوكس هدية جاهز
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
