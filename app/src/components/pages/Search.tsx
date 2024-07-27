import { Box, Grid, Typography } from "@mui/material";
import { FC, memo, useEffect, useState } from "react";
import { QuizCard } from "../organisms/quiz/QuizCard";
import { GameListsData, GameLists } from "../../types/api/gameList";
import { SearchForm } from "../organisms/form/SearchForm";
import { useApi } from "../../hooks/useApi";

export const Search: FC = memo(() => {
  const [gameLists, setGameLists] = useState<Array<GameListsData>>([]);

  const fetchGameLists = async () => {
    try {
      const response = await useApi.get<GameLists>("/search", {
        params: {
          q: { title_cont: "", category_eq: null, level_eq: null },
        },
      });
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
        <Grid item xs={12} textAlign="center" pb={3}>
          <Typography variant="h5" gutterBottom>
            クイズ/タイピング問題検索
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center" pb={3}>
          <SearchForm setGameLists={setGameLists} />
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
