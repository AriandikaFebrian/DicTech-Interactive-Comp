'use client'

import PageLayout from "@/components/layouts/pagelayout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface BlogCardProps {
  date: string;
  title: string;
  category: string;
  image: string;
  overlayText: string;
  excerpt: string;
  link: string;
}

const posts = [
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

const BlogCard: React.FC<BlogCardProps> = ({
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
        {/* Category */}
        <p className="text-sm text-gray-500 mt-1">{category}</p>

        {/* Image with overlay */}
        <div className="relative mt-3">
          <Image
            src={image}
            alt={title}
            className="w-full h-56 object-cover rounded-lg"
            width={200}
            height={150}
          />
          <div className="absolute top-0 right-0 bg-teal-600 text-white text-sm font-semibold px-3 py-2 rounded-bl-lg">
            {overlayText}
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-gray-700 mt-4 flex-grow">{excerpt}</p>

        {/* Button */}
        <Link
          href={link}
          className="inline-block bg-teal-600 text-white text-sm font-semibold px-4 py-2 rounded-md mt-4 hover:bg-teal-500 transition-colors self-start"
        >
          BACA SELENGKAPNYA
        </Link>
      </div>
    </div>
  );
};

const BlogPage = () => {
  const [visiblePosts, setVisiblePosts] = useState(4);

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 4); // Load 4 more posts on click
  };

  return (
    <PageLayout
      title="Blog at DicTech Interactive"
      subtitle="Stay updated with our latest thoughts, insights, and industry trends."
    >
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Posts</h2>

        {/* Blog Cards with 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.slice(0, visiblePosts).map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        {/* See More Button */}
        {visiblePosts < posts.length && (
          <div className="text-center mt-6">
            <button
              onClick={loadMorePosts}
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

export default BlogPage;
