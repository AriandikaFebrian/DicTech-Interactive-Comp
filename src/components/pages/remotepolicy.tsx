import PageLayout from "@/components/layouts/pagelayout";

const RemotePolicyPage = () => {
  return (
    <PageLayout
      title="Remote Work Policy at DicTech Interactive"
      subtitle="Creating a flexible, productive, and responsible work culture — wherever you are in the world."
    >
      <div className="space-y-6">
        <p>
          At DicTech Interactive, we believe that great work isn’t tied to a physical location. Our remote work policy reflects our commitment to flexibility, accountability, and performance.
        </p>

        <h2 className="text-lg font-semibold">1. Work Hours</h2>
        <p>
          We offer flexible working hours. Team members are expected to be available between 10:00 AM to 4:00 PM (GMT+7) for collaboration, while the rest of the time can be managed individually.
        </p>

        <h2 className="text-lg font-semibold">2. Communication Tools</h2>
        <p>
          We use the following tools for communication and collaboration:
        </p>
        <ul className="list-disc list-inside pl-4">
          <li>Slack — for daily communication</li>
          <li>Notion — for documentation and internal wikis</li>
          <li>Linear or Trello — for project tracking</li>
          <li>Zoom/Google Meet — for weekly stand-ups and meetings</li>
        </ul>

        <h2 className="text-lg font-semibold">3. Deliverables Over Presence</h2>
        <p>
          Our culture values output over hours logged. Team members are assessed based on results, not activity monitoring.
        </p>

        <h2 className="text-lg font-semibold">4. Workspace Expectations</h2>
        <p>
          While working remotely, employees are responsible for maintaining a professional and distraction-free workspace.
        </p>

        <h2 className="text-lg font-semibold">5. Availability</h2>
        <p>
          All team members must keep their calendars updated and respond to messages during working hours within a reasonable timeframe (preferably within 1–2 hours).
        </p>

        <h2 className="text-lg font-semibold">6. Security & Privacy</h2>
        <p>
          Devices used for work must have proper antivirus and secure internet connections. Access to company assets must follow our internal security protocols.
        </p>

        <h2 className="text-lg font-semibold">7. Performance Reviews</h2>
        <p>
          Regular check-ins and reviews will ensure that goals are aligned, and performance remains transparent even when working remotely.
        </p>

        <p>
          We trust our team to work responsibly and independently. This policy empowers every team member to do their best work from wherever they are.
        </p>
      </div>
    </PageLayout>
  );
};

export default RemotePolicyPage;
