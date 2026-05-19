import {
  Alert,
  Box,
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

export default function MarketTable({ stocks }) {
  if (!stocks || stocks.length === 0) {
    return (
      <Alert severity="info">
        No database-backed stock data available. Run the sync action first.
      </Alert>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
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
            <TableRow key={stock.ticker} hover>
              <TableCell>
                <Chip label={stock.ticker} color="primary" size="small" />
              </TableCell>
              <TableCell>{stock.name || "N/A"}</TableCell>
              <TableCell>{stock.sector || "N/A"}</TableCell>
              <TableCell align="right">
                {formatMarketCap(stock.market_cap)}
              </TableCell>
              <TableCell align="right">
                {stock.current_price
                  ? `${stock.current_price} ${stock.currency || ""}`
                  : "N/A"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}