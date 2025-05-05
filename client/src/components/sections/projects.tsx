import { useState } from "react";
import { ProjectCard, ProjectProps } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";

export function Projects() {
  // Filter state
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "mobile" | "api">("all");

  const projects: ProjectProps[] = [
    {
      title: "E-commerce Platform",
      description: "A complete e-commerce solution with Next.js, featuring product management, payment processing, and user authentication.",
      category: "web",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
      technologies: ["Next.js", "MongoDB", "Stripe"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "RESTful API Service",
      description: "A scalable API service built with Node.js for handling high-volume data requests with comprehensive documentation.",
      category: "api",
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["Node.js", "Express", "PostgreSQL"],
      docsLink: "#",
      codeLink: "#"
    },
    {
      title: "Fitness Tracker App",
      description: "A cross-platform mobile application for tracking workouts, nutrition, and fitness progress with social features.",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      technologies: ["React Native", "Firebase", "Redux"],
      playStoreLink: "#",
      codeLink: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard with real-time data visualization, custom reports, and user management.",
      category: "web",
      image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["React", "D3.js", "GraphQL"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Headless CMS",
      description: "A flexible headless CMS with a powerful API for managing content across multiple platforms and channels.",
      category: "api",
      image: "https://images.unsplash.com/photo-1549082984-1323b94df9a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["Node.js", "MongoDB", "AWS S3"],
      docsLink: "#",
      codeLink: "#"
    },
    {
      title: "Weather App",
      description: "A beautiful weather application with forecast data, location-based services, and customizable notifications.",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      technologies: ["Flutter", "Dart", "OpenWeather API"],
      appStoreLink: "#",
      codeLink: "#"
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          
          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button 
              variant={activeFilter === "all" ? "default" : "secondary"}
              onClick={() => setActiveFilter("all")}
              className={activeFilter === "all" ? "filter-button active" : "filter-button"}
            >
              All
            </Button>
            <Button 
              variant={activeFilter === "web" ? "default" : "secondary"}
              onClick={() => setActiveFilter("web")}
              className={activeFilter === "web" ? "filter-button active" : "filter-button"}
            >
              Web Apps
            </Button>
            <Button 
              variant={activeFilter === "mobile" ? "default" : "secondary"}
              onClick={() => setActiveFilter("mobile")}
              className={activeFilter === "mobile" ? "filter-button active" : "filter-button"}
            >
              Mobile
            </Button>
            <Button 
              variant={activeFilter === "api" ? "default" : "secondary"}
              onClick={() => setActiveFilter("api")}
              className={activeFilter === "api" ? "filter-button active" : "filter-button"}
            >
              API
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
