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

export default function PriceChart({ data, loading }) {
  return (
    <Paper sx={{ p: 4, mt: 0, borderRadius: 4, width: "100%" }}>
      <Typography variant="h6" fontWeight={800} sx={{ mb: 2 }}>
        Historical Close Price
      </Typography>

      {loading ? (
        <Skeleton variant="rounded" height={560} />
      ) : data?.length ? (
        <Box sx={{ width: "100%", height: { xs: 360, md: 560 } }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 24, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="Date" hide />
              <YAxis domain={["auto", "auto"]} width={60} />
              <Tooltip />
              <Line type="monotone" dataKey="Close" stroke="#38bdf8" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      ) : (
        <Typography color="text.secondary">Click Load / Refresh Analytics to load price data.</Typography>
      )}
    </Paper>
  );
}