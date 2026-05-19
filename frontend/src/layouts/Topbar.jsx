import { Box, Typography } from "@mui/material";

export default function Topbar() {
  return (
    <Box
      component="header"
      sx={{
        height: 72,
        display: "flex",
        alignItems: "center",
        px: { xs: 2, md: 4 },
        borderBottom: "1px solid rgba(148, 163, 184, 0.16)",
        bgcolor: "rgba(2, 6, 23, 0.72)",
        backdropFilter: "blur(12px)",
      }}
    >
      <Box>
        <Typography fontWeight={800}>
          ASX Financial Analytics Platform
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Database-backed market intelligence dashboard
        </Typography>
      </Box>
    </Box>
  );
}