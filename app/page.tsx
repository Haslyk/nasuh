import { HeroSlider } from "@/components/hero-slider";
import { WhyUsSection } from "@/components/why-us";
import { FeaturedProducts } from "@/components/featured-products";
import { StatsSection } from "@/components/stats-section";
import { PartnersSection } from "@/components/partners-section";
import { CtaBanner } from "@/components/cta-banner";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <WhyUsSection />
      <StatsSection />
      <FeaturedProducts />
      <PartnersSection />
      <CtaBanner />
    </>
  );
}
