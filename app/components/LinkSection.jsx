"use client";

import Link from "next/link";

const linkData = [
  {
    title: "Platform",
    links: [
      { name: "AI Marketing OS", href: "#" },
      { name: "AI Sales OS", href: "#" },
      { name: "Chat", href: "#" },
      { name: "Brand voice", href: "#" },
      { name: "Infobase", href: "#" },
      { name: "Workflow Templates", href: "#" },
      { name: "AI Tools", href: "#" },
      { name: "Plectra API", href: "#" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { name: "Translations", href: "#" },
      { name: "Blog Content", href: "#" },
      { name: "Social Media Posts", href: "#" },
      { name: "Email Marketing", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "What is Plectra AI?", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Community", href: "#" },
      { name: "Webinars", href: "#" },
      { name: "Workflow Tutorials", href: "#" },
      { name: "Security", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Request a Demo", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Report a Bug", href: "#" },
      { name: "Report an Outage", href: "#" },
      { name: "Request a New Feature", href: "#" },
    ],
  },
];

const LinkSection = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center">
          {linkData.map((section, index) => (
            <div key={index} className="text-left mx-auto">
              {/* Heading with underline */}
              <h3 className="font-semibold text-lg mb-2 pb-1 border-b border-black inline-block">
                {section.title}
              </h3>
              {/* Links */}
              <ul className="space-y-2 mt-4">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkSection;
