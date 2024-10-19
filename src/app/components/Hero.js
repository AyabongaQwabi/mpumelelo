// components/Hero.js
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/hero-image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        py: 10,
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Empowering Communities, Changing Lives
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Join us in making a difference around the globe.
        </Typography>
        <Button variant="contained" color="secondary">
          Learn More
        </Button>
      </Container>
    </Box>
  );
}
