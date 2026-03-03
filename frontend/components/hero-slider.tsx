"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { API_BASE_URL, UPLOADS_URL } from "@/lib/constants";

export function HeroSlider() {
  const [slides, setSlides] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE_URL}/sliders`)
      .then((res) => res.json())
      .then((data) => {
        setSlides(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error("Slider verisi çekilemedi:", err))
      .finally(() => setLoading(false));
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || !slides.length) return;

      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 700);
    },
    [isAnimating, slides.length]
  );

  const next = useCallback(() => {
    if (!slides.length) return;
    goTo((current + 1) % slides.length);
  }, [current, slides.length, goTo]);

  const prev = useCallback(() => {
    if (!slides.length) return;
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, slides.length, goTo]);

  // Auto-advance
  useEffect(() => {
    if (slides.length < 2) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <Image
            src={UPLOADS_URL + slide.image_url}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className={cn(
                "absolute transition-all duration-700 max-w-2xl",
                i === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 pointer-events-none"
              )}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card leading-tight text-balance">
                {slide.title}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-card/80 max-w-lg leading-relaxed">
                {slide.subtitle}
              </p>
              <Link
                href={slide.button_link}
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground shadow-lg hover:opacity-90 transition-opacity"
              >
                {slide.button_text}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 right-8 z-20 flex items-center gap-2">
          <button
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-md bg-card/10 backdrop-blur-sm text-card border border-card/20 hover:bg-card/20 transition-colors"
            aria-label="Onceki slayt"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-md bg-card/10 backdrop-blur-sm text-card border border-card/20 hover:bg-card/20 transition-colors"
            aria-label="Sonraki slayt"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === current ? "w-8 bg-card" : "w-2 bg-card/40"
            )}
            aria-label={`Slayt ${i + 1}'e git`}
          />
        ))}
      </div>
    </section>
  );
}
