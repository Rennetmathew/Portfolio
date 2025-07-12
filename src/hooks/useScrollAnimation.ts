import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Store elements in a variable to avoid re-querying DOM during cleanup
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      // Properly disconnect the observer to prevent memory leaks
      observer.disconnect();
    };
  }, []);
};

export default useScrollAnimation;