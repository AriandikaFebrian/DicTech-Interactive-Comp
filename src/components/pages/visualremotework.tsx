'use client'

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const visualTiles = [
  {
    image: "/images/bgherosection.png",
    alt: "Founder's First Workspace",
    title: "First Workspace Setup",
  },
  {
    image: "/images/bgherosection.png",
    alt: "First Lines of Code",
    title: "Writing Our First Code",
  },
  {
    image: "/images/bgherosection.png",
    alt: "Virtual Meeting with Early Team",
    title: "First Virtual Team Meeting",
  },
  {
    image: "/images/bgherosection.png",
    alt: "Early Product Demo Screenshot",
    title: "Early Product Demo",
  },
  {
    image: "/images/bgherosection.png",
    alt: "Growth Chart",
    title: "Tracking Our Growth",
  },
];

export default function VisualHighlightSection() {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 ">
        {visualTiles.map((item, index) => (
          <div
            key={index}
            className="relative w-full aspect-[5/3] overflow-hidden bg-gray-100"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 20vw"
              className="object-cover"
              priority={index < 3}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
