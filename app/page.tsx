import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import EditorialStatement from "@/components/sections/EditorialStatement";
import AboutTeaser from "@/components/sections/AboutTeaser";
import SignatureDishes from "@/components/sections/SignatureDishes";
import CopperBreak from "@/components/sections/CopperBreak";
import ReviewsSection from "@/components/sections/ReviewsSection";
import GalleryPreview from "@/components/sections/GalleryPreview";
import ContactTeaser from "@/components/sections/ContactTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <EditorialStatement />
      <AboutTeaser />
      <SignatureDishes />
      <CopperBreak />
      <ReviewsSection />
      <GalleryPreview />
      <ContactTeaser />
    </>
  );
}
