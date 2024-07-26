import { Box, Grid, Stack, Typography } from "@mui/material";
import { FC, memo } from "react";
import { useRecoilValue } from "recoil";
import { QuizCard } from "../organisms/quiz/QuizCard";
import { gameListAllState } from "../../store/gameListState";
import { GameListsData } from "../../types/api/gameList";

export const Search: FC = memo(() => {
  const gameLists = useRecoilValue(gameListAllState);

  return (
    <Grid container direction="row" sx={{ minWidth: 600, maxWidth: 1000 }} margin="0 auto" p={3} justifyContent="center" alignItems="center">
      <Box sx={{ overflow: "scroll" }}>
        <Grid item xs={12} textAlign="center" pb={3}>
          <Typography variant="h5" gutterBottom>
            クイズ/タイピング問題検索
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {gameLists.map((gameList: GameListsData) => (
            <Box key={gameList.id} p={1}>
              <QuizCard
                id={gameList.id}
                title={gameList.attributes.title}
                game_type={gameList.attributes.game_type}
                content={gameList.attributes.content}
                category={gameList.attributes.category}
                level={gameList.attributes.level}
              />
            </Box>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
});
