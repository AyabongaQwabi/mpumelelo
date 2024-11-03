'use client';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent, Button, Stack, Box } from '@mui/material';

const galleryItems = [
  {
    img: '/images/image1.jpeg',
  },
  {
    img: '/images/image2.jpeg',
    label: 'Tech',
    // span: 2,
  },
  {
    img: '/images/image3.jpeg',
    label: 'Dev',
    // span: 2,
  },
  {
    img: '/images/image4.jpeg',
  },
  {
    img: '/images/image5.jpeg',
  },
  {
    img: '/images/image6.jpeg',
  },
  {
    img: '/images/image7.jpeg',
  },
  {
    img: '/images/image8.jpeg',
  },
  {
    img: '/images/image9.jpeg',
  },
  {
    img: '/images/image10.jpeg',
  },
  {
    img: '/images/image11.jpeg',
  },
  {
    img: '/images/image12.jpeg',
  },
  {
    img: '/images/image13.jpeg',
  },
];


export default function Gallery() {
  return (
    <>
    <Box sx={{ backgroundColor: 'white', py: { xs: 6, sm: 8, lg: 12 } }}>

      <Box sx={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center',
          gap: 2, 
          pr: 2,
        }}>
          <Typography variant="h2" sx={{ 
            fontSize: { xs: '30px', sm: '30px', md: '40px', lg: '40px', xl: '50px' }, 
            fontWeight: 'bold', 
            color: '#424242',
            }}>
            Gallery
          </Typography>
      </Box>

      <Box sx={{ maxWidth: 'xl', mx: 'auto', my: 10, px: { xs: 2, md: 4 } }}>
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2} sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 2, padding: 2 }}>
            {galleryItems.map((item, index) => (
              <Grid item key={index} sx={{ position: 'relative', aspectRatio: '1', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }} >
                <Box component="img" src={item.img} sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.3s ease', transformOrigin: 'center center', '&:hover': { transform: 'scale(1.1)' } }} />
                <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)', padding: 2, transform: 'translateY(100%)', transition: 'transform 0.3s ease', '.parent:hover &': { transform: 'translateY(0)' } }}>
                  <Typography variant="h6" sx={{ color: 'white' }}>
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

    </Box>
    <Footer />
    </>
  )
}