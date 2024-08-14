import { Box, Button, Grid, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { FC, memo, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Link as RouterLink, useParams } from "react-router-dom";
import { QuizChoiceAttributes, QuizResuls } from "../../../types/api/quiz";
import { useApi } from "../../../hooks/useApi";
import { QuizState } from "../../../store/quizState";
import CheckIcon from "@mui/icons-material/Check";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

export const QuizUserResult: FC = memo(() => {
  const { id } = useParams<string>();
  const [quizResults, setQuizResults] = useState([]);
  const quizzes = useRecoilValue(QuizState(id as string));

  const GetCorrectAnswer = (quizChoices: Array<QuizChoiceAttributes>) => quizChoices.find((choice) => Boolean(choice.is_correct) === true);
  const GetUserAnswer = (quizChoices: Array<QuizChoiceAttributes>, select_id: string) => quizChoices[Number(select_id)].content;
  const JudgeAnswer = (correctAnswer: string | undefined, userAnswer: string) => correctAnswer === userAnswer;
  const JudgeArray: boolean[] = quizResults.map((result: QuizResuls, index: number) =>
    JudgeAnswer(GetCorrectAnswer(quizzes[index].attributes.quiz_choices)?.content, GetUserAnswer(quizzes[index].attributes.quiz_choices, result.select_answer))
  );
  const fetchData = async () => {
    const response = await useApi.get<any>(`/quiz_results/${id}`);
    setQuizResults(response.data);
  };
  const correctAnswersCount: number = JudgeArray.filter((answer) => answer).length;

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "scroll", position: "relative" }}>
      <Grid container direction="row" sx={{ minWidth: 360, maxWidth: 1000 }} margin="0 auto" justifyContent="center" alignItems="center" p={3}>
        <Grid item xs={12} textAlign="center" mb="20px">
          <Typography variant="h5" gutterBottom>
            クイズ結果
          </Typography>
        </Grid>
        <Grid item>
          <Box display="flex" justifyContent="center" alignItems="center" border="1px solid #C1BBBB" p="8px 16px" bgcolor="#ffeded">
            <Typography pr={2}>{`正解数 : ${correctAnswersCount}問/5問`}</Typography>
          </Box>
          <Stack spacing={2}>
            <List>
              {quizResults.map((result: QuizResuls, index: number) => (
                <ListItem key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", mb: "5px" }}>
                  <Typography variant="body1">問題{index + 1}.</Typography>
                  <ListItemText primary={quizzes[index].attributes.content} />
                  <Typography variant="body1">{`正解 : ${GetCorrectAnswer(quizzes[index].attributes.quiz_choices)?.content}`}</Typography>
                  <Box display="flex" alignItems="center">
                    <Typography pr={1} variant="body1">
                      ユーザーの回答 :{" "}
                    </Typography>
                    {JudgeArray[index] ? <PanoramaFishEyeIcon sx={{ color: "green" }} /> : <CheckIcon sx={{ color: "#c52f24" }} />}
                    <Typography pl={1} variant="body1">{`${GetUserAnswer(quizzes[index].attributes.quiz_choices, result.select_answer)}`}</Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Stack>
        </Grid>
      </Grid>
      <Box sx={{ position: "fixed", bottom: "40px", right: "40px" }}>
        <Button variant="contained" color="primary" component={RouterLink} to="/quizzes">
          問題一覧へ
        </Button>
      </Box>
    </Box>
  );
});
