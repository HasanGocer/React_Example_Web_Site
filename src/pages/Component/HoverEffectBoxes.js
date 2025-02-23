import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const theme = {
  primary: "#00CFFF",
  secondary: "#00E5FF",
  backgroundGradient: "linear-gradient(135deg, #00B2E1, #00CFFF, #00E5FF)",
  text: "#FFFFFF",
};

const images = [
  "https://picsum.photos/800/600?random=1",
  "https://picsum.photos/800/600?random=2",
  "https://picsum.photos/800/600?random=3",
  "https://picsum.photos/800/600?random=4",
];

const HoverEffectBoxes = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box display="flex" justifyContent="center" gap={2} p={4}>
      {images.map((img, index) => (
        <motion.div
          key={index}
          style={{ flex: 1, position: "relative", overflow: "hidden" }}
          whileHover={{ flex: 3 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Box
            sx={{
              position: "relative",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
              cursor: "pointer",
              filter:
                hoveredIndex !== null && hoveredIndex !== index
                  ? "blur(5px)"
                  : "blur(0px)",
              transition: "filter 0.3s ease-in-out",
            }}
          >
            <img
              src={img}
              alt="Random"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                display: "block",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: theme.text,
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              }}
            >
              Lorem ipsum dolor sit amet
            </Typography>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
};

export default HoverEffectBoxes;
