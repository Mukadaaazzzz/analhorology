import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const testimonials = [
  {
    name: "Taofeeq Mukadaz",
    text: "Analhorology offers unparalleled quality. My watch has been a symbol of elegance for years.",
  },
  {
    name: "Oyinkansola Fathia",
    text: "The craftsmanship is outstanding. Every detail of my watch speaks luxury.",
  },
  {
    name: "Adeleke Muhammed",
    text: "Exceptional service and incredible watches. A must-have for any watch lover.",
  },
  {
    name: "Adeleke Mubarak",
    text: "I'm thrilled with my purchase. The best luxury watch experience I've ever had.",
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "background.default" }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 6,
        }}
      >
        What Our Customers Say
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "background.paper",
                borderRadius: "16px",
                boxShadow: 5,
                padding: 2,
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    mb: 2,
                    fontWeight: "bold",
                    color: "primary.main",
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    textAlign: "center",
                  }}
                >
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
