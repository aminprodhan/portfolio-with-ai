import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase } from "lucide-react";

export function About() {
  const skills = [
    "Next.js", "React", "TypeScript", "JavaScript", "Node.js", 
    "MongoDB", "PostgreSQL", "GraphQL", "REST APIs", "Tailwind CSS", 
    "AWS", "Docker"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/5">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://cursorbd.com/amin/me.jpg"
                  alt="Software Engineer working" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-md">
                <p className="font-medium">6+ Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <h3 className="text-2xl font-bold mb-4">Software Engineer & Web Developer</h3>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              I'm a passionate software engineer with 6 years of experience specializing in building exceptional digital experiences. 
              My expertise lies in creating efficient, scalable, and user-friendly applications using modern web technologies.
            </p>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Currently working at cursorbd.com, I focus on developing innovative solutions that help businesses transform their digital presence. 
              My approach combines technical excellence with a strong focus on user experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold mb-3 text-lg">Education</h4>
                <p className="mb-1 text-slate-700 dark:text-slate-300 flex items-center">
                  <GraduationCap className="mr-2 h-4 w-4 text-primary" /> B.Sc in Computer Science & Engineering
                </p>
                <p className="mb-1 text-slate-600 dark:text-slate-400 ml-6">Port City International University</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-3 text-lg">Current Position</h4>
                <p className="mb-1 text-slate-700 dark:text-slate-300 flex items-center">
                  <Briefcase className="mr-2 h-4 w-4 text-primary" /> Software Engineer
                </p>
                <p className="mb-1 text-slate-600 dark:text-slate-400 ml-6">cursorbd.com</p>
              </div>
            </div>
            
            {/* Skills */}
            <h4 className="font-bold mb-3 text-lg">Technical Skills</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="px-3 py-1 rounded-full"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
