"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { UserCircleIcon } from "lucide-react";

const testimonials = [
  { 
    text: "This platform has helped us streamline our processes and improve collaboration across departments. Truly a game-changer!",
    name: "TechCorp",
    position: "CEO, John Doe",
    logo: "/images/techcorp-logo.png", 
  },
  { 
    text: "Working with this team was a delight. Their technology solutions are top-notch and have significantly increased our efficiency.",
    name: "InnovateX",
    position: "Product Manager, Jane Smith",
    logo: "/images/innovatex-logo.png",
  },
  { 
    text: "The innovative approach and seamless experience make this platform the perfect tool for our growing organization.",
    name: "GreenTech",
    position: "CEO, Michael Lee",
    logo: "/images/greentech-logo.png", 
  },
  {
    text: "We saw an immediate improvement in project delivery and communication within our teams. Highly recommended for businesses looking to scale.",
    name: "EcoSolutions",
    position: "Operations Manager, Emma Brown",
    logo: "/images/ecosolutions-logo.png",
  },
  {
    text: "A truly powerful platform that has allowed us to handle more customers efficiently while maintaining excellent service standards.",
    name: "FutureWorks",
    position: "CTO, James White",
    logo: "/images/futureworks-logo.png",
  },
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gray-950 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-800 dark:text-gray-900 bg-wti">
        {/* Title */}
<h3 className="text-m text-white">Client Feedback</h3>
<p className="text-3xl font-semibold text-white">Shaping the Future with Our Clients</p> 
<hr className="my-4 border-t-4 w-20 mx-auto border-teal-600" />
<h3 className="text-m text-white">Our Clients Speak: Success Stories</h3>

        {/* Testimonial Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center space-x-6">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Testimonial Text */}
            <div className="flex-1 text-left md:mr-6 mb-6 md:mb-0">
              {/* Teks testimonial dengan max-height dan padding konsisten */}
              <div className="max-w-xl min-h-[200px] max-h-[250px] overflow-auto mb-6">
                <p 
                  key={testimonials[currentTestimonial].text} 
                  className="text-xl text-white transition-opacity duration-500 ease-in opacity-100"
                >
                  {testimonials[currentTestimonial].text}
                </p>
              </div>

              <p 
                key={testimonials[currentTestimonial].name} 
                className="text-lg text-teal-600 font italic transition-opacity duration-500 ease-in opacity-100"
              >
                {testimonials[currentTestimonial].name} – {testimonials[currentTestimonial].position}
              </p>

              {/* Anchor Dots */}
              <div className="mt-6 flex justify-center space-x-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`transition-all duration-300 cursor-pointer border h-3 
                      ${currentTestimonial === i
                        ? "w-6 bg-teal-400 border-teal-400 rounded-full"
                        : "w-3 bg-transparent border-teal-600 rounded-full hover:w-6 hover:rounded-none hover:bg-white/10"}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Vertical Border (Optional) */}
          <div className="hidden md:block border-l-2 border-gray-300 opacity-50 h-100 mx-6"></div>

          {/* Logo Section */}
          <div className="mt-6 md:mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {testimonials.map((testimonial, index) => (
    <figure key={index} className="flex flex-col items-center space-y-2">
      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-teal-500">
        <UserCircleIcon className="w-10 h-10" />
      </div>
      <figcaption className="text-center">
        <p className="font-semibold text-sm">{testimonial.name}</p>
        <p className="text-xs text-gray-500">{testimonial.position}</p>
      </figcaption>
    </figure>
  ))}
</div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
