'use client';

import React from 'react';
import { Box, Button, Container, Typography, Stack, Grid } from '@mui/material';
import { SvgIcon } from '@mui/material';
import { Card, CardContent, IconButton } from '@mui/material';
import {
  CardGiftcard,
  School,
  VolunteerActivism,
  HealthAndSafety,
  People,
} from '@mui/icons-material';
import { styled } from '@mui/system';

const GradientBackground = styled(Box)(({ theme }) => ({
  background: `linear-gradient(to top right, #fff, #02b5e2`,
  padding: theme.spacing(8),
  borderRadius: theme.shape.borderRadius * 2,
  position: 'relative',
  overflow: 'hidden',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    borderRadius: '8px',
    transform: 'rotate(45deg)',
    width: '16px',
    height: '16px',
  },
  '&::before': {
    backgroundColor: '#02b5e2',
    top: '0',
    right: '10px',
  },
  '&::after': {
    backgroundColor: 'green',
    bottom: '0',
    left: '10px',
  },
}));

const CTASection = () => {
  return (
    <Container maxWidth='lg' sx={{ py: 8 }}>
      <GradientBackground>
        <Box textAlign='center' maxWidth='sm' mx='auto'>
          <Typography
            variant='h3'
            component='h1'
            fontWeight='bold'
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #42a5f5, #7e57c2, #26c6da)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Empowering the Future of South Africa's Youth
          </Typography>
          <Typography variant='body1' color='text.secondary' paragraph>
            Join us in breaking the cycle of poverty by providing essential
            resources, quality education, and a healthier life for children.
            Together, we can create pathways to success and a brighter tomorrow.
          </Typography>
          <Button
            variant='contained'
            color='primary'
            size='large'
            sx={{
              borderRadius: 0,
              height: 48,
              px: 4,
              textTransform: 'capitalize',
              backgroundColor: '#02b5e2',
            }}
          >
            Get Involved
          </Button>
        </Box>
      </GradientBackground>
    </Container>
  );
};

const features = [
  {
    title: 'Academic Support Programs',
    description:
      'Through dedicated tutoring and extra classes in essential subjects like science and mathematics, we help bridge the educational gap for children in rural areas. Our academic support programs equip young learners with the tools they need to excel in their studies and inspire a passion for lifelong learning.',
    icon: School,
  },
  {
    title: 'Poverty Alleviation Initiatives',
    description:
      'To combat poverty directly, we provide crucial resources such as food, clothing, and school supplies to underprivileged children. By addressing these basic needs, we create an environment where children can focus on their education and personal development, offering them a brighter future beyond poverty.',
    icon: VolunteerActivism,
  },
  {
    title: 'Health and Wellness Programs',
    description:
      'Our daily feeding programs and hygiene kit distribution ensure that children receive nutritious meals and essential personal care items. These efforts promote both physical health and self-confidence, encouraging a sense of well-being that enables children to thrive at home, in school, and within their communities.',
    icon: HealthAndSafety,
  },
  {
    title: 'Community Empowerment and Engagement',
    description:
      'Believing it takes a village to raise a child, we work hand-in-hand with local communities, involving parents, guardians, and volunteers in our mission. By fostering community collaboration, we create a supportive network that uplifts children and strengthens bonds, encouraging collective responsibility in addressing the challenges they face.',
    icon: People,
  },
];

const FeaturesSection = () => (
  <Box py={5} bgcolor='background.default'>
    <Container maxWidth='lg'>
      <Box display='flex' flexDirection='column' gap={2}>
        <Box maxWidth='sm' mb={2}>
          <Typography
            variant='h3'
            component='h1'
            fontWeight='bold'
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #42a5f5, #7e57c2, #26c6da)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Healthy Bodies, Healthy Minds: Wellness and Nutrition Programs
          </Typography>
          <Typography
            variant='h3'
            component='h3'
            align='left'
            sx={{
              mb: 4,
              fontWeight: 'bold',
              lineHeight: 1.2,
              maxWidth: '60ch',
              color: 'text.primary',
              typography: { xs: 'h4', sm: 'h4', md: 'h3' },
            }}
          ></Typography>
        </Box>
        <Typography variant='body1' fontSize='1.5rem' color='text.secondary'>
          Everything done by the Mpumelelo Foundation is designed to provide
          comprehensive support, laying a strong foundation for children to
          succeed, lead, and ultimately break the cycle of poverty and
          inequality in their lives.
        </Typography>
      </Box>

      <Grid container spacing={4} mt={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card variant='outlined' sx={{ height: '100%' }}>
              <CardContent>
                <IconButton
                  color='primary'
                  sx={{
                    p: 1,
                    color: '#02b5e2',
                    bgcolor: '#cfd9e233',
                    borderRadius: 1,
                  }}
                >
                  <feature.icon />
                </IconButton>
                <Typography
                  variant='h5'
                  fontWeight='medium'
                  color='text.primary'
                  fontSize='1.4rem'
                  mt={2}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant='body2'
                  fontSize='1.1rem'
                  color='text.secondary'
                  mt={1}
                >
                  {feature.description}
                </Typography>
                <Button
                  variant='text'
                  color='#02b5e2'
                  backgroundColor='#cfd9e233'
                  endIcon={<CardGiftcard />}
                  sx={{
                    mt: 1,
                    borderRadius: 0,
                    height: 48,
                    px: 4,
                    color: '#02b5e2',
                    textTransform: 'capitalize',
                    bgcolor: '#cfd9e233',
                  }}
                  href='/donate'
                >
                  Make a Donation
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

function HeroSection() {
  return (
    <section>
      <Container maxWidth='lg' sx={{ py: 4 }}>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography
            variant='h1'
            component='h1'
            align='center'
            sx={{
              mb: 4,
              fontWeight: 'bold',
              lineHeight: 1.2,
              maxWidth: '60ch',
              color: 'text.primary',
              typography: { xs: 'h4', sm: 'h2', md: 'h1' },
            }}
          >
            Together, We Can Break the Cycle of Poverty
          </Typography>
          <Typography
            variant='body1'
            align='center'
            sx={{
              maxWidth: '60ch',
              color: 'text.secondary',
              lineHeight: 1.7,
              fontSize: '1.5rem',
            }}
          >
            Your support fuels essential programs that uplift children and
            empower communities. Join us in creating lasting change, one
            donation at a time.
          </Typography>

          <Stack direction='row' spacing={2} justifyContent='center' mt={4}>
            <Button
              variant='contained'
              size='large'
              sx={{
                borderRadius: 0,
                px: { xs: 4, lg: 6 },
                py: 2,
                textTransform: 'none',
                fontWeight: 'medium',
                backgroundColor: '#02b5e2',
                color: 'white',
              }}
            >
              Donate
            </Button>
            <Button
              variant='outlined'
              color='inherit'
              size='large'
              sx={{
                borderRadius: 0,
                px: { xs: 4, lg: 6 },
                py: 2,
                textTransform: 'none',
                color: '#02b5e2',
                borderColor: '#02b5e2',
              }}
              href='/about'
              endIcon={
                <SvgIcon>
                  <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 12h14m-4 4l4-4m-4-4l4 4'
                  />
                </SvgIcon>
              }
            >
              About us
            </Button>
          </Stack>
        </Box>

        <Box mt={8}>
          <img
            src='images/451759920_10233227183371318_3964563373918907181_n (1).jpg'
            alt='hero'
            style={{
              width: '100%',
              borderRadius: 8,
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </Box>
      </Container>
    </section>
  );
}

function DonatePage() {
  return (
    <Container maxWidth='lg' sx={{ py: 6 }}>
      {/* Hero Section */}
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </Container>
  );
}

export default DonatePage;
