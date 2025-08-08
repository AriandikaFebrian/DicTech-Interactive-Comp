// src/app/history/page.tsx
import PageLayout from "@/components/layouts/pagelayout";
import Image from "next/image";
import VisualHighlightSection from "./visualhistory";

const HistoryPage = () => {
  return (
    <PageLayout
      title="The Story Behind DicTech Interactive"
      subtitle="Discover how DicTech Interactive was born — from humble beginnings to a forward-thinking digital powerhouse led by Ari Andika Febrian."
    >
      {/* Grid utama: 3 kolom di desktop, 1 kolom di mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* Kiri besar: Our History */}
        <div className="md:col-span-2 space-y-6">
          <section>
  <h2 className="text-3xl font-semibold text-black tracking-wide mb-4">
    Our History
  </h2>
  <hr className="border-t-4 w-20 border-teal-600 mb-6" />
  <p>
    DicTech Interactive was founded by <strong>Ari Andika Febrian</strong> in 2025 with a clear vision to empower individuals and businesses to harness the power of technology through innovative web and mobile solutions.
  </p>
  <p>
    The idea came from a personal reflection: many aspiring web developers believe they must rely on large platforms or third-party services to build and host their projects. I asked myself, “Why not create something of my own that could serve not only my needs but also help future clients establish their digital presence seamlessly?” That’s how DicTech Interactive was born — a platform designed to be flexible, independent, and client-focused.
  </p>
  <p>
    I chose to launch this startup in 2025 because I saw a promising future in online-based technology services. With increasing demand for mobile apps and digital experiences, and the rising trend of remote and decentralized companies, I envisioned DicTech Interactive as a pioneer digital startup without the constraints of traditional headquarters.
  </p>

  {/* Gallery images */}
  <VisualHighlightSection/>
</section>

          
        </div>
        

        {/* Kanan: gambar dan kotak info */}
        <div className="flex flex-col gap-8">

          {/* Kotak-kotak kecil */}
<div className="grid grid-cols-1 gap-1 auto-rows-fr">
  <section className="p-6 border rounded-md shadow-sm h-full">
              <h2 className="text-xl font-semibold mb-3">Why We Choose to be a Remote Startup</h2>
              <p className="text-sm leading-relaxed">
                Choosing to operate without a physical office aligns with the modern trends of remote work, offering greater flexibility and efficiency. This approach allows DicTech Interactive to minimize overhead costs and focus resources on delivering quality products and services, while embracing a dynamic, location-independent workforce.
              </p>
            </section>

              <section className="p-6 border rounded-md shadow-sm h-full">
              <h2 className="text-xl font-semibold mb-3">Looking Ahead</h2>
              <p className="text-sm leading-relaxed">
                Looking ahead, I envision DicTech Interactive expanding its reach and services, continuously adapting to emerging technologies and market needs. This platform is more than a company; it is a commitment to empowering creativity, fostering collaboration, and driving digital transformation on a global scale.
              </p>
              <p className="text-sm leading-relaxed mt-2">
                Beyond just building software, my goal with DicTech Interactive is to create opportunities — for clients, collaborators, and myself — to innovate freely and grow together in this fast-evolving digital era.
              </p>
            </section>

  <section className="p-6 border rounded-md shadow-sm h-full">
              <h2 className="text-xl font-semibold mb-3">About the Founder</h2>
              <p className="text-sm leading-relaxed">
                My educational background and early career shaped this journey. I am a proud graduate of UT School (United Tractors School), where I developed a strong foundation in full-stack web development. I had the opportunity to intern at United Tractors, working closely in their Digital Application Division (DAD), sharpening my skills in real-world projects and earning certifications such as Astra Tech and UT School’s professional credentials.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HistoryPage;
