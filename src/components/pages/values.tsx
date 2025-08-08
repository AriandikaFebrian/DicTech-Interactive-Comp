'use client';

import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import PageLayout from '@/components/layouts/pagelayout';
import { Cpu, ArrowDown, RefreshCcw, Star, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const coreValues = [
  {
    title: 'Simplify',
    icon: <Zap className="w-6 h-6 text-teal-500" />,
    description: `Pada intinya, kami percaya bahwa kesederhanaan adalah kunci keberhasilan dalam pengembangan perangkat lunak modern. Dengan menyederhanakan proses pengembangan dan interaksi pengguna, kami berusaha untuk menghilangkan kompleksitas yang tidak perlu, sehingga pengguna dapat berfokus pada hal-hal yang benar-benar penting. Kesederhanaan bukan berarti mengorbankan fitur, tetapi merancang sistem yang intuitif, efisien, dan mudah dipahami oleh berbagai kalangan. Ini memungkinkan pengembangan lebih cepat, lebih sedikit bug, dan pengalaman pengguna yang mulus tanpa kebingungan.`,
  },
  {
    title: 'Program',
    icon: <Cpu className="w-6 h-6 text-teal-500" />,
    description: `Fokus utama kami adalah pada pengkodean dan pengembangan web yang solid. Kami percaya bahwa fondasi teknis yang kuat adalah pondasi untuk solusi digital yang sukses dan tahan lama. Dengan menerapkan praktik terbaik dalam pemrograman, menggunakan teknologi terkini, dan mengikuti standar industri, kami menciptakan produk yang bukan hanya berfungsi dengan baik, tapi juga mudah dipelihara dan dikembangkan lebih lanjut. Kami juga menekankan pentingnya kolaborasi antar developer dan komunikasi yang jelas agar setiap baris kode menyatu dengan visi besar perusahaan.`,
  },
  {
    title: 'Adapt',
    icon: <ArrowDown className="w-6 h-6 text-teal-500" />,
    description: `Dunia teknologi dan kebutuhan pengguna terus berubah dengan cepat. Oleh karena itu, kami sangat menghargai kemampuan untuk beradaptasi. Adaptasi kami tidak hanya terbatas pada teknologi dan desain, tetapi juga pada pendekatan kerja, metode pengembangan, dan strategi bisnis. Dengan responsif terhadap feedback dan tren terbaru, kami memastikan produk yang kami buat selalu relevan, efektif, dan dapat memenuhi kebutuhan pasar yang dinamis. Adaptasi juga mencakup pembelajaran berkelanjutan dan keterbukaan terhadap inovasi.`,
  },
  {
    title: 'Revise',
    icon: <RefreshCcw className="w-6 h-6 text-teal-500" />,
    description: `Kami memahami bahwa tidak ada produk yang sempurna pada iterasi pertama. Oleh karena itu, revisi menjadi bagian vital dari proses kami. Melalui evaluasi berkala, pengujian, dan umpan balik pengguna, kami terus menyempurnakan dan memperbarui fitur serta desain. Revisi juga mencakup perbaikan bug, peningkatan performa, dan penyempurnaan pengalaman pengguna agar produk selalu berada di level terbaiknya. Dengan siklus revisi yang terstruktur, kami mampu menjaga kualitas dan keberlanjutan jangka panjang.`,
  },
  {
    title: 'Keep',
    icon: <Star className="w-6 h-6 text-teal-500" />,
    description: `Kami tidak hanya berusaha untuk membuat produk yang hebat, tetapi juga memastikan bahwa pengalaman pengguna tetap menarik dan mudah digunakan. Nilai “Keep” merefleksikan komitmen kami untuk menjaga standar kualitas, menjaga hubungan dengan pelanggan, dan mempertahankan loyalitas pengguna. Kami percaya bahwa mempertahankan kepercayaan dan kepuasan pengguna sama pentingnya dengan menarik pengguna baru. Oleh sebab itu, kami fokus pada konsistensi, kemudahan penggunaan, dan pelayanan yang responsif.`,
  },
];

export default function ValuesPage() {
  const [selected, setSelected] = useState(coreValues[0].title);

  const currentIndex = coreValues.findIndex(v => v.title === selected);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + coreValues.length) % coreValues.length;
    setSelected(coreValues[prevIndex].title);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % coreValues.length;
    setSelected(coreValues[nextIndex].title);
  };

  return (
    <PageLayout
      title="Our Core Values"
      subtitle="At DicTech Interactive, our values drive our mission and vision."
    >
      {/* Header + gambar S.P.A.R.K. */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 px-4 mt-8">
        {/* Gambar */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/spark-illustration.png"
            alt="S.P.A.R.K. Core Values Illustration"
            width={600}
            height={400}
            className="rounded-md shadow-lg object-contain"
            priority
          />
        </div>

        {/* Intro singkat */}
        <div className="w-full md:w-1/2 text-gray-800">
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <p className="text-3xl font-semibold text-black-600 tracking-wide mb-4">
            From Spark to Success.
          </p>
          <hr className="my-4 border-t-4 w-20 border-teal-600" />
          <p className="mb-4 text-lg leading-relaxed">
            <strong>S.P.A.R.K.</strong> adalah inti dari nilai kami — singkatan dari <em>Simplify, Program, Adapt, Revise, dan Keep</em>. Filosofi ini mencerminkan cara kami bekerja dan berinovasi, memastikan setiap langkah yang kami ambil selalu selaras dengan visi besar DicTech Interactive.
          </p>
          <p className="leading-relaxed">
            Kami percaya bahwa dengan menyederhanakan proses, memprogram dengan tekun, beradaptasi dengan perubahan, merevisi secara berkelanjutan, dan menjaga kualitas, kami dapat menciptakan produk dan layanan yang berdampak dan tahan lama.
          </p>
        </div>
      </div>

      {/* Tabs + navigasi + gambar */}
      <div className="max-w-6xl mx-auto mt-12 px-4 flex flex-col md:flex-row gap-12 items-start">
        
        {/* Navigasi kiri */}
      <button
  onClick={handlePrev}
  aria-label="Previous"
  className="text-teal-600 text-3xl font-bold hover:text-teal-800 transition select-none cursor-pointer"
  style={{ flexShrink: 0, width: 48, height: 608, lineHeight: '48px', textAlign: 'center', userSelect: 'none' }}
>
  <ChevronLeft size={32} />
</button>

        {/* Tabs utama */}
        <div className="flex-1 max-w-4xl">
                    <h3 className="text-xl font-semibold mb-2">Our S.P.A.R.K</h3>
          <hr className="my-4 border-t-4 w-20 border-teal-600" />
          <Tabs value={selected} onValueChange={setSelected} className="w-full">
            <TabsList className="flex w-full border-b border-teal-500 bg-transparent">
              {coreValues.map((value) => (
                <TabsTrigger
  key={value.title}
  value={value.title}
  className={`
    flex-1 text-center font-semibold
    px-4 py-3
    transition
    hover:bg-teal-100 hover:text-teal-700
    data-[state=active]:text-teal-900
    data-[state=active]:bg-transparent
    relative text-sm text-black
    after:absolute after:left-0 after:-bottom-[2px]
    after:h-[2px] after:bg-teal-600
    after:w-0 hover:after:w-full
    data-[state=active]:after:w-full
    after:transition-all after:duration-300 after:ease-in-out
    cursor-pointer
  `}
>
  {value.title}
</TabsTrigger>

              ))}
            </TabsList>

            {coreValues.map((value) => (
              <TabsContent
                key={value.title}
                value={value.title}
                className="p-6 text-gray-800 bg-transparent"
                style={{ minHeight: 180 }} // fixed height supaya konten gak bikin page naik turun
              >
                <div className="flex items-center gap-3 mb-4">
                  {value.icon}
                  <h3 className="text-2xl font-semibold">{value.title}</h3>
                </div>
                <p>{value.description}</p>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Navigasi kanan */}
        <button
  onClick={handleNext}
  aria-label="Next"
  className="text-teal-600 text-3xl font-bold hover:text-teal-800 transition select-none cursor-pointer"
  style={{ flexShrink: 0, width: 48, height: 608, lineHeight: '48px', textAlign: 'center', userSelect: 'none' }}
>
  <ChevronRight size={32} />
</button>

        {/* Gambar kanan */}
        <div className="hidden md:flex md:w-1/3 justify-center items-start">
          <Image
            src="/images/spark-values.png"
            alt="Illustration of S.P.A.R.K. Core Values"
            width={350}
            height={450}
            className="rounded-md shadow-lg object-contain"
            priority
          />
        </div>
      </div>
    </PageLayout>
  );
}
