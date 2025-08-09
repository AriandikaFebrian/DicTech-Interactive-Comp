'use client'

import React from "react";
import PageLayout from "../layouts/pagelayout";
import Image from "next/image";
import OtherServices from "./otherservices";
import { services } from "./servicesData";

const images = [
  "/images/mobile1.jpg",
  "/images/mobile2.jpg",
  "/images/mobile3.jpg",
  "/images/mobile4.jpg",
  "/images/mobile5.jpg",
];

export default function MobileAppDevelopment() {
  const currentId = "mobile-app";

  const items = [
    "Aplikasi mobile native dan cross-platform",
    "Desain UI/UX yang menarik dan intuitif",
    "Integrasi API dan layanan backend",
    "Push notifications dan fitur offline",
    "Optimasi performa dan penghematan baterai",
    "Keamanan data dan autentikasi pengguna",
    "Pengujian di berbagai perangkat dan resolusi",
    "Publikasi di App Store dan Google Play",
    "Pemeliharaan dan update berkala",
  ];

  const steps = [
    "Analisis & Perencanaan",
    "Desain UI/UX",
    "Pengembangan Aplikasi",
    "Pengujian & QA",
    "Rilis & Maintenance",
  ];

  return (
    <PageLayout
      title="Mobile App Development"
      subtitle="Custom mobile applications designed to engage users and deliver seamless experiences on any device."
    >
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Text Content */}
          <div className="md:col-span-2 space-y-10">
            {/* Deskripsi */}
            <div>
              <h3 className="text-2xl text-black uppercase tracking-wide">
                What is Mobile App Development?
              </h3>
              <hr className="my-4 border-t-4 w-20 border-teal-600" />
              <p className="text-gray-700 leading-relaxed mb-3">
                Mobile App Development is the process of creating applications
                optimized for smartphones and tablets, designed to provide users
                with a fast, engaging, and user-friendly experience.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether native or cross-platform, our solutions focus on performance,
                security, and intuitive design, helping your business reach customers
                wherever they are.
              </p>
            </div>

            {/* Workflow */}
            <div className="max-w-5xl mx-auto my-16 px-4">
              <h2 className="text-3xl font-extrabold text-center text-teal-600 mb-12">
                Our Development Process
              </h2>
              <div className="flex justify-between items-center">
                {steps.map((step, i, arr) => (
                  <div key={i} className="flex-1 relative text-center">
                    <div className="mx-auto w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <p className="mt-2 font-semibold">{step}</p>
                    {i < arr.length - 1 && (
                      <div className="absolute top-5 right-0 w-full h-1 bg-teal-300 -translate-x-1/2 z-[-1]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-lg shadow-lg ${
                  i % 3 === 0 ? "row-span-2" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`Mobile App Development Image ${i + 1}`}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>

        <section className="bg-gray-50 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.02),rgba(0,0,0,0.02) 1px,transparent 1px,transparent 20px)] py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl text-black uppercase tracking-wide">Key Features</h2>
            <hr className="my-4 border-t-4 w-20 border-teal-600" />
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-8 text-gray-700 list-disc list-inside">
              {items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <OtherServices currentId={currentId} services={services} />
      </section>
    </PageLayout>
  );
}
