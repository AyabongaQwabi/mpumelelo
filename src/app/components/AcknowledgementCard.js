import React from 'react';
import { Container, CardMedia, Typography, Card, CardContent, Grid, Box } from '@mui/material';

// Sample donor data
const donors = [
  { name: 'Jill', 
    imgSrc: '/images/jill.jpeg' // Replace with correct image URL
   },
  { name: 'Lori Duin family', 
    imgSrc: '/images/Lori Duin family.jpeg'
   },
  { name: 'Emily Johnson', 
    imgSrc: '/images/jill.jpeg'
   },
  { name: 'Michael Brown', 
    imgSrc: '/images/jill.jpeg'
   },
];

const AcknowledgementCard = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: 'white', py: 20, color: 'black' }}>
      {/* Header Section */}
      <Box textAlign="center" mb={4} sx={{ border: '1px solid red'}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Donor Acknowledgement
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          We are deeply grateful for the generosity of our donors who have supported our mission.
        </Typography>
      </Box>

      {/* Donor List */}
      <Box sx={{ width: '50%', border: '1px solid red', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={3}>
            {donors.map((donor, index) => (
            <Grid item xs={12} sm={6} key={index}>
                <Card sx={{ boxShadow: 3, borderRadius: 1}} >
                <CardMedia component="img" height="200" image={donors.imgSrc} alt={donor.name} sx={{ objectFit: 'cover' }} />
                    <CardContent>
                        <Typography variant="h6" component="div">
                            {donor.name}
                        </Typography>
                        {/* <Typography color="textSecondary">
                        Contribution: ${donor.amount.toLocaleString()}
                        </Typography> */}
                    </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>
      </Box>

      {/* Footer Section */}
      <Box textAlign="center" mt={5} sx={{ color: 'black' }}>
        <Typography variant="body1">
          Your contributions make a meaningful impact. Thank you!
        </Typography>
      </Box>
    </Box>
  );
};

export default AcknowledgementCard;
