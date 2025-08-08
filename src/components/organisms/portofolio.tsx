// src/app/portfolio/page.tsx
import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-center text-teal-600">My Portfolio</h1>
      <p className="mt-4 text-center text-lg text-gray-600">
        Here are some of the projects I&apos;ve worked on.
      </p>

      {/* Portfolio Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/images/portfolio/project1.jpg"  // Gambar pertama proyek
            alt="Project 1"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-teal-600">Project One</h2>
            <p className="mt-2 text-gray-600">
              A brief description of the project. Technologies used: HTML, CSS, JavaScript.
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/images/portfolio/project2.jpg"  // Gambar kedua proyek
            alt="Project 2"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-teal-600">Project Two</h2>
            <p className="mt-2 text-gray-600">
              A brief description of the project. Technologies used: React, Node.js.
            </p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/images/portfolio/project3.jpg"  // Gambar ketiga proyek
            alt="Project 3"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-teal-600">Project Three</h2>
            <p className="mt-2 text-gray-600">
              A brief description of the project. Technologies used: Vue.js, Firebase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
