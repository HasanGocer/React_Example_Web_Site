import React from "react";
import { Box } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const theme = {
  primary: "#00CFFF",
  secondary: "#00E5FF",
  backgroundGradient: "linear-gradient(135deg, #00B2E1, #00CFFF, #00E5FF)",
  text: "#FFFFFF",
};

const RotatingSphere = () => {
  return (
    <Box
      sx={{
        height: "500px",
        textAlign: "center",
        marginTop: "-100px",
      }}
    >
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Sphere args={[1.5, 100, 100]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color={theme.secondary}
            distort={0.6}
            speed={3}
          />
        </Sphere>
      </Canvas>
    </Box>
  );
};

export default RotatingSphere;
