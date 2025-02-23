import React, { useRef, useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const theme = {
  primary: "#00CFFF",
  secondary: "#00E5FF",
  backgroundGradient: "linear-gradient(135deg, #00B2E1, #00CFFF, #00E5FF)",
  text: "#FFFFFF",
};

const InnovateSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        height: "250px",
        textAlign: "center",
        py: 8,
      }}
      ref={sectionRef}
    >
      {inView && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h3" gutterBottom sx={{ color: theme.text }}>
            Ready to Innovate?
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              fontSize: "1.2rem",
              background: theme.primary,
              color: theme.text,
              padding: "12px 24px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
                background: theme.secondary,
              },
            }}
          >
            Get Started
          </Button>
        </motion.div>
      )}
    </Box>
  );
};

export default InnovateSection;
