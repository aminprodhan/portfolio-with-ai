import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { technicalSkills, expertiseAreas } from "@/data/portfolio-data";

const SkillsSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section 
      id="skills" 
      ref={ref} 
      className="py-16 md:py-24 px-4 bg-light-darker dark:bg-dark-lighter"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-dark-lighter dark:text-light-darker mt-6 max-w-2xl mx-auto">
            My technical skills and areas of expertise developed over 6 years in the software engineering industry.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold text-center mb-10">Technical Skills</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-card bg-white dark:bg-dark-DEFAULT rounded-lg p-6 shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-primary bg-opacity-10 dark:bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${skill.icon} text-primary text-2xl`}></i>
                </div>
                <h4 className="font-display font-semibold mb-2">{skill.name}</h4>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2 mb-1">
                  <div 
                    className="bg-primary h-2 rounded-full" 
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
                <p className="text-xs text-dark-lighter dark:text-light-darker">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-display font-semibold text-center mb-10">Areas of Expertise</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="bg-white dark:bg-dark-DEFAULT rounded-lg p-8 shadow-md">
                <div className={`w-14 h-14 ${area.bgColor} rounded-lg flex items-center justify-center text-white mb-6`}>
                  <i className={`${area.icon} text-2xl`}></i>
                </div>
                <h4 className="font-display font-semibold text-xl mb-4">{area.title}</h4>
                <p className="text-dark-lighter dark:text-light-darker">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
