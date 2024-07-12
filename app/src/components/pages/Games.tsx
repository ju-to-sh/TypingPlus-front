import { Box, Grid, Stack, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import { FC, memo, useState } from "react";
import { GameCard } from "../molecules/GameCard";
import { flashState } from "../../store/flashState";
import { useRecoilState } from "recoil";

export const Games: FC = memo(() => {
  const [open, setOpen] = useState(true);
  const [flash, setFlash] = useRecoilState(flashState);
  const HandleClose = () => {
    setOpen(false);
    setFlash(false);
  };

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Box>
        {flash && (
          <Collapse in={open}>
            <Alert severity="success" onClose={HandleClose}>
              ログインしました
            </Alert>
            <Box mb={3} />
          </Collapse>
        )}
        <Box mb="20px">
          <Typography variant="h5" gutterBottom textAlign="center">
            ゲーム選択
          </Typography>
        </Box>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={3} sx={{ margin: "0 auto" }}>
          <GameCard
            title={"クイズ問題"}
            content={"理解度チェックをしたい方にオススメ!"}
            attribution={"People illustrations by Storyset"}
            attributionSrc={"https://storyset.com/people"}
            src={"../images/quiz.png"}
            href={"/quizzes"}
          />
          <GameCard
            title={"タイピング問題"}
            content={"タイピング速度UPしたい方にオススメ!"}
            attribution={"Work illustrations by Storyset"}
            attributionSrc={"https://storyset.com/work"}
            src={"../images/typing.png"}
            href={"/typing_games"}
          />
        </Stack>
      </Box>
    </Grid>
  );
});
