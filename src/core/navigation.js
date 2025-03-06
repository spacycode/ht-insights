import { activateModule } from "./moduleLoader";

export function createNavigation() {
  const navElement = document.getElementById("main-navigation");
  if (!navElement) return;

  // Define navigation items
  const navItems = [
    { id: "mbr", label: "MBR", active: true },
    // Add more navigation items as modules are created
  ];

  // Create navigation links
  navElement.innerHTML = navItems
    .map(
      (item) => `
    <a 
      href="#${item.id}" 
      data-module-id="${item.id}" 
      class="${
        item.active ? "text-primary font-medium" : "text-gray-600"
      } hover:text-primary-dark"
    >
      ${item.label}
    </a>
  `
    )
    .join("");

  // Add click event listeners
  navElement.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const moduleId = link.getAttribute("data-module-id");
      activateModule(moduleId);

      // Update URL hash
      window.location.hash = moduleId;
    });
  });

  // Handle initial navigation based on URL hash
  function handleHashChange() {
    const hash = window.location.hash.substring(1);
    if (hash) {
      activateModule(hash);
    }
  }

  // Set up hash change listener
  window.addEventListener("hashchange", handleHashChange);

  // Handle initial load
  handleHashChange();
}
