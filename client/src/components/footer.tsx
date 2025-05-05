import React, { RefObject } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaMediumM } from "react-icons/fa";

type SectionRefs = {
  aboutRef: RefObject<HTMLElement>;
  experienceRef: RefObject<HTMLElement>;
  skillsRef: RefObject<HTMLElement>;
  projectsRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
};

interface FooterProps {
  refs: SectionRefs;
}

export default function Footer({ refs }: FooterProps) {
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
  };
  
  return (
    <footer className="bg-dark-darker text-light-darker py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              onClick={() => scrollToSection(null)} 
              className="text-light-DEFAULT font-display font-bold text-xl flex items-center space-x-2 cursor-pointer"
            >
              <span>&lt;</span>
              <span>John Doe</span>
              <span>/&gt;</span>
            </a>
          </div>
          
          <div className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <a 
                  onClick={() => scrollToSection(null)} 
                  className="hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection(refs.aboutRef)} 
                  className="hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection(refs.experienceRef)} 
                  className="hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection(refs.skillsRef)} 
                  className="hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection(refs.projectsRef)} 
                  className="hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection(refs.contactRef)} 
                  className="hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <Button 
              variant="default"
              className="bg-primary hover:bg-primary-dark text-white text-sm font-medium py-2 px-4 rounded-md transition duration-300 inline-flex items-center"
            >
              <Download className="mr-2 h-4 w-4" />
              <span>Download Resume</span>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-dark-lighter mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="text-light-darker hover:text-primary transition-colors duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="#" 
              aria-label="GitHub"
              className="text-light-darker hover:text-primary transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a 
              href="#" 
              aria-label="Twitter"
              className="text-light-darker hover:text-primary transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a 
              href="#" 
              aria-label="Medium"
              className="text-light-darker hover:text-primary transition-colors duration-300"
            >
              <FaMediumM />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
