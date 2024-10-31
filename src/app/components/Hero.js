'use client';
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

export default function Hero() {
  const images = [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [images.length]);

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: 10,
        color: '#fff',
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity for darker or lighter overlay
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          px: { md: 6, xs: 2 },
        }}
      >
        <Typography variant='h2' sx={{ mb: 2 }}>
          Empowering Communities, Changing Lives
        </Typography>
        <Typography variant='h5' sx={{ mb: 4 }}>
          Join us in making a difference around the globe.
        </Typography>
        <Button
          variant='contained'
          sx={{
            background: '#1999e7',
            color: 'white',
            WebkitAppearance: 'none',
            border: 'none',
          }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}
