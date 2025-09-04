
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Box, Alert, Paper } from '@mui/material';

const DEMO_EMAIL = 'sravani@gmail.com';
const DEMO_PASSWORD = 'sravani123';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    // Demo login logic for sravani
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      onLogin({ username: 'sravani', email: DEMO_EMAIL });
      navigate('/portfolio');
      return;
    }
    try {
      // Replace with your backend API endpoint
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        onLogin(data.user);
        navigate('/portfolio');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Network error. Please try again later.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>Login</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField label="Email" fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)} required />
          <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={e => setPassword(e.target.value)} required />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Login</Button>
        </form>
        <Button onClick={() => navigate('/signup')} sx={{ mt: 2 }}>Don't have an account? Sign Up</Button>
        {/* Demo credentials box */}
        <Paper elevation={3} sx={{ mt: 4, p: 2, bgcolor: 'background.default' }}>
          <Typography variant="subtitle1" align="center" gutterBottom>
            <strong>Demo Login Credentials</strong>
          </Typography>
          <Typography variant="body2"><strong>Username:</strong> sravani</Typography>
          <Typography variant="body2"><strong>Email:</strong> {DEMO_EMAIL}</Typography>
          <Typography variant="body2"><strong>Password:</strong> {DEMO_PASSWORD}</Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
