import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, Download } from "lucide-react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed w-full z-50 backdrop-blur-md transition-colors duration-300 shadow-md ${isScrolled ? "bg-white/80 dark:bg-slate-900/80" : "bg-white/60 dark:bg-slate-900/60"}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold">
            <span>&lt;</span>
            <span className="text-primary">amin</span>
            <span className="text-[#10B981]">.dev</span>
            <span> /&gt;</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full"
            >
              {theme === "dark" ? (
                <Moon className="h-5 w-5 text-slate-300" />
              ) : (
                <Sun className="h-5 w-5 text-yellow-500" />
              )}
            </Button>
            
            {/* Resume Button */}
            <Button asChild className="hidden md:inline-flex">
              <a href="#" download>
                Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div 
          className={`absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg md:hidden transition-transform duration-300 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button asChild>
              <a href="#" download className="w-full text-center">
                Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
