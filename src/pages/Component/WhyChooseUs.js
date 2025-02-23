import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import ParallaxTilt from "react-parallax-tilt";

const theme = {
  primary: "#00CFFF",
  secondary: "#00E5FF",
  backgroundGradient: "linear-gradient(135deg, #00B2E1, #00CFFF, #00E5FF)",
  text: "#FFFFFF",
};

const features = ["Innovation", "Technology", "Sustainability", "Performance"];

const WhyChooseUs = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{ color: theme.text }}
      >
        Why Choose Us?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ParallaxTilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.2}
            >
              <motion.div whileHover={{ scale: 1.1 }}>
                <Card
                  sx={{
                    background: "rgba(10, 25, 47, 0.8)",
                    backdropFilter: "blur(15px)",
                    color: theme.text,
                    borderRadius: "12px",
                    padding: "20px",
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ color: theme.secondary }}
                    >
                      {feature}
                    </Typography>
                    <Typography sx={{ color: theme.text }}>
                      Embrace the future with our exceptional approach, ensuring
                      top-tier solutions for modern challenges.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </ParallaxTilt>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WhyChooseUs;
