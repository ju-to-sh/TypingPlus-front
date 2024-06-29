import { Box, Grid, Typography } from "@mui/material";
import { FC, memo } from "react";
import { useRecoilValue } from "recoil";
import { QuizCard } from "../organisms/quiz/QuizCard";
import { gameListState } from "../../store/gameListState";
import { GameListData } from "../../types/api/gameList";

export const GameList: FC = memo(() => {
  const gameLists = useRecoilValue(gameListState);
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "scroll" }}>
      <Grid container direction="row" sx={{ minWidth: 600, maxWidth: 1000 }} margin="0 auto" justifyContent="center" alignItems="center" p={3}>
        <Grid item xs={12} textAlign="center" mb="20px">
          <Typography variant="h5" gutterBottom>
            クイズ一覧
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap",  }}>
          {gameLists.map((gameList: GameListData) => (
            <Box key={gameList.id} p={1}>
              <QuizCard id={gameList.id} title={gameList.attributes.title} content={gameList.attributes.content} category={gameList.attributes.category} level={gameList.attributes.level} />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
});