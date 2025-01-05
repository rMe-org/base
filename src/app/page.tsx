import LandingBanner from "@/components/misc/LandingBanner";
import LandingHeader from "@/components/misc/LandingHeader";
import LandingHero from "@/components/misc/LandingHero";

export default function HomePage() {
  return (
    <div className="relative isolate h-screen w-screen overflow-hidden">
      <div className="absolute left-0 top-0 -z-10 h-screen bg-gradient-to-br from-pink-50 to-orange-50"></div>
      <div className="!absolute left-0 top-0 -z-20 h-full w-full">
        <LandingBanner />
      </div>
      {/* <img */}
      {/*   className="absolute left-0 top-0 -z-20 h-full w-full object-cover" */}
      {/*   src="https://plus.unsplash.com/premium_photo-1701534008693-0eee0632d47a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" */}
      {/* /> */}
      <LandingHero />
    </div>
  );
}
