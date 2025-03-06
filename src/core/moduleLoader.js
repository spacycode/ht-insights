// Module registry to keep track of all available modules
const moduleRegistry = new Map();

export async function loadModules() {
  try {
    // Import MBR module
    const mbrModule = await import("../modules/mbr/index.js");
    registerModule("mbr", mbrModule.default);

    // Set the default module to show on application load
    activateModule("mbr");

    return moduleRegistry;
  } catch (error) {
    console.error("Failed to load modules:", error);
    return new Map();
  }
}

export function registerModule(id, moduleDefinition) {
  if (!id || !moduleDefinition || !moduleDefinition.init) {
    console.error(`Invalid module definition for ${id}`);
    return;
  }

  moduleRegistry.set(id, {
    ...moduleDefinition,
    id,
  });

  console.log(`Module '${id}' registered successfully`);
}

export function activateModule(moduleId) {
  const moduleContainer = document.getElementById("module-container");
  if (!moduleContainer) return;

  const module = moduleRegistry.get(moduleId);
  if (!module) {
    console.error(`Module '${moduleId}' not found`);
    moduleContainer.innerHTML =
      '<div class="card"><p class="text-red-500">Module not found</p></div>';
    return;
  }

  // Clear the container
  moduleContainer.innerHTML = "";

  // Initialize the module and render it in the container
  module.init(moduleContainer);

  // Update active state in navigation
  updateActiveNavItem(moduleId);
}

function updateActiveNavItem(moduleId) {
  const navItems = document.querySelectorAll("#main-navigation a");
  navItems.forEach((item) => {
    if (item.getAttribute("data-module-id") === moduleId) {
      item.classList.add("text-primary", "font-medium");
      item.classList.remove("text-gray-600");
    } else {
      item.classList.remove("text-primary", "font-medium");
      item.classList.add("text-gray-600");
    }
  });
}
