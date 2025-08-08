import PageLayout from "@/components/layouts/pagelayout";

const ContactPage = () => {
  return (
    <PageLayout
      title="Contact Us at DicTech Interactive"
      subtitle="We’d love to hear from you. Reach out to us for inquiries, collaboration, or support."
    >
      <div className="space-y-6">
        <p>
          At DicTech Interactive, we believe in building strong connections with our clients, partners, and the tech community. Whether you have questions, feedback, or want to collaborate, we’re here to help.
        </p>

        <h2 className="text-lg font-semibold">Get in Touch</h2>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="font-semibold">Email:</span>
            <a href="mailto:contact@dictech.com" className="text-blue-600 hover:underline">
              contact@dictech.com
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="font-semibold">Phone:</span>
            <a href="tel:+628123456789" className="text-blue-600 hover:underline">
              +62 812 3456 789
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="font-semibold">Office:</span>
            <p>Our office is fully remote. We do not have a physical office location.</p>
          </div>
        </div>

        <h2 className="text-lg font-semibold">Send Us a Message</h2>

        <p>
          Have a question or need assistance? Fill out the form below, and we’ll get back to you as soon as possible.
        </p>

        <form action="#" method="POST" className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="w-full border px-4 py-2 rounded-md"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full border px-4 py-2 rounded-md"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold">Your Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full border px-4 py-2 rounded-md"
              placeholder="Write your message here"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

        <h2 className="text-lg font-semibold">Follow Us</h2>
        <p>
          Stay connected and updated with our latest news and developments by following us on social media:
        </p>

        <div className="flex space-x-4">
          <a href="https://facebook.com/dictech" target="_blank" className="text-blue-600 hover:underline">
            Facebook
          </a>
          <a href="https://twitter.com/dictech" target="_blank" className="text-blue-600 hover:underline">
            Twitter
          </a>
          <a href="https://linkedin.com/company/dictech" target="_blank" className="text-blue-600 hover:underline">
            LinkedIn
          </a>
          <a href="https://instagram.com/dictech" target="_blank" className="text-blue-600 hover:underline">
            Instagram
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
