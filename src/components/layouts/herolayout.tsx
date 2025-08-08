"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const handleBreadcrumbClick = (index: number) => {
    const path = "/" + segments.slice(0, index + 1).join("/");
    router.push(path);
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: 'url("/Images/ChatGPT Image Aug 7, 2025, 10_43_12 PM.png")' }}
    >
      {/* Overlay Tile Color Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 opacity-80 mix-blend-overlay z-0" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Breadcrumb */}
        {segments.length > 0 && (
          <div className="pb-6">
            <div className="text-gray-600 dark:black-gray-300 text-sm flex items-center space-x-1">
              <span>←</span>
              <button
                onClick={() => router.push("/")}
                className="hover:text-black dark:hover:text-white font-mono cursor-pointer"
              >
                ...
              </button>
              {segments.map((segment, index) => (
                <React.Fragment key={index}>
                  <span>/</span>
                  <button
                    onClick={() => handleBreadcrumbClick(index)}
                    className="font-mono cursor-pointer hover:text-teal-300 dark:hover:text-teal-600"
                  >
                    {segment}
                  </button>
                </React.Fragment>
              ))}
              
            </div>
                      <hr className="my-6 border-t-2 w-full border-teal-600" />
          </div>
        )}

        

        {/* Title & Subtitle */}
        <div className="flex flex-col md:flex-row items-start justify-start">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
