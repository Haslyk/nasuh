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

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [slides.length, next]);

  if (slides.length === 0) return null;

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Slides (Background) */}
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
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
      ))}

      {/* Content Area (Hizalama Düzenlemesi) */}
      <div className="relative z-20 h-full container mx-auto px-6">
        <div className="relative h-full w-full">
          {/* h-full sayesinde bu kapsayıcı ekranı kaplar, içerisindeki elemanları dikeyde ortalayabiliriz */}
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className={cn(
                "absolute left-0 top-3/5 -translate-y-1/2 w-full max-w-2xl transition-all duration-700",
                i === current
                  ? "opacity-100 translate-x-0 visible"
                  : "opacity-0 -translate-x-8 invisible"
              )}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card leading-tight text-balance">
                {slide.title}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-card/80 max-w-lg leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="mt-8">
                <Link
                  href={slide.button_link || "#"}
                  className="inline-flex items-center gap-2 rounded-md bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground shadow-lg hover:opacity-90 transition-opacity"
                >
                  {slide.button_text}
                </Link>
              </div>
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
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-md bg-card/10 backdrop-blur-sm text-card border border-card/20 hover:bg-card/20 transition-colors"
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
          />
        ))}
      </div>
    </section>
  );
}
