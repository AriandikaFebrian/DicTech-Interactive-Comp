import React from "react";
import Link from "next/link";
import PageLayout from "../layouts/pagelayout";

const ServicesPage = () => {
  return (
        <PageLayout
      title="Our Services at DicTech Interactive"
      subtitle="Innovative tech solutions to accelerate your business and creativity."
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Title & Description */}
        <div className="lg:col-span-1 sm:col-span-2 p-6 flex flex-col justify-center shadow border border-teal-400/50">
          <h2 className="text-4xl font-bold text-teal-700">Our Services</h2>
          <hr className="my-6 border-t-6 w-30 border-teal-600" />
          <p className="mt-4 text-gray-700 dark:text-black-300">
            We offer a range of services designed to help businesses grow and thrive in the digital world.
          </p>
          <p className="mt-2 text-gray-600 dark:text-black-400">
            From websites to mobile apps, SEO to cloud solutions, we’ve got you covered.
          </p>
        </div>

        {/* Service 1 */}
        <div className="p-6 bg-white/10 text-black shadow min-h-[250px] border border-white/30 transition-colors duration-300 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Custom Web Development</h3>
            <p>Responsive, scalable websites for great user experiences.</p>
          </div>
       <Link
  href="/custom-web-development"
  className="relative text-sm text-black after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out w-fit"
>
  Read More →
</Link>

        </div>

        {/* Service 2 */}
        <div className="p-6 bg-teal-600 text-white shadow min-h-[250px] border border-white/30 hover:bg-black/90 transition-colors duration-300 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Web App & Dashboard Development</h3>
            <p>Cross-platform apps for iOS and Android users.</p>
          </div>
          <Link href="/web-app-dashboard-development"  className="relative text-sm text-white after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out w-fit"
>
            Read More →
          </Link>
        </div>

        {/* Service 3 */}
        <div className="p-6 bg-white/10 text-black shadow min-h-[250px] border border-white/30 transition-colors duration-300 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Mobile App Development (React Native / Flutter)</h3>
            <p>Visual design that strengthens your brand identity.</p>
          </div>
            <Link href="/mobile-app"  className="relative text-sm text-black after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out w-fit"
>
            Read More →
          </Link>
        </div>

        {/* Service 4 */}
        <div className="p-6 bg-teal-600 text-white shadow min-h-[250px] border border-white/30 hover:bg-black/90 transition-colors duration-300 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p>Boost visibility and reach the top of search results.</p>
          </div>
          <Link href="/ui-ux-design"  className="relative text-sm text-white after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out w-fit"
>
            Read More →
          </Link>
        </div>

        {/* Service 5 */}
        <div className="p-6 bg-teal-600 text-white shadow min-h-[250px] border border-white/30 hover:bg-black/90 transition-colors duration-300 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">API & Backend Development</h3>
            <p>Scale your infrastructure with secure cloud tech.</p>
          </div>
          <Link href="/seo"   className="relative text-sm text-white after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out w-fit"
>
            Read More →

          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default ServicesPage;
