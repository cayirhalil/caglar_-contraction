import React from "react";
import Header from "./pages/Header" 
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from "./pages/Banner";
import About from "./pages/About";
import Facts from "./pages/Facts";
import Services from "./pages/Services";
import ProjectArea from "./pages/ProjectArea";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
    return (



      <div>
     
      <Header />
      <Banner />
      <About />
      <Facts />
      <Services />
      <ProjectArea />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
          
       

    )
}

export default App