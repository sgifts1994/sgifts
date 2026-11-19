import type { Category, TileColor } from "@/data/products";
import { cn } from "@/lib/format";

interface ProductArtProps {
  category: Category;
  tileColor: TileColor;
  variant?: number;
  className?: string;
  label?: string;
}

/**
 * صور المنتجات المؤقتة: بلاطة باستيل + رسم SVG أنيق.
 * أول ما تتوفر صور حقيقية: حط مساراتها في images[] وهيتحول الكارت لـ next/image.
 */
export function ProductArt({
  category,
  tileColor,
  variant = 0,
  className,
  label,
}: ProductArtProps) {
  const transforms = [
    "",
    "translate(-7 3) rotate(-4 100 100)",
    "translate(6 -2) scale(1.05)",
  ];

  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      className={cn("relative aspect-square w-full overflow-hidden", className)}
      style={{ backgroundColor: tileColor }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.75),transparent_58%)]" />
      <svg
        viewBox="0 0 200 200"
        aria-hidden="true"
        focusable="false"
        className="absolute inset-0 h-full w-full"
      >
        <g transform={transforms[variant % transforms.length]}>
          <ellipse cx="100" cy="171" rx="34" ry="6" fill="#4A2C3A" opacity="0.08" />

          {category === "candles" && (
            <g>
              <circle cx="100" cy="69" r="30" fill="#FFD9A0" opacity="0.2" />
              <circle cx="100" cy="69" r="19" fill="#FFD9A0" opacity="0.28" />
              <rect
                x="64"
                y="98"
                width="72"
                height="66"
                rx="14"
                fill="#FFFFFF"
                fillOpacity="0.62"
                stroke="#B0527A"
                strokeOpacity="0.22"
                strokeWidth="1.5"
              />
              <ellipse cx="100" cy="100" rx="36" ry="7" fill="#FFF7EE" fillOpacity="0.9" />
              <rect x="60" y="90" width="80" height="9" rx="4.5" fill="#B0527A" opacity="0.78" />
              <line x1="100" y1="90" x2="100" y2="81" stroke="#4A2C3A" strokeOpacity="0.45" strokeWidth="2" strokeLinecap="round" />
              <ellipse cx="100" cy="69" rx="9" ry="15" fill="#F6A96B" />
              <ellipse cx="100" cy="71" rx="5" ry="9" fill="#FFF3C4" />
              <rect x="84" y="124" width="32" height="11" rx="5.5" fill="#B0527A" opacity="0.14" />
              <path d="M100 129.5c-2.4-2.1-6-4.4-6-7.2 0-1.9 1.4-3.3 3.1-3.3 1.1 0 2.1.6 2.9 1.6.8-1 1.8-1.6 2.9-1.6 1.7 0 3.1 1.4 3.1 3.3 0 2.8-3.6 5.1-6 7.2Z" fill="#B0527A" opacity="0.45" />
            </g>
          )}

          {category === "perfumes" && (
            <g>
              <rect
                x="70"
                y="96"
                width="60"
                height="70"
                rx="16"
                fill="#FFFFFF"
                fillOpacity="0.62"
                stroke="#B0527A"
                strokeOpacity="0.22"
                strokeWidth="1.5"
              />
              <rect x="76" y="126" width="48" height="34" rx="11" fill="#F3A9B8" opacity="0.55" />
              <rect
                x="92"
                y="80"
                width="16"
                height="18"
                rx="4"
                fill="#FFFFFF"
                fillOpacity="0.72"
                stroke="#B0527A"
                strokeOpacity="0.2"
              />
              <rect x="86" y="56" width="28" height="27" rx="7" fill="#B0527A" opacity="0.82" />
              <rect x="86" y="72" width="28" height="4" rx="2" fill="#FFFFFF" opacity="0.35" />
              <rect x="87" y="108" width="26" height="7" rx="3.5" fill="#B0527A" opacity="0.18" />
              <rect x="79" y="110" width="5" height="26" rx="2.5" fill="#FFFFFF" opacity="0.55" />
            </g>
          )}

          {category === "boxes" && (
            <g>
              <rect
                x="60"
                y="104"
                width="80"
                height="58"
                rx="12"
                fill="#FFFFFF"
                fillOpacity="0.62"
                stroke="#B0527A"
                strokeOpacity="0.2"
                strokeWidth="1.5"
              />
              <rect x="54" y="86" width="92" height="22" rx="9" fill="#B0527A" opacity="0.8" />
              <rect x="54" y="90" width="92" height="10" fill="#F3A9B8" opacity="0.5" />
              <rect x="94" y="86" width="12" height="76" fill="#F3A9B8" opacity="0.9" />
              <path d="M100 86c-13-14-30-7-22 5 5 7 16 3 22-5Z" fill="#F9C9D3" />
              <path d="M100 86c13-14 30-7 22 5-5 7-16 3-22-5Z" fill="#F3A9B8" />
              <circle cx="100" cy="86" r="5" fill="#B0527A" />
            </g>
          )}

          <g fill="#FFFFFF" opacity="0.9">
            <path d="M148 46l1.7 4.6 4.6 1.7-4.6 1.7-1.7 4.6-1.7-4.6-4.6-1.7 4.6-1.7 1.7-4.6Z" />
            <path d="M56 62l1.2 3.3 3.3 1.2-3.3 1.2-1.2 3.3-1.2-3.3-3.3-1.2 3.3-1.2 1.2-3.3Z" opacity="0.8" />
          </g>
        </g>
      </svg>
    </div>
  );
}
