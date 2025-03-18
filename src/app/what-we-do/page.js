'use client';
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@mui/material';
import {
  School,
  VolunteerActivism,
  HealthAndSafety,
  People,
} from '@mui/icons-material';

const WhatWeDoPage = () => {
  // Program data
  const programs = [
    {
      title: 'Education Programs',
      icon: School,
      description:
        'Our education initiatives focus on providing academic support, resources, and mentorship to children in rural areas.',
      activities: [
        'After-school tutoring in mathematics and science',
        'Provision of school supplies and learning materials',
        'Digital literacy programs and computer skills training',
        'Scholarship opportunities for promising students',
      ],
      metrics:
        "In the past year, we've supported over 200 students, with 85% showing improved academic performance.",
      image: '/images/image4.jpeg',
    },
    {
      title: 'Poverty Alleviation',
      icon: VolunteerActivism,
      description:
        'We work to address the immediate needs of children living in poverty while creating pathways to long-term stability.',
      activities: [
        'Distribution of food packages to vulnerable families',
        'Provision of clothing, shoes, and essential items',
        'Financial literacy workshops for older children',
        'Skills development programs for sustainable livelihoods',
      ],
      metrics:
        "We've distributed over 1,500 food packages and provided essential items to more than 350 children in need.",
      image: '/images/image5.jpeg',
    },
    {
      title: 'Health & Wellness',
      icon: HealthAndSafety,
      description:
        'Our health initiatives ensure children have access to proper nutrition, hygiene products, and health education.',
      activities: [
        'Daily feeding programs providing nutritious meals',
        'Distribution of hygiene kits and sanitary products',
        'Health education workshops on nutrition and personal care',
        'Partnerships with local clinics for basic health screenings',
      ],
      metrics:
        'We provide over 500 meals monthly and have distributed hygiene kits to 300+ children, improving school attendance by 40%.',
      image: '/images/image3.jpeg',
    },
    {
      title: 'Community Engagement',
      icon: People,
      description:
        'We believe in the power of community involvement to create sustainable change and support for children.',
      activities: [
        'Annual events bringing together children and community elders',
        'Parent and guardian workshops on child development',
        'Volunteer programs engaging local community members',
        "Advocacy initiatives to raise awareness about children's needs",
      ],
      metrics:
        'Our community events engage over 500 participants annually, with 75 active volunteers contributing to our programs.',
      image: '/images/image2.jpeg',
    },
  ];

  // Impact metrics
  const impactMetrics = [
    { number: '1,000+', label: 'Children Supported' },
    { number: '85%', label: 'Improved Academic Performance' },
    { number: '40%', label: 'Increase in School Attendance' },
    { number: '12', label: 'Rural Communities Reached' },
  ];

  return (
    <Box sx={{ width: '100%', backgroundColor: 'white' }}>
      {/* Banner Section */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `url('https://source.unsplash.com/vbSRUrVG7h4')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: 8,
          }}
        >
          <Typography
            variant='h4'
            sx={{
              textAlign: 'center',
              fontSize: '32px',
              color: '#00B5E2',
              fontWeight: 'bold',
            }}
          >
            WHAT WE DO
          </Typography>
          <Typography
            sx={{
              fontSize: '22px',
              fontWeight: '600',
              textAlign: 'center',
              px: 2,
              pt: 3,
              color: 'white',
            }}
          >
            Empowering Children, Transforming Communities
          </Typography>
          <Typography
            sx={{
              fontWeight: '300',
              fontSize: '18px',
              textAlign: 'center',
              px: { xs: 4, md: 8 },
              pt: 2,
              maxWidth: '800px',
              color: 'white',
            }}
          >
            Through our comprehensive programs in education, poverty
            alleviation, health, and community engagement, we're creating
            pathways for children to thrive and break the cycle of poverty.
          </Typography>
        </Box>
      </Box>

      {/* Our Approach Section */}
      <Container maxWidth='lg' sx={{ py: 8 }}>
        <Box textAlign='center' mb={6}>
          <Typography
            variant='h4'
            sx={{
              fontSize: '32px',
              color: '#00B5E2',
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            OUR APPROACH
          </Typography>
          <Typography
            variant='body1'
            sx={{
              fontSize: '18px',
              maxWidth: '800px',
              mx: 'auto',
              color: '#333',
            }}
          >
            At Mpumelelo Foundation, we take a holistic approach to supporting
            children in rural areas. We believe that addressing multiple aspects
            of a child's life - from education and nutrition to emotional
            wellbeing and community support - creates the strongest foundation
            for their future success.
          </Typography>
        </Box>

        {/* Programs Grid */}
        <Grid container spacing={4}>
          {programs.map((program, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  component='img'
                  height='200'
                  image={program.image}
                  alt={program.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <program.icon sx={{ color: '#00B5E2', mr: 1 }} />
                    <Typography
                      variant='h5'
                      component='h2'
                      sx={{ color: '#00B5E2', fontWeight: 'bold' }}
                    >
                      {program.title}
                    </Typography>
                  </Box>
                  <Typography variant='body1' sx={{ mb: 2 }}>
                    {program.description}
                  </Typography>
                  <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 2 }}>
                    Key Activities:
                  </Typography>
                  <List dense>
                    {program.activities.map((activity, idx) => (
                      <ListItem key={idx} sx={{ py: 0.5 }}>
                        <ListItemText primary={activity} />
                      </ListItem>
                    ))}
                  </List>
                  <Box
                    sx={{
                      mt: 2,
                      p: 2,
                      backgroundColor: '#f5f5f5',
                      borderRadius: 1,
                    }}
                  >
                    <Typography
                      variant='subtitle1'
                      sx={{ fontWeight: 'bold', color: '#00B5E2' }}
                    >
                      Impact:
                    </Typography>
                    <Typography variant='body2'>{program.metrics}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Impact Metrics Section */}
      <Box sx={{ backgroundColor: '#00B5E2', py: 8, color: 'white' }}>
        <Container maxWidth='lg'>
          <Typography
            variant='h4'
            sx={{
              textAlign: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              mb: 6,
            }}
          >
            OUR IMPACT
          </Typography>

          <Grid container spacing={4} justifyContent='center'>
            {impactMetrics.map((metric, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant='h3' sx={{ fontWeight: 'bold', mb: 1 }}>
                    {metric.number}
                  </Typography>
                  <Typography variant='h6'>{metric.label}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography
              variant='body1'
              sx={{ maxWidth: '800px', mx: 'auto', mb: 3 }}
            >
              Our programs are continuously monitored and evaluated to ensure
              we're making the greatest possible impact. We track attendance,
              academic performance, health indicators, and community engagement
              to measure our success and identify areas for improvement.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth='lg' sx={{ py: 8 }}>
        <Typography
          variant='h4'
          sx={{
            textAlign: 'center',
            fontSize: '32px',
            color: '#00B5E2',
            fontWeight: 'bold',
            mb: 6,
          }}
        >
          SUCCESS STORIES
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', p: 3, backgroundColor: '#f5f5f5' }}>
              <Typography variant='body1' sx={{ fontStyle: 'italic', mb: 2 }}>
                "The tutoring program has completely changed my life. Before, I
                was struggling with mathematics and science, but now I'm one of
                the top students in my class. The mentors at Mpumelelo
                Foundation didn't just help me with my studies - they helped me
                believe in myself."
              </Typography>
              <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                - Thabo, 16 years old
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', p: 3, backgroundColor: '#f5f5f5' }}>
              <Typography variant='body1' sx={{ fontStyle: 'italic', mb: 2 }}>
                "As a single mother, I was struggling to provide for my
                children's basic needs. The support from Mpumelelo Foundation -
                from food packages to school supplies - has been a blessing. Now
                my children can focus on their education instead of worrying
                about their next meal."
              </Typography>
              <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                - Nomsa, parent of program beneficiaries
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Our Partners Section */}
      {/* <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
        <Container maxWidth='lg'>
          <Typography
            variant='h4'
            sx={{
              textAlign: 'center',
              fontSize: '32px',
              color: '#00B5E2',
              fontWeight: 'bold',
              mb: 4,
            }}
          >
            OUR PARTNERS
          </Typography>

          <Typography
            variant='body1'
            sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto', mb: 6 }}
          >
            We collaborate with local schools, community organizations, health
            facilities, and businesses to maximize our impact and create
            sustainable change.
          </Typography>

          <Grid container spacing={4} justifyContent='center'>
            {[
              'https://source.unsplash.com/5U_28ojjgms',
              'https://source.unsplash.com/f9erPVtfjwI',
              'https://source.unsplash.com/8Gg2Ne_uTcM',
              'https://source.unsplash.com/QJECvNpgzxk',
            ].map((logo, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box
                  component='img'
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: 120,
                    objectFit: 'cover',
                    filter: 'grayscale(100%)',
                    opacity: 0.7,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      opacity: 1,
                    },
                  }}
                />
              </Grid>
            ))}
            <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant='body2' color='text.secondary'>
                Interested in becoming a partner? Contact us to learn more about
                collaboration opportunities.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box> */}

      {/* Call to Action Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth='md'>
          <Card
            sx={{
              p: { xs: 3, md: 6 },
              textAlign: 'center',
              backgroundImage:
                'linear-gradient(rgba(0, 181, 226, 0.85), rgba(0, 136, 169, 0.85)), url("https://source.unsplash.com/cAtzHUz7Z8g")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
            }}
          >
            <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 3 }}>
              Join Us in Making a Difference
            </Typography>
            <Typography
              variant='body1'
              sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}
            >
              Whether through volunteering, donating, or spreading awareness,
              your support helps us continue our vital work with children in
              rural communities.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'center',
                gap: 2,
              }}
            >
              <Button
                variant='contained'
                size='large'
                sx={{
                  borderRadius: 0,
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  backgroundColor: 'white',
                  color: '#00B5E2',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                  },
                }}
                href='/donate'
              >
                Donate Now
              </Button>
              <Button
                variant='outlined'
                size='large'
                sx={{
                  borderRadius: 0,
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
                href='/contact-us'
              >
                Get Involved
              </Button>
            </Box>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default WhatWeDoPage;
