"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";

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
          // Sun outline for light mode
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" />
          </svg>
        ) : (
          // Moon outline for dark mode
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
          </svg>
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
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border bg-card text-card-foreground hover:bg-muted transition" title="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border bg-card text-card-foreground hover:bg-muted transition" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2zM4 4a2 2 0 110 4 2 2 0 010-4z"/></svg>
              </a>
              {/* CV */}
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border bg-card text-card-foreground hover:bg-muted transition" title="CV">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11V17M12 17L9 14M12 17l3-3M5 7h14M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2" /></svg>
              </a>
              {/* Email */}
              <a href="mailto:you@example.com" className="p-2 rounded-full border border-border bg-card text-card-foreground hover:bg-muted transition" title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm2 4v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1" /></svg>
              </a>
              {/* LeetCode */}
              <a href="https://leetcode.com/yourprofile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border bg-card text-card-foreground hover:bg-muted transition" title="LeetCode">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a5 5 0 00-10 0v2a5 5 0 0010 0zm-5 8a5 5 0 01-5-5V7a5 5 0 0110 0v5a5 5 0 01-5 5z" /></svg>
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
              Hey! I&apos;m Rinkit Adhana, an undergraduate computer science student and full-stack developer who loves turning ideas into real, working products.
            </div>
            <div className="mt-2 text-base leading-relaxed text-muted-foreground dark:text-white/90">
              I&apos;m flexible working with any tech stack, though I prefer modern tools. I&apos;m currently working with Next.js, Django, Express, and TypeScript.
            </div>
            <div className="mt-2 text-base leading-relaxed text-muted-foreground dark:text-white/90">
              I love contributing to open-source projects and have actively participated in multiple hackathons, where I collaborate, build, and solve real-world problems.
            </div>
          </div>
          {/* Reach Out to Me subsection */}
          <div className="mt-8 w-full">
            <h3 className="text-xl font-bold mb-2">Reach Out to Me</h3>
            <div className="mb-3 text-base text-muted-foreground dark:text-white/90">
              Most of the time, you&apos;ll find me hanging out on my Discord channel while coding. I&apos;m also super active on X, so feel free to DM me there or reach out to me via email if you have any queries.
            </div>
            <div className="flex flex-row gap-3 items-center">
              <a
                href="mailto:saif.khan16@outlook.com"
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-200 shadow-sm border border-blue-700"
              >
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-sky-700 hover:bg-sky-800 text-white font-semibold rounded-md transition-colors duration-200 shadow-sm border border-sky-800"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-black hover:bg-neutral-800 text-white font-semibold rounded-md transition-colors duration-200 shadow-sm border border-neutral-800"
              >
                X (Twitter)
              </a>
              <a
                href="https://discord.com/invite/yourdiscord"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition-colors duration-200 shadow-sm border border-indigo-700"
              >
                Discord
              </a>
            </div>
          </div>
          {/* Hire Me subsection */}
          <div className="mt-8 w-full">
            <h3 className="text-xl font-bold mb-2">Hire Me</h3>
            <div className="mb-3 text-base text-muted-foreground dark:text-white/90">
              I’m currently available for internships, full-time opportunities, and freelance projects. If you’re looking for someone passionate, skilled, and ready to contribute, I’m here to help bring your ideas to life!
            </div>
            <div className="flex flex-row flex-wrap gap-3 items-center">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md transition-colors duration-200 shadow-sm border border-emerald-700"
              >
                View CV
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
            <div className="mt-8 w-full bg-card/80 dark:bg-card/60 border border-border rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6 p-6">
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex flex-row items-start w-full">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-black dark:text-white">Smart Contact Manager</span>
                    <span className="text-base text-muted-foreground dark:text-white/80 mt-1">Java, Spring Boot, Thymeleaf, MySQL</span>
                  </div>
                  <div className="flex-1"></div>
                  <span className="inline-block px-3 py-1 rounded bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 text-sm font-normal whitespace-nowrap self-start mt-1">Jan 2025 - Present</span>
                </div>
                <div className="text-base text-foreground dark:text-white/90 mt-2">
                  A secure, full-stack contact management web application. Features CRUD for contacts, authentication, and a responsive UI. Built with Spring Boot and Thymeleaf.
                </div>
                <div className="mt-2">
                  <a href="https://github.com/yourusername/smart-contact-manager" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" fill="currentColor"/>
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Project 2: mathJX */}
            <div className="mt-8 w-full bg-card/80 dark:bg-card/60 border border-border rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6 p-6">
              <div className="flex-1 flex flex-col gap-2">
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
                  <a href="https://github.com/yourusername/mathjx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" fill="currentColor"/>
                    </svg>
                    <span>GitHub</span>
                  </a>
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
                <a href="#" className="ml-2 text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Link 2</a>
              </li>
              <li>
                Contributed to open-source projects, like adding partial controller support to a python-based game, fixing and improving Math class in Symbolic PathFinder.
                <a href="#" className="ml-2 text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Link 2</a>
              </li>
              <li>
                Worked for 2 months with a company on their Ed-Tech Startup website, developing and designing frontend components using HTML, CSS, JavaScript, Bootstrap, and Swiper.js.
              </li>
              <li>
                Served as Student Coordinator and Technical Head, managing, video editing (After Effects, DaVinci Resolve, Clipchamp), at my college events.
              </li>
              <li>
                I write technical blogs on <a href="https://hashnode.com/@yourhashnode" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">Hashnode</a>.
              </li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full max-w-4xl mx-auto mt-16 mb-6 flex flex-col items-center gap-4 border-t pt-6">
          <div className="flex flex-row gap-4 items-center">
            {/* GitHub */}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" fill="currentColor"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2zM4 4a2 2 0 110 4 2 2 0 010-4z"/>
              </svg>
            </a>
            {/* X (Twitter) */}
            <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition" title="X (Twitter)">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.53 2H21.5l-7.19 8.21L22.5 22h-7.5l-5.2-6.01L2.5 22H.5l7.61-8.7L1.5 2h7.5l4.88 5.64L17.53 2zm-2.13 17h2.36L8.5 4h-2.3l8.2 15z"/>
              </svg>
            </a>
            {/* Discord */}
            <a href="https://discord.com/invite/yourdiscord" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 transition" title="Discord">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.369A19.791 19.791 0 0016.885 3.1a.074.074 0 00-.079.037c-.34.607-.719 1.396-.984 2.013a18.524 18.524 0 00-5.59 0 12.51 12.51 0 00-.995-2.013.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.369a.07.07 0 00-.032.027C.533 9.09-.32 13.61.099 18.081a.082.082 0 00.031.056c2.128 1.565 4.195 2.513 6.229 3.155a.077.077 0 00.084-.027c.48-.66.908-1.356 1.273-2.084a.076.076 0 00-.041-.104c-.676-.256-1.32-.568-1.943-.936a.077.077 0 01-.008-.127c.13-.098.26-.2.384-.304a.074.074 0 01.077-.01c4.084 1.872 8.504 1.872 12.546 0a.075.075 0 01.078.009c.124.104.254.206.384.304a.077.077 0 01-.006.127c-.623.368-1.267.68-1.944.936a.076.076 0 00-.04.105c.366.728.794 1.423 1.272 2.084a.076.076 0 00.084.028c2.034-.642 4.102-1.59 6.23-3.155a.077.077 0 00.03-.055c.5-5.177-.838-9.657-3.548-13.685a.061.061 0 00-.03-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z"/>
              </svg>
            </a>
            {/* Email */}
            <a href="mailto:saif.khan16@outlook.com" className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition" title="Email">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 7 8-7V20H4z"/>
              </svg>
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
