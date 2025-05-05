import { useEffect } from 'react';

/**
 * Hook to reveal elements when they enter the viewport.
 * This adds the 'animate' class to elements with the 'reveal-element' class
 * when they come into view.
 */
export function useScrollReveal() {
  useEffect(() => {
    const reveal = () => {
      const elements = document.querySelectorAll('.reveal-element');
      
      elements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // How much of the element needs to be visible
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('animate');
        }
      });
    };
    
    // Run once on mount to reveal elements that are already in view
    reveal();
    
    // Add scroll event listener
    window.addEventListener('scroll', reveal);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);
}