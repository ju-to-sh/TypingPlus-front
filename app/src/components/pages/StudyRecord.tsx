import { Box, Grid, Typography } from "@mui/material";
import { FC, memo, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { userIdState } from "../../store/userIdState";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/api/user";
import { userInfoState } from "../../store/userInfoState";
// import { QuizCard } from "../organisms/quiz/QuizCard";
// import { GameListsData } from "../../types/api/gameList";
// import { useRecoilState, useRecoilValue } from "recoil";
// import { fetchLikeListsSelector, likeState } from "../../store/likeState";

export const StudyRecord: FC = memo(() => {
  const { id } = useParams();
  const [cookies] = useCookies(["accesstoken"]);
  const userId = useRecoilValue(userIdState);
  const [user, setUser] = useRecoilState(userInfoState(id as string));
  // const fetchLikeLists = useRecoilValue(fetchLikeListsSelector);

  const fetchData = async () => {
    const response = await useApi.get<User>(`/users/${id}`);
    setUser(response.data.data.attributes);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <Grid container direction="row" sx={{ minWidth: 600, maxWidth: 1000 }} margin="0 auto" p={3} justifyContent="center" alignItems="center">
      <Box sx={{ overflow: "scroll" }}>
        <Grid item xs={12} textAlign="center" pb={3} pt={3}>
          <Typography variant="h5" gutterBottom>
            学習記録
          </Typography>
        </Grid>
        {/* <Grid item sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {gameLists.map((gameList: GameListsData) => (
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
        </Grid> */}
      </Box>
    </Grid>
  );
});
