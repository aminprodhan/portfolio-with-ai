import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { experiences } from "@/data/portfolio-data";

const ExperienceSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section 
      id="experience" 
      ref={ref} 
      className="py-16 md:py-24 px-4 bg-light-DEFAULT dark:bg-dark-DEFAULT"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-dark-lighter dark:text-light-darker mt-6 max-w-2xl mx-auto">
            My professional journey as a software engineer spanning 6 years across different companies and roles.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:-translate-x-1/2"></div>
          
          {/* Timeline Items */}
          <div className="timeline-container">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className={cn(
                  "relative flex flex-col md:flex-row items-center md:justify-between mb-16 last:mb-0",
                  index % 2 !== 0 && "md:flex-row-reverse",
                )}
              >
                <div className={cn(
                  "flex items-center order-1 md:w-5/12",
                  index % 2 === 0 ? "md:justify-end md:pr-8" : "md:justify-start md:pl-8",
                )}>
                  <div className={cn(
                    "bg-white dark:bg-dark-lighter p-6 rounded-lg shadow-md border border-gray-100 dark:border-dark-lighter",
                    index % 2 === 0 ? "md:text-right" : "md:text-left",
                  )}>
                    <h3 className="font-display font-semibold text-xl text-dark-DEFAULT dark:text-light-DEFAULT mb-2">
                      {experience.title}
                    </h3>
                    <h4 className="text-primary font-medium mb-4">{experience.company}</h4>
                    <p className="text-dark-lighter dark:text-light-darker mb-4">
                      {experience.description}
                    </p>
                    <div className={cn(
                      "flex flex-wrap gap-2",
                      index % 2 === 0 ? "md:justify-end" : "",
                    )}>
                      {experience.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className={cn(
                            "inline-block text-xs px-2 py-1 rounded-full",
                            skill.color
                          )}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 -translate-x-0 md:-translate-x-1/2 h-full flex flex-col items-center">
                  <div className="bg-primary w-8 h-8 rounded-full border-4 border-light-DEFAULT dark:border-dark-DEFAULT z-10 flex items-center justify-center">
                    <i className={`fas ${experience.icon} text-white text-xs`}></i>
                  </div>
                </div>
                
                <div className={cn(
                  "order-2 md:w-5/12 mt-6 md:mt-0",
                  index % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right"
                )}>
                  <div className="font-medium text-primary md:text-left">
                    {experience.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ExperienceSection.displayName = "ExperienceSection";

export default ExperienceSection;
