import { FC, memo } from "react";
import { LinearStepper } from "../organisms/common/LinearStepper";
import { Button, Grid } from "@mui/material";
import { QuestionButton } from "../molecules/questionButton";

export const Question: FC = memo(() => {
  return (
    <Grid container direction="row" sx={{ minWidth: 600, maxWidth: 1000 }} margin="0 auto" justifyContent="center" alignItems="center" height="100vh" p={3}>
      <Grid item xs={10} textAlign="center" margin="0 auto">
        <LinearStepper />
        <QuestionButton />
      </Grid>
    </Grid>
  );
});
