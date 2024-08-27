import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        borderBottom: "none",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 2rem",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "#ffffff",
          }}
        >
          AnalHorology
        </Typography>
        <div>
          <Button
            color="inherit"
            sx={{
              color: "#ffffff",
              textTransform: "none",
              fontSize: "1rem",
              marginLeft: 2,
              marginRight: 2,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <Link href="/" style={{ textDecoration: "none", color: "#ffffff" }}>
              Home
            </Link>
          </Button>
          <span style={{ color: "#ffffff", margin: "0 0.5rem" }}>|</span>
          <Button
            color="inherit"
            sx={{
              color: "#ffffff",
              textTransform: "none",
              fontSize: "1rem",
              marginLeft: 2,
              marginRight: 2,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <Link
              href="/about"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              About
            </Link>
          </Button>
          <span style={{ color: "#ffffff", margin: "0 0.5rem" }}>|</span>
          <Button
            color="inherit"
            sx={{
              color: "#ffffff",
              textTransform: "none",
              fontSize: "1rem",
              marginLeft: 2,
              marginRight: 2,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <Link
              href="/products"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Products
            </Link>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
