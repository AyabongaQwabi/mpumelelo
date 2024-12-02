'use client';
import React from "react";
import Link from 'next/link';
import { Divider, Box, Typography, Grid, Button, Card, CardContent, CardMedia, List, ListItem, ListItemText, SvgIcon } from "@mui/material";

const WhyWeDoItPage = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: 'white', justifyContent: 'center' }}>
      {/* Banner Section */}
      <Box
        sx={{
          position: "relative",
          // height: "395px",
          backgroundImage: `url('/images/banner.jpg')`, // Replace with your banner image
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          pt: 12,
          fontSize: '32px',
          color: '#00B5E2',
        }} >
        WHY WE DO IT
        </Typography>
        <Typography 
          sx={{
            fontSize: "22px",
            fontWeight: "600",
            textAlign: "center",
            px: 2,
            pt: 3,
            color: "#333",
          }}>
          Inspiring Hope, Igniting Potential
        </Typography>
        <Typography 
          sx={{
            fontWeight: "300",
            fontSize: "18px",
            textAlign: "center",
            px: 2,
            pb: { xs:16, md:20 },
            mt: 1,
            color: "#333",
          }}>
          Our mission begins with the belief that every child deserves a chance to dream, grow, and thrive.
        </Typography>
      </Box>
      
      {/* Content Sectiom */}
      <Box
        sx={{
          backgroundColor: "#5D5D5D",
          color: "white",
          pl: {xs: "0", md: "100px"},
          py: {xs: "50px", md: "50px"},
        }}>
        <Box 
          container 
          spacing={4} 
          sx={{ 
            display: "flex",
            flexDirection: { xs: 'column', md: 'row' },
            width: { xs: "100%", sm: "85%" },
            margin: "0 auto",
          }}>
           
          {/* Left side (Image placeholder) */}
          <Box
              sx={{
              width: {xs: "100%", md:"50%"},
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md:"end"},
              pr: {xs: "0", md: "30px"},
              }}>
            <Typography
              sx={{
                fontSize: {
                  xs: "22px", // mobile screens (extra-small)
                  sm: "30px"  // screens larger than mobile
                },
                width: "100%",
                pl: { xs: 4, md: 2 },
                fontWeight: "400",
                color: "white", // Accent color
                marginBottom: "5px",
              }}>
              MPUMELELO FOUNDATION
            </Typography>
              {/* Image Grid */}
              <Box 
                sx={{ 
                  display: "flex", 
                  justifyContent: "center", 
                  width: "100%", 
                  padding: { xs: "0", md: "10px",
                  }}}>
                <Grid container spacing={2} sx={{ width: "100%" }}>
                  {/* First column */}
                  <Grid item xs={12} md={6}>
                    <Box
                      component="img"
                      src="/images/image13.jpeg"
                      alt="Boat on Calm Water"
                      sx={{
                        width: '100%',
                        mb: 2,
                      }}
                    />
                    <Box
                      component="img"
                      src="/images/image4.jpeg"
                      alt="Wintry Mountain Landscape"
                      sx={{
                        width: '100%',
                        mb: 2,
                        display: { xs: 'none', md: 'block' }
                      }}
                    />
                  </Grid>

                  {/* Second column */}
                  <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' }}}>
                    <Box
                      component="img"
                      src="/images/image12.jpeg"
                      alt="Mountains in the Clouds"
                      sx={{
                        width: '100%',
                        mb: 2,
                      }}
                    />
                    <Box
                      component="img"
                      src="/images/image6.jpeg"
                      alt="Boat on Calm Water"
                      sx={{
                        width: '100%',
                        mb: 2,
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
          </Box>

          {/* Right side (Text content) */}
          <Box 
            sx={{ 
              width: {xs: "100%", md:"50%"},
              marginTop: {xs: "25px", md: "0"},
              pl: "10px",
              }}>
            <Typography
                sx={{
                  fontSize: {xs: "16px", md: "20px"},
                  fontWeight: "medium",
                  marginTop: "5px",
                  color: "#f4b400"
                }}>
                AT MPUMELELO, WE ARE COMMITTED:
            </Typography>
            <List 
              sx={{ 
                listStyleType: "disc", 
                pl: {xs: 2, md: 4}, 
                width: {xs: "100%", md:"80%"},
                }}>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText primary="To break down barriers that limit the potential of children and youth, enabling them to thrive despite the challenges of poverty and inequality." />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText primary="To reaffirm the belief that every child has immense value, strength, and the right to pursue their dreams without socio-economic constraints." />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText primary="To provide the care, support, and resources required to empower boys and girls to overcome obstacles and realize their fullest potential." />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText primary="To nurture resilience and confidence through programs that address physical, emotional, educational, and psychological needs." />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText primary="To foster a future where all children grow into empowered, self-sufficient individuals who positively impact their communities and the world." />
              </ListItem>
            </List>
            
            <Typography
                sx={{
                  fontSize: {xs: "16px", md: "20px"},
                  fontWeight: "medium",
                  color: "#f4b400", // Accent color
                }}>
                AND FOR THESE ENDS:
            </Typography>
            <List 
              sx={{ 
                listStyleType: "disc", 
                pl: {xs: 2, md: 4}, 
                width: {xs: "100%", md:"80%"},
                }}>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText primary="To partner with communities, schools, and health organizations to deliver tailored programs that meet diverse needs." />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText primary="To create safe, nurturing spaces where children experience hope, dignity, and opportunity." />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText primary="To unite our strength with the support of volunteers, staff, and partners who share our vision of an equitable future for all children." />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText primary=" To establish and strengthen networks of mentorship and community support, providing essential resources to help children rise above their circumstances." />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>

      {/* Our Mission Section */}
      <Box sx={{pt: 0.2, pb:0.4 }}>
        <Grid >
          <Grid item xs={12} md={4}>
            <Card 
              sx={{ 
                display: "flex", 
                flexDirection: {xs:"column", sm:"row" }, 
                justifyItems: "center", 
                alignItems: "center", 
                height: "100%", 
                backgroundColor: '#02b5e2', 
                color: 'white' 
                }}>
              <CardContent 
                sx={{ 
                  color: 'white',
                  // py: 4,
                  }}>
                <Box 
                  sx={{ 
                    width: "90%", 
                    margin: "auto",
                    py: { xs: 3, md: 0 }
                    }}>
                  <Typography variant="h5" 
                    sx={{ 
                      fontSize: "32px",
                      mb: 2,
                      }}>
                    OUR MISSION
                  </Typography>
                  <Typography variant="body2" 
                    sx={{ 
                      lineHeight: 1.6, 
                      color: "white", 
                      fontSize: {xs: "17px", md: "18px"} 
                      }}>
                    To provide holistic care and education, while ensuring the emotional and
                    physical well-being of children. We strive to foster equality, dignity,
                    and opportunities, empowering the next generation to be self-sufficient
                    and impactful members of society.
                  </Typography>
                </Box>
              </CardContent>
              <CardMedia
                component="img"
                // height="200"
                image="/images/image22.jpg"
                alt="Our Mission"
                sx={{ 
                  height: 250,
                  objectFit: "cover",
                  objectPosition: "center"
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "auto",
          width: { xs: "85%", md:"70%" },
          backgroundColor: "white",
          color: "white",
          py: 10,
          mt: {xs: 0, md: 8},
          textAlign: "center",
        }}>
        <Typography
          sx={{
            fontSize: {xs: "16px", md: "18px"},
            fontWeight: "bold",
            color: "#007CC2",
            marginBottom: "1rem",
          }}>
          WE ARE RESOLVED TO COMBINE OUR EFFORTS TO ACCOMPLISH THESE AIMS.  
        </Typography>
        <Typography variant="body1" sx={{ color: "#333" }}>
          With the unwavering commitment of our team and supporters, we invest in the well-being of boys and girls today, shaping a brighter tomorrow. Together, we aim to dismantle the barriers of inequality and build a world where every child can grow and thrive.
        </Typography>
        {/* Buttons  */}
        <Box 
          sx={{ 
            display: "flex", 
            gap: {xs: "16px", md: "30px"}, 
            marginTop: "2rem",
            }}>
          <Button
            variant='outlined'
            color='inherit'
            size='large'
            sx={{
              borderRadius: 0,
              px: { xs: 2, lg: 4 },
              py: 2,
              textTransform: 'none',
              color: '#02b5e2',
              borderColor: '#02b5e2',
            }}
            href='/who-we-are'
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
            }>
              Learn More
          </Button>
          <Button
            variant='outlined'
            color='inherit'
            size='large'
            sx={{
              borderRadius: 0,
              px: { xs: 2, lg: 4 },
              py: 2,
              textTransform: 'none',
              color: 'white',
              backgroundColor: '#02b5e2',
            }}
            href='/donate'
            endIcon={
              <SvgIcon >
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 12h14m-4 4l4-4m-4-4l4 4'
                />
              </SvgIcon>
            }>
              Get Involved
          </Button>
        </Box>

        <Divider sx={{ 
          width: '60%',
          mt: 8,
          borderColor: '#007CC2',
          borderWidth: '0.5px',
          opacity: 0.5,
        }} />

      </Box>
      
    </Box>
  );
};

export default WhyWeDoItPage;
