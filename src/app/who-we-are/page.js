'use client';
import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Collapse,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { School, Favorite, People, EmojiEvents } from '@mui/icons-material';

export default function About() {
  // Accordion state
  const [expanded, setExpanded] = useState(false);
  // Handle accordion change
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //  Content for the hero section
  const sections = [
    {
      title: 'OUR VISION',
      description:
        'To empower every child, regardless of gender or background, to achieve their full potential by ensuring access to essential resources, education, and support for a brighter future, while fostering an environment that nurtures their unique talents and ambitions.',
      imgSrc: '/images/hero2.jpg',
      linkText: 'More about our mission and history',
      linkUrl: '#',
    },
    {
      title: 'OUR MISSION',
      description:
        'To provide holistic care, education, protection, and ensure their physical, emotional and psychological well-being is in good shape. We foster a safe, supportive environment, promoting equality, dignity, and opportunities for a brighter future, helping both boys and girls become confident, self-sufficient, and become national and global assets.',
      imgSrc: '/images/hero1.jpg',
      linkText: 'More about how we work',
      linkUrl: '#',
    },
  ];

  // Content for the dropdown menu
  const activitiesItems = [
    {
      question: 'PROVIDE NUTRITIONAL SUPPORT',
      answer:
        'We provide the children with meals before and after school to combat hunger and poor living conditions in rural areas.',
    },
    {
      question: 'DEVELOP SPORTS ACTIVITIES',
      answer:
        'We promote the physical health of the children by organizing various sporting activities to engage them in.',
    },
    {
      question: 'ACADEMIC SUPPORT IN SCIENCE AND MATHEMATICS',
      answer:
        'We assist children with their homework and provide additional classes to enhance their understanding of science and mathematics.',
    },
    {
      question: 'COMMUNITY ENGAGEMENT THROUGH ANNUAL EVENTS',
      answer:
        'We enhance communal living, giving back, and social responsibility in the boys and girls by organizing annual events like a Christmas party for the elderly in the community, where children can engage in activities, performances, and gift-giving.',
    },
    {
      question: 'PROVIDE HYGIENE AND CLOTHING ESSENTIALS',
      answer:
        'We ensure that children have access to essential hygiene products and clothing, by distributing cosmetics and sanitary towels to girls, along with clothes, toiletries and other hygiene essentials for the children.',
    },
  ];

  // Team members data
  const teamMembers = [
    {
      name: 'Nomsa Mbatha',
      role: 'Founder & Executive Director',
      bio: "With over 15 years of experience in child welfare and community development, Nomsa founded the Mpumelelo Foundation to address the critical needs of children in rural areas. Her vision and leadership have guided the organization's growth and impact.",
      image: '/images/image3.jpeg',
    },
    {
      name: 'Thabo Nkosi',
      role: 'Education Program Director',
      bio: 'A former teacher with a passion for educational equity, Thabo oversees all academic support programs. His innovative approaches to tutoring and mentorship have significantly improved educational outcomes for hundreds of children.',
      image: 'images/image4.jpeg',
    },
    {
      name: 'Lerato Dlamini',
      role: 'Health & Wellness Coordinator',
      bio: 'With a background in public health, Lerato manages our nutrition and healthcare initiatives. Her dedication ensures that children receive the physical support they need to thrive academically and personally.',
      image: 'images/image5.jpeg',
    },
    {
      name: 'Sipho Mthembu',
      role: 'Community Outreach Manager',
      bio: 'Sipho builds and maintains relationships with local communities, schools, and partner organizations. His deep understanding of community dynamics helps ensure our programs are culturally relevant and effectively implemented.',
      image: '/images/image6.jpeg',
    },
  ];

  // Timeline data
  const timelineEvents = [
    {
      year: '2015',
      title: 'Foundation Established',
      description:
        'Mpumelelo Foundation was founded with a mission to support children in rural communities.',
    },
    {
      year: '2017',
      title: 'First Education Program',
      description:
        'Launched our flagship after-school tutoring program in mathematics and science.',
    },
    {
      year: '2019',
      title: 'Expanded to Health Initiatives',
      description:
        'Began providing nutritional support and hygiene essentials to address physical wellbeing.',
    },
    {
      year: '2021',
      title: 'Community Center Opened',
      description:
        'Established our first dedicated space for programs and community gatherings.',
    },
    {
      year: '2023',
      title: 'Youth Leadership Program',
      description:
        'Launched initiatives focused on developing leadership skills in teenagers.',
    },
    {
      year: '2025',
      title: 'Reaching New Communities',
      description:
        'Expanded programs to five additional rural areas, reaching over 1,000 children.',
    },
  ];

  // Create a state variable to track whether the full text is shown:
  const [showFullText, setShowFullText] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/image13.jpeg')`,
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
            Who We Are
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
            Dedicated to empowering children in rural communities through
            education, health support, and community development
          </Typography>
          <Button
            variant='contained'
            size='large'
            href='#our-story'
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
            Our Story
          </Button>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Box
        id='our-story'
        sx={{
          backgroundColor: 'white',
          py: 8,
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={6} alignItems='center'>
            <Grid item xs={12} md={6}>
              <Box
                component='img'
                src='/images/image13.jpeg'
                alt='Children at Mpumelelo Foundation'
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}
              />
            </Grid>
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
                Our Story
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  mb: 3,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                }}
              >
                Welcome to Mpumeleolo Caring for Boys and Girls Foundation, also
                known as "Caring," an organization founded on the belief that
                every child deserves equal opportunities. We are committed to
                uplifting both boys and girls to break the cycle of poverty and
                inequality, and pursue their dreams without barriers.
              </Typography>
              <Collapse in={showFullText} timeout={800}>
                <Typography
                  variant='body1'
                  sx={{
                    mb: 3,
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                  }}
                >
                  At Caring, we understand that a child's potential should not
                  be limited by their undeserved backgrounds or circumstances.
                  So, we provide suited programs that address the unique needs
                  of each child we serve. Through partnerships with local
                  communities, schools, and health organizations, we try to
                  create a nurturing environment where boys and girls can thrive
                  and become empowered individuals.
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    mb: 3,
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                  }}
                >
                  Our dedicated team of volunteers and staff work tirelessly to
                  deliver essential resources, mentorship, and advocacy. We
                  believe that by investing in the wellbeing of our young ones,
                  we are building a brighter future for everyone.
                </Typography>
              </Collapse>
              <Button
                variant='text'
                color='primary'
                onClick={() => setShowFullText(!showFullText)}
                sx={{
                  color: '#00B5E2',
                  textTransform: 'none',
                  p: 0,
                  fontWeight: 'medium',
                }}
              >
                {showFullText ? 'Show Less' : 'Read More'}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Core Values Section */}
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
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
              Our Core Values
            </Typography>
            <Typography
              variant='body1'
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                fontSize: '1.1rem',
              }}
            >
              These principles guide our work and define our approach to
              supporting children and communities
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                icon: <Favorite sx={{ fontSize: 40, color: '#00B5E2' }} />,
                title: 'Compassion',
                description:
                  'We approach our work with empathy and understanding, recognizing the unique challenges faced by each child we serve.',
              },
              {
                icon: <People sx={{ fontSize: 40, color: '#00B5E2' }} />,
                title: 'Inclusivity',
                description:
                  'We believe in equal opportunities for all children, regardless of gender, background, or circumstances.',
              },
              {
                icon: <School sx={{ fontSize: 40, color: '#00B5E2' }} />,
                title: 'Education',
                description:
                  'We view education as the foundation for breaking the cycle of poverty and creating sustainable change.',
              },
              {
                icon: <EmojiEvents sx={{ fontSize: 40, color: '#00B5E2' }} />,
                title: 'Excellence',
                description:
                  'We strive for the highest standards in all our programs and services, continuously improving our impact.',
              },
            ].map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderRadius: 2,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{value.icon}</Box>
                  <Typography
                    variant='h6'
                    component='h3'
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography variant='body2'>{value.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Vision & Mission Section */}
      <Box
        sx={{
          backgroundColor: 'white',
          py: 8,
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={4}>
            {sections.map((section, index) => (
              <Grid item xs={12} md={6} key={index}>
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
                  <CardMedia
                    component='img'
                    height='240'
                    image={section.imgSrc}
                    alt={section.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      backgroundColor: index === 0 ? 'white' : '#00B5E2',
                      color: index === 0 ? 'inherit' : 'white',
                      p: 4,
                    }}
                  >
                    <Typography
                      variant='h5'
                      component='h3'
                      sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        color: index === 0 ? '#00B5E2' : 'white',
                      }}
                    >
                      {section.title}
                    </Typography>
                    <Typography
                      variant='body1'
                      sx={{
                        mb: 3,
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                      }}
                    >
                      {section.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Journey Timeline */}
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
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
              Our Journey
            </Typography>
            <Typography
              variant='body1'
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                fontSize: '1.1rem',
              }}
            >
              Milestones in our mission to empower children and transform
              communities
            </Typography>
          </Box>

          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            {timelineEvents.map((event, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  mb: 4,
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    left: { xs: '20px', md: '60px' },
                    top: '40px',
                    bottom: index === timelineEvents.length - 1 ? '0' : '-20px',
                    width: '2px',
                    backgroundColor:
                      index === timelineEvents.length - 1
                        ? 'transparent'
                        : '#00B5E2',
                  },
                }}
              >
                <Box
                  sx={{
                    width: { xs: '40px', md: '120px' },
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: '40px', md: '60px' },
                      height: { xs: '40px', md: '60px' },
                      borderRadius: '50%',
                      backgroundColor: '#00B5E2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: { xs: '0.9rem', md: '1.1rem' },
                      zIndex: 1,
                    }}
                  >
                    {event.year}
                  </Box>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    p: 3,
                    backgroundColor: 'white',
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  }}
                >
                  <Typography
                    variant='h6'
                    component='h3'
                    sx={{
                      fontWeight: 'bold',
                      mb: 1,
                      color: '#333',
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Typography variant='body1'>{event.description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Meet Our Team */}
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
              Meet Our Team
            </Typography>
            <Typography
              variant='body1'
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                fontSize: '1.1rem',
              }}
            >
              Dedicated professionals committed to making a difference in
              children's lives
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  <CardMedia
                    component='img'
                    height='240'
                    image={member.image}
                    alt={member.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant='h6'
                      component='h3'
                      sx={{
                        fontWeight: 'bold',
                        mb: 1,
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant='subtitle2'
                      sx={{
                        color: '#00B5E2',
                        mb: 2,
                      }}
                    >
                      {member.role}
                    </Typography>
                    <Typography variant='body2'>{member.bio}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Activities Section */}
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
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
                Our Activities
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                }}
              >
                In a bid to address the immediate needs of boys and girls in
                rural areas, we implement a range of activities designed to
                support their development and wellbeing.
              </Typography>

              <Box sx={{ mb: 4 }}>
                {activitiesItems.map((item, index) => (
                  <Accordion
                    key={index}
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleChange(`panel${index + 1}`)}
                    sx={{
                      mb: 2,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                      borderRadius: '4px !important',
                      '&:before': { display: 'none' },
                      '&.Mui-expanded': {
                        margin: 0,
                        mb: 2,
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: '#00B5E2' }} />}
                      aria-controls={`panel${index + 1}-content`}
                      id={`panel${index + 1}-header`}
                      sx={{
                        backgroundColor:
                          expanded === `panel${index + 1}`
                            ? 'rgba(0, 181, 226, 0.05)'
                            : 'transparent',
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 'bold',
                          color:
                            expanded === `panel${index + 1}`
                              ? '#00B5E2'
                              : 'inherit',
                        }}
                      >
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant='body2' sx={{ lineHeight: 1.7 }}>
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component='img'
                src='/images/image4.jpeg'
                alt='Children participating in activities'
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

      {/* Call to Action */}
      <Box
        sx={{
          backgroundColor: '#00B5E2',
          color: 'white',
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
              mb: 3,
            }}
          >
            Join Us in Making a Difference
          </Typography>
          <Typography
            variant='body1'
            sx={{
              mb: 4,
              fontSize: '1.1rem',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Whether through volunteering, donating, or spreading awareness, your
            support helps us continue our vital work with children in rural
            communities.
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
              variant='contained'
              size='large'
              href='/donate'
              sx={{
                backgroundColor: 'white',
                color: '#00B5E2',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
                borderRadius: 0,
                px: 4,
                py: 1.5,
              }}
            >
              Donate Now
            </Button>
            <Button
              variant='outlined'
              size='large'
              href='/contact-us'
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
                borderRadius: 0,
                px: 4,
                py: 1.5,
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
