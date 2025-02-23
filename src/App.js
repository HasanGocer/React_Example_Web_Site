import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage2 from "./pages/HomePage2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage2 />} />
      </Routes>
    </Router>
  );
}

export default App;
