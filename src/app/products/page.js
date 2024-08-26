import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const ProductPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 4,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Image
            src="/your-image.jpg"
            alt="Girl holding a laptop"
            width={500}
            height={800}
            style={{ borderRadius: "8px" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h3" gutterBottom>
            We are currently curating a selection of the finest luxury
            timepieces. Stay tuned!
          </Typography>
          <Button variant="contained" color="primary" component={Link} href="/">
            Back to Homepage
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductPage;
