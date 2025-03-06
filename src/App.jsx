import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AnalyticsOverview from "./pages/analytics/Overview";
import AnalyticsPerformance from "./pages/analytics/Performance";
import FinanceInvoices from "./pages/finance/Invoices";

// Example placeholder components
const Dashboard = () => <div>Dashboard Content</div>;
const Transactions = () => <div>Transactions Content</div>;
const Reports = () => <div>Reports Content</div>;

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/finance/transactions" element={<Transactions />} />
          <Route path="/finance/reports" element={<Reports />} />
          <Route path="/analytics/overview" element={<AnalyticsOverview />} />
          <Route
            path="/analytics/performance"
            element={<AnalyticsPerformance />}
          />
          <Route path="/finance/invoices" element={<FinanceInvoices />} />
          {/* Add more routes as needed */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
