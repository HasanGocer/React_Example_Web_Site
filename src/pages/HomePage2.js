import React, { useState, useMemo } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Link,
  Typography,
  Container,
} from "@mui/material";

import LightboxGallery from "./Component/LightboxGallery";
import HoverEffectBoxes from "./Component/HoverEffectBoxes";
import NearestNeighborGraph from "./Component/NearestNeighborGraph";
import WhyChooseUs from "./Component/WhyChooseUs";
import IllusionComponent from "./Component/IllusionComponent";
import RotatingSphere from "./Component/RotatingSphere";
import InnovateSection from "./Component/InnovateSection";
import MouseLight from "./Component/MouseLight";
import GradientBackgroundComponent from "./Component/GradientBackgroundComponent";
import AnimatedList from "./Component/AnimatedList";
import Header from "./Component/Header";

import "@fontsource/poppins";

const lightTheme = {
  primary: "#00CFFF",
  secondary: "#00E5FF",
  backgroundGradient: "linear-gradient(135deg, #00B2E1, #00CFFF, #00E5FF)",
  text: "#FFFFFF",
};

const darkTheme = {
  primary: "#1E1E1E",
  secondary: "#333333",
  backgroundGradient: "linear-gradient(135deg, #121212, #1E1E1E, #333333)",
  text: "#FFFFFF",
};

const itemsSequence = [
  ["AI", "Blockchain", "Cloud Computing"],
  ["AI", "Cloud Computing"],
  ["AI", "Quantum Computing", "Cloud Computing"],
];

export default function HomePage2() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
          primary: {
            main: isDarkMode ? darkTheme.primary : lightTheme.primary,
          },
          secondary: {
            main: isDarkMode ? darkTheme.secondary : lightTheme.secondary,
          },
          text: {
            primary: isDarkMode ? darkTheme.text : lightTheme.text,
          },
          background: {
            default: isDarkMode
              ? darkTheme.backgroundGradient
              : lightTheme.backgroundGradient,
          },
        },
      }),
    [isDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GradientBackgroundComponent isDarkMode={isDarkMode}>
        <Header
          theme={isDarkMode ? darkTheme : lightTheme}
          isDarkMode={isDarkMode}
          toggleTheme={() => setIsDarkMode(!isDarkMode)}
        />
        <MouseLight />
        <NearestNeighborGraph />
        <HoverEffectBoxes />
        <IllusionComponent />
        <RotatingSphere />
        <LightboxGallery />
        <WhyChooseUs />
        <AnimatedList itemsList={itemsSequence} />
        <InnovateSection />

        <Box
          component="footer"
          sx={{
            background: isDarkMode
              ? darkTheme.backgroundGradient
              : lightTheme.backgroundGradient,
            color: isDarkMode ? darkTheme.text : lightTheme.text,
            width: "100%",
            boxShadow: "0 -4px 15px rgba(0, 229, 255, 0.4)",
            padding: "20px 0",
            textAlign: "center",
            marginTop: "auto",
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="body2">
              © {new Date().getFullYear()} Ad Astra. All Rights Reserved.
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Link
                href="#"
                sx={{
                  color: isDarkMode ? darkTheme.text : lightTheme.text,
                  mx: 2,
                  textDecoration: "none",
                  fontWeight: "bold",
                  "&:hover": {
                    color: isDarkMode
                      ? darkTheme.secondary
                      : lightTheme.secondary,
                    textShadow: "0 0 8px #00E5FF",
                    transition: "color 0.3s, text-shadow 0.3s",
                  },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                sx={{
                  color: isDarkMode ? darkTheme.text : lightTheme.text,
                  mx: 2,
                  textDecoration: "none",
                  fontWeight: "bold",
                  "&:hover": {
                    color: isDarkMode
                      ? darkTheme.secondary
                      : lightTheme.secondary,
                    textShadow: "0 0 8px #00E5FF",
                    transition: "color 0.3s, text-shadow 0.3s",
                  },
                }}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                sx={{
                  color: isDarkMode ? darkTheme.text : lightTheme.text,
                  mx: 2,
                  textDecoration: "none",
                  fontWeight: "bold",
                  "&:hover": {
                    color: isDarkMode
                      ? darkTheme.secondary
                      : lightTheme.secondary,
                    textShadow: "0 0 8px #00E5FF",
                    transition: "color 0.3s, text-shadow 0.3s",
                  },
                }}
              >
                Contact Us
              </Link>
            </Box>
          </Container>
        </Box>
      </GradientBackgroundComponent>
    </ThemeProvider>
  );
}
