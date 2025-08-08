import PageLayout from "@/components/layouts/pagelayout";

const WebDevelopmentPage = () => {
  return (
    <PageLayout
      title="Web Development at DicTech Interactive"
      subtitle="Scalable, performant, and user-focused web applications built with modern technologies."
    >
      <div className="space-y-6">
        <p>
          At DicTech Interactive, web development is more than just creating websites — it’s about crafting digital experiences that are fast, accessible, and visually stunning. We combine best practices in UI/UX with high-performance frontend and backend technologies.
        </p>

        <h2 className="text-lg font-semibold">🛠️ Tech Stack We Use</h2>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Frontend:</strong> Next.js, React, TailwindCSS, ShadCN/UI</li>
          <li><strong>Backend:</strong> Next.js API Routes, Node.js, PostgreSQL, PlanetScale, Supabase</li>
          <li><strong>CMS / Admin:</strong> Sanity, Notion API, Strapi</li>
          <li><strong>Deployment:</strong> Vercel, Railway, Netlify</li>
        </ul>

        <h2 className="text-lg font-semibold">⚙️ Development Philosophy</h2>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Component-First:</strong> Reusable UI components for faster builds and consistent design.</li>
          <li><strong>API-Driven:</strong> Every application is modular and communicates through clean APIs.</li>
          <li><strong>Performance Matters:</strong> Lazy loading, code splitting, image optimization — all by default.</li>
          <li><strong>Mobile-First:</strong> All designs are responsive and optimized for any screen size.</li>
        </ul>

        <h2 className="text-lg font-semibold">📈 Why Clients Choose Us</h2>
        <p>
          We don’t just deliver code. We analyze your business goals and turn them into scalable web solutions.
          Our attention to user experience, accessibility, SEO, and performance means your site doesn’t just look great — it works great too.
        </p>

        <h2 className="text-lg font-semibold">🚀 Project Lifecycle</h2>
        <ol className="list-decimal list-inside pl-4">
          <li>Briefing & Requirement Gathering</li>
          <li>Wireframing & UI/UX Design</li>
          <li>Development & Integration</li>
          <li>Testing (manual + automated)</li>
          <li>Launch & Post-launch Support</li>
        </ol>

        <p>
          Whether it’s a company website, product landing page, or full-scale web application — we build with purpose and precision.
        </p>
      </div>
    </PageLayout>
  );
};

export default WebDevelopmentPage;
