import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 md:px-12">
      {/* Grid Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About Us */}
        <div>
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <span className="text-teal-600 text-lg">▍</span> ABOUT <span className="font-black">US</span>
          </h4>
          <div className="h-px bg-gray-600 mb-4"></div>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            DicTech Interactive™ is a web-based startup focused on building modern, scalable, and elegant digital solutions. We are fully remote and currently do not have a physical headquarters.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <span className="text-teal-600 text-lg">▍</span> CONTACT <span className="font-black">US</span>
          </h4>
          <div className="h-px bg-gray-600 mb-4"></div>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><FaWhatsapp className="inline mr-2" /> +62 811 1302 0888</li>
            <li><FaPhone className="inline mr-2" /> +62 21 5098 9399</li>
            <li><FaEnvelope className="inline mr-2" /> contact@DicTech.id</li>
          </ul>
        </div>

        {/* Products & Services */}
        <div>
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <span className="text-teal-600 text-lg">▍</span> PRODUCTS & SERVICES
          </h4>
          <div className="h-px bg-gray-600 mb-4"></div>
          <ul className="space-y-2 text-sm text-gray-200">
             <li>
              <a href="/custom_web_development" className="relative inline-block hover:text-white after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out">Custom Web Development</a>
            </li>
             <li>
              <a href="/web_app_&_dashboard_development" className="relative inline-block hover:text-white after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out">Web App & Dashboard Development</a>
            </li>
             <li>
              <a href="/mobile_app_development" className="relative inline-block hover:text-white after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out">Mobile App Development</a>
            </li>
             <li>
              <a href="/ui_&_ux_design" className="relative inline-block hover:text-white after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out">UI & UX Design</a>
            </li>
            <li>
              <a href="/seo_optimization" className="relative inline-block hover:text-white after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out">SEO Optimization</a>
            </li>
          </ul>
        </div>

        {/* Blog → Company & Career */}
        <div>
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <span className="text-teal-600 text-lg">▍</span> BLOG
          </h4>
          <div className="h-px bg-gray-600 mb-4"></div>
          <ul className="space-y-2 text-sm font-semibold text-gray-200">
            <li>
              <a href="/company" className="relative inline-block hover:text-white after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out">Company</a>
            </li>
            <li>
              <a href="/career" className="relative inline-block hover:text-white after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out">Career</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 pt-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Name */}
          <div className="flex items-center space-x-2">
            <Image src="/images/logo/logo.png" alt="DicTech Logo" width={40} height={40} />
            <span className="text-xl font-semibold text-white">DicTech Interactive™</span>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4 text-lg text-gray-400">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-white transition-transform duration-300 transform hover:scale-110"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 text-center md:text-right">
            &copy; {new Date().getFullYear()} DicTech Interactive™. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
