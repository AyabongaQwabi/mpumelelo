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
  SvgIcon,
  Container,
  Paper,
  Avatar,
  ListItemIcon,
} from '@mui/material';
import {
  Check,
  Star,
  School,
  ChildCare,
  Public,
  Lightbulb,
} from '@mui/icons-material';

const WhyWeDoItPage = () => {
  // Testimonials data
  const testimonials = [
    {
      quote:
        'The support from Mpumelelo Foundation has changed my life. I now have hope for my future and believe I can achieve my dreams.',
      name: 'Thandi, 14',
      role: 'Program Participant',
      image: 'https://source.unsplash.com/7YVZYaVbUmw',
    },
    {
      quote:
        "As a single mother, I struggled to provide for my children's education. The foundation has lifted this burden and given my children opportunities I could never afford.",
      name: 'Mrs. Nkosi',
      role: 'Parent',
      image: 'https://source.unsplash.com/rDEOVtE7vOs',
    },
    {
      quote:
        'Working with Mpumelelo Foundation has shown me the incredible resilience of these children. With just a little support, they flourish beyond imagination.',
      name: 'Dr. Mbeki',
      role: 'Volunteer Healthcare Provider',
      image: 'https://source.unsplash.com/6anudmpILw4',
    },
  ];

  // Statistics data
  const statistics = [
    {
      number: '70%',
      label: 'of children in our programs show improved academic performance',
    },
    {
      number: '85%',
      label: 'of families report better nutrition and health outcomes',
    },
    {
      number: '90%',
      label: 'of program graduates continue to secondary education',
    },
    {
      number: '60%',
      label: 'reduction in school dropout rates in communities we serve',
    },
  ];

  return (
    <Box sx={{ width: '100%', backgroundColor: 'white' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/image7.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: 10,
          textAlign: 'center',
        }}
      >
        <Container maxWidth='md'>
          <Typography
            variant='h3'
            component='h1'
            sx={{
              fontWeight: 'bold',
              mb: 3,
            }}
          >
            Why We Do It
          </Typography>
          <Typography
            variant='h6'
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            Our mission begins with the belief that every child deserves a
            chance to dream, grow, and thrive
          </Typography>
          <Button
            variant='contained'
            size='large'
            href='#our-purpose'
            sx={{
              backgroundColor: '#00B5E2',
              '&:hover': {
                backgroundColor: '#0088a9',
              },
              borderRadius: 0,
              px: 4,
              py: 1.5,
            }}
          >
            Our Purpose
          </Button>
        </Container>
      </Box>

      {/* Our Purpose Section */}
      <Box
        id='our-purpose'
        sx={{
          backgroundColor: 'white',
          py: 8,
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={6} alignItems='center'>
            <Grid item xs={12} md={6}>
              <Typography
                variant='h4'
                component='h2'
                sx={{
                  fontWeight: 'bold',
                  color: '#00B5E2',
                  mb: 3,
                }}
              >
                Our Purpose
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  mb: 3,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                }}
              >
                At Mpumelelo Foundation, we exist to alleviate poverty and
                change lives. We believe it takes a village to raise children,
                and our work addresses the critical challenges facing young
                people in rural South Africa.
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                }}
              >
                In South Africa, a significant number of children go to bed
                hungry and struggle to afford basic necessities such as
                toiletries and clothes. This adversely affects their education,
                with many eventually dropping out of school, perpetuating the
                cycle of poverty.
              </Typography>
              <Box
                sx={{
                  p: 3,
                  backgroundColor: '#f5f5f5',
                  borderRadius: 2,
                  mb: 3,
                }}
              >
                <Typography
                  variant='h6'
                  sx={{
                    fontWeight: 'bold',
                    color: '#00B5E2',
                    mb: 2,
                  }}
                >
                  The Reality We Address:
                </Typography>
                <List disablePadding>
                  {[
                    'Children missing school due to lack of basic necessities',
                    'Limited access to quality education and academic support',
                    'Inadequate nutrition affecting physical and cognitive development',
                    'Lack of positive role models and mentorship',
                    'Limited opportunities for personal growth and development',
                  ].map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                      <ListItemIcon sx={{ minWidth: '36px' }}>
                        <Check sx={{ color: '#00B5E2' }} />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component='img'
                src='/images/image3.jpeg'
                alt='Children in need of support'
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Commitment Section */}
      <Box
        sx={{
          backgroundColor: '#5D5D5D',
          color: 'white',
          py: 8,
        }}
      >
        <Container maxWidth='lg'>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant='h4'
              component='h2'
              sx={{
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              OUR COMMITMENT
            </Typography>
            <Typography
              variant='body1'
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                fontSize: '1.1rem',
              }}
            >
              At Mpumelelo, we are committed to creating lasting positive change
              in the lives of children
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  mb: 4,
                }}
              >
                <Typography
                  variant='h5'
                  sx={{
                    fontWeight: 'bold',
                    mb: 3,
                    color: '#f4b400',
                  }}
                >
                  WE ARE COMMITTED:
                </Typography>
                <List>
                  {[
                    'To break down barriers that limit the potential of children and youth, enabling them to thrive despite the challenges of poverty and inequality.',
                    'To reaffirm the belief that every child has immense value, strength, and the right to pursue their dreams without socio-economic constraints.',
                    'To provide the care, support, and resources required to empower boys and girls to overcome obstacles and realize their fullest potential.',
                    'To nurture resilience and confidence through programs that address physical, emotional, educational, and psychological needs.',
                    'To foster a future where all children grow into empowered, self-sufficient individuals who positively impact their communities and the world.',
                  ].map((item, index) => (
                    <ListItem
                      key={index}
                      sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}
                    >
                      <ListItemIcon sx={{ minWidth: '36px', color: '#f4b400' }}>
                        <Star sx={{ fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        sx={{
                          '& .MuiListItemText-primary': {
                            lineHeight: 1.7,
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant='h5'
                  sx={{
                    fontWeight: 'bold',
                    mb: 3,
                    color: '#f4b400',
                  }}
                >
                  AND FOR THESE ENDS:
                </Typography>
                <List>
                  {[
                    'To partner with communities, schools, and health organizations to deliver tailored programs that meet diverse needs.',
                    'To create safe, nurturing spaces where children experience hope, dignity, and opportunity.',
                    'To unite our strength with the support of volunteers, staff, and partners who share our vision of an equitable future for all children.',
                    'To establish and strengthen networks of mentorship and community support, providing essential resources to help children rise above their circumstances.',
                  ].map((item, index) => (
                    <ListItem
                      key={index}
                      sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}
                    >
                      <ListItemIcon sx={{ minWidth: '36px', color: '#f4b400' }}>
                        <Star sx={{ fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        sx={{
                          '& .MuiListItemText-primary': {
                            lineHeight: 1.7,
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>

              {/* Image Grid */}
              <Grid container spacing={2} sx={{ mt: 4 }}>
                <Grid item xs={6}>
                  <Box
                    component='img'
                    src='/images/image13.jpeg'
                    alt='Our work with children'
                    sx={{
                      width: '100%',
                      borderRadius: 2,
                      height: '200px',
                      objectFit: 'cover',
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Box
                    component='img'
                    src='/images/image4.jpeg'
                    alt='Children in our programs'
                    sx={{
                      width: '100%',
                      borderRadius: 2,
                      height: '200px',
                      objectFit: 'cover',
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* The Difference We Make */}
      <Box
        sx={{
          backgroundColor: 'white',
          py: 8,
        }}
      >
        <Container maxWidth='lg'>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant='h4'
              component='h2'
              sx={{
                fontWeight: 'bold',
                color: '#00B5E2',
                mb: 2,
              }}
            >
              The Difference We Make
            </Typography>
            <Typography
              variant='body1'
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                fontSize: '1.1rem',
              }}
            >
              Our programs create measurable impact in the lives of children and
              communities
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                icon: <School sx={{ fontSize: 40, color: '#00B5E2' }} />,
                title: 'Educational Advancement',
                description:
                  'Through our tutoring and academic support programs, children improve their performance in school, develop a love for learning, and gain access to further educational opportunities.',
              },
              {
                icon: <ChildCare sx={{ fontSize: 40, color: '#00B5E2' }} />,
                title: 'Physical Wellbeing',
                description:
                  'Our nutrition and health initiatives ensure children receive proper meals and hygiene essentials, leading to better health outcomes, increased energy, and improved school attendance.',
              },
              {
                icon: <Lightbulb sx={{ fontSize: 40, color: '#00B5E2' }} />,
                title: 'Personal Development',
                description:
                  'We foster self-confidence, resilience, and leadership skills, empowering children to overcome challenges and develop a positive vision for their future.',
              },
              {
                icon: <Public sx={{ fontSize: 40, color: '#00B5E2' }} />,
                title: 'Community Transformation',
                description:
                  'By investing in children, we strengthen entire communities, creating a ripple effect that leads to reduced poverty, increased economic activity, and social cohesion.',
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{item.icon}</Box>
                  <Typography
                    variant='h6'
                    component='h3'
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      color: '#333',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Statistics */}
          <Box
            sx={{
              mt: 8,
              p: 4,
              backgroundColor: '#f5f5f5',
              borderRadius: 2,
            }}
          >
            <Typography
              variant='h5'
              component='h3'
              sx={{
                fontWeight: 'bold',
                mb: 4,
                textAlign: 'center',
                color: '#00B5E2',
              }}
            >
              Our Impact in Numbers
            </Typography>
            <Grid container spacing={3}>
              {statistics.map((stat, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 2,
                    }}
                  >
                    <Typography
                      variant='h3'
                      sx={{
                        fontWeight: 'bold',
                        color: '#00B5E2',
                        mb: 1,
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography variant='body2'>{stat.label}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box
        sx={{
          backgroundColor: '#00B5E2',
          color: 'white',
          py: 8,
        }}
      >
        <Container maxWidth='lg'>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant='h4'
              component='h2'
              sx={{
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              Voices of Impact
            </Typography>
            <Typography
              variant='body1'
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                fontSize: '1.1rem',
              }}
            >
              Hear from those whose lives have been touched by our work
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  }}
                >
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      p: 4,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography
                      variant='body1'
                      sx={{
                        mb: 3,
                        fontStyle: 'italic',
                        lineHeight: 1.7,
                        flexGrow: 1,
                      }}
                    >
                      "{testimonial.quote}"
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Avatar
                        src={testimonial.image}
                        alt={testimonial.name}
                        sx={{
                          width: 50,
                          height: 50,
                          mr: 2,
                        }}
                      />
                      <Box>
                        <Typography
                          variant='subtitle1'
                          sx={{
                            fontWeight: 'bold',
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography variant='body2'>
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Mission Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth='lg'>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}
              >
                <CardContent
                  sx={{
                    width: { xs: '100%', md: '50%' },
                    backgroundColor: '#02b5e2',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    p: 4,
                  }}
                >
                  <Typography
                    variant='h5'
                    sx={{
                      fontSize: '28px',
                      mb: 2,
                      fontWeight: 'bold',
                    }}
                  >
                    OUR MISSION
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      lineHeight: 1.6,
                      color: 'white',
                      fontSize: { xs: '16px', md: '17.5px' },
                    }}
                  >
                    To provide holistic care and education, while ensuring the
                    emotional and physical well-being of children. We strive to
                    foster equality, dignity, and opportunities, empowering the
                    next generation to be self-sufficient and impactful members
                    of society.
                  </Typography>
                </CardContent>
                <CardMedia
                  component='img'
                  image='/images/image22.jpg'
                  alt='Our Mission'
                  sx={{
                    width: { xs: '100%', md: '50%' },
                    height: { xs: '250px', md: 'auto' },
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth='md'>
          <Typography
            variant='h4'
            component='h2'
            sx={{
              fontWeight: 'bold',
              color: '#00B5E2',
              mb: 3,
            }}
          >
            WE ARE RESOLVED TO COMBINE OUR EFFORTS TO ACCOMPLISH THESE AIMS
          </Typography>
          <Typography
            variant='body1'
            sx={{
              mb: 4,
              fontSize: '1.1rem',
              maxWidth: '800px',
              mx: 'auto',
              color: '#333',
            }}
          >
            With the unwavering commitment of our team and supporters, we invest
            in the well-being of boys and girls today, shaping a brighter
            tomorrow. Together, we aim to dismantle the barriers of inequality
            and build a world where every child can grow and thrive.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              flexWrap: 'wrap',
            }}
          >
            <Button
              variant='outlined'
              color='inherit'
              size='large'
              sx={{
                borderRadius: 0,
                px: 4,
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
              }
            >
              Learn More
            </Button>
            <Button
              variant='contained'
              size='large'
              sx={{
                borderRadius: 0,
                px: 4,
                py: 2,
                textTransform: 'none',
                backgroundColor: '#02b5e2',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#0088a9',
                },
              }}
              href='/donate'
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
              Get Involved
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default WhyWeDoItPage;
