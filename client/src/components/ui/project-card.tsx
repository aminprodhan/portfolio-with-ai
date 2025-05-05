import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, BookOpen, Play } from "lucide-react";

export interface ProjectProps {
  title: string;
  description: string;
  category: "web" | "mobile" | "api";
  image: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
  docsLink?: string;
  appStoreLink?: string;
  playStoreLink?: string;
}

export function ProjectCard({
  title,
  description,
  category,
  image,
  technologies,
  demoLink,
  codeLink,
  docsLink,
  appStoreLink,
  playStoreLink,
}: ProjectProps) {
  const categoryLabel = 
    category === "web" ? "Web App" :
    category === "mobile" ? "Mobile" : "API";

  return (
    <Card className="overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={image}
          alt={title} 
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary text-white">{categoryLabel}</Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>

        <div className="flex justify-between">
          {/* Display appropriate links based on project type */}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700 transition-colors font-medium flex items-center gap-1">
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          )}
          
          {docsLink && (
            <a href={docsLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700 transition-colors font-medium flex items-center gap-1">
              <BookOpen className="h-4 w-4" /> Documentation
            </a>
          )}
          
          {appStoreLink && (
            <a href={appStoreLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700 transition-colors font-medium flex items-center gap-1">
              <ExternalLink className="h-4 w-4" /> App Store
            </a>
          )}
          
          {playStoreLink && (
            <a href={playStoreLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700 transition-colors font-medium flex items-center gap-1">
              <Play className="h-4 w-4" /> Google Play
            </a>
          )}
          
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700 transition-colors font-medium flex items-center gap-1">
              <Github className="h-4 w-4" /> Code
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
