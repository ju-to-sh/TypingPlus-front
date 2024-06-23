import { FC, memo } from "react";
import { LinearStepper } from "../organisms/common/LinearStepper";
import { Box, Button, Grid } from "@mui/material";
import { QuestionButton } from "../molecules/questionButton";

const choices: Array<string> = ["ipsum dolor sit ametfdfsfddf", "選択肢b", "選択肢c", "選択肢d"];

export const Question: FC = memo(() => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", height: "100vh" }}>
      <Grid container direction="row" sx={{ minWidth: 600, maxWidth: 1000 }} margin="0 auto" justifyContent="center" alignItems="center" p={3}>
        <Grid item xs={8} textAlign="center" mb={5}>
          <LinearStepper />
        </Grid>
        <Grid item width="100%" minHeight="200px" textAlign="left" bgcolor="#F1938C" color="#fff" p={5} fontSize={{ sm: "16px", md: "20px" }} mb={5}>
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim venia ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia
        </Grid>
        <Grid item xs={12} textAlign="center" pb={5}>
          {choices.map((choice, index) => (
            <Button
              key={index}
              size="large"
              variant="contained"
              color="secondary"
              sx={{
                marginRight: "24px",
                marginBottom: "16px",
                borderRadius: "0px",
                boxShadow: "none",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "#F1938C",
                },
              }}
            >
              {`${index + 1}: ${choice}`}
            </Button>
          ))}
        </Grid>
        <Grid item xs={10} textAlign="center">
          <QuestionButton />
        </Grid>
      </Grid>
    </Box>
  );
});
