import { useContext, useState } from 'react';
import { ThemeContext } from './utils/themeContext';
import './App.css'
import Navigationbar from './components/Header'
import Footer from './components/Footer'

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`text-${theme === 'light' ? 'black' : 'white'}`}>
      <Navigationbar />


      <Footer />
    </div>
  )
}Header

export default App
