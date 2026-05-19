import { useState } from "react";

import {
  Alert,
  Box,
  Button,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import RefreshIcon from "@mui/icons-material/Refresh";

import MetricCard from "../../../components/cards/MetricCard";

import {
  getDrawdownAnalytics,
  getSharpeAnalytics,
} from "../../../api/riskApi";

import DrawdownChart from "../components/DrawdownChart";

const defaultTickers = [
  "CBA.AX",
  "BHP.AX",
  "CSL.AX",
  "WBC.AX",
  "NAB.AX",
];

const periods = ["3mo", "6mo", "1y"];

function formatPercent(value) {
  if (
    value === null ||
    value === undefined ||
    Number.isNaN(Number(value))
  ) {
    return "N/A";
  }

  return `${(
    Number(value) * 100
  ).toFixed(2)}%`;
}

function formatNumber(value) {
  if (
    value === null ||
    value === undefined ||
    Number.isNaN(Number(value))
  ) {
    return "N/A";
  }

  return Number(value).toFixed(2);
}

export default function RiskAnalyticsPage() {
  const [ticker, setTicker] =
    useState("CBA.AX");

  const [period, setPeriod] =
    useState("1y");

  const [drawdownData, setDrawdownData] =
    useState([]);

  const [maxDrawdown, setMaxDrawdown] =
    useState(null);

  const [sharpeRatio, setSharpeRatio] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const loadRiskAnalytics = async () => {
    try {
      setLoading(true);

      setError("");

      const [
        drawdownResult,
        sharpeResult,
      ] = await Promise.all([
        getDrawdownAnalytics(
          ticker,
          period
        ),

        getSharpeAnalytics(
          ticker,
          period
        ),
      ]);

      setDrawdownData(
        drawdownResult.drawdown_data || []
      );

      setMaxDrawdown(
        drawdownResult.max_drawdown ??
          null
      );

      setSharpeRatio(
        sharpeResult.annualized_sharpe_ratio ??
          null
      );
    } catch {
      setError(
        "Failed to load risk analytics."
      );
    } finally {
      setLoading(false);
    }
  };

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
          p: { xs: 2, md: 2.5 },

          borderRadius: 4,

          border:
            "1px solid rgba(148, 163, 184, 0.14)",
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
            <Typography
              variant="h3"
              fontWeight={900}
            >
              Risk Analytics
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Drawdown and Sharpe ratio
              analytics powered by
              FastAPI and quantitative
              risk models.
            </Typography>
          </Box>

          <Button
            variant="contained"
            startIcon={<RefreshIcon />}
            onClick={loadRiskAnalytics}
            disabled={loading}
          >
            {loading
              ? "Loading..."
              : "Load Risk Analytics"}
          </Button>
        </Stack>

        <Paper
          elevation={0}
          sx={{
            p: 1.25,
            mt: 2.5,
            borderRadius: 4,
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
              onChange={(event) =>
                setTicker(
                  event.target.value
                )
              }
              sx={{
                minWidth: {
                  xs: "100%",
                  md: 220,
                },
              }}
            >
              {defaultTickers.map(
                (item) => (
                  <MenuItem
                    key={item}
                    value={item}
                  >
                    {item}
                  </MenuItem>
                )
              )}
            </TextField>

            <TextField
              select
              label="Period"
              value={period}
              onChange={(event) =>
                setPeriod(
                  event.target.value
                )
              }
              sx={{
                minWidth: {
                  xs: "100%",
                  md: 180,
                },
              }}
            >
              {periods.map((item) => (
                <MenuItem
                  key={item}
                  value={item}
                >
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
            md: "1fr 1fr",
          },

          gap: 3,
        }}
      >
        <MetricCard
          label="Max Drawdown"
          value={formatPercent(
            maxDrawdown
          )}
          subtitle="Largest portfolio decline"
        />

        <MetricCard
          label="Sharpe Ratio"
          value={formatNumber(
            sharpeRatio
          )}
          subtitle="Risk-adjusted return"
        />
      </Box>

      <Box sx={{ mt: 4 }}>
        <DrawdownChart
          data={drawdownData}
          loading={loading}
        />
      </Box>
    </Box>
  );
}