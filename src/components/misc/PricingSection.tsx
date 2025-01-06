"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { CircleCheckBig } from "lucide-react";

interface Feature {
  title: string;
  included: boolean;
}

interface PricingTier {
  id: string;
  tier: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: Feature[];
  isHighlighted?: boolean;
}

interface PricingCardProps extends PricingTier {
  isAnnual: boolean;
}

interface ToggleButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  active,
  onClick,
  children,
}) => (
  <button
    className={cn(
      "rounded-xl px-6 py-2 text-sm font-medium transition-all",
      active ? "bg-[#FF9B5C] text-white" : "text-gray-600",
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  description,
  monthlyPrice,
  annualPrice,
  features,
  isAnnual,
  isHighlighted = false,
}) => {
  const price = isAnnual ? annualPrice : monthlyPrice;

  const cardClasses = cn(
    "rounded-3xl p-8 border-[1px] border-[#ededed] shadow",
    isHighlighted ? "bg-[#FF9B5C]" : "bg-white",
  );

  const iconWrapperClasses = cn(
    "w-12 h-12 rounded-full flex items-center justify-center",
    isHighlighted ? "bg-white/20" : "bg-black",
  );

  const iconClasses = cn(
    "w-6 h-6 rounded-full",
    isHighlighted ? "bg-white" : "bg-white",
  );

  const titleClasses = cn(
    "text-2xl font-semibold mb-1",
    isHighlighted ? "text-white" : "text-black",
  );

  const descriptionClasses = cn(
    "text-sm",
    isHighlighted ? "text-white/90" : "text-gray-600",
  );

  const priceClasses = cn(
    "text-4xl font-bold  flex items-baseline",
    isHighlighted ? "text-white" : "text-black",
  );

  const priceSubtextClasses = cn(
    "text-base font-normal ml-1",
    isHighlighted ? "text-white/90" : "text-gray-600",
  );

  const buttonClasses = cn(
    "w-full special-btn py-3 px-4 rounded-xl mt-4 transition-colors",
    isHighlighted
      ? "bg-white text-black hover:bg-white/90"
      : "bg-black text-white hover:bg-black/90",
  );

  const featuresTitleClasses = cn(
    "text-lg font-semibold mb-4",
    isHighlighted ? "text-white" : "text-black",
  );

  const featureIconClasses = cn(
    "w-5 h-5 mr-3",
    isHighlighted ? "text-white" : "text-black",
  );

  const featureTextClasses = cn(
    "text-sm",
    isHighlighted ? "text-white/90" : "text-gray-600",
  );

  return (
    <div className={cardClasses}>
      <div className="flex h-full flex-col gap-10">
        <div className="flex flex-col gap-5">
          <div className={iconWrapperClasses}>
            <div className={iconClasses} />
          </div>

          <div className="-space-y-1">
            <h3 className={titleClasses}>{tier}</h3>
            <p className={descriptionClasses}>{description}</p>
          </div>
          <div className={priceClasses}>
            <span className="-rotate-6 text-5xl">$ </span>
            <span className="text-5xl">{price}</span>

            <span className={priceSubtextClasses}>/ per month</span>
          </div>

          <button className={buttonClasses}>Get Started</button>
        </div>
        <Separator />

        <div>
          <h4 className={featuresTitleClasses}>Features</h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CircleCheckBig className={featureIconClasses} />
                <span className={featureTextClasses}>{feature.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const PRICING_TIERS: PricingTier[] = [
  {
    id: "basic",
    tier: "Basic",
    description: "Best for personal use.",
    monthlyPrice: 20,
    annualPrice: 200,
    features: [
      { title: "Employee directory", included: true },
      { title: "Task management", included: true },
      { title: "Calendar integration", included: true },
      { title: "File storage", included: true },
      { title: "Communication tools", included: true },
      { title: "Reporting and analytics", included: true },
    ],
  },
  {
    id: "enterprise",
    tier: "Enterprise",
    description: "For large teams & corporations.",
    monthlyPrice: 120,
    annualPrice: 1200,
    features: [
      { title: "Advanced employee directory", included: true },
      { title: "Project management", included: true },
      { title: "Resource scheduling", included: true },
      { title: "Version control", included: true },
      { title: "Team collaboration", included: true },
      { title: "Advanced analytics", included: true },
    ],
    isHighlighted: true,
  },
  {
    id: "business",
    tier: "Business",
    description: "Best for business owners.",
    monthlyPrice: 240,
    annualPrice: 2400,
    features: [
      { title: "Customizable employee directory", included: true },
      { title: "Client project management", included: true },
      { title: "Client meeting schedule", included: true },
      { title: "Compliance tracking", included: true },
      { title: "Client communication", included: true },
      { title: "Create custom reports tailored", included: true },
    ],
  },
];

type PricingSectionProps = {
  className?: string;
};

const PricingSection: React.FC<PricingSectionProps> = ({ className }) => {
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  return (
    <div className={cn("mx-auto max-w-7xl px-4 py-16", className)}>
      <div className="mb-12 flex justify-center">
        <div className="inline-flex rounded-2xl bg-white p-1 shadow">
          <ToggleButton active={!isAnnual} onClick={() => setIsAnnual(false)}>
            Monthly
          </ToggleButton>
          <ToggleButton active={isAnnual} onClick={() => setIsAnnual(true)}>
            Annually
          </ToggleButton>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {PRICING_TIERS.map((tier) => (
          <PricingCard key={tier.id} {...tier} isAnnual={isAnnual} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
