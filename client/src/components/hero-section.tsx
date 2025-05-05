import React, { RefObject } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaMediumM, FaJs, FaReact, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";

interface HeroSectionProps {
  contactRef: RefObject<HTMLElement>;
}

export default function HeroSection({ contactRef }: HeroSectionProps) {
  const scrollToContact = () => {
    if (contactRef.current) {
      const headerOffset = 80;
      const elementPosition = contactRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/5 mb-10 md:mb-0">
            <div className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
              Software Engineer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              <span className="block">Hello, I'm</span>
              <span className="text-primary">John Doe</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-lighter dark:text-light-darker leading-relaxed mb-8 max-w-2xl">
              A passionate software engineer with 6 years of experience building robust, scalable applications. 
              I specialize in full-stack development, cloud architecture, and creating exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition duration-300 shadow-md hover:shadow-lg flex items-center"
              >
                <span>Get in Touch</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                className="bg-light-darker hover:bg-gray-200 dark:bg-dark-lighter dark:hover:bg-dark-DEFAULT text-dark-DEFAULT dark:text-light-DEFAULT font-medium py-3 px-6 rounded-md transition duration-300 shadow-md hover:shadow-lg flex items-center"
              >
                <span>Download Resume</span>
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <Avatar className="w-full h-full">
                  <AvatarImage 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="John Doe profile picture" 
                    className="w-full h-full object-cover"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent rounded-full p-6 shadow-lg">
                <span className="text-white font-bold">6+</span>
                <span className="text-white text-sm block">Years</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-6 border-t border-gray-200 dark:border-dark-lighter">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-dark-lighter dark:text-light-darker font-medium mb-4">Connect with me</p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-dark-DEFAULT dark:bg-dark-lighter text-white flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-dark-DEFAULT dark:bg-dark-lighter text-white flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-dark-DEFAULT dark:bg-dark-lighter text-white flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-dark-DEFAULT dark:bg-dark-lighter text-white flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label="Medium"
                >
                  <FaMediumM />
                </a>
              </div>
            </div>
            <div>
              <p className="text-dark-lighter dark:text-light-darker font-medium mb-4 text-center md:text-right">Tech Stack</p>
              <div className="flex space-x-3">
                <span className="inline-block p-2 bg-light-darker dark:bg-dark-lighter rounded-md" title="JavaScript">
                  <FaJs className="text-yellow-500 text-xl" />
                </span>
                <span className="inline-block p-2 bg-light-darker dark:bg-dark-lighter rounded-md" title="React">
                  <FaReact className="text-blue-500 text-xl" />
                </span>
                <span className="inline-block p-2 bg-light-darker dark:bg-dark-lighter rounded-md" title="Node.js">
                  <FaNodeJs className="text-green-600 text-xl" />
                </span>
                <span className="inline-block p-2 bg-light-darker dark:bg-dark-lighter rounded-md" title="Python">
                  <FaPython className="text-blue-700 text-xl" />
                </span>
                <span className="inline-block p-2 bg-light-darker dark:bg-dark-lighter rounded-md" title="Docker">
                  <FaDocker className="text-blue-500 text-xl" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
