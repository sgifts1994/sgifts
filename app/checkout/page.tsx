import type { Metadata } from "next";
import Link from "next/link";
import { CreditCard, MessageCircle } from "lucide-react";
import { generalWhatsappMessage, whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "إتمام الطلب",
  description: "الدفع على موقع sgifts هيتبني قريبًا.",
  robots: { index: false, follow: true },
};

export default function CheckoutPage() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col items-center px-4 py-20 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
        <CreditCard className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <h1 className="mt-5 text-2xl font-extrabold text-ink">الدفع جاي قريب</h1>
      <p className="mt-2 max-w-sm text-sm leading-8 text-ink/70">
        بنجهّز تجربة شراء كاملة: سلة، دفع أونلاين، ومتابعة للطلب. لحد ما نخلّص، الطلب على
        واتساب بيشتغل بكفاءة وقدامنا فريق بيرد.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/cart"
          className="rounded-full border border-primary-soft px-5 py-3 text-sm font-bold text-primary transition hover:bg-primary hover:text-white"
        >
          السلة
        </Link>
        <a
          href={whatsappLink(generalWhatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#9a4468]"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
          اطلبي على واتساب
        </a>
      </div>
    </div>
  );
}
