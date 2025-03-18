import { Box, Button, Container, Typography } from "@mui/material"

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 8,
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          component="h1"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: "7rem", lg: "9rem" },
            color: "primary.main",
            letterSpacing: "tight",
            color: "#00B5E2",
          }}
        >
          404
        </Typography>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            color: "text.primary",
            mb: 2,
          }}
        >
          Not the page you were looking for?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Sorry, we can't find that page. You'll find lots to explore on the home page.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="/"
          sx={{
            borderRadius: 0,
            textTransform: "none",
            px: 3,
            py: 1.5,
            bgcolor: "#00B5E2",
          }}
        >
          Back to Homepage
        </Button>
      </Container>
    </Box>
  )
}

export default NotFoundPage

