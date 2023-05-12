import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';

function App() { 
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => { 
        AOS.init({ duration: 1000 });
        const header = document.querySelector('#header');
        const links = header.querySelectorAll('a');

        if (isDarkMode) {
            document.body.classList.add('dark');
            header.classList.add('dark-header');
            links.forEach((link) => {
                link.classList.add('dark-header');
            });
        } else {
            document.body.classList.remove('dark');
            header.classList.remove('dark-header');
            links.forEach((link) => {
                link.classList.remove('dark-header');
            });
        }
    }, [isDarkMode]);



    function handleToggleClick() {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <>
            <Header />
            <DarkModeToggle onClick={handleToggleClick} />
            <Home />
            <About />
            <Projects />
            <Contact />
        </>
    );
}

export default App;
