import React from "react";

function Experience() {
  return (
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
              {/* Tech badges */}
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
  );
}

export default Experience;