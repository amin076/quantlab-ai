import { apiClient } from "./client";

export async function getHistoricalPrices(ticker, period = "6mo") {
  const response = await apiClient.get(`/prices/${ticker}`, {
    params: { period },
  });

  return response.data;
}

export async function getReturnsAnalytics(ticker, period = "6mo") {
  const response = await apiClient.get(`/analytics/returns/${ticker}`, {
    params: { period },
  });

  return response.data;
}

export async function getVolatilityAnalytics(ticker, period = "1y") {
  const response = await apiClient.get(`/analytics/volatility/${ticker}`, {
    params: { period },
  });

  return response.data;
}