import { CodeSnippet } from "@/components/ui/code-snippet";
import { Button } from "@/components/ui/button";
import { Download, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 hero-gradient">
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-slide-up">
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Al Amin Prodhan</h1>
            <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 font-medium mb-6">
              Software Engineer with 6 years of experience
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              I build exceptional digital experiences with Next.js and modern web technologies. 
              Currently working at{" "}
              <a href="https://cursorbd.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                cursorbd.com
              </a>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <a href="#projects">View My Work</a>
              </Button>
            </div>
            
            <div className="flex mt-8 space-x-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                <FaGithub className="text-2xl" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="mailto:contact@alamin.dev" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                <MdEmail className="text-2xl" />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in">
            <CodeSnippet />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
