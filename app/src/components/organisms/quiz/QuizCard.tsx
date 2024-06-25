import { FC, memo } from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Category } from "../../molecules/Category";

export const QuizCard: FC = memo(() => {
  return (
    <Card sx={{ maxWidth: 200, backgroundColor: "#ffeded" }}>
      <CardContent>
        <Typography variant="h6" component="div">
          タイトル名
        </Typography>
        <Category category={1} level={3} />
        <Typography variant="body2">クイズ問題の説明文</Typography>
      </CardContent>
      <CardActions sx={{ padding: "16px", justifyContent: "center" }}>
        <Button variant="contained" color="primary" component={RouterLink} to="/question">
          問題を解く
        </Button>
      </CardActions>
    </Card>
  );
});
