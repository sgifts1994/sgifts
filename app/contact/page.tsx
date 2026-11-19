import type { Metadata } from "next";
import Link from "next/link";
import { AtSign, Clock, Mail, MapPin, MessageCircle, Truck } from "lucide-react";
import { site } from "@/lib/site";
import { generalWhatsappMessage, whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description:
    "كلّمينا على واتساب لو محتاجة مساعدة تختاري هدية، أو عندك سؤال عن التوصيل والتغليف. بنرد بسرعة.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "تواصل معنا | sgifts",
    description: "واتساب، إيميل وإنستجرام — إحنا قريبين.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 pt-10 sm:pt-14">
      <header className="text-center">
        <p className="text-xs font-bold tracking-wide text-primary">تواصل معنا</p>
        <h1 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">كلّمينا ✨</h1>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-8 text-ink/70">
          محتارة تختاري هدية؟ أو عندك سؤال عن التغليف والتوصيل؟ ابعتيلنا رسالة ورد عليك في أسرع
          وقت — بنحب نساعد في الاختيار.
        </p>
      </header>

      <section className="mt-8 rounded-hero border border-border/70 bg-surface p-6 shadow-soft sm:p-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-extrabold text-ink">واتساب أسرع طريقة</h2>
            <p className="mt-1 text-sm text-ink/65">
              ابعتيلنا صورة أو اسم المنتج وإحنا نكمل معاكي.
            </p>
          </div>
          <a
            href={whatsappLink(generalWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#9a4468]"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
            افتحي واتساب
          </a>
        </div>

        <div className="mt-4 grid gap-2.5 border-t border-border/60 pt-4 text-sm text-ink/70 sm:grid-cols-2">
          <p className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-primary" strokeWidth={1.6} aria-hidden="true" />
            {site.whatsappDisplay}
          </p>
          <p className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" strokeWidth={1.6} aria-hidden="true" />
            السبت – الخميس، ١١ ص – ٨ م
          </p>
        </div>
      </section>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <a
          href={`mailto:${site.email}`}
          className="group rounded-card border border-border/60 bg-white/70 p-5 transition hover:border-primary-soft hover:bg-surface"
        >
          <Mail className="h-5 w-5 text-primary" strokeWidth={1.6} aria-hidden="true" />
          <h2 className="mt-3 text-base font-extrabold text-ink">إيميل</h2>
          <p className="mt-1 text-sm text-ink/65">{site.email}</p>
          <span className="mt-2 inline-block text-xs font-semibold text-primary">
            مناسب للطلبات الكبيرة والتوزيعات
          </span>
        </a>

        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-card border border-border/60 bg-white/70 p-5 transition hover:border-primary-soft hover:bg-surface"
        >
          <AtSign className="h-5 w-5 text-primary" strokeWidth={1.6} aria-hidden="true" />
          <h2 className="mt-3 text-base font-extrabold text-ink">إنستجرام</h2>
          <p className="mt-1 text-sm text-ink/65">@sgifts</p>
          <span className="mt-2 inline-block text-xs font-semibold text-primary">
            صور البوكسات الجديدة أول بأول
          </span>
        </a>

        <div className="rounded-card border border-border/60 bg-white/70 p-5">
          <Truck className="h-5 w-5 text-primary" strokeWidth={1.6} aria-hidden="true" />
          <h2 className="mt-3 text-base font-extrabold text-ink">التوصيل</h2>
          <p className="mt-1 text-sm leading-7 text-ink/65">
            القاهرة والجيزة خلال ٢٤–٤٨ ساعة، وباقي المحافظات ٣–٥ أيام عمل.
          </p>
        </div>

        <div className="rounded-card border border-border/60 bg-white/70 p-5">
          <MapPin className="h-5 w-5 text-primary" strokeWidth={1.6} aria-hidden="true" />
          <h2 className="mt-3 text-base font-extrabold text-ink">الاستلام</h2>
          <p className="mt-1 text-sm leading-7 text-ink/65">
            بنجهّز الطلبات من البيت في القاهرة. الاستلام الشخصي متاح بالتنسيق على واتساب.
          </p>
        </div>
      </div>

      <section className="mt-8 rounded-card bg-primary/8 px-6 py-6 text-center">
        <p className="text-sm font-semibold text-ink/75">
          عايزة تشوفي التصاميم الجاهزة الأول؟
        </p>
        <Link
          href="/catalog"
          className="mt-3 inline-flex rounded-full bg-surface px-5 py-2.5 text-sm font-bold text-primary shadow-soft transition hover:bg-white"
        >
          روحي للكتالوج
        </Link>
      </section>
    </div>
  );
}
