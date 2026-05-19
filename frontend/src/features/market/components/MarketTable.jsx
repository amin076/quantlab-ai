import {
  Alert,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function formatMarketCap(value) {
  if (!value) return "N/A";

  if (value >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(1)}B`;
  }

  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(1)}M`;
  }

  return `$${value.toLocaleString()}`;
}

function formatPrice(price, currency) {
  if (!price) return "N/A";
  return `${Number(price).toFixed(2)} ${currency || ""}`;
}

export default function MarketTable({ stocks }) {
  if (!stocks || stocks.length === 0) {
    return (
      <Alert severity="warning" sx={{ mt: 3 }}>
        No stocks match the current search or database state.
      </Alert>
    );
  }

  return (
    <TableContainer
      component={Paper}
      sx={{
        mt: 3,
        border: "1px solid rgba(148, 163, 184, 0.14)",
        overflow: "hidden",
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Ticker</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Sector</TableCell>
            <TableCell align="right">Market Cap</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {stocks.map((stock) => (
            <TableRow
              key={stock.ticker}
              hover
              sx={{
                transition: "0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(56, 189, 248, 0.08)",
                },
              }}
            >
              <TableCell>
                <Chip label={stock.ticker} color="primary" size="small" />
              </TableCell>

              <TableCell>{stock.name || "N/A"}</TableCell>

              <TableCell>
                <Chip
                  label={stock.sector || "N/A"}
                  size="small"
                  color="secondary"
                  variant="outlined"
                />
              </TableCell>

              <TableCell align="right">
                {formatMarketCap(stock.market_cap)}
              </TableCell>

              <TableCell align="right">
                {formatPrice(stock.current_price, stock.currency)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}