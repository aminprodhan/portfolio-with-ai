import React, { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { projects, ProjectCategory } from "@/data/portfolio-data";
import { FaGithub, FaExternalLinkAlt, FaBook, FaAppStoreIos } from "react-icons/fa";

const ProjectsSection = forwardRef<HTMLElement>((props, ref) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section 
      id="projects" 
      ref={ref} 
      className="py-16 md:py-24 px-4 bg-light-DEFAULT dark:bg-dark-DEFAULT"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-dark-lighter dark:text-light-darker mt-6 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience as a software engineer.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2">
            <Button
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('all')}
              className={cn(
                activeFilter === 'all' ? 'bg-primary text-white' : 'bg-light-darker dark:bg-dark-lighter hover:bg-primary hover:text-white text-dark-DEFAULT dark:text-light-DEFAULT',
                "rounded-full text-sm font-medium"
              )}
            >
              All Projects
            </Button>
            <Button
              variant={activeFilter === 'web' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('web')}
              className={cn(
                activeFilter === 'web' ? 'bg-primary text-white' : 'bg-light-darker dark:bg-dark-lighter hover:bg-primary hover:text-white text-dark-DEFAULT dark:text-light-DEFAULT',
                "rounded-full text-sm font-medium"
              )}
            >
              Web Development
            </Button>
            <Button
              variant={activeFilter === 'backend' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('backend')}
              className={cn(
                activeFilter === 'backend' ? 'bg-primary text-white' : 'bg-light-darker dark:bg-dark-lighter hover:bg-primary hover:text-white text-dark-DEFAULT dark:text-light-DEFAULT',
                "rounded-full text-sm font-medium"
              )}
            >
              Backend
            </Button>
            <Button
              variant={activeFilter === 'devops' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('devops')}
              className={cn(
                activeFilter === 'devops' ? 'bg-primary text-white' : 'bg-light-darker dark:bg-dark-lighter hover:bg-primary hover:text-white text-dark-DEFAULT dark:text-light-DEFAULT',
                "rounded-full text-sm font-medium"
              )}
            >
              DevOps
            </Button>
            <Button
              variant={activeFilter === 'mobile' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('mobile')}
              className={cn(
                activeFilter === 'mobile' ? 'bg-primary text-white' : 'bg-light-darker dark:bg-dark-lighter hover:bg-primary hover:text-white text-dark-DEFAULT dark:text-light-DEFAULT',
                "rounded-full text-sm font-medium"
              )}
            >
              Mobile
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-dark-lighter rounded-lg overflow-hidden shadow-md transition-all duration-300 h-full flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span 
                    className={cn(
                      "text-white text-xs px-2 py-1 rounded-full",
                      project.categoryColor
                    )}
                  >
                    {project.categoryLabel}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="font-display font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-dark-lighter dark:text-light-darker mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="inline-block bg-gray-100 dark:bg-dark-DEFAULT text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <div className="flex justify-between items-center">
                  <a href={project.demoUrl} className="text-primary font-medium hover:underline">
                    View Project
                  </a>
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        className="text-dark-lighter dark:text-light-darker hover:text-primary transition-colors duration-300" 
                        aria-label="GitHub Repository"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        className="text-dark-lighter dark:text-light-darker hover:text-primary transition-colors duration-300" 
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {project.docsUrl && (
                      <a 
                        href={project.docsUrl} 
                        className="text-dark-lighter dark:text-light-darker hover:text-primary transition-colors duration-300" 
                        aria-label="Documentation"
                      >
                        <FaBook />
                      </a>
                    )}
                    {project.appStoreUrl && (
                      <a 
                        href={project.appStoreUrl} 
                        className="text-dark-lighter dark:text-light-darker hover:text-primary transition-colors duration-300" 
                        aria-label="App Store"
                      >
                        <FaAppStoreIos />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="default"
            className="bg-dark-DEFAULT dark:bg-light-darker hover:bg-primary text-white dark:text-dark-DEFAULT dark:hover:text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-md hover:shadow-lg"
          >
            <span>View All Projects</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
