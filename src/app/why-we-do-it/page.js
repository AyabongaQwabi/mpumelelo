'use client';
import React from "react";
import { Box, Typography, Grid, Button, Card, CardContent, CardMedia } from "@mui/material";

const WhyWeDoItPage = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: 'white', justifyContent: 'center' }}>
      {/* Banner Section */}
      <Box
        sx={{
          position: "relative",
          height: "300px",
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
            fontWeight: "900",
            textAlign: "center",
            px: 2,
            color: "#007CC2",
          }} >
          WHY WE DO IT
        </Typography>
        <Typography 
          sx={{
            fontWeight: "700",
            textAlign: "center",
            px: 2,
            color: "#333",
          }}>
          Inspiring Hope, Igniting Potential
        </Typography>
        <Typography 
          sx={{
            fontWeight: "600",
            textAlign: "center",
            px: 2,
            color: "#333",
          }}>
          Our mission begins with the belief that every child deserves a chance to dream, grow, and thrive.
        </Typography>
      </Box>

      <Box
        sx={{
            backgroundColor: "#2c2c2c",
            color: "white",
            padding: "4rem 2rem",
        }}
        >
        <Grid container spacing={4} alignItems="center">
            {/* Left side (Image placeholder) */}
            <Grid item xs={12} md={6}>
            <Box
                component="img"
                src="/images/hero1.jpg" // Replace with the actual image URL
                alt="Caring for Boys and Girls"
                sx={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                }}
            />
            </Grid>

            {/* Right side (Text content) */}
            <Grid item xs={12} md={6}>
              <Typography
                  component="h2"
                  sx={{
                  fontWeight: "bold",
                  color: "#f4b400", // Accent color
                  marginBottom: "1rem",
                  }}>
                  WE AT MPUMELELO CARING FOR BOYS AND GIRLS FOUNDATION ARE DETERMINED:
              </Typography>
              <Typography variant="body1" paragraph>
                To break down barriers that limit the potential of children and youth, enabling them to thrive despite the challenges of poverty and inequality.
                To reaffirm the belief that every child has immense value, strength, and the right to pursue their dreams without socio-economic constraints.
                To provide the care, support, and resources required to empower boys and girls to overcome obstacles and realize their fullest potential.
                To nurture resilience and confidence through programs that address physical, emotional, educational, and psychological needs.
                To foster a future where all children grow into empowered, self-sufficient individuals who positively impact their communities and the world.
              </Typography>
              
              <Typography
                  component="h2"
                  sx={{
                  fontWeight: "bold",
                  color: "#f4b400", // Accent color
                  marginBottom: "1rem",
                  }}>
                  AND FOR THESE ENDS:
              </Typography>
              <Typography variant="body1" paragraph>
                To partner with communities, schools, and health organizations to deliver tailored programs that meet diverse needs.
                To create safe, nurturing spaces where children experience hope, dignity, and opportunity.
                To unite our strength with the support of volunteers, staff, and partners who share our vision of an equitable future for all children.
                To establish and strengthen networks of mentorship and community support, providing essential resources to help children rise above their circumstances.
              </Typography>

              <Typography
                  component="h2"
                  sx={{
                  fontWeight: "bold",
                  color: "#f4b400", // Accent color
                  marginBottom: "1rem",
                  }}>
                  WE ARE RESOLVED TO COMBINE OUR EFFORTS TO ACCOMPLISH THESE AIMS.  
              </Typography>
              <Typography variant="body1" paragraph>
                With the unwavering commitment of our team and supporters, we invest in the well-being of boys and girls today, shaping a brighter tomorrow. Together, we aim to dismantle the barriers of inequality and build a world where every child can grow and thrive.
              </Typography>

            <Box sx={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
                <Button
                    variant="contained"
                    color="warning"
                    sx={{ fontWeight: "bold", textTransform: "none" }}>
                Learn More
                </Button>
                <Button
                    variant="outlined"
                    color="warning"
                    sx={{ fontWeight: "bold", textTransform: "none", color: "white" }}>
                    Get Involved
                </Button>
            </Box>
            </Grid>
        </Grid>
      </Box>

      {/* Content Section */}
      <Box sx={{pt: 0.2, pb:0.4 }}>
        <Grid >
          {/* <Grid item xs={12} md={8}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#333",
                mb: 3,
              }}
            >
              What Drives Us
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#555" }}>
              Mpumeleolo Caring for Boys and Girls Foundation, also known as “Caring,” exists
              to provide opportunities for every child, regardless of their background. By
              breaking the cycle of poverty and inequality, we empower boys and girls to
              reach their full potential. Our foundation believes that every child deserves
              access to education, mentorship, and resources that nurture their well-being
              and promote a brighter future.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#555", mt: 3 }}>
              With the help of volunteers, staff, and partnerships with communities, we are
              dedicated to fostering a safe, supportive environment where children thrive.
              Together, we aim to ensure their emotional, physical, and psychological well-being.
              Through this collective effort, we are building a generation of confident,
              self-sufficient young individuals who can contribute meaningfully to society.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 4, textTransform: "none", fontWeight: "bold" }}
            >
              Learn More About Us
            </Button>
          </Grid> */}
          <Grid item xs={12} md={4}>
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                height="200"
                image="/images/hero1.jpg" // Replace with mission-related image
                alt="Our Mission"
              />
              <CardContent sx={{ backgroundColor: '#007cc2', color: 'white' }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Our Mission
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.6, color: "white" }}>
                  To provide holistic care and education, while ensuring the emotional and
                  physical well-being of children. We strive to foster equality, dignity,
                  and opportunities, empowering the next generation to be self-sufficient
                  and impactful members of society.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          backgroundColor: "#333",
          color: "white",
          py: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          Want to Know What We're Up To?
        </Typography>
        <Typography variant="body2" sx={{ mb: 4 }}>
          Sign up for our updates and stay connected to our mission.
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: "10px",
              width: "100%",
              maxWidth: "250px",
              borderRadius: "4px",
              border: "none",
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: "10px",
              width: "100%",
              maxWidth: "250px",
              borderRadius: "4px",
              border: "none",
            }}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyWeDoItPage;
