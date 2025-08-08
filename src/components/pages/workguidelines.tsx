// src/pages/WorkGuidelines.tsx
import React from 'react';
import PageLayout from '../layouts/pagelayout';

const WorkGuidelines = () => {
  return (
    <main>
          <PageLayout
      title="The Story Behind DicTech Interactive"
      subtitle="Discover how DicTech Interactive was born — from humble beginnings to a forward-thinking digital powerhouse led by Ari Andika Febrian."
    >

        <div className="max-w-6xl mx-auto px-6">
          <div className="text-lg text-gray-700 dark:text-gray-900 space-y-8">
            {/* Work Environment */}
            <div>
              <p className="font-semibold text-2xl text-gray-800">Work Environment</p>
              <p>
                We foster an inclusive and collaborative work environment where communication is key. Whether you&apos;re working remotely or in the office, we expect all team members to be responsive and engaged.
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Maintain a positive and respectful attitude towards colleagues.</li>
                <li>Ensure clear and timely communication, especially during project updates.</li>
                <li>Be flexible and adaptable to changes in workflow or project requirements.</li>
              </ul>
            </div>

            {/* Development Guidelines */}
            <div>
              <p className="font-semibold text-2xl text-gray-800">Development Guidelines</p>
              <p>
                We follow best practices for software development, ensuring that code is clean, maintainable, and efficient. Here are the key guidelines we adhere to:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Write clean, readable, and well-documented code.</li>
                <li>Follow the coding standards and conventions established by the team.</li>
                <li>Ensure that all code is tested thoroughly before being deployed.</li>
                <li>Use version control (e.g., Git) for all code changes and commit regularly.</li>
              </ul>
            </div>

            {/* Code of Conduct */}
            <div>
              <p className="font-semibold text-2xl text-gray-800">Code of Conduct</p>
              <p>
                We expect all team members to adhere to the highest standards of professionalism and integrity. This includes:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Treat all colleagues, clients, and partners with respect and professionalism.</li>
                <li>Engage in constructive feedback and offer help to others when needed.</li>
                <li>Abide by company policies and guidelines in all situations.</li>
                <li>Commit to continuous learning and personal development.</li>
              </ul>
            </div>

            {/* Workflow */}
            <div>
              <p className="font-semibold text-2xl text-gray-800">Workflow</p>
              <p>
                Our workflow is designed to maximize efficiency and collaboration. We follow a flexible, iterative approach that can adjust based on project needs:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Follow an Agile or Scrum methodology to deliver incremental value.</li>
                <li>Conduct regular stand-up meetings to discuss project progress and any roadblocks.</li>
                <li>Prioritize tasks effectively to meet deadlines and project goals.</li>
              </ul>
            </div>

            {/* Tools and Resources */}
            <div>
              <p className="font-semibold text-2xl text-gray-800">Tools and Resources</p>
              <p>
                The following tools and platforms are essential for our daily work:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>GitHub for version control and code collaboration.</li>
                <li>Slack for communication and team collaboration.</li>
                <li>Trello or Jira for task management and project tracking.</li>
                <li>Zoom for virtual meetings and collaboration.</li>
              </ul>
            </div>
          </div>
        </div>
        </PageLayout>
    </main>
  );
};

export default WorkGuidelines;
