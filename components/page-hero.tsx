import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="bg-primary pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="flex items-center gap-1.5 text-sm text-primary-foreground/60 mb-4">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-primary-foreground transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-primary-foreground">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
          {title}
        </h1>
      </div>
    </section>
  );
}
