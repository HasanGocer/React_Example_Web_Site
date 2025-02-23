import { useState, useEffect } from "react";
import { IconButton, Switch } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const themes = {
  light: {
    background: "bg-white",
    text: "text-black",
  },
  dark: {
    background: "bg-gray-900",
    text: "text-white",
  },
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.className = themes[theme].background;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`h-screen flex items-center justify-center ${themes[theme].background} ${themes[theme].text}`}
    >
      <div className="flex items-center space-x-4 bg-gray-300 p-3 rounded-full shadow-lg transition-all">
        <Brightness4 className="text-gray-700" />
        <Switch
          checked={theme === "dark"}
          onChange={toggleTheme}
          color="default"
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "#fbbf24",
            },
            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "#fbbf24",
            },
          }}
        />
        <Brightness7 className="text-yellow-500" />
      </div>
    </div>
  );
}
