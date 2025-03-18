"use client"
import { Box, Typography, Container, Grid, Button, Card, CardContent, Divider } from "@mui/material"
import { WhatsApp, Email, Phone, LocationOn, AccessTime } from "@mui/icons-material"

const ContactUsPage = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "white" }}>
      {/* Banner Section */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url('https://source.unsplash.com/aIYFR0vbADk')`,
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
            CONTACT US
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
            Get in Touch with Mpumelelo Foundation
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
            We're here to answer your questions and help you get involved with our mission to empower children in rural
            communities.
          </Typography>
        </Box>
      </Box>

      {/* Contact Information Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Left Column - Contact Methods */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                fontSize: "24px",
                color: "#00B5E2",
                fontWeight: "bold",
                mb: 4,
              }}
            >
              REACH OUT DIRECTLY
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, color: "#333" }}>
              We value your interest in our foundation and are eager to connect with you. Choose any of the following
              methods to get in touch with our team.
            </Typography>

            {/* Contact Buttons */}
            <Grid container spacing={3}>
              {/* WhatsApp Button */}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<WhatsApp />}
                  sx={{
                    py: 2,
                    textTransform: "none",
                    backgroundColor: "#25D366", // WhatsApp green
                    "&:hover": {
                      backgroundColor: "#128C7E", // Darker WhatsApp green
                    },
                    borderRadius: 0,
                    justifyContent: "flex-start",
                    pl: 3,
                  }}
                  onClick={() => window.open(`https://wa.me/27603116777`, "_blank")}
                >
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      WhatsApp Us
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      060 311 6777
                    </Typography>
                  </Box>
                </Button>
              </Grid>

              {/* Email Button */}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<Email />}
                  sx={{
                    py: 2,
                    textTransform: "none",
                    backgroundColor: "#00B5E2", // Foundation blue
                    "&:hover": {
                      backgroundColor: "#0088a9", // Darker blue
                    },
                    borderRadius: 0,
                    justifyContent: "flex-start",
                    pl: 3,
                  }}
                  onClick={() => window.open(`mailto:info@mpumelelofoundation.co.za`, "_blank")}
                >
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Email Us
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      info@mpumelelofoundation.co.za
                    </Typography>
                  </Box>
                </Button>
              </Grid>

              {/* Call Button */}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<Phone />}
                  sx={{
                    py: 2,
                    textTransform: "none",
                    backgroundColor: "#333333", // Dark gray
                    "&:hover": {
                      backgroundColor: "#555555", // Lighter gray
                    },
                    borderRadius: 0,
                    justifyContent: "flex-start",
                    pl: 3,
                  }}
                  onClick={() => window.open(`tel:+27603116777`, "_blank")}
                >
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Call Us
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      060 311 6777
                    </Typography>
                  </Box>
                </Button>
              </Grid>
            </Grid>

            {/* Operating Hours */}
            <Box sx={{ mt: 6, mb: 4 }}>
              <Typography
                variant="h6"
                sx={{ color: "#00B5E2", fontWeight: "bold", mb: 2, display: "flex", alignItems: "center" }}
              >
                <AccessTime sx={{ mr: 1 }} /> OPERATING HOURS
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Monday - Friday:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">8:00 AM - 5:00 PM</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Saturday:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">9:00 AM - 1:00 PM</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Sunday & Public Holidays:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">Closed</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Right Column - Address and Map */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                fontSize: "24px",
                color: "#00B5E2",
                fontWeight: "bold",
                mb: 4,
              }}
            >
              VISIT OUR OFFICE
            </Typography>

            <Card sx={{ mb: 4, borderRadius: 0, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: "#00B5E2", fontWeight: "bold", mb: 2, display: "flex", alignItems: "center" }}
                >
                  <LocationOn sx={{ mr: 1 }} /> OUR ADDRESS
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  123 Company Street
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Central
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Pretoria
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  0001
                </Typography>

                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    borderColor: "#00B5E2",
                    color: "#00B5E2",
                    borderRadius: 0,
                  }}
                  onClick={() => window.open("https://maps.google.com/?q=Pretoria+Central+0001", "_blank")}
                >
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Map Embed */}
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57370.393483408745!2d28.155908036914066!3d-25.746111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95619cbec65033%3A0xf66a9eded9c7987a!2sPretoria%20Central%2C%20Pretoria%2C%200001!5e0!3m2!1sen!2sza!4v1710767520884!5m2!1sen!2sza"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sx={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                mb: 4,
              }}
            />

            {/* Additional Information */}
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              We welcome visitors during our operating hours. If you're planning to visit, we recommend scheduling an
              appointment to ensure our team is available to assist you.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 8 }}>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography
              variant="h4"
              sx={{
                fontSize: "28px",
                color: "#00B5E2",
                fontWeight: "bold",
                mb: 3,
              }}
            >
              JOIN OUR MISSION
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: "700px", mx: "auto" }}>
              Whether you're interested in volunteering, donating, or partnering with us, your support helps us continue
              our vital work with children in rural communities. Reach out today to learn how you can make a difference.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                textTransform: "none",
                backgroundColor: "#00B5E2",
                "&:hover": {
                  backgroundColor: "#0088a9",
                },
                borderRadius: 0,
              }}
              href="/donate"
            >
              Support Our Cause
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default ContactUsPage

