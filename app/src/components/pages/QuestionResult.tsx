import { Box, Grid, Typography } from "@mui/material";
import { FC, memo, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { quizResultState } from "../../store/quizResultState";

export const QuestionResult: FC = memo(() => {
  const quizResults = useRecoilValue(quizResultState);
  console.log(quizResults);
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "scroll" }}>
      <Grid container direction="row" sx={{ minWidth: 600, maxWidth: 1000 }} margin="0 auto" justifyContent="center" alignItems="center" p={3}>
        <Grid item xs={12} textAlign="center" mb="20px">
          <Typography variant="h5" gutterBottom>
            クイズ結果
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {quizResults.length === 0
            ? sessionStorage.getItem("quiz_results")
            : quizResults.map((result: any) => (
                <>
                  <p>{`クイズID:${result.quiz_id}`}</p>
                  <br />
                  <p>{`ユーザーの回答ID:${result.select_answer}`}</p>
                </>
              ))}
          {/* {gameLists.map((gameList: GameListData) => (
            <Box key={gameList.id} p={1}>
              <QuizCard id={gameList.id} title={gameList.attributes.title} content={gameList.attributes.content} category={gameList.attributes.category} level={gameList.attributes.level} />
            </Box>
          ))} */}
        </Grid>
      </Grid>
    </Box>
  );
});
