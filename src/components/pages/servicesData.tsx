export type Service = {
  id: string;
  title: string;
  desc: string;
  href: string;
  bgColor: string;
};

export const services: Service[] = [
  {
    id: "custom-web-development",
    title: "Custom Web Development",
    desc: "Responsive, scalable websites for great user experiences.",
    href: "/custom-web-development",
    bgColor: "bg-white/10 text-black",
  },
  {
    id: "web-app-dashboard-development",
    title: "Web App & Dashboard Development",
    desc: "Cross-platform apps for iOS and Android users.",
    href: "/web-app-dashboard-development",
    bgColor: "bg-teal-600 text-white",
  },
  {
    id: "mobile-app",
    title: "Mobile App Development (React Native / Flutter)",
    desc: "Visual design that strengthens your brand identity.",
    href: "/mobile-app",
    bgColor: "bg-white/10 text-black",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    desc: "Boost visibility and reach the top of search results.",
    href: "/ui-ux-design",
    bgColor: "bg-teal-600 text-white",
  },
  {
    id: "api-backend-development",
    title: "API & Backend Development",
    desc: "Scale your infrastructure with secure cloud tech.",
    href: "/api-backend-development",
    bgColor: "bg-teal-600 text-white",
  },
];
