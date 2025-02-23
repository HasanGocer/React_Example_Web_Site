import React from "react";
import { Box, useTheme } from "@mui/material";
import { styled } from "@mui/system";

const GradientBackground = styled(Box)(({ isDarkMode, theme }) => ({
  background: isDarkMode
    ? "linear-gradient(135deg, #1C1C1C, #2E2E2E, #3D3D3D)" // Dark Mode renkleri
    : "linear-gradient(135deg, #007A99, #0094B8, #00A3CC)", // Light Mode renkleri
  minHeight: "100vh",
  color: isDarkMode ? "#F5F5F5" : "#E0F7FA",
  fontFamily: "Poppins, sans-serif",
  paddingBottom: "50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
}));

const GradientBackgroundComponent = ({ children, isDarkMode = false }) => {
  // useTheme burada kullanılıyor, theme prop olarak geçilmiyor!
  const theme = useTheme();
  return (
    <GradientBackground isDarkMode={isDarkMode}>{children}</GradientBackground>
  );
};

export default GradientBackgroundComponent;
