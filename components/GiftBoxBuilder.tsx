"use client";

import { useMemo, useState } from "react";
import { Gift, MessageCircle, PenLine } from "lucide-react";
import { ProductArt } from "@/components/ProductArt";
import { products } from "@/data/products";
import { formatPrice, cn } from "@/lib/format";
import { whatsappLink } from "@/lib/whatsapp";

const candles = products.filter((product) => product.category === "candles");
const perfumes = products.filter((product) => product.category === "perfumes");

function OptionButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "flex w-full items-center gap-3 rounded-2xl border p-2.5 text-start transition",
        selected
          ? "border-primary bg-primary/[0.06] ring-1 ring-primary"
          : "border-border/80 bg-surface hover:border-primary-soft",
      )}
    >
      {children}
    </button>
  );
}

export function GiftBoxBuilder() {
  const [candleId, setCandleId] = useState(candles[1]?.id ?? candles[0].id);
  const [perfumeId, setPerfumeId] = useState(perfumes[0]?.id ?? perfumes[0].id);
  const [cardText, setCardText] = useState("");

  const candle = candles.find((product) => product.id === candleId) ?? candles[0];
  const perfume = perfumes.find((product) => product.id === perfumeId) ?? perfumes[0];
  const total = candle.price + perfume.price;

  const message = useMemo(
    () =>
      [
        "مرحبًا sgifts ✨",
        "عايزة أصمّم بوكس هدية:",
        `🕯️ الشمعة: ${candle.name} (${formatPrice(candle.price)})`,
        `🌸 البرفان: ${perfume.name} (${formatPrice(perfume.price)})`,
        cardText.trim() ? `💌 كارت الإهداء: "${cardText.trim()}"` : "💌 كارت الإهداء: بدون نص",
        `الإجمالي التقريبي: ${formatPrice(total)}`,
        "ممكن تأكدولي التفاصيل والتوصيل؟",
      ].join("\n"),
    [candle, perfume, cardText, total],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
      <div className="space-y-7">
        <div>
          <h3 className="flex items-center gap-2 text-sm font-extrabold text-ink">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/10 text-xs text-primary">
              ١
            </span>
            اختاري الشمعة
          </h3>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {candles.map((product) => (
              <OptionButton
                key={product.id}
                selected={product.id === candle.id}
                onClick={() => setCandleId(product.id)}
              >
                <span className="h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                  <ProductArt
                    category={product.category}
                    tileColor={product.tileColor}
                    label={product.name}
                    className="h-14 w-14"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[13px] font-bold text-ink">
                    {product.name}
                  </span>
                  <span className="mt-0.5 block text-xs font-semibold text-primary">
                    {formatPrice(product.price)}
                  </span>
                </span>
              </OptionButton>
            ))}
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-sm font-extrabold text-ink">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/10 text-xs text-primary">
              ٢
            </span>
            اختاري البرفان
          </h3>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {perfumes.map((product) => (
              <OptionButton
                key={product.id}
                selected={product.id === perfume.id}
                onClick={() => setPerfumeId(product.id)}
              >
                <span className="h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                  <ProductArt
                    category={product.category}
                    tileColor={product.tileColor}
                    label={product.name}
                    className="h-14 w-14"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[13px] font-bold text-ink">
                    {product.name}
                  </span>
                  <span className="mt-0.5 block text-xs font-semibold text-primary">
                    {formatPrice(product.price)}
                  </span>
                </span>
              </OptionButton>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="gift-card" className="flex items-center gap-2 text-sm font-extrabold text-ink">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/10 text-xs text-primary">
              ٣
            </span>
            اكتبي كارت الإهداء
          </label>
          <div className="relative mt-3">
            <PenLine
              className="pointer-events-none absolute end-4 top-3.5 h-4 w-4 text-ink-muted"
              strokeWidth={1.6}
              aria-hidden="true"
            />
            <textarea
              id="gift-card"
              value={cardText}
              onChange={(event) => setCardText(event.target.value.slice(0, 160))}
              rows={3}
              maxLength={160}
              placeholder="مثال: كل سنة وأنتِ أحلى ♡"
              className="w-full resize-none rounded-2xl border border-border bg-background/60 px-4 py-3 pe-11 text-sm text-ink placeholder:text-ink/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <p className="mt-1.5 text-xs text-ink/60">{cardText.length} / 160</p>
        </div>
      </div>

      {/* معاينة البوكس */}
      <aside className="rounded-card border border-border/70 bg-background/70 p-5">
        <div className="flex items-center gap-2 text-sm font-extrabold text-ink">
          <Gift className="h-4 w-4 text-primary" strokeWidth={1.6} aria-hidden="true" />
          بوكسك بيتبني دلوقتي
        </div>

        <div className="mt-4 rounded-[20px] bg-surface p-4 shadow-[0_6px_18px_rgba(176,82,122,0.08)]">
          <ul className="space-y-3 text-sm">
            <li className="flex items-start justify-between gap-3">
              <span className="text-ink/70">شمعة</span>
              <span className="text-end font-semibold text-ink">{candle.name}</span>
            </li>
            <li className="flex items-start justify-between gap-3">
              <span className="text-ink/70">برفان</span>
              <span className="text-end font-semibold text-ink">{perfume.name}</span>
            </li>
            <li className="flex items-start justify-between gap-3">
              <span className="shrink-0 text-ink/70">كارت</span>
              <span className="text-end text-ink/80">
                {cardText.trim() ? `"${cardText.trim()}"` : "بدون نص — تقدري تكتبيه بعدين"}
              </span>
            </li>
          </ul>

          <div className="mt-4 flex items-center justify-between border-t border-border/70 pt-4">
            <span className="text-sm font-semibold text-ink/70">الإجمالي التقريبي</span>
            <span className="text-lg font-extrabold text-primary">{formatPrice(total)}</span>
          </div>
        </div>

        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#9a4468]"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
          ابعتلي البوكس على واتساب
        </a>
        <p className="mt-3 text-center text-[11px] leading-5 text-ink/55">
          مفيش دفع على الموقع — بنكمل التفاصيل والتوصيل معاكي على واتساب.
        </p>
      </aside>
    </div>
  );
}
