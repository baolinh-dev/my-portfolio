import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
    const [activeSection, setActiveSection] = useState('home');
    const [homeElement, setHomeElement] = useState(null);
    const [aboutElement, setAboutElement] = useState(null);
    const [projectsElement, setProjectsElement] = useState(null);
    const [contactElement, setContactElement] = useState(null);
    const [headerElement, setHeaderElement] = useState(null);

    const handleClick = (event) => {
        const section = event.target.hash.substr(1);

        if (section === 'home') {
            scroll.scrollTo(homeElement.offsetTop);
        } else if (section === 'about') {
            scroll.scrollTo(aboutElement.offsetTop);
        } else if (section === 'projects') {
            scroll.scrollTo(projectsElement.offsetTop);
        } else if (section === 'contact') {
            scroll.scrollTo(contactElement.offsetTop);
        }
    };

    useEffect(() => {
        setHomeElement(document.getElementById('home'));
        setAboutElement(document.getElementById('about'));
        setProjectsElement(document.getElementById('projects'));
        setContactElement(document.getElementById('contact'));
        setHeaderElement(document.getElementById('header'));
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (homeElement && aboutElement && projectsElement && contactElement && headerElement) {
                const currentPosition = window.scrollY + headerElement.offsetHeight;
                console.log(currentPosition);
                if (
                    homeElement.offsetTop <= currentPosition &&
                    homeElement.offsetTop + homeElement.offsetHeight > currentPosition
                ) {
                    setActiveSection('home');
                } else if (
                    aboutElement.offsetTop <= currentPosition &&
                    aboutElement.offsetTop + aboutElement.offsetHeight > currentPosition
                ) {
                    setActiveSection('about');
                } else if (
                    projectsElement.offsetTop <= currentPosition &&
                    projectsElement.offsetTop + projectsElement.offsetHeight > currentPosition
                ) {
                    setActiveSection('projects');
                } else if (
                    contactElement.offsetTop <= currentPosition &&
                    contactElement.offsetTop + contactElement.offsetHeight > currentPosition
                ) {
                    setActiveSection('contact');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [homeElement, aboutElement, projectsElement, contactElement, headerElement]);

    return (
        <header id="header" className={cx('header')}>
            {/* Logo */}
            <div className={cx('logo')}>
                {/* <img /> */}
                <img src={process.env.PUBLIC_URL + '/logo.jpeg'} alt="logo" />
            </div>
            {/* Navigation */}
            <nav className={cx('nav')}>
                <ul>
                    <li>
                        <a
                            href="#home"
                            onClick={handleClick}
                            className={`${activeSection === 'home' ? 'active' : ''}${isDarkMode ? ' dark-header-link' : ''}`}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            onClick={handleClick}
                            className={`${activeSection === 'about' ? 'active' : ''}${isDarkMode ? ' dark-header-link' : ''}`}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            onClick={handleClick}
                            className={`${activeSection === 'projects' ? 'active' : ''}${isDarkMode ? ' dark-header-link' : ''}`}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={handleClick}
                            className={`${activeSection === 'contact' ? 'active' : ''}${isDarkMode ? ' dark-header-link' : ''}`}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
