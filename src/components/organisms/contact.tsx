// src/app/contact/page.tsx
'use client';

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you would handle form submission, e.g., send the data to a server or an email
    console.log("Form Submitted", formData);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-center text-teal-600">Contact Us</h1>
      <p className="mt-4 text-center text-lg text-gray-600">
        Have any questions? We&apos;d love to hear from you.
      </p>

      <div className="mt-8 max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
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

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
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

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
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

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-500 transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold text-teal-600">Contact Information</h2>
        <p className="text-lg text-gray-600 mt-2">Feel free to reach out to us at:</p>
        <p className="text-lg text-teal-600">support@DicTech.com</p>
        <p className="text-lg text-gray-600">Phone: +1 234 567 890</p>
      </div>
    </div>
  );
};

export default Contact;
