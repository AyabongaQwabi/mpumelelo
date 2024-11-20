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
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            px: 2,
            color: "#333",
            border: "1px solid red",
          }} >
          Why We Do It
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
                variant="h4"
                component="h2"
                sx={{
                fontWeight: "bold",
                color: "#f4b400", // Accent color
                marginBottom: "1rem",
                }}>
                Breaking Barriers, Building Futures
            </Typography>

            <Typography variant="body1" paragraph>
                At Mpumeleolo Caring for Boys and Girls Foundation (also known as “Caring”), we believe in the incredible potential within every child. Too many young people face barriers that limit their dreams and potential simply because of circumstances beyond their control. Our foundation exists to break these barriers by providing each child with the support, care, and resources they need to thrive.
            </Typography>
            <Typography variant="body1" paragraph>
                We understand that poverty and inequality can create insurmountable obstacles, but we also believe that these obstacles can be dismantled. At Caring, we are committed to building a world where every boy and girl has the opportunity to pursue their dreams without the constraints of socio-economic limitations.
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
      <Box sx={{ px: { xs: 2, sm: 4, md: 10 }, py: 6 }}>
        <Grid container spacing={4}>
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
            <Card >
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
