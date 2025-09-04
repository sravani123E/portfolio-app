import React, { useState } from 'react';
import { TextField, Button, Alert, Box } from '@mui/material';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('All fields are required.');
      return;
    }
    if (!validateEmail(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    // Simulate sending message
    setSuccess('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
      <TextField label="Name" name="name" fullWidth margin="normal" value={form.name} onChange={handleChange} required />
      <TextField label="Email" name="email" fullWidth margin="normal" value={form.email} onChange={handleChange} required />
      <TextField label="Message" name="message" fullWidth margin="normal" multiline rows={4} value={form.message} onChange={handleChange} required />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>Send Message</Button>
    </Box>
  );
};

export default ContactForm;
