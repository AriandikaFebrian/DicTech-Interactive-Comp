'use client'

import React, { useState } from 'react';
import PageLayout from '../layouts/pagelayout';
import Image from 'next/image';

const sections = [
  {
    title: 'Kualitas dan Integritas Teknologi',
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 20l9-5-9-5-9 5 9 5z" />
        <path d="M12 12l9-5-9-5-9 5 9 5z" />
      </svg>
    ),
    image: '/images/values.png', // Gambar untuk quality
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Maintain clean and well-documented code to ensure readability and maintainability.</li>
        <li>Follow industry best practices for testing and continuous integration to ensure product reliability.</li>
        <li>Regularly review and improve the development process to meet the highest quality standards.</li>
      </ul>
    ),
  },
  {
    title: 'Keamanan dan Perlindungan Data',
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 20l9-5-9-5-9 5 9 5z" />
        <path d="M12 12l9-5-9-5-9 5 9 5z" />
      </svg>
    ),
    image: '/images/policy.png', // Gambar untuk keamanan data
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Ensure user data and system information are securely stored and transmitted.</li>
        <li>Follow security protocols to prevent data breaches and unauthorized access.</li>
        <li>Comply with relevant privacy regulations (e.g., GDPR, CCPA) to protect user privacy.</li>
      </ul>
    ),
  },
  {
    title: 'Perilaku Profesional',
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M7 8h10M7 12h8m-8 4h6" />
      </svg>
    ),
    image: '/images/projects.png', // Gambar untuk profesionalisme
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Collaborate respectfully and work effectively in teams to meet project goals.</li>
        <li>Communicate clearly and efficiently in all settings, whether in person or online.</li>
        <li>Respect deadlines and contribute to maintaining a positive work environment.</li>
      </ul>
    ),
  },
  {
    title: 'Etika Penggunaan Teknologi',
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M6 18V5l12 7-12 7z" />
      </svg>
    ),
    image: '/images/values.png', // Gambar untuk etika
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Respect software licenses and avoid the unauthorized use of third-party code or tools.</li>
        <li>Do not engage in unethical practices, such as hacking or exploiting vulnerabilities.</li>
        <li>Use technology responsibly, ensuring it aligns with the values of the organization.</li>
      </ul>
    ),
  },
  {
    title: 'Kontribusi kepada Komunitas',
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M5 3l4 4h5v5l4 4H3L5 3z" />
      </svg>
    ),
    image: '/images/about.png', // Gambar untuk kontribusi
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Contribute to open-source projects or other community-driven efforts that improve the tech ecosystem.</li>
        <li>Participate in discussions that promote innovation, collaboration, and the sharing of knowledge.</li>
        <li>Engage in initiatives that support underrepresented groups in tech.</li>
      </ul>
    ),
  },
  {
    title: 'Pelanggaran dan Penanganan',
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M6 18V5l12 7-12 7z" />
      </svg>
    ),
    image: '/images/history.png', // Gambar untuk pelanggaran
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Report any violations of this Code of Conduct immediately to HR or designated personnel.</li>
        <li>All reports will be handled with confidentiality and appropriate action will be taken.</li>
        <li>Persistent violations may lead to disciplinary actions, including termination of employment or collaboration.</li>
      </ul>
    ),
  },
];

export default function CodeOfConduct() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main>
<PageLayout
  title="Code of Conduct"
  subtitle="Our commitment to maintaining a respectful and inclusive environment."
>

        <div className="max-w-6xl mx-auto px-6 py-12">
                         <h3 className="text-m text-black-300 text-center">Code of Conduct</h3>
            <p className="text-3xl font-semibold text-black-600 tracking-wide text-center">
              Guidelines for respectful and professional behavior within our community
            </p>
                      <hr className="my-6 border-t-6 w-30 mx-auto border-teal-600" />

          <div className="grid grid-cols-1 md:grid-cols-3">
            {sections.map(({ title, icon, content, image }, index) => (
              <div
                key={index}
                onClick={() => toggle(index)}
                className={`cursor-pointer border border-gray-300 dark:border-gray-700 p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ${
                  activeIndex === index ? 'bg-teal-50 dark:bg-teal-900' : 'bg-white dark:bg-gray-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  {icon}
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
                </div>
                
                {/* Gambar ilustrasi */}
                <div className="mt-4 mb-6">
                  <Image
                    src={image}
                    alt={title}
                    className="w-full rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
                    width={200}
                    height={150}
                  />
                </div>

                {/* Konten yang bisa expand/collapse */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index ? 'max-h-screen' : 'max-h-0'
                  }`}
                >
                  <div className="mt-4 text-gray-700 dark:text-gray-300">{content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    </main>
  );
}
