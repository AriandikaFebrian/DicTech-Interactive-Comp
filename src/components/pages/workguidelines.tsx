// src/pages/WorkGuidelines.tsx
import React from 'react';
import PageLayout from '../layouts/pagelayout';
import Image from 'next/image';

const WorkGuidelines = () => {
  return (
    <main>
      <PageLayout
        title="DicTech Interactive Overview"
        subtitle="Discover how we operate, our core values, and the principles that drive our team."
      >
        <div className="max-w-6xl mx-auto px-6 py-10">
               <h3 className="text-m text-black-300 text-center">Work Guidlenss</h3>
            <p className="text-3xl font-semibold text-black-600 tracking-wide text-center">
              Standards That Drive Innovation
            </p>
                      <hr className="my-6 border-t-6 w-30 mx-auto border-teal-600" />

          <div className="space-y-16 text-gray-800 dark:text-gray-100 text-lg">

            {/* Work Environment */}
            <section className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2">
                <Image
                  src="/images/teamwork.jpg"
                  alt="Work Environment at DicTech Interactive"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                  priority
                />
              </div>
              <div className="lg:w-1/2">
                          <h2 className="text-4xl font-bold text-gray-950">Work Environment</h2>
          <hr className="my-6 border-t-6 w-30 border-teal-600" />
                <p className="leading-relaxed">
                  At DicTech Interactive, we foster a collaborative, respectful, and flexible work culture.
                  Communication and teamwork are fundamental values we uphold to ensure every team member feels
                  supported and empowered to do their best work.
                </p>
              </div>
            </section>

            {/* Development Guidelines */}
            <section className="flex flex-col lg:flex-row-reverse items-center gap-10">
              <div className="lg:w-1/2">
                <Image
                  src="/images/code.jpg"
                  alt="Development Guidelines at DicTech Interactive"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                  priority
                />
              </div>
              <div className="lg:w-1/2">
                          <h2 className="text-4xl font-bold text-gray-950">Development Guidelines</h2>
          <hr className="my-6 border-t-6 w-30 border-teal-600" />
                <p className="leading-relaxed">
                  We prioritize writing clean, maintainable, and scalable code. Our team adheres to industry
                  best practices and standards to build reliable software solutions that deliver long-term value.
                </p>
              </div>
            </section>

            {/* Workflow */}
            <section className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2">
                <Image
                  src="/images/teamwork.jpg"
                  alt="Work Environment at DicTech Interactive"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                  priority
                />
              </div>
              <div className="lg:w-1/2">
                          <h2 className="text-4xl font-bold text-gray-950">Workflow</h2>
          <hr className="my-6 border-t-6 w-30 border-teal-600" />
                <p className="leading-relaxed">
                  Our team follows Agile methodologies, enabling us to prioritize efficiency, transparency,
                  and continuous improvement. Collaboration and feedback loops are integral to our success.
                </p>
              </div>
            </section>

          </div>
        </div>
      </PageLayout>
    </main>
  );
};

export default WorkGuidelines;
