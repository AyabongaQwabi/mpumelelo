'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Button, Typography, Container, Grid, Card, CardContent, CardMedia, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function About() {

   // Accordion state
   const [expanded, setExpanded] = useState(false);
   // Handle accordion change
   const handleChange = (panel) => (event, isExpanded) => {
     setExpanded(isExpanded ? panel : false);
   };

  const sections = [
    { 
      title: 'OUR VISION', 
      description: 'To empower every child, regardless of gender or background, to achieve their full potential by ensuring access to essential resources, education, and support for a brighter future.',
      imgSrc: '/images/hero2.jpg', // Replace with correct image URL
      linkText: 'More about our mission and history',
      linkUrl: '#'
    },
    { 
      title: 'OUR MISSION', 
      description: 'To provide holistic care, education, protection, and ensure their physical, emotional and psychological well-being is in good shape. We foster a safe, supportive environment, promoting equality, dignity, and opportunities for a brighter future, helping both boys and girls become confident, self-sufficient, and become national and global assets.',
      imgSrc: '/images/hero1.jpg', 
      linkText: 'More about how we work',
      linkUrl: '#'
    },
  ];

  const activitiesItems = [
    {
      question: "PROVIDE NUTRITIONAL SUPPORT",
      answer: "We provide the children with meals before and after school to combat hunger and poor living conditions in rural areas."
    },
    {
      question: "DEVELOP SPORTS ACTIVITIES",
      answer: "We promote the physical health of the children by organizing various  sporting activities to engage them in."
    },
    {
      question: "ACADEMIC SUPPORT IN SCIENCE AND MATHEMATICS",
      answer: "We assist children with their homework and provide additional classes to enhance their understanding of science and mathematics."
    },
    {
      question: "COMMUNITY ENGAGEMENT THROUGH ANNUAL EVENTS",
      answer: "We enhance communal living, giving back, and social responsibility in the boys and girls by organizing annual events like a Christmas party for the elderly in the community, where children can engage in activities, performances, and gift-giving."
    },
    {
      question: "PROVIDE HYGIENE AND CLOTHING ESSENTIALS",
      answer: "We ensure that children have access to essential hygiene products and clothing, by distributing cosmetics and sanitary towels to girls, along with clothes, toiletries and other hygiene essentials for the children."
    }
  ];

  // Create a state variable to track whether the full text is shown:
  const [showFullText, setShowFullText] = useState(false);


  return (
    <>
      <Header />
      {/* Grid of content and Images */}
      <Box sx={{ width: '100%', backgroundColor: 'white', justifyContent: 'center' }}>
        <Container maxWidth="lg" sx={{ py: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Header and info */}
          <Box sx={{ mt: 10, mb: 6, maxWidth: '900px'}}>
            <Typography component="h1" align="center" sx={{ mb: 4, fontWeight: '950', fontSize: '32px', color: '#1976D2' }}>
              ABOUT US
              {/* <Box component="span" sx={{ color: '#1976D2' }}> US</Box> */}
            </Typography>
            <Typography variant="body1" align="start" sx={{ mb: 2, mx: 'auto', color: 'black' }}>
              Welcome to Mpumeleolo Caring for Boys and Girls Foundation, also known as “Caring,” an organization founded 
              on the belief that every child deserves equal opportunities. We are committed to uplifting both boys and 
              girls to break the cycle of poverty and inequality, and pursue their dreams without barriers.
            </Typography>
            {showFullText && (
              <>
                <Typography variant="body1" align="start" sx={{ mb: 2, mx: 'auto', color: 'black' }}>
                  At Caring, we understand that a child’s potential should not be limited by their undeserved backgrounds or 
                  circumstances. So, we provide suited programs that address the unique needs of each child we serve. Through 
                  partnerships with local communities, schools, and health organizations, we try to create a nurturing environment 
                  where boys and girls can thrive and become empowered individuals.
                </Typography>
                <Typography variant="body1" align="start" sx={{ mb: 6, mx: 'auto', color: 'black' }}>
                  Our dedicated team of volunteers and staff work tirelessly to deliver essential resources, mentorship, and advocacy. 
                  We believe that by investing in the wellbeing of our young ones, we are building a brighter future for everyone. 
                </Typography>
              </>
            )}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <Button variant="text" color="primary" onClick={() => setShowFullText(!showFullText)} sx={{ textTransform: 'none' }}>
                {showFullText ? 'Show Less' : 'Show More'}
              </Button>
            </Box>
          </Box>
          {/* Grid for sections */}
          <Grid container spacing={0.5} sx={{ width: { xs: 'auto', md: '90%' } }}>
            {sections.map((section, index) => (
              <Grid item xs={12} key={index}>
                <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: { xs: 'auto', md: '300px' } }}>
                  {index % 2 === 0 ? (
                    <>
                      {/* Image Left, Content Right */}
                      <Box sx={{ width: { xs: '100%', md: '50%' }, height: { xs: '300px', md: 'auto' }, overflow: 'hidden' }}>
                        <CardMedia component="img" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} image={section.imgSrc} alt={section.title}/>
                      </Box>
                      <CardContent sx={{ width: { xs: '100%', md: '50%' }, backgroundColor: '#007cc2', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', px: 6 }}>
                        <Typography variant="h5" component="h2" sx={{ fontWeight: '950', mb: 1 }}>
                          {section.title}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2, fontSize: '18px' }}>
                          {section.description}
                        </Typography>
                        {/* Link to another page */}
                        {/* <Button variant="text" href={section.linkUrl} sx={{ color: 'white', fontWeight: 'bold', textTransform: 'none' }}>
                          {section.linkText} &gt;&gt;
                        </Button> */}
                      </CardContent>
                    </>
                  ) : (
                    <>
                      {/* Content Left, Image Right */}
                      <CardContent sx={{ width: { xs: '100%', md: '50%' }, backgroundColor: '#007cc2', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', px: 6 }}>
                        <Typography variant="h5" component="h2" sx={{ fontWeight: '950', mb: 1 }}>
                          {section.title}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2, fontSize: '18px' }}>
                          {section.description}
                        </Typography>
                         {/* Link to another page */}
                        {/* <Button variant="text" href={section.linkUrl} sx={{ color: 'white', fontWeight: 'bold', textTransform: 'none' }}>
                          {section.linkText} &gt;&gt;
                        </Button> */}
                      </CardContent>
                      <Box sx={{ width: { xs: '100%', md: '50%' }, height: { xs: '300px', md: 'auto' }, overflow: 'hidden' }}>
                        <CardMedia component="img"sx={{ width: '100%', height: '100%', objectFit: 'cover' }} image={section.imgSrc} alt={section.title}/>
                      </Box>
                    </>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>   
      </Box>

      {/* Activities Section */}
      {/* Banner */}
      <Box sx={{ width: '100%', backgroundColor: 'white', pb: 30, pt: 25, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', background: '#353535', opacity: '0.8' , py: 3, flexDirection: { xs: 'column', sm: 'column', md: 'row' }}}>
          <Container sx={{ width: { xs: '60%', sm: '40%'} }}>
            <Typography variant="h4" component="h1" gutterBottom color="white" fontWeight="950" sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', height: '100%', width: '100%', py: 5 }}>
              ACTIVITIES
            </Typography>
          </Container>
          <Container sx={{ xs: '100%', sm: '60%', py: 5, textAlign: {xs: 'center', sm: 'center', md: 'start'}}}>
            <Typography variant="body1" color="white" maxWidth="md" sx={{ fontSize: { xs: '16px', sm: '18px'} }}>
              In a bid to address the immediate needs of the boys and girls in rural areas.
            </Typography>
            {/* Add the Divider here */}
            <Box display="flex" sx={{justifyContent: {xs: 'center', sm: 'center', md: 'start'} }}>
              <Divider sx={{ my: 2, backgroundColor: 'rgba(25, 118, 210)', height: '1px', width: { xs: '60%', sm: '20%'} }} />
            </Box>
            <Typography variant="body1" color="white" maxWidth="md" sx={{ fontSize: { xs: '16px', sm: '18px'} }}>
              here are some of the activities we do.
            </Typography>
          </Container>
        </Box>
        {/* Dropdown Menu */}
        <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
          {activitiesItems.map((item, index) => (
            <Accordion key={index} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}
              sx={{
                borderTop: 1,
                borderBottom: index === activitiesItems.length - 1 ? 1 : 0,
                borderColor: 'divider',
                '&:before': { display: 'none' }, 
                boxShadow: 'none',
                py: 2,
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index + 1}-content`} id={`panel${index + 1}-header`}>
                <Typography fontWeight="bold" sx={{ fontSize: { xs: '15px', sm: '20px' } }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="black" width={'80%'}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
}
