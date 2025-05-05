import { Timeline, TimelineItemProps } from "@/components/ui/timeline";

export function Experience() {
  const experienceItems: TimelineItemProps[] = [
    {
      title: "Senior Software Engineer",
      company: "cursorbd.com",
      period: "2021 - Present",
      description: "Leading development of next-generation web applications using Next.js and React. Implementing microservices architecture and optimizing application performance.",
      skills: ["Next.js", "React", "TypeScript", "GraphQL"]
    },
    {
      title: "Software Engineer",
      company: "Tech Innovations Ltd",
      period: "2019 - 2021",
      description: "Developed scalable web applications and services using React and Node.js. Collaborated with design and product teams to implement new features and improve user experience.",
      skills: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Junior Developer",
      company: "WebSolutions Agency",
      period: "2017 - 2019",
      description: "Built responsive websites and applications for clients across various industries. Implemented front-end frameworks and optimized website performance.",
      skills: ["JavaScript", "jQuery", "HTML/CSS", "PHP"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Timeline items={experienceItems} />
        </div>
      </div>
    </section>
  );
}
