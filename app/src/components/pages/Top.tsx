import { Box, Stack, Typography, Grid } from "@mui/material";
import { FC, memo } from "react";
import { Description } from "../molecules/top/Description";

export const Top: FC = memo(() => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" pt="80px" pb="80px" sx={{ height: { xs: "auto", md: "100VH" } }}>
      <Stack sx={{ display: { sm: "block", md: "none", textAlign: "center" } }} pt="50px" pb="50px">
        <Typography variant="h4" gutterBottom>
          Typing Plus
        </Typography>
        <Box>
          <Box component="img" width={300} height="auto" src="../../images/top-image.png" alt="logo" />
        </Box>
        <Description />
      </Stack>
      <Grid item alignItems="center" sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
        <Box pr={2}>
          <Typography variant="h3" gutterBottom sx={{ fonstSize: { sm: "36px", md: "48px" } }}>
            Typing Plus
          </Typography>
          <Description />
        </Box>
        <Box component="img" width={360} height="auto" src="../../images/top-image.png" alt="logo" />
      </Grid>
    </Grid>
  );
});
