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
      <Header />
    </Box>
  );
};

export default HeroSection;
