// src/App.tsx
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Sitcoms from "./pages/Sitcoms";
import Generate from "./pages/Generate";
import About from "./pages/About";
import Footer from "./components/Footer";
import CardDetail from "./components/CardDetail";

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/generate" && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/sitcoms" element={<Sitcoms />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/about" element={<About />} />
        <Route path="/card/:id" element={<CardDetail />} />
      </Routes>
      {location.pathname !== "/generate" && <Footer />}
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
