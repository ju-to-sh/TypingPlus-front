import { Box, Stack, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import { FC, memo, useState } from "react";
import { useLocation } from "react-router-dom";
import { GameCard } from "../molecules/GameCard";

export const Games: FC = memo(() => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  return (
    <Stack direction="column" justifyContent="center" alignItems="center" height={"calc(100vh - 185px)"}>
      {location.state?.message && (
        <Collapse in={open}>
          <Alert severity="success" onClose={() => setOpen(false)}>
            {location.state.message}
          </Alert>
          <Box mb={3} />
        </Collapse>
      )}
      <Box mb="20px">
        <Typography variant="h5" gutterBottom>
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
          href={"/question_list"}
        />
        <GameCard
          title={"タイピング問題"}
          content={"タイピング速度UPしたい方にオススメ!"}
          attribution={"Work illustrations by Storyset"}
          attributionSrc={"https://storyset.com/work"}
          src={"../images/typing.png"}
          href={"/typing_list"}
        />
      </Stack>
    </Stack>
  );
});
