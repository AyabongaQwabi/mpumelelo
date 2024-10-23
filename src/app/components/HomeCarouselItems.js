import React, { useState, useEffect } from 'react';
import { Box, Typography, MobileStepper, Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const carouselItems = [
  {
    label: 'Nourishing Futures: Providing Daily Meals to Fuel Young Minds',
    description:
      'Join us in our mission to ensure that every child starts and ends their day with a nutritious meal, empowering them to learn and grow.',
    imgPath: '/images/hero1.jpg', // Update with your image path
  },
  {
    label: 'Empowering Through Play: Unlocking Potential with Sports Activities',
    description:
      'Discover how our sports programs promote teamwork, health, and confidence, helping children thrive both on and off the field.',
    imgPath: '/images/hero2.jpg', // Update with your image path
  },
  {
    label: 'Building Bright Futures: Supporting Education, One Child at a Time',
    description:
      'Together, we’re helping kids excel in science and math with tutoring and homework assistance, paving the way for academic success and lifelong dreams.',
    imgPath: '/images/hero3.jpg', // Update with your image path
  },
];

export default function CustomCarousel() {
  const [activeStep, setActiveStep] = useState(0);
  const [transitionEffect, setTransitionEffect] = useState(true);
  const maxSteps = carouselItems.length;

  // Autoplay functionality with 2000ms interval
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000); // 2000 milliseconds

    return () => {
      clearInterval(interval); // Clear interval on component unmount
    };
  }, [activeStep]);

  const handleNext = () => {
    setTransitionEffect(false); // Start scaling out
    setTimeout(() => {
      setActiveStep((prevActiveStep) =>
        prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
      );
      setTransitionEffect(true); // Start scaling in
    }, 1000); // Adjust this timeout to match the scaling transition duration
  };

  const handleBack = () => {
    setTransitionEffect(false); // Start scaling out
    setTimeout(() => {
      setActiveStep((prevActiveStep) =>
        prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
      );
      setTransitionEffect(true); // Start scaling in
    }, 1000); // Adjust this timeout to match the scaling transition duration
  };

  return (
    <Box sx={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100vw',
          backgroundImage: `url(${carouselItems[activeStep].imgPath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#1999e7',
          transform: transitionEffect ? 'scale(1)' : 'scale(0.9)', // Scale effect
          transition: 'transform 1s ease-in-out', // Smooth 1s transition
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{ mb: 2, p: 2, bgcolor: 'rgba(0,0,0,0.5)', borderRadius: 1 }}
          >
            {carouselItems[activeStep].label}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, p: 2, bgcolor: 'rgba(0,0,0,0.5)', borderRadius: 1, color: '#ffffff'}}
          >
            {carouselItems[activeStep].description}
          </Typography>
        </Box>
      </Box>

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{ color: '#fff' }}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{ color: '#fff' }}
          >
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Box>
  );
}
