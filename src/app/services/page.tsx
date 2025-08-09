// src/app/about-us/page.tsx
import React from "react";
import Services from "@/components/pages/services"; // Importing the Services component
import TestimonialsSection from "@/components/organisms/profil/testimonial";

const ServicesPage = () => {
  return (
    <div>
      <Services />
      <TestimonialsSection/>
    </div>
  );
};

export default ServicesPage;

