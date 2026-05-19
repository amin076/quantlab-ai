import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import SyncIcon from "@mui/icons-material/Sync";

import MetricCard from "../../../components/cards/MetricCard";
import SearchBar from "../../../components/common/SearchBar";
import MarketTable from "../components/MarketTable";
import { getDatabaseStocks, syncAsxTopStocks } from "../../../api/stocksApi";

export default function MarketOverviewPage() {
  const [stocks, setStocks] = useState([]);
  const [source, setSource] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState("");

  const filteredStocks = stocks.filter((stock) => {
    const searchValue = search.toLowerCase();

    return (
      stock.ticker?.toLowerCase().includes(searchValue) ||
      stock.name?.toLowerCase().includes(searchValue) ||
      stock.sector?.toLowerCase().includes(searchValue)
    );
  });

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
          <MetricCard label="Market" value="ASX" subtitle="Australian equities" />
        </Grid>

        <Grid item xs={12} md={3}>
          <MetricCard
            label="Stored Stocks"
            value={stocks.length}
            subtitle={`${filteredStocks.length} visible`}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <MetricCard label="Data Source" value={source || "Database"} />
        </Grid>

        <Grid item xs={12} md={3}>
          <MetricCard label="Backend" value="FastAPI" subtitle="SQLite-backed API" />
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search ticker, company, or sector..."
        />
      </Box>

      {loading ? (
        <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <MarketTable stocks={filteredStocks} />
      )}
    </Box>
  );
}