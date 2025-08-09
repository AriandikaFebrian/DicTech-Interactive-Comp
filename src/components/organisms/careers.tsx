'use client'

import PageLayout from "@/components/layouts/pagelayout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface JobCardProps {
  date: string;
  title: string;
  department: string;
  image: string;
  location: string;
  description: string;
  link: string;
}

const jobs = [
  {
    date: "01 AUG 2025",
    title: "Frontend Developer (React & Next.js)",
    department: "Engineering",
    image: "/images/career/frontend.jpg",
    location: "Remote - Indonesia",
    description:
      "Build beautiful and scalable web interfaces with React, Next.js, and TailwindCSS. Work with a creative and dynamic team.",
    link: "/careers/frontend-developer"
  },
  {
    date: "28 JUL 2025",
    title: "UI/UX Designer",
    department: "Design",
    image: "/images/career/uiux.jpg",
    location: "On-site - Jakarta",
    description:
      "Design intuitive, engaging, and visually appealing interfaces for web and mobile applications. Collaborate closely with engineers and product managers.",
    link: "/careers/uiux-designer"
  },
  {
    date: "20 JUL 2025",
    title: "Backend Developer (Node.js)",
    department: "Engineering",
    image: "/images/career/backend.jpg",
    location: "Hybrid - Bandung",
    description:
      "Develop high-performance backend services, integrate APIs, and ensure system scalability for millions of users.",
    link: "/careers/backend-developer"
  },
  {
    date: "15 JUL 2025",
    title: "Marketing Specialist",
    department: "Marketing",
    image: "/images/career/marketing.jpg",
    location: "Remote - Worldwide",
    description:
      "Plan and execute digital marketing strategies, manage social media campaigns, and analyze performance metrics to grow our audience.",
    link: "/careers/marketing-specialist"
  }
];

const JobCard: React.FC<JobCardProps> = ({
  date,
  title,
  department,
  image,
  location,
  description,
  link,
}) => {
  const [day, month, year] = date.split(" ");

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row min-h-[500px]">
      {/* Date */}
      <div className="bg-gray-100 flex flex-col items-center justify-center px-4 py-6 md:w-20">
        <span className="text-2xl font-bold text-gray-600">{day}</span>
        <span className="text-xs uppercase tracking-wide text-gray-400">{month}</span>
        <span className="text-xs text-gray-400">{year}</span>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 flex flex-col">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 hover:text-teal-600 transition-colors">
          <Link href={link}>{title}</Link>
        </h2>
        {/* Department */}
        <p className="text-sm text-gray-500 mt-1">{department}</p>

        {/* Image with location overlay */}
        <div className="relative mt-3">
          <Image
            src={image}
            alt={title}
            className="w-full h-56 object-cover rounded-lg"
            width={200}
            height={150}
          />
          <div className="absolute top-0 right-0 bg-teal-600 text-white text-sm font-semibold px-3 py-2 rounded-bl-lg">
            {location}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mt-4 flex-grow">{description}</p>

        {/* Apply Button */}
        <Link
          href={link}
          className="inline-block bg-teal-600 text-white text-sm font-semibold px-4 py-2 rounded-md mt-4 hover:bg-teal-500 transition-colors self-start"
        >
          APPLY NOW
        </Link>
      </div>
    </div>
  );
};

const CareerPage = () => {
  const [visibleJobs, setVisibleJobs] = useState(4);

  const loadMoreJobs = () => {
    setVisibleJobs(prev => prev + 4); // Load 4 more jobs
  };

  return (
    <PageLayout
      title="Careers at DicTech Interactive"
      subtitle="Join our passionate team and shape the future of technology together."
    >
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-gray-900">Open Positions</h2>

        {/* Job Cards with 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.slice(0, visibleJobs).map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>

        {/* See More Button */}
        {visibleJobs < jobs.length && (
          <div className="text-center mt-6">
            <button
              onClick={loadMoreJobs}
              className="inline-block bg-teal-600 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-teal-500 transition-colors"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default CareerPage;
