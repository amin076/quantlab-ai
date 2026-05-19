import { apiClient } from "./client";

export async function getDatabaseStocks() {
  const response = await apiClient.get("/stocks/db");
  return response.data;
}

export async function syncAsxTopStocks() {
  const response = await apiClient.post("/stocks/sync-asx-top");
  return response.data;
}