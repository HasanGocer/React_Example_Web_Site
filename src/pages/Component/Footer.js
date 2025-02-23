import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";

const theme = {
  primary: "#00CFFF", // Çok canlı turkuaz-mavi
  secondary: "#00E5FF", // Neon turkuaz
  backgroundGradient: "linear-gradient(135deg, #00B2E1, #00CFFF, #00E5FF)", // Parlak mavi-turkuaz geçişleri
  text: "#FFFFFF", // Beyaz, yüksek kontrast için
};

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        textAlign: "center",
        py: 4,
        background: "#0A192F",
        opacity: 0.9,
        position: "absolute",
        bottom: 0,
        left: 0,
      }}
    >
      <Typography variant="body2">
        &copy; 2025 HG. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
