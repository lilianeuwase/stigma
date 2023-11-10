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
import ResourcesKinya from "./pages/kinya/resourcesKinya";
import ImpactModelKinya from "./pages/kinya/impactModelKinya";
import PartnershipKinya from "./pages/kinya/partnershipKinya";
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
          <Route path="/kinyagetinvolved" element={<GetInvolvedKinya />} />
          <Route path="/kinyaresources" element={<ResourcesKinya />} />
          <Route path="/kinyaimpactmodel" element={<ImpactModelKinya />} />
          <Route path="/kinyaimpactmodel" element={<ImpactModelKinya />} />
          <Route path="/kinyapartnership" element={<PartnershipKinya />} />
          
         
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
