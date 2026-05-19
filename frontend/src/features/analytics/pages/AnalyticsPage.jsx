import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import MetricCard from "../../../components/cards/MetricCard";
import {
  getHistoricalPrices,
  getReturnsAnalytics,
  getVolatilityAnalytics,
} from "../../../api/analyticsApi";
import PriceChart from "../components/PriceChart";
import ReturnsChart from "../components/ReturnsChart";
import VolatilityChart from "../components/VolatilityChart";

const defaultTickers = ["CBA.AX", "BHP.AX", "CSL.AX", "WBC.AX", "NAB.AX"];
const periods = ["1mo", "3mo", "6mo", "1y"];

export default function AnalyticsPage() {
  const [ticker, setTicker] = useState("CBA.AX");
  const [period, setPeriod] = useState("6mo");
  const [prices, setPrices] = useState([]);
  const [returnsData, setReturnsData] = useState([]);
  const [volatilityData, setVolatilityData] = useState([]);
  const [dailyVolatility, setDailyVolatility] = useState(null);
  const [annualizedVolatility, setAnnualizedVolatility] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadAnalytics = async () => {
    try {
      setLoading(true);
      setError("");

      const [priceResult, returnsResult, volatilityResult] =
        await Promise.all([
          getHistoricalPrices(ticker, period),
          getReturnsAnalytics(ticker, period),
          getVolatilityAnalytics(ticker, period),
        ]);

      setPrices(priceResult.prices || []);
      setReturnsData(returnsResult.analytics || []);
      setVolatilityData(volatilityResult.volatility_data || []);
      setDailyVolatility(volatilityResult.daily_volatility ?? null);
      setAnnualizedVolatility(volatilityResult.annualized_volatility ?? null);
    } catch {
      setError("Failed to load analytics from backend.");
    } finally {
      setLoading(false);
    }
  };

  const lastPrice = prices.length > 0 ? prices[prices.length - 1].Close : null;
  const lastReturn =
    returnsData.length > 0
      ? returnsData[returnsData.length - 1].cumulative_return
      : null;

  return (
    <Box>
      <Typography variant="h3" fontWeight={900}>
        Analytics
      </Typography>

      <Typography color="text.secondary" sx={{ mt: 1 }}>
        Historical ASX price, returns, and volatility analytics powered by
        FastAPI, Pandas, and Yahoo Finance.
      </Typography>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <TextField
            select
            label="Ticker"
            value={ticker}
            onChange={(event) => setTicker(event.target.value)}
            sx={{ minWidth: 180 }}
          >
            {defaultTickers.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Period"
            value={period}
            onChange={(event) => setPeriod(event.target.value)}
            sx={{ minWidth: 160 }}
          >
            {periods.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>

          <Button variant="contained" onClick={loadAnalytics} disabled={loading}>
            {loading ? "Loading..." : "Load Analytics"}
          </Button>
        </Stack>
      </Paper>

      {error && (
        <Alert severity="error" sx={{ mt: 3 }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} md={3}>
          <MetricCard label="Ticker" value={ticker} />
        </Grid>

        <Grid item xs={12} md={3}>
          <MetricCard
            label="Last Close"
            value={lastPrice ? lastPrice.toFixed(2) : "N/A"}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <MetricCard
            label="Cumulative Return"
            value={lastReturn !== null ? `${(lastReturn * 100).toFixed(2)}%` : "N/A"}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <MetricCard
            label="Annualized Volatility"
            value={
              annualizedVolatility !== null
                ? `${(annualizedVolatility * 100).toFixed(2)}%`
                : "N/A"
            }
          />
        </Grid>
      </Grid>

      {prices.length > 0 && <PriceChart data={prices} />}
      {returnsData.length > 0 && <ReturnsChart data={returnsData} />}
      {volatilityData.length > 0 && <VolatilityChart data={volatilityData} />}
    </Box>
  );
}