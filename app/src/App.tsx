// import axios from "axios";
import { ThemeProvider } from "@emotion/react";
import { Router } from "./router/Router";
import { RecoilRoot } from "recoil";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme";
import { Suspense } from "react";

const Fallback = () => {
  return (
    <div id="load">
      <span>Loading...</span>
    </div>
  )
}

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Fallback />}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router />
        </ThemeProvider>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
