"use client";

import Image from "next/image";

const creators = [
  {
    title: "Digital Marketers",
    description:
      "Create an abundance of high quality blog posts and copy for your customers.",
    icon: "/images/icon-1.png",
  },
  {
    title: "Content Marketers",
    description:
      "Increase your content output substantially with our Flows feature and AI Importer tool.",
    icon: "/images/icon-2.png",
  },
  {
    title: "Founders",
    description: "Get your own AI Writer. Create content faster.",
    icon: "/images/icon-3.png",
  },
  {
    title: "Copywriters",
    description:
      "Generate more persuasive copy for your marketing material and products.",
    icon: "/images/icon-4.png",
  },
  {
    title: "SEO Specialists",
    description:
      "Our suite of tools will help you create fine-tuned content that ranks.",
    icon: "/images/icon-5.png",
  },
  {
    title: "Bloggers",
    description:
      "We've got you covered. Increase your blogging output with our web app, Chrome extension or WordPress plugin.",
    icon: "/images/icon-6.png",
  },
];

const CreatorsSection = () => {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-5xl mx-auto"> {/* Reduced max width */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-black">
          For all kinds of creators
        </h2>
        <p className="text-lg text-gray-600 text-center mt-4">
          Our AI Automation Tools help many types of creators in the digital space.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {creators.map((creator, index) => (
            <div
              key={index}
              className="flex flex-col items-start border border-gray-300 rounded-md p-6 bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={creator.icon}
                alt={`${creator.title} Icon`}
                width={40}
                height={40}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{creator.title}</h3>
              <p className="text-gray-600 text-sm">{creator.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorsSection;
