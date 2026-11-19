"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Heart, Menu, MessageCircle, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { whatsappLink, generalWhatsappMessage } from "@/lib/whatsapp";
import { cn } from "@/lib/format";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`) || (href === "/catalog" && pathname.startsWith("/product"));
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-3 z-50 mx-auto w-full max-w-6xl px-4 pt-3">
      <nav
        aria-label="التنقّل الرئيسي"
        className="relative flex items-center justify-between gap-3 rounded-full border border-white/70 bg-surface/90 px-4 py-2.5 shadow-soft backdrop-blur-md md:px-6"
      >
        <Link
          href="/"
          className="flex items-center gap-1.5 rounded-full px-1 py-1"
          aria-label={`${site.name} — الصفحة الرئيسية`}
        >
          <span className="text-[22px] font-extrabold leading-none tracking-tight text-primary">
            sgifts
          </span>
          <Heart
            className="h-3.5 w-3.5 fill-primary-soft text-primary-soft"
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                className={cn(
                  "block rounded-full px-4 py-2 text-sm font-semibold text-ink/70 transition hover:bg-background hover:text-primary",
                  isActive(pathname, link.href) && "bg-background text-primary",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(generalWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-[#9a4468] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
            اطلبي على واتساب
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            className="grid h-10 w-10 place-items-center rounded-full bg-background text-primary transition hover:bg-primary-soft/30 md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
            )}
          </button>
        </div>

        {open && (
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-[calc(100%+8px)] rounded-[26px] border border-white/70 bg-surface p-3 shadow-soft md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(pathname, link.href) ? "page" : undefined}
                    className={cn(
                      "block rounded-2xl px-4 py-3 text-sm font-semibold text-ink/75 transition hover:bg-background hover:text-primary",
                      isActive(pathname, link.href) && "bg-background text-primary",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink(generalWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
              اطلبي على واتساب
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
