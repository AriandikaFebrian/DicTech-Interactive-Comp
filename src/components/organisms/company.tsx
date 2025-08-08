import React from "react";
import Image from "next/image";
import PageLayout from "../layouts/pagelayout";

const CompanyPage = () => {
  return (
          <PageLayout
      title="The Story Behind DicTech Interactive"
      subtitle="Discover how DicTech Interactive was born — from humble beginnings to a forward-thinking digital powerhouse led by Ari Andika Febrian."
    >
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">About Us</h1>

      {/* Company Overview Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Who We Are</h2>
        <p className="text-lg text-gray-700 mb-4">
          We are a passionate team of innovators and problem solvers. At <span className="font-semibold text-teal-600">DicTech Interactive™</span>, we believe in the power of technology to create meaningful impact. We provide cutting-edge solutions to help startups and businesses thrive in the digital age.
        </p>
        <p className="text-lg text-gray-700">
          Founded with a mission to revolutionize the tech industry, we focus on creating products that are user-friendly, scalable, and designed with simplicity in mind. Our platform empowers businesses to grow with ease while solving complex challenges.
        </p>
      </section>

      {/* Vision & Mission Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision & Mission</h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-lg text-gray-700">
              To be a global leader in creating tech solutions that transform businesses and empower startups to succeed in a rapidly changing world.
            </p>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-lg text-gray-700">
              Our mission is to provide innovative products and services that meet the needs of startups, offering solutions that are scalable, cost-effective, and designed for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our team is composed of talented professionals from various fields, bringing their expertise together to deliver top-notch solutions. Meet some of the key people behind our company:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <Image src="/team-member1.jpg" alt="Team Member 1" width={150} height={150} className="rounded-full mx-auto" />
            <h4 className="text-lg font-semibold text-gray-800 mt-4">John Doe</h4>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="text-center">
            <Image src="/team-member2.jpg" alt="Team Member 2" width={150} height={150} className="rounded-full mx-auto" />
            <h4 className="text-lg font-semibold text-gray-800 mt-4">Jane Smith</h4>
            <p className="text-gray-600">CTO & Co-Founder</p>
          </div>
          <div className="text-center">
            <Image src="/team-member3.jpg" alt="Team Member 3" width={150} height={150} className="rounded-full mx-auto" />
            <h4 className="text-lg font-semibold text-gray-800 mt-4">Michael Lee</h4>
            <p className="text-gray-600">Lead Developer</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CompanyPage;
