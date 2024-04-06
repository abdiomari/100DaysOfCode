import { button } from '@material-tailwind/react';
import React from 'react';
import { useContext } from 'react';

const ThemeToggle = () => {

    const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={ toggleTheme } >
        {
            theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'
        }
    </button>
  )
}

export default ThemeToggle