import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#002F6C", // Dark blue similar to the UN Foundation theme
    },
    secondary: {
      main: "#00B5E2", // Lighter blue
    },
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
})

export default theme

