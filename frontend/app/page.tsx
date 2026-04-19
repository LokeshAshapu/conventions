import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import VenuesHighlight from "@/components/VenuesHighlight";
import EventTypesSection from "@/components/EventTypesSection";
import GalleryPreview from "@/components/GalleryPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <VenuesHighlight />
      <EventTypesSection />
      <GalleryPreview />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
