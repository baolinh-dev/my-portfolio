import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() { 
    AOS.init({ duration: 1000 });





    return (
        <>
            <Header />
            
            <Home />
            <About />
            <Projects />
            <Contact />
        </>
    );
}

export default App;
