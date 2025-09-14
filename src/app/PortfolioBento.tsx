"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";
import { 
  SiLeetcode, 
  SiGithub, 
  SiLinkedin, 
  SiX, 
  SiDiscord 
} from "react-icons/si";
import { 
  HiSun, 
  HiMoon, 
  HiEnvelope 
} from "react-icons/hi2";

function PortfolioBento() {
  // State for Psyduck image hover cloud

  // Handler for mouse move over image
  const [dark, setDark] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const [isWikiOpen, setIsWikiOpen] = useState(false);
  const wikiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      const mins = minutes < 10 ? `0${minutes}` : minutes;
      setLocalTime(`${hours}:${mins} ${ampm}`);
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  // Close wiki preview on outside click
  useEffect(() => {
    if (!isWikiOpen) return;
    function handleClick(e: MouseEvent) {
      if (wikiRef.current && !wikiRef.current.contains(e.target as Node)) {
        setIsWikiOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isWikiOpen]);

  return (
    <div className={cn(
      "min-h-screen w-full flex flex-col items-center justify-start transition-colors duration-300 relative",
      dark ? "dark bg-background text-foreground" : "bg-background text-foreground"
    )}>
      {/* Local time top left - sticky */}
      <div className="fixed top-0 left-0 z-50 m-6 text-xs sm:text-sm font-mono bg-card/80 px-3 py-1 rounded-md border border-border shadow">
        {localTime}
      </div>
      {/* Dark/Light toggle top right - sticky */}
      <button
        className="fixed top-0 right-0 z-50 m-6 px-3 py-2 rounded-lg border border-border bg-card text-card-foreground shadow hover:bg-muted transition flex items-center justify-center"
        onClick={() => setDark((d) => !d)}
        aria-label="Toggle dark mode"
      >
        {dark ? (
          // Sun icon for light mode
          <HiSun className="h-5 w-5" />
        ) : (
          // Moon icon for dark mode
          <HiMoon className="h-5 w-5" />
        )}
      </button>
      {/* Main content stack, shifted down */}
      <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto p-6 mt-24">
  {/* Psyduck image, alias, math line, and available button */}
        <div className={cn(
          "relative rounded-2xl p-6 flex flex-col items-center justify-center min-h-[380px] w-full mx-auto border",
          dark
            ? "text-card-foreground border-border"
            : "text-card-foreground border-border"
        )}>
          {/* Speech bubble animation above image */}
          <div className="absolute left-1/2 -top-8 -translate-x-1/2 z-20 animate-psyduck-bounce">
            <div
              className="relative group animate-psyduck-bounce"
              ref={wikiRef}
              onMouseEnter={() => setIsWikiOpen(true)}
            >
              <a
                href="https://en.wikipedia.org/wiki/Psyduck"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 dark:bg-black/80 text-sky-700 dark:text-sky-200 px-5 py-2 rounded-2xl shadow-lg border border-border text-sm font-semibold flex items-center cursor-pointer relative select-none"
                tabIndex={0}
                title="Go to Psyduck Wikipedia page"
              >
                <span>Hello 👋, I&apos;m Psyduck 🦆, saif&apos;s friend 😀</span>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/90 dark:bg-black/80 border-l border-b border-border rotate-45 z-0"></span>
              </a>
              {/* Wikipedia preview appears on hover, stays until click outside */}
              {isWikiOpen && (
                <div
                  className="absolute left-1/2 top-14 -translate-x-1/2 z-30 w-[520px] h-[480px] border border-border rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-black transition-all duration-300"
                  tabIndex={-1}
                  onMouseEnter={() => setIsWikiOpen(true)}
                >
                  <iframe
                    src="https://en.wikipedia.org/wiki/Psyduck"
                    title="Psyduck Wikipedia Preview"
                    className="w-full h-full border-0"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                  />
                </div>
              )}
            </div>
          </div>
          <img
            src="/psyduck.png"
            alt="Psyduck"
            className="w-full h-100 object-cover object-center rounded-2xl mb-4 shadow-2xl relative"
            style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
          />


<style jsx global>{`
@keyframes psyduck-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
.animate-psyduck-bounce {
  animation: psyduck-bounce 1.5s ease-in-out infinite;
}
`}</style>
          <div className="flex flex-row w-full items-center justify-between mt-2">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-2xl font-bold tracking-tight">f8</span>
                <button
                  className={cn(
                    "relative flex items-center px-3 py-1 rounded-md border text-xs font-semibold transition focus:outline-none active:scale-95",
                    "bg-white/70 dark:bg-black/30 cursor-pointer select-none shadow-md hover:shadow-lg backdrop-blur-sm",
                    dark ? "text-green-400 border-green-400" : "text-green-600 border-green-400"
                  )}
                  type="button"
                  tabIndex={0}
                  aria-label="Available"
                >
                  <span className="relative flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" style={{ boxShadow: '0 0 0 2px #22c55e44' }}></span>
                    Available
                  </span>
                </button>
              </div>
              <div className="text-base text-muted-foreground font-mono mb-2 drop-shadow-sm">d/dx f(8) = saif</div>
            </div>
            <div className="flex gap-2 items-center">
              {/* GitHub */}
              <a href="https://github.com/zzorgg" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border bg-card text-card-foreground hover:bg-muted transition" title="GitHub">
                <SiGithub className="h-5 w-5" />
              </a>
              {/* LeetCode */}
              <a href="https://leetcode.com/u/f-8" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border bg-card text-card-foreground hover:bg-muted transition" title="LeetCode">
                <SiLeetcode className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        {/* Render the rest of the bento grid as text-based content */}
        {/* About Me section - visually prominent and styled */}
        <section className="w-full max-w-4xl mx-auto mt-12 flex flex-col items-start">
          <div className="flex flex-col w-full">
            <h2 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-300 drop-shadow-lg flex items-center gap-4 relative">
              <span>About Me</span>
              <span className="flex-1 h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-cyan-200 rounded-full ml-4" style={{ minWidth: 60 }}></span>
            </h2>
            <div className="mt-2 text-base leading-relaxed text-muted-foreground dark:text-white/90">
               Hey! I&apos;m <u className="text-black">Saif Ali Khan</u>, I&apos;m passionate about building and solving real-world problems through code.
            </div>
            <div className="mt-2 text-base leading-relaxed text-muted-foreground dark:text-white/90">
               I&apos;m currently focusing on backend development, learning and working with Java, Spring Boot, Go, and Ruby on Rails.
            </div>
            <div className="mt-2 text-base leading-relaxed text-muted-foreground dark:text-white/90">
              I love contributing to open-source projects. I recently completed Google Summer of Code (GSoC) and I&apos;m excited to contribute to Hacktoberfest.
            </div>
            <div className="mt-2 text-base leading-relaxed text-muted-foreground dark:text-white/90">
              This portfolio is part of my ongoing learning journey, and I&apos;m always eager to collaborate, explore new technologies, and grow as a backend developer.
            </div>
          </div>
          {/* Reach Out to Me subsection */}
          <div className="mt-8 w-full">
            <h3 className="text-xl font-bold mb-2">Reach Out to Me</h3>
            <div className="mb-3 text-base text-muted-foreground dark:text-white/90">
              Feel free to connect with me! I&apos;m always open to discussions.
            </div>
            <div className="flex flex-row gap-3 items-center">
              <a
                href="mailto:saif.khan16@outlook.com"
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-200 shadow-sm border border-blue-700"
              >
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/saif-ali-khaan"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-sky-700 hover:bg-sky-800 text-white font-semibold rounded-md transition-colors duration-200 shadow-sm border border-sky-800"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/saiiffff8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-black hover:bg-neutral-800 text-white font-semibold rounded-md transition-colors duration-200 shadow-sm border border-neutral-800"
              >
                X (Twitter)
              </a>
            </div>
          </div>
          {/* Hire Me subsection */}
          <div className="mt-8 w-full">
            <h3 className="text-xl font-bold mb-2">Hire Me</h3>
            <div className="mb-3 text-base text-muted-foreground dark:text-white/90">
              I&apos;m currently looking for internships and full-time opportunities.
            </div>
            <div className="flex flex-row flex-wrap gap-3 items-center">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md transition-colors duration-200 shadow-sm border border-emerald-700"
              >
                View Resume
              </a>
            </div>
          </div>
        </section>
        {/* Experience section - styled like About Me */}
        <section className="w-full max-w-4xl mx-auto mt-12 flex flex-col items-start">
          <div className="flex flex-col w-full">
            <h2 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-300 drop-shadow-lg flex items-center gap-4 relative">
              <span>Experience</span>
              <span className="flex-1 h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-cyan-200 rounded-full ml-4" style={{ minWidth: 60 }}></span>
            </h2>
            {/* Experience Card */}
            <div className="mt-8 w-full bg-card/80 dark:bg-card/60 border border-border rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6 p-6">
              {/* Logos */}
              <div className="flex flex-col items-center gap-2 min-w-[100px]">
                <img src="/gsoc.png" alt="GSoC Logo" className="w-16 h-16 object-contain rounded-lg bg-white dark:bg-neutral-900 p-1 border" />
                <img src="/jpf.png" alt="JPF Team Logo" className="w-16 h-16 object-contain rounded-lg bg-white dark:bg-neutral-900 p-1 border" />
              </div>
              {/* Experience Details */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex flex-row items-start w-full">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-black dark:text-white">Google Summer of Code</span>
                    <span className="text-base text-muted-foreground dark:text-white/80 mt-1">Contributor - The JPF Team</span>
                  </div>
                  <div className="flex-1"></div>
                <span className="inline-block px-3 py-1 rounded bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 text-sm font-normal whitespace-nowrap self-start mt-1">2 Jun 2025 - 1 Sept 2025</span>
                </div>
                <div className="text-base text-foreground dark:text-white/90 mt-2">
                  Added support for raising runtime exceptions, like <b>NullPointerException</b> and <b>StringIndexOutOfBoundsException</b> for string methods in Symbolic PathFinder (SPF), improving SV-COMP benchmark results and refining exception handling in the tool.
                </div>
                <div className="flex flex-row flex-wrap gap-2 mt-5">
                  {/* Example tech badges */}
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-semibold">Java</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-semibold">Gradle</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-md text-xs font-semibold">JVM</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-xs font-semibold">SPF</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-xs font-semibold">JPF</span>
                  <span className="px-3 py-1 bg-fuchsia-100 text-fuchsia-700 rounded-md text-xs font-semibold">Bytecode</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-xs font-semibold">Model Checking</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-semibold">Symbolic Execution</span>
                </div>
                <div className="flex flex-row gap-3 mt-2">
                  <a href="https://summerofcode.withgoogle.com/programs/2025/projects/wxOGtvXL" target="_blank" rel="noopener noreferrer" className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-semibold transition-colors">View on GSoC</a>
                </div>
              </div>
            </div>
          </div>
        </section>
          {/* Skills section - styled like About Me, after Experience */}
        <section className="w-full max-w-4xl mx-auto mt-12 flex flex-col items-start">
          <div className="flex flex-col w-full">
            <h2 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-300 drop-shadow-lg flex items-center gap-4 relative">
              <span>Skills</span>
              <span className="flex-1 h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-cyan-200 rounded-full ml-4" style={{ minWidth: 60 }}></span>
            </h2>
            <div className="mt-8 w-full flex flex-col gap-4">
              {/* Languages Row */}
              <div className="text-xl font-bold">
                <span className="font-bold mr-3">Languages:</span>
                <span className="text-base font-normal text-gray-600 dark:text-gray-400">Java, C/C++, JavaScript, SQL, Golang</span>
              </div>
              {/* Technologies/Frameworks/Libraries Row */}
              <div className="text-xl font-bold">
                <span className="font-bold mr-3">Technologies/Frameworks:</span>
                <span className="text-base font-normal text-gray-600 dark:text-gray-400">Spring Boot, Hibernate, JUnit, Tailwind CSS, MySQL, REST API</span>
              </div>
              {/* Others Row */}
              <div className="text-xl font-bold">
                <span className="font-bold mr-3">Others:</span>
                <span className="text-base font-normal text-gray-600 dark:text-gray-400">Linux, Git, GitHub, Thymeleaf, Flowbite, HTML/CSS, Maven, Markdown</span>
              </div>
            </div>
          </div>
        </section>
        {/* Projects section - styled like Experience, after Skills */}
        <section className="w-full max-w-4xl mx-auto mt-12 flex flex-col items-start">
          <div className="flex flex-col w-full">
            <h2 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-300 drop-shadow-lg flex items-center gap-4 relative">
              <span>Projects</span>
              <span className="flex-1 h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-cyan-200 rounded-full ml-4" style={{ minWidth: 60 }}></span>
            </h2>
            {/* Project 1: Smart Contact Manager */}
            <div className="mt-8 w-full bg-card/80 dark:bg-card/60 border border-border rounded-2xl shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Project Image Preview */}
                <div className="col-span-1 flex">
                  <div className="w-full max-w-[200px] bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl border border-border/50 flex items-center justify-center">
                    <div className="text-center p-2">
                      <div className="text-2xl mb-1">📱</div>
                      <div className="text-xs text-muted-foreground dark:text-white/70 font-medium">Contact Manager</div>
                    </div>
                  </div>
                </div>
                {/* Project Content */}
                <div className="col-span-1 md:col-span-3 flex flex-col gap-2">
                  <div className="flex flex-row items-start w-full">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-black dark:text-white">Smart Contact Manager</span>
                      <span className="text-base text-muted-foreground dark:text-white/80 mt-1">Java, Spring Boot, Thymeleaf, MySQL</span>
                    </div>
                    <div className="flex-1"></div>
                    <span className="inline-block px-3 py-1 rounded bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 text-sm font-normal whitespace-nowrap self-start mt-1">Jan 2025 - Present</span>
                  </div>
                  <div className="text-base text-foreground dark:text-white/90 mt-2">
                    A secure, full-stack contact management web application. Features CRUD for contacts, authentication, and a responsive UI. Built with Spring Boot.
                  </div>
                  <div className="mt-2">
                    <a href="https://github.com/zzorgg/SmartContactManager" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium">
                      <SiGithub className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 2: mathJX */}
            <div className="mt-8 w-full bg-card/80 dark:bg-card/60 border border-border rounded-2xl shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Project Image Preview */}
                <div className="col-span-1 flex">
                  <div className="w-full max-w-[200px] bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-xl border border-border/50 flex items-center justify-center">
                    <div className="text-center p-2">
                      <div className="text-2xl mb-1">🧮</div>
                      <div className="text-xs text-muted-foreground dark:text-white/70 font-medium">Math Library</div>
                    </div>
                  </div>
                </div>
                {/* Project Content */}
                <div className="col-span-1 md:col-span-3 flex flex-col gap-2">
                  <div className="flex flex-row items-start w-full">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-black dark:text-white">mathJX</span>
                      <span className="text-base text-muted-foreground dark:text-white/80 mt-1">Java, Mathematics, Algorithms</span>
                    </div>
                    <div className="flex-1"></div>
                    <span className="inline-block px-3 py-1 rounded bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 text-sm font-normal whitespace-nowrap self-start mt-1">March 2025 - Present</span>
                  </div>
                  <div className="text-base text-foreground dark:text-white/90 mt-2">
                    Java library for core math algorithms: logarithms, prime sieves, fast exponentiation, and more. Designed for performance and clarity.
                  </div>
                  <div className="mt-2">
                    <a href="https://github.com/zzorgg/mathjx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium">
                      <SiGithub className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Achievements & Activities section */}
        <section className="w-full max-w-4xl mx-auto mt-12 flex flex-col items-start">
          <div className="flex flex-col w-full">
            <h2 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-300 drop-shadow-lg flex items-center gap-4 relative mb-4">
              <span>Other Achievements & Activities</span>
              <span className="flex-1 h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-cyan-200 rounded-full ml-4" style={{ minWidth: 60 }}></span>
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-base text-muted-foreground dark:text-white/90">
              <li>
                Secured 4th position in CODE MENIA 2024, a coding event held at Jagran Institute of Management, Kanpur, among participants from over 10 different colleges.
              </li>
              <li>
                Worked for 2 months with a company on their Ed-Tech Startup website, developing and designing frontend components using HTML, CSS, JavaScript, Bootstrap, and Swiper.js.
              </li>
              <li>
                Served as Student Coordinator and Technical Head, managing, video editing (After Effects, DaVinci Resolve, Clipchamp), at my college events.
              </li>
              <li>
                I write technical blogs on <a href="https://hashnode.com/@f8" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">Hashnode</a>.
              </li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full max-w-4xl mx-auto mt-16 mb-6 flex flex-col items-center gap-4 border-t pt-6">
          <div className="flex flex-row gap-4 items-center">
            {/* GitHub */}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition" title="GitHub">
              <SiGithub className="h-6 w-6" />
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition" title="LinkedIn">
              <SiLinkedin className="h-6 w-6" />
            </a>
            {/* X (Twitter) */}
            <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition" title="X (Twitter)">
              <SiX className="h-6 w-6" />
            </a>
            {/* Email */}
            <a href="mailto:saif.khan16@outlook.com" className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition" title="Email">
              <HiEnvelope className="h-6 w-6" />
            </a>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} Saif Ali Khan. All rights reserved.
          </div>
        </footer>
      </div>
      </div>
    );
}

export default PortfolioBento;
