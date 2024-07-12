// import axios from "axios";
import { ThemeProvider } from "@emotion/react";
import { Router } from "./router/Router";
import { RecoilRoot } from "recoil";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme";
import { Suspense } from "react";
import { CookiesProvider } from "react-cookie";
import { Loading } from "./components/atoms/Loading";
import { Box } from "@mui/material";

const Fallback = () => {
  return (
    <Box id="load" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100Vh" }}>
      <Loading />
    </Box>
  );
};

function App() {
  return (
    <RecoilRoot>
      <CookiesProvider>
        <Suspense fallback={<Fallback />}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router />
          </ThemeProvider>
        </Suspense>
      </CookiesProvider>
    </RecoilRoot>
  );
}

export default App;
