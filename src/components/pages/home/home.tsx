// src/app/page.tsx
import React from "react";
import HeroSection from "../../organisms/home/herosection";
import AboutUs from "../../organisms/home/aboutus";
import ServicesPage from "../../organisms/home/services";
import FeaturedProjectsSection from "../../organisms/home/whychoseus";
import ProjectPage from "../../organisms/home/project"; // Importing the Project component
import CareerAndInternship from "@/components/organisms/home/carrerandinternship";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      < HeroSection />

     <AboutUs />
      < ServicesPage />
      < ProjectPage />
      < CareerAndInternship/>
      < FeaturedProjectsSection />
      
      {/* Additional sections can be added here */}
      {/* For example, a Testimonials section or a Contact section */}
      
    </div>
  );
};

export default Home;
