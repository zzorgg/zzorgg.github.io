import React from "react";

function Achievements() {
  return (
    <section className="w-full mx-auto mt-8 sm:mt-12 flex flex-col items-start">
      <div className="flex flex-col w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-300 drop-shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 relative mb-4">
          <span>Other Achievements & Activities</span>
          <span className="flex-1 h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-cyan-200 rounded-full w-16 sm:w-auto sm:ml-4" style={{ minWidth: 60 }}></span>
        </h2>
        
        <ul className="list-disc pl-4 sm:pl-6 space-y-3 text-sm sm:text-base text-muted-foreground dark:text-white/90">
          <li className="leading-relaxed">
            Secured 4th position in CODE MENIA 2024, a coding event held at Jagran Institute of Management, Kanpur, among participants from over 10 different colleges.
          </li>
          <li className="leading-relaxed">
            Worked for 2 months with a company on their Ed-Tech Startup website, developing and designing frontend components using HTML, CSS, JavaScript, Bootstrap, and Swiper.js.
          </li>
          <li className="leading-relaxed">
            Served as Student Coordinator and Technical Head, managing, video editing (After Effects, DaVinci Resolve, Clipchamp), at my college events.
          </li>
          <li className="leading-relaxed">
            I write technical blogs on <a href="https://hashnode.com/@f8" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">Hashnode</a>.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Achievements;