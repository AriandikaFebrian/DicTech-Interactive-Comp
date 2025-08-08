import React from "react";
import PageLayout from "../layouts/pagelayout";

const CareersPage = () => {
  return (
        <PageLayout
      title="The Story Behind DicTech Interactive"
      subtitle="Discover how DicTech Interactive was born — from humble beginnings to a forward-thinking digital powerhouse led by Ari Andika Febrian."
    >
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Careers at DicTech Interactive™</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Team</h2>
        <p className="text-lg text-gray-700 mb-4">
          At DicTech Interactive™, we believe that innovation and creativity come from diverse perspectives. As a rapidly growing online startup, we are always on the lookout for talented and passionate individuals to join our team.
        </p>
        <p className="text-lg text-gray-700">
          Working with us means being part of a dynamic and collaborative team that is focused on delivering cutting-edge solutions for startups and businesses worldwide. If you’re ready to make an impact, we want to hear from you!
        </p>
      </section>

      {/* Open Positions Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Open Positions</h2>
        <p className="text-lg text-gray-700 mb-4">
          We’re currently hiring for the following positions:
        </p>

        <div className="space-y-6">
          {/* Full-stack Developer */}
          <div className="border p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Full-stack Developer</h3>
            <p className="text-lg text-gray-700 mb-4">
              As a full-stack developer, you will work on both the frontend and backend of our platform, ensuring smooth user experiences and efficient server-side operations.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Experience with React, Next.js, and Node.js</li>
              <li>Strong understanding of REST APIs</li>
              <li>Experience with SQL/NoSQL databases</li>
              <li>Excellent problem-solving skills</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              <strong>How to Apply:</strong> Send your resume and portfolio to <a href="mailto:careers@DicTech.com" className="text-teal-600">careers@DicTech.com</a>
            </p>
          </div>

          {/* Product Designer */}
          <div className="border p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Designer</h3>
            <p className="text-lg text-gray-700 mb-4">
              We are looking for a creative product designer to help us craft user-centric designs that make our platform easy to use and visually appealing.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Proficiency in design tools such as Figma, Sketch, or Adobe XD</li>
              <li>Experience in UX/UI design</li>
              <li>Strong portfolio showcasing design skills</li>
              <li>Ability to collaborate with developers and product managers</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              <strong>How to Apply:</strong> Please email your resume and design portfolio to <a href="mailto:careers@DicTech.com" className="text-teal-600">careers@DicTech.com</a>
            </p>
          </div>

          {/* Marketing Specialist */}
          <div className="border p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Marketing Specialist</h3>
            <p className="text-lg text-gray-700 mb-4">
              We are looking for a marketing specialist who can help us grow our brand and reach more users through digital marketing strategies and campaigns.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Experience with SEO, SEM, and social media marketing</li>
              <li>Strong communication and copywriting skills</li>
              <li>Experience with tools like Google Analytics and Facebook Ads</li>
              <li>Ability to analyze data and generate actionable insights</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              <strong>How to Apply:</strong> Send your resume and any relevant marketing campaigns you’ve worked on to <a href="mailto:careers@DicTech.com" className="text-teal-600">careers@DicTech.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Work With Us?</h2>
        <p className="text-lg text-gray-700 mb-4">
          At DicTech Interactive™, we offer more than just a job. We provide opportunities for growth, learning, and making a significant impact. Here’s what you can expect when you join our team:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>Flexible working hours and remote work options</li>
          <li>Competitive salary and benefits</li>
          <li>Collaborative and creative team environment</li>
          <li>Opportunities for career advancement and professional development</li>
        </ul>
      </section>

      {/* Application Process Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Process</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our application process is simple and straightforward:
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>Submit your resume and portfolio to <a href="mailto:careers@DicTech.com" className="text-teal-600">careers@DicTech.com</a></li>
          <li>Our team will review your application and contact you for an interview.</li>
          <li>If you’re a great fit, we’ll extend an offer to join our team!</li>
        </ol>
        <p className="text-lg text-gray-700 mt-4">
          We look forward to seeing how you can contribute to our growth and success. Don’t hesitate to apply today!
        </p>
      </section>
    </PageLayout>
  );
};

export default CareersPage;
