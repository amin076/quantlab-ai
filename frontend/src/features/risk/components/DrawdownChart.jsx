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

export default function DrawdownChart({ data, loading }) {
  return (
    <Paper sx={{ p: 4, borderRadius: 4, width: "100%" }}>
      <Typography variant="h6" fontWeight={800} sx={{ mb: 2 }}>
        Drawdown Analysis
      </Typography>

      {loading ? (
        <Skeleton variant="rounded" height={460} />
      ) : data?.length ? (
        <Box sx={{ width: "100%", height: { xs: 360, md: 460 } }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 10, right: 24, left: 8, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="Date" hide />
              <YAxis
                tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
                width={60}
              />
              <Tooltip
                formatter={(value) => `${(Number(value) * 100).toFixed(2)}%`}
              />
              <Line
                type="monotone"
                dataKey="drawdown"
                stroke="#ef4444"
                strokeWidth={2.5}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      ) : (
        <Typography color="text.secondary">
          Click Load Risk Analytics to load drawdown data.
        </Typography>
      )}
    </Paper>
  );
}