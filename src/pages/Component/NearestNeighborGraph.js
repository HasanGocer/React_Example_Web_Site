import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { styled } from "@mui/system";
import { Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import "./ScorptAnimation.css"; // Stil dosyasını ayrı tutuyoruz

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

const width = 1300,
  height = 600;
const numSystems = 4;
const pointsPerSystem = 10;
const totalPoints = numSystems * pointsPerSystem;
const nearestNeighbors = 3;

const BackgroundContainer = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: theme.backgroundGradient,
  zIndex: -1,
});

const generatePoints = () => {
  return Array.from({ length: totalPoints }, (_, i) => ({
    id: i,
    x:
      (i % numSystems) * (width / numSystems) +
      Math.random() * (width / numSystems),
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
  }));
};

const NearestNeighborGraph = () => {
  const svgRef = useRef();
  const [nodes, setNodes] = useState(generatePoints);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const links = [];
    const calculateLinks = () => {
      links.length = 0;
      nodes.forEach((node, i) => {
        let distances = nodes.map((other, j) => ({
          id: j,
          distance: Math.hypot(node.x - other.x, node.y - other.y),
        }));
        distances.sort((a, b) => a.distance - b.distance);
        distances.slice(1, nearestNeighbors + 1).forEach((d) => {
          links.push({ source: i, target: d.id });
        });
      });
    };
    calculateLinks();

    const linkSelection = svg
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", theme.secondary);

    const nodeSelection = svg
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", 5)
      .attr("fill", theme.primary);

    const update = () => {
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (
          node.x <
            Math.floor(node.id / pointsPerSystem) * (width / numSystems) ||
          node.x >
            (Math.floor(node.id / pointsPerSystem) + 1) * (width / numSystems)
        )
          node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      });
      calculateLinks();
      linkSelection
        .data(links)
        .attr("x1", (d) => nodes[d.source].x)
        .attr("y1", (d) => nodes[d.source].y)
        .attr("x2", (d) => nodes[d.target].x)
        .attr("y2", (d) => nodes[d.target].y);
      nodeSelection.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    };
    d3.timer(update);
  }, [nodes]);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <BackgroundContainer />
      <svg
        ref={svgRef}
        width={width}
        height={height}
        style={{ position: "absolute" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
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
              Embrace the future with our exceptional approach, ensuring
              top-tier solutions for modern challenges.
            </Typography>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default NearestNeighborGraph;
