"use client"
import {
  Box,
  Container,
  Typography,
  Chip,
  Divider,
  Avatar,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material"
import { AccessTime, ArrowBack, ArrowForward, CalendarToday, Person } from "@mui/icons-material"
import Link from "next/link"
import { useParams } from "next/navigation"
import { getBlogPostBySlug, getRelatedPosts } from "../../lib/blog"

export default function BlogPostPage() {
  const params = useParams()
  const post = getBlogPostBySlug(params.slug)
  const relatedPosts = getRelatedPosts(params.slug)

  if (!post) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Blog Post Not Found
        </Typography>
        <Typography variant="body1" paragraph>
          The blog post you're looking for doesn't exist or has been moved.
        </Typography>
        <Button
          component={Link}
          href="/blog"
          variant="contained"
          startIcon={<ArrowBack />}
          sx={{
            backgroundColor: "#00B5E2",
            "&:hover": {
              backgroundColor: "#0088a9",
            },
            borderRadius: 0,
            px: 3,
          }}
        >
          Back to Blog
        </Button>
      </Container>
    )
  }

  return (
    <Box sx={{ backgroundColor: "white", pb: 10 }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${post.coverImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 10,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
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
              variant="h3"
              component="h1"
              sx={{
                fontWeight: "bold",
                color: "white",
                mb: 3,
                px: { xs: 2, md: 0 },
              }}
            >
              {post.title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 3,
                color: "white",
                mb: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CalendarToday sx={{ fontSize: 18, mr: 1 }} />
                <Typography variant="body2">{post.date}</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Person sx={{ fontSize: 18, mr: 1 }} />
                <Typography variant="body2">{post.author}</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AccessTime sx={{ fontSize: 18, mr: 1 }} />
                <Typography variant="body2">{post.readTime}</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Article Content */}
      <Container maxWidth="md" sx={{ mt: 6 }}>
        <Box sx={{ display: "flex", mb: 4 }}>
          <Button
            component={Link}
            href="/blog"
            startIcon={<ArrowBack />}
            sx={{
              color: "#00B5E2",
              "&:hover": {
                backgroundColor: "rgba(0, 181, 226, 0.1)",
              },
            }}
          >
            Back to Blog
          </Button>
        </Box>

        {/* Author Info */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 4,
            p: 3,
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
          }}
        >
          <Avatar
            sx={{
              width: 60,
              height: 60,
              backgroundColor: "#00B5E2",
              mr: 2,
            }}
          >
            {post.author.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {post.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.authorRole}
            </Typography>
          </Box>
        </Box>

        {/* Article Body */}
        <Box
          className="blog-content"
          sx={{
            "& p": {
              mb: 3,
              lineHeight: 1.8,
              fontSize: "1.1rem",
            },
            "& h2": {
              mt: 5,
              mb: 3,
              fontWeight: "bold",
              color: "#333",
            },
            "& h3": {
              mt: 4,
              mb: 2,
              fontWeight: "bold",
              color: "#444",
            },
            "& ul, & ol": {
              mb: 3,
              pl: 4,
            },
            "& li": {
              mb: 1,
              lineHeight: 1.7,
            },
            "& a": {
              color: "#00B5E2",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            "& figure": {
              my: 4,
              mx: 0,
            },
            "& img": {
              width: "100%",
              borderRadius: 2,
              mb: 1,
            },
            "& figcaption": {
              textAlign: "center",
              color: "text.secondary",
              fontStyle: "italic",
              fontSize: "0.9rem",
            },
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share Links */}
        <Box sx={{ mt: 6, mb: 8 }}>
          <Divider sx={{ mb: 3 }} />
          <Box
            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}
          >
            <Typography variant="body2" color="text.secondary">
              Share this article:
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="outlined"
                size="small"
                onClick={() =>
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                    "_blank",
                  )
                }
                sx={{
                  borderColor: "#3b5998",
                  color: "#3b5998",
                  "&:hover": {
                    backgroundColor: "rgba(59, 89, 152, 0.1)",
                    borderColor: "#3b5998",
                  },
                  borderRadius: 0,
                }}
              >
                Facebook
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() =>
                  window.open(
                    `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`,
                    "_blank",
                  )
                }
                sx={{
                  borderColor: "#1DA1F2",
                  color: "#1DA1F2",
                  "&:hover": {
                    backgroundColor: "rgba(29, 161, 242, 0.1)",
                    borderColor: "#1DA1F2",
                  },
                  borderRadius: 0,
                }}
              >
                Twitter
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() =>
                  window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                    "_blank",
                  )
                }
                sx={{
                  borderColor: "#0A66C2",
                  color: "#0A66C2",
                  "&:hover": {
                    backgroundColor: "rgba(10, 102, 194, 0.1)",
                    borderColor: "#0A66C2",
                  },
                  borderRadius: 0,
                }}
              >
                LinkedIn
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <Box sx={{ mt: 8 }}>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontWeight: "bold",
                mb: 4,
                color: "#333",
                textAlign: "center",
              }}
            >
              Related Articles
            </Typography>

            <Grid container spacing={4}>
              {relatedPosts.map((relatedPost) => (
                <Grid item xs={12} md={6} key={relatedPost.id}>
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
                      height="200"
                      image={relatedPost.coverImage}
                      alt={relatedPost.title}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="h6"
                        component="h4"
                        sx={{
                          fontWeight: "bold",
                          mb: 2,
                          color: "#333",
                        }}
                      >
                        {relatedPost.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 2,
                          display: "-webkit-box",
                          overflow: "hidden",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 3,
                        }}
                      >
                        {relatedPost.excerpt}
                      </Typography>

                      <Button
                        component={Link}
                        href={`/blog/${relatedPost.slug}`}
                        variant="text"
                        endIcon={<ArrowForward />}
                        sx={{
                          mt: "auto",
                          alignSelf: "flex-start",
                          color: "#00B5E2",
                          p: 0,
                          "&:hover": {
                            backgroundColor: "transparent",
                            textDecoration: "underline",
                          },
                        }}
                      >
                        Read Article
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Call to Action */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            backgroundColor: "#00B5E2",
            borderRadius: 2,
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Support Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Your donation helps us continue our work with children in rural communities. Every contribution makes a
            difference.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            href="/donate"
            sx={{
              backgroundColor: "white",
              color: "#00B5E2",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
              borderRadius: 0,
              px: 4,
              py: 1.5,
            }}
          >
            Donate Now
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

