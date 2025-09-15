import React from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { HiEnvelope } from "react-icons/hi2";

function Footer() {
  return (
    <footer className="w-full mx-auto mt-12 sm:mt-16 mb-6 flex flex-col items-center gap-4 border-t pt-6">
      <div className="flex flex-row gap-3 sm:gap-4 items-center">
        {/* GitHub */}
        <a href="https://github.com/zzorgg" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition" title="GitHub">
          <SiGithub className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
        {/* LinkedIn */}
        <a href="https://linkedin.com/in/saif-ali-khaan" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition" title="LinkedIn">
          <SiLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
        {/* X (Twitter) */}
        <a href="https://x.com/saiiffff8" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition" title="X (Twitter)">
          <SiX className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
        {/* Email */}
        <a href="mailto:saif.khan16@outlook.com" className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition" title="Email">
          <HiEnvelope className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
      </div>
      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center px-4">
        © {new Date().getFullYear()} Saif Ali Khan. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;