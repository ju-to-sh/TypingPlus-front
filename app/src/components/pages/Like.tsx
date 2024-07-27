import { Box, Grid, Typography } from "@mui/material";
import { FC, memo, useEffect, useState } from "react";
import { QuizCard } from "../organisms/quiz/QuizCard";
import { GameListsData, GameLists } from "../../types/api/gameList";
import { useApi } from "../../hooks/useApi";

export const Like: FC = memo(() => {
  const [gameLists, setGameLists] = useState<Array<GameListsData>>([]);

  const fetchGameLists = async () => {
    try {
      const response = await useApi.get<GameLists>("/likes");
      setGameLists(response.data.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchGameLists();
  }, []);

  return (
    <Grid container direction="row" sx={{ minWidth: 600, maxWidth: 1000 }} margin="0 auto" p={3} justifyContent="center" alignItems="center">
      <Box sx={{ overflow: "scroll" }}>
        <Grid item xs={12} textAlign="center" pb={3} pt={3}>
          <Typography variant="h5" gutterBottom>
            お気に入り一覧
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
