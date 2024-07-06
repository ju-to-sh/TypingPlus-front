import { Box, Grid } from "@mui/material";
import { FC, memo } from "react";
import { LinearStepper } from "../organisms/common/LinearStepper";
import { TypingQuestion } from "../organisms/typing/TypingQuestion";

export const Typing: FC = memo(() => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", height: "100vh" }}>
      <Grid container direction="row" sx={{ minWidth: 600, maxWidth: 1000 }} margin="0 auto" justifyContent="center" alignItems="center" p={3}>
        <Grid item xs={8} textAlign="center" mb={5}>
          <LinearStepper />
        </Grid>
        <Grid item width="100%" minHeight="200px" textAlign="left" bgcolor="#F1938C" color="#fff" p={4} fontSize={{ xs: "16px", md: "18px" }} mb={5}>
          <TypingQuestion />
        </Grid>
      </Grid>
    </Box>
  );
});
