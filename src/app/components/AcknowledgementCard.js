import React from 'react';
import { Container, CardMedia, Typography, CardContent, Grid, Box } from '@mui/material';

// Sample donor data
// Replace with correct image URL
const donors = [
  { name: 'Jill', imgSrc: '/images/jill.jpeg' },
  { name: 'Lori Duin family', imgSrc: '/images/Lori Duin family.jpeg' },
];

const AcknowledgementCard = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: 'white', paddingBottom: 20 }}>
      {/* Header Section */}
      <Box
        sx={{ width: 'full', textAlign: 'center', marginBottom: 10, py: 5, backgroundColor: '#00B5E2', position: 'relative', zIndex: 2,
        }}
      >
        <Typography
          sx={{ mb: 2, color: 'white', fontSize: { xs: '30px', sm: '30px', md: '35px' }, fontWeight: 'bold'}} >
          DONOR ACKNOWLEDGEMENT
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography sx={{ width: {xs: '80%', md: '60%', lg: '50%' }, mb: 4, color: 'white', fontSize: { xs: '18px', sm: '18px', md: '20px' } }}> 
                At our foundation, we strive to make a positive impact in the lives of those in need. 
                Your contributions help us provide vital resources, spread hope, and empower communities. 
                Together, we’re changing lives. We are deeply grateful for the generosity of our donors 
                who have supported our mission.
            </Typography>
        </Box>
      </Box>

      {/* Donor List */}
      <Box sx={{ width: { xs: '90%', sm: '80%', md: '70%', lg: '50%' }, margin: '0 auto' }}>
        <Grid container spacing={2}>
          {donors.map((donor, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box>
                <CardMedia component="img" height="400" image={donor.imgSrc} alt={donor.name}  sx={{ objectFit: 'cover' }}/>
                <CardContent
                  sx={{ display: 'flex', justifyContent: 'center', padding: '12px', height: '50px', backgroundColor: '#1f2937'}}>
                  <Typography sx={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
                    {donor.name}
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Quotes from Beneficiaries */}
      <Box textAlign="center" mt={8} mb={5} px={3}>
        <Typography variant="h6" color="textSecondary" sx={{ fontStyle: 'italic', mb: 2 }}>
          "Your generosity has touched so many lives. We are forever grateful." – Foundation Beneficiary
        </Typography>
        <Typography variant="h6" color="textSecondary" sx={{ fontStyle: 'italic', mb: 2 }}>
          "Thank you for believing in our mission and helping us make a difference." – Foundation Director
        </Typography>
      </Box>

      <Box textAlign="center" sx={{ color: 'black' }}>
        <Typography sx={{ fontSize: { xs: '18px', sm: '18px', md: '20px' }, fontWeight: 'bold' }}>
            <span style={{ textDecoration: 'underline', textDecorationColor: '#00B5E2' }}>Your </span> 
            contributions make a meaningful impact. Thank you!
        </Typography>
      </Box>
    </Box>
  );
};

export default AcknowledgementCard;
