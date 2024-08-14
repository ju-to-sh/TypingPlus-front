import { FC, ReactNode, memo, useState } from "react";
import { Header } from "../organisms/layout/Header";
import { Footer } from "../organisms/layout/Footer";
import { Alert, Box, Collapse, Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import { flashState } from "../../store/flashState";

type Props = {
  children: ReactNode;
};

export const TopLayout: FC<Props> = memo((props) => {
  const { children } = props;
  const [flashOpen, setFlashOpen] = useState(true);
  const [flash, setFlash] = useRecoilState(flashState);
  const HandleClose = () => {
    setFlashOpen(false);
    setFlash(false);
  };

  return (
    <Grid container display="flex" height="100%">
      <Header />
      <Grid item xs={12} maxWidth="md" textAlign="center">
        <Box width="80%" m="0 auto" sx={{ position: "absolute", top: "80px", left: "50%", transform: "translateX(-50%)" }}>
          {flash && (
            <Collapse in={flashOpen}>
              <Alert severity="success" onClose={HandleClose}>
                ログアウトしました
              </Alert>
            </Collapse>
          )}
        </Box>
        {children}
      </Grid>
      <Footer />
    </Grid>
  );
});
