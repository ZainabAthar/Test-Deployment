"use client";

import Link from "next/link";
import Image from "next/image";

const FooterSection = () => {
  return (
    <footer className="w-full bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-4">
          <Image
            src="/images/logo-2.png" // Replace with your logo path
            alt="Plectra.ai Logo"
            width={120}
            height={30}
            className="object-contain"
          />
        </div>

        {/* Middle Section - Links */}
        <div className="flex flex-wrap justify-center mt-4 md:mt-0 space-x-6">
          <Link href="/careers" className="text-sm text-gray-400 hover:text-white">
            Careers
          </Link>
          <Link href="/privacy-notice" className="text-sm text-gray-400 hover:text-white">
            Privacy Notice
          </Link>
          <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-white">
            Terms of Service
          </Link>
          <Link href="/status" className="text-sm text-gray-400 hover:text-white">
            Status
          </Link>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="https://linkedin.com" target="_blank">
            <Image
              src="/images/linkedin.png" // Replace with your LinkedIn icon path
              alt="LinkedIn"
              width={24}
              height={24}
              className="object-contain"
            />
          </Link>
          <Link href="https://facebook.com" target="_blank">
            <Image
              src="/images/facebook.png" // Replace with your Facebook icon path
              alt="Facebook"
              width={24}
              height={24}
              className="object-contain"
            />
          </Link>
          <Link href="https://x.com" target="_blank">
            <Image
              src="/images/twitter.png" // Replace with your X/Twitter icon path
              alt="Twitter"
              width={24}
              height={24}
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
