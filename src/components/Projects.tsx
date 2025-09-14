import React from "react";
import { SiGithub } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";
import { projects } from "@/data/projects";

function Projects() {
  return (
    <section className="w-full max-w-4xl mx-auto mt-12 flex flex-col items-start">
      <div className="flex flex-col w-full">
        <h2 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-300 drop-shadow-lg flex items-center gap-4 relative">
          <span>Projects</span>
          <span className="flex-1 h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-cyan-200 rounded-full ml-4" style={{ minWidth: 60 }}></span>
        </h2>
        
        {projects.map((project) => (
          <div key={project.id} className="mt-8 w-full bg-card/80 dark:bg-card/60 border border-border rounded-2xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Project Image Preview */}
              <div className="col-span-1 flex">
                <div className={`w-full max-w-[200px] bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} rounded-xl border border-border/50 flex items-center justify-center`}>
                  <div className="text-center p-2">
                    <div className="text-2xl mb-1">{project.icon}</div>
                    <div className="text-xs text-muted-foreground dark:text-white/70 font-medium">{project.title}</div>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="col-span-1 md:col-span-3 flex flex-col gap-2">
                <div className="flex flex-row items-start w-full">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-black dark:text-white">{project.title}</span>
                    <span className="text-base text-muted-foreground dark:text-white/80 mt-1">{project.technologies.join(", ")}</span>
                  </div>
                  <div className="flex-1"></div>
                  <span className="inline-block px-3 py-1 rounded bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 text-sm font-normal whitespace-nowrap self-start mt-1">
                    {project.startDate}{project.endDate ? ` - ${project.endDate}` : " - Present"}
                  </span>
                </div>
                
                <div className="text-base text-foreground dark:text-white/90 mt-2">
                  {project.description}
                </div>
                
                <div className="mt-2">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                    >
                      <SiGithub className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium ml-2"
                    >
                      <HiExternalLink className="h-4 w-4" />
                      <span>Live URL</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;