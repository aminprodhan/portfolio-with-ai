import React, { useState, useEffect, RefObject } from "react";
import { Code, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

type SectionRefs = {
  aboutRef: RefObject<HTMLElement>;
  experienceRef: RefObject<HTMLElement>;
  skillsRef: RefObject<HTMLElement>;
  projectsRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
};

interface HeaderProps {
  refs: SectionRefs;
}

export default function Header({ refs }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const activeSection = useScrollSpy(
    [
      { id: "home", ref: null }, 
      { id: "about", ref: refs.aboutRef }, 
      { id: "experience", ref: refs.experienceRef }, 
      { id: "skills", ref: refs.skillsRef }, 
      { id: "projects", ref: refs.projectsRef }, 
      { id: "contact", ref: refs.contactRef }
    ],
    { offsetPx: 100 }
  );
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToSection = (ref: RefObject<HTMLElement> | null) => {
    if (!ref) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    if (ref.current) {
      const headerOffset = 80;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    setMobileMenuOpen(false);
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className={cn(
      "fixed top-0 w-full bg-light-DEFAULT bg-opacity-95 dark:bg-dark-DEFAULT dark:bg-opacity-95 shadow-sm z-50 transition-all duration-300",
      scrolled && "py-2 shadow-md"
    )}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a 
          onClick={() => scrollToSection(null)} 
          className="text-primary dark:text-primary font-display font-bold text-2xl flex items-center space-x-2 cursor-pointer"
        >
          <span>&lt;</span>
          <span>John Doe</span>
          <span>/&gt;</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-dark-DEFAULT dark:text-light-DEFAULT font-medium">
          <a 
            onClick={() => scrollToSection(null)} 
            className={cn(
              "hover:text-primary dark:hover:text-primary transition duration-300 py-2 cursor-pointer",
              activeSection === "home" && "text-primary dark:text-primary"
            )}
          >
            Home
          </a>
          <a 
            onClick={() => scrollToSection(refs.aboutRef)} 
            className={cn(
              "hover:text-primary dark:hover:text-primary transition duration-300 py-2 cursor-pointer",
              activeSection === "about" && "text-primary dark:text-primary"
            )}
          >
            About
          </a>
          <a 
            onClick={() => scrollToSection(refs.experienceRef)} 
            className={cn(
              "hover:text-primary dark:hover:text-primary transition duration-300 py-2 cursor-pointer",
              activeSection === "experience" && "text-primary dark:text-primary"
            )}
          >
            Experience
          </a>
          <a 
            onClick={() => scrollToSection(refs.skillsRef)} 
            className={cn(
              "hover:text-primary dark:hover:text-primary transition duration-300 py-2 cursor-pointer",
              activeSection === "skills" && "text-primary dark:text-primary"
            )}
          >
            Skills
          </a>
          <a 
            onClick={() => scrollToSection(refs.projectsRef)} 
            className={cn(
              "hover:text-primary dark:hover:text-primary transition duration-300 py-2 cursor-pointer",
              activeSection === "projects" && "text-primary dark:text-primary"
            )}
          >
            Projects
          </a>
          <a 
            onClick={() => scrollToSection(refs.contactRef)} 
            className={cn(
              "hover:text-primary dark:hover:text-primary transition duration-300 py-2 cursor-pointer",
              activeSection === "contact" && "text-primary dark:text-primary"
            )}
          >
            Contact
          </a>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <Button 
          onClick={toggleMobileMenu} 
          variant="ghost" 
          size="icon" 
          aria-label="Toggle menu" 
          className="md:hidden"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "md:hidden bg-light-DEFAULT dark:bg-dark-DEFAULT border-t border-gray-200 dark:border-dark-lighter transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "h-auto py-3" : "h-0 py-0"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a 
            onClick={() => scrollToSection(null)} 
            className={cn(
              "text-dark-DEFAULT dark:text-light-DEFAULT hover:text-primary dark:hover:text-primary transition duration-300 py-2 cursor-pointer",
              activeSection === "home" && "text-primary dark:text-primary"
            )}
          >
            Home
          </a>
          <a 
            onClick={() => scrollToSection(refs.aboutRef)} 
            className={cn(
              "text-dark-DEFAULT dark:text-light-DEFAULT hover:text-primary dark:hover:text-primary transition duration-300 py-2 cursor-pointer",
              activeSection === "about" && "text-primary dark:text-primary"
            )}
          >
            About
          </a>
          <a 
            onClick={() => scrollToSection(refs.experienceRef)} 
            className={cn(
              "text-dark-DEFAULT dark:text-light-DEFAULT hover:text-primary dark:hover:text-primary transition duration-300 py-2 cursor-pointer",
              activeSection === "experience" && "text-primary dark:text-primary"
            )}
          >
            Experience
          </a>
          <a 
            onClick={() => scrollToSection(refs.skillsRef)} 
            className={cn(
              "text-dark-DEFAULT dark:text-light-DEFAULT hover:text-primary dark:hover:text-primary transition duration-300 py-2 cursor-pointer",
              activeSection === "skills" && "text-primary dark:text-primary"
            )}
          >
            Skills
          </a>
          <a 
            onClick={() => scrollToSection(refs.projectsRef)} 
            className={cn(
              "text-dark-DEFAULT dark:text-light-DEFAULT hover:text-primary dark:hover:text-primary transition duration-300 py-2 cursor-pointer",
              activeSection === "projects" && "text-primary dark:text-primary"
            )}
          >
            Projects
          </a>
          <a 
            onClick={() => scrollToSection(refs.contactRef)} 
            className={cn(
              "text-dark-DEFAULT dark:text-light-DEFAULT hover:text-primary dark:hover:text-primary transition duration-300 py-2 cursor-pointer",
              activeSection === "contact" && "text-primary dark:text-primary"
            )}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
