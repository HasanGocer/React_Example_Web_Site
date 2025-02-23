import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ReactSwitch from "react-switch";

const Header = ({ theme, isDarkMode, toggleTheme }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: theme.backgroundGradient,
          color: theme.text,
          transition: "transform 0.3s",
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
          boxShadow: "0 4px 15px rgba(0, 229, 255, 0.4)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <img
                src="/adsatralogo.png"
                alt="Logo"
                style={{ height: "50px" }}
              />
            </Box>
            <Box>
              <Link
                href="#"
                color="inherit"
                sx={{
                  mx: 2,
                  textDecoration: "none",
                  color: theme.text,
                  fontWeight: "bold",
                  "&:hover": {
                    color: theme.secondary,
                    transition: "color 0.3s",
                  },
                }}
              >
                Home
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{
                  mx: 2,
                  textDecoration: "none",
                  color: theme.text,
                  fontWeight: "bold",
                  "&:hover": {
                    color: theme.secondary,
                    transition: "color 0.3s",
                  },
                }}
              >
                About
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{
                  mx: 2,
                  textDecoration: "none",
                  color: theme.text,
                  fontWeight: "bold",
                  "&:hover": {
                    color: theme.secondary,
                    transition: "color 0.3s",
                  },
                }}
              >
                Contact
              </Link>
            </Box>
            <Box sx={{ ml: 2 }}>
              <ReactSwitch
                checked={isDarkMode}
                onChange={toggleTheme}
                offColor="#00CFFF"
                onColor="#1E1E1E"
                checkedIcon={
                  <span
                    style={{
                      color: "#FFD700",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 18,
                    }}
                  >
                    ☾
                  </span>
                }
                uncheckedIcon={
                  <span
                    style={{
                      color: "#FFF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 18,
                    }}
                  >
                    ☀
                  </span>
                }
                handleDiameter={30}
                height={20}
                width={50}
                activeBoxShadow="0 0 2px 3px #00CFFF"
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
