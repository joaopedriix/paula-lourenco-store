import { Hero } from "@/components/home/Hero";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { BestSellers } from "@/components/home/BestSellers";
import { EditorialBanner } from "@/components/home/EditorialBanner";
import { NewArrivals } from "@/components/home/NewArrivals";
import { ShopByOccasion } from "@/components/home/ShopByOccasion";
import { BenefitsBar } from "@/components/home/BenefitsBar";
import { Testimonials } from "@/components/home/Testimonials";
import { InstagramSection } from "@/components/home/InstagramSection";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <BestSellers />
      <EditorialBanner />
      <NewArrivals />
      <ShopByOccasion />
      <BenefitsBar />
      <Testimonials />
      <InstagramSection />
      <Newsletter />
    </>
  );
}
