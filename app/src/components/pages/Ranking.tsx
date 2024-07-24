import { Box, Grid, Typography } from "@mui/material";

import { FC, memo } from "react";
import { useStyles } from "../../hooks/useStyles";

export const Ranking: FC = memo(() => {
  const classes = useStyles();
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Box sx={{ width: "100%", maxWidth: 800, backgroundColor: "#ffeded", overflow: "scroll" }} p={5}>
        <Typography mb={2} textAlign="center" sx={{ typography: { xs: "h5", sm: "h4" } }}>
          ランキング一覧
        </Typography>
      </Box>
    </Grid>
  );
});
