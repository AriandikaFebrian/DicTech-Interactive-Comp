// src/pages/CodeOfConduct.tsx
import React from 'react';
import PageLayout from '../layouts/pagelayout';

const UiuxDesign = () => {
  return (
    <main>
      {/* Hero Section */}
           <PageLayout
      title="The Story Behind DicTech Interactive"
      subtitle="Discover how DicTech Interactive was born — from humble beginnings to a forward-thinking digital powerhouse led by Ari Andika Febrian."
    >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-lg text-gray-700 dark:text-gray-900 space-y-8">
            {/* Introduction */}
            <div>
              <p className="font-semibold text-2xl text-gray-800">Introduction</p>
              <p>
                We strive to create a positive environment where everyone can thrive. This Code of Conduct applies to all individuals within our organization, including employees, collaborators, and users on our platform.
              </p>
            </div>

            {/* Respectful Communication */}
            <div>
              <p className="font-semibold text-2xl text-gray-800">Respectful Communication</p>
              <p>
                We value open, honest, and respectful communication. We expect everyone to:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Engage in discussions with kindness and empathy.</li>
                <li>Provide constructive feedback and respect differing viewpoints.</li>
                <li>Use clear, professional language in all communications, both online and offline.</li>
              </ul>
            </div>

            {/* Professional Behavior */}
            <div>
              <p className="font-semibold text-2xl text-gray-800">Professional Behavior</p>
              <p>
                Everyone is expected to act with professionalism and integrity at all times. This includes:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Being reliable and accountable in all tasks and commitments.</li>
                <li>Adhering to deadlines and maintaining high standards of work.</li>
                <li>Refraining from any form of harassment or discrimination in the workplace or online platforms.</li>
              </ul>
            </div>

            {/* Inclusivity */}
            <div>
              <p className="font-semibold text-2xl text-gray-800">Inclusivity</p>
              <p>
                We are committed to building an inclusive and diverse environment. We expect everyone to:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Respect all individuals regardless of their background, gender, race, or beliefs.</li>
                <li>Encourage diversity in ideas, perspectives, and approaches.</li>
                <li>Support equal opportunities for all community members.</li>
              </ul>
            </div>

            {/* Collaboration */}
            <div>
              <p className="font-semibold text-2xl text-gray-800">Collaboration</p>
              <p>
                Successful collaboration relies on mutual trust and respect. We encourage:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Active participation in team discussions and meetings.</li>
                <li>Helping and supporting fellow team members when needed.</li>
                <li>Sharing knowledge and resources to drive collective success.</li>
              </ul>
            </div>

            {/* Consequences for Violations */}
            <div>
              <p className="font-semibold text-2xl text-gray-800">Consequences for Violations</p>
              <p>
                We take violations of this Code of Conduct seriously. Violations may result in:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Formal warnings or discussions with team leads or management.</li>
                <li>Temporary suspension from team activities or access to the platform.</li>
                <li>Permanent removal from the community or platform in severe cases.</li>
              </ul>
              <p className="mt-4">
                If you witness a violation or have concerns, please reach out to the appropriate channels for reporting and resolution.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <p className="font-semibold text-2xl text-gray-800">Contact Us</p>
              <p>If you have any questions regarding the Code of Conduct or need to report an issue, please contact us:</p>
              <ul className="list-none pl-6 mt-4">
                <li>Email: <a href="mailto:info@DicTech.com" className="text-teal-500">info@DicTech.com</a></li>
                <li>Phone: <a href="tel:+1234567890" className="text-teal-500">+1 (234) 567-890</a></li>
              </ul>
            </div>
          </div>
        </div>
      </PageLayout>
    </main>
  );
};

export default UiuxDesign;
