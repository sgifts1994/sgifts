import { MessageCircle } from "lucide-react";
import { generalWhatsappMessage, whatsappLink } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(generalWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="اطلبي على واتساب"
      className="group fixed bottom-5 end-4 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3.5 text-sm font-bold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-[#9a4468] md:bottom-7 md:end-7 md:px-5"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
      <span className="hidden sm:inline">اطلبي على واتساب</span>
      <span className="sr-only sm:hidden">اطلبي على واتساب</span>
    </a>
  );
}
