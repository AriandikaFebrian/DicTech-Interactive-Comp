import PageLayout from "@/components/layouts/pagelayout";

const ProjectsPage = () => {
  return (
    <PageLayout
      title="Our Projects at DicTech Interactive"
      subtitle="Innovative projects that showcase our expertise and creativity."
    >
      <div className="space-y-6">
        <p>
          At DicTech Interactive, we pride ourselves on delivering impactful projects that solve real-world problems. Below are some of our standout projects that highlight our diverse capabilities across various industries.
        </p>

        <h2 className="text-lg font-semibold">1. Brixel Studio</h2>
        <p>
          Brixel Studio is an innovative platform that combines the concepts of &apos;Brick&apos; and &apos;Pixel&apos; to foster creativity. It allows users to upload and share 2D and 3D assets, enabling a community-driven approach to digital content creation. This platform is designed to empower creative professionals, artists, and developers to collaborate and showcase their work in a seamless environment.
        </p>

        <h2 className="text-lg font-semibold">2. BugNest</h2>
        <p>
          BugNest is a bug reporting and project management platform that provides a comprehensive solution for internal teams to track and resolve issues. It includes features like issue tracking, task assignment, file uploads, and activity logs. The platform is designed to improve team collaboration and streamline bug resolution, ensuring faster delivery of high-quality software.
        </p>

        <h2 className="text-lg font-semibold">3. GetThatGame</h2>
        <p>
          GetThatGame is a game catalog website that provides an extensive list of free-to-play games with detailed information on file sizes, categories, and more. It includes a search filter, automatic broken link reporting, and a downloadable section. This platform is designed for gamers who are looking for easy access to the best free games, with a simple and intuitive interface.
        </p>

        <h2 className="text-lg font-semibold">4. DicTech Official Website</h2>
        <p>
          Our official website showcases our core offerings, team, and ethos. The site features a clean, modern design with clear navigation, client testimonials, and case studies. It&apos;s built with performance and user experience in mind, serving as a hub for all things related to DicTech Interactive.
        </p>

        <p>
          These projects reflect our commitment to innovation, quality, and collaboration. We are always looking to push boundaries and deliver value to our clients and users. If you’re interested in collaborating on a project, feel free to get in touch with us.
        </p>
      </div>
    </PageLayout>
  );
};

export default ProjectsPage;
