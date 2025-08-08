// src/components/pages/AboutUs.tsx
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section id="about" className="about-us py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Company Overview Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-teal-800">DicTech Interactive™</h2>
            
            {/* Subheadline */}
            <p className="mt-4 text-3xl text-gray-800 font-bold">
              One of the leading web development companies, offering comprehensive digital solutions to empower businesses in the digital era.
            </p>
            
            {/* Divider */}
            <hr className="my-6 border-t-6 w-50 border-teal-600"/>

            {/* Company Description */}
            <p className="mt-6 text-lg text-gray-800">
              DicTech Interactive™ is a leading innovator in the web development industry, offering comprehensive digital solutions that drive business success. 
              With a passion for cutting-edge technology, we specialize in creating scalable, user-friendly websites and web applications tailored to the unique needs of each client. 
              Our goal is to be a trusted partner for businesses across various industries, empowering them to thrive in the digital era. We aim to contribute to technological advancements, foster growth, 
              and provide exceptional value through our expertise and long-term client relationships.
            </p>

            {/* CTA Button */}
            <div className="mt-8 text-center">
              <a 
                href="#more-about" 
                className="inline-block px-8 py-3 text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition duration-300"
              >
                Learn More About This Company
              </a>
            </div>
          </div>

          {/* Right Image Content */}
          <div>
            <Image 
  src="/images/company.png" 
  alt="Company Overview" 
  className="w-full h-auto rounded-lg shadow-lg"
  width={600} // Tentukan lebar gambar
  height={400} // Tentukan tinggi gambar
/>


            {/* Certifications
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <Image src="/iso-37001.jpg" alt="ISO 37001" className="w-full h-auto rounded-lg shadow-lg" width={600} // Tentukan lebar gambar
  height={400} />
              <Image src="/iso-14001.jpg" alt="ISO 14001" className="w-full h-auto rounded-lg shadow-lg" width={600} // Tentukan lebar gambar
  height={400} />
              <Image src="/iso-9001.jpg" alt="ISO 9001" className="w-full h-auto rounded-lg shadow-lg" width={600} // Tentukan lebar gambar
  height={400} />
              <Image src="/iso-45001.jpg" alt="ISO 45001" className="w-full h-auto rounded-lg shadow-lg" width={600} // Tentukan lebar gambar
  height={400} />
            </div> */}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
