import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Stats from "./pages/Stats";
import Travel from "./pages/Travel";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/NBA-Stats" element={<Stats />} />
          <Route path="/Travel-Expense-Tracker" element={<Travel />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
