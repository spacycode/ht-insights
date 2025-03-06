export async function fetchMBRData() {
  // In a real app, this would call an API
  // Simulating API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        summaryMetrics: [
          { title: "Total Revenue", value: "$125,430", trend: "up" },
          { title: "Net Profit", value: "$42,800", trend: "up" },
          { title: "Customer Count", value: "1,245", trend: "up" },
        ],
        metrics: [
          {
            name: "Revenue",
            current: "$125,430",
            previous: "$110,200",
            change: "+13.8%",
          },
          {
            name: "Expenses",
            current: "$82,630",
            previous: "$75,340",
            change: "+9.7%",
          },
          {
            name: "Profit Margin",
            current: "34.1%",
            previous: "31.6%",
            change: "+2.5%",
          },
          {
            name: "EBITDA",
            current: "$52,100",
            previous: "$46,800",
            change: "+11.3%",
          },
          {
            name: "Cash Flow",
            current: "$38,250",
            previous: "$35,100",
            change: "+9.0%",
          },
        ],
        // Add more data as needed for charts, etc.
      });
    }, 800); // Simulate network delay
  });
}
