import { Box, Grid, Typography } from "@mui/material";
import { FC, memo, useEffect } from "react";
import { TypingRecord } from "../organisms/study_record/TypingRecord";
import { StudyCalendar } from "../organisms/study_record/StudyCalendar";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchtTypingResultSelector, typingResultState } from "../../store/typingInfoState";
import { useApi } from "../../hooks/useApi";

export const StudyRecord: FC = memo(() => {
  const { id } = useParams();
  const fetchTyping = useRecoilValue(fetchtTypingResultSelector(id as string));
  const [typingResult, setTypingResult] = useRecoilState(typingResultState(id as string));

  const refreshData = async () => {
    try {
      const newData = await useApi.get(`/users/${id}/study_records`);
      setTypingResult(newData.data);
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  };
  useEffect(() => {
    setTypingResult(fetchTyping);
    refreshData();
  }, [fetchTyping, setTypingResult]);

  return (
    <Grid container direction="row" sx={{ minWidth: 370, maxWidth: 1000 }} margin="0 auto" p={3} justifyContent="center" alignItems="center">
      <Box sx={{ overflow: "scroll" }}>
        <Grid item xs={12} textAlign="center" pb={3} pt={3}>
          <Typography variant="h5" gutterBottom>
            学習記録
          </Typography>
        </Grid>
        <StudyCalendar typingResult={typingResult} />
        <Box p={4} />
        <Typography textAlign="center" pb={2}>
          タイピング実績
        </Typography>
        <TypingRecord typingResult={typingResult} />
      </Box>
    </Grid>
  );
});
