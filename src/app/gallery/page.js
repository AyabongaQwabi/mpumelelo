'use client';
import React, { useState } from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent, Button, Stack, Box, Divider } from '@mui/material';

const galleryItems = [
  {
    img: '/images/image1.jpeg',
  },
  {
    img: '/images/image2.jpeg',
  },
  {
    img: '/images/image3.jpeg',
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
  // {
  //   img: '/images/image11.jpeg',
  // },
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

      {/* Gallery Header */}
      <Box sx={{ textAlign: "center", pb: { xs:10, md:12 }}}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            fontSize: '32px',
            color: '#00B5E2',
            textTransform: "uppercase",
            letterSpacing: 2,
          }}>
          Photo Showcase
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "text.secondary",
            marginTop: 1,
            color: '#333333',
            fontSize: '1.2rem'
          }}>
          A curated selection of moments and sceneries
        </Typography>
        <Divider
          sx={{
            width: "60px",
            height: "1px",
            backgroundColor: "primary.main",
            margin: "16px auto 0",
            borderRadius: 2,
          }}/>
      </Box>
      {/* Gallery Grid */}
      <Box sx={{ maxWidth: 'xl', mx: 'auto', my: 9, px: { xs: 2, md: 4 } }}>
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2} 
            sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }, 
              gap: 2, 
              padding: 2 
            }}>
            {galleryItems.map((item, index) => (
              <Grid item key={index} 
                sx={{ 
                  position: 'relative', 
                  aspectRatio: '1', 
                  overflow: 'hidden', 
                  cursor: 'pointer', 
                  transition: 'all 0.3s ease', 
                  '&:hover': { transform: 'translateY(-5px)' } 
                }}>
                <Box component="img" src={item.img} 
                  sx={{ 
                    position: 'absolute', 
                    inset: 0, 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    objectPosition: 'center', 
                    transition: 'transform 0.3s ease', 
                    transformOrigin: 'center center', 
                    '&:hover': { transform: 'scale(1.1)' } 
                  }} />
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0, 
                    right: 0, 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)', 
                    padding: 2, 
                    transform: 'translateY(100%)', 
                    transition: 'transform 0.3s ease', 
                    '.parent:hover &': { transform: 'translateY(0)' } 
                  }}>
                  <Typography variant="h6" 
                    sx={{ color: 'white' }}>
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

    </Box>
    </>
  )
}
