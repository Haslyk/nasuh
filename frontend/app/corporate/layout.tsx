import type { Metadata } from "next";
import Link from "next/link";
import { navigation } from "@/data/content";

export const metadata: Metadata = {
  title: "Kurumsal",
  description:
    "Nasuh Ambalaj & Kağıt hakkinda bilgi edinin - tarihimiz, vizyonumuz, misyonumuz ve endustriyel makine uretimindeki kaliteye olan bagliligimiz.",
};

const corporateLinks = navigation.main.find(
  (item) => item.label === "Kurumsal"
)?.children;

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {/* Bottom nav for corporate pages */}
      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
            Kurumsal Sayfalar
          </h3>
          <div className="flex flex-wrap gap-3">
            {corporateLinks?.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:border-primary/30 hover:shadow-sm transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
