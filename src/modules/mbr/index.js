import { renderMBRDashboard } from "./dashboard";
import { fetchMBRData } from "./data";

const MBRModule = {
  name: "MBR Module",
  description: "Monthly Business Review module for HT Insights",

  init(container) {
    // Create module container with loading state
    container.innerHTML =
      '<div class="card"><p class="text-center">Loading MBR data...</p></div>';

    // Load module data
    this.loadData()
      .then((data) => {
        // Render the dashboard with the loaded data
        this.render(container, data);
      })
      .catch((error) => {
        container.innerHTML = `
          <div class="card bg-red-50 border border-red-200">
            <p class="text-red-600">Failed to load MBR data: ${error.message}</p>
            <button id="mbr-retry" class="btn mt-4">Retry</button>
          </div>
        `;

        document.getElementById("mbr-retry")?.addEventListener("click", () => {
          this.init(container);
        });
      });
  },

  async loadData() {
    // Fetch data for the MBR module
    return await fetchMBRData();
  },

  render(container, data) {
    // Render the MBR dashboard with the provided data
    renderMBRDashboard(container, data);
  },
};

export default MBRModule;
