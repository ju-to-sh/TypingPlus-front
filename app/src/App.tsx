// import axios from "axios";
import { ThemeProvider } from "@emotion/react";
import { Router } from "./router/Router";
import CssBaseline from '@mui/material/CssBaseline'
import theme from "./theme/theme";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
