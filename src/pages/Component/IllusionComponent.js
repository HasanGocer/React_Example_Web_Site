import React from "react";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/system";

const theme = {
  primary: "#00CFFF",
  secondary: "#00E5FF",
  backgroundGradient: "linear-gradient(135deg, #00B2E1, #00CFFF, #00E5FF)",
  text: "#FFFFFF",
};

const ScorptLight = styled(motion.div)({
  fontSize: "4rem",
  fontWeight: "bold",
  color: theme.secondary,
  textTransform: "uppercase",
  position: "relative",
  display: "inline-block",
  background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary}, ${theme.primary})`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "shimmer 3s infinite alternate ease-in-out",
  "@keyframes shimmer": {
    "0%": {
      textShadow: `0px 0px 10px ${theme.secondary}`,
    },
    "100%": {
      textShadow: `0px 0px 30px ${theme.primary}`,
    },
  },
});

const IllusionComponent = () => {
  return (
    <Container
      sx={{
        textAlign: "center",
        pt: 10,
        pb: 8,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ScorptLight
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.1, 1],
            textShadow: [
              `0px 0px 20px ${theme.secondary}`,
              `0px 0px 40px ${theme.primary}`,
              `0px 0px 20px ${theme.secondary}`,
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          İllusion
        </ScorptLight>
        <Typography
          variant="h6"
          sx={{
            maxWidth: "600px",
            margin: "auto",
            opacity: 0.8,
            color: theme.text,
          }}
        >
          Embrace the future with our exceptional approach, ensuring top-tier
          solutions for modern challenges.
        </Typography>
      </motion.div>
    </Container>
  );
};

export default IllusionComponent;
