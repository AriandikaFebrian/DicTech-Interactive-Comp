import PageLayout from "@/components/layouts/pagelayout";

const ServicesPage = () => {
  return (
    <PageLayout
      title="Our Services at DicTech Interactive"
      subtitle="Innovative tech solutions to accelerate your business and creativity."
    >
      <div className="space-y-6">
        <p>
          At DicTech Interactive, we offer a wide range of services designed to help businesses leverage technology for growth, efficiency, and innovation. From custom software development to creative design, our services are tailored to meet the unique needs of each client.
        </p>

        <h2 className="text-lg font-semibold">1. Custom Software Development</h2>
        <p>
          Our team specializes in building scalable, high-performance applications tailored to your business needs. Whether it&apos;s a web application, mobile app, or enterprise-level solution, we provide end-to-end development from concept to deployment.
        </p>

        <h2 className="text-lg font-semibold">2. UI/UX Design</h2>
        <p>
          We create user-centered designs that deliver seamless and intuitive experiences. Our design process focuses on user research, prototyping, and usability testing to ensure your products not only look great but are also easy to use.
        </p>

        <h2 className="text-lg font-semibold">3. Cloud Solutions</h2>
        <p>
          Leverage the power of the cloud with our infrastructure and cloud application solutions. We provide scalable cloud services to ensure your business stays agile, secure, and ready for growth.
        </p>

        <h2 className="text-lg font-semibold">4. IT Consulting</h2>
        <p>
          Our consultants help guide your business through the challenges of digital transformation. We provide strategic advice on IT infrastructure, system integrations, and tech stack decisions to ensure your tech investments align with your business goals.
        </p>

        <h2 className="text-lg font-semibold">5. Maintenance and Support</h2>
        <p>
          We offer ongoing maintenance and support services to ensure your applications are always running smoothly. From bug fixes to feature updates, we’re here to keep your software up-to-date and fully optimized.
        </p>

        <h2 className="text-lg font-semibold">6. Training & Workshops</h2>
        <p>
          Empower your team with the knowledge and skills they need to succeed. We offer training sessions and workshops on a variety of tech topics, from coding best practices to using design tools effectively.
        </p>

        <p>
          We’re committed to providing high-quality services that not only meet but exceed expectations. Let’s work together to bring your vision to life.
        </p>
      </div>
    </PageLayout>
  );
};

export default ServicesPage;
