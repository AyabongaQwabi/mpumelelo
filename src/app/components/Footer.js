import React from 'react';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Link,
  Divider,
} from '@mui/material';
import {
  Home,
  Info,
  ContactMail,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from '@mui/icons-material';
import Image from 'next/image';
const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: '#fff',
        color: '#333333',
        py: 4,
        fontFamily: '"Roboto", "Montserrat", sans-serif',
      }}
    >
      {/* Footer Links and Information */}
      <Container maxWidth='lg' sx={{ mt: 4 }}>
        <Grid
          container
          spacing={4}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant='h5' gutterBottom sx={{ fontWeight: 'bold' }}>
              <Image
                src='/images/logo.png'
                width={274}
                height={101}
                alt='MPUMELELO FOUNDATION LOGO'
              />
            </Typography>
            <Typography
              variant='body1'
              paragraph
              sx={{
                marginTop: '30px',
                fontFamily: 'Helvetica',
                fontSize: '18px',
              }}
            >
              Empowering Boys and Girls, Breaking Barriers, Building Dreams.
            </Typography>
          </Grid>

          {/* Useful Links Section */}
          <Grid item xs={12} md={2}>
            <Typography
              variant='h6'
              sx={{
                fontFamily: 'Helvetica',
                fontWeight: 'bold',
                fontSize: '20px',
              }}
            >
              Useful Links
            </Typography>
            <ul style={{ listStyleType: 'none' }}>
              <li
                style={{
                  marginTop: '10px',
                  fontFamily: 'Helvetica',
                  fontSize: '18px',
                }}
              >
                <Link
                  href='/'
                  color='inherit'
                  sx={{
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#142d4c' },
                  }}
                >
                  Home
                </Link>
              </li>
              <li
                style={{
                  marginTop: '15px',
                  fontFamily: 'Helvetica',
                  fontSize: '18px',
                }}
              >
                <Link
                  href='/about'
                  color='inherit'
                  sx={{
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#142d4c' },
                  }}
                >
                  About us
                </Link>
              </li>
              <li
                style={{
                  marginTop: '15px',
                  fontFamily: 'Helvetica',
                  fontSize: '18px',
                }}
              >
                <Link
                  href='#'
                  color='inherit'
                  sx={{
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#142d4c' },
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} md={4} sx={{ paddingRight: '30px' }}>
            <Typography
              variant='h6'
              sx={{
                fontFamily: 'Helvetica',
                fontWeight: 'bold',
                fontSize: '20px',
              }}
            >
              Follow Us
            </Typography>
            <Typography
              variant='body1'
              paragraph
              sx={{
                fontFamily: 'Helvetica',
                marginTop: '5px',
                fontSize: '18px',
              }}
            >
              Stay connected with us for updates, tips, and heartwarming
              stories. Follow our journey to make a positive impact.
            </Typography>
            <Box sx={{ display: 'flex', gap: '30px' }}>
              {[
                {
                  color: '#1DA1F2',
                  icon: <Twitter />,
                  url: 'https://twitter.com/MpumeleloFoundation',
                },
                {
                  color: '#1877F2',
                  icon: <Facebook />,
                  url: 'https://facebook.com/MpumeleloFoundation',
                },
                {
                  color: '#E4405F',
                  icon: <Instagram />,
                  url: 'https://instagram.com/MpumeleloFoundation',
                },
                {
                  color: '#0A66C2',
                  icon: <LinkedIn />,
                  url: 'https://linkedin.com/company/MpumeleloFoundation',
                },
              ].map(({ color, icon, url }, index) => (
                <Link
                  key={index}
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    color: '#00B5E2',
                    transition: 'all 0.5s ease',
                    '&:hover': {
                      backgroundColor: 'white',
                      color: color,
                    },
                  }}
                >
                  {icon}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Add the Divider here */}
      <Box display='flex' justifyContent='center' width='100%'>
        <Divider
          sx={{
            my: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            width: '80%',
            height: '0.5px',
          }}
        />
      </Box>

      {/* Copyright Section */}
      <Container maxWidth='lg' sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant='body2'>
          © Copyright <strong>Mpumelelo Foundation</strong> All Rights Reserved
        </Typography>
        <Typography variant='body2' sx={{ mt: 1 }}>
          Designed by{' '}
          <Link href='https://namoota.co.za/' color='inherit'>
            Namoota
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
