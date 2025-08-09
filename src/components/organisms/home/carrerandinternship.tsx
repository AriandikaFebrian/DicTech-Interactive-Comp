import Link from "next/link";
import Image from "next/image";
import React from "react";

const ctaItems = [
  {
    title: "Internship Program",
    desc: "Start your professional journey at DicTech with our comprehensive internship program, designed to give you real industry experience and mentorship.",
    href: "/internship",
    imgSrc: "/images/values.png",
    badge: "New",
  },
  {
    title: "Career Opportunities",
    desc: "Looking to grow your career? Join DicTech's dynamic team and contribute to innovative projects that make a difference.",
    href: "/career",
    imgSrc: "/images/projects.png",
    badge: "Hiring",
  },
  {
    title: "Mentorship Program",
    desc: "Get guidance and career advice from industry veterans through our structured mentorship program.",
    href: "/mentorship",
    imgSrc: "/images/services.jpg",
    badge: "Open",
  },
];

type CardProps = {
  title: string;
  desc: string;
  href: string;
  imgSrc: string;
  badge?: string;
};

const Card: React.FC<CardProps> = ({ title, desc, href, imgSrc, badge }) => {
  return <div className="relative group cursor-pointer overflow-hidden shadow-lg border min-h-[350px] border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col">
    <div className="relative h-48 md:h-56 w-full overflow-hidden">
      <Image
        src={imgSrc}
        alt={title}
        fill
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        priority />
      {badge && (
        <span className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-semibold uppercase px-2 py-1 ">
          {badge}
        </span>
      )}
    </div>
    <div className="p-6 bg-white flex flex-col flex-grow">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-700 text-sm">{desc}</p>
      </div>
      <Link
        href={href}
        className="mt-auto inline-block text-teal-700 font-semibold hover:text-teal-900 mt relative text-sm after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out w-fit"
      >
        Learn More →
      </Link>
    </div>
  </div>;
}

const CareerInternshipSection = () => {
  return (
    <section className="services py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 min-h-[400px]">
        {/* Left text column */}
        <div className="md:col-span-1 flex flex-col justify-center">
          <span className="text-sm uppercase text-gray-500 tracking-wide mb-2">Programs</span>
          <h2 className="text-4xl font-bold text-teal-700 mb-6">Join Our Internship & Career Programs</h2>
          <hr className="my-6 border-t-6 w-30 border-teal-600" />
          <p className="text-gray-700">
            DicTech offers outstanding opportunities for both interns and professionals to learn, innovate, and grow.
            Whether you&apos;re starting your career or looking for a new challenge, our programs provide a platform to build your future.
          </p>
        </div>

        {/* Right cards column */}
        <div className="md:col-span-2 grid grid-cols-2 gap-9">
          {/* First two cards */}
          {ctaItems.slice(0, 2).map(({ title, desc, href, imgSrc, badge }, idx) => (
            <Card
              key={idx}
              title={title}
              desc={desc}
              href={href}
              imgSrc={imgSrc}
              badge={badge}
            />
          ))}

          {/* Third card spanning 2 columns */}
          {ctaItems[2] && (
            <div className="col-span-2">
              <Card
                title={ctaItems[2].title}
                desc={ctaItems[2].desc}
                href={ctaItems[2].href}
                imgSrc={ctaItems[2].imgSrc}
                badge={ctaItems[2].badge}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CareerInternshipSection;
