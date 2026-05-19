import { apiClient } from "./client";

export async function getDrawdownAnalytics(
  ticker,
  period = "1y"
) {
  const response = await apiClient.get(
    `/analytics/drawdown/${ticker}`,
    {
      params: { period },
    }
  );

  return response.data;
}

export async function getSharpeAnalytics(
  ticker,
  period = "1y"
) {
  const response = await apiClient.get(
    `/analytics/sharpe/${ticker}`,
    {
      params: { period },
    }
  );

  return response.data;
}