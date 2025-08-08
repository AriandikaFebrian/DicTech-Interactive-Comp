// src/app/about-us/page.tsx
import React from "react";
import Profil from "@/components/pages/profil/profil"; // Importing the Services component
import TestimonialsSection from "@/components/organisms/profil/testimonial";
import VisionMissionAccordion from "@/components/organisms/profil/visimisi";

const ProfilPage = () => {
  return (
    <div>
      <Profil />
      <hr />
            <VisionMissionAccordion />
            <hr className="border-t-2 border-teal-600" />

      <TestimonialsSection/>
    </div>
  );
};

export default ProfilPage;

