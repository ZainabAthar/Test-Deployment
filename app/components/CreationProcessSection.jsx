"use client";

import Image from "next/image";

const CreationProcessSection = () => {
  return (
    <section className="w-screen py-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section: Text */}
        <div className="md:w-1/2 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Automate your Content Creation Process
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            Need blog posts, social media updates, or bulk content imports?
            Flows make it easy and hassle-free. Let AI handle tasks in the
            background, saving you time while boosting your content.
          </p>
          <ul className="list-disc pl-6 text-md space-y-2">
            <li>Automate content creation with ease.</li>
            <li>Schedule daily or weekly updates.</li>
            <li>Upload up to 500 blog topics at once.</li>
            <li>Let AI run tasks in the background.</li>
            <li>Streamline your content planning with minimal effort.</li>
          </ul>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/images/creation-process.png"
            alt="Content Creation Cycle"
            width={500}
            height={350}
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CreationProcessSection;
