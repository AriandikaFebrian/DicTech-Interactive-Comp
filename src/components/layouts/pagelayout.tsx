// src/components/layouts/PageLayout.tsx
import React from "react";
import HeroSection from "./herolayout";

interface PageLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, subtitle, children }) => {
  return (
    <main>
      <HeroSection title={title} subtitle={subtitle} />

      {/* Konten bawahnya */}
      <section className="py-24 bg-white ">
        <div className="max-w-6xl mx-auto px-6 text-gray-800 dark:text-gray-900 space-y-6 bg-wti">
          {children}
        </div>
      </section>
    </main>
  );
};

export default PageLayout;
