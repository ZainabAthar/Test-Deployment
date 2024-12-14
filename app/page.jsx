"use client";

import Image from "next/image";
import { useState } from "react";
import FeatureSection from "./components/FeatureSection";
import CreatorsSection from "./components/CreatorsSection";
import CreationProcessSection from "./components/CreationProcessSection";
import PlatformSection from "./components/PlatformSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";
import LinkSection from "./components/LinkSection";

export default function Home() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      alert("Thank you for signing up!");
    }
  };

  const logos = [
    "/images/box-logo-1.png",
    null,
    "/images/box-logo-2.png",
    null,
    "/images/box-logo-3.png",
    "/images/box-logo-4.png",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-8 py-12 sm:py-16">
        {/* Hero Section */}
        <div className="w-full max-w-6xl mx-auto">
          {/* Small Screen Layout */}
          <div className="block md:hidden text-center">
            {/* Text Above Image */}
            <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
              Automate tasks. <br />
              <span className="text-blue-600">Use Plectra.</span>
            </h1>
            {/* Image Below Text */}
            <div className="flex justify-center my-6">
              <Image
                src="/images/hero-image.png"
                alt="Hero Section Image"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            {/* Email Signup */}
            <form
              onSubmit={handleSubmit}
              className="w-full sm:w-3/4 mx-auto"
            >
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="What's your email?"
                  className="flex-grow pl-4 pr-24 py-3 text-sm sm:text-base text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-4 py-2 bg-black text-white font-medium text-sm sm:text-base rounded-md hover:bg-gray-800"
                >
                  Sign Up
                </button>
              </div>
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </form>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex flex-row items-center justify-between">
            {/* Left Section - Text */}
            <div className="md:w-1/2 text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
                Automate tasks. <br />
                <span className="text-blue-600">Use Plectra.</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-600">
                Your ultimate solution for creating SEO-friendly articles with
                ease. Plectra AI automates content creation and seamlessly
                integrates with WordPress and multiple platforms, streamlining
                your workflow and helping you rank higher effortlessly.
              </p>
              <form
                onSubmit={handleSubmit}
                className="mt-6 w-full sm:w-3/4"
              >
                <div className="relative flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="What's your email?"
                    className="flex-grow pl-4 pr-24 py-3 text-sm sm:text-base text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-4 py-2 bg-black text-white font-medium text-sm sm:text-base rounded-md hover:bg-gray-800"
                  >
                    Sign Up
                  </button>
                </div>
                {error && (
                  <p className="mt-2 text-sm text-red-600">{error}</p>
                )}
              </form>
            </div>

            {/* Right Section - Image */}
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/images/hero-image.png"
                alt="Hero Section Image"
                width={520}
                height={420}
                priority
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Logos Section with Scrollable Boxes for Mobile */}
        <div className="mt-16 sm:mt-24 flex flex-col items-center justify-center px-4">
          <h2 className="text-lg sm:text-xl font-semibold text-black mb-6 text-center">
            Transform your content, boost your rankings—automatically with
            Plectra AI.
          </h2>
          <div className="grid md:grid-cols-6 grid-cols-2 gap-4 items-center justify-center overflow-x-scroll md:overflow-visible">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-24 sm:w-28 lg:w-36 h-12 sm:h-14 border border-gray-300 rounded-md"
              >
                {logo ? (
                  <Image
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    width={100}
                    height={30}
                    className="object-contain"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Feature Section */}
        <FeatureSection />

        {/* Creators Section */}
        <CreatorsSection />

        {/* Creation Process Section */}
        <CreationProcessSection />

        {/* Platform Section */}
        <PlatformSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* LINK Section */}
        <LinkSection />
      </main>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
