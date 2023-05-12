import React, { useState, useEffect } from 'react';
import Button from '../Common/Button';

function DarkModeToggle({ onClick }) {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('isDarkMode') === 'true' ? true : false);

    useEffect(() => {
        localStorage.setItem('isDarkMode', isDarkMode);
    }, [isDarkMode]);

    function handleToggleClick() {
        setIsDarkMode(!isDarkMode);
        onClick(!isDarkMode);
    }

    return (
        <div className="dark-mode-toggle" onClick={handleToggleClick} style={{ position: 'fixed', cursor: 'pointer' }}>
            <div className={`toggle ${isDarkMode ? 'on' : 'off'}`}>
                <div className="circle"> ĐÂY </div>
            </div>
            <Button onClick={handleToggleClick}>{isDarkMode ? 'Light mode' : 'Dark mode'}</Button>
        </div>
    );
}

export default DarkModeToggle;