import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const [activeSection, setActiveSection] = useState('');

    const handleClick = (event) => {
        const section = event.target.hash.substr(1);
        setActiveSection(section);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            const homeElement = document.getElementById('home');
            const aboutElement = document.getElementById('about');
            const skillsElement = document.getElementById('skills');
            const projectsElement = document.getElementById('projects');
            const contactElement = document.getElementById('contact');

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
                skillsElement.offsetTop <= currentPosition &&
                skillsElement.offsetTop + skillsElement.offsetHeight > currentPosition
            ) {
                setActiveSection('skills');
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
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={cx('header')}>
            {/* Logo */}
            <div className={cx('logo')}>
                {/* <img /> */}
                Logo
            </div>
            {/* Navigation */}
            <nav className={cx('nav')}>
                <ul>
                    <li>
                        <a href="#home" onClick={handleClick} className={activeSection === 'home' ? 'active' : ''}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={handleClick} className={activeSection === 'about' ? 'active' : ''}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#skills" onClick={handleClick} className={activeSection === 'skills' ? 'active' : ''}>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            onClick={handleClick}
                            className={activeSection === 'projects' ? 'active' : ''}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={handleClick}
                            className={activeSection === 'contact' ? 'active' : ''}
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