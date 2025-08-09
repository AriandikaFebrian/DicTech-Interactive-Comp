'use client'

import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaComments } from "react-icons/fa";
import PageLayout from "../layouts/pagelayout";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

// FAQ Item Component with Smooth Collapse Animation
interface FAQItemProps {
  question: string;
  answer: string;
}

// FAQ Item Component with Smooth Collapse Animation
const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-4">
      <div
        className="flex items-center justify-between cursor-pointer text-xl font-semibold text-gray-800 mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>{question}</h3>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </div>

      {/* Smooth Transition for Answer */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-lg text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

const SupportAndFaqsPage = () => {
  return (
    <PageLayout
      title="Support at DicTech Interactive"
      subtitle="Contact information and resources for collaboration."
    >
      {/* Section Title */}

      {/* Support Section */}
      <section className="mb-8">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Support</h2>
  <p className="text-lg text-gray-700 mb-4">
    Our support team is here to assist you with any inquiries or issues. Choose your preferred support method below:
  </p>
                    <hr className="my-6 border-t-6 w-50 border-teal-600" />

  <div className="flex justify-between items-center">
    {/* Support Methods */}
    <div className="space-y-6 w-2/3">
      <div className="flex items-center gap-4">
        <FaPhoneAlt className="text-xl text-teal-500" />
        <div>
          <h4 className="font-semibold text-gray-800">Phone Support</h4>
          <p className="text-gray-600">Call us at +62 21 5098 9399 for immediate assistance.</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <FaEnvelope className="text-xl text-teal-500" />
        <div>
          <h4 className="font-semibold text-gray-800">Email Support</h4>
          <p className="text-gray-600">
            Email us at <a href="mailto:support@DicTech.com" className="text-teal-600">support@DicTech.com</a> for detailed inquiries or assistance.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <FaComments className="text-xl text-teal-500" />
        <div>
          <h4 className="font-semibold text-gray-800">Live Chat</h4>
          <p className="text-gray-600">For real-time support, use our live chat feature available at the bottom-right corner of this page.</p>
        </div>
      </div>
    </div>

    {/* Gambar besar di sisi kanan */}
    <div className="w-1/3">
      <img src="/images/policy.png" alt="Support Image" className="w-full h-auto object-cover rounded-lg" />
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions (FAQs)</h2>
                          <hr className="my-6 border-t-6 w-50 border-teal-600" />

        <div className="space-y-8">
          <FAQItem
            question="What services does DicTech Interactive offer?"
            answer="We specialize in custom web and mobile development, providing solutions designed to meet your specific business needs and challenges. Our team works closely with you to create user-friendly, scalable products."
          />
          <FAQItem
            question="How can I start working with DicTech Interactive?"
            answer="To begin, simply contact us via email, phone, or through the contact form on our website. We'll arrange a consultation to discuss your project requirements and how we can collaborate effectively."
          />
          <FAQItem
            question="Do you offer custom development services?"
            answer="Yes, we specialize in custom development services tailored to your business objectives. Whether you're building a website or a mobile app, we ensure that the final product is aligned with your vision."
          />
          <FAQItem
            question="What is the pricing model for your services?"
            answer="Our pricing is flexible and based on the scope and complexity of your project. We offer competitive rates, and we can provide a detailed quote after discussing your needs in a consultation."
          />
          <FAQItem
            question="How can I get in touch with the team for a project?"
            answer="You can reach us via email at <a href='mailto:info@DicTech.com' className='text-teal-600'>info@DicTech.com</a> or through the contact form on our website. We look forward to collaborating with you!"
          />
          
        </div>
        
      </section>
    </PageLayout>
  );
};

export default SupportAndFaqsPage;
