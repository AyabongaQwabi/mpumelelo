import {
  Container,
  Grid,
  Typography,
  Box,
  Link,
  Divider,
  IconButton,
  TextField,
  Button,
} from '@mui/material';
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  Send,
  LocationOn,
  Phone,
  Email,
} from '@mui/icons-material';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: '#fff',
        color: '#333333',
        pt: 8,
        pb: 4,
        fontFamily: '"Roboto", "Montserrat", sans-serif',
        borderTop: '1px solid #f0f0f0',
      }}
    >
      {/* Footer Links and Information */}
      <Container maxWidth='lg'>
        <Grid container spacing={6}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Image
                src='/images/logo.png'
                width={200}
                height={74}
                alt='MPUMELELO FOUNDATION LOGO'
              />
            </Box>
            <Typography
              variant='body1'
              paragraph
              sx={{
                fontFamily: 'Helvetica',
                fontSize: '16px',
                color: '#555',
                lineHeight: 1.7,
                mb: 3,
              }}
            >
              Empowering Boys and Girls, Breaking Barriers, Building Dreams. We
              are committed to uplifting children in rural communities through
              education, health support, and community development.
            </Typography>
            <Box sx={{ display: 'flex', gap: '16px' }}>
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
                <IconButton
                  key={index}
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                  sx={{
                    color: '#00B5E2',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: color,
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant='h6'
              sx={{ fontWeight: 'bold', fontSize: '18px', mb: 3 }}
            >
              Quick Links
            </Typography>
            <Box component='ul' sx={{ listStyleType: 'none', p: 0, m: 0 }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'What We Do', href: '/what-we-do' },
                { label: 'Why We Do It', href: '/why-we-do-it' },
                { label: 'Who We Are', href: '/who-we-are' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact Us', href: '/contact-us' },
              ].map((link, index) => (
                <Box component='li' key={index} sx={{ mb: 1.5 }}>
                  <Link
                    href={link.href}
                    sx={{
                      color: '#555',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      '&:hover': {
                        color: '#00B5E2',
                        transform: 'translateX(3px)',
                      },
                      transform: 'translateX(0)',
                      transition: 'transform 0.3s ease, color 0.3s ease',
                    }}
                  >
                    {link.label}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant='h6'
              sx={{ fontWeight: 'bold', fontSize: '18px', mb: 3 }}
            >
              Contact Us
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <LocationOn sx={{ color: '#00B5E2', mr: 1.5, flexShrink: 0 }} />
                <Typography
                  variant='body2'
                  sx={{ color: '#555', lineHeight: 1.7 }}
                >
                  123 Company Street
                  <br />
                  Central
                  <br />
                  Pretoria, 0001
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Phone sx={{ color: '#00B5E2', mr: 1.5, flexShrink: 0 }} />
                <Typography variant='body2' sx={{ color: '#555' }}>
                  060 311 6777
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Email sx={{ color: '#00B5E2', mr: 1.5, flexShrink: 0 }} />
                <Typography variant='body2' sx={{ color: '#555' }}>
                  info@mpumelelofoundation.co.za
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Newsletter Section */}
          <Grid item xs={12} md={3}>
            <Typography
              variant='h6'
              sx={{ fontWeight: 'bold', fontSize: '18px', mb: 3 }}
            >
              Newsletter
            </Typography>
            <Typography variant='body2' sx={{ color: '#555', mb: 2 }}>
              Subscribe to our newsletter to receive updates on our work and
              impact.
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <TextField
                placeholder='Your email'
                variant='outlined'
                size='small'
                sx={{
                  flexGrow: 1,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '0',
                    '& fieldset': {
                      borderColor: '#e0e0e0',
                      borderRight: 'none',
                    },
                    '&:hover fieldset': {
                      borderColor: '#00B5E2',
                    },
                  },
                }}
              />
              <Button
                variant='contained'
                sx={{
                  backgroundColor: '#00B5E2',
                  borderRadius: '0',
                  minWidth: 'auto',
                  '&:hover': {
                    backgroundColor: '#0088a9',
                  },
                }}
              >
                <Send fontSize='small' />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Divider */}
      <Container maxWidth='lg'>
        <Divider sx={{ my: 4 }} />
      </Container>

      {/* Copyright Section */}
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            variant='body2'
            sx={{ color: '#777', mb: { xs: 1, sm: 0 } }}
          >
            © {new Date().getFullYear()} <strong>Mpumelelo Foundation</strong>.
            All Rights Reserved.
          </Typography>
          <Typography variant='body2' sx={{ color: '#777' }}>
            Designed by{' '}
            <Link
              href='https://namoota.co.za/'
              color='inherit'
              sx={{ fontWeight: 'bold', '&:hover': { color: '#00B5E2' } }}
            >
              Namoota
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
