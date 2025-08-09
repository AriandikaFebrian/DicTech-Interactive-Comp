'use client'

import PageLayout from "@/components/layouts/pagelayout";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { useState } from "react";

interface CompanyCardProps {
  date: string;
  title: string;
  category: string;
  image: string;
  overlayText: string;
  excerpt: string;
  link: string;
}

const companyPosts = [
  {
    date: "05 AUG 2025",
    title: "Launching Brixel Studio: A New Era of Digital Creativity",
    category: "Product Updates",
    image: "/images/projects.png",
    overlayText: "Brixel Studio: Platform Asset 2D & 3D",
    excerpt:
      "Our journey in creating Brixel Studio, a platform for sharing 2D and 3D assets, and how it empowers the creative community.",
    link: "/blog/launching-brixel-studio"
  },
  {
    date: "22 JUL 2025",
    title: "BugNest: Advancing the Future of Bug Reporting and Project Management",
    category: "Tech Insights",
    image: "/images/policy.png",
    overlayText: "BugNest: A Platform for Efficient Bug Tracking",
    excerpt:
      "How BugNest is revolutionizing bug reporting for teams and enhancing project workflows with its intuitive design.",
    link: "/blog/bugnest-advances-in-bug-reporting"
  },
  {
    date: "18 JUL 2025",
    title: "GetThatGame: What’s New in Our Game Catalog",
    category: "Product Updates",
    image: "/images/values.png",
    overlayText: "Explore New Features in GetThatGame",
    excerpt:
      "A closer look at the new features we’ve added to GetThatGame, making it even easier for gamers to find their next favorite game.",
    link: "/blog/getthatgame-website-updates"
  },
  {
    date: "10 JUL 2025",
    title: "DicTech Interactive: Our Road to Startup Success",
    category: "Company News",
    image: "/images/services.jpg",
    overlayText: "DicTech: From Idea to Launch",
    excerpt:
      "From idea to launch, a behind-the-scenes look at how DicTech Interactive came to life and what’s next for us.",
    link: "/blog/dictech-our-road-to-startup-success"
  }
];

const stats = [
  { label: "Projects Delivered", value: 32 },        // nunjukin hasil kerja
  { label: "Active Clients", value: 18 },            // nunjukin kepercayaan pasar
  { label: "Team Members", value: 12 },              // nunjukin skala tim
  { label: "Founded", value: 2022 },                 // nunjukin tahun mulai
];


const events = [
  { date: "15 AUG 2025", name: "Launching BugNest v2", link: "/events/bugnest-v2" },
  { date: "30 AUG 2025", name: "Community Meetup Online", link: "/events/meetup-online" },
];

const CompanyCard: React.FC<CompanyCardProps> = ({
  date,
  title,
  category,
  image,
  overlayText,
  excerpt,
  link,
}) => {
  const [day, month, year] = date.split(" ");

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-56 object-cover"
        />
        {/* Date badge */}
        <div className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded">
          {`${day} ${month} ${year}`}
        </div>
        {/* Overlay text */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm px-4 py-2">
          {overlayText}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col">
        {/* Category */}
        <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full w-fit mb-2">
          {category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 hover:text-teal-600 transition-colors">
          <Link href={link}>{title}</Link>
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mt-2 flex-grow">{excerpt}</p>

        {/* Button */}
        <Link
          href={link}
          className="mt-4 inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-500 transition-colors"
        >
          Read More
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const CompanyPage = () => {
  const [visiblePosts, setVisiblePosts] = useState(4);

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 4);
  };

  return (
    <PageLayout
      title="Company Updates"
      subtitle="Latest news, product launches, and behind-the-scenes from DicTech Interactive."
    >
      <div className="space-y-12">
        {/* Hero Highlight */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src={companyPosts[0].image}
            alt={companyPosts[0].title}
            width={1200}
            height={500}
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center p-8">
            <span className="text-sm text-white/80">{companyPosts[0].date}</span>
            <h2 className="text-3xl font-bold text-white mt-2">{companyPosts[0].title}</h2>
            <p className="text-white/90 mt-2 max-w-2xl">{companyPosts[0].excerpt}</p>
            <Link
              href={companyPosts[0].link}
              className="mt-4 inline-block bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-md text-sm"
            >
              Read Story
            </Link>
          </div>
        </div>

        {/* Stats */}
       {/* Stats */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
  {stats.map((item, idx) => (
    <div key={idx} className="bg-white rounded-lg shadow p-4">
      <div className="text-2xl font-bold text-teal-600">
        <CountUp
          end={item.value}
          duration={2}
          separator={item.label === "Founded" ? "" : ","}
          suffix={item.label.includes("Users") ? "+" : ""}
        />
      </div>
      <div className="text-sm text-gray-500">{item.label}</div>
    </div>
  ))}
</div>


        {/* Cards grid */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Latest Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyPosts.slice(0, visiblePosts).map((post, idx) => (
              <CompanyCard key={idx} {...post} />
            ))}
          </div>

          {/* Load more */}
          {visiblePosts < companyPosts.length && (
            <div className="text-center mt-6">
              <button
                onClick={loadMore}
                className="bg-teal-600 text-white text-sm px-4 py-2 rounded-md hover:bg-teal-500 transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            {events.map((event, idx) => (
              <Link
                key={idx}
                href={event.link}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-md transition"
              >
                <span className="text-gray-800 font-medium">{event.name}</span>
                <span className="text-sm text-gray-500">{event.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CompanyPage;
