import { Paper, Typography } from "@mui/material";

export default function MetricCard({ label, value, subtitle }) {
  return (
    <Paper
      sx={{
        p: 3,
        height: "100%",
        border: "1px solid rgba(148, 163, 184, 0.14)",
        background:
          "linear-gradient(180deg, rgba(15,23,42,0.92), rgba(15,23,42,0.72))",
        backdropFilter: "blur(12px)",
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 1 }}
      >
        {label}
      </Typography>

      <Typography
        variant="h4"
        fontWeight={900}
        sx={{ mb: subtitle ? 1 : 0 }}
      >
        {value}
      </Typography>

      {subtitle && (
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </Paper>
  );
}