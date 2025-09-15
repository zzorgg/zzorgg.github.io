import React from "react";

function Skills() {
  return (
    <section className="w-full mx-auto mt-8 sm:mt-12 flex flex-col items-start">
      <div className="flex flex-col w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-300 drop-shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 relative">
          <span>Skills</span>
          <span className="flex-1 h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-cyan-200 rounded-full w-16 sm:w-auto sm:ml-4" style={{ minWidth: 60 }}></span>
        </h2>
        
        <div className="mt-6 sm:mt-8 w-full flex flex-col gap-4 sm:gap-6">
          {/* Languages Row */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
            <span className="text-lg sm:text-xl font-bold whitespace-nowrap">Languages:</span>
            <span className="text-sm sm:text-base font-normal text-gray-600 dark:text-gray-400 leading-relaxed">Java, C/C++, JavaScript, SQL, Golang</span>
          </div>
          
          {/* Technologies/Frameworks/Libraries Row */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
            <span className="text-lg sm:text-xl font-bold whitespace-nowrap">Technologies/Frameworks:</span>
            <span className="text-sm sm:text-base font-normal text-gray-600 dark:text-gray-400 leading-relaxed">Spring Boot, Hibernate, JUnit, Tailwind CSS, MySQL, REST API</span>
          </div>
          
          {/* Others Row */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
            <span className="text-lg sm:text-xl font-bold whitespace-nowrap">Others:</span>
            <span className="text-sm sm:text-base font-normal text-gray-600 dark:text-gray-400 leading-relaxed">Linux, Git, GitHub, Thymeleaf, Flowbite, HTML/CSS, Maven, Markdown</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;