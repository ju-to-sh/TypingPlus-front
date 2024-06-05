import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FC, memo } from "react";

export const Top: FC = memo(() => {
  return (
    <>
      <h2>Topページです</h2>
      <Button variant="contained" color="primary" component={RouterLink} to="/games">
        問題を解く
      </Button>
    </>
  );
});
