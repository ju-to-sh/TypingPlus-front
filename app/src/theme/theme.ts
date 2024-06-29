import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#c52f24",
    },
    secondary: {
      main: "#eeeeee",
    },
    background: {
      default: "#fff",
    },
    text: { primary: "#333333" },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (min-width: 900px)": {
            maxWidth: "1000px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
