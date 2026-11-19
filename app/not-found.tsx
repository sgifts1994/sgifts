import Link from "next/link";
import { Heart } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center px-4 py-24 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-full bg-primary/10">
        <Heart className="h-7 w-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <h1 className="mt-5 text-2xl font-extrabold text-ink">الصفحة دي مش موجودة</h1>
      <p className="mt-2 text-sm leading-8 text-ink/70">
        يمكن اللينك قديم أو الهدية اتغير اسمها. ارجعي للكتالوج واختاري من جديد.
      </p>
      <Link
        href="/catalog"
        className="mt-7 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#9a4468]"
      >
        روحي للكتالوج
      </Link>
    </div>
  );
}
