import React from "react";
import PageLayout from "../layouts/pagelayout";

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "eligibility", title: "2. Eligibility" },
  { id: "responsibilities", title: "3. User Responsibilities" },
  { id: "provider-rights", title: "4. Service Provider Rights" },
  { id: "privacy", title: "5. Privacy" },
  { id: "liability", title: "6. Limitation of Liability" },
  { id: "termination", title: "7. Termination" },
  { id: "changes", title: "8. Changes to Terms" },
  { id: "contact", title: "9. Contact Us" },
];

const TermsOfServicePage = () => {
  return (
    <PageLayout
      title="Terms of Service"
      subtitle="Rules and guidelines for using DicTech Interactive’s services."
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 p-6">
        
        {/* Sidebar */}
        <nav className="lg:w-1/4 sticky top-20 self-start bg-white dark:bg-gray-900 p-6 rounded-md shadow-md border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-6 text-teal-600">Contents</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
            {sections.map(({ id, title }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="block hover:text-teal-600 transition-colors duration-200"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <article className="prose prose-teal dark:prose-invert lg:w-3/4 max-w-none space-y-8">
       <h1>Terms of Service</h1>

<p>
  Welcome to DicTech Interactive. By accessing or using our website, mobile applications, or any other digital services and products offered by DicTech Interactive, you agree to comply with and be legally bound by these Terms of Service.  
  These terms outline the rules, responsibilities, and guidelines that govern your use of our various services, including web development, mobile app solutions, software platforms, and any related digital offerings.  
  We encourage you to read this document carefully to understand your rights and obligations when engaging with our services.  
  If you disagree with any part of these terms, please refrain from using our products or services.
</p>


          <section id="acceptance" className="scroll-mt-24">
            <h2 className="flex items-center gap-2">
  <svg
    className="w-6 h-6 text-teal-600 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M5 13l4 4L19 7" />
  </svg>
  1. Acceptance of Terms
</h2>
<p>
  By accessing, browsing, or using any of DicTech Interactive&apos;s services, including our websites, mobile applications, software platforms, or any other digital products, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms of Service as well as our Privacy Policy.  
</p>
<p>
  These terms establish a binding agreement between you (the user or client) and DicTech Interactive, and they govern your use of our services and products. If you do not agree to all the terms stated herein, you must immediately discontinue your use of our services.  
</p>
<p>
  Your continued use of our services after any modifications or updates to these terms constitutes your acceptance of those changes. We recommend reviewing these Terms periodically to stay informed about your rights and obligations.
</p>

          </section>

          <section id="eligibility" className="scroll-mt-24">
            <h2 className="flex items-center gap-3">
  <svg
    className="w-6 h-6 text-teal-600 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4m0-4h.01" />
  </svg>
  2. Eligibility
</h2>
<p>
  To use DicTech Interactive’s services, you must be at least 18 years old or have reached the age of majority in your jurisdiction. If you are under the required age, you must obtain consent from a parent or legal guardian before accessing or using our services.  
</p>
<p>
  By using our services, you represent and warrant that you meet all eligibility requirements, including any applicable local laws or regulations that govern your use of digital services.  
</p>
<p>
  If you do not meet these criteria, please refrain from using our services to ensure compliance and to protect your legal rights.
</p>

          </section>

          <section id="responsibilities" className="scroll-mt-24">
            <h2 className="flex items-center gap-3">
  <svg
    className="w-6 h-6 text-teal-600 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M3 7v4a1 1 0 001 1h3m10 0h3a1 1 0 001-1V7" />
    <path d="M7 17h10M7 13h10" />
  </svg>
  3. User Responsibilities
</h2>
<ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
  <li>
    You agree to use our services lawfully and responsibly, complying with all applicable laws, regulations, and third-party rights, including intellectual property and privacy laws.
  </li>
  <li>
    You must not upload, post, share, or transmit any content that is unlawful, offensive, defamatory, obscene, threatening, or otherwise objectionable.
  </li>
  <li>
    Protect the confidentiality of your account credentials. You are responsible for all activities that occur under your account and must notify us immediately of any unauthorized use or breach.
  </li>
  <li>
    Refrain from attempting to disrupt, damage, or interfere with the security or operation of our services, including introducing malware or engaging in hacking activities.
  </li>
  <li>
    Respect other users and the community by engaging in ethical and professional behavior when using our platforms and services.
  </li>
</ul>

          </section>

          <section id="provider-rights" className="scroll-mt-24">
            <h2 className="flex items-center gap-3">
  <svg
    className="w-6 h-6 text-teal-600 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
  4. Service Provider Rights
</h2>
<p className="mb-4 text-gray-700 dark:text-gray-300">
  DicTech Interactive maintains the right to modify, update, suspend, or discontinue any part of our services, products, or features at any time and without prior notice. This ensures we can continually improve our offerings and respond to changing technical or business conditions.
</p>
<p className="mb-4 text-gray-700 dark:text-gray-300">
  We reserve the right to restrict, suspend, or terminate access to our services for users who breach these Terms of Service, engage in fraudulent or abusive behavior, or otherwise disrupt the integrity and security of our platforms.
</p>
<p className="text-gray-700 dark:text-gray-300">
  These actions are taken to protect our community, maintain quality of service, and comply with legal obligations.
</p>

          </section>

          <section id="privacy" className="scroll-mt-24">
            <h2 className="flex items-center gap-3">
  <svg
    className="w-6 h-6 text-teal-600 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M3 5h18M3 10h18M3 15h18M3 20h18" />
  </svg>
  5. Privacy
</h2>
<p className="mb-4 text-gray-700 dark:text-gray-300">
  We understand the importance of protecting your personal information. DicTech Interactive is committed to safeguarding your privacy by adhering to strict data protection practices and applicable laws.
</p>
<p className="mb-4 text-gray-700 dark:text-gray-300">
  We collect and use your data solely for providing, maintaining, and improving our services, as well as for communicating with you. We do not share your personal information with third parties except as outlined in our Privacy Policy or when legally required.
</p>
<p className="mb-4 text-gray-700 dark:text-gray-300">
  For detailed information on what data we collect, how it is used, and the measures we take to protect it, please review our{" "}
  <a href="/policy/privacy-policy" className="text-teal-600 underline">
    Privacy Policy
  </a>.
</p>
<p className="text-gray-700 dark:text-gray-300">
  By using our services, you consent to the collection and use of your information as described in the Privacy Policy.
</p>

          </section>

          <section id="liability" className="scroll-mt-24">
            <h2 className="flex items-center gap-3">
  <svg
    className="w-6 h-6 text-teal-600 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12" y2="16" />
  </svg>
  6. Limitation of Liability
</h2>
<p className="mb-4 text-gray-700 dark:text-gray-300">
  While we strive to provide reliable and high-quality services, DicTech Interactive and its affiliates, partners, or licensors shall not be held responsible or liable for any damages, losses, or expenses resulting from your use of, or inability to use, our services.
</p>
<p className="mb-4 text-gray-700 dark:text-gray-300">
  This includes but is not limited to direct, indirect, incidental, consequential, punitive, or special damages, even if we have been advised of the possibility of such damages.
</p>
<p className="mb-4 text-gray-700 dark:text-gray-300">
  You acknowledge that the services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
</p>
<p className="text-gray-700 dark:text-gray-300">
  To the fullest extent permitted by law, our total liability to you for any claim arising out of or relating to these Terms or your use of the services shall not exceed the amount you have paid to us, if any, for accessing or using the services.
</p>

          </section>

          <section id="termination" className="scroll-mt-24">
           <h2 className="flex items-center gap-3">
  <svg
    className="w-6 h-6 text-teal-600 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
  7. Termination
</h2>
<p className="mb-4 text-gray-700 dark:text-gray-300">
  DicTech Interactive reserves the right to terminate or suspend your access to all or part of our services immediately, without prior notice or liability, if you violate or are suspected of violating these Terms of Service.
</p>
<p className="mb-4 text-gray-700 dark:text-gray-300">
  Termination may include removal of content, cancellation of accounts, and restriction of access to our services.
</p>
<p className="mb-4 text-gray-700 dark:text-gray-300">
  Upon termination, all rights granted to you under these Terms will cease immediately.
</p>
<p className="text-gray-700 dark:text-gray-300">
  If you wish to terminate your account voluntarily, please contact our support team at <a href="mailto:support@dictech.com" className="text-teal-600 underline">support@dictech.com</a>.
</p>

          </section>

          <section id="changes" className="scroll-mt-24">
            <h2 className="flex items-center gap-3">
  <svg
    className="w-6 h-6 text-teal-600 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M4 4h16v16H4z" />
    <path d="M4 9h16M9 4v16" />
  </svg>
  8. Changes to Terms
</h2>
<p className="mb-4 text-gray-700 dark:text-gray-300">
  DicTech Interactive may update or revise these Terms of Service periodically to reflect changes in our services, legal requirements, or operational needs.
</p>
<p className="mb-4 text-gray-700 dark:text-gray-300">
  We will notify you of any significant changes by posting a notice on our website or sending you an email, when applicable.
</p>
<p className="mb-4 text-gray-700 dark:text-gray-300">
  Your continued use of our services after any changes indicates your acceptance of the updated Terms.
</p>
<p className="text-gray-700 dark:text-gray-300">
  We encourage you to review these Terms regularly to stay informed about your rights and obligations.
</p>

          </section>

          <section id="contact" className="scroll-mt-24">
            <h2 className="flex items-center gap-3">
  <svg
    className="w-6 h-6 text-teal-600 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M2 8l10 6 10-6M2 8v8h20V8" />
  </svg>
  9. Contact Us
</h2>
<p className="mb-4 text-gray-700 dark:text-gray-300">
  If you have any questions, concerns, or need further clarification regarding these Terms of Service or any other aspect of our services, we are here to help.
</p>
<p className="mb-4 text-gray-700 dark:text-gray-300">
  Please feel free to reach out to our support team via email at{" "}
  <a href="mailto:support@dictech.com" className="text-teal-600 underline">
    support@dictech.com
  </a>
  . We aim to respond to all inquiries promptly and assist you to the best of our ability.
</p>
<p className="text-gray-700 dark:text-gray-300">
  Thank you for choosing DicTech Interactive.
</p>

          </section>
        </article>
      </div>
    </PageLayout>
  );
};

export default TermsOfServicePage;
