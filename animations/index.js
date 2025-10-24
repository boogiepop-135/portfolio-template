export const stagger = (target, fromvVars, toVars) => {
  // Check if we're on the client side
  if (typeof window === 'undefined') return;
  
  // Simple CSS-based animation instead of GSAP
  if (target && target.length) {
    target.forEach((element, index) => {
      if (element) {
        // Set initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(40px) scale(0.95)';
        element.style.transition = 'all 0.6s ease-out';
        
        // Animate with delay
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0) scale(1)';
        }, index * 200);
      }
    });
  }
};
