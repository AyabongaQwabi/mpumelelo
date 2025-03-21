"use client"
import { Box, Button, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material"
import { SvgIcon } from "@mui/material"

export default function IntroductionSection() {
  //  Content for the hero section
  const sections = [
    {
      title: "EDUCATION",
      description:
        "Mpumeleolo Caring for Boys and Girls Foundation is transforming education for children in rural areas by offering tutoring and extra classes in science and mathematics. By providing essential academic support and resources, we empower young learners to achieve their full potential, paving the way for brighter futures and lifelong success.",
      imgSrc: "/images/education.jpg",
      linkText: "",
      linkUrl: "#",
    },
    {
      title: "POVERTY",
      description:
        "Addressing poverty head-on, Mpumeleolo Caring for Boys and Girls Foundation delivers vital resources such as food, clothing, and educational support to underprivileged children. Our initiatives help alleviate the harsh realities of poverty, creating opportunities for growth and development, and ultimately working towards breaking the cycle of disadvantage in rural communities.",
      imgSrc: "/images/hero1.jpg",
      linkText: "More about how we work",
      linkUrl: "#",
    },
    {
      title: "HEALTH",
      description:
        "The foundation prioritizes children's health by organizing daily feeding programs and distributing hygiene essentials. By ensuring access to nutritious meals and personal care products, we promote physical well-being and self-esteem among children, fostering a culture of health awareness that benefits not only individuals but also the broader community.",
      imgSrc: "/images/health.jpg",
      linkText: "More about how we work",
      linkUrl: "#",
    },
  ]

  const handleWhoWeAreClick = () => {
    window.location.href = "/who-we-are"
  }

  const handleWhyWeDoItClick = () => {
    window.location.href = "#"
  }

  return (
    <>
      {/* Grid of content and Images */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "white",
          justifyContent: "center",
        }}
      >
        {/* Header and info */}
        <Box sx={{ flexGrow: 1, padding: 2 }}>
          <Grid container spacing={2}>
            {/* First Div */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                align="left"
                fontWeight="medium"
                sx={{
                  mb: 4,
                  fontSize: "32px",
                  color: "#00B5E2",
                  px: { md: 4, sm: 2 },
                  pt: 4,
                }}
              >
                WHO WE ARE
                {/* <Box component="span" sx={{ color: '#1976D2' }}> US</Box> */}
              </Typography>
              <Typography
                variant="body1"
                align="start"
                fontWeight="medium"
                sx={{
                  mb: 2,
                  mx: "auto",
                  color: "#333",
                  px: { md: 4 },
                  fontSize: "1.2rem",
                }}
              >
                Welcome to Mpumeleolo Caring for Boys and Girls Foundation, also known as “Caring,” an organization
                founded on the belief that every child deserves equal opportunities. We are committed to uplifting both
                boys and girls to break the cycle of poverty and inequality, and pursue their dreams without barriers.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  mt: 3,
                  px: { md: 4 },
                }}
              >
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  sx={{
                    borderRadius: 0,
                    px: { xs: 4, lg: 6 },
                    py: 2,
                    textTransform: "none",
                    color: "#02b5e2",
                    borderColor: "#02b5e2",
                  }}
                  href="/who-we-are"
                  endIcon={
                    <SvgIcon>
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14m-4 4l4-4m-4-4l4 4"
                      />
                    </SvgIcon>
                  }
                >
                  Learn More
                </Button>
              </Box>
            </Grid>

            {/* Second Div */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                align="start"
                fontWeight="medium"
                sx={{
                  mb: 4,
                  fontSize: "32px",
                  color: "#00B5E2",
                  px: { md: 4, sm: 2 },
                  pt: 4,
                }}
              >
                WHY WE DO IT
              </Typography>
              <Typography
                variant="body1"
                align="start"
                fontWeight="medium"
                sx={{
                  mb: 2,
                  mx: "auto",
                  color: "#333",
                  px: { md: 4, sm: 2 },
                  fontSize: "1.2rem",
                }}
              >
                To alleviate poverty and change lives. At Mpumelelo foundation we believe it takes a village to raise
                children. In South Africa a significant number of children go to bed hungry and sometimes struggle to
                afford the basic life needs such as toiletries and clothes. This affects their education and some end up
                dropping out of school.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  mt: 3,
                  px: { md: 4, sm: 2 },
                }}
              >
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  sx={{
                    borderRadius: 0,
                    px: { xs: 4, lg: 6 },
                    py: 2,
                    textTransform: "none",
                    color: "#02b5e2",
                    borderColor: "#02b5e2",
                  }}
                  href="/why-we-do-it"
                  endIcon={
                    <SvgIcon>
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14m-4 4l4-4m-4-4l4 4"
                      />
                    </SvgIcon>
                  }
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Typography
            variant="h2"
            align="left"
            fontWeight="medium"
            sx={{
              mb: 4,
              mt: 10,
              mb: 4,
              fontSize: "32px",
              color: "#00B5E2",
              px: { md: 4, sm: 2 },
            }}
          >
            OUR WORK
          </Typography>
          <Typography
            align="left"
            variant="h2"
            fontWeight="medium"
            sx={{
              mb: 4,
              my: 4,
              px: { md: 4, sm: 2 },
              fontSize: "32px",
              color: "#333333",
            }}
          >
            LEARN MORE ABOUT OUR EFFORTS TO MAKE THE WORLD A BETTER PLACE
          </Typography>
        </Box>
        {/* Grid for sections */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
            px: { md: 6 },
          }}
        >
          <Grid container sx={{ width: { xs: "auto", md: "100%" } }}>
            {sections.map((section, index) => (
              <Grid item xs={12} key={index}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    height: { xs: "auto", md: "300px" },
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "flex", md: "none" },
                      width: "100%",
                      height: "300px",
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                      image={section.imgSrc}
                      alt={section.title}
                    />
                  </Box>
                  {index % 2 === 0 ? (
                    <>
                      <Box
                        sx={{
                          display: { xs: "none", md: "block" },
                          width: { md: "50%" },
                          height: "auto",
                          overflow: "hidden",
                        }}
                      >
                        <CardMedia
                          component="img"
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          image={section.imgSrc}
                          alt={section.title}
                        />
                      </Box>
                      <CardContent
                        sx={{
                          width: { xs: "100%", md: "50%" },
                          backgroundColor: "#00B5E2",
                          color: "white",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          px: 6,
                        }}
                      >
                        <Typography
                          variant="h5"
                          component="h2"
                          fontWeight="medium"
                          sx={{
                            fontSize: "32px",
                            mb: 1,
                          }}
                        >
                          {section.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          fontWeight="medium"
                          sx={{
                            mb: 2,
                            fontSize: "18px",
                          }}
                        >
                          {section.description}
                        </Typography>
                      </CardContent>
                    </>
                  ) : (
                    <>
                      <CardContent
                        sx={{
                          width: { xs: "100%", md: "50%" },
                          backgroundColor: "#00B5E2",
                          color: "white",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          px: 6,
                        }}
                      >
                        <Typography variant="h5" component="h2" fontWeight="medium" sx={{ fontSize: "32px", mb: 1 }}>
                          {section.title}
                        </Typography>
                        <Typography variant="body2" fontWeight="medium" sx={{ mb: 2, fontSize: "18px" }}>
                          {section.description}
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: { xs: "none", md: "block" },
                          width: { md: "50%" },
                          height: "auto",
                          overflow: "hidden",
                        }}
                      >
                        <CardMedia
                          component="img"
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          image={section.imgSrc}
                          alt={section.title}
                        />
                      </Box>
                    </>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  )
}

