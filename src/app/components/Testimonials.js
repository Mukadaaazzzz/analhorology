import React from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

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
    <Box sx={{ p: 4, backgroundColor: "background.default" }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
        }}
      >
        What Our Customers Say
      </Typography>
      <Carousel
        indicators={false}
        navButtonsAlwaysInvisible={false}
        animation="slide"
        autoPlay={true}
        interval={4000}
      >
        {testimonials.map((item, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
              p: 2,
              backgroundColor: "background.paper",
              borderRadius: "8px",
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h6"
              component="h3"
              sx={{ mb: 2, fontWeight: "bold" }}
            >
              {item.name}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {item.text}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Testimonials;
