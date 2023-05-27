import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DarkModeToggle.module.scss';
import Toggle from 'react-toggle';
const cx = classNames.bind(styles);

function DarkModeToggle({ notext }) {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('isDarkMode') === 'true' ? true : false);
    useEffect(() => {
        localStorage.setItem('isDarkMode', isDarkMode);
    }, [isDarkMode]);

    useEffect(() => {
        const header = document.querySelector('#header');
        const headerNavMobile = document.querySelector('#header .nav-mobile');

        const links = header.querySelectorAll('a');

        if (isDarkMode) {
            document.body.classList.add('dark');
            header.classList.add('dark-header');
            headerNavMobile && headerNavMobile.classList.add('dark-header');
            links.forEach((link) => {
                link.classList.add('dark-header-link');
            });
        } else {
            document.body.classList.remove('dark');
            header.classList.remove('dark-header');
            headerNavMobile && headerNavMobile.classList.remove('dark-header');
            links.forEach((link) => {
                link.classList.remove('dark-header-link');
            });
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
                style={{ marginRight: '8px'}}
            />
            {!notext && <span className={cx('text')}>{isDarkMode ? 'Dark mode ' : 'Light mode '}</span>}
        </div>
    );
}

export default DarkModeToggle;
