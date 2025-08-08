'use client';

import React, { useState, useRef } from "react";
import PageLayout from "../layouts/pagelayout";
import ReCAPTCHA from "react-google-recaptcha";
import { FaAward, FaBusinessTime, FaProjectDiagram, FaSmile } from "react-icons/fa";
import CountUp from "react-countup";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);  // <-- state checkbox TOC
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify that you are not a robot.");
      return;
    }

    if (!agreed) {
      alert("You must agree to the Terms and Conditions.");
      return;
    }

    console.log("Form Submitted", formData, "Captcha Token:", captchaValue);

    recaptchaRef.current?.reset();
    setCaptchaValue(null);

    // lanjutkan API call dan lain-lain
  };

  

  return (
<PageLayout
  title="Our Contact"
  subtitle="Let’s connect and grow your business together."
>

      <div className="mt-8  mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <form onSubmit={handleSubmit} className="space-y-6">
     <h2 className="text-4xl font-bold text-black">Contact Us</h2>
<p className="mt-4 text-gray-700 dark:text-black-300">
  Get in touch with us to discover how our services can help your business thrive in today’s digital landscape.
</p>

          <hr className="my-6 border-t-6 w-30 border-teal-600" />
        

          {/* Fields ... */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="flex-1">
              <label htmlFor="phone" className="block text-gray-700 font-medium">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                placeholder="Your Phone Number"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md"
              placeholder="Your Message"
              rows={5}
              required
            />
          </div>

           {/* Checkbox Terms of Conditions */}
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
              required
            />
            <label htmlFor="agree" className="ml-2 text-gray-700 text-sm">
              I agree to the{" "}
              <a
                href="/policy/terms-of-service"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline hover:text-teal-800"
              >
                Terms and Services
              </a>
              .
            </label>
          </div>

          {/* reCAPTCHA */}
          <div className="pt-4">
            <ReCAPTCHA
sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}

              onChange={(token) => setCaptchaValue(token)}
              ref={recaptchaRef}
            />
          </div>

          <div >
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-500 transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

      {/* Statistik Perusahaan */}
      {/* Statistik Perusahaan */}
<div>
  <h2 className="text-2xl font-semibold text-black mb-6">Our Achievements</h2>
  
  <div className="grid grid-cols-2 gap-6 text-center">
    <div className="flex flex-col items-center gap-2 border border-teal-300 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <FaSmile className="text-teal-600 text-5xl" />
      <p className="text-4xl font-bold text-teal-600">
        <CountUp end={10} duration={2} />+
      </p>
      <p className="text-gray-700">Happy Clients</p>
    </div>
    <div className="flex flex-col items-center gap-2 border border-teal-300 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <FaProjectDiagram className="text-teal-600 text-5xl" />
      <p className="text-4xl font-bold text-teal-600">
        <CountUp end={50} duration={2} />+
      </p>
      <p className="text-gray-700">Projects Completed</p>
    </div>
    <div className="flex flex-col items-center gap-2 border border-teal-300 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <FaAward className="text-teal-600 text-5xl animate-pulse" />
      <p className="text-xl font-semibold text-teal-600">Coming Soon</p>
      <p className="text-gray-700">Awards & Certificates</p>
    </div>
    <div className="flex flex-col items-center gap-2 border border-teal-300 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <FaBusinessTime className="text-teal-600 text-5xl" />
      <p className="text-4xl font-bold text-teal-600">
        <CountUp end={1} duration={2} />
      </p>
      <p className="text-gray-700">Years in Business</p>
    </div>
    
  </div>

  <div className="mt-6 p-6 bg-gray-50 rounded-lg shadow-md text-center">
  <h3 className="text-xl font-semibold text-teal-600 mb-4">We&apos;re Remote, But Always Here for You</h3>
  <p className="text-gray-700 mb-4">
    Our team works remotely across different time zones to provide you the best service possible.
  </p>

  <div className="flex flex-col md:flex-row justify-center gap-8 mb-6">
    <div>
      <h4 className="font-semibold text-teal-600">Support Hours</h4>
      <p className="text-gray-700">Mon - Fri, 9 AM - 6 PM (GMT+7)</p>
    </div>
    <div>
      <h4 className="font-semibold text-teal-600">Connect with Us</h4>
      <p>
        <a href="https://slack.com/yourcompany" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline mr-3">Slack</a>
        <a href="https://discord.gg/yourcompany" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline mr-3">Discord</a>
        <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">Twitter</a>
      </p>
    </div>
  </div>

  <p className="text-gray-700 mb-6 max-w-lg mx-auto">
    We embrace remote work culture — flexible, collaborative, and driven by passion. Interested in joining our team or partnering with us? Let’s chat!
  </p>

  <a
    href="/careers"
    className="inline-block bg-teal-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-500 transition-colors duration-300"
  >
    Join Our Team
  </a>
</div>

</div>

</div>

    </PageLayout>
  );
}
