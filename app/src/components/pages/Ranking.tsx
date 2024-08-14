import { Box, Grid, Stack, Typography } from "@mui/material";
import { FC, memo } from "react";
import { AvatarList } from "../organisms/ranking/AvatarList";

export const Ranking: FC = memo(() => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" bgcolor="#ffeded">
      <Box sx={{ width: "100%", maxWidth: 800, overflow: "scroll" }} p={4}>
        <Typography mb={3} textAlign="center" sx={{ typography: { xs: "h5", sm: "h4" } }}>
          ランキング一覧
        </Typography>
        <Stack justifyContent="center" alignItems="center">
          <AvatarList />
        </Stack>
      </Box>
    </Grid>
  );
});
