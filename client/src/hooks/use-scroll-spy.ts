import { useState, useEffect, RefObject } from "react";

interface ScrollSpyItem {
  id: string;
  ref: RefObject<HTMLElement> | null;
}

interface ScrollSpyOptions {
  offsetPx?: number;
}

export function useScrollSpy(
  items: ScrollSpyItem[],
  options: ScrollSpyOptions = {}
) {
  const { offsetPx = 0 } = options;
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offsetPx;
      
      // Special case for home section (top of the page)
      if (scrollPosition < 100) {
        setActiveId("home");
        return;
      }
      
      // Check other sections
      const found = items
        .filter(item => item.ref && item.ref.current)
        .find(item => {
          if (!item.ref || !item.ref.current) return false;
          
          const element = item.ref.current;
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          return scrollPosition >= elementTop - 100 && scrollPosition < elementBottom;
        });
      
      if (found) {
        setActiveId(found.id);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items, offsetPx]);
  
  return activeId;
}
