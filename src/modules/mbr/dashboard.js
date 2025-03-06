export function renderMBRDashboard(container, data) {
  // Create the dashboard layout
  container.innerHTML = `
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold text-gray-800">Monthly Business Review</h2>
        <div class="flex space-x-2">
          <button id="export-mbr" class="btn bg-secondary hover:bg-secondary-dark">
            Export Data
          </button>
          <button id="refresh-mbr" class="btn">
            Refresh
          </button>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        ${renderSummaryCards(data)}
      </div>
      
      <div class="card">
        <h3 class="text-lg font-medium mb-4">Performance Metrics</h3>
        <div class="overflow-x-auto">
          ${renderMetricsTable(data)}
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card h-64">
          <h3 class="text-lg font-medium mb-4">Revenue Trend</h3>
          <div class="h-48 bg-gray-100 rounded flex items-center justify-center">
            [Chart Placeholder]
          </div>
        </div>
        
        <div class="card h-64">
          <h3 class="text-lg font-medium mb-4">Expense Distribution</h3>
          <div class="h-48 bg-gray-100 rounded flex items-center justify-center">
            [Chart Placeholder]
          </div>
        </div>
      </div>
    </div>
  `;

  // Add event listeners
  document.getElementById("export-mbr")?.addEventListener("click", () => {
    alert("Exporting MBR data...");
    // Implement export functionality
  });

  document.getElementById("refresh-mbr")?.addEventListener("click", () => {
    alert("Refreshing MBR data...");
    // Implement refresh functionality
  });
}

function renderSummaryCards(data) {
  const metrics = data.summaryMetrics || [
    { title: "Total Revenue", value: "$0", trend: "neutral" },
    { title: "Net Profit", value: "$0", trend: "neutral" },
    { title: "Customer Count", value: "0", trend: "neutral" },
  ];

  return metrics
    .map(
      (metric) => `
    <div class="card">
      <h3 class="text-sm font-medium text-gray-500">${metric.title}</h3>
      <p class="text-2xl font-bold mt-1">${metric.value}</p>
      <div class="flex items-center mt-2">
        <span class="text-${getTrendColor(metric.trend)}">
          ${getTrendIcon(metric.trend)}
          ${getTrendLabel(metric.trend)}
        </span>
      </div>
    </div>
  `
    )
    .join("");
}

function renderMetricsTable(data) {
  const metrics = data.metrics || [];

  if (metrics.length === 0) {
    return '<p class="text-gray-500">No metrics data available.</p>';
  }

  return `
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Previous</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">YoY Change</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        ${metrics
          .map(
            (metric) => `
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${
              metric.name
            }</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${
              metric.current
            }</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${
              metric.previous
            }</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm ${getChangeColor(
              metric.change
            )}">
              ${metric.change}
            </td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function getTrendColor(trend) {
  switch (trend) {
    case "up":
      return "green-600";
    case "down":
      return "red-600";
    default:
      return "gray-500";
  }
}

function getTrendIcon(trend) {
  switch (trend) {
    case "up":
      return "↑";
    case "down":
      return "↓";
    default:
      return "→";
  }
}

function getTrendLabel(trend) {
  switch (trend) {
    case "up":
      return "Increasing";
    case "down":
      return "Decreasing";
    default:
      return "Stable";
  }
}

function getChangeColor(change) {
  if (!change) return "text-gray-500";

  const value = parseFloat(change);
  if (isNaN(value)) return "text-gray-500";

  return value > 0
    ? "text-green-600"
    : value < 0
    ? "text-red-600"
    : "text-gray-500";
}
