import { FC, ReactNode, memo } from "react";
import { Container } from "@mui/material";

type Props = {
  children: ReactNode;
};

export const CenterLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center" }}>
      {children}
    </Container>
  );
});
