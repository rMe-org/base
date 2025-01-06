import TrustedCompanies from "@/components/misc/CompanyLogos";
import InfiniteTestimonials from "@/components/misc/InfiniteTestimonials";
import LandingHeroSection from "@/components/misc/LandingHeroSection";
import PricingSection from "@/components/misc/PricingSection";

export default function HomePage() {
  return (
    <main>
      <LandingHeroSection />
      <div className="mx-auto flex flex-col gap-20">
        <div className="mx-auto mt-20 flex max-w-7xl flex-col items-center gap-5">
          <h3 className="text-2xl text-body">
            Trusted by the world’s most innovative teams
          </h3>
          <TrustedCompanies />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="absolute left-1/2 top-10 w-full -translate-x-1/2 p-8 text-center">
            <h1 className="mb-4 text-5xl font-bold text-gray-900">
              Plans for Your Need
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Select from best plan, ensuring a perfect match. Need more or
              less? Customize your subscription for a seamless fit!
            </p>
          </div>
          <img src="/creatr-showcase.png" alt="hero" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="absolute left-1/2 top-20 w-full -translate-x-1/2 p-8 text-center">
            <h1 className="mb-4 text-5xl font-bold text-gray-900">
              Plans for Your Need
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Select from best plan, ensuring a perfect match. Need more or
              less? Customize your subscription for a seamless fit!
            </p>
          </div>
          <img src="/creatr-files.png" alt="hero" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <img src="/background-glow.png" alt="hero" />
          <div className="absolute left-1/2 top-10 w-full -translate-x-1/2 p-8 text-center">
            <h1 className="mb-4 text-5xl font-bold text-gray-900">
              Plans for Your Need
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Select from best plan, ensuring a perfect match. Need more or
              less? Customize your subscription for a seamless fit!
            </p>
          </div>
          <InfiniteTestimonials className="absolute top-1/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <img src="/background-glow.png" alt="hero" />
          <div className="absolute left-1/2 top-10 w-full -translate-x-1/2 p-8 text-center">
            <h1 className="mb-4 text-5xl font-bold text-gray-900">
              Plans for Your Need
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Select from best plan, ensuring a perfect match. Need more or
              less? Customize your subscription for a seamless fit!
            </p>
          </div>
          <PricingSection className="absolute top-1/4 w-full" />
        </div>
      </div>
    </main>
  );
}
