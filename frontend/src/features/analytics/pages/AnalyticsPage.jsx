import { useCallback, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

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

function formatPercent(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return "N/A";
  }

  return `${(Number(value) * 100).toFixed(2)}%`;
}

function formatPrice(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return "N/A";
  }

  return Number(value).toFixed(2);
}

function getPerformanceTone(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return "default";
  }

  return Number(value) >= 0 ? "success" : "error";
}

export default function AnalyticsPage() {
  const [ticker, setTicker] = useState("CBA.AX");
  const [period, setPeriod] = useState("6mo");

  const [prices, setPrices] = useState([]);
  const [returnsData, setReturnsData] = useState([]);
  const [volatilityData, setVolatilityData] = useState([]);

  const [annualizedVolatility, setAnnualizedVolatility] = useState(null);

  const [lastUpdated, setLastUpdated] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const loadAnalytics = useCallback(async () => {
    try {
      setLoading(true);

      setError("");

      const [priceResult, returnsResult, volatilityResult] = await Promise.all([
        getHistoricalPrices(ticker, period),

        getReturnsAnalytics(ticker, period),

        getVolatilityAnalytics(ticker, period),
      ]);

      setPrices(priceResult.prices || []);

      setReturnsData(returnsResult.analytics || []);

      setVolatilityData(volatilityResult.volatility_data || []);

      setAnnualizedVolatility(volatilityResult.annualized_volatility ?? null);

      setLastUpdated(new Date().toLocaleString());
    } catch {
      setError("Failed to load analytics from backend.");
    } finally {
      setLoading(false);
    }
  }, [ticker, period]);

  const lastPrice = prices.at(-1)?.Close ?? null;

  const lastReturn = returnsData.at(-1)?.cumulative_return ?? null;

  const performanceTone = getPerformanceTone(lastReturn);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1680,
        mx: "auto",
        pb: 6,
      }}
    >
      <Paper
        sx={{
          p: { xs: 2.5, md: 3 },

          borderRadius: 5,

          border: "1px solid rgba(148, 163, 184, 0.14)",

          background:
            "linear-gradient(135deg, rgba(15, 23, 42, 0.92), rgba(2, 6, 23, 0.72))",
        }}
      >
        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          justifyContent="space-between"
          alignItems={{
            xs: "flex-start",
            lg: "center",
          }}
          spacing={3}
        >
          <Box>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Typography variant="h3" fontWeight={900}>
                Analytics
              </Typography>

              <Chip
                label="Live backend data"
                color="primary"
                variant="outlined"
                size="small"
              />
            </Stack>

            <Typography
              color="text.secondary"
              sx={{
                mt: 1,
                maxWidth: 920,
              }}
            >
              Historical ASX price, cumulative return, and volatility analytics
              powered by FastAPI, Pandas, and Yahoo Finance.
            </Typography>

            {lastUpdated && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1.25 }}
              >
                Last updated: {lastUpdated}
              </Typography>
            )}
          </Box>

          <Button
            variant="contained"
            startIcon={<RefreshIcon />}
            onClick={loadAnalytics}
            disabled={loading}
            sx={{
              px: 2.5,
              py: 1.1,
              borderRadius: 3,
              minWidth: 170,
            }}
          >
            {loading ? "Loading..." : "Load / Refresh Analytics"}
          </Button>
        </Stack>

        <Paper
          elevation={0}
          sx={{
            p: 1.5,

            mt: 3,

            borderRadius: 4,

            border: "1px solid rgba(148, 163, 184, 0.14)",

            bgcolor: "rgba(15, 23, 42, 0.72)",
          }}
        >
          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            spacing={2}
          >
            <TextField
              select
              label="Ticker"
              value={ticker}
              onChange={(event) => setTicker(event.target.value)}
              sx={{
                minWidth: {
                  xs: "100%",
                  md: 220,
                },
              }}
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
              sx={{
                minWidth: {
                  xs: "100%",
                  md: 180,
                },
              }}
            >
              {periods.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </Paper>
      </Paper>

      {error && (
        <Alert
          severity="error"
          sx={{
            mt: 3,
            borderRadius: 3,
          }}
        >
          {error}
        </Alert>
      )}

      <Box
        sx={{
          mt: 3,

          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",

            sm: "repeat(2, minmax(0, 1fr))",

            xl: "repeat(4, minmax(0, 1fr))",
          },

          gap: 3,
        }}
      >
        <MetricCard label="Ticker" value={ticker} subtitle={period} />

        <MetricCard
          label="Last Close"
          value={formatPrice(lastPrice)}
          subtitle="Latest available close"
        />

        <MetricCard
          label="Cumulative Return"
          value={formatPercent(lastReturn)}
          subtitle={
            performanceTone === "success"
              ? "Positive selected-period return"
              : performanceTone === "error"
                ? "Negative selected-period return"
                : "Selected period"
          }
        />

        <MetricCard
          label="Annualized Volatility"
          value={formatPercent(annualizedVolatility)}
          subtitle="Risk estimate"
        />
      </Box>

      <Box
        sx={{
          mt: 4,

          display: "grid",

          gridTemplateColumns: "1fr",

          gap: 3,

          width: "100%",
        }}
      >
        <PriceChart data={prices} loading={loading} />

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",

              xl: "1fr 1fr",
            },

            gap: 3,

            width: "100%",
          }}
        >
          <ReturnsChart data={returnsData} loading={loading} />

          <VolatilityChart data={volatilityData} loading={loading} />
        </Box>
      </Box>
    </Box>
  );
}
