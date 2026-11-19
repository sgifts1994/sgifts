# sgifts

نواة موقع براند **sgifts** — شموع، برفانات، وبوكسات هدايا. الكتالوج شغال بالكامل، والطلب بيتم
على واتساب. البنية جاهزة للتحويل لمتجر كامل (سلة + دفع) من غير إعادة بناء.

## التشغيل

```bash
bun install
bun run dev
```

افتحي `http://localhost:3000`.

أوامر إضافية:

```bash
bun run build      # بناء للإنتاج
bun run start      # تشغيل نسخة البناء
bun run typecheck  # فحص TypeScript
```

**مجلد `components/`** فيه الأجزاء المقسّمة (Navbar, Hero, CategoryChips, ProductCard,
ProductGrid, GiftBoxBuilder, WhatsAppButton, Footer) و**`data/products.ts`** هو مصدر بيانات
المنتجات الوحيد.

## تغيير رقم واتساب

الرقم كله بيتقرأ من متغيّر واحد في `.env.local`:

```env
NEXT_PUBLIC_WA_NUMBER=201012345678
```

- الصيغة الدولية بدون `+` وبدون مسافات أو شرطات (مثال مصر: `20` + الرقم بدون الصفر).
- الرقم بيستخدم في: الزر العائم، زر الطلب في صفحة المنتج، وبوكس الهدية.
- بعد تغيير `.env.local` أوقفي السيرفر وشغّلي `bun run dev` تاني.
- لو الرقم فاضي، روابط واتساب هتفتح بدون رقم محدد وسيبت لك اختيار جهة الاتصال.

لينك الموقع (مهم للـ SEO وخريطة الموقع) في نفس الملف:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

وعلى منصات النشر، ضيفي المتغيّرين في إعدادات البيئة بدل الملف.

## إضافة منتج جديد

افتحي `data/products.ts` وضيفي عنصر في مصفوفة `products` بنفس الشكل:

```ts
{
  id: "p-13",
  slug: "candle-new-scent",       // بيظهر في الرابط /product/candle-new-scent
  name: "شمعة ريحة جديدة",
  category: "candles",             // candles | perfumes | boxes | occasions
  price: 350,
  images: [],                      // سيبيها فاضية لرسم الـ SVG المؤقت
  description: "وصف قصير ودافي للمنتج…",
  scentNotes: { top: "برغموت", heart: "ورد", base: "مسك" },
  size: "٢٠٠ جم",
  burnTime: "٤٥ ساعة",
  badge: "جديد",                   // "جديد" | "الأكثر طلبًا" | null
  inStock: true,
  tileColor: "#FDE3E8",            // #FDE3E8 | #FFF0CF | #E9E0F5 | #DFF1EA
}
```

بعد الإضافة: صفحة المنتج، الكتالوج، الأكثر طلبًا، وخريطة الموقع بتتحدّث تلقائيًا.

### إضافة صور حقيقية

حطي الصور في `public/images/products/` واملئي المصفوفة:

```ts
images: ["/images/products/candle-new-scent-1.jpg", "/images/products/candle-new-scent-2.jpg"],
```

أول صورة بتظهر في الكارت والجولة، وباقي الصور في المصغّرات. لو الصور من دومين خارجي، ضيفيه
في `next.config.ts` تحت `images.remotePatterns`. (لحد ما تتوفر الصور، الموقع بيعرض رسم SVG
باستيل أنيق بدل الصورة.)

### ترتيب المنتجات والأكثر طلبًا

- `getBestSellers()` بيرجّع المنتجات اللي عليها بادج `"الأكثر طلبًا"` — زوّدي البادج لأي منتج
  عايزة يظهر في الرئيسية.
- `getRelatedProducts()` بتقترح منتجات من نفس الفئة أولًا في صفحة المنتج.

## النشر على GitHub Pages

الموقع ثابت بالكامل (static export) وبيتنشر تلقائيًا مع كل push على `main` عن طريق
`.github/workflows/deploy.yml`:

1. الـ workflow بيشغّل `bun install` ثم `bun run build` بمتغيّر `GITHUB_PAGES=true`،
   وبيرفع مجلد `out/` كـ artifact.
2. `basePath` و`assetPrefix` بيتفعّلوا وقت البناء بس، عشان الموقع يخدم من
   `https://<user>.github.io/sgifts/`. لو غيّرتي اسم الريبو، عدّلي `repoName` في
   `next.config.ts` و`NEXT_PUBLIC_SITE_URL` في الـ workflow.
3. محليًا `bun run dev` بيفضل على `http://localhost:3000` من غير `/sgifts`.

**رقم الواتساب:** Settings → Secrets and variables → Actions → تبويب Variables → أضيفي
`NEXT_PUBLIC_WA_NUMBER` بالصيغة الدولية بدون `+` (مثال: `201012345678`).

**تنبيه:** `output: "export"` معناه مفيش سيرفر Next شغّال، فالـ API routes والـ `next/image`
المحسّن مش متاحين. لو هتحوّلي الموقع لمتجر بسلة ودفع حقيقية، النشر على Vercel أنسب —
ساعتها شيلي `output: "export"` من `next.config.ts`.

## الصفحات

| الصفحة | المسار | المحتوى |
| --- | --- | --- |
| الرئيسية | `/` | هيرو، فلتر الفئات، الأكثر طلبًا، مصمّم البوكس، قصة البراند |
| الكتالوج | `/catalog` | شبكة كل المنتجات + فلتر الفئات + ترتيب بالسعر |
| المنتج | `/product/[slug]` | صور، وصف، هرم الرائحة، المقاس، مدة الاشتعال، طلب واتساب |
| قصتنا | `/story` | حكاية البراند وإزاي بنختار المنتجات |
| تواصل معنا | `/contact` | واتساب، إيميل، إنستجرام، التوصيل |
| السلة | `/cart` | placeholder لمتجر لاحق |
| إتمام الطلب | `/checkout` | placeholder لمتجر لاحق |

## المفضلة

قلب على كل كارت وفي صفحة المنتج، بيتخزن في `localStorage` تحت المفتاح
`sgifts:favorites:v1` — واجهة فقط بدون حساب مستخدم.

## التحويل لمتجر كامل لاحقًا

- `providers/CartProvider.tsx` موجود ومتركّب في الـ layout، لكن السلة فاضية عن قصد. ضيفي
  `items` و`addItem` و`removeItem` هناك.
- `/cart` و`/checkout` موجودين كـ placeholder — استبدلي محتواهم بخطوات الشراء.
- بيانات المنتجات في `data/products.ts`؛ لو النقل لـ CMS أو API، بدّلي استيراد `products`
  بدالة `async` وارجّعي نفس الـ `Product` type.
- مفيش بوابة دفع أو مصادقة حاليًا، والطلب على واتساب هو المسار الرسمي.

## التصميم والجودة

- ألوان البراند وزوايا الكروت معرّفة كـ Tailwind v4 theme tokens في `app/globals.css`
  (`background`, `surface`, `primary`, `primary-soft`, `ink`, `ink-muted`, `accent`, `border`,
  `tile-*`, `shadow-soft`, `radius-card`, `radius-hero`).
- الخط **Cairo** (400/600/800) عبر `next/font`، والموقع كله `dir="rtl"` مع logical properties
  (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`) — مفيش `left/right` في التخطيط.
- SEO: metadata عربي، Open Graph، `sitemap.xml`، `robots.txt`، وJSON-LD من نوع `Product` في
  كل صفحة منتج.
- Accessibility: skip link، alt/aria-label للصور، `aria-pressed` للمفضلة والفلاتر، وfocus states
  واضحة. احترام `prefers-reduced-motion` في كل الأنيميشن.
- الأنيميشن خفيف بالكامل (CSS + IntersectionObserver) بدون مكتبات إضافية.
