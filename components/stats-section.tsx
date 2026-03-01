import { stats } from "@/data/content";

export function StatsSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground font-mono">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-primary-foreground/70 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
