import { Box, Grid, Typography } from "@mui/material";
import { FC, memo } from "react";

import { QuizCard } from "../organisms/quiz/QuizCard";

export const QuestionList: FC = memo(() => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "scroll" }}>
      <Grid container direction="row" sx={{ minWidth: 600, maxWidth: 1000 }} margin="0 auto" justifyContent="center" alignItems="center" p={3}>
        <Grid item xs={12} textAlign="center" mb="20px">
          <Typography variant="h5" gutterBottom>
            クイズ一覧
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3} pb={2} sx={{ display: "flex", justifyContent: "center" }}>
          <QuizCard />
        </Grid>
        <Grid item xs={12} sm={4} md={3} pb={2} sx={{ display: "flex", justifyContent: "center" }}>
          <QuizCard />
        </Grid>
        <Grid item xs={12} sm={4} md={3} pb={2} sx={{ display: "flex", justifyContent: "center" }}>
          <QuizCard />
        </Grid>
        <Grid item xs={12} sm={4} md={3} pb={2} sx={{ display: "flex", justifyContent: "center" }}>
          <QuizCard />
        </Grid>
      </Grid>
    </Box>
  );
});
