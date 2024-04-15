import { createContext, useState, useContext  } from "react";
import { createTheme, ThemeProvider as CustomThemeProvider } from "@mui/material";


const initialTheme = 'light';

const ThemeContext = createContext({
    theme: initialTheme,
    toggleTheme: () => {},
  });

const ThemeProvider = ({ children }) => {
    const [theme, setTheme ] = useState(initialTheme);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const muiTheme = createTheme({
        palette: {
          mode: theme === 'light' ? 'light' : 'dark',
          // Add custom Material UI theme options here (colors, typography)
        },
      });
    

    const value = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={ value }>
            <CustomThemeProvider theme={ muiTheme }>
            { children }
            </CustomThemeProvider>
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext };