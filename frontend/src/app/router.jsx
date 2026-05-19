import { Navigate, Route, Routes } from "react-router-dom";

import MarketOverviewPage from "../features/market/pages/MarketOverviewPage";
import AnalyticsPage from "../features/analytics/pages/AnalyticsPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/market" replace />} />
      <Route path="/market" element={<MarketOverviewPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="*" element={<Navigate to="/market" replace />} />
    </Routes>
  );
}