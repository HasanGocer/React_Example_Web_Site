import { useState } from "react";
import { Dialog, IconButton, Grid, Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Close as CloseIcon } from "@mui/icons-material";

const images = [
  "https://picsum.photos/800/600",
  "https://picsum.photos/801/601",
  "https://picsum.photos/802/602",
  "https://picsum.photos/803/603",
];

export default function LightboxGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Box sx={{ width: "80%", mx: "auto", p: 4 }}>
      <Grid container spacing={3}>
        {images.map((img, index) => (
          <Grid item xs={6} key={index}>
            <motion.img
              src={img}
              className="cursor-pointer shadow-lg"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "16px", // Köşeleri yuvarlatma
              }}
              onClick={() => setSelectedImage(img)}
              whileHover={{ scale: 1.05 }}
            />
          </Grid>
        ))}
      </Grid>

      <AnimatePresence>
        {selectedImage && (
          <Dialog
            open={Boolean(selectedImage)}
            onClose={() => setSelectedImage(null)}
            fullWidth
            maxWidth="md"
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              },
            }}
          >
            <IconButton
              sx={{ position: "absolute", top: 16, right: 16, color: "white" }}
              onClick={() => setSelectedImage(null)}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
            <motion.img
              src={selectedImage}
              alt="Selected"
              style={{
                maxHeight: "80vh",
                maxWidth: "100%",
                borderRadius: "8px",
              }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </Dialog>
        )}
      </AnimatePresence>
    </Box>
  );
}
