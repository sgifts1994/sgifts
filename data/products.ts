export type Category = "candles" | "perfumes" | "boxes" | "occasions";

export type Badge = "جديد" | "الأكثر طلبًا" | null;

export type TileColor = "#FDE3E8" | "#FFF0CF" | "#E9E0F5" | "#DFF1EA";

export interface ScentNotes {
  top: string;
  heart: string;
  base: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number;
  images: string[];
  description: string;
  scentNotes: ScentNotes;
  size: string;
  burnTime: string;
  badge: Badge;
  inStock: boolean;
  tileColor: TileColor;
}

/**
 * بيانات المنتجات — مصدر واحد للحقيقة.
 * لتحويلها لـ CMS أو API: خلي الشكل نفسه وبدّل استيراد المنتجات في الصفحات بدالة async.
 */
export const products: Product[] = [
  {
    id: "p-01",
    slug: "candle-warm-moment",
    name: "شمعة لحظة دافئة",
    category: "candles",
    price: 320,
    images: [],
    description:
      "شمعة بفتيلة قطنية وشمع صويا، بتدوب بهدوء وتفرد ريحة دافئة في الأوضة. مناسبة لآخر اليوم، لما تحتاجي تقلّلي النور وتاخدي نفس عميق.",
    scentNotes: { top: "برتقال دافئ", heart: "فانيليا", base: "مسك أبيض" },
    size: "٢٠٠ جم",
    burnTime: "٤٥ ساعة",
    badge: "جديد",
    inStock: true,
    tileColor: "#FDE3E8",
  },
  {
    id: "p-02",
    slug: "candle-jasmine-night",
    name: "شمعة ياسمين الليل",
    category: "candles",
    price: 360,
    images: [],
    description:
      "ياسمين بلدي بيتفتح في الهوا، مع لمسة زهر برتقال وخشب صندل. الشمعة اللي بيحبها كل اللي بيدخل الأوضة ويسأل: إيه الريحة الحلوة دي؟",
    scentNotes: { top: "ياسمين", heart: "زهر البرتقال", base: "خشب الصندل" },
    size: "٢٢٠ جم",
    burnTime: "٥٠ ساعة",
    badge: "الأكثر طلبًا",
    inStock: true,
    tileColor: "#FFF0CF",
  },
  {
    id: "p-03",
    slug: "candle-vanilla-musk",
    name: "شمعة فانيلا ومسك",
    category: "candles",
    price: 340,
    images: [],
    description:
      "فانيلا كريمية على قاعدة مسك ناعم، ريحة بتفكّرها بأول كوب شاي في يوم شتوي. هادية، مريحة، وبتفضل في الأوضة بعد ما الشمعة تطفى.",
    scentNotes: { top: "فانيلا", heart: "أوركيد", base: "مسك" },
    size: "٢٠٠ جم",
    burnTime: "٤٥ ساعة",
    badge: null,
    inStock: true,
    tileColor: "#E9E0F5",
  },
  {
    id: "p-04",
    slug: "candle-rose-patchouli",
    name: "شمعة ورد وباتشولي",
    category: "candles",
    price: 380,
    images: [],
    description:
      "وردة طازة مع باتشولي دافي وعنبر خفيف. شمعة أنيقة لمساحة بتحبي شكلها في الصالون، جوة برطمان زجاجي بيقدر يتعاد استخدامه.",
    scentNotes: { top: "ورد", heart: "باتشولي", base: "عنبر" },
    size: "٢٢٠ جم",
    burnTime: "٥٠ ساعة",
    badge: "الأكثر طلبًا",
    inStock: true,
    tileColor: "#DFF1EA",
  },
  {
    id: "p-05",
    slug: "perfume-rose-breeze",
    name: "برفان نسمة ورد",
    category: "perfumes",
    price: 950,
    images: [],
    description:
      "برفان وردي ناعم بيفتح على ورد طازج ويستقر على مسك دافي. مش تقيل ولا مزعج، بيتلبس من الصبح ويفضل معاكي طول اليوم.",
    scentNotes: { top: "ورد طازج", heart: "بيوني", base: "مسك ناعم" },
    size: "٥٠ مل",
    burnTime: "ثبات ٨ ساعات",
    badge: "الأكثر طلبًا",
    inStock: true,
    tileColor: "#FDE3E8",
  },
  {
    id: "p-06",
    slug: "perfume-soft-musk",
    name: "برفان مسك خفيف",
    category: "perfumes",
    price: 880,
    images: [],
    description:
      "مسك أبيض نضيف مع فانيلا هادية، برفان يومي بيدخل ورا بعضه ويفضل قريب من الجلد. اختيار آمن كهدية لو مش عارفة ذوقها.",
    scentNotes: { top: "برغموت", heart: "مسك أبيض", base: "فانيلا" },
    size: "٥٠ مل",
    burnTime: "ثبات ٧ ساعات",
    badge: null,
    inStock: true,
    tileColor: "#E9E0F5",
  },
  {
    id: "p-07",
    slug: "perfume-morning-light",
    name: "برفان ضوء الصبح",
    category: "perfumes",
    price: 820,
    images: [],
    description:
      "ليمون وياسمين وخشب أبيض، زي شمس أول الصبح على شرفة مفتوحة. خفيف، منعش، وبيليق على الجو الحر.",
    scentNotes: { top: "ليمون", heart: "ياسمين", base: "خشب أبيض" },
    size: "٥٠ مل",
    burnTime: "ثبات ٦ ساعات",
    badge: "جديد",
    inStock: true,
    tileColor: "#FFF0CF",
  },
  {
    id: "p-08",
    slug: "box-love-letter",
    name: "بوكس هدية بحب",
    category: "boxes",
    price: 1250,
    images: [],
    description:
      "بوكس بيجمع شمعة ياسمين الليل وبرفان صغير وكارت إهداء بخط إيدك. مغلّف بشريطة ساتان ومبطّن بورق ناعم، جاهز يتقدم من غير أي مجهود منك.",
    scentNotes: { top: "فانيليا", heart: "ورد", base: "مسك" },
    size: "شمعة + برفان ٣٠ مل + كارت",
    burnTime: "شمعة ٤٥ ساعة",
    badge: "الأكثر طلبًا",
    inStock: true,
    tileColor: "#FFF0CF",
  },
  {
    id: "p-09",
    slug: "box-pamper",
    name: "بوكس لحظة دلع",
    category: "boxes",
    price: 1450,
    images: [],
    description:
      "بوكس متكامل لليلة تهدية: شمعة لافندر، برفان، وسكراب جسم بالسكر. الفكرة إنها تاخد يوم كامل لنفسها، والهدية تفضل مفتوحة قدامها.",
    scentNotes: { top: "لافندر", heart: "كاموميل", base: "خشب الصندل" },
    size: "شمعة + برفان + سكراب",
    burnTime: "شمعة ٥٠ ساعة",
    badge: null,
    inStock: true,
    tileColor: "#FDE3E8",
  },
  {
    id: "p-10",
    slug: "box-fresh-start",
    name: "بوكس بداية حلوة",
    category: "boxes",
    price: 1100,
    images: [],
    description:
      "بوكس للسكن الجديد أو الشغل الجديد: شمعة حمضيات صغيرة، بخور خفيف وكارت مباركة. بداية جديدة بتحتاج ريحة حلوة تستقبلها.",
    scentNotes: { top: "حمضيات", heart: "نعناع", base: "مسك" },
    size: "شمعة ١٢٠ جم + بخور + كارت",
    burnTime: "شمعة ٣٠ ساعة",
    badge: "جديد",
    inStock: true,
    tileColor: "#DFF1EA",
  },
  {
    id: "p-11",
    slug: "gift-birthday",
    name: "هدية عيد ميلاد",
    category: "occasions",
    price: 690,
    images: [],
    description:
      "شمعة صغيرة بريحة كيك الفانيلا، بالون وردي وكارت عيد ميلاد. هدية بسيطة بتفرّح جدًا، خصوصًا لو الكارت مكتوب بإيدك.",
    scentNotes: { top: "كيك فانيلا", heart: "كاراميل", base: "مسك" },
    size: "شمعة ١٢٠ جم + بالون + كارت",
    burnTime: "شمعة ٣٠ ساعة",
    badge: null,
    inStock: true,
    tileColor: "#E9E0F5",
  },
  {
    id: "p-12",
    slug: "gift-graduation",
    name: "هدية تخرج",
    category: "occasions",
    price: 750,
    images: [],
    description:
      "شمعة ورد صغيرة، برفان ٣٠ مل وكارت تخرج. مناسبة لمبروك التخرج أو أول شغل، بتتغلف بلون وردي وبتتقدم بضحكة مضمونة.",
    scentNotes: { top: "ورد", heart: "فواكه", base: "عنبر" },
    size: "شمعة ١٢٠ جم + برفان ٣٠ مل + كارت",
    burnTime: "شمعة ٣٠ ساعة",
    badge: null,
    inStock: true,
    tileColor: "#FDE3E8",
  },
];

export const categories: Array<{ id: Category | "all"; label: string }> = [
  { id: "all", label: "الكل" },
  { id: "candles", label: "شموع" },
  { id: "perfumes", label: "برفانات" },
  { id: "boxes", label: "بوكسات" },
  { id: "occasions", label: "هدايا مناسبات" },
];

export const categoryLabel: Record<Category, string> = {
  candles: "شموع",
  perfumes: "برفانات",
  boxes: "بوكسات",
  occasions: "هدايا مناسبات",
};

export function isCategory(value: string | undefined): value is Category {
  return value !== undefined && value in categoryLabel;
}

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getBestSellers(limit = 4) {
  return products.filter((product) => product.badge === "الأكثر طلبًا").slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 3) {
  const sameCategory = products.filter(
    (item) => item.id !== product.id && item.category === product.category,
  );

  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const rest = products.filter(
    (item) => item.id !== product.id && item.category !== product.category,
  );

  return [...sameCategory, ...rest].slice(0, limit);
}

/** للسلة والدفع لاحقًا: بنود الطلب هتستخدم السعر النهائي الجاهز للعرض */
export function productPriceLabel(product: Product) {
  return `${product.price.toLocaleString("en-US")} ج.م`;
}
