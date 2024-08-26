"use client";

import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image"; // Import Next.js Image component

const ShopNewArrivals = () => {
  return (
    <Box sx={{ padding: "4rem 2rem", backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Shop New Arrivals
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Men's Collection */}
        <Grid item xs={12} md={6}>
          <Box sx={{ position: "relative", height: 400 }}>
            <Image
              src="/path-to-mens-collection.jpg" // Replace with your image path
              alt="Men's Collection"
              fill
              sizes="(max-width: 768px) 100vw, 50vw" // Set sizes for responsive images
              style={{ objectFit: "cover" }} // Use style prop instead of objectFit
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#ffffff",
                padding: "1rem",
              }}
            >
              <Typography variant="h6" align="center">
                Shop Men Collection
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Women's Collection */}
        <Grid item xs={12} md={6}>
          <Box sx={{ position: "relative", height: 400 }}>
            <Image
              src="/path-to-womens-collection.jpg" // Replace with your image path
              alt="Women's Collection"
              fill
              sizes="(max-width: 768px) 100vw, 50vw" // Set sizes for responsive images
              style={{ objectFit: "cover" }} // Use style prop instead of objectFit
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#ffffff",
                padding: "1rem",
              }}
            >
              <Typography variant="h6" align="center">
                Shop Women Collection
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShopNewArrivals;
