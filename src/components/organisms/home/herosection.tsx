"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  { image: "/images/services.jpg", anchor: "#services" },
  { image: "/images/about.png", anchor: "#about" },
  { image: "/images/projects.png", anchor: "#projects" },
  { image: "/images/values.png", anchor: "#about" },
  { image: "/images/policy.png", anchor: "#projects" },
];

const HeroSection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSlide = (direction: "prev" | "next") => {
    setCurrentSlide((prev) =>
      direction === "prev"
        ? (prev - 1 + slides.length) % slides.length
        : (prev + 1) % slides.length
    );
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map(({ image }, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow">
          {t("hero.title1")}
        </h1>
        <p className="text-sm md:text-lg text-gray-300 mb-8 max-w-xl drop-shadow">
          {t("hero.description")}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/services"
            className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-md text-sm md:text-base font-semibold transition"
          >
            {t("hero.learnMore")}
          </a>
          <a
            href="/contact"
            className="border-2 border-white hover:bg-white hover:text-black text-white py-3 px-6 rounded-md text-sm md:text-base font-semibold transition"
          >
            {t("hero.contactUs")}
          </a>
        </div>
      </div>

      {/* Arrows */}
      <button
  onClick={() => handleSlide("prev")}
  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-transparent text-white p-2 md:p-3 rounded-full border border-white hover:bg-gray-200 hover:text-black transition cursor-pointer"
>
  <FaArrowLeft className="w-4 h-4" />
</button>

<button
  onClick={() => handleSlide("next")}
  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-transparent text-white p-2 md:p-3 rounded-full border border-white hover:bg-gray-200 hover:text-black transition cursor-pointer"
>
  <FaArrowRight className="w-4 h-4" />
</button>


      {/* Down Arrow */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
  <p className="text-white text-sm md:text-base font-medium tracking-wide mb-3">Read More</p>

<button
  aria-label="Scroll down"
  onClick={() => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="w-8 h-8 flex items-center justify-center rounded-full border-3 border-white text-white hover:bg-white hover:text-black transition cursor-pointer animate-[bounce_2s_infinite]"
>

    <div >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </button>
</div>


      {/* Anchor Dots */}
   <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
  {slides.map((_, i) => (
    <button
      key={i}
      onClick={() => setCurrentSlide(i)}
      className={`transition-all duration-300 cursor-pointer border h-3
        ${currentSlide === i
          ? "w-6 bg-teal-400 border-teal-400 rounded-none"
          : "w-3 bg-transparent border-white rounded-full hover:w-6 hover:rounded-none hover:bg-white/10"}`}
      aria-label={`Go to slide ${i + 1}`}
    />
  ))}
</div>


    </section>
  );
};

export default HeroSection;
