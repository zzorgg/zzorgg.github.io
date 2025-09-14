import React from "react";

function Skills() {
  return (
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
  );
}

export default Skills;