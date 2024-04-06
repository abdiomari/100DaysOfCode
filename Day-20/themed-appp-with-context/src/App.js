import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import ThemeContext from './themeContext/context';

const App = () => {

  const [ theme, setTheme ] = useState('light');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
    console.log("something has to give")
  }
  return (
   <ThemeContext.Provider value={{theme, toggleTheme}}>
    <Header />
   </ThemeContext.Provider>
  );
}

export default App;
