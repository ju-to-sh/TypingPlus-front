import { Box, Grid, Typography } from "@mui/material";
import { FC, memo } from "react";
import { TypingRecord } from "../organisms/study_record/TypingRecord";

export const StudyRecord: FC = memo(() => {
  return (
    <Grid container direction="row" sx={{ minWidth: 600, maxWidth: 1000 }} margin="0 auto" p={3} justifyContent="center" alignItems="center">
      <Box sx={{ overflow: "scroll" }}>
        <Grid item xs={12} textAlign="center" pb={3} pt={3}>
          <Typography variant="h5" gutterBottom>
            学習記録
          </Typography>
        </Grid>
        <TypingRecord />
      </Box>
    </Grid>
  );
});
