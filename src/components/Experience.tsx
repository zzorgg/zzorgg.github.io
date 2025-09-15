import React from "react";

function Experience() {
  return (
    <section className="w-full mx-auto mt-8 sm:mt-12 flex flex-col items-start">
      <div className="flex flex-col w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-300 drop-shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 relative">
          <span>Experience</span>
          <span className="flex-1 h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-cyan-200 rounded-full w-16 sm:w-auto sm:ml-4" style={{ minWidth: 60 }}></span>
        </h2>
        
        {/* Experience Card */}
        <div className="mt-6 sm:mt-8 w-full bg-card/80 dark:bg-card/60 border border-border rounded-2xl shadow-lg flex flex-col lg:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-6">
          {/* Logos */}
          <div className="flex flex-row lg:flex-col items-center gap-2 min-w-[100px]">
            <img src="/gsoc.png" alt="GSoC Logo" className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg bg-white dark:bg-neutral-900 p-1 border" />
            <img src="/jpf.png" alt="JPF Team Logo" className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg bg-white dark:bg-neutral-900 p-1 border" />
          </div>
          
          {/* Experience Details */}
          <div className="flex-1 flex flex-col gap-2 w-full">
            <div className="flex flex-col sm:flex-row sm:items-start w-full gap-2 sm:gap-0">
              <div className="flex flex-col flex-1">
                <span className="text-xl sm:text-2xl font-bold text-black dark:text-white">Google Summer of Code</span>
                <span className="text-sm sm:text-base text-muted-foreground dark:text-white/80 mt-1">Contributor - The JPF Team</span>
              </div>
              <span className="inline-block px-3 py-1 rounded bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-normal self-start">2 Jun 2025 - 1 Sept 2025</span>
            </div>
            
            <div className="text-sm sm:text-base text-foreground dark:text-white/90 mt-2 leading-relaxed">
              Added support for raising runtime exceptions, like <b>NullPointerException</b> and <b>StringIndexOutOfBoundsException</b> for string methods in Symbolic PathFinder (SPF), improving SV-COMP benchmark results and refining exception handling in the tool.
            </div>
            
            <div className="flex flex-row flex-wrap gap-2 mt-4 sm:mt-5">
              {/* Tech badges */}
              <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-semibold">Java</span>
              <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-semibold">Gradle</span>
              <span className="px-2 sm:px-3 py-1 bg-yellow-100 text-yellow-700 rounded-md text-xs font-semibold">JVM</span>
              <span className="px-2 sm:px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-xs font-semibold">SPF</span>
              <span className="px-2 sm:px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-xs font-semibold">JPF</span>
              <span className="px-2 sm:px-3 py-1 bg-fuchsia-100 text-fuchsia-700 rounded-md text-xs font-semibold">Bytecode</span>
              <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 rounded-md text-xs font-semibold">Model Checking</span>
              <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-semibold">Symbolic Execution</span>
            </div>
            
            <div className="flex flex-row gap-3 mt-3 sm:mt-2">
              <a href="https://summerofcode.withgoogle.com/programs/2025/projects/wxOGtvXL" target="_blank" rel="noopener noreferrer" className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs sm:text-sm font-semibold transition-colors">View on GSoC</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;