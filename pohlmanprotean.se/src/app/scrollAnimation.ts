
// Ensure that the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
  const servicesBox = document.getElementById("services") as HTMLElement; // Type assertion to HTMLElement

  // Check if servicesBox exists before observing
  if (servicesBox) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          servicesBox.classList.add("slide-up");
          observer.unobserve(servicesBox); // Stop observing after the animation is added
        }
      });
    });

    observer.observe(servicesBox); // Start observing the servicesBox
  }
});
