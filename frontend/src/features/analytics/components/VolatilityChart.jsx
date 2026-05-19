import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Paper, Typography } from "@mui/material";

export default function VolatilityChart({ data }) {
  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" fontWeight={800} sx={{ mb: 2 }}>
        Rolling Volatility
      </Typography>

      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="Date" hide />
            <YAxis domain={["auto", "auto"]} tickFormatter={(v) => `${(v * 100).toFixed(0)}%`} />
            <Tooltip formatter={(value) => `${(Number(value) * 100).toFixed(2)}%`} />
            <Line
              type="monotone"
              dataKey="rolling_volatility"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
}