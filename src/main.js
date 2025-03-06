import "./style.css";
import { initializeApp } from "./core/app";
import { loadModules } from "./core/moduleLoader";

document.addEventListener("DOMContentLoaded", async () => {
  // Initialize the application core
  const app = initializeApp();

  // Load all modules
  const modules = await loadModules();

  // Render the main application
  app.render();
});
