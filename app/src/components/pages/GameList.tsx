import { Box, Grid, Typography } from "@mui/material";
import { FC, memo } from "react";
import { useRecoilValue } from "recoil";
import { QuizCard } from "../organisms/quiz/QuizCard";
import { gameListState } from "../../store/gameListState";
import { GameListsData } from "../../types/api/gameList";
import { useLocation } from "react-router-dom";

export const GameList: FC = memo(() => {
  const location = useLocation();
  const gameLists = useRecoilValue(gameListState(location.pathname as string));

  return (
    <Grid container direction="row" sx={{ minWidth: 360, maxWidth: 1000 }} margin="0 auto" p={3} justifyContent="center" alignItems="center">
      <Box sx={{ overflow: "scroll" }}>
        <Grid item xs={12} textAlign="center" pb={3}>
          {location.pathname === "/quizzes" ? (
            <Typography variant="h5" gutterBottom>
              クイズ一覧
            </Typography>
          ) : (
            <Typography variant="h5" gutterBottom>
              タイピング一覧
            </Typography>
          )}
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {gameLists.map((gameList: GameListsData) => (
            <Box id={gameList.id} key={gameList.id} p="8px 4px" margin="0 auto">
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
