"use client";

import Image from "next/image";

const platforms = [
  {
    title: "Custom PIMs",
    description: "Sync product details from your PIM system for a seamless content workflow.",
    icon: "/images/platform-1.png", // Replace with the icon you have for PIMs
  },
  {
    title: "Marketplaces",
    description: "Monitor analytics and optimize your products across Amazon, Walmart, or other marketplaces.",
    icons: ["/images/platform-2a.png", "/images/platform-2b.png", "/images/platform-2c.png"], // Array for marketplace icons
  },
  {
    title: "Ecommerce Platforms",
    description: "Write and rewrite product content on Shopify or other platforms without having to copy-paste tirelessly.",
    icon: "/images/platform-3.png",
  },
  {
    title: "CMS",
    description: "Directly publish content onto WordPress, Webflow, or any other CMS you’re working on.",
    icons: ["/images/platform-4a.png", "/images/platform-4b.png"],
  },
];

const PlatformSection = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Integrate with your preferred platforms
        </h2>
        <p className="text-lg text-gray-600 text-center mb-10">
          Don’t waste time copying and pasting your briefs and documents. Integrate directly with the systems you’re already storing your content in.
        </p>

        {/* Platform Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-md p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Platform Title Above Icon */}
              <h3 className="text-xl font-semibold text-black mb-3">{platform.title}</h3>

              {/* Platform Icon */}
              <div className="flex items-center mb-3 space-x-2">
                {/* Single Icon */}
                {platform.icon && (
                  <Image
                    src={platform.icon}
                    alt={platform.title}
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                )}
                {/* Multiple Icons */}
                {platform.icons && (
                  <div className="flex space-x-2">
                    {platform.icons.map((icon, idx) => (
                      <Image
                        key={idx}
                        src={icon}
                        alt={`${platform.title} icon ${idx + 1}`}
                        width={25}
                        height={25}
                        className="object-contain"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Platform Description */}
              <p className="text-sm text-gray-600">{platform.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
