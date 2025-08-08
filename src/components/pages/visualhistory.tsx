'use client'

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const visualTiles = [
  {
    image: "/images/bgherosection.png",
    alt: "Founder's First Workspace",
    title: "First Workspace Setup",
    link: "/history/first-workspace",
  },
  {
        image: "/images/bgherosection.png",
    alt: "First Lines of Code",
    title: "Writing Our First Code",
    link: "/history/first-code",
  },
  {
    image: "/images/bgherosection.png",
    alt: "Virtual Meeting with Early Team",
    title: "First Virtual Team Meeting",
    link: "/history/first-virtual-meeting",
  },
  {
    image: "/images/bgherosection.png",
    alt: "Early Product Demo Screenshot",
    title: "Early Product Demo",
    link: "/history/early-product-demo",
  },
  {
    image: "/images/bgherosection.png",
    alt: "Growth Chart",
    title: "Tracking Our Growth",
    link: "/history/growth-chart",
  },
  {
    image: "/images/bgherosection.png",
    alt: "Client Feedback Screenshot",
    title: "Gathering Client Feedback",
    link: "/history/client-feedback",
  },
  {
    image: "/images/bgherosection.png",
    alt: "Remote Work Setup",
    title: "Optimizing Remote Workflow",
    link: "/history/remote-work-setup",
  },
  {
    image: "/images/bgherosection.png",
    alt: "Virtual Company Event",
    title: "Virtual Company Events",
    link: "/history/virtual-events",
  },
  {
    image: "/images/bgherosection.png",
    alt: "Team Collaboration Tools",
    title: "Collaborating Remotely",
    link: "/history/team-collaboration",
  },
  {
    image: "/images/bgherosection.png",
    alt: "Product Launch Celebration",
    title: "First Product Launch",
    link: "/history/product-launch",
  },
  {
    image: "/images/bgherosection.png",
    alt: "Brand Identity",
    title: "Building Our Brand",
    link: "/history/brand-identity",
  },
  {
    image: "/images/bgherosection.png",
    alt: "Future Plans Visualization",
    title: "Vision for the Future",
    link: "/history/future-plans",
  },
];

export default function VisualHighlightSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="mt-20">
                <h3 className="text-m text-black-300 text-center" >Our Journey</h3>
        <p className="text-3xl font-semibold text-black-800 text-center">Steps That Shaped Us</p> {/* Slogan updated */}
        <hr className="my-4 border-t-4 w-20 mx-auto border-teal-600" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {visualTiles.map((item, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <Link
              key={index}
              href={item.link}
              aria-label={`Read more about ${item.title}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative block shadow-lg overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
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