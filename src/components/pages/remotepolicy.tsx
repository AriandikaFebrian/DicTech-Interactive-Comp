'use client';

import React from 'react';
import PageLayout from '../layouts/pagelayout';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui/tabs';
import Image from 'next/image';
import VisualHighlightSection from './visualremotework';

const policySections = [
  {
    key: 'purpose',
    title: 'Tujuan Kebijakan',
    content: `DicTech Interactive berkomitmen menyediakan lingkungan kerja yang fleksibel dan produktif bagi semua karyawan. Kebijakan kerja jarak jauh ini dirancang untuk mendukung efisiensi, kolaborasi, dan keseimbangan antara kehidupan pribadi dan pekerjaan.

Kami percaya bahwa fleksibilitas dapat meningkatkan kreativitas dan kepuasan kerja, sekaligus menjaga standar profesionalisme dan kualitas hasil kerja.`,
  },
  {
    key: 'eligibility',
    title: 'Kelayakan Kerja Jarak Jauh',
    content: `Karyawan dengan peran yang memungkinkan pekerjaan virtual dapat mengajukan untuk bekerja dari jarak jauh. Penentuan kelayakan dilakukan berdasarkan evaluasi manajer langsung dan kebutuhan operasional tim.

Karyawan diharapkan memiliki disiplin tinggi dan akses teknologi yang memadai untuk menjaga produktivitas.`,
  },
  {
    key: 'work-hours',
    title: 'Jam Kerja & Fleksibilitas',
    content: `Jam kerja standar adalah pukul 09:00 sampai 17:00, Senin hingga Jumat, dengan fleksibilitas menyesuaikan zona waktu dan kebutuhan pribadi.

Pengaturan jam kerja harus tetap memastikan penyelesaian tugas tepat waktu dan komunikasi efektif antar tim. Karyawan dianjurkan menggunakan kalender dan aplikasi manajemen waktu untuk koordinasi yang lancar.`,
  },
  {
    key: 'communication',
    title: 'Komunikasi & Kolaborasi',
    content: `Semua karyawan jarak jauh wajib menggunakan platform komunikasi resmi seperti Slack, Microsoft Teams, atau Zoom untuk rapat dan diskusi rutin.

Kolaborasi aktif dan transparan adalah kunci keberhasilan kerja jarak jauh. Karyawan didorong untuk berbagi update secara teratur dan proaktif menyelesaikan masalah.`,
  },
];

const images = [
  { src: '/images/services.jpg', alt: 'Photo 1' },
  { src: '/images/policy.png', alt: 'Photo 2' },
  { src: '/images/values.png', alt: 'Photo 3' },
  { src: '/images/about.png', alt: 'Photo 4' },
  { src: '/images/history.png', alt: 'Photo 5' },
  { src: '/images/projects.png', alt: 'Photo 6' },
];

export default function RemoteWorkPolicy() {
  return (
    <main>
      <PageLayout
        title="Kebijakan Kerja Jarak Jauh"
        subtitle="Panduan DicTech Interactive untuk Mendukung Produktivitas dan Keseimbangan Kerja"
      >
        <div className="max-w-4xl mx-auto px-6 py-12">
                    <h3 className="text-m text-black-300 text-center">Remote Work Policy</h3>
          <p className="text-3xl font-semibold text-black-600 tracking-wide text-center">
            Standards That Drive Innovation
          </p>
          <hr className="my-6 border-t-6 w-30 mx-auto border-teal-600" />

          <Tabs defaultValue="purpose" className="space-y-8">
  <TabsList className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-200 ">
    {policySections.map((section) => (
   <TabsTrigger
  key={section.key}
  value={section.key}
  className="text-gray-700 data-[state=active]:text-teal-600 font-semibold py-3 relative text-sm after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full data-[state=active]:after:w-full after:transition-all after:duration-300 after:ease-in-out"
>
  {section.title}
</TabsTrigger>

    ))}
  </TabsList>

  <div className="min-h-[220px]">
    {policySections.map((section) => (
      <TabsContent key={section.key} value={section.key}>
        <p className="text-gray-800 text-lg whitespace-pre-line leading-relaxed">
          {section.content}
        </p>
      </TabsContent>
    ))}
  </div>
</Tabs>


          {/* Gallery 6 images in grid */}
       <VisualHighlightSection/>
        </div>
      </PageLayout>
    </main>
  );
}
