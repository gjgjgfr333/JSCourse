import React, {useContext, useEffect} from 'react';
import {ThemeContext} from "../context/ThemeContext";
import './SwithStyle.css'


const SwitchComponent = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    useEffect(() => {
        document.documentElement.setAttribute(
            'data-theme',
            isDarkMode ? 'dark': 'light'
        )
    }, [isDarkMode]);


    return (
        <div className={'switch'} onClick={toggleTheme}>
            <div className={`switch_round ${isDarkMode ? 'dark' : 'light'}`}></div>
        </div>
    );
};

export default SwitchComponent;
