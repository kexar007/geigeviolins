 // Select the element we want to animate
  const cardGroup = document.querySelector('.card-group');

  // Define the observer options
  const observerOptions = {
    root: null, // observes intersections relative to the viewport
    rootMargin: '0px',
    threshold: 0.25 // Trigger when 25% of the element is visible
  };

  // Create the Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // If the element is intersecting (on screen)
      if (entry.isIntersecting) {
        cardGroup.classList.add('is-fanned-out');
      } else {
        // If the element is not intersecting (off screen)
        cardGroup.classList.remove('is-fanned-out');
      }
    });
  }, observerOptions);

  // Start observing the card group
  observer.observe(cardGroup);