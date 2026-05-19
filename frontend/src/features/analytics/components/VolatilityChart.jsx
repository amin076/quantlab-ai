import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Box, Paper, Skeleton, Typography } from "@mui/material";

export default function VolatilityChart({ data, loading }) {
  return (
    <Paper sx={{ p: 4, mt: 0, borderRadius: 4, width: "100%" }}>
      <Typography variant="h6" fontWeight={800} sx={{ mb: 2 }}>
        Rolling Volatility
      </Typography>

      {loading ? (
        <Skeleton variant="rounded" height={440} />
      ) : data?.length ? (
        <Box sx={{ width: "100%", height: { xs: 340, md: 440 } }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 24, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="Date" hide />
              <YAxis tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} width={60} />
              <Tooltip formatter={(value) => `${(Number(value) * 100).toFixed(2)}%`} />
              <Line type="monotone" dataKey="rolling_volatility" stroke="#f97316" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      ) : (
        <Typography color="text.secondary">Click Load / Refresh Analytics to load volatility data.</Typography>
      )}
    </Paper>
  );
}