import React, { useState, useEffect } from 'react';
import Button from '../Common/Button';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import classNames from 'classnames/bind';
import styles from './DarkModeToggle.module.scss';

const cx = classNames.bind(styles);

function DarkModeToggle({ onClick }) {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('isDarkMode') === 'true' ? true : false);

    useEffect(() => {
        localStorage.setItem('isDarkMode', isDarkMode);
    }, [isDarkMode]);

    function handleToggleChange() {
        setIsDarkMode(!isDarkMode);
        onClick(!isDarkMode);
    }

    return (
        <div className={cx('dark-mode-toggle')}>
            <Toggle
                defaultChecked={isDarkMode}
                icons={false}
                onChange={handleToggleChange} 
            /> 
            <span className={cx('text')}>{isDarkMode ? 'Light mode' : 'Dark mode'}</span>
        </div>
    );
}

export default DarkModeToggle;