"use client";
import React from "react";
import { cn } from "@/lib/utils";

const companies = [
  {
    name: "Acme Corp",
    logo: (
      <svg viewBox="0 0 24 24" className="h-12 w-12">
        <path
          fill="currentColor"
          d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z"
        />
      </svg>
    ),
  },
  {
    name: "Echo Valley",
    logo: (
      <svg viewBox="0 0 24 24" className="h-12 w-12">
        <path fill="currentColor" d="M12 2L1 12h3v9h7v-6h2v6h7v-9h3L12 2z" />
      </svg>
    ),
  },
  {
    name: "Quantum",
    logo: (
      <svg viewBox="0 0 24 24" className="h-12 w-12">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        />
      </svg>
    ),
  },
  {
    name: "Pulse",
    logo: (
      <svg viewBox="0 0 24 24" className="h-12 w-12">
        <path
          fill="currentColor"
          d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
        />
      </svg>
    ),
  },
];

// Triple the companies array for smoother infinite scroll
const allCompanies = [...companies, ...companies, ...companies];

const CompanyLogo = ({
  company,
}: {
  company: { logo: React.JSX.Element; name: string };
}) => (
  <div className="mx-8 my-4 flex-shrink-0">
    <div className="flex h-24 w-48 items-center justify-center rounded-lg bg-white p-6 shadow">
      <div className="text-gray-600">{company.logo}</div>
    </div>
  </div>
);

type TrustedCompaniesProps = {
  className?: string;
};

const TrustedCompanies = ({ className }: TrustedCompaniesProps) => {
  return (
    <>
      <div className={cn("relative w-full overflow-hidden py-6", className)}>
        {/* Left Gradient Overlay */}
        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
        {/* Right Gradient Overlay */}
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

        <div className="relative">
          <div className="animate-scroll-reverse flex">
            {[...allCompanies].reverse().map((company, index) => (
              <CompanyLogo
                key={`row2-${company.name}-${index}`}
                company={company}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        @keyframes scroll-reverse {
          0% {
            transform: translateX(calc(-100% / 3));
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 40s linear infinite;
        }
        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default TrustedCompanies;
