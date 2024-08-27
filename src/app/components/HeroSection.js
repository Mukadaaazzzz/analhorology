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
          marginTop: { xs: "10rem", md: "12rem" }, // Moves text down
        }}
      >
        <Fade in timeout={2000}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontFamily: "'Share Tech Mono', monospace",
              fontWeight: "bold",
              fontSize: { xs: "2.5rem", md: "4rem" },
              animation: "fadeIn 3s ease-in-out",
              "@keyframes fadeIn": {
                "0%": { opacity: 0, transform: "translateY(20px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <span style={{ color: "#ADD8E6" }}>Be_yond</span>
            <span style={{ color: "#ffffff" }}>Time</span>
          </Typography>
        </Fade>
      </Box>
    </Box>
  );
};

export default HeroSection;
