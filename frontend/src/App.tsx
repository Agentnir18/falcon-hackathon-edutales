import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Sitcoms from "./pages/Sitcoms";
import Generate from "./pages/Generate";
import About from "./pages/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/sitcoms" element={<Sitcoms />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {location.pathname !== "/generate" && <Footer />}
    </Router>
  );
};

export default App;