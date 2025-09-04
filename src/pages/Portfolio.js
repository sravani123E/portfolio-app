import React from 'react';
import { Container, Typography, Box, Button, Grid, Paper, Link } from '@mui/material';
import SkillList from '../components/SkillList';
import ContactForm from '../components/ContactForm';

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio built with React and Material-UI.',
    image: 'https://portfolioo-one-ecru.vercel.app/',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Jobby App',
    description: 'Constructed an all-in-one job searching platform, Jobby App.',
    image: 'https://mcjobbyapp.ccbp.tech/login',
    demo: '#',
    repo: '#',
  },
];

const Portfolio = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Introduction Section */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>Sravani Kurella</Typography>
        <Typography variant="h5" color="text.secondary">Full Stack Developer</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Hi! I’m Sravani Kurella, a passionate developer specializing in React and Node.js. I love building beautiful, performant web apps.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="outlined" href="#" sx={{ mr: 2 }}>Resume</Button>
          <Link href="#" target="_blank" sx={{ mr: 2 }}>LinkedIn</Link>
          <Link href="#" target="_blank">GitHub</Link>
        </Box>
      </Box>
      {/* Skills Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>Skills</Typography>
        <SkillList />
      </Box>
      {/* Projects Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>Projects</Typography>
        <Grid container spacing={2}>
          {projects.map(project => (
            <Grid item xs={12} sm={6} key={project.title}>
              <Paper sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: 8, marginBottom: 8 }} />
                <Typography variant="h6" sx={{ mt: 1 }}>{project.title}</Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>{project.description}</Typography>
                <Box>
                  <Button variant="contained" href={project.demo} sx={{ mr: 1 }}>Live Demo</Button>
                  <Button variant="outlined" href={project.repo}>Repo</Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Contact Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>Contact</Typography>
        <ContactForm />
      </Box>
    </Container>
  );
};

export default Portfolio;
