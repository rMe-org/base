"use client";
import { cn } from "@/lib/utils";
import React from "react";

const testimonials = [
  {
    name: "Fabrizio Fernandez",
    handle: "@fab3304",
    avatar: "https://i.pravatar.cc/150?img=1",
    text: "Testing out @launchui's responsive design. That's the template we've all been waiting for.",
  },
  {
    name: "Felix Beaumont",
    handle: "@felixbs",
    avatar: "https://i.pravatar.cc/150?img=2",
    text: "Digging into @launchui. Those shadows are giving me serious design envy.",
  },
  {
    name: "Esme Rothschild",
    handle: "@EsmeRothArt",
    avatar: "https://i.pravatar.cc/150?img=3",
    text: "UI is siliiick. That globe graphic though. Makes me feel like I'm building websites for a movie.",
  },
  {
    name: "Darius Flynn",
    handle: "@flynnn",
    avatar: "https://i.pravatar.cc/150?img=4",
    text: "Exploring @launchui's sleek UI. It's like a dark mode enthusiast's playground.",
  },
  {
    name: "Kai Nakamura",
    handle: "@KaiNakWaves",
    avatar: "https://i.pravatar.cc/150?img=5",
    text: "Just made my first website with @launchui. The flexibility is speaking my language.",
  },
];

// Triple the testimonials for smoother loop
const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

const TestimonialCard = ({ testimonial }) => (
  <div className="mx-3 my-2 w-80 flex-shrink-0 space-y-3 rounded-2xl bg-white p-5 shadow">
    <div className="flex items-start gap-3">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <div className="-space-y-1">
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-gray-500">{testimonial.handle}</div>
        </div>
      </div>
    </div>
    <div className="mt-1 text-sm leading-relaxed text-gray-600">
      {testimonial.text}
    </div>
  </div>
);

type InfiniteTestimonialsProps = {
  className?: string;
};

const InfiniteTestimonials = ({ className }: InfiniteTestimonialsProps) => {
  return (
    <div className={cn("relative w-full overflow-hidden py-6", className)}>
      {/* Left Gradient Overlay */}
      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />

      {/* Right Gradient Overlay */}
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

      <div className="relative">
        {/* First Row */}
        <div className="animate-scroll mb-4 flex">
          {allTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`row1-${testimonial.handle}-${index}`}
              testimonial={testimonial}
            />
          ))}
        </div>

        {/* Second Row - Reversed Direction */}
        <div className="animate-scroll-reverse flex">
          {[...allTestimonials].reverse().map((testimonial, index) => (
            <TestimonialCard
              key={`row2-${testimonial.handle}-${index}`}
              testimonial={testimonial}
            />
          ))}
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
          animation: scroll 60s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 60s linear infinite;
        }

        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default InfiniteTestimonials;
