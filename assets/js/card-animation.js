// File: assets/js/card-animation.js

(() => {
  document.addEventListener('DOMContentLoaded', () => {

    // 1. Select ALL elements that have the class '.card-group'
    const allCardGroups = document.querySelectorAll('.card-group');

    // 2. Only run the code if we found at least one card group
    if (allCardGroups.length > 0) {

      const observerOptions = {
        root: null, // use the viewport as the reference
        rootMargin: '0px',
        threshold: 1 // Animate when 25% of the element is visible
      };

      // This is the function that gets called when an element enters or leaves the screen
      const intersectionCallback = (entries) => {
        entries.forEach(entry => {
          // If the element is on screen, add the class
          if (entry.isIntersecting) {
            entry.target.classList.add('is-fanned-out');
          } else {
            // If the element is off screen, remove the class
            entry.target.classList.remove('is-fanned-out');
          }
        });
      };

      // 3. Create a single observer to watch all the elements
      const observer = new IntersectionObserver(intersectionCallback, observerOptions);

      // 4. Loop through every card group we found and tell the observer to watch it
      allCardGroups.forEach(group => {
        observer.observe(group);
      });
    }
  });
})();