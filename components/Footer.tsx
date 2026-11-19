import Link from "next/link";
import { AtSign, Heart, Mail, MessageCircle } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { generalWhatsappMessage, whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/70 bg-white/60">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-1.5">
            <span className="text-2xl font-extrabold tracking-tight text-primary">sgifts</span>
            <Heart className="h-3.5 w-3.5 fill-primary-soft text-primary-soft" aria-hidden="true" />
          </div>
          <p className="mt-3 max-w-sm text-sm leading-7 text-ink/70">
            شموع وبرفانات وبوكسات هدايا بتتحضّر بحب. اختاري الهدية، واقعدي إنتِ مرتاحة — إحنا
            بنغلّفها ونكتب الكارت ونبعتها.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-extrabold text-ink">روابط سريعة</h2>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink/70 transition hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/cart" className="text-sm text-ink/70 transition hover:text-primary">
                السلة
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="text-sm text-ink/70 transition hover:text-primary">
                إتمام الطلب
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-extrabold text-ink">كلّمينا</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={whatsappLink(generalWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink/70 transition hover:text-primary"
              >
                <MessageCircle className="h-4 w-4 text-primary" strokeWidth={1.6} aria-hidden="true" />
                {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm text-ink/70 transition hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" strokeWidth={1.6} aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink/70 transition hover:text-primary"
              >
                <AtSign className="h-4 w-4 text-primary" strokeWidth={1.6} aria-hidden="true" />
                @sgifts
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 px-4 py-5">
        <p className="mx-auto max-w-6xl text-center text-xs text-ink/60">
          © {new Date().getFullYear()} sgifts — صُنع بحب في مصر ♡
        </p>
      </div>
    </footer>
  );
}
