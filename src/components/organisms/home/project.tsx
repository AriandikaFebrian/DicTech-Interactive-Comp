import Link from "next/link";
import React from "react";

const ProjectPage = () => {
  return (
    <section className="services py-24 bg-gradient-to-r bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {/* Title & Description */}
        <div className="lg:col-span-2 sm:col-span-2 p-6 flex flex-col justify-center shadow border border-teal-400/50">
          <h2 className="text-4xl font-bold text-teal-700">Our Projects</h2>
          <hr className="my-6 border-t-6 w-30 border-teal-600" />
          <p className="mt-4 text-gray-700 dark:text-black-300">
            We are proud of the projects we’ve completed for our clients. Each project represents our commitment to quality and innovation.
          </p>
        </div>

        {/* Project 1 */}
        <div className="p-6 bg-white/10 text-black shadow min-h-[250px] border border-white/30 flex flex-col justify-between transition-colors duration-300">
          <h3 className="text-xl font-semibold mb-2">WebFlow: Custom Web Development</h3>
          <p>Developed a responsive, scalable website to enhance user experience and engagement.</p>
          <Link href="/webflow" className="relative text-sm text-black after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out w-fit"
>
            Read More →
          </Link>
        </div>

        {/* Project 2 */}
        <div className="p-6 bg-teal-600 text-white shadow min-h-[250px] border border-white/30 flex flex-col hover:bg-black/90 justify-between transition-colors duration-300">
          <h3 className="text-xl font-semibold mb-2">DashMate: Web App & Dashboard Development</h3>
          <p>Created a cross-platform app and real-time dashboards to provide instant data insights.</p>
            <Link href="/mobile-app" className="relative text-sm text-white after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out w-fit"
>
            Read More →
          </Link>
        </div>

        {/* Project 3 */}
        <div className="p-6 bg-white/10 text-black shadow min-h-[250px] border border-white/30 flex flex-col justify-between transition-colors duration-300">
          <h3 className="text-xl font-semibold mb-2">ShopEase: UI/UX Design for E-commerce</h3>
          <p>Redesigned an e-commerce platform’s UI/UX to increase conversion rates and customer satisfaction.</p>
                      <Link href="/mobile-app" className="relative text-sm text-black after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out w-fit"
>
            Read More →
          </Link>
        </div>

        {/* Project 4 */}
        <div className="p-6 bg-teal-600 text-white shadow min-h-[250px] border border-white/30 flex flex-col hover:bg-black/90 justify-between transition-colors duration-300">
          <h3 className="text-xl font-semibold mb-2">CloudConnect: API & Backend Development</h3>
          <p>Built robust backend infrastructure and secure APIs to support scalable applications.</p>
                      <Link href="/mobile-app" className="relative text-sm text-white after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out w-fit"
>
            Read More →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
