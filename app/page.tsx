import CoordinatorsSection from "@/components/CoordinatorsSection";
import HeroSection from "@/components/HeroSection";
import LatestAnnouncements from "@/components/LatestAnnouncements";
import TimetableNotice from "@/components/TimetableNotice";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CoordinatorsSection />
      <LatestAnnouncements />
      <TimetableNotice />
    </div>
  );
}
