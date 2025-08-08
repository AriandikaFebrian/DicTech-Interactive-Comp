'use client'

import React from "react";
import PageLayout from "../../layouts/pagelayout";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

const ProfilPage = () => {

  const sparkPhilosophy = [
    { title: "Simplify", desc: "Menyederhanakan proses pengembangan dan interaksi pengguna." },
    { title: "Program", desc: "Fokus pada pengkodean dan pengembangan web." },
    { title: "Adapt", desc: "Menyesuaikan desain dan teknologi dengan kebutuhan pengguna." },
    { title: "Revise", desc: "Menyempurnakan dan memperbarui fitur serta desain." },
    { title: "Keep", desc: "Memastikan pengalaman pengguna tetap menarik dan mudah digunakan." }
  ];

  return (
    <PageLayout
      title="About DicTech Interactive"
      subtitle="A forward-thinking digital studio driven by creativity and innovation."
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Teks profil */}
        <div className="space-y-6">
          <div className="space-y-5">
            <h3 className="text-m text-black-300">Profil Perusahaan</h3>
            <p className="text-3xl font-semibold text-black-600 tracking-wide">
              From Spark to Success.
            </p>
            <hr className="my-4 border-t-4 w-20 border-teal-600" />
            <p>
              <strong>DicTech Interactive</strong> adalah studio teknologi digital
              yang berdiri pada tahun 2025, berfokus pada pengembangan website,
              aplikasi, dan desain antarmuka yang mengutamakan pengalaman pengguna.
            </p>
            <p>
              Kami memadukan keahlian teknis dan kreativitas untuk menciptakan
              solusi digital yang tidak hanya fungsional, tetapi juga memiliki nilai
              estetika tinggi. Misi kami adalah membantu bisnis, komunitas, dan
              individu beradaptasi serta berkembang di era digital.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: "Our History", href: "/history" },
              { name: "Our Values", href: "/values" },
              { name: "Our Policy", href: "/policy" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between gap-2 border border-gray-300 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:border-teal-500 hover:text-teal-600 transition-colors"
              >
                <span>{link.name}</span>
                <Plus
                  size={18}
                  className="text-gray-400 group-hover:text-teal-500 transition-colors"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Gambar & SPARK */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <Image
              src="/images/TES.jpg"
              alt="DicTech Interactive"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>

          {/* SPARK Philosophy */}
          <div className="grid grid-cols-5 gap-3 pt-2">
  {sparkPhilosophy.map((item, index) => (
    <div
      key={index}
      className="relative bg-white border border-gray-300 rounded-lg p-3 text-center transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_15px_rgba(0,128,128,0.5)] group"
    >
      <h4 className="font-semibold text-teal-600 text-sm mb-1">{item.title}</h4>

      {/* Tooltip muncul saat hover */}
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {item.desc}
      </div>
    </div>
  ))}
</div>

        </div>

        
      </div>

    </PageLayout>
  );
};

export default ProfilPage;
