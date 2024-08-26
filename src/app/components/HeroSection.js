import React from "react";
import { Box, Typography, Fade } from "@mui/material";
import Header from "./Header"; // Adjust the path as needed

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: "url('/path-to-hero-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#ffffff",
        textAlign: "center",
      }}
    >
      <Header /> {/* Header inside the hero section */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fade in timeout={2000}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "bold",
              animation: "fadeIn 3s ease-in-out",
              "@keyframes fadeIn": {
                "0%": { opacity: 0, transform: "translateY(20px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            Inspiring Luxury, Timeless Elegance
          </Typography>
        </Fade>
      </Box>
    </Box>
  );
};

export default HeroSection;
