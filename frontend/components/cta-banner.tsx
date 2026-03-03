import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-16 md:px-16 md:py-20">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.07]">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full border-[40px] border-primary-foreground" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full border-[30px] border-primary-foreground" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
              Üretiminizi Üst Seviyeye Taşımayı Düşünüyor musunuz?
            </h2>
            <p className="mt-4 max-w-xl text-primary-foreground/80 leading-relaxed">
              Muhendislik ekibimiz gereksinimlerinizi gorusmek ve size ozel bir
              cozum sunmak icin hazir. Bugn ucretsiz danismanlik alin.
            </p>
            <Link
              href="/contact?quote=true"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-secondary px-8 py-3.5 text-sm font-semibold text-secondary-foreground shadow-lg hover:opacity-90 transition-opacity"
            >
              Teklif Alın
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
