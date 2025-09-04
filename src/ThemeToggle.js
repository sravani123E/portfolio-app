import React from 'react';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeToggle = ({ theme, toggleTheme }) => (
  <IconButton onClick={toggleTheme} color="inherit">
    {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
  </IconButton>
);

export default ThemeToggle;
