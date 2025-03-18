'use client';
import { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Avatar,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  School,
  VolunteerActivism,
  HealthAndSafety,
  People,
  ArrowForward,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Check,
} from '@mui/icons-material';
import Link from 'next/link';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Hero slider functionality
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/images/hero1.jpg',
      title: 'Empowering Children, Transforming Communities',
      subtitle:
        'Join us in making a difference in the lives of children in rural South Africa',
    },
    {
      image: '/images/hero2.jpg',
      title: 'Education is the Key to a Brighter Future',
      subtitle: 'Supporting academic excellence through tutoring and resources',
    },
    {
      image: '/images/hero3.jpg',
      title: 'Nurturing Health and Wellbeing',
      subtitle:
        'Providing nutrition, healthcare, and essential supplies to children in need',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Intersection Observer for animations
  const useIntersectionObserver = (options = {}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      }, options);

      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, [options]);

    return [ref, isVisible];
  };

  // Refs for animated sections
  const [statsRef, statsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [programsRef, programsVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [impactRef, impactVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [testimonialsRef, testimonialsVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [ctaRef, ctaVisible] = useIntersectionObserver({ threshold: 0.1 });

  // Programs data
  const programs = [
    {
      title: 'Education Support',
      description:
        'Providing tutoring, school supplies, and academic resources to help children excel in their studies.',
      icon: <School sx={{ fontSize: 40, color: '#00B5E2' }} />,
      link: '/what-we-do#education',
    },
    {
      title: 'Health & Nutrition',
      description:
        'Ensuring children have access to nutritious meals, hygiene supplies, and basic healthcare.',
      icon: <HealthAndSafety sx={{ fontSize: 40, color: '#00B5E2' }} />,
      link: '/what-we-do#health',
    },
    {
      title: 'Basic Necessities',
      description:
        'Distributing clothing, toiletries, and other essential items to children in need.',
      icon: <VolunteerActivism sx={{ fontSize: 40, color: '#00B5E2' }} />,
      link: '/what-we-do#necessities',
    },
    {
      title: 'Community Engagement',
      description:
        'Building stronger communities through events, workshops, and volunteer opportunities.',
      icon: <People sx={{ fontSize: 40, color: '#00B5E2' }} />,
      link: '/what-we-do#community',
    },
  ];

  // Impact statistics
  const stats = [
    { number: '1,000+', label: 'Children Supported' },
    { number: '12', label: 'Communities Reached' },
    { number: '85%', label: 'Academic Improvement' },
    { number: '3,000+', label: 'Meals Provided Monthly' },
  ];

  // Testimonials
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
      role: 'Volunteer',
      image: 'https://source.unsplash.com/6anudmpILw4',
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '80vh', md: '90vh' },
          minHeight: { xs: '500px', md: '600px' },
          overflow: 'hidden',
        }}
      >
        {/* Slider */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        >
          {slides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: currentSlide === index ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </Box>

        {/* Slider Controls */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 2,
            zIndex: 2,
          }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => goToSlide(index)}
              sx={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor:
                  currentSlide === index ? '#00B5E2' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </Box>

        {/* Arrow Controls */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: 'absolute',
            left: { xs: '10px', md: '30px' },
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: 2,
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.5)',
            },
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          <KeyboardArrowLeft />
        </IconButton>

        <IconButton
          onClick={nextSlide}
          sx={{
            position: 'absolute',
            right: { xs: '10px', md: '30px' },
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: 2,
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.5)',
            },
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          <KeyboardArrowRight />
        </IconButton>

        {/* Hero Content */}
        <Container
          maxWidth='lg'
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
            color: 'white',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: '100%', md: '60%' },
            }}
          >
            <Typography
              variant='h2'
              component='h1'
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              {slides[currentSlide].title}
            </Typography>
            <Typography
              variant='h5'
              sx={{
                mb: 4,
                opacity: 0.9,
                textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                fontSize: { xs: '1.2rem', sm: '1.5rem' },
              }}
            >
              {slides[currentSlide].subtitle}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Button
                component={Link}
                href='/what-we-do'
                variant='contained'
                size='large'
                sx={{
                  backgroundColor: '#00B5E2',
                  '&:hover': {
                    backgroundColor: '#0088a9',
                  },
                  borderRadius: 0,
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 500,
                }}
              >
                Our Programs
              </Button>
              <Button
                component={Link}
                href='/donate'
                variant='outlined'
                size='large'
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
                  textTransform: 'none',
                  fontWeight: 500,
                }}
              >
                Donate Now
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        ref={statsRef}
        sx={{
          py: 6,
          backgroundColor: '#00B5E2',
          color: 'white',
        }}
      >
        <Container maxWidth='lg'>
          <Grid
            container
            spacing={3}
            className={statsVisible ? 'animate-fade-in' : ''}
            sx={{ opacity: statsVisible ? 1 : 0 }}
          >
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
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
                      mb: 1,
                      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{
                      fontSize: { xs: '1rem', md: '1.25rem' },
                      opacity: 0.9,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box
        sx={{
          py: 8,
          backgroundColor: 'white',
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
                variant='overline'
                sx={{
                  color: '#00B5E2',
                  fontWeight: 'bold',
                  letterSpacing: 1.5,
                  mb: 1,
                  display: 'block',
                }}
              >
                ABOUT US
              </Typography>
              <Typography
                variant='h4'
                component='h2'
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  color: '#333',
                }}
              >
                Empowering Children in Rural Communities
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  mb: 3,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: '#555',
                }}
              >
                Welcome to Mpumeleolo Caring for Boys and Girls Foundation, also
                known as "Caring," an organization founded on the belief that
                every child deserves equal opportunities. We are committed to
                uplifting both boys and girls to break the cycle of poverty and
                inequality, and pursue their dreams without barriers.
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: '#555',
                }}
              >
                At Caring, we understand that a child's potential should not be
                limited by their circumstances. Through partnerships with local
                communities, schools, and health organizations, we create a
                nurturing environment where boys and girls can thrive and become
                empowered individuals.
              </Typography>
              <Button
                component={Link}
                href='/who-we-are'
                variant='outlined'
                endIcon={<ArrowForward />}
                sx={{
                  borderColor: '#00B5E2',
                  color: '#00B5E2',
                  '&:hover': {
                    borderColor: '#0088a9',
                    backgroundColor: 'rgba(0, 181, 226, 0.1)',
                  },
                  borderRadius: 0,
                  px: 3,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 500,
                }}
              >
                Learn More About Us
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Programs Section */}
      <Box
        ref={programsRef}
        sx={{
          py: 8,
          backgroundColor: '#f5f5f5',
        }}
      >
        <Container maxWidth='lg'>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant='overline'
              sx={{
                color: '#00B5E2',
                fontWeight: 'bold',
                letterSpacing: 1.5,
                mb: 1,
                display: 'block',
              }}
            >
              OUR PROGRAMS
            </Typography>
            <Typography
              variant='h4'
              component='h2'
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: '#333',
              }}
            >
              How We Make a Difference
            </Typography>
            <Typography
              variant='body1'
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                fontSize: '1.1rem',
                color: '#555',
              }}
            >
              Our comprehensive programs address the diverse needs of children
              in rural communities
            </Typography>
          </Box>

          <Grid
            container
            spacing={4}
            className={programsVisible ? 'animate-slide-up' : ''}
            sx={{ opacity: programsVisible ? 1 : 0 }}
          >
            {programs.map((program, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
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
                  <Box sx={{ mb: 2 }}>{program.icon}</Box>
                  <Typography
                    variant='h6'
                    component='h3'
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      color: '#333',
                    }}
                  >
                    {program.title}
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{
                      mb: 3,
                      flexGrow: 1,
                      color: '#555',
                      lineHeight: 1.7,
                    }}
                  >
                    {program.description}
                  </Typography>
                  <Button
                    component={Link}
                    href={program.link}
                    variant='text'
                    endIcon={<ArrowForward />}
                    sx={{
                      alignSelf: 'flex-start',
                      color: '#00B5E2',
                      p: 0,
                      '&:hover': {
                        backgroundColor: 'transparent',
                        textDecoration: 'underline',
                      },
                      textTransform: 'none',
                    }}
                  >
                    Learn More
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Impact Section */}
      <Box
        ref={impactRef}
        sx={{
          py: 8,
          backgroundColor: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={6} alignItems='center'>
            <Grid
              item
              xs={12}
              md={6}
              className={impactVisible ? 'animate-slide-in-left' : ''}
              sx={{ opacity: impactVisible ? 1 : 0 }}
            >
              <Typography
                variant='overline'
                sx={{
                  color: '#00B5E2',
                  fontWeight: 'bold',
                  letterSpacing: 1.5,
                  mb: 1,
                  display: 'block',
                }}
              >
                OUR IMPACT
              </Typography>
              <Typography
                variant='h4'
                component='h2'
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  color: '#333',
                }}
              >
                Creating Lasting Change
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  mb: 3,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: '#555',
                }}
              >
                At Mpumelelo Foundation, we measure our success by the positive
                changes we see in the lives of the children we serve. Our
                holistic approach addresses not only immediate needs but also
                creates pathways for long-term success.
              </Typography>

              <Box sx={{ mb: 4 }}>
                {[
                  'Improved academic performance and school attendance',
                  'Better nutrition and health outcomes',
                  'Increased confidence and self-esteem',
                  'Development of leadership skills and community engagement',
                  'Breaking the cycle of poverty through education and support',
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        minWidth: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: '#00B5E2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                        mt: 0.5,
                      }}
                    >
                      <Check sx={{ color: 'white', fontSize: 16 }} />
                    </Box>
                    <Typography
                      variant='body1'
                      sx={{
                        color: '#555',
                        lineHeight: 1.7,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Button
                component={Link}
                href='/why-we-do-it'
                variant='contained'
                endIcon={<ArrowForward />}
                sx={{
                  backgroundColor: '#00B5E2',
                  '&:hover': {
                    backgroundColor: '#0088a9',
                  },
                  borderRadius: 0,
                  px: 3,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 500,
                }}
              >
                Learn About Our Impact
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              className={impactVisible ? 'animate-slide-in-right' : ''}
              sx={{ opacity: impactVisible ? 1 : 0 }}
            >
              <Box
                component='img'
                src='/images/image4.jpeg'
                alt="Our impact on children's lives"
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

      {/* Testimonials Section */}
      <Box
        ref={testimonialsRef}
        sx={{
          py: 8,
          backgroundColor: '#00B5E2',
          color: 'white',
        }}
      >
        <Container maxWidth='lg'>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant='overline'
              sx={{
                color: 'white',
                fontWeight: 'bold',
                letterSpacing: 1.5,
                mb: 1,
                display: 'block',
                opacity: 0.9,
              }}
            >
              TESTIMONIALS
            </Typography>
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
                opacity: 0.9,
              }}
            >
              Hear from those whose lives have been touched by our work
            </Typography>
          </Box>

          <Box
            className={testimonialsVisible ? 'animate-fade-in' : ''}
            sx={{
              opacity: testimonialsVisible ? 1 : 0,
              position: 'relative',
              maxWidth: '900px',
              mx: 'auto',
              px: { xs: 2, md: 6 },
            }}
          >
            {/* Quote Icon */}
            <Box
              sx={{
                position: 'absolute',
                top: -30,
                left: { xs: 0, md: 40 },
                opacity: 0.2,
                fontSize: '120px',
                lineHeight: 1,
                fontFamily: 'serif',
              }}
            >
              "
            </Box>

            {/* Testimonial Content */}
            <Box
              sx={{
                minHeight: { xs: '300px', md: '250px' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {testimonials.map((testimonial, index) => (
                <Box
                  key={index}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: activeTestimonial === index ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    visibility:
                      activeTestimonial === index ? 'visible' : 'hidden',
                  }}
                >
                  <Typography
                    variant='h6'
                    sx={{
                      mb: 4,
                      fontStyle: 'italic',
                      textAlign: 'center',
                      lineHeight: 1.7,
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                    }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Avatar
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{
                        width: 60,
                        height: 60,
                        border: '2px solid white',
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
                      <Typography
                        variant='body2'
                        sx={{
                          opacity: 0.9,
                        }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Navigation Dots */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 1,
                mt: 4,
              }}
            >
              {testimonials.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  sx={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor:
                      activeTestimonial === index
                        ? 'white'
                        : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Box>

            {/* Navigation Arrows */}
            <IconButton
              onClick={prevTestimonial}
              sx={{
                position: 'absolute',
                left: { xs: '-10px', md: 0 },
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.2)',
                },
              }}
            >
              <KeyboardArrowLeft />
            </IconButton>
            <IconButton
              onClick={nextTestimonial}
              sx={{
                position: 'absolute',
                right: { xs: '-10px', md: 0 },
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.2)',
                },
              }}
            >
              <KeyboardArrowRight />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Recent Blog Posts */}
      <Box
        sx={{
          py: 8,
          backgroundColor: 'white',
        }}
      >
        <Container maxWidth='lg'>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant='overline'
              sx={{
                color: '#00B5E2',
                fontWeight: 'bold',
                letterSpacing: 1.5,
                mb: 1,
                display: 'block',
              }}
            >
              OUR BLOG
            </Typography>
            <Typography
              variant='h4'
              component='h2'
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: '#333',
              }}
            >
              Latest News & Stories
            </Typography>
            <Typography
              variant='body1'
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                fontSize: '1.1rem',
                color: '#555',
              }}
            >
              Stay updated with our recent activities and impact stories
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                title: 'Youth Leadership Program Launches',
                excerpt:
                  'Our new Youth Leadership Initiative is equipping teenagers with essential skills in public speaking, project management, and community advocacy.',
                image: '/images/image4.jpeg',
                date: 'February 20, 2025',
                slug: '/blog/youth-leadership-program-launches',
              },
              {
                title: 'Community Health Fair Success',
                excerpt:
                  'Our recent health fair provided free check-ups, nutrition education, and hygiene supplies to over 200 children and their families.',
                image: '/images/image3.jpeg',
                date: 'March 5, 2025',
                slug: '/blog/community-health-fair-success',
              },
              {
                title: 'Transforming Lives Through Education',
                excerpt:
                  'Discover how our after-school tutoring program is helping children in rural communities excel in mathematics and science.',
                image: '/images/image5.jpeg',
                date: 'March 15, 2025',
                slug: '/blog/transforming-lives-through-education',
              },
            ].map((post, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                    height='200'
                    image={post.image}
                    alt={post.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant='caption'
                      sx={{
                        color: '#00B5E2',
                        mb: 1,
                        display: 'block',
                      }}
                    >
                      {post.date}
                    </Typography>
                    <Typography
                      variant='h6'
                      component='h3'
                      sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        color: '#333',
                      }}
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{
                        mb: 3,
                        color: '#555',
                        lineHeight: 1.7,
                      }}
                    >
                      {post.excerpt}
                    </Typography>
                    <Button
                      component={Link}
                      href={post.slug}
                      variant='text'
                      endIcon={<ArrowForward />}
                      sx={{
                        color: '#00B5E2',
                        p: 0,
                        '&:hover': {
                          backgroundColor: 'transparent',
                          textDecoration: 'underline',
                        },
                        textTransform: 'none',
                      }}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              component={Link}
              href='/blog'
              variant='outlined'
              endIcon={<ArrowForward />}
              sx={{
                borderColor: '#00B5E2',
                color: '#00B5E2',
                '&:hover': {
                  borderColor: '#0088a9',
                  backgroundColor: 'rgba(0, 181, 226, 0.1)',
                },
                borderRadius: 0,
                px: 3,
                py: 1.5,
                textTransform: 'none',
                fontWeight: 500,
              }}
            >
              View All Blog Posts
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        ref={ctaRef}
        sx={{
          py: 8,
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/hero2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container
          maxWidth='md'
          className={ctaVisible ? 'animate-fade-in' : ''}
          sx={{ opacity: ctaVisible ? 1 : 0 }}
        >
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
              opacity: 0.9,
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
              component={Link}
              href='/donate'
              variant='contained'
              size='large'
              sx={{
                backgroundColor: '#00B5E2',
                '&:hover': {
                  backgroundColor: '#0088a9',
                },
                borderRadius: 0,
                px: 4,
                py: 1.5,
                textTransform: 'none',
                fontWeight: 500,
              }}
            >
              Donate Now
            </Button>
            <Button
              component={Link}
              href='/contact-us'
              variant='outlined'
              size='large'
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
                textTransform: 'none',
                fontWeight: 500,
              }}
            >
              Get Involved
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
