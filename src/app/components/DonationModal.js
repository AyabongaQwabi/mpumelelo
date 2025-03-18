"use client"
import { useState } from "react"
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  CircularProgress,
  Divider,
  Alert,
  IconButton,
  Grid,
} from "@mui/material"
import { Close, CreditCard, Favorite } from "@mui/icons-material"
import { postPaymentToPayFast } from "../lib/payfast"

const DonationModal = ({ open, handleClose }) => {
  // Donation amount options
  const donationOptions = [100, 250, 500, 1000]

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    amount: "",
    customAmount: "",
    message: "",
  })

  // Error state
  const [errors, setErrors] = useState({})

  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  // Handle amount selection
  const handleAmountSelect = (amount) => {
    setFormData({
      ...formData,
      amount: amount,
      customAmount: "",
    })

    if (errors.amount) {
      setErrors({
        ...errors,
        amount: "",
      })
    }
  }

  // Handle custom amount input
  const handleCustomAmountChange = (e) => {
    const value = e.target.value

    // Only allow numbers
    if (value === "" || /^\d+$/.test(value)) {
      setFormData({
        ...formData,
        amount: "",
        customAmount: value,
      })

      if (errors.amount) {
        setErrors({
          ...errors,
          amount: "",
        })
      }
    }
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.amount && !formData.customAmount) {
      newErrors.amount = "Please select or enter a donation amount"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Generate a unique payment ID
      const paymentId = `DON-${Date.now()}`

      // Determine the final amount
      const finalAmount = formData.amount || formData.customAmount

      // PayFast configuration
      const payFastConfig = {
        payFastUrl: "https://sandbox.payfast.co.za/eng/process", // Use 'https://www.payfast.co.za/eng/process' for production
        merchantId: "10000100", // Replace with your actual merchant ID
        merchantKey: "46f0cd694581a", // Replace with your actual merchant key
        returnUrl: `${window.location.origin}/donate/thank-you`,
        cancelUrl: `${window.location.origin}/donate`,
        notifyUrl: `${window.location.origin}/api/payfast-notify`,
        nameFirst: formData.firstName,
        nameLast: formData.lastName,
        emailAddress: formData.email,
        paymentId: paymentId,
        amount: finalAmount,
        itemName: "Donation to Mpumelelo Foundation",
        itemDescription: formData.message || "Supporting children in rural communities",
        emailConfirmation: "1",
        confirmationAddress: formData.email,
      }

      try {
        // Process payment through PayFast
        postPaymentToPayFast(
          payFastConfig.payFastUrl,
          payFastConfig.merchantId,
          payFastConfig.merchantKey,
          payFastConfig.returnUrl,
          payFastConfig.cancelUrl,
          payFastConfig.notifyUrl,
          payFastConfig.nameFirst,
          payFastConfig.nameLast,
          payFastConfig.emailAddress,
          payFastConfig.paymentId,
          payFastConfig.amount,
          payFastConfig.itemName,
          payFastConfig.itemDescription,
          payFastConfig.emailConfirmation,
          payFastConfig.confirmationAddress,
        )

        // Note: The page will be redirected to PayFast, so the following code may not execute
        setIsSubmitting(false)
        handleClose()
      } catch (error) {
        console.error("Payment submission error:", error)
        setIsSubmitting(false)
        setErrors({
          ...errors,
          submit: "There was an error processing your donation. Please try again.",
        })
      }
    }
  }

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="donation-modal-title">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "500px" },
          maxHeight: "90vh",
          overflowY: "auto",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 1,
        }}
      >
        {/* Close button */}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>

        {/* Header */}
        <Box sx={{ mb: 3, textAlign: "center" }}>
          <Favorite sx={{ color: "#00B5E2", fontSize: 40, mb: 1 }} />
          <Typography id="donation-modal-title" variant="h5" component="h2" fontWeight="bold">
            Make a Donation
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Your support helps us empower children in rural communities
          </Typography>
        </Box>

        {/* Error message */}
        {errors.submit && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {errors.submit}
          </Alert>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Personal Information */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
                required
                margin="normal"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
                required
                margin="normal"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                required
                margin="normal"
                size="small"
              />
            </Grid>

            {/* Donation Amount */}
            <Grid item xs={12}>
              <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
                Select Donation Amount (ZAR)
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                {donationOptions.map((amount) => (
                  <Button
                    key={amount}
                    variant={formData.amount === amount ? "contained" : "outlined"}
                    color={formData.amount === amount ? "primary" : "inherit"}
                    onClick={() => handleAmountSelect(amount)}
                    sx={{
                      flexGrow: 1,
                      minWidth: "80px",
                      backgroundColor: formData.amount === amount ? "#00B5E2" : "transparent",
                      borderColor: "#00B5E2",
                      color: formData.amount === amount ? "white" : "#00B5E2",
                      "&:hover": {
                        backgroundColor: formData.amount === amount ? "#0088a9" : "rgba(0, 181, 226, 0.1)",
                      },
                    }}
                  >
                    R{amount}
                  </Button>
                ))}
                <TextField
                  placeholder="Custom Amount"
                  value={formData.customAmount}
                  onChange={handleCustomAmountChange}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">R</InputAdornment>,
                  }}
                  sx={{
                    flexGrow: 1,
                    minWidth: "150px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: formData.customAmount ? "#00B5E2" : "rgba(0, 0, 0, 0.23)",
                      },
                      "&:hover fieldset": {
                        borderColor: "#00B5E2",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#00B5E2",
                      },
                    },
                  }}
                  size="small"
                />
              </Box>
              {errors.amount && (
                <Typography color="error" variant="caption">
                  {errors.amount}
                </Typography>
              )}
            </Grid>

            {/* Message */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message (Optional)"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={2}
                margin="normal"
                size="small"
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Submit Button */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={isSubmitting}
              startIcon={<CreditCard />}
              sx={{
                minWidth: "200px",
                backgroundColor: "#00B5E2",
                "&:hover": {
                  backgroundColor: "#0088a9",
                },
              }}
            >
              {isSubmitting ? (
                <>
                  <CircularProgress size={24} color="inherit" sx={{ mr: 1 }} />
                  Processing...
                </>
              ) : (
                "Proceed to Payment"
              )}
            </Button>
          </Box>

          {/* Secure Payment Notice */}
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="caption" color="text.secondary">
              Secure payment processed by PayFast. Your information is protected.
            </Typography>
          </Box>
        </form>
      </Box>
    </Modal>
  )
}

export default DonationModal

