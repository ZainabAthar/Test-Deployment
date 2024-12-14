"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const features = [
  {
    title: "AI Content Writer",
    description: "Use SEO Tools to Optimize your Content",
    imgSrc: "/images/scroll_1.png",
    link: "/ai-content-writer",
  },
  {
    title: "WordPress Integration",
    description: "Use SEO Tools to Optimize your Content",
    imgSrc: "/images/scroll_2.png",
    link: "/wordpress-integration",
  },
  {
    title: "Keyword Analyzer",
    description: "Use SEO Tools to Optimize your Content",
    imgSrc: "/images/scroll_3.png",
    link: "/keyword-analyzer",
  },
  {
    title: "Social Media Integration",
    description: "Integrate your content with various social media platforms.",
    imgSrc: "/images/scroll_4.png",
    link: "/social-media-integration",
  },
  {
    title: "Data Analytics",
    description: "Analyze your content's performance with built-in analytics.",
    imgSrc: "/images/scroll_5.png",
    link: "/data-analytics",
  },
  {
    title: "Automation Features",
    description: "Automate repetitive tasks and save time.",
    imgSrc: "/images/scroll_6.png",
    link: "/automation-features",
  },
];

const FeatureSection = () => {
  const scrollRef = useRef(null);

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (scrollContainer) {
      const interval = setInterval(() => {
        scrollContainer.scrollBy({
          left: scrollContainer.offsetWidth,
          behavior: "smooth",
        });

        // Loop back to start when reaching the end
        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        }
      }, 3000); // Change slides every 3 seconds

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section className="w-full py-16 px-4">
      <h2 className="text-4xl font-bold text-black mb-12 text-center leading-relaxed">
        Streamline your content workflow with a powerful suite of{" "}
        <span className="text-blue-600">AI tools.</span>
      </h2>
      <div
        ref={scrollRef}
        className="flex gap-6 px-4 max-w-7xl mx-auto overflow-hidden"
      >
        {features.map((feature, index) => (
          <Link key={index} href={feature.link} passHref>
            <div
              className="min-w-[33.33%] flex-shrink-0 bg-white rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <Image
                src={feature.imgSrc}
                alt={feature.title}
                width={384}
                height={240}
                className="w-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg md:text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-md text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          href="/learn-more"
          className="px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-md hover:bg-blue-700"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default FeatureSection;
