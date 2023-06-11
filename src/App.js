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
import Error404 from "./components/404";
import GetInvolved from "./pages/getInvolved";
import HomePageKinya from "./pages/kinya/homepageKinya";
import GetInvolvedKinya from "./pages/kinya/getInvolved";
// import { ChakraProvider } from '@chakra-ui/react'
// import { MantineProvider } from '@mantine/core';

function App() {
  return (
    // <ChakraProvider>
    // <MantineProvider withGlobalStyles withNormalizeCSS>

    <Router>
    {/* <Navbar/> */}
    <ScrollToTop>
      <div className="App">
        <Routes>

          {/* English */}
          <Route path="/" element={<HomePage />} />
          <Route path="/impactmodel" element={<ImpactModel />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/view" element={<HeroTemp />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<Error404 />} />

          {/* Kinyarwanda */}
          <Route path="/kinya" element={<HomePageKinya />} />
          <Route path="/kinya/getinvolved" element={<GetInvolvedKinya />} />
          
         
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
