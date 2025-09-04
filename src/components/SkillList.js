import React from 'react';
import { Box, Chip, Typography, LinearProgress } from '@mui/material';

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'CSS', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'TypeScript', level: 65 },
];

const SkillList = () => (
  <Box sx={{ mt: 2 }}>
    {skills.map(skill => (
      <Box key={skill.name} sx={{ mb: 2 }}>
        <Typography variant="subtitle1">{skill.name}</Typography>
        <LinearProgress variant="determinate" value={skill.level} sx={{ height: 8, borderRadius: 4 }} />
      </Box>
    ))}
  </Box>
);

export default SkillList;
