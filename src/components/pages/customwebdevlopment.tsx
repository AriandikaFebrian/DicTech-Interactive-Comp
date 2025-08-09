'use client'

import React from "react";
import PageLayout from "../layouts/pagelayout";
import Image from "next/image";
import { useState } from "react";
import OtherServices from "./otherservices";
import {services} from "./servicesData";

const images = [
  "/images/custom1.jpg",
  "/images/custom2.jpg",
  "/images/custom3.jpg",
  "/images/custom4.jpg",
  "/images/custom5.jpg",
];

export default function CustomWebDevelopment() {
    const currentId = "custom-web-development";
    
const items = [
  "Desain responsif dan mobile-friendly",
  "Kode bersih, terstruktur, dan scalable",
  "Integrasi API dan sistem pihak ketiga",
  "Optimasi performa dan SEO",
  "Keamanan dan proteksi data",
  "User experience (UX) yang intuitif",
  "Pengembangan fitur kustom sesuai kebutuhan",
  "Dukungan teknis dan pemeliharaan berkelanjutan",
  "Deployment dan monitoring 24/7",
];

  
const steps = [
  "Konsultasi",
  "Desain UI/UX",
  "Pengembangan",
  "Deployment",
  "Dukungan",
];

  return (
    <PageLayout
      title="Custom Web Development"
      subtitle="Tailored websites built to fit your unique business needs and deliver outstanding user experiences."
    >
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Text Content */}
          <div className="md:col-span-2 space-y-10">
            {/* Deskripsi */}
            <div>
         <h3 className="text-2xl text-black uppercase  tracking-wide">What is Custom Web Development?</h3>
<hr className="my-4 border-t-4 w-20 border-teal-600" />
<p className="text-gray-700 leading-relaxed mb-3">
  Custom Web Development is the process of creating websites specifically designed to meet your unique business goals and requirements. Unlike generic templates or website builders, this service offers flexible, scalable, and personalized solutions.
</p>
<p className="text-gray-700 leading-relaxed">
  Choosing custom development means your website will have the exact features you need, optimized performance, and a design that reflects your brand identity, delivering the best user experience and supporting your business growth.
</p>

            </div>

            {/* Fitur */}


            {/* Workflow */}
      <div className="max-w-5xl mx-auto my-16 px-4">
  <h2 className="text-3xl font-extrabold text-center text-teal-600 mb-12">
    Proses Kerja Kami
  </h2>
  <div className="flex justify-between items-center">
    {[
      "Konsultasi",
      "Desain UI/UX",
      "Pengembangan",
      "Deployment",
      "Dukungan",
    ].map((step, i, arr) => (
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
              <div key={i} className={`overflow-hidden rounded-lg shadow-lg ${i % 3 === 0 ? 'row-span-2' : ''}`}>
                <Image
                  src={src}
                  alt={`Custom Web Development Image ${i + 1}`}
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
        <h2 className="text-2xl text-black uppercase  tracking-wide">
                Fitur Unggulan
        </h2>
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
