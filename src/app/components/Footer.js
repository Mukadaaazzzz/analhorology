import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "#002F6C",
        color: "white",
        textAlign: "center",
        padding: "1rem 0", // Reduced padding to decrease height
        marginTop: "2rem",
      }}
    >
      <Box>
        <IconButton
          component="a"
          href="https://www.facebook.com/hajiolayiwola.ajagun"
          target="_blank"
        >
          <Facebook sx={{ color: "white" }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.instagram.com/hajiolayiwolaajagun?igsh=YzljYTk1ODg3Zg=="
          target="_blank"
        >
          <Instagram sx={{ color: "white" }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/alhaji-olayiwola-8a3b95275?"
          target="_blank"
        >
          <LinkedIn sx={{ color: "white" }} />
        </IconButton>
        <IconButton component="a" href="mailto:alhajiolayiwola56@gmail.com">
          <Email sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
        © 2024 Anal Horology. Made in Mukadaz Labs.
      </Typography>
    </Box>
  );
};

export default Footer;
