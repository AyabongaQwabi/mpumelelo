"use client"
import { Box, Container, Typography, Button, Paper, Divider } from "@mui/material"
import { CheckCircle, ArrowForward } from "@mui/icons-material"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, md: 6 },
          textAlign: "center",
          borderRadius: 2,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Success indicator */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <CheckCircle
            sx={{
              fontSize: 80,
              color: "#00B5E2",
            }}
          />
        </Box>

        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Thank You for Your Donation!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            fontSize: "1.1rem",
            color: "#555",
          }}
        >
          Your generosity makes a real difference in the lives of children in rural communities. We've received your
          donation and will put it to work immediately to support our programs.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#00B5E2",
            }}
          >
            What Happens Next?
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            You will receive a confirmation email with the details of your donation. This email serves as your receipt
            for tax purposes.
          </Typography>

          <Typography variant="body1">
            We invite you to stay connected with us to see the impact of your contribution. Follow our social media
            channels or subscribe to our newsletter for updates on our programs.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            component={Link}
            href="/"
            sx={{
              backgroundColor: "#00B5E2",
              "&:hover": {
                backgroundColor: "#0088a9",
              },
              borderRadius: 0,
              px: 3,
              py: 1.5,
            }}
          >
            Return to Homepage
          </Button>

          <Button
            variant="outlined"
            component={Link}
            href="/what-we-do"
            endIcon={<ArrowForward />}
            sx={{
              borderColor: "#00B5E2",
              color: "#00B5E2",
              "&:hover": {
                borderColor: "#0088a9",
                backgroundColor: "rgba(0, 181, 226, 0.1)",
              },
              borderRadius: 0,
              px: 3,
              py: 1.5,
            }}
          >
            Explore Our Programs
          </Button>
        </Box>
      </Paper>

      {/* Additional message */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          If you have any questions about your donation, please contact us at{" "}
          <Link href="mailto:info@mpumelelofoundation.co.za" style={{ color: "#00B5E2" }}>
            info@mpumelelofoundation.co.za
          </Link>
        </Typography>
      </Box>
    </Container>
  )
}

