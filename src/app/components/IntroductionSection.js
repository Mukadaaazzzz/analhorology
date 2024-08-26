import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const IntroductionSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        p: 4,
        backgroundColor: "background.default",
      }}
    >
      <Box sx={{ flex: 1, mb: { xs: 2, md: 0 }, pr: { md: 2 } }}>
        <Image
          src="/path-to-introduction-image.jpg"
          alt="Luxury Watch"
          width={500}
          height={500}
          style={{ borderRadius: "8px" }}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          The Best in Luxury Watches Since 1990
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: { xs: "center", md: "left" },
            color: "text.secondary",
          }}
        >
          Analhorology has been a leader in the luxury watch market for over
          three decades, offering the finest timepieces crafted with precision
          and elegance.
        </Typography>
      </Box>
    </Box>
  );
};

export default IntroductionSection;
