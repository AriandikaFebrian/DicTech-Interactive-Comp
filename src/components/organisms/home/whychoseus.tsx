import Link from "next/link";
import { FaHandsHelping, FaLightbulb, FaShieldAlt, FaRocket } from "react-icons/fa";
import VisualHighlightSection from "../visualhighlight";

const reasonsToChoose = [
  {
    name: "Client-Centered Approach",
    features: [
      { icon: <FaHandsHelping />, label: "Collaborative Process", description: "We work closely with our clients every step of the way." },
      { icon: <FaLightbulb />, label: "Tailored Solutions", description: "No one-size-fits-all — we create based on your unique needs." },
      { icon: <FaShieldAlt />, label: "Trusted Support", description: "We provide continuous and reliable support you can count on." },
    ],
    link: "/about",
  },
  {
    name: "Innovation & Expertise",
    features: [
      { icon: <FaRocket />, label: "Cutting-Edge Tech", description: "We embrace modern tools and technologies to build smart solutions." },
      { icon: <FaLightbulb />, label: "Creative Thinking", description: "Out-of-the-box ideas that actually work and scale." },
      { icon: <FaShieldAlt />, label: "Secure Foundations", description: "Built with privacy, security, and scalability in mind." },
    ],
    link: "/about",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-gray-950 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title and Description */}
        <div className="flex justify-between items-center flex-col md:flex-row gap-6">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-teal-700">Why Choose Us</h2>
            <hr className="my-6 border-t-6 w-50 border-teal-600" />
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl">
              We don&apos;t just build products — we build long-term partnerships. Here&apos;s what sets us apart and why our clients trust us.
            </p>
          </div>

          {/* Learn More Button */}
          <div>
            <a
              href="/about"
              className="inline-block bg-teal-600 text-white px-6 py-3 hover:bg-teal-700 transition rounded-md"
            >
              Learn More About Us
            </a>
          </div>
        </div>


        {/* Visual Highlights Section */}
        <VisualHighlightSection />
      </div>
    </section>
  );
}

