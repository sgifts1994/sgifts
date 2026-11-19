export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const site = {
  name: "sgifts",
  nameAr: "إس جيفتس",
  title: "sgifts | هدايا تخلّي يومها أحلى",
  shortTitle: "sgifts — هدايا تخلّي يومها أحلى",
  description:
    "شموع معطّرة، برفانات، وبوكسات هدايا مغلّفة بحب. من sgifts، كل هدية بتتحضّر بإيد وأنا وذوق عشان تخلّي يومها أحلى.",
  locale: "ar_EG",
  instagram: "https://instagram.com/sgifts",
  email: "hello@sgifts.shop",
  whatsappDisplay: "0100 000 0000",
  currency: "EGP",
  url: siteUrl,
};

export const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/catalog", label: "الكتالوج" },
  { href: "/story", label: "قصتنا" },
  { href: "/contact", label: "تواصل معنا" },
] as const;

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
