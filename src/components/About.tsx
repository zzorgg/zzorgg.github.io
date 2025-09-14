import React from "react";

function About() {
  return (
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
  );
}

export default About;