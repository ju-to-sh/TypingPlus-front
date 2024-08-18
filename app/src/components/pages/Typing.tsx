import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FC, memo } from "react";
import { LinearStepper } from "../organisms/common/LinearStepper";
import { TypingQuestion } from "../organisms/typing/TypingQuestion";
import { useWindowSize } from "../../hooks/useWindowSize";

export const Typing: FC = memo(() => {
  const windowSize = useWindowSize();
  const style = {
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "300px",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 360,
    bgcolor: "#F1938C",
    p: "16px",
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", minHeight: "650px" }} height="100Vh">
      {windowSize < 900 ? (
        <Box sx={{ ...style }}>
          <Typography variant="h5" pb={3}>
            PCでの利用推奨
          </Typography>
          <Typography variant="body1" mb={3}>
            画面サイズが小さいため、問題を表示できません。パソコンで画面を開いてください。
          </Typography>
          <Button variant="contained" color="primary">
            <Link component={RouterLink} to="/typing_games" underline="none" color="#fff">
              タイピング一覧へ
            </Link>
          </Button>
        </Box>
      ) : (
        <Grid container direction="row" sx={{ minWidth: 600, maxWidth: 1000, overflow: "scroll" }} margin="0 auto" justifyContent="center" alignItems="center" p={3}>
          <Grid item xs={8} textAlign="center" mb={5}>
            <LinearStepper />
          </Grid>
          <TypingQuestion />
        </Grid>
      )}
    </Box>
  );
});
