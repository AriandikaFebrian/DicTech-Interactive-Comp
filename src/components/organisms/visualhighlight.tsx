'use client'

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const visualTiles = [
  {
    image: "/images/Highlight/Collaboration.png",
    alt: "Collaboration",
    title: "Collaboration",
    link: "/about/collaboration",
  },
  {
    image: "/images/Highlight/Innovation.png",
    alt: "Innovation",
    title: "Innovation",
    link: "/about/innovation",
  },
  {
    image: "/images/Highlight/Trust.png",
    alt: "Trust and Partnership",
    title: "Trust & Partnership",
    link: "/about/trust",
  },
];

export default function VisualHighlightSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visualTiles.map((item, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <Link
              key={index}
              href={item.link}
              aria-label={`Read more about ${item.title}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative block shadow-lg overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            >
              <div className="relative w-full aspect-[5/3]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover transition-transform duration-500 ease-in-out ${
                    isHovered ? "scale-110" : ""
                  }`}
                  priority={index < 3}
                />

                <div
                  className={`absolute inset-0 z-10 bg-white/10 backdrop-brightness-110 transition-opacity duration-300 ease-in-out pointer-events-none ${
                    isHovered ? "opacity-100 animate-pulse" : "opacity-0"
                  }`}
                  style={{ willChange: "opacity" }}
                />

                <div
                  className={`absolute inset-0 z-20 bg-gradient-to-l from-white/10 to-white/5 backdrop-blur-md flex items-center justify-start px-4 transition-all duration-300 ease-in-out pointer-events-none ${
                    isHovered
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{ willChange: "opacity, transform" }}
                >
                  <div className="text-left">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80 flex items-center gap-1">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}