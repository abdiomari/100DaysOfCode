import { useContext, useState } from 'react';
import { ThemeContext } from './utils/themeContext';
import './App.css'
import { Button } from '@material-tailwind/react'

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`text-${theme === 'light' ? 'black' : 'white'}`}>
    <h1>Hello World</h1>
    <Button>
      Button
    </Button>
    </div>
  )
}

export default App
