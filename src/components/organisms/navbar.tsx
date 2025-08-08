"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import "@/i18n/config";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { t, i18n } = useTranslation(undefined, { useSuspense: false });
  const [navHover, setNavHover] = useState(false);
  const navHoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const [lang, setLang] = useState<"EN" | "ID">(() => {
    const currentLang = i18n.language || "en";
    return currentLang.toUpperCase() === "ID" ? "ID" : "EN";
  });

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const toggleLang = () => {
    const newLang = lang === "EN" ? "ID" : "EN";
    setLang(newLang);
    i18n.changeLanguage(newLang.toLowerCase());
  };

  

  const navItems = [
    {
      name: t("profil"),
      href: "/profil",
      activePaths: ["/profil", "/history", "/values", "/policy"],
      dropdown: [
        { name: t("history"), href: "/history" },
        { name: t("values"), href: "/values" },
        {
          name: t("Policy & Terms"),
          href: "/policy",
          dropdown: [
               { name: t("Terms of Service"), href: "/policy/terms-of-service" },
            { name: t("work_guidelines"), href: "/policy/work-guidelines" },
            { name: t("code_of_conduct"), href: "/policy/code-of-conduct" },
            { name: t("Remote Work Policy"), href: "/policy/remote" },
          ],
        },
      ],
    },
    {
      name: t("our_services"),
      href: "/services",
      activePaths: [
        "/services",
        "/web-development",
        "/ui-ux",
        "/mobile-app",
        "/ui-ux-design",
        "/seo",
      ],
      dropdown: [
        { name: t("custom_web_development"), href: "/custom-web-development" },
        {
          name: t("web_app_&_dashboard_development"),
          href: "/web-app-dashboard-development",
        },
        { name: t("mobile_app_development"), href: "/mobile-app" },
        { name: t("ui_&_ux_design"), href: "/ui-ux-design" },
        { name: t("seo_optimization"), href: "/seo" },
      ],
    },
    {
      name: t("project"),
      href: "/project",
      activePaths: [
        "/project",
        "/shop-sphere",
        "/edulearn",
        "/foodly",
        "/cloudconnect",
      ],
      dropdown: [
        { name: t("Shopsphere"), href: "/project/shop-sphere" },
        { name: t("Edulearn"), href: "/project/edulearn" },
        { name: t("Foodly"), href: "/project/foodly" },
        { name: t("Cloudconnect"), href: "/project/cloudconnect" },
      ],
    },
    {
      name: t("Support & FAQs"),
      href: "/support-and-faqs",
    },
    {
      name: t("blog"),
      href: "/blog",
      activePaths: ["/blog", "/company", "/careers"],
      dropdown: [
        { name: t("company"), href: "/company" },
        { name: t("careers"), href: "/careers" },
      ],
    },
    {
      name: t("contact"),
      href: "/contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 10);
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navClass = `
    fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
    ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
    ${
      !isAtTop || navHover
        ? "bg-teal-600 border-white/10 dark:border-gray-700 shadow-md"
        : "bg-transparent"
    }
  `;

  return (
    <nav
      className={navClass}
      onMouseEnter={() => setNavHover(true)}
      onMouseLeave={() => setNavHover(false)}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="w-10 h-10 relative scale-180">
            <Image
              src="/images/logo/lohonobg.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavItem key={item.name} item={item} pathname={pathname} />
          ))}
        </div>

        <button
          onClick={toggleLang}
          className="ml-4 text-sm text-gray-700 dark:text-white hover:underline"
        >
          {lang}
        </button>
      </div>
    </nav>
  );
};

type DropdownItem = {
  name: string;
  href: string;
};

type SubItem = DropdownItem & {
  dropdown?: DropdownItem[]; // Sub-item yang bisa memiliki dropdown
};

type NavItemType = DropdownItem & {
  activePaths?: string[]; // Menambahkan activePaths sebagai optional array of strings
  dropdown?: SubItem[]; // Item yang bisa memiliki dropdown
};




const NavItem = ({
  item,
  pathname,
}: {
  item: NavItemType;
  pathname: string;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const hasDropdown = Array.isArray(item.dropdown);

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const isActive = (href: string, activePaths?: string[]) => {
    if (activePaths) {
      return activePaths.some((path) => pathname.startsWith(path));
    }
    return pathname.startsWith(href);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={`relative text-base font-medium pointer-events-auto
          ${
            isActive(item.href, item.activePaths)
              ? "text-white dark:text-teal-400 after:w-full"
              : "text-gray-200 hover:text-white dark:text-white hover:dark:text-white after:w-0 hover:after:w-full"
          }
          transition-colors duration-300 flex items-center
          after:absolute after:-bottom-1 after:left-0 after:h-[2px]
          after:bg-white dark:after:bg-white after:transition-all after:duration-300 after:ease-in-out
        `}
      >
        {item.name}
        {hasDropdown && <span className="ml-1 text-sm">▼</span>}
      </Link>

      {hasDropdown && (
        <div
          className={`absolute left-0 mt-2 z-20 min-w-[12rem] transition-all duration-200 ease-in
          ${isDropdownOpen ? "visible opacity-100" : "invisible opacity-0"}
        `}
        >
          <div className="bg-white dark:bg-gray-800 shadow-xl rounded-md py-2 ring-1 ring-black/5 dark:ring-white/10">
            {item.dropdown && item.dropdown.length > 0 && item.dropdown.map((sub: SubItem) => (
  <div key={sub.name} className="relative group/sub">
    <Link
      href={sub.href}
      className="block px-4 py-2 text-sm text-gray-950 dark:text-gray-900 hover:text-gray-600 dark:hover:text-gray-300 whitespace-nowrap items-center justify-between pr-4"
    >
      <span>{sub.name}</span>
      {sub.dropdown && (
        <span className="ml-2 text-gray-400 dark:text-gray-500">
          ›
        </span>
      )}
    </Link>

    {sub.dropdown && (
      <div className="absolute left-full top-0 mt-0 z-30 min-w-[12rem] invisible group-hover/sub:visible opacity-0 group-hover/sub:opacity-100 transition-all duration-200 ease-in pointer-events-auto">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-md py-2 ring-1 ring-black/5 dark:ring-white/10">
          {sub.dropdown.map((deep: DropdownItem) => (
            <Link
              key={deep.name}
              href={deep.href}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 whitespace-nowrap"
            >
              {deep.name}
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>
))}

          </div>
        </div>
      )}
    </div>
  );
};


export default Navbar;
