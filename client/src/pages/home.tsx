import { useRef, useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  
  const { showScrollTop, scrollToTop } = useScrollToTop();
  
  // Initialize scroll reveal effects
  useScrollReveal();
  
  // Add reveal-element class to all sections that need to be animated
  useEffect(() => {
    const sections = [
      aboutRef.current,
      experienceRef.current,
      skillsRef.current,
      projectsRef.current,
      contactRef.current
    ];
    
    sections.forEach(section => {
      if (section) {
        section.classList.add('reveal-element');
      }
    });
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-light dark:bg-dark-darker">
      <Header 
        refs={{ 
          aboutRef, 
          experienceRef, 
          skillsRef, 
          projectsRef, 
          contactRef
        }} 
      />
      
      <main>
        <HeroSection contactRef={contactRef} />
        <AboutSection ref={aboutRef} />
        <ExperienceSection ref={experienceRef} />
        <SkillsSection ref={skillsRef} />
        <ProjectsSection ref={projectsRef} />
        <ContactSection ref={contactRef} />
      </main>
      
      <Footer 
        refs={{ 
          aboutRef, 
          experienceRef, 
          skillsRef, 
          projectsRef, 
          contactRef
        }} 
      />
      
      {showScrollTop && (
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full shadow-lg z-50 bg-primary hover:bg-primary-dark text-white"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
