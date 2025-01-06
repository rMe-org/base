import LandingBanner from "./LandingBanner";
import LandingHero from "./LandingHero";

const LandingHeroSection = () => (
  <div className="relative isolate h-screen w-screen overflow-hidden">
    <div className="absolute left-0 top-0 -z-10 h-screen bg-gradient-to-br from-pink-50 to-orange-50"></div>
    <div className="!absolute left-0 top-0 -z-20 h-full w-full">
      <LandingBanner />
    </div>
    <LandingHero />
  </div>
);

export default LandingHeroSection;
