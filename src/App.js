import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

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
