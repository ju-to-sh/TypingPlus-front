import { Box, Grid, Typography } from "@mui/material";
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
    <Box sx={{ flexGrow: 1, minHeight: { xs: "700px", sm: "520px", md: "600px" } }} display="flex" alignItems="center">
      <Grid container sx={{ pt: { xs: "120px", sm: 0 } }}>
        <Box width="90%" m="0 auto" sx={{ pt: { xs: "80px", sm: 0 } }}>
          {flash && (
            <Collapse in={open}>
              <Alert severity="success" onClose={HandleClose}>
                ログインしました
              </Alert>
              <Box mb={3} />
            </Collapse>
          )}
        </Box>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom textAlign="center">
            ゲーム選択
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box display="flex" justifyContent="center" pt={3}>
            <GameCard
              title={"クイズ問題"}
              content={"理解度チェックをしたい方にオススメ!"}
              attribution={"People illustrations by Storyset"}
              attributionSrc={"https://storyset.com/people"}
              src={"../images/quiz.png"}
              href={"/quizzes"}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} pt={3} pb={3}>
          <Box display="flex" justifyContent="center">
            <GameCard
              title={"タイピング問題"}
              content={"タイピング速度UPしたい方にオススメ!"}
              attribution={"Work illustrations by Storyset"}
              attributionSrc={"https://storyset.com/work"}
              src={"../images/typing.png"}
              href={"/typing_games"}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
    // <Grid container direction="row" justifyContent="center" alignItems="center">
    //   <Box>
    //     {flash && (
    //       <Collapse in={open}>
    //         <Alert severity="success" onClose={HandleClose}>
    //           ログインしました
    //         </Alert>
    //         <Box mb={3} />
    //       </Collapse>
    //     )}
    //     <Box mb="20px">
    //       <Typography variant="h5" gutterBottom textAlign="center">
    //         ゲーム選択
    //       </Typography>
    //     </Box>
    //     <Stack justifyContent="center" alignItems="center" spacing={3} sx={{ margin: "0 auto", direction: { xs: "column", sm: "column", md: "row" } }}>
    //       <GameCard
    //         title={"クイズ問題"}
    //         content={"理解度チェックをしたい方にオススメ!"}
    //         attribution={"People illustrations by Storyset"}
    //         attributionSrc={"https://storyset.com/people"}
    //         src={"../images/quiz.png"}
    //         href={"/quizzes"}
    //       />
    //       <GameCard
    //         title={"タイピング問題"}
    //         content={"タイピング速度UPしたい方にオススメ!"}
    //         attribution={"Work illustrations by Storyset"}
    //         attributionSrc={"https://storyset.com/work"}
    //         src={"../images/typing.png"}
    //         href={"/typing_games"}
    //       />
    //     </Stack>
    //   </Box>
    // </Grid>
  );
});
