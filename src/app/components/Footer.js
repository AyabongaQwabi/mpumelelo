import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#002F6C', color: '#fff', py: 6 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">About Us</Typography>
            <Typography>
              We are committed to addressing global challenges and creating sustainable solutions.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Quick Links</Typography>
            <Link href="#" color="inherit" sx={{ display: 'block' }}>Our Work</Link>
            <Link href="#" color="inherit" sx={{ display: 'block' }}>Get Involved</Link>
            <Link href="#" color="inherit" sx={{ display: 'block' }}>Contact Us</Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Follow Us</Typography>
            <Typography>Social Media Links Here</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
