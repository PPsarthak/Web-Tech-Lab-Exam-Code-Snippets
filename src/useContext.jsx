import React, { createContext, useContext, useState } from 'react';

// Create a context with a default value
const ThemeContext = createContext('light');

const ThemedComponent = () => {
    // Use the useContext hook to access the current theme value and a function to set the theme
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <>
        <h4>Implementation of useContext: It allows to pass useState hook to child/nested components with ease</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#333', padding: '20px' }}>
            <p>Current Theme: {theme}</p>
            <button 
            className='styledButton'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                Toggle Theme
            </button>
        </div>
        </>
    );
};

export const UseContextHook = () => {
    // Use state to manage the current theme and a function to set the theme
    const [theme, setTheme] = useState('dark');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemedComponent />
        </ThemeContext.Provider>
    );
};
