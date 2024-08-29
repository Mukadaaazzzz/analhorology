import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import WatchIcon from "@mui/icons-material/Watch";
import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";

const IntroductionSection = () => {
  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: "background.default",
        textAlign: { xs: "center", md: "center" },
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "bold",
          mb: 3,
          color: "text.primary",
        }}
      >
        The Best in Luxury Watches Since 1990
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 4,
          color: "text.secondary",
        }}
      >
        Analhorology has been a leader in the luxury watch market for over three
        decades, offering the finest timepieces crafted with precision and
        elegance.
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 2,
              borderRadius: "8px",
              boxShadow: 3,
              backgroundColor: "background.paper",
            }}
          >
            <WatchIcon sx={{ fontSize: 50, color: "primary.main" }} />
            <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
              Timeless Design
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Our watches combine classic elegance with modern style.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 2,
              borderRadius: "8px",
              boxShadow: 3,
              backgroundColor: "background.paper",
            }}
          >
            <StarIcon sx={{ fontSize: 50, color: "secondary.main" }} />
            <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
              Unmatched Quality
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Each timepiece is crafted with the utmost precision.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 2,
              borderRadius: "8px",
              boxShadow: 3,
              backgroundColor: "background.paper",
            }}
          >
            <VerifiedIcon sx={{ fontSize: 50, color: "success.main" }} />
            <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
              Trusted Excellence
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              We are recognized as leaders in luxury watches.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IntroductionSection;
