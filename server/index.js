const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(bodyParser.json());

// In-memory user store for demo
const users = [];

app.post('/api/signup', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'Email already exists.' });
  }
  const user = { username, email, password };
  users.push(user);
  res.status(201).json({ message: 'Signup successful.' });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }
  res.json({ user: { username: user.username, email: user.email } });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
