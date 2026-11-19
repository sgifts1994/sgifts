import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import { FavoritesProvider } from "@/components/FavoritesProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CartProvider } from "@/providers/CartProvider";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "800"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.title,
    template: "%s | sgifts",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "sgifts",
    "شموع معطرة",
    "برفانات نسائية",
    "بوكس هدايا",
    "هدايا عيد ميلاد",
    "هدايا تخرج",
    "هدايا نسائية",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1392,
        height: 752,
        alt: "بوكس هدايا من sgifts فيه شمعة وبرفان وروز",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/images/og-cover.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FFF4F2",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="min-h-screen bg-background font-sans text-ink">
        <FavoritesProvider>
          <CartProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:start-4 focus:z-[60] focus:rounded-full focus:bg-surface focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary focus:shadow-soft"
            >
              تخطّي إلى المحتوى
            </a>
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
            <WhatsAppButton />
          </CartProvider>
        </FavoritesProvider>
      </body>
    </html>
  );
}
