import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Navbar from "./components/navbar";
import AboutUs from "./components/aboutus";
import Footer from "./components/footer";
import Partnership from "./pages/partnership";

function App() {
  return (
    <Router>
    <Navbar/>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
