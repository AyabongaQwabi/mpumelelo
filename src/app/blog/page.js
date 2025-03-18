"use client"
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Button } from "@mui/material"
import { AccessTime, ArrowForward } from "@mui/icons-material"
import Link from "next/link"
import { getAllBlogPosts } from "../lib/blog"

export default function BlogPage() {
  const blogPosts = getAllBlogPosts()

  return (
    <Box sx={{ backgroundColor: "white", pb: 10 }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url('https://source.unsplash.com/vbSRUrVG7h4')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,0.6)",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            py: 8,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontSize: "32px",
              color: "#00B5E2",
              fontWeight: "bold",
            }}
          >
            OUR BLOG
          </Typography>
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "600",
              textAlign: "center",
              px: 2,
              pt: 3,
              color: "white",
            }}
          >
            Stories of Impact and Hope
          </Typography>
          <Typography
            sx={{
              fontWeight: "300",
              fontSize: "18px",
              textAlign: "center",
              px: { xs: 4, md: 8 },
              pt: 2,
              maxWidth: "800px",
              color: "white",
            }}
          >
            Stay updated with the latest news, success stories, and insights from our work with children in rural
            communities.
          </Typography>
        </Box>
      </Box>

      {/* Blog Posts Section */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={4}>
          {/* Featured Post (first post) */}
          {blogPosts.length > 0 && (
            <Grid item xs={12}>
              <Card
                sx={{
                  display: { xs: "block", md: "flex" },
                  height: { md: "400px" },
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  image={blogPosts[0].coverImage}
                  alt={blogPosts[0].title}
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    height: { xs: "300px", md: "100%" },
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    p: 4,
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    {blogPosts[0].categories.map((category, index) => (
                      <Chip
                        key={index}
                        label={category}
                        size="small"
                        sx={{
                          mr: 1,
                          mb: 1,
                          backgroundColor: "#00B5E2",
                          color: "white",
                          fontWeight: "medium",
                        }}
                      />
                    ))}
                  </Box>

                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      color: "#333",
                    }}
                  >
                    {blogPosts[0].title}
                  </Typography>

                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    {blogPosts[0].excerpt}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary" sx={{ mr: 3 }}>
                      {blogPosts[0].date}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "text.secondary",
                      }}
                    >
                      <AccessTime sx={{ fontSize: 16, mr: 0.5 }} />
                      <Typography variant="body2">{blogPosts[0].readTime}</Typography>
                    </Box>
                  </Box>

                  <Button
                    component={Link}
                    href={`/blog/${blogPosts[0].slug}`}
                    variant="contained"
                    endIcon={<ArrowForward />}
                    sx={{
                      mt: "auto",
                      alignSelf: "flex-start",
                      backgroundColor: "#00B5E2",
                      "&:hover": {
                        backgroundColor: "#0088a9",
                      },
                      borderRadius: 0,
                      px: 3,
                    }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          )}

          {/* Other Posts */}
          {blogPosts.slice(1).map((post) => (
            <Grid item xs={12} md={6} key={post.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  borderRadius: 2,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={post.coverImage}
                  alt={post.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <Box sx={{ mb: 2 }}>
                    {post.categories.map((category, index) => (
                      <Chip
                        key={index}
                        label={category}
                        size="small"
                        sx={{
                          mr: 1,
                          mb: 1,
                          backgroundColor: "#00B5E2",
                          color: "white",
                          fontWeight: "medium",
                        }}
                      />
                    ))}
                  </Box>

                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      color: "#333",
                    }}
                  >
                    {post.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {post.excerpt}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3,
                      mt: "auto",
                    }}
                  >
                    <Typography variant="body2" color="text.secondary" sx={{ mr: 3 }}>
                      {post.date}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "text.secondary",
                      }}
                    >
                      <AccessTime sx={{ fontSize: 16, mr: 0.5 }} />
                      <Typography variant="body2">{post.readTime}</Typography>
                    </Box>
                  </Box>

                  <Button
                    component={Link}
                    href={`/blog/${post.slug}`}
                    variant="outlined"
                    endIcon={<ArrowForward />}
                    sx={{
                      alignSelf: "flex-start",
                      borderColor: "#00B5E2",
                      color: "#00B5E2",
                      "&:hover": {
                        borderColor: "#0088a9",
                        backgroundColor: "rgba(0, 181, 226, 0.1)",
                      },
                      borderRadius: 0,
                      px: 3,
                    }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Newsletter Signup */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#333",
            }}
          >
            Stay Updated with Our Work
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Join our mailing list to receive the latest news, updates, and stories from the Mpumelelo Foundation.
          </Typography>
          <Button
            variant="contained"
            href="/contact-us"
            sx={{
              backgroundColor: "#00B5E2",
              "&:hover": {
                backgroundColor: "#0088a9",
              },
              borderRadius: 0,
              px: 4,
              py: 1.5,
            }}
          >
            Subscribe to Newsletter
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

