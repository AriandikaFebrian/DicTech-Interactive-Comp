import PageLayout from "@/components/layouts/pagelayout";

const ContributionPage = () => {
  return (
    <PageLayout
      title="Contribution Rules at DicTech Interactive"
      subtitle="Guidelines for effective collaboration, contribution, and ownership within our projects."
    >
      <div className="space-y-6">
        <p>
          At DicTech Interactive, contributions are more than just code — they’re about teamwork, ownership, and a shared commitment to quality. Whether you&apos;re writing code, designing UI, managing tasks, or writing documentation, here are the core rules to follow:
        </p>

        <h2 className="text-lg font-semibold">1. Use Feature Branches</h2>
        <p>
          Always work on a separate branch named clearly, such as <code>feature/login-form</code> or <code>fix/navbar-bug</code>. Never push directly to <code>main</code> or <code>production</code>.
        </p>

        <h2 className="text-lg font-semibold">2. Clear Commits</h2>
        <p>
          Write descriptive commit messages that explain the “what” and “why.” For example: <code>feat: add dark mode toggle to header</code>.
        </p>

        <h2 className="text-lg font-semibold">3. Pull Request Protocol</h2>
        <ul className="list-disc list-inside pl-4">
          <li>Every PR must be reviewed by at least one other team member.</li>
          <li>PR title must be clear, e.g., <code>[Fix] Navbar overlapping on mobile</code>.</li>
          <li>Link related issues or tasks if available.</li>
        </ul>

        <h2 className="text-lg font-semibold">4. Code Standards</h2>
        <p>
          Follow our linting rules and file structure. Use consistent formatting. If you’re unsure, refer to existing code or ask the team.
        </p>

        <h2 className="text-lg font-semibold">5. Document As You Go</h2>
        <p>
          If you create something new, document it — whether in Notion, the codebase (README), or inline comments where needed.
        </p>

        <h2 className="text-lg font-semibold">6. Respect Deadlines</h2>
        <p>
          Communicate early if you anticipate delays. Everyone’s time is valuable, so keep project boards and updates current.
        </p>

        <h2 className="text-lg font-semibold">7. Ownership Mindset</h2>
        <p>
          If you pick up a task, treat it as your own — make it work, make it clean, and make it maintainable.
        </p>

        <h2 className="text-lg font-semibold">8. Be Kind & Constructive</h2>
        <p>
          Code reviews and feedback should always aim to help each other grow. Ask questions, suggest improvements, and give credit.
        </p>

        <p>
          These rules exist to make collaboration smoother and projects more maintainable. Let&apos;s build great things — together.
        </p>
      </div>
    </PageLayout>
  );
};

export default ContributionPage;
