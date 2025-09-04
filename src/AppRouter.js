import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Portfolio from './pages/Portfolio';
import ThemeToggle from './ThemeToggle';
import { createTheme, ThemeProvider, CssBaseline, AppBar, Toolbar, Box, Button } from '@mui/material';

const AppRouter = () => {
  const [user, setUser] = useState(null);
  const [themeMode, setThemeMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>Portfolio App</Box>
            <ThemeToggle theme={themeMode} toggleTheme={toggleTheme} />
            {user && <Button color="inherit" onClick={handleLogout}>Logout</Button>}
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/portfolio" element={user ? <Portfolio /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to={user ? "/portfolio" : "/login"} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
