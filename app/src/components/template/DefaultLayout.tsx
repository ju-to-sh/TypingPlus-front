import { FC, ReactNode, memo } from "react";
import { Header } from "../organisms/layout/Header";
import { Footer } from "../organisms/layout/Footer";
import { Container } from "@mui/material";
import { relative } from "path";

type Props = {
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Container maxWidth="md">{children}</Container>
      <Footer />
    </>
  );
});
