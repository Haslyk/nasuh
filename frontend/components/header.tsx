"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigation, siteConfig } from "@/data/content";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change (resize)
  useEffect(() => {
    const close = () => setMobileOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      {/* Top bar */}
      <div
        className={cn(
          "border-b border-border/40 transition-all duration-300 overflow-hidden",
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <span className="text-muted-foreground hidden md:inline">
            {siteConfig.workingHours}
          </span>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors hidden sm:inline"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-lg transition-transform group-hover:scale-105">
            G
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-foreground">
              {siteConfig.companyName}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {siteConfig.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.main.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.children && setOpenDropdown(item.label)
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  "text-foreground/80 hover:text-foreground hover:bg-accent"
                )}
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      openDropdown === item.label && "rotate-180"
                    )}
                  />
                )}
              </Link>

              {/* Dropdown */}
              {item.children && (
                <div
                  className={cn(
                    "absolute top-full left-0 pt-2 transition-all duration-200",
                    openDropdown === item.label
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  )}
                >
                  <div className="min-w-56 rounded-lg border border-border bg-card p-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-md px-3 py-2.5 text-sm text-foreground/80 hover:bg-accent hover:text-foreground transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href={navigation.cta.href}
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-sm hover:opacity-90 transition-opacity"
          >
            {navigation.cta.label}
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-md hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-card border-t border-border",
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
          {navigation.main.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                onClick={() => !item.children && setMobileOpen(false)}
                className="flex items-center justify-between py-3 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors border-b border-border/50"
              >
                {item.label}
                {item.children && <ChevronDown className="h-4 w-4" />}
              </Link>
              {item.children && (
                <div className="pl-4 flex flex-col">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href={navigation.cta.href}
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-md bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-sm hover:opacity-90 transition-opacity"
          >
            {navigation.cta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
