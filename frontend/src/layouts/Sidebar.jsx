import { Box, Stack, Typography } from "@mui/material";

const navItems = [
  "Market Overview",
  "Analytics",
  "Risk Metrics",
  "Portfolio",
  "Backtesting",
];

export default function Sidebar() {
  return (
    <Box
      component="aside"
      sx={{
        width: 280,
        minHeight: "100vh",
        p: 3,
        borderRight: "1px solid rgba(148, 163, 184, 0.16)",
        bgcolor: "rgba(15, 23, 42, 0.92)",
        display: { xs: "none", md: "block" },
      }}
    >
      <Typography variant="h5" fontWeight={900} sx={{ mb: 5 }}>
        QuantLab AI
      </Typography>

      <Stack spacing={1.5}>
        {navItems.map((item, index) => (
          <Box
            key={item}
            sx={{
              px: 2,
              py: 1.4,
              borderRadius: 2,
              color: index === 0 ? "text.primary" : "text.secondary",
              bgcolor: index === 0 ? "rgba(59, 130, 246, 0.18)" : "transparent",
              fontWeight: index === 0 ? 700 : 500,
            }}
          >
            {item}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}