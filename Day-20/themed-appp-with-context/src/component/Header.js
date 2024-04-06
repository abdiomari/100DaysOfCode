import {React, useContext} from 'react';
import ThemeContext from '../themeContext/context';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header = () => {
    const {theme, toggleTheme } = useContext(ThemeContext);

    const styles = {
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#333' : '#f0f0f0',
    };

  return (
    <>
   <Box sx={{ flexGrow: 1 }} style={styles}>
      <AppBar position="static" style={styles}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
          <DarkModeIcon onClick={toggleTheme} />
        </Toolbar>
      </AppBar>
    </Box>
   </>
  )
}

export default Header