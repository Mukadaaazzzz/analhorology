"use client";

import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Playfair_Display, Roboto } from "next/font/google";

// Load Google Fonts
const playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

// Create a theme to apply font styles globally
const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    h3: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 700,
      color: "#000000",
    },
    body1: {
      fontFamily: roboto.style.fontFamily,
      fontSize: "1.1rem",
      lineHeight: "1.8",
      textAlign: "left",
      color: "#000000",
    },
    h6: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 700,
      fontSize: "1.4rem",
      textAlign: "left",
      color: "#000000",
    },
    body2: {
      fontFamily: roboto.style.fontFamily,
      fontSize: "1rem",
      fontStyle: "italic",
      textAlign: "left",
      color: "#000000",
    },
  },
});

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          backgroundImage: "url('/path-to-background-image.jpg')", // Replace with your background image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "4rem 2rem",
        }}
      >
        {/* Back to Homepage Icon */}
        <Box
          sx={{ position: "absolute", top: "1rem", left: "1rem", zIndex: 3 }}
        >
          <Link href="/">
            <IconButton sx={{ color: "#000000" }}>
              <ArrowBackIcon fontSize="large" />
            </IconButton>
          </Link>
        </Box>

        {/* Content Container */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Adding a subtle white background to the content
            padding: "2rem",
            borderRadius: "10px",
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ marginBottom: "1rem" }}>
                ANAL HOROLOGY
              </Typography>
              <Typography variant="body1">
                With a distinguished history dating back to 1990, ANAL HOROLOGY
                has been a prominent name in the world of luxury timepieces.
                Over the years, we have forged successful partnerships with
                renowned brands such as Nivada Times, Century Times and Candino.
                <br />
                <br />
                In response to the evolving dynamics of the luxury watch market,
                ANAL HOROLOGY is poised to undertake a strategic shift. Our
                mission is to introduce quality watches to the discerning
                clientele in Nigeria through a dynamic online presence. This
                venture will enable us to showcase the exquisite craftsmanship,
                precision engineering, and exclusivity that define our brand.
              </Typography>
              <Typography variant="h6" sx={{ marginTop: "2rem" }}>
                Alhaji Olayiwola Ajagun
              </Typography>
              <Typography variant="body2">CEO and Founder</Typography>
            </Grid>

            {/* Founder Image */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "50%",
                  overflow: "hidden",
                  width: "250px",
                  height: "250px",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Image
                  src="/path-to-founder-image.jpg" // Replace with your founder's image path
                  alt="Alhaji Olayiwola Ajagun"
                  width={250}
                  height={250}
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default About;
