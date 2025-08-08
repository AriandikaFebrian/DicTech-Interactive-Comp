import React from "react";
import { FaEnvelope, FaPhoneAlt, FaComments } from "react-icons/fa";
import PageLayout from "../layouts/pagelayout";

const SupportAndFaqsPage = () => {
  return (
    <PageLayout
      title="Contribution Rules at DicTech Interactive"
      subtitle="Guidelines for effective collaboration, contribution, and ownership within our projects."
    >
      {/* Section Title */}
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Support & FAQs</h1>

      {/* Support Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Support</h2>
        <p className="text-lg text-gray-700 mb-4">
          If you need assistance, our support team is available to help you resolve any issues or answer questions.
        </p>

        <div className="space-y-6">
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
                Send an email to <a href="mailto:support@DicTech.com" className="text-teal-600">support@DicTech.com</a> for any inquiries.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaComments className="text-xl text-teal-500" />
            <div>
              <h4 className="font-semibold text-gray-800">Live Chat</h4>
              <p className="text-gray-600">For real-time support, use our live chat feature available at the bottom-right corner of the page.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Link */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Documentation</h2>
        <p className="text-lg text-gray-700 mb-4">
          Visit our <a href="/docs" className="text-teal-600">documentation</a> for detailed guides and tutorials on using our product.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Report an Issue</h2>
        <p className="text-lg text-gray-700 mb-4">
          Encountering any bugs or issues? Please report them through our <a href="/report" className="text-teal-600">issue reporting system</a>.
        </p>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions (FAQs)</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">What makes your product different from others?</h3>
            <p className="text-lg text-gray-700">
              Our platform focuses on simplifying the user experience with powerful features, user-friendly design, and robust integrations that help startups scale quickly and efficiently.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">How do I get started?</h3>
            <p className="text-lg text-gray-700">
              To get started, simply sign up on our platform and follow the on-screen instructions to set up your first project or integration.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Are there any costs associated with using the platform?</h3>
            <p className="text-lg text-gray-700">
              Our platform offers a free tier with basic features. For advanced features, we offer a subscription plan that can be found on our pricing page.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">How do I update or upgrade my account?</h3>
            <p className="text-lg text-gray-700">
              To update or upgrade your account, log into your dashboard and navigate to the &quot;Account Settings&quot; section, where you can change your plan and preferences.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">What is your refund policy?</h3>
            <p className="text-lg text-gray-700">
              We offer a 30-day money-back guarantee. If you&apos;re not satisfied with the service, you can request a full refund within the first 30 days of your subscription.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">How secure is my data?</h3>
            <p className="text-lg text-gray-700">
              We take data security seriously. All data is encrypted using the latest industry-standard encryption protocols, and we comply with relevant privacy laws.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Can I integrate your platform with other tools?</h3>
            <p className="text-lg text-gray-700">
              Yes, our platform supports integrations with various third-party tools. You can find the full list of supported integrations in our documentation.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">How do I delete my account or data?</h3>
            <p className="text-lg text-gray-700">
              If you&apos;d like to delete your account or data, please reach out to our support team via <a href="mailto:support@DicTech.com" className="text-teal-600">support@DicTech.com</a>, and we&apos;ll assist you with the process.
            </p>
          </div>
        </div>
      </section>
    
        </PageLayout>
  );
};

export default SupportAndFaqsPage;
