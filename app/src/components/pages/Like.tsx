import { Box, Grid, Typography } from "@mui/material";
import { FC, memo, useEffect } from "react";
import { QuizCard } from "../organisms/quiz/QuizCard";
import { GameListsData } from "../../types/api/gameList";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchLikeListsSelector, likeState } from "../../store/likeState";

export const Like: FC = memo(() => {
  const fetchLikeLists = useRecoilValue(fetchLikeListsSelector);
  const [gameLists, setGameLists] = useRecoilState(likeState);

  useEffect(() => {
    setGameLists(fetchLikeLists);
  }, [setGameLists, fetchLikeLists]);

  return (
    <Grid container direction="row" sx={{ minWidth: 600, maxWidth: 1000 }} margin="0 auto" p={3} justifyContent="center" alignItems="center">
      <Box sx={{ overflow: "scroll" }}>
        <Grid item xs={12} textAlign="center" pb={3} pt={3}>
          <Typography variant="h5" gutterBottom>
            お気に入り一覧
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {gameLists.data.length === 0 ? (
            <Typography>お気に入り登録した問題はありません</Typography>
          ) : (
            <>
              {gameLists.data.map((gameList: GameListsData) => (
                <Box id={gameList.id} key={gameList.id} p={1}>
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
            </>
          )}
        </Grid>
      </Box>
    </Grid>
  );
});
