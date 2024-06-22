import { FC, ReactNode, memo } from "react";
import { Header } from "../organisms/layout/Header";
import { Footer } from "../organisms/layout/Footer";
import { Box, Container } from "@mui/material";
import { LoginHeader } from "../organisms/layout/LoginHeader";
import { Cookies } from "react-cookie";

type Props = {
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = memo((props) => {
  const { children } = props;
  const cookies = new Cookies();
  const token = cookies.get("accesstoken");

  return (
    <Box pt="80px" pb="105px">
      {token ? <LoginHeader /> : <Header />}
      <Container maxWidth="md">{children}</Container>
      <Footer />
    </Box>
  );
});
