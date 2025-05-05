import { useState, useEffect } from "react";

interface UseScrollToTopOptions {
  threshold?: number;
}

export function useScrollToTop(options: UseScrollToTopOptions = {}) {
  const { threshold = 300 } = options;
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > threshold);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return { showScrollTop, scrollToTop };
}
