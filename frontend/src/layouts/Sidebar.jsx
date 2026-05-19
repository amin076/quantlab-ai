import { Box, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    label: "Market Overview",
    path: "/market",
  },
  {
    label: "Analytics",
    path: "/analytics",
  },
  {
    label: "Risk Metrics",
    path: "/risk",
  },
  {
    label: "Portfolio",
    path: "/portfolio",
  },
  {
    label: "Backtesting",
    path: "/backtesting",
  },
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
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={{ textDecoration: "none" }}
          >
            {({ isActive }) => (
              <Box
                sx={{
                  px: 2,
                  py: 1.4,
                  borderRadius: 2,
                  color: isActive
                    ? "text.primary"
                    : "text.secondary",
                  bgcolor: isActive
                    ? "rgba(59, 130, 246, 0.18)"
                    : "transparent",
                  fontWeight: isActive ? 700 : 500,
                  transition: "0.2s ease",

                  "&:hover": {
                    bgcolor: "rgba(59, 130, 246, 0.12)",
                    color: "text.primary",
                  },
                }}
              >
                {item.label}
              </Box>
            )}
          </NavLink>
        ))}
      </Stack>
    </Box>
  );
}