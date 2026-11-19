/** رقم واتساب البراند بدون أي رموز، جاهز لرابط wa.me */
export function whatsappNumber() {
  return (process.env.NEXT_PUBLIC_WA_NUMBER ?? "").replace(/\D/g, "");
}

/**
 * بيبني رابط واتساب برسالة جاهزة.
 * لو الرقم مش متظبط في .env.local، الرابط بيفتح واتساب ويسيب اختيار الرقم للمستخدم.
 */
export function whatsappLink(message: string) {
  const number = whatsappNumber();
  const text = encodeURIComponent(message);
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
}

export const generalWhatsappMessage = [
  "مرحبًا sgifts ✨",
  "كنت عايزة أستفسر عن الهدايا المتوفرة والتوصيل.",
].join("\n");

export function productWhatsappMessage({
  name,
  price,
  url,
}: {
  name: string;
  price: string;
  url?: string;
}) {
  return [
    "مرحبًا sgifts ✨",
    `عايزة أطلب: ${name}`,
    `السعر: ${price}`,
    url ? `الرابط: ${url}` : "",
    "ممكن تفاصيل التغليف والتوصيل؟",
  ]
    .filter(Boolean)
    .join("\n");
}
