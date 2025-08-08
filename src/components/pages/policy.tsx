// src/pages/Policy.tsx
'use client';

import React from 'react';
import PageLayout from '../layouts/pagelayout';
import {
  ShieldCheck,
  FileText,
  Cookie,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Policy = () => {
  return (
    <main>
      <PageLayout
        title="Policy & Terms"
        subtitle="Understand how DicTech Interactive handles your data and usage."
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-gray-700 dark:text-gray-900 space-y-12">

            {/* Introduction */}
            <section>
              <h2 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                <FileText className="w-6 h-6 text-teal-500 mr-3" />
                Introduction
              </h2>
              <p className="leading-relaxed text-lg">
                Welcome to DicTech Interactive! By using our platform, you agree to the following terms and conditions. Please read through our Privacy Policy and Terms of Service carefully to understand how we handle your data and your rights.
              </p>
            </section>

            {/* Privacy Policy */}
            <section>
              <h2 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                <ShieldCheck className="w-6 h-6 text-teal-500 mr-3" />
                Privacy Policy
              </h2>
              <p className="leading-relaxed text-lg">
                We are committed to protecting your privacy. Our privacy policy outlines how we collect, use, and protect your personal information. By using our services, you consent to our data practices as outlined below.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-base">
                <li><strong>Data Collection:</strong> We collect personal information when you use our website, including your name, email address, and usage data.</li>
                <li><strong>Data Use:</strong> Your data is used to improve your user experience, provide services, and send important updates.</li>
                <li><strong>Data Security:</strong> We use industry-standard encryption to ensure your personal information is secure.</li>
              </ul>
            </section>

            {/* Terms of Service */}
            <section>
              <h2 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                <FileText className="w-6 h-6 text-teal-500 mr-3" />
                Terms of Service
              </h2>
              <p className="leading-relaxed text-lg">
                By using DicTech Interactive, you agree to our Terms of Service. These terms outline the rules and regulations for using our platform and services.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-base">
                <li><strong>Account Registration:</strong> You must provide accurate information when creating an account and keep your credentials confidential.</li>
                <li><strong>Usage Restrictions:</strong> You agree not to misuse our services, including but not limited to illegal activities or harmful behavior.</li>
                <li><strong>Limitation of Liability:</strong> We are not responsible for damages or losses caused by using our platform.</li>
              </ul>
            </section>

            {/* Cookies Policy (Optional) */}
            <section>
              <h2 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                <Cookie className="w-6 h-6 text-teal-500 mr-3" />
                Cookies Policy
              </h2>
              <p className="leading-relaxed text-lg">
                Our website uses cookies to enhance your user experience. By continuing to use our platform, you consent to the use of cookies.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-base">
                <li><strong>What Are Cookies:</strong> Cookies are small text files stored on your device to help us remember your preferences and improve the website&apis;s performance.</li>
                <li><strong>How We Use Cookies:</strong> We use cookies to analyze website traffic, improve our services, and personalize your experience.</li>
                <li><strong>Managing Cookies:</strong> You can manage or disable cookies through your browser settings at any time.</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                <Mail className="w-6 h-6 text-teal-500 mr-3" />
                Contact Us
              </h2>
              <p className="leading-relaxed text-lg mb-4">
                If you have any questions or concerns about our policies, please feel free to reach out:
              </p>
              <ul className="space-y-3 text-base pl-6">
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-teal-500" />
                  <a href="mailto:info@DicTech.com" className="text-teal-600 hover:underline">info@DicTech.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-teal-500" />
                  <a href="tel:+1234567890" className="text-teal-600 hover:underline">+1 (234) 567-890</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-500" />
                  123 Tech Lane, Silicon Valley, CA 95000
                </li>
              </ul>
            </section>

          </div>
        </div>
      </PageLayout>
    </main>
  );
};

export default Policy;
