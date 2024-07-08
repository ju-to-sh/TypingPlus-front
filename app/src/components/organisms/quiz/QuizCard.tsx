import { FC, memo } from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Category } from "../../molecules/Category";

type Props = {
  id: string;
  title: string;
  game_type: number | string;
  content: string;
  level: number;
  category: number | string;
};

export const QuizCard: FC<Props> = memo((props) => {
  const { id, title, game_type, content, level, category } = props;

  return (
    <Card sx={{ width: "200px", height: "240px", backgroundColor: "#ffeded" }}>
      <CardContent sx={{ height: "180px" }}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Category category={category} level={level} />
        <Typography variant="body2">{content}</Typography>
      </CardContent>
      <CardActions sx={{ padding: "0 16px", justifyContent: "center" }}>
        {game_type === "quiz" ? (
          <Button variant="contained" color="primary" component={RouterLink} to={`/quizzes/${id}`}>
            問題を解く
          </Button>
        ) : (
          <Button variant="contained" color="secondary" component={RouterLink} to={`/typing_games/${id}`}>
            問題を解く
          </Button>
        )}
      </CardActions>
    </Card>
  );
});
