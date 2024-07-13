import { FC, ReactNode, memo } from "react";
import { Header } from "../organisms/layout/Header";
import { Footer } from "../organisms/layout/Footer";
import { Container, Grid } from "@mui/material";
import { LoginHeader } from "../organisms/layout/LoginHeader";
import { useCookies } from "react-cookie";

type Props = {
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = memo((props) => {
  const { children } = props;
  const [cookies] = useCookies(["accesstoken"]);

  return (
    <Grid pt="80px" pb="80px" display="flex" height="100Vh">
      {cookies.accesstoken ? <LoginHeader /> : <Header />}
      <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center", overflow: "scroll" }}>
        {children}
      </Container>
      <Footer />
    </Grid>
  );
});
