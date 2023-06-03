import Toggle from 'react-toggle';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DarkModeToggle.module.scss';

const cx = classNames.bind(styles);

function DarkModeToggle({ notext }) {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('isDarkMode') === 'true' ? true : false);
    useEffect(() => {
        localStorage.setItem('isDarkMode', isDarkMode);
    }, [isDarkMode]);

    useEffect(() => {
        const body = document.body;
        const links = body.querySelectorAll('a'); // Lấy tất cả thẻ <a> nằm trong thẻ <body>  \
        const buttons = body.querySelectorAll('button'); // Lấy tất cả thẻ <p> nằm trong thẻ <body>
        const navs = body.querySelectorAll('nav');  

        console.log(navs); 

        const header = document.querySelector('#header');

        if (isDarkMode) {
            body.classList.add('dark'); 
            links.forEach((link) => {
                link.classList.add('dark-header-link');
            }); 
            buttons.forEach((button) => {
                button.classList.add('dark-header-link');
            });  
            navs.forEach((nav) => {
                nav.classList.add('dark-header');
            }); 
            header.classList.add('dark-header'); 
        } else {
            body.classList.remove('dark'); 
            links.forEach((link) => {
                link.classList.remove('dark-header-link');
            }); 
            buttons.forEach((button) => {
                button.classList.remove('dark-header-link');
            }); 
            navs.forEach((nav) => {
                nav.classList.remove('dark-header');
            }); 
            header.classList.remove('dark-header');
        }
    }, [isDarkMode]);

    function handleToggleChange() {
        setIsDarkMode(!isDarkMode);
    }
    return (
        <div className={cx('dark-mode-toggle')}>
            <Toggle
                defaultChecked={isDarkMode}
                icons={false}
                onChange={handleToggleChange}
                style={{ marginRight: '8px' }}
            />
            {!notext && <span className={cx('text')}>{isDarkMode ? 'Dark mode ' : 'Light mode '}</span>}
        </div>
    );
}

export default DarkModeToggle;
