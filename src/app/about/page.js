import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Button, Typography, Container } from '@mui/material';

export default function About() {
  return (
    <>
      <Header />
      {/* Hero iamge section */}
      <Box sx={{ width: '100%', height: '400px', backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(/images/hero1.jpg)`, backgroundSize: 'cover', backgroundPosition: 'top'}}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', backgroundColor: 'rgba(17, 24, 39, 0.4)'}}>
          <Box textAlign="center">
            <Typography variant="h3" fontWeight="600" color="white" sx={{ fontSize: { xs: '40px', lg: '50px' } }}>
              About <span style={{ color: '#3B82F6' }}>Us</span> 
            </Typography>
            <Typography paragraph sx={{ fontFamily: 'Helvetica', marginTop: '5px', fontSize: '25px', fontWeight: '500'}}>
              Mpumelelo caring for boys and girls foundation.
            </Typography>
            {/* <Button
              variant="contained"
              sx={{
                mt: 2,
                px: 5,
                py: 1.5,
                fontSize: '0.875rem', // equivalent to text-sm
                backgroundColor: '#2563EB', // equivalent to bg-blue-600
                textTransform: 'capitalize',
                '&:hover': {
                  backgroundColor: '#3B82F6', // equivalent to hover:bg-blue-500
                },
              }}
            >
              Start project
            </Button> */}
          </Box>
        </Box>
      </Box>
      {/* Paragraph text */}
      <Box sx={{ backgroundColor: 'white', width: '100%', py: 10 }}>
        <Container maxWidth="md" >
          <Typography variant="h4" gutterBottom sx={{ color: 'black', fontSize: { xs: '24px', md: '30px', lg: '30px' } }}>
            Welcome to Mpumeleolo
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'black', fontSize: { xs: '16px', md: '18px', lg: '18px' } }}>
            Caring for Boys and Girls Foundation, also known as “Caring,” an organization founded 
            on the belief that every child deserves equal opportunities. We are committed to 
            uplifting both boys and girls to break the cycle of poverty and inequality, and 
            pursue their dreams without barriers.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'black', fontSize: { xs: '16px', md: '18px', lg: '18px' } }}>
            At Caring, we understand that a child’s potential should not be limited by their 
            undeserved backgrounds or circumstances. So, we provide suited programs that address 
            the unique needs of each child we serve. Through partnerships with local communities, 
            schools, and health organizations, we try to create a nurturing environment where 
            boys and girls can thrive and become empowered individuals.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'black', fontSize: { xs: '16px', md: '18px', lg: '18px' } }}>
            Our dedicated team of volunteers and staff work tirelessly to deliver essential 
            resources, mentorship, and advocacy. We believe that by investing in the wellbeing 
            of our young ones, we are building a brighter future for everyone. 
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
