import AboutPreview from "@/components/AboutPreview";
import CoordinatorsSection from "@/components/CoordinatorsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import HeroSection from "@/components/HeroSection";
import NoticePreview from "@/components/NoticePreview";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CoordinatorsSection />
      <AboutPreview />
      <FacilitiesSection />
      <NoticePreview />
    </div>
  );
}
