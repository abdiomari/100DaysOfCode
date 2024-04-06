import React, { useState } from 'react';
import Todo from './components/Todo';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NewTodo from './components/newTodo';

const theme = createTheme({
  palette: {
    mode: 'dark', // or 'light'
  },
  typography: {
    body2: {
      // Define your styles here
      fontFamily: 'Arial',
      color: 'white',
      fontSize: '.9rem',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
});

function App() {
   return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Todo  />
      </div>
    </ThemeProvider>
  );
}

export default App;
