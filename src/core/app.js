import { createNavigation } from "./navigation";

export function initializeApp() {
  const appElement = document.getElementById("app");

  return {
    render() {
      // Create the main app layout
      appElement.innerHTML = `
        <div class="min-h-screen flex flex-col">
          <header class="bg-white shadow">
            <div class="container py-4">
              <div class="flex justify-between items-center">
                <h1 class="text-2xl font-bold text-gray-800">HT Insights</h1>
                <nav id="main-navigation" class="flex space-x-4">
                  <!-- Navigation items will be inserted here -->
                </nav>
              </div>
            </div>
          </header>
          
          <main class="flex-grow">
            <div class="container py-6">
              <div id="module-container" class="mt-4">
                <!-- Active module content will be rendered here -->
              </div>
            </div>
          </main>
          
          <footer class="bg-gray-800 text-white py-4">
            <div class="container">
              <p class="text-center">HT Insights © ${new Date().getFullYear()}</p>
            </div>
          </footer>
        </div>
      `;

      // Initialize navigation
      createNavigation();
    },
  };
}
