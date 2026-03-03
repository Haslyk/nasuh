import { whyUsItems } from "@/data/content";
import { Shield, Globe, Settings, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Globe,
  Settings,
  Clock,
};

export function SectionHeader({
  label,
  title,
  description,
  center = true,
}: {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

export function WhyUsSection() {
  return (
    <section className="py-24 bg-card mt-8">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Neden Biz"
          title="Guvene Dayali, Hassasiyetle Yonlendirilen"
          description="Otuz yildan fazla suredir sanayi liderleri, en kritik uretim ihtiyaclari icin Nasuh Ambalaj'a guveniyor."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyUsItems.map((item) => {
            const Icon = iconMap[item.icon] ?? Shield;
            return (
              <div
                key={item.title}
                className="group relative rounded-lg border border-border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
