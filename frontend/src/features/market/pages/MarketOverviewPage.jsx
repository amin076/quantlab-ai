import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import SyncIcon from "@mui/icons-material/Sync";

import MarketTable from "../components/MarketTable";
import { getDatabaseStocks, syncAsxTopStocks } from "../../../api/stocksApi";
function MetricCard({ label, value }) {
  return (
    <Paper sx={{ p: 3, height: "100%" }}>
      <Typography color="text.secondary" variant="body2">
        {label}
      </Typography>
      <Typography variant="h5" fontWeight={800} sx={{ mt: 1 }}>
        {value}
      </Typography>
    </Paper>
  );
}

export default function MarketOverviewPage() {
  const [stocks, setStocks] = useState([]);
  const [source, setSource] = useState("");
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState("");

  const loadStocks = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getDatabaseStocks();

      setStocks(data.stocks || []);
      setSource(data.source || "");
    } catch {
      setError("Failed to load stocks from backend database.");
    } finally {
      setLoading(false);
    }
  };

  const handleSync = async () => {
    try {
      setSyncing(true);
      setError("");

      await syncAsxTopStocks();
      await loadStocks();
    } catch {
      setError("Failed to sync ASX data. Please check the backend server.");
    } finally {
      setSyncing(false);
    }
  };

  useEffect(() => {
    loadStocks();
  }, []);

  return (
    <Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={2}
      >
        <Box>
          <Typography variant="h3" fontWeight={900}>
            Market Overview
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            Database-backed ASX market dashboard powered by FastAPI,
            SQLAlchemy, SQLite, and Yahoo Finance.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<SyncIcon />}
          onClick={handleSync}
          disabled={syncing}
        >
          {syncing ? "Syncing..." : "Sync ASX Data"}
        </Button>
      </Stack>

      {error && (
        <Alert severity="error" sx={{ mt: 3 }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} md={3}>
          <MetricCard label="Market" value="ASX" />
        </Grid>
        <Grid item xs={12} md={3}>
          <MetricCard label="Stored Stocks" value={stocks.length} />
        </Grid>
        <Grid item xs={12} md={3}>
          <MetricCard label="Data Source" value={source || "Database"} />
        </Grid>
        <Grid item xs={12} md={3}>
          <MetricCard label="Backend" value="FastAPI" />
        </Grid>
      </Grid>

      {loading ? (
        <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <MarketTable stocks={stocks} />
      )}
    </Box>
  );
}