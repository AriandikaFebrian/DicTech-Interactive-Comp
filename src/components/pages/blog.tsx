import PageLayout from "@/components/layouts/pagelayout";

const BlogPage = () => {
  return (
    <PageLayout
      title="Blog at DicTech Interactive"
      subtitle="Stay updated with our latest thoughts, insights, and industry trends."
    >
      <div className="space-y-6">
        <p>
          Welcome to the DicTech Interactive Blog! Here, we share valuable insights on technology, innovation, and our journey as a startup. From the latest industry trends to internal updates, our blog is where you can stay informed and inspired.
        </p>

        <h2 className="text-lg font-semibold">Recent Posts</h2>

        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="text-xl font-semibold">
              <a href="/blog/launching-brixel-studio" className="hover:text-blue-600">
                Launching Brixel Studio: A New Era of Digital Creativity
              </a>
            </h3>
            <p className="text-gray-600">
              Our journey in creating Brixel Studio, a platform for sharing 2D and 3D assets, and how it empowers the creative community.
            </p>
            <p className="text-sm text-gray-400">Posted on August 5, 2025</p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-xl font-semibold">
              <a href="/blog/bugnest-advances-in-bug-reporting" className="hover:text-blue-600">
                BugNest: Advancing the Future of Bug Reporting and Project Management
              </a>
            </h3>
            <p className="text-gray-600">
              How BugNest is revolutionizing bug reporting for teams and enhancing project workflows with its intuitive design.
            </p>
            <p className="text-sm text-gray-400">Posted on July 22, 2025</p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-xl font-semibold">
              <a href="/blog/getthatgame-website-updates" className="hover:text-blue-600">
                GetThatGame: What&apos;s New in Our Game Catalog
              </a>
            </h3>
            <p className="text-gray-600">
              A closer look at the new features we’ve added to GetThatGame, making it even easier for gamers to find their next favorite game.
            </p>
            <p className="text-sm text-gray-400">Posted on July 18, 2025</p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-xl font-semibold">
              <a href="/blog/dictech-our-road-to-startup-success" className="hover:text-blue-600">
                DicTech Interactive: Our Road to Startup Success
              </a>
            </h3>
            <p className="text-gray-600">
              From idea to launch, a behind-the-scenes look at how DicTech Interactive came to life and what’s next for us.
            </p>
            <p className="text-sm text-gray-400">Posted on July 10, 2025</p>
          </div>
        </div>

        <h2 className="text-lg font-semibold">Categories</h2>
        <div className="flex space-x-4">
          <span className="text-blue-600 cursor-pointer hover:underline">Tech Insights</span>
          <span className="text-blue-600 cursor-pointer hover:underline">Product Updates</span>
          <span className="text-blue-600 cursor-pointer hover:underline">Company News</span>
        </div>

        <p className="mt-6">
          We regularly update this section with posts from our team. Stay tuned for more updates and thoughts from our team at DicTech Interactive!
        </p>
      </div>
    </PageLayout>
  );
};

export default BlogPage;
