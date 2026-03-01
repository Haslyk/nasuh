import Link from "next/link";
import { siteConfig, navigation } from "@/data/content";
import { Linkedin, Instagram, Youtube, ArrowUpRight } from "lucide-react";

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: <Linkedin className="h-4 w-4" />,
  instagram: <Instagram className="h-4 w-4" />,
  youtube: <Youtube className="h-4 w-4" />,
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground text-primary font-bold text-lg">
                G
              </div>
              <span className="text-lg font-bold tracking-tight">
                {siteConfig.companyName}
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              1987'den bu yana hassas muhendislik cozumleri. 40'tan fazla ulkeye
              ihracat yapan lider endustriyel makine ureticisi.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {Object.entries(siteConfig.social).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground/10 text-primary-foreground/70 hover:bg-primary-foreground/20 hover:text-primary-foreground transition-colors"
                  aria-label={key}
                >
                  {socialIcons[key]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/90">
              Navigasyon
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navigation.main.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/90">
              Urunler
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navigation.main
                .find((i) => i.label === "Urunler")
                ?.children?.map((child) => (
                  <li key={child.label}>
                    <Link
                      href={child.href}
                      className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/90">
              Iletisim
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-primary-foreground/60">
              <li>{siteConfig.address}</li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-primary-foreground transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary-foreground transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <Link
              href="/contact?quote=true"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary-foreground hover:underline"
            >
              Teklif Alin
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/50">
            {`\u00A9 ${new Date().getFullYear()} ${siteConfig.companyName}. Tum haklari saklidir.`}
          </p>
          <div className="flex items-center gap-4 text-xs text-primary-foreground/50">
            <Link
              href="/privacy"
              className="hover:text-primary-foreground/80 transition-colors"
            >
              Gizlilik Politikasi
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary-foreground/80 transition-colors"
            >
              Kullanim Sartlari
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
