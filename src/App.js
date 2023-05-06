import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Navbar from "./components/navbar";
import AboutUs from "./components/aboutus/aboutus";
import Footer from "./components/footer";
import Partnership from "./pages/partnership";
import ImpactModel from "./pages/impactModel";
import HeroTemp from "./components/herotemp";
import ScrollToTop from "./components/ScrollToTop";
import Resources from "./pages/resources";
// import { ChakraProvider } from '@chakra-ui/react'
// import { MantineProvider } from '@mantine/core';

function App() {
  return (
    // <ChakraProvider>
    // <MantineProvider withGlobalStyles withNormalizeCSS>

    <Router>
    <Navbar/>
    <ScrollToTop>
      <div className="App">
        <Routes>
        
          <Route path="/" element={<HomePage />} />
          <Route path="/impactmodel" element={<ImpactModel />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/view" element={<HeroTemp />} />
          <Route path="/resources" element={<Resources />} />
         
        </Routes>
       
      </div>
      </ScrollToTop>
      <Footer/>
    </Router>
  //   </MantineProvider>
  // </ChakraProvider>
  );
}

export default App;
