import React from "react";
import Link from "next/link";
import PageLayout from "../layouts/pagelayout";

const ServicesPage = () => {
  return (
      <PageLayout
        title="Policy & Terms"
        subtitle="Understand how DicTech Interactive handles your data and usage."
      >
        <div className="lg:col-span-1 sm:col-span-2 p-6 flex flex-col justify-center shadow border border-teal-400/50">
  <h2 className="text-4xl font-bold text-teal-700 flex items-center gap-3">
    <svg className="w-8 h-8 text-teal-700" fill="currentColor" viewBox="0 0 24 24">
      {/* contoh icon dokumen */}
      <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zM6 20V4h7v5h5v11H6z" />
    </svg>
    Our Policy
  </h2>
  <hr className="my-6 border-t-6 w-30 border-teal-600" />
  <p className="mt-4 text-gray-700 dark:text-black-300">
    At DicTech Interactive, we are committed to protecting your privacy and maintaining transparency about how we handle your data. Below you will find our key policies that govern the use of our services and workplace conduct.
  </p>
</div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Title & Description */}
    

        {/* Service 1 */}
        <div className="p-6 bg-white/10 text-black shadow min-h-[250px] border border-white/30 transition-colors duration-300 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Terms of Service</h3>
            <p>Rules and guidelines for using our services.</p>
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
            <h3 className="text-xl font-semibold mb-2">Work Guidelines</h3>
      <p>Standards that define how we work together.</p>
          </div>
          <Link href="/web-app-dashboard-development"  className="relative text-sm text-white after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out w-fit"
>
            Read More →
          </Link>
        </div>

        {/* Service 3 */}
        <div className="p-6 bg-white/10 text-black shadow min-h-[250px] border border-white/30 transition-colors duration-300 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Code Of Conduct</h3>
<p>Our commitment to ethical and professional behavior.</p>
          </div>
            <Link href="/mobile-app"  className="relative text-sm text-black after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out w-fit"
>
            Read More →
          </Link>
        </div>

        {/* Service 4 */}
        <div className="p-6 bg-teal-600 text-white shadow min-h-[250px] border border-white/30 hover:bg-black/90 transition-colors duration-300 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Remote Work Policy</h3>
 <p>Guidelines for working remotely and flexible arrangements.</p>
          </div>
          <Link href="/ui-ux-design"  className="relative text-sm text-white after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out w-fit"
>
            Read More →
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default ServicesPage;
